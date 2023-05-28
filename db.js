//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("./global.js");
const logger = require("./logger");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
const redis = require("redis");
const mongoose = require("mongoose");
const { promisify } = require("util");

const connectToMongoDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost/mydatabase";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const connectToRedis = () => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient(
      process.env.REDIS_URL || "redis://localhost:6379"
    );
    redisClient.on("connect", () => {
      logger.info("Connected to Redis");
      resolve(redisClient);
    });
    redisClient.on("error", (error) => {
      logger.error("Error connecting to Redis:", error);
      reject(error);
    });
  });
};

const initializeDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      await connectToMongoDB();
    }

    if (!process.env.REDIS_URL) {
      const redisClient = await connectToRedis();
      const asyncGet = promisify(redisClient.get).bind(redisClient);
      const asyncSet = promisify(redisClient.set).bind(redisClient);

      return { redisClient, asyncGet, asyncSet };
    }

    return {};
  } catch (error) {
    logger.error("Error initializing database:", error);
    process.exit(1);
  }
};

const initializeModels = () => {
  const Autorank = mongoose.model("Autorank", {
    serverID: String,
  });

  const Antilink = mongoose.model("Antilink", {
    serverID: String,
    value: String,
  });

  return {
    Autorank,
    Antilink,
  };
};

(async () => {
  const database = await initializeDatabase();
  const models = initializeModels();

  module.exports = {
    ...models,
    ...database,
  };
})();
