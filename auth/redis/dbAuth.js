//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of you
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
const redis = require("redis");
const { promisify } = require("util");
const { Cred, Key } = require("./auth");
const client = redis.createClient(REDIS_URL);
const getAsync = promisify(client.get).bind(client);
const { initAuthCreds, proto, BufferJSON } = require("@adiwajshing/baileys");

const KEY_MAP = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

const useRedisAuthState = async (logger) => {
  let creds;
  let keys = {};

  const checkCreds = async () => {
    const lock = await getAsync("noiseKey");
    if (lock) {
      return true;
    } else {
      return false;
    }
  };

  const loadCreds = async () => {
    const allCreds = await Cred.getById("allCreds");
    let temp = {};
    for (const key in allCreds) {
      temp[key] = allCreds[key];
    }
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
    const allKeys = await Key.getById("allKeys");
    for (const type in allKeys) {
      keys[type] = allKeys[type];
    }
    return keys;
  };

  const saveCreds = async (data) => {
    if (!data) {
      data = creds;
    }
    for (const _key in data) {
      await Cred.create(_key, data[_key]);
    }
  };

  const saveKey = async (key, data, _key) => {
    for (const subKey in data[_key]) {
      await Key.create(subKey, data[_key][subKey], key);
    }
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

module.exports = useRedisAuthState;
