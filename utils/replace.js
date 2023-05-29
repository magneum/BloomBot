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
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const readline = require("readline");

async function renameFile(filePath, searchString, replaceString) {
  const directory = path.dirname(filePath);
  const oldFileName = path.basename(filePath);
  const newFileName = oldFileName.replace(
    new RegExp(searchString, "g"),
    replaceString
  );
  const newPath = path.join(directory, newFileName);

  try {
    await fs.promises.rename(filePath, newPath);
    console.log(chalk.green(`Successfully renamed: ${filePath} to ${newPath}`));
    await fs.promises.unlink(filePath);
    console.log(chalk.green(`Deleted old file: ${filePath}`));
  } catch (err) {
    console.error(chalk.red(`Error renaming file: ${filePath}`, err));
  }
}

async function renameFiles(workdir, searchString, replaceString) {
  try {
    const files = await fs.promises.readdir(workdir);

    for (const file of files) {
      const filePath = path.join(workdir, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isFile()) {
        if (!file.startsWith(".") && file !== "node_modules") {
          await renameFile(filePath, searchString, replaceString);
        }
      }
    }
  } catch (err) {
    console.error(chalk.red(`Error reading directory: ${workdir}`, err));
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the directory path: ", async (workdir) => {
  workdir = workdir.trim();
  try {
    const stats = await fs.promises.stat(workdir);
    if (!stats.isDirectory()) {
      throw new Error(`Not a directory: ${workdir}`);
    }

    rl.question(
      "Enter the word or sentence to replace: ",
      async (searchString) => {
        searchString = searchString.trim();
        if (searchString === "") {
          throw new Error("Search string cannot be empty");
        }

        rl.question("Enter the replacement string: ", async (replaceString) => {
          replaceString = replaceString.trim();
          rl.close();

          await renameFiles(workdir, searchString, replaceString);
        });
      }
    );
  } catch (err) {
    console.error(chalk.red(err.message));
    rl.close();
  }
});
