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
require("../module-alias");
require("@/config");
const logger = require("@/log");
const gitPull = require("@/utils/gitPull");
const {
  default: Bloom_bot_client,
  makeInMemoryStore,
} = require("@adiwajshing/baileys");
const pino = require("pino");
const monGoose = require("mongoose");
const dbConfig = require("@/config/dbConfig");
const { fetchJson } = require("@/server/obFunc");
const useSqlAuthState = require("@/auth/sql/dbAuth");

async function magneum() {
  const sequelize = dbConfig.DATABASE;
  logger.info("📢 Connecting to Mongodb() database...");
  try {
    await monGoose.connect(MONGODB_URL, {
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
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  const getVersionWaweb = () => {
    let version;
    try {
      const a = fetchJson(
        "web.whatsapp.com/check-update?version=1&platform=web"
      );
      version = [a.currentVersion.replace(/[.]/g, ", ")];
    } catch {
      version = [2, 2204, 13];
    }
    return version;
  };

  let { state, saveCreds } = await useSqlAuthState();
  const BloomBot = Bloom_bot_client({
    auth: state,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: ["BloomBot-by-magneum", "Chrome", "4.0.0"],
    version: getVersionWaweb() || [2, 2242, 6],
    fireInitQueries: false,
    downloadHistory: false,
    syncFullHistory: false,
    shouldSyncHistoryMessage: false,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return {
        conversation: "An Error Occurred, Repeat Command!",
      };
    },
  });
  store.bind(BloomBot.ev);
  require("./bExts")(BloomBot);
  require("@/events/cb_call")(BloomBot, store, logger);
  require("@/events/contacts_update")(BloomBot, store, logger);
  require("@/events/messages_upsert")(BloomBot, store, logger);
  require("@/events/creds_update")(BloomBot, saveCreds, logger);
  require("@/events/connection_update")(BloomBot, magneum, logger);
  require("@/events/group_participants_update")(BloomBot, store, logger);

  setInterval(async () => {
    const _Type = [
      "🎭Designer",
      "🌏Inventor",
      "🎨Creator",
      "🎉Founder",
      "🐞Innovator",
      "🏗️Builder",
      "🖊️Author",
      "💡Maker",
      "🎤Speaker",
      "🎬Director",
      "🎼Musician",
      "📷Photographer",
      "🎮Gamer",
      "🎯Strategist",
      "📚Educator",
      "🔬Scientist",
      "👩‍💻Programmer",
      "🎓Researcher",
      "📺TV host",
      "🎤Singer",
      "🎥Filmmaker",
      "🎧Audio engineer",
      "🎪Circus performer",
      "🧪Chemist",
      "🗺️Cartographer",
      "🎢Roller coaster designer",
      "🎁Gift wrapper",
      "🚀Space explorer",
      "🔮Psychic",
      "🌳Environmentalist",
      "🎟️Ticket collector",
      "🍽️Chef",
      "📈Financial analyst",
      "🧩Puzzle solver",
      "🌌Astronomer",
      "🔍Investigator",
      "🎭Actor",
      "🌋Volcanologist",
      "🔐Locksmith",
      "🎡Amusement park designer",
      "🏰Architect",
      "📓Journalist",
      "📡Radio host",
      "🎭Mime artist",
      "🎮Game tester",
      "🚒Firefighter",
      "🚁Pilot",
      "🎾Tennis player",
      "⚖️Lawyer",
      "🎧DJ",
      "📻Radio presenter",
      "🍳Cook",
      "🏇Jockey",
      "🔧Mechanic",
      "🎪Acrobat",
      "🎯Archer",
      "🎬Stunt performer",
      "🛠️Handyman",
    ];
    const __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
    await BloomBot.updateProfileStatus(
      "Feeling: " + __Feeling + " (ⒸBloomBot by Magneum™)"
    );
  }, 300 * 1000);
  // setInterval(async () => {
  // await BloomBot.updateProfilePicture("120363020792949649@g.us", {
  // url: BloomBot.display,
  // });
  // }, 120 * 1000);
  setInterval(async () => {
    gitPull();
  }, 120 * 1000);
}
magneum().catch((error) => logger.error(error));
