<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
const { spawn } = require("child_process");
const simpleGit = require("simple-git");
const cron = require("node-cron");
const rimraf = require("rimraf");
const chalk = require("chalk");
let childProcess = null;
let isRunning = false;

const workdir = ".";
const git = simpleGit(workdir);

const startMainCode = () => {
  if (isRunning) {
    console.log(chalk.yellow("Main code is already running."));
    return;
  }

  console.log(chalk.green("Starting main code..."));
  childProcess = spawn("yarn", ["start"], { cwd: workdir, stdio: "inherit" });

  childProcess.on("close", (code) => {
    console.log(chalk.yellow(`Main code exited with code ${code}`));
    isRunning = false;
  });

  isRunning = true;
};

const stopMainCode = () => {
  if (!childProcess) {
    console.log(chalk.yellow("Main code is not running."));
    return;
  }

  console.log(chalk.green("Stopping main code..."));
  childProcess.kill("SIGINT");
  childProcess = null;
  isRunning = false;
};

const deleteFiles = () => {
  console.log(chalk.green("Deleting files and folders..."));
  rimraf.sync(`${workdir}/*`);
  console.log(chalk.gray("All files and folders deleted"));
};

const gitFetch = async () => {
  console.log(chalk.green("Performing git fetch..."));
  try {
    const { behind } = await git.raw([
      "rev-list",
      "--count",
      "@{upstream}..HEAD",
    ]);

    if (parseInt(behind) === 0) {
      console.log(chalk.yellow("No new commits found"));
      return;
    }

    stopMainCode();
    deleteFiles();
    startMainCode();
  } catch (error) {
    console.error(chalk.red(`Error executing git fetch: ${error.message}`));
  }
};

cron.schedule("* * * * *", gitFetch);
startMainCode();
