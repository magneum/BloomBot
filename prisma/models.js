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
require("../global");
const path = require("path");
const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");

let models;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const AntilinkSchema = new mongoose.Schema({
      serverID: String,
      value: String,
    });
    const AutorankSchema = new mongoose.Schema({
      serverID: String,
    });
    const BadgeSchema = new mongoose.Schema({
      ID: String,
      Badge: String,
      value: String,
      Limits: Number,
      CurrentLimitTime: Number,
      PermanentLimitTime: Number,
    });
    const BanSchema = new mongoose.Schema({
      ID: String,
    });
    const CooldownSchema = new mongoose.Schema({
      ID: String,
      Duration: Number,
    });
    const DebugSchema = new mongoose.Schema({
      value: String,
    });
    const EconomySchema = new mongoose.Schema({
      ID: String,
      money: Number,
      daily: Number,
      timeout: Number,
      fishdone: Number,
      fishtimeout: Number,
      workdone: Number,
      worktimeout: Number,
    });
    const ExperienceSchema = new mongoose.Schema({
      ID: String,
      serverID: String,
      xp: Number,
      level: Number,
    });
    const GambleSchema = new mongoose.Schema({
      ID: String,
      serverID: String,
      Gambledone: Number,
      Gambletimeout: Number,
    });
    const HaltSchema = new mongoose.Schema({
      ID: String,
      TimeOut: Number,
      PermaTimeOut: Number,
    });
    const NSFWSchema = new mongoose.Schema({
      serverID: String,
      value: String,
    });
    const PokemonSchema = new mongoose.Schema({
      ID: String,
      CurrentLimitTime: Number,
      PermanentLimitTime: Number,
    });
    const PrivateSchema = new mongoose.Schema({
      ID: String,
      Amount: Number,
    });
    const RobberySchema = new mongoose.Schema({
      ID: String,
      lightsaber: Number,
      arclock: Number,
      ninja: Number,
      CurrentRobberyTime: Number,
      PermanentRobberyTime: Number,
    });
    const ServerDBSchema = new mongoose.Schema({
      ServerID: String,
    });
    const WelcomeSchema = new mongoose.Schema({
      ID: String,
      message: String,
    });
    const VimiumSchema = new mongoose.Schema({
      ID: String,
      Limits: Number,
      currTime: Number,
      permTime: Number,
    });
    const WarningSchema = new mongoose.Schema({
      ID: String,
      serverID: String,
      warns: Number,
    });
    const ZooSchema = new mongoose.Schema({
      ID: String,
      zoodone: Number,
      zootimeout: Number,
    });

    models = {
      Antilink: mongoose.model("Antilink", AntilinkSchema),
      Autorank: mongoose.model("Autorank", AutorankSchema),
      Badge: mongoose.model("Badge", BadgeSchema),
      Ban: mongoose.model("Ban", BanSchema),
      Cooldown: mongoose.model("Cooldown", CooldownSchema),
      Debug: mongoose.model("Debug", DebugSchema),
      Economy: mongoose.model("Economy", EconomySchema),
      Experience: mongoose.model("Experience", ExperienceSchema),
      Gamble: mongoose.model("Gamble", GambleSchema),
      Halt: mongoose.model("Halt", HaltSchema),
      NSFW: mongoose.model("NSFW", NSFWSchema),
      Pokemon: mongoose.model("Pokemon", PokemonSchema),
      Private: mongoose.model("Private", PrivateSchema),
      Robbery: mongoose.model("Robbery", RobberySchema),
      ServerDB: mongoose.model("ServerDB", ServerDBSchema),
      Welcome: mongoose.model("Welcome", WelcomeSchema),
      Vimium: mongoose.model("Vimium", VimiumSchema),
      Warning: mongoose.model("Warning", WarningSchema),
      Zoo: mongoose.model("Zoo", ZooSchema),
    };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

const connectToSQLDatabase = async () => {
  try {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: path.join(__dirname, "sqlite.db"),
    });
    await sequelize.authenticate();
    console.log("Connected to SQL database");

    const Antilink = sequelize.define("Antilink", {
      serverID: Sequelize.STRING,
      value: Sequelize.STRING,
    });
    const Autorank = sequelize.define("Autorank", {
      serverID: Sequelize.STRING,
    });

    const Badge = sequelize.define("Badge", {
      ID: Sequelize.STRING,
      Badge: Sequelize.STRING,
      value: Sequelize.STRING,
      Limits: Sequelize.INTEGER,
      CurrentLimitTime: Sequelize.INTEGER,
      PermanentLimitTime: Sequelize.INTEGER,
    });
    const Ban = sequelize.define("Ban", {
      ID: Sequelize.STRING,
    });
    const Cooldown = sequelize.define("Cooldown", {
      ID: Sequelize.STRING,
      Duration: Sequelize.INTEGER,
    });
    const Debug = sequelize.define("Debug", {
      value: Sequelize.STRING,
    });
    const Economy = sequelize.define("Economy", {
      ID: Sequelize.STRING,
      money: Sequelize.INTEGER,
      daily: Sequelize.INTEGER,
      timeout: Sequelize.INTEGER,
      fishdone: Sequelize.INTEGER,
      fishtimeout: Sequelize.INTEGER,
      workdone: Sequelize.INTEGER,
      worktimeout: Sequelize.INTEGER,
    });
    const Experience = sequelize.define("Experience", {
      ID: Sequelize.STRING,
      serverID: Sequelize.STRING,
      xp: Sequelize.INTEGER,
      level: Sequelize.INTEGER,
    });
    const Gamble = sequelize.define("Gamble", {
      ID: Sequelize.STRING,
      serverID: Sequelize.STRING,
      Gambledone: Sequelize.INTEGER,
      Gambletimeout: Sequelize.INTEGER,
    });
    const Halt = sequelize.define("Halt", {
      ID: Sequelize.STRING,
      TimeOut: Sequelize.INTEGER,
      PermaTimeOut: Sequelize.INTEGER,
    });
    const NSFW = sequelize.define("NSFW", {
      serverID: Sequelize.STRING,
      value: Sequelize.STRING,
    });
    const Pokemon = sequelize.define("Pokemon", {
      ID: Sequelize.STRING,
      CurrentLimitTime: Sequelize.INTEGER,
      PermanentLimitTime: Sequelize.INTEGER,
    });
    const Private = sequelize.define("Private", {
      ID: Sequelize.STRING,
      Amount: Sequelize.INTEGER,
    });
    const Robbery = sequelize.define("Robbery", {
      ID: Sequelize.STRING,
      lightsaber: Sequelize.INTEGER,
      arclock: Sequelize.INTEGER,
      ninja: Sequelize.INTEGER,
      CurrentRobberyTime: Sequelize.INTEGER,
      PermanentRobberyTime: Sequelize.INTEGER,
    });
    const ServerDB = sequelize.define("ServerDB", {
      ServerID: Sequelize.STRING,
    });
    const Welcome = sequelize.define("Welcome", {
      ID: Sequelize.STRING,
      message: Sequelize.STRING,
    });
    const Vimium = sequelize.define("Vimium", {
      ID: Sequelize.STRING,
      Limits: Sequelize.INTEGER,
      currTime: Sequelize.INTEGER,
      permTime: Sequelize.INTEGER,
    });
    const Warning = sequelize.define("Warning", {
      ID: Sequelize.STRING,
      serverID: Sequelize.STRING,
      warns: Sequelize.INTEGER,
    });
    const Zoo = sequelize.define("Zoo", {
      ID: Sequelize.STRING,
      zoodone: Sequelize.INTEGER,
      zootimeout: Sequelize.INTEGER,
    });

    models = {
      Antilink,
      Autorank,
      Badge,
      Ban,
      Cooldown,
      Debug,
      Economy,
      Experience,
      Gamble,
      Halt,
      NSFW,
      Pokemon,
      Private,
      Robbery,
      ServerDB,
      Welcome,
      Vimium,
      Warning,
      Zoo,
    };

    await sequelize.sync();
  } catch (error) {
    console.error("Failed to connect to SQL database:", error);
  }
};

if (NODE_ENV === "production") {
  connectToMongoDB();
} else {
  connectToSQLDatabase();
}

module.exports = models;
