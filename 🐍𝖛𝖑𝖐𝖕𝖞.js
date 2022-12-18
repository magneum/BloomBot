let fs = require("fs");
let rimraf = require("rimraf");
async function execute(argument) {
  require("child_process").exec("echo test", (error, stdout, stderr) => {
    if (error) {
      return console.error(`exec error: ${error}`);
    }
    console.log(`stdout: ${stdout}`);
  });
}

// if (fs.existsSync("package-lock.json")) {
// let folders = [".", ...Object.keys(require("./package.json").directories)];
// for (let folder of folders) {
// rimraf(folder, function (Error) {
// if (Error) console.log(Error);
// });
// }
// } else {
// console.log("🐍𝐋𝐨𝐠: directries cleaned!");
// }

try {
  await execute("git config --global user.email krakinzkon@gmail.com");
  await execute("git config --global user.name KryKenz");
  await execute("git config pull.rebase false");
  await execute("git stash");
  await execute("git stash drop");
  await execute("git fetch origin version_4");
  await execute("git reset --hard origin/version_4");
  await execute("git pull --all");
  console.log("🐍𝐋𝐨𝐠: Git sync done!");
} catch (error) {
  console.log("🐍𝐋𝐨𝐠: " + error);
}

try {
  await execute("npm install --save --force");
} catch (error) {
  console.log("🐍𝐋𝐨𝐠: " + error);
}
