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
require("dotenv");
const fs = require("fs");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
} else {
  require("dotenv");
}

let sudo = process.env.SUDO;
if (!sudo) sudo = "918436686758,91825088932,917430922909";
global.sudo = sudo.split(",");
global.ShowInfo = process.env.ShowInfo;
global.upVersion = process.env.upVersion;
global.Showlogger = process.env.Showlogger;
global.REDIS_URL = process.env.REDIS_URL;
global.VERBOSE = process.env.VERBOSE || "0";
global.BLOOM_MODE = process.env.BLOOM_MODE || "default";
global.MAINTAINANCE_MODE = process.env.MAINTAINANCE_MODE;
global.HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;
global.PORT = process.env.PORT || Math.floor(Math.random() * 65535) + 10;
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
  "api.xteam.xyz": "d90a9e986e18778b",
  "zahirr-web.herokuapp.com": "zahirgans",
  "api.zeks.xyz": "apivinz",
  "pencarikode.xyz": "pais",
  "leyscoders-api.herokuapp.com": "dappakntlll",
};
global.packname = "BloomBot";
global.author = "Magneum™";
global.name = "BloomBot";

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
        }),
      )
    : "");
