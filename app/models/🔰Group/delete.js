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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image/Video/Text in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video/Text_`
      );
    }

    const { isBaileys } = BloomBot.quoted;
    if (!isBaileys) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Can not delete massage from another userId except mine!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video/Text_`
      );
    } else {
      return await BloomBot.sendMessage(Sockey.chat, {
        delete: {
          remoteJid: Sockey.chat,
          fromMe: true,
          id: Sockey.quoted.id,
          participant: Sockey.quoted.sender,
        },
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [
  "remove",
  "purge",
  "del",
  "erase",
  "clear",
  "trash",
  "dlt",
  "purge",
  "scrap",
  "void",
  "discard",
];
