require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    const gitHubUrl = "https://github.com/magneum";
    const bloomBotGitHubUrl = "https://github.com/magneum/BloomBot";

    let message = "";
    switch (currFile) {
      case "git":
      case "github":
      case "repo":
      case "web":
        message = `*🌻Hola!* ${currFile} for ${
          BloomBot.pushname || BloomBot.tagname
        }

ⒸBloomBot (multi-device) by Magneum™
📱 is a WhatsApp user-bot with automation, moderation, music, games, and more than 200+ commands! 🎮🎵🤖

🔗 *GitHub Information:*
🔹 GitHub URL: ${gitHubUrl}
🔹 BloomBot GitHub URL: ${bloomBotGitHubUrl}`;
        break;
      default:
        message = `Default message if no matching case found`;
        break;
    }

    return await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      message,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = ["git", "github", "repo", "web"];
