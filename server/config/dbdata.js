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
const fs = require("fs");
const chalk = require("chalk");
const { Sequelize } = require("sequelize");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
} else {
  require("dotenv");
}

const convertToLogLevel = (value) => {
  let log = false;
  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      log = (message) =>
        console.log(
          chalk.bgGreen.black.bold(" Auth-db Logs:") +
            " " +
            chalk.reset(message),
        );
    }
  }
  return log;
};

process.env.DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./app/database/sql/auth.db"
    : process.env.DATABASE_URL;
process.env.DEBUG =
  process.env.DEBUG === undefined ? "false" : process.env.DEBUG;

const dbdata = {
  MONGODB_URL: process.env.MONGODB_URL || undefined,
  DATABASE_URL:
    process.env.DATABASE_URL === undefined
      ? "./app/database/sql/auth.db"
      : process.env.DATABASE_URL,
  DEBUG: process.env.DEBUG === undefined ? false : process.env.DEBUG,
  DATABASE:
    process.env.DATABASE_URL === "./app/database/sql/auth.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: process.env.DATABASE_URL,
          logging:
            process.env.VERBOSE_MODE === "debug"
              ? convertToLogLevel("true")
              : convertToLogLevel("false"),
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: "postgres",
          protocol: "postgres",
          logging:
            process.env.VERBOSE_MODE === "debug"
              ? convertToLogLevel("true")
              : convertToLogLevel("false"),
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
};

module.exports = dbdata;
