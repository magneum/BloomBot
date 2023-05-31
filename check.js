const fs = require("fs");
const path = require("path");

function convertFilesAndFolders(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error("Error retrieving file stats:", err);
          return;
        }

        if (stat.isDirectory()) {
          convertFilesAndFolders(filePath);
        } else if (stat.isFile() && file.endsWith(".js")) {
          convertFile(filePath);
        }
      });
    });
  });
}

function convertFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const convertedData = data.replace(/const/g, "const");

    fs.writeFile(filePath, convertedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Converted file:", filePath);
    });
  });
}

const directoryPath = ".";
convertFilesAndFolders(directoryPath);
