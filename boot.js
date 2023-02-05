const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const { join } = require("path");
const { say } = require("cfonts");
const ascii = require("ascii-table");
const { createInterface } = require("readline");
const { setupMaster, fork } = require("cluster");
const { watchFile, unwatchFile } = require("fs");
const rl = createInterface(process.stdin, process.stdout);
const Table = new ascii().setHeading("✭COMMANDS✭", "✭CATEGORY✭");

const mFolders = fs.readdirSync("./models");
function mCommands() {
  // say("Adjust the screen to scan the QR code", {
  // font: "console",
  // align: "center",
  // gradient: ["red", "magenta"],
  // });
  say("✭ Loading Commands From Folders ✭", {
    font: "console",
    align: "left",
    gradient: ["red", "green"],
  });
  for (const folder of mFolders) {
    const commandFiles = fs
      .readdirSync(`./models/${folder}`)
      .filter((file) => file.endsWith(".js"));

    // return;
    // Table.addRow(`> `, folder);
    // console.log(Table.toString());
    // console.log(commandFiles);

    if (folder === "⚙️System") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "⭕YTFilter") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🍁ᴏᴡɴᴇʀ") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🍑Hentai") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🐉Emotions") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "👅NSFW") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "💗Commands") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "💰Games") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "📢aFilter") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "📥Downloader") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "📼Conversion") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🔎Searches") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🔰Group") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🖼️Photogenic") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    } else if (folder === "🦄SFW") {
      console.log(
        chalk.bgGreen(chalk.black("> " + folder)),
        chalk.yellow("  | " + commandFiles)
      );
    }
  }
}

say("VLKYRE BOT\nWhatsApp Multi Device", {
  font: "chrome",
  align: "center",
  gradient: ["red", "magenta"],
});
say(`~ by magneum`, {
  font: "console",
  align: "center",
  gradient: ["red", "magenta"],
});

var isRunning = false;

function start(file) {
  if (isRunning) return;
  isRunning = true;
  let args = [join(__dirname, file), ...process.argv.slice(2)];

  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });
  let p = fork();
  p.on("message", (data) => {
    console.log("[RECEIVED]", data);
    switch (data) {
      case "reset":
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });
  p.on("exit", (_, code) => {
    isRunning = false;
    console.error("❌ An unexpected error occurred:", code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (code === 0) return;
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      start(file);
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
mCommands();
start("index.js");
