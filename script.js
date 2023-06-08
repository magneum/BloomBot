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

function installDependencies() {
  const packageManager = process.env.PACKAGE_MANAGER;
  if (packageManager === "pnpm") {
    console.log("Installing dependencies using pnpm...");
  } else if (packageManager === "npm") {
    console.log("Installing dependencies using npm...");
  } else if (packageManager === "yarn") {
    console.log("Installing dependencies using yarn...");
  } else {
    console.log("Invalid choice. Exiting...");
    return;
  }

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
    process.env.PACKAGE_MANAGER = "";
    switch (choice) {
      case "1":
        process.env.PACKAGE_MANAGER = "pnpm";
        break;
      case "2":
        process.env.PACKAGE_MANAGER = "npm";
        break;
      case "3":
        process.env.PACKAGE_MANAGER = "yarn";
        break;
      default:
        console.log("Invalid choice. Exiting...");
        break;
    }
    if (process.env.PACKAGE_MANAGER) {
      console.log(
        `Using ${process.env.PACKAGE_MANAGER} as the package manager.`,
      );
      installDependencies();
    }
  });
}

promptUser();
