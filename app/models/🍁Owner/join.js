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
  await BloomBot.sendMessage(Sockey.chat, {
    react: {
      text: "🌻",
      key: Sockey.key,
    },
  });
  try {
    await BloomBot.sendMessage(Sockey.chat, {
      react: {
        text: "❌",
        key: Sockey.key,
      },
    });
    return Sockey.reply(
      `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
• _This Command is not yet ready for public usage!_`
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
