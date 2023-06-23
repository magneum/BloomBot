require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  await BloomBot.sendMessage(chatkey.chat, {
    react: {
      text: "🌻",
      key: chatkey.key,
    },
  });
  try {
    if (!BloomBot.byMyself && !BloomBot.isSudo) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
• _Owner Only Command!_`
      );
    }

    switch (true) {
      case BloomBot.mentionByReply:
        const repliedPerson =
          BloomBot.mtype == "extendedTextMessage" &&
          BloomBot.message.extendedTextMessage.contextInfo != null
            ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
            : "";
        const repliedPersonNum = repliedPerson.substring(
          0,
          repliedPerson.length - 15
        );
        BloomBot.userBanCheck.findOne(
          {
            Id: repliedPerson,
          },
          async (error, userBan) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!userBan) {
              return chatkey.reply(
                `*🔒Status:* @${repliedPersonNum} is already un-banned!`
              );
            } else {
              userBan.delete();
              return chatkey.reply(
                `*🔒Status:* @${repliedPersonNum} has been un-banned!`
              );
            }
          }
        );
        break;

      case BloomBot.args[0] && BloomBot.args[0].startsWith("@"):
        const mention = BloomBot.mentionByTag;
        const 𝕻𝖊𝖗𝖘𝖔𝖓 =
          (await mention[0]) || BloomBot.msg.contextInfo.participant;
        BloomBot.userBanCheck.findOne(
          {
            Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
          },
          async (error, userBan) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!userBan) {
              return chatkey.reply(
                `*🔒Status:* @${mention} is already un-banned!`
              );
            } else {
              userBan.delete();
              return chatkey.reply(
                `*🔒Status:* @${mention} has been un-banned!`
              );
            }
          }
        );
        break;

      case !BloomBot.mentionByReply &&
        !BloomBot.args[0] &&
        !BloomBot.args[0].startsWith("@"):
        BloomBot.userBanCheck.findOne(
          {
            Id: chatkey.chat,
          },
          async (error, userBan) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!userBan) {
              return chatkey.reply(
                `*🔒Status:* ${groupName}\nGroup is already un-banned!`
              );
            } else {
              userBan.delete();
              return chatkey.reply(
                `*🔒Status:* ${groupName}\nGroup Has Been un-banned!`
              );
            }
          }
        );
        break;

      default:
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
• _Could not find any context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to person to ban_
• _${
            BloomBot.prefix
          }${currFile} don't reply to anyone and group will be un-banned_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
