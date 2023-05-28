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
  let totalFiles = 0;
  let convertedFiles = 0;

  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(chalk.red("Error reading directory:", err));
      return;
    }

    files.forEach((file) => {
      var filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        convertFilesToES6(filePath);
      } else if (file.isFile() && file.name.endsWith(".js")) {
        totalFiles++;
        convertToES6(filePath)
          .then(() => {
            convertedFiles++;
            if (convertedFiles === totalFiles) {
              console.log(chalk.green("\nConversion completed successfully!"));
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

      let es6Code = data;

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
        /let\s*(\w+)\s*=\s*require\(['"](.+?)['"]\);/g,
        'import $1 from "$2";'
      );
      es6Code = es6Code.replace(
        /let\s*\{(.+?)\}\s*=\s*require\(['"](.+?)['"]\);/g,
        'import { $1 } from "$2";'
      );

      es6Code = es6Code.replace(
        /exports\.(\w+)\s*=\s*(.*);/g,
        "export let $1 = $2;"
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
