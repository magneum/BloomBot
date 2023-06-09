"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const readline = require("readline");

// ASCII color codes for background colors
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  bgGreen: "\x1b[42m",
  bgBlue: "\x1b[44m",
  bgOrange: "\x1b[43m",
  fgWhite: "\x1b[37m",
};

function installDependencies(packageManager) {
  let installMessage = "";
  switch (packageManager) {
    case "pnpm":
      installMessage =
        colors.bgOrange +
        colors.fgWhite +
        " Installing dependencies using pnpm... " +
        colors.reset;
      break;
    case "npm":
      installMessage =
        colors.bgGreen +
        colors.fgWhite +
        " Installing dependencies using npm... " +
        colors.reset;
      break;
    case "yarn":
      installMessage =
        colors.bgBlue +
        colors.fgWhite +
        " Installing dependencies using yarn... " +
        colors.reset;
      break;
    default:
      console.log(
        colors.bgOrange +
          colors.fgWhite +
          " Invalid choice. Exiting... " +
          colors.reset,
      );
      return;
  }

  console.log(installMessage);

  const childProcess = require("child_process");
  childProcess.execSync(`${packageManager} install`, { stdio: "inherit" });
}

function promptUser() {
  console.log("Welcome to the Package Manager Selection Script!");
  console.log("Please choose the package manager to use:");
  console.log("1. pnpm");
  console.log("2. npm");
  console.log("3. yarn");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter your choice (1, 2, or 3): ", (choice) => {
    rl.close();
    let packageManager = "";
    switch (choice) {
      case "1":
        packageManager = "pnpm";
        break;
      case "2":
        packageManager = "npm";
        break;
      case "3":
        packageManager = "yarn";
        break;
      default:
        console.log(
          colors.bgOrange +
            colors.fgWhite +
            " Invalid choice. Exiting... " +
            colors.reset,
        );
        return;
    }

    console.log(
      colors.bright +
        `Using ${packageManager} as the package manager.` +
        colors.reset,
    );
    installDependencies(packageManager);
  });
}

promptUser();
