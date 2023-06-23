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
    await BloomBot.sendMessage(Sockey.chat, {
      react: {
        text: "❌",
        key: Sockey.key,
      },
    });
    switch (true) {
      case isAdmin:
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          
*❌Error:* 
• _This Command is not yet ready for public usage!_`
        );
      case !isAdmin:
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          
*❌Error:* 
• _You are not authorized to use this command!_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
