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
    return await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}

ⒸBloomBot (multi-device) by Magneum™
📱 is a WhatsApp user-bot with automation, moderation, music, games, and more than 200+ commands! 🎮🎵🤖

🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience. 🤝
🚀 Simplifies group management tasks and enhances the overall user experience. 🚀
⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly! ⚠️
🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans. 🚫❗️
🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported. 📂❌
⚠️ Exercise caution and take responsibility for any modifications made to the bot. 🛠️🧐
📞 Need assistance or have issues? Contact our developers. 🆘
🔄 We'll continue providing updates and support for the original version of the bot. 🆙🔧
👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your WhatsApp group management experience! 🎉✨

🚨LEGAL NOTICE🚨
ⒸBloomBot is in no way affiliated with, authorized, maintained, sponsored, or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk. ⚠️`,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = ["bloom", "bot", "owner", "info", "ai"];
