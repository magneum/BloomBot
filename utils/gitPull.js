//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const fs = require("fs-extra");
const logger = require("../logger");
const git = require("simple-git")();
const { exec } = require("child_process");

const gitPull = async () => {
  try {
    logger.info("📢: Checking for updates...");
    await git.fetch();
    const newCommits = await git.log(["magneum..origin/magneum"]);
    if (newCommits.total) {
      logger.info("📢: New update pending, updating...");
      await git.pull("origin", "magneum");
      const update = await git.diffSummary(["--name-only"]);
      if (update.files.includes("package.json")) {
        logger.info("📢: Changes in package.json detected, updating dependencies...");
        await fs.emptyDir(__dirname);
        await new Promise((resolve, reject) => {
          const childProcess = exec("yarn install");
          childProcess.stderr.pipe(process.stderr);
          childProcess.stdout.pipe(process.stdout);
          childProcess.on("close", (code) => {
            if (code === 0) {
              logger.info("📢: Installed dependencies.");
              resolve();
            } else {
              logger.error("📢: Failed to install dependencies.");
              reject(new Error("Failed to install dependencies."));
            }
          });
        });
      } else {
        logger.info("📢: No changes in package.json. Skipping dependency update.");
      }

      logger.info("📢: Updated the bot with latest changes.");
      logger.info("📢: Restarting the main thread...");
      const startProcess = exec("yarn start");
      startProcess.stderr.pipe(process.stderr);
      startProcess.stdout.pipe(process.stdout);
    } else {
      logger.info("📢: Bot is already working on the latest version.");
    }
  } catch (error) {
    logger.error(`📢: Error occurred during update: ${error.message}`);
  }
};

gitPull();
module.exports = gitPull;

