const { initAuthCreds, proto } = require("@adiwajshing/baileys");
const { Cred, Key } = require("../database/auth");

const KEY_MAP = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

const useRemoteFileAuthState = async (logger) => {
  const { readFileSync, writeFileSync, existsSync } = require("fs");
  let creds;
  let keys = {};

  const checkCreds = async () => {
    const lock = await Cred.findOne({
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

  const loadCreds = async () => {
    const allCreds = await Cred.findAll();
    let temp = {};
    allCreds.forEach((res) => {
      let val = res.getDataValue("value");
      let key = res.getDataValue("key");
      val = JSON.parse(val, BufferJSON.reviver);
      temp[key] = val;
    });

    return temp;
  };

  const loadKeys = async () => {
    let keys = {
      preKeys: {},
      sessions: {},
      senderKeys: {},
      appStateSyncKeys: {},
      appStateVersions: {},
      senderKeyMemory: {},
    };
    const allKeys = await Key.findAll();
    allKeys.forEach((res) => {
      let val = res.getDataValue("value");
      let key = res.getDataValue("key");
      let type = res.getDataValue("type");
      val = JSON.parse(val, BufferJSON.reviver);
      keys[type][key] = val;
    });

    return keys;
  };

  const saveCreds = async (data) => {
    if (!data) {
      data = creds;
    }
    for (const _key in data) {
      const cred = await Cred.findOne({
        where: {
          key: _key,
        },
      });
      if (cred) {
        await cred.update({
          value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
        });
      } else {
        await Cred.create({
          key: _key,
          value: JSON.stringify(data[_key], BufferJSON.replacer, 2),
        });
      }
    }
  };

  const saveKey = async (key, data, _key) => {
    for (const subKey in data[_key]) {
      const res = await Key.findOne({
        where: {
          key: subKey,
          type: key,
        },
      });
      if (res) {
        await res.update({
          value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
        });
      } else {
        await Key.create({
          key: subKey,
          value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2),
          type: key,
        });
      }
    }
    return;
  };

  let credsExist = await checkCreds();
  if (credsExist) {
    let parent = {
      creds: {},
      keys: {},
    };
    const allCreds = await loadCreds();
    const allKeys = await loadKeys();

    parent.creds = allCreds;
    parent.keys = allKeys;

    const final = JSON.parse(JSON.stringify(parent), BufferJSON.reviver);
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
          const key = KEY_MAP[type];
          return ids.reduce((dict, id) => {
            let _a;
            let value =
              (_a = keys[key]) === null || _a === void 0 ? void 0 : _a[id];
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
          for (const _key in data) {
            const key = KEY_MAP[_key];
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

module.exports = useRemoteFileAuthState;
