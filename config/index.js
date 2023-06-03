"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
global.REDIS_URL = process.env.REDIS_URL;
global.Showlogger = process.env.Showlogger;
global.maintainance_mode = process.env.MAINTAINANCE_MODE;

global.verbose = process.env.verbose || "0";
global.bloom_mode = process.env.BLOOM_MODE || "default";
global.hugging_face_token = process.env.HUGGING_FACE_API_TOKEN;
global.PORT = process.env.PORT || Math.floor(Math.random() * 65535) + 10;
global.pgdb = process.env.pgdb;
global.prefix = process.env.prefix || "#";
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.upbranch = process.env.upbranch;
global.nameApi = {
  nrtm: "nurutomo.herokuapp.com",
  dzx: "api.dhamzxploit.my.id",
  xteam: "api.xteam.xyz",
  zahir: "zahirr-web.herokuapp.com",
  zeks: "api.zeks.xyz",
  pencarikode: "pencarikode.xyz",
  LeysCoder: "leyscoders-api.herokuapp.com",
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
