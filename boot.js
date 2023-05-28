//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
console.clear();
var fs = require("fs");
var cL = require("chalk");
var yargs = require("yargs");
var { join } = require("path");
var { say } = require("cfonts");
var mFolders = fs.readdirSync("./models");
var { createInterface } = require("readline");
var { watchFile, unwatchFile } = require("fs");
var { setupMaster, fork } = require("cluster");
var rl = createInterface(process.stdin, process.stdout);

say("whatsbot\nWhatsApp Multi Device", {
  font: "chrome",
  align: "center",
  gradient: ["red", "yellow"],
});
say(`~ by magneum`, {
  font: "console",
  align: "center",
  gradient: ["green", "red"],
});

function showCommands(path) {
  say("✭ Loading Commands From Folders ✭", {
    font: "console",
    align: "left",
    gradient: ["red", "blue"],
  });
  for (var cFolders of mFolders) {
    var cFiles = fs
      .readdirSync(`./${path}/${cFolders}`)
      .filter((cFile) => cFile.endsWith(".js"));

    if (cFolders === "⚙️System") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "⭕YTFilter") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🍁ᴏᴡɴᴇʀ") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🍑Hentai") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🐉Emotions") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "👅NSFW") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "💗Commands") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "💰Games") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "📢aFilter") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "📥Downloader") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "📼Conversion") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🔎Searches") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🔰Group") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🖼️Photogenic") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    } else if (cFolders === "🦄SFW") {
      console.log(
        cL.bgGreen(cL.black("> " + cFolders)),
        cL.yellow("  | " + cFiles)
      );
    }
  }
}

var isRunning = false;
function ignite(cFile) {
  if (isRunning) return;
  isRunning = true;
  let args = [join(__dirname, cFile), ...process.argv.slice(2)];
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });
  let p = fork();
  p.on("message", (data) => {
    console.log(cL.bgGreen(cL.black("[RECEIVED]")), cL.yellow(data));
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
    console.error(cL.bgRed("❌ An unexpected error occurred:" + _));
    p.process.kill();
    isRunning = false;
    ignite.apply(this, arguments);
    if (code === 0) return;
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      ignite(cFile);
    });
  });
  let opts = new Object(
    yargs(process.argv.slice(2)).exitProcess(false).parse()
  );
  if (!opts["test"])
    if (!rl.listenerCount())
      rl.on("line", (line) => {
        p.emit("message", line.trim());
      });
}

showCommands("models");
ignite("app/index.js", "uptime");
