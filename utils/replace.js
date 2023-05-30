var fs = require("fs");
var path = require("path");
var readline = require("readline");

// List of file extensions to ignore for content changes
var ignoredContentExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".mp4",
  ".avi",
  ".mov",
  ".webm",
  ".db",
];

// List of folder names to ignore
var ignoredFolders = [".git", "node_modules"];

// List of file extensions to ignore for renaming
var ignoredRenameExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".mp4",
  ".avi",
  ".mov",
  ".webm",
  ".db",
];

// Function to recursively rename files and folders
function renameFilesAndFolders(dirPath, oldWord, newWord) {
  var files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    var filePath = path.join(dirPath, file);
    var stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (!ignoredFolders.includes(file)) {
        renameFilesAndFolders(filePath, oldWord, newWord);
      }
    } else {
      var fileExtension = path.extname(file).toLowerCase();
      if (ignoredContentExtensions.includes(fileExtension)) {
        var newFilePath = path.join(
          dirPath,
          replaceAll(file, oldWord, newWord)
        );
        fs.renameSync(filePath, newFilePath);
      } else if (!ignoredRenameExtensions.includes(fileExtension)) {
        var fileContent = fs.readFileSync(filePath, "utf8");
        var newContent = replaceAll(fileContent, oldWord, newWord);
        fs.writeFileSync(filePath, newContent, "utf8");

        var newFilePath = path.join(
          dirPath,
          replaceAll(file, oldWord, newWord)
        );
        fs.renameSync(filePath, newFilePath);
      }
    }
  });
}

// Helper function to replace all occurrences of a string within another string
function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

// Readline interface for user input
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the old word: ", (oldWord) => {
  rl.question("Enter the new word: ", (newWord) => {
    rl.question("Enter the working directory: ", (workDir) => {
      // Rename files and folders
      renameFilesAndFolders(workDir, oldWord, newWord);

      console.log("Renaming completed.");
      rl.close();
    });
  });
});
