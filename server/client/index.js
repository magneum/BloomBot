"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
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
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("../../module-alias.js");
require("@/config/index.js");
const fs = require("fs");
const pino = require("pino");
const chalk = require("chalk");
const { say } = require("cfonts");
const mogclient = require("mongoose");
const logger = require("@/log/index.js");
const dbdata = require("@/config/dbdata.js");
const BloomAuthy = require("@/auth/BloomAuthy.js");
const mFolders = fs.readdirSync("./server/commands");
const {
  default: BloomerClient,
  useMultiFileAuthState,
  makeInMemoryStore,
} = require("@whiskeysockets/baileys");

process.env.NODE_NO_WARNINGS = "1";
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  console.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
say("BloomBot\nwhatsApp Multi Device\nUser bot", {
  font: "chrome",
  align: "center",
  gradient: ["red", "yellow"],
});
say(`~ by Magneum™`, {
  font: "console",
  align: "center",
  gradient: ["green", "red"],
});

function showCommands(path) {
  say("Loading Commands From Folders", {
    font: "console",
    align: "left",
    gradient: ["red", "blue"],
  });
  const specialFolders = [
    "⚙️System",
    "⭕YTFilter",
    "🍁Owner",
    "🍑Hentai",
    "🐉Emotions",
    "👅NSFW",
    "💗Commands",
    "💰Games",
    "📢aFilter",
    "📥Downloader",
    "📼Conversion",
    "🔎Searches",
    "🔰Group",
    "🖼️Photogenic",
    "🦄SFW",
  ];
  for (const cFolder of mFolders) {
    const cFiles = fs
      .readdirSync(`./${path}/${cFolder}`)
      .filter((file) => file.endsWith(""));
    if (specialFolders.includes(cFolder)) {
      console.log(
        chalk.bgGreen(chalk.black("> " + cFolder)),
        chalk.yellow("  | " + cFiles)
      );
    }
  }
}
async function magneum() {
  const sequelize = dbdata.DATABASE;
  logger.info("📢 Connecting to Mongodb() database...");
  try {
    await mogclient.connect(dbdata.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("📢 Connected with mongoose.");
  } catch (error) {
    logger.error("❌ Unable to Connect with Mongodb():", error);
    process.exit(0);
  }
  logger.info("📢 Connecting to Sequelize() database...");
  try {
    await sequelize.authenticate();
    logger.info("📢 Connection has been established successfully.");
  } catch (error) {
    logger.error("❌ Unable to connect to the Sequelize():", error);
    process.exit(0);
  }
  logger.info("📢 Syncing Sequelize() Database...");
  await sequelize.sync();
  const store = makeInMemoryStore({
    logger: pino().child({ level: "error", stream: "store" }),
  });
  let state, saveCreds;
  try {
    ({ state, saveCreds } = await BloomAuthy());
  } catch (error) {
    ({ state, saveCreds } = await useMultiFileAuthState("application"));
  }
  const BloomBot = BloomerClient({
    auth: state,
    syncFullHistory: true,
    fireInitQueries: true,
    downloadHistory: true,
    printQRInTerminal: true,
    logger: pino({ level: "silent" }),
    shouldSyncHistoryMessage: true,
    defaultQueryTimeoutMs: undefined,
    browser: Browsers.macOS("Desktop"),
    generateHighQualityLinkPreview: true,
    // browser: ["BloomBot", "Chrome", "1.0.0"],
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return;
    },
  });
  store.bind(BloomBot.ev);
  await require("./brain.js")(BloomBot);
  await require("@/events/connection_update")(BloomBot, magneum, logger);
  await require("@/events/messages_upsert")(BloomBot, store, logger);
  await require("@/events/group_participants_update")(BloomBot, store, logger);
  await require("@/events/cb_call")(BloomBot, store, logger);
  await require("@/events/contacts_update")(BloomBot, store, logger);
  await require("@/events/creds_update")(BloomBot, saveCreds, logger);
}
showCommands("server/commands");
magneum().catch(async (error) => logger.error(error));
