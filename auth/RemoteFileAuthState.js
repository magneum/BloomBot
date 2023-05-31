require("@/logger/config");
var sequelize = DATABASE;
var chalk = require("chalk");
var logger = require("@/logger");
var { DataTypes, Model } = require("sequelize");
var { initAuthCreds, proto, BufferJSON } = require("@adiwajshing/baileys");

class Cred extends Model {}

Cred.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    modelName: "Cred",
    tableName: "Creds",
    timestamps: false,
  }
);

class Key extends Model {}

Key.init(
  {
    key: {
      type: DataTypes.STRING(1000000),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(1000000),
    },
    type: {
      type: DataTypes.STRING(1000000),
    },
  },
  {
    sequelize,
    modelName: "Key",
    tableName: "Keys",
    timestamps: false,
  }
);

var KEY_MAP = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

var RemoteFileAuthState = async () => {
  let creds;
  let keys = {};

  var checkCreds = async () => {
    var lock = await Cred.findOne({
      where: {
        key: "noiseKey",
      },
    });
    if (lock) {
      return true;
    } else {
      return false;
    }
  };

  var loadCreds = async () => {
    var allCreds = await Cred.findAll();
    let temp = {};
    allCreds.forEach((res) => {
      let val = res.getDataValue("value");
      let key = res.getDataValue("key");
      val = JSON.parse(val, BufferJSON.reviver);
      temp[key] = val;
    });

    return temp;
  };

  var loadKeys = async () => {
    let keys = {
      preKeys: {},
      sessions: {},
      senderKeys: {},
      appStateSyncKeys: {},
      appStateVersions: {},
      senderKeyMemory: {},
    };
    var allKeys = await Key.findAll();
    allKeys.forEach((res) => {
      let val = res.getDataValue("value");
      let key = res.getDataValue("key");
      let type = res.getDataValue("type");
      val = JSON.parse(val, BufferJSON.reviver);
      keys[type][key] = val;
    });

    return keys;
  };

  var saveCreds = async (data) => {
    if (!data) {
      logger.info("Saving all creds");
      data = creds;
    }
    for (var _key in data) {
      var cred = await Cred.findOne({
        where: {
          key: _key,
        },
      });
      if (cred) {
        await cred
          .update({
            value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
          })
          .then((res) => {
            if (logger.isEnabled()) {
              logger.info(`updated value ${_key}`);
            }
          })
          .catch((err) => {
            logger.error(chalk.whiteBright(err));
          });
      } else {
        await Cred.create({
          key: _key,
          value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
        })
          .then((res) => {
            if (logger.isEnabled()) {
              logger.info(`inserted value ${_key}`);
            }
          })
          .catch((err) => {
            logger.error(chalk.whiteBright(err));
          });
      }
    }
  };

  var saveKey = async (key, data, _key) => {
    for (var subKey in data[_key]) {
      if (logger.isEnabled()) {
        logger.info(`Trying to find key ${key} and subKey ${subKey}.`);
      }
      var res = await Key.findOne({
        where: {
          key: subKey,
          type: key,
        },
      });
      if (res) {
        await res
          .update({
            value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
          })
          .then((res) => {
            if (logger.isEnabled()) {
              logger.info(`updated key ${key} and subKey ${subKey}`);
            }
          })
          .catch((err) => {
            logger.error(chalk.blueBright(err));
          });
      } else {
        await Key.create({
          key: subKey,
          value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
          type: key,
        })
          .then((res) => {
            if (logger.isEnabled()) {
              logger.info(`inserted key ${key} and subKey ${subKey}`);
            }
          })
          .catch((err) => {
            logger.error(chalk.blueBright(err));
          });
      }
    }
    return;
  };

  let credsExist = await checkCreds();
  if (credsExist) {
    if (logger.isEnabled()) {
      logger.info("loading values back.");
    }
    let parent = {
      creds: {},
      keys: {},
    };
    var allCreds = await loadCreds();
    var allKeys = await loadKeys();

    parent.creds = allCreds;
    parent.keys = allKeys;

    var final = JSON.parse(JSON.stringify(parent), BufferJSON.reviver);
    if (logger.isEnabled()) {
      logger.info(final);
    }
    creds = final.creds;
    keys = final.keys;
  } else {
    creds = initAuthCreds();
    keys = {};
    saveCreds();
  }

  return {
    state: {
      creds,
      keys: {
        get: (type, ids) => {
          var key = KEY_MAP[type];
          return ids.reduce((dict, id) => {
            let _a;
            let value =
              (_a = keys[key]) === null || _a === undefined
                ? undefined
                : _a[id];
            if (value) {
              if (type === "app-state-sync-key") {
                value = proto.AppStateSyncKeyData.fromObject(value);
              }
              dict[id] = value;
            }
            return dict;
          }, {});
        },
        set: async (data) => {
          for (var _key in data) {
            var key = KEY_MAP[_key];
            if (logger.isEnabled()) {
              logger.info(
                `Got raw key - ${_key} and got mapped key ${key}. The value is ${data[_key]}`
              );
            }
            keys[key] = keys[key] || {};
            Object.assign(keys[key], data[_key]);
            await saveKey(key, data, _key);
          }
        },
      },
    },
    saveCreds,
  };
};

module.exports = RemoteFileAuthState;
