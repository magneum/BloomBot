//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/config");
var sequelize = DATABASE;
var logger = require("@/logger");
var debugEnabled = verbose === "1";
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

var remote_authstate = async () => {
  let creds;
  let keys = {};

  var checkCreds = async () => {
    var lock = await Cred.findOne({
      where: {
        key: "noiseKey",
      },
    });
    return lock !== null;
  };

  var loadCreds = async () => {
    var allCreds = await Cred.findAll();
    var temp = {};
    allCreds.forEach((res) => {
      var val = res.getDataValue("value");
      var key = res.getDataValue("key");
      var parsedVal = JSON.parse(val, BufferJSON.reviver);
      temp[key] = parsedVal;
    });

    return temp;
  };

  var loadKeys = async () => {
    var keys = {
      preKeys: {},
      sessions: {},
      senderKeys: {},
      appStateSyncKeys: {},
      appStateVersions: {},
      senderKeyMemory: {},
    };
    var allKeys = await Key.findAll();
    allKeys.forEach((res) => {
      var val = res.getDataValue("value");
      var key = res.getDataValue("key");
      var type = res.getDataValue("type");
      var parsedVal = JSON.parse(val, BufferJSON.reviver);
      keys[type][key] = parsedVal;
    });

    return keys;
  };

  var saveCreds = async (data) => {
    if (!data) {
      debugEnabled ? logger.info("Saving all creds") : null;
      data = creds;
    }
    for (var _key in data) {
      let cred = await Cred.findOne({
        where: {
          key: _key,
        },
      });
      if (cred) {
        cred = await cred.update({
          value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
        });
        debugEnabled ? logger.info(`updated value ${_key}`) : null;
      } else {
        cred = await Cred.create({
          key: _key,
          value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
        });
        debugEnabled ? logger.info(`inserted value ${_key}`) : null;
      }
    }
  };

  var saveKey = async (key, data, _key) => {
    for (var subKey in data[_key]) {
      debugEnabled
        ? logger.info(`Trying to find key ${key} and subKey ${subKey}.`)
        : null;
      let res = await Key.findOne({
        where: {
          key: subKey,
          type: key,
        },
      });
      if (res) {
        res = await res.update({
          value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
        });
        debugEnabled
          ? logger.info(`updated key ${key} and subKey ${subKey}`)
          : null;
      } else {
        res = await Key.create({
          key: subKey,
          value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
          type: key,
        });
        debugEnabled
          ? logger.info(`inserted key ${key} and subKey ${subKey}`)
          : null;
      }
    }
  };

  var credsExist = await checkCreds();
  if (credsExist) {
    debugEnabled ? logger.info("loading values back.") : null;
    var parent = {
      creds: {},
      keys: {},
    };
    var allCreds = await loadCreds();
    var allKeys = await loadKeys();

    parent.creds = allCreds;
    parent.keys = allKeys;

    var final = JSON.parse(JSON.stringify(parent), BufferJSON.reviver);
    debugEnabled ? logger.info(final) : null;
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
            let value = keys[key]?.[id];
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

            debugEnabled
              ? logger.info(
                  `Got raw key - ${_key} and got mapped key ${key}. The value is ${data[_key]}`
                )
              : null;
            keys[key] = keys[key] || {};
            Object.assign(keys[key], data[_key]);
            await saveKey(key, data, _key);
          }
          saveState();
        },
      },
    },
    saveCreds,
  };
};

module.exports = remote_authstate;
