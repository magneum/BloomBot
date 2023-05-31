require("@/logger/config");
const redis = require("redis");
const logger = require("@/logger");
const debugEnabled = process.env.VERBOSE === "1";
const { initAuthCreds, proto, BufferJSON } = require("@adiwajshing/baileys");

const KEY_MAP = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

// Create Redis client
const redisClient = redis.createClient(REDIS_URL);

const Reddis_RemoteFileAuthState = async () => {
  let creds;
  let keys = {};

  const checkCreds = async () => {
    return new Promise((resolve, reject) => {
      redisClient.exists("noiseKey", (err, exists) => {
        if (err) {
          reject(err);
        } else {
          resolve(exists === 1);
        }
      });
    });
  };

  const loadCreds = async () => {
    return new Promise((resolve, reject) => {
      redisClient.hgetall("Creds", (err, data) => {
        if (err) {
          reject(err);
        } else {
          const temp = {};
          for (const key in data) {
            const val = data[key];
            const parsedVal = JSON.parse(val, BufferJSON.reviver);
            temp[key] = parsedVal;
          }
          resolve(temp);
        }
      });
    });
  };

  const loadKeys = async () => {
    return new Promise((resolve, reject) => {
      redisClient.hgetall("Keys", (err, data) => {
        if (err) {
          reject(err);
        } else {
          const keys = {
            preKeys: {},
            sessions: {},
            senderKeys: {},
            appStateSyncKeys: {},
            appStateVersions: {},
            senderKeyMemory: {},
          };
          for (const key in data) {
            const val = data[key];
            const [type, subKey] = key.split(":");
            const parsedVal = JSON.parse(val, BufferJSON.reviver);
            keys[type][subKey] = parsedVal;
          }
          resolve(keys);
        }
      });
    });
  };

  const saveCreds = async (data) => {
    if (!data) {
      debugEnabled ? logger.debug("Saving all creds") : null;
      data = creds;
    }
    for (const key in data) {
      const value = JSON.stringify(data[key], BufferJSON.replacer, 2);
      redisClient.hset("Creds", key, value, (err) => {
        if (err) {
          logger.error(`Failed to save cred ${key}`);
        } else {
          debugEnabled ? logger.debug(`Saved cred ${key}`) : null;
        }
      });
    }
  };

  const saveKey = async (type, data, _key) => {
    for (const subKey in data[_key]) {
      const key = `${type}:${subKey}`;
      const value = JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2);
      redisClient.hset("Keys", key, value, (err) => {
        if (err) {
          logger.error(`Failed to save key ${key}`);
        } else {
          debugEnabled ? logger.debug(`Saved key ${key}`) : null;
        }
      });
    }
  };

  const credsExist = await checkCreds();
  if (credsExist) {
    debugEnabled ? logger.debug("Loading values back.") : null;
    const parent = {
      creds: {},
      keys: {},
    };
    const allCreds = await loadCreds();
    const allKeys = await loadKeys();

    parent.creds = allCreds;
    parent.keys = allKeys;

    const final = JSON.parse(JSON.stringify(parent), BufferJSON.reviver);
    debugEnabled ? logger.debug(final) : null;
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
            const value = keys[key]?.[id];
            if (value) {
              if (type === "app-state-sync-key") {
                dict[id] = proto.AppStateSyncKeyData.fromObject(value);
              } else {
                dict[id] = value;
              }
            }
            return dict;
          }, {});
        },
        set: async (data) => {
          for (const key in data) {
            const mappedKey = KEY_MAP[key];
            keys[mappedKey] = keys[mappedKey] || {};
            Object.assign(keys[mappedKey], data[key]);
            await saveKey(mappedKey, data, key);
          }
          saveCreds();
        },
      },
    },
    saveCreds,
  };
};

module.exports = Reddis_RemoteFileAuthState;
