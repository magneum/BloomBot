// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("dotenv");
var fs = require("fs");
var chalk = require("chalk");
var sequelize = require("sequelize");
var { createClient } = require("redis");
const { QuickDB, MySQLDriver } = require("quick.db");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var sudo = process.env.sudo;
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
    ? "./ѕуηтнiα.db"
    : process.env.DATABASE_URL;
global.DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./ѕуηтнiα.db"
    : process.env.DATABASE_URL;
global.DATABASE =
  process.env.DATABASE_URL === "./ѕуηтнiα.db"
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
// (async () => {
// const mysqlDriver = new MySQLDriver({
// host: process.env.MYSQLHOST,
// user: process.env.MYSQLUSER,
// password: process.env.MYSQLPASSWORD,
// database: process.env.MYSQLDATABASE,
// });

// await mysqlDriver.connect();
// global.db = new QuickDB({ driver: mysqlDriver });
// })();
global.MONGO_URL = process.env.MONGO_URL;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
