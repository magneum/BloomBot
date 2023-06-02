"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const mongoose = require("mongoose");
const { MONGODB_URL } = require("@/config/idbConfig");
const { initAuthCreds, proto, BufferJSON } = require("@adiwajshing/baileys");

const { Schema } = mongoose;
const CredSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: Schema.Types.Mixed,
  },
});

const KeySchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: Schema.Types.Mixed,
  },
  type: {
    type: String,
  },
});

const Cred = mongoose.model("Cred", CredSchema, "Creds");
const Key = mongoose.model("Key", KeySchema, "Keys");

const key_mapper = {
  "pre-key": "preKeys",
  session: "sessions",
  "sender-key": "senderKeys",
  "app-state-sync-key": "appStateSyncKeys",
  "app-state-sync-version": "appStateVersions",
  "sender-key-memory": "senderKeyMemory",
};

const MongoBloomAuthy = async () => {
  await mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let creds = {};
  let keys = {};

  const checkCreds = async () => {
    const lock = await Cred.exists({ key: "noiseKey" });
    return lock;
  };

  const loadCreds = async () => {
    const allCreds = await Cred.find();
    let temp = {};
    allCreds.forEach((res) => {
      let val = res.value;
      let key = res.key;
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
    const allKeys = await Key.find();
    allKeys.forEach((res) => {
      let val = res.value;
      let key = res.key;
      let type = res.type;
      keys[type][key] = val;
    });

    return keys;
  };

  const saveCreds = async (data) => {
    if (!data) {
      data = creds;
    }
    for (const _key in data) {
      await Cred.findOneAndUpdate(
        { key: _key },
        { value: JSON.stringify(data[_key], BufferJSON.replacer, 2) },
        { upsert: true },
      );
    }
  };

  const saveKey = async (key, data, _key) => {
    for (const subKey in data[_key]) {
      await Key.findOneAndUpdate(
        { key: subKey, type: key },
        { value: JSON.stringify(data[_key][subKey], BufferJSON.replacer, 2) },
        { upsert: true },
      );
    }
  };

  let credsExist = await checkCreds();
  if (credsExist) {
    const allCreds = await loadCreds();
    const allKeys = await loadKeys();
    creds = allCreds;
    keys = allKeys;
  } else {
    creds = initAuthCreds();
    keys = {};
    await saveCreds();
  }

  return {
    state: {
      creds,
      keys: {
        get: (type, ids) => {
          const key = key_mapper[type];
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
          for (const _key in data) {
            const key = key_mapper[_key];
            keys[key] = keys[key] || {};
            Object.assign(keys[key], data[_key]);
            await saveKey(key, data, _key);
          }
        },
      },
    },
  };
};

module.exports = MongoBloomAuthy;
