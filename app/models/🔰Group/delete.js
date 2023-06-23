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
    switch (!BloomBot.quoted) {
      case true:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:* \n• _Could not find any Image/Video/Text in context!_\n\n*🌻Usage:* \n• _${
            BloomBot.prefix
          }${currFile} reply to Image/Video/Text_`
        );
    }

    const { isBaileys } = BloomBot.quoted;
    switch (!isBaileys) {
      case true:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:* \n• _Can not delete massage from another userId except mine!_\n\n*🌻Usage:* \n• _${
            BloomBot.prefix
          }${currFile} reply to Image/Video/Text_`
        );
      default:
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
