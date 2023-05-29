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
var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the working directory: ", (workDir) => {
  convertFilesToES6(workDir);
});

function convertFilesToES6(directory) {
  var totalFiles = 0;
  var convertedFiles = 0;

  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(chalk.red("Error reading directory:", err));
      return;
    }

    files.forEach((file) => {
      var filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        convertFilesToES6(filePath);
      } else if (file.isFile() && file.name.endsWith("")) {
        totalFiles++;
        convertToES6(filePath)
          .then(() => {
            convertedFiles++;
            if (convertedFiles === totalFiles) {
              console.log(chalk.green("\nConversion compvared successfully!"));
              console.log(chalk.green("Total files processed:", totalFiles));
              console.log(chalk.green("Files converted:", convertedFiles));
            }
          })
          .catch((error) => {
            console.error(chalk.red("\nError converting file:", filePath));
            console.error(chalk.red("Error details:", error.message));
            console.log();
          });
      }
    });
  });
}

function convertToES6(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      var es6Code = data;

      es6Code = es6Code.replace(
        /module\.exports\s*=\s*(.*);/g,
        "export default $1;"
      );

      es6Code = es6Code.replace(
        /var\s*(\w+)\s*=\s*require\(['"](.+?)['"]\);/g,
        'import $1 from "$2";'
      );
      es6Code = es6Code.replace(
        /var\s*\{(.+?)\}\s*=\s*require\(['"](.+?)['"]\);/g,
        'import { $1 } from "$2";'
      );
      es6Code = es6Code.replace(
        /var\s*(\w+)\s*=\s*require\(['"](.+?)['"]\);/g,
        'import $1 from "$2";'
      );
      es6Code = es6Code.replace(
        /var\s*\{(.+?)\}\s*=\s*require\(['"](.+?)['"]\);/g,
        'import { $1 } from "$2";'
      );

      es6Code = es6Code.replace(
        /exports\.(\w+)\s*=\s*(.*);/g,
        "export var $1 = $2;"
      );
      es6Code = es6Code.replace(
        /exports\.(\w+)\s*=\s*function\((.*)\)\s*{/g,
        "export function $1($2) {"
      );
      es6Code = es6Code.replace(
        /exports\.(\w+)\s*=\s*class\s*(\w+)\s*{/g,
        "export function $2() {"
      );
      es6Code = es6Code.replace(
        /exports\.(\w+)\s*=\s*new\s*(\w+)\s*{/g,
        "export var $1 = new $2();"
      );

      fs.writeFile(filePath, es6Code, "utf8", (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  });
}
