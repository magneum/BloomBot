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
const yargs = require("yargs");
const { join } = require("path");
require("./app/config/index.js");
const { say } = require("cfonts");
const { createInterface } = require("readline");
const { watchFile, unwatchFile } = require("fs");
const { setupMaster, fork } = require("cluster");
const mFolders = fs.readdirSync("./app/models");
const rl = createInterface(process.stdin, process.stdout);

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
      .filter((cFile) => cFile.endsWith(""));

    if (specialFolders.includes(cFolder)) {
      console.log(
        chalk.bgGreen(chalk.black("> " + cFolder)),
        chalk.yellow("  | " + cFiles),
      );
    }
  }
}

let isRunning = false;
function ignite(cFile) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, cFile), ...process.argv.slice(2)];
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });
  const p = fork();
  p.on("message", (data) => {
    console.log(chalk.bgGreen(chalk.black("[RECEIVED]")), chalk.yellow(data));
    switch (data) {
      case "reset":
        p.process.kill();
        isRunning = false;
        ignite.apply(this, arguments);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });
  p.on("exit", (_, code) => {
    isRunning = false;
    console.error(chalk.bgRed("❌ An unexpected error occurred:" + _));
    p.process.kill();
    isRunning = false;
    ignite.apply(this, arguments);
    if (code === 0) return;
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      ignite(cFile);
    });
  });
  const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
  if (!opts["test"]) {
    if (!rl.listenerCount()) {
      rl.on("line", (line) => {
        p.emit("message", line.trim());
      });
    }
  }
}

showCommands("app/models");
ignite("app/client/index.js", "uptime");
