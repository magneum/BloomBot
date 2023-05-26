// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
console.clear();
const fs = require("fs");
const cL = require("chalk");
const yargs = require("yargs");
const { join } = require("path");
const { say } = require("cfonts");
const mFolders = fs.readdirSync("./routes");
const { createInterface } = require("readline");
const { watchFile, unwatchFile } = require("fs");
const { setupMaster, fork } = require("cluster");
const rl = createInterface(process.stdin, process.stdout);

say("VLKYRE BOT\nWhatsApp Multi Device", {
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
  for (const cFolders of mFolders) {
    const cFiles = fs
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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

showCommands("routes");
ignite("index.js", "uptime");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
