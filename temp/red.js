require("@/logger/config");
const { initAuthCreds, proto, BufferJSON } = require("@adiwajshing/baileys");
const redis = require("redis");
const client = redis.createClient({
  url: REDIS_URL,
});

const KEY_MAP = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

const RemoteFileAuthState = async (logger) => {
  let creds;
  let keys = {};

  var checkCreds = async () => {
    return new Promise((resolve, reject) => {
      client.exists("noiseKey", (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply === 1);
        }
      });
    });
  };

  var loadCreds = async () => {
    return new Promise((resolve, reject) => {
      client.hgetall("creds", (err, reply) => {
        if (err) {
          reject(err);
        } else {
          let temp = {};
          for (let key in reply) {
            let val = JSON.parse(reply[key], BufferJSON.reviver);
            temp[key] = val;
          }
          resolve(temp);
        }
      });
    });
  };

  var loadKeys = async () => {
    return new Promise((resolve, reject) => {
      client.hgetall("keys", (err, reply) => {
        if (err) {
          reject(err);
        } else {
          let tempKeys = {
            preKeys: {},
            sessions: {},
            senderKeys: {},
            appStateSyncKeys: {},
            appStateVersions: {},
            senderKeyMemory: {},
          };
          for (let key in reply) {
            let val = JSON.parse(reply[key], BufferJSON.reviver);
            let type = reply[key].split(":")[0];
            let subKey = reply[key].split(":")[1];
            tempKeys[type][subKey] = val;
          }
          resolve(tempKeys);
        }
      });
    });
  };

  var saveCreds = async (data) => {
    if (!data) {
      logger.info("Saving all credentials");
      data = creds;
    }
    for (var _key in data) {
      await client.hset(
        "creds",
        _key,
        JSON.stringify(data[_key], BufferJSON.replacer, 2)
      );
      logger.info(`Saved credential: ${_key}`);
    }
  };

  var saveKey = async (key, data, _key) => {
    for (var subKey in data[_key]) {
      let redisKey = `${key}:${subKey}`;
      await client.hset(
        "keys",
        redisKey,
        JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2)
      );
      logger.info(`Saved key: ${redisKey}`);
    }
  };

  let credsExist = await checkCreds();
  if (credsExist) {
    logger.info("Loading values from Redis.");
    let parent = {
      creds: {},
      keys: {},
    };
    var allCreds = await loadCreds();
    var allKeys = await loadKeys();

    parent.creds = allCreds;
    parent.keys = allKeys;

    var final = JSON.parse(JSON.stringify(parent), BufferJSON.reviver);
    logger.info("Loaded values:", final);
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
            logger.info(
              `Received raw key: ${_key}, mapped key: ${key}, value: ${data[_key]}`
            );
            keys[key] = keys[key] || {};
            Object.assign(keys[key], data[_key]);
            await saveKey(key, data, _key);
          }
          // saveState();
        },
      },
    },
    saveCreds,
  };
};

module.exports = RemoteFileAuthState;
