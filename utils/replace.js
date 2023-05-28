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
var fs = require("fs");
var path = require("path");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readFiles(dir, oldWord, newWord) {
  var files = fs.readdirSync(dir);

  files.forEach((file) => {
    var filePath = path.join(dir, file);
    var stats = fs.statSync(filePath);

    if (stats.isDirectory() && file !== "node_modules" && file !== ".git") {
      var newDirName = file.replace(new RegExp(oldWord, "g"), newWord);
      var newDirPath = path.join(dir, newDirName);
      fs.renameSync(filePath, newDirPath);
      readFiles(newDirPath, oldWord, newWord);
    } else if (stats.isFile()) {
      var newFileName = file.replace(new RegExp(oldWord, "g"), newWord);
      var newFilePath = path.join(dir, newFileName);
      replaceWordsInFile(filePath, newFilePath, oldWord, newWord);
    }
  });
}

function replaceWordsInFile(filePath, newFilePath, oldWord, newWord) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`);
      return;
    }
    var updatedContent = data.replace(new RegExp(oldWord, "g"), newWord);
    fs.writeFile(newFilePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file: ${newFilePath}`);
        return;
      }

      console.log(`File updated: ${newFilePath}`);
    });
  });
}

rl.question("Enter the word to replace: ", (oldWord) => {
  rl.question("Enter the new word: ", (newWord) => {
    rl.question(
      "Enter the directory path where the files are located: ",
      (folderPath) => {
        readFiles(folderPath, oldWord, newWord);
        rl.close();
      }
    );
  });
});
