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

    if (stats.isDirectory() && file !== "node_modules") {
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
