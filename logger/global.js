//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("dotenv");
var fs = require("fs");
var sequelize = require("sequelize");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
}

var sudo = process.env.sudo;
global.NODE_ENV = process.env.NODE_ENV;
if (!sudo) sudo = "918436686758,917430922909";
global.upVersion = process.env.upVersion;
global.ShowLogger = process.env.ShowLogger;
global.ShowInfo = process.env.ShowInfo;
global.sudo = sudo.split(",");
global.PORT = process.env.PORT || 5000;
global.pgdb = process.env.pgdb;
global.prefix = process.env.prefix || "#";
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.upbranch = process.env.upbranch;
global.nameApi = {
  nrtm: "https://nurutomo.herokuapp.com",
  dzx: "https://api.dhamzxploit.my.id",
  xteam: "https://api.xteam.xyz",
  zahir: "https://zahirr-web.herokuapp.com",
  zeks: "https://api.zeks.xyz",
  pencarikode: "https://pencarikode.xyz",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.keyApi = {
  "https://api.xteam.xyz": "d90a9e986e18778b",
  "https://zahirr-web.herokuapp.com": "zahirgans",
  "https://api.zeks.xyz": "apivinz",
  "https://pencarikode.xyz": "pais",
  "https://leyscoders-api.herokuapp.com": "dappakntlll",
};
global.packname = "Synthia:v5";
global.author = "magneum";
global.name = "Synthia-Bot";
var Log = (value) => {
  var log = false;
  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      log = console.log;
    }
  }
  return log;
};
global.apiGet = (name, path = "/", query = {}, queryname) =>
  (name in global.nameApi ? global.nameApi[name] : name) +
  path +
  (query || queryname
    ? "?" +
      new URLSearchParams(
        Object.entries({
          ...query,
          ...(queryname
            ? {
                [queryname]:
                  global.keyApi[
                    name in global.nameApi ? global.nameApi[name] : name
                  ],
              }
            : {}),
        })
      )
    : "");
process.env.DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./VօxB໐t.db"
    : process.env.DATABASE_URL;
global.DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./VօxB໐t.db"
    : process.env.DATABASE_URL;
global.DATABASE =
  process.env.DATABASE_URL === "./VօxB໐t.db"
    ? new sequelize.Sequelize({
        dialect: "sqlite",
        storage: process.env.DATABASE_URL,
        logging: Log("false"),
      })
    : new sequelize.Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        logging: Log("false"),
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
      });
global.MONGO_URL = process.env.MONGO_URL;
global.REDIS_URL = process.env.REDIS_URL;
