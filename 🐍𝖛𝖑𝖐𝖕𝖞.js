(async () => {
  let fs = require("fs");
  let rimraf = require("rimraf");

  function execute(argument) {
    require("child_process").exec(argument, (error, stdout, stderr) => {
      if (error) return console.error(`🐍𝐋𝐨𝐠:  Exec Error ${error}`);
      console.log("🐍𝐋𝐨𝐠: " + stdout);
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
    execute("git config --global user.email krakinzkon@gmail.com");
    execute("git config --global user.name KryKenz");
    execute("git config pull.rebase false");
    execute("git stash");
    execute("git stash drop");
    execute("git fetch origin version_4");
    execute("git reset --hard origin/version_4");
    execute("git pull --all");
    console.log("🐍𝐋𝐨𝐠: Git sync done!");
  } catch (error) {
    console.log("🐍𝐋𝐨𝐠: " + error);
  }

  try {
    execute("npm install --save --force");
  } catch (error) {
    console.log("🐍𝐋𝐨𝐠: " + error);
  }
})();
