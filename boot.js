console.clear();
const fs = require("fs");
const cL = require("chalk");
const yargs = require("yargs");
const { join } = require("path");
const { say } = require("cfonts");
const mFolders = fs.readdirSync("./models");
const { createInterface } = require("readline");
const { watchFile, unwatchFile } = require("fs");
const { setupMaster, fork } = require("cluster");
const rl = createInterface(process.stdin, process.stdout);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
