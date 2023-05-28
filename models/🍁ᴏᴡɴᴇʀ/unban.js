//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  WhatsBot,
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await WhatsBot.sendMessage(voxchat.chat, {
    react: {
      text: "🔖",
      key: voxchat.key,
    },
  });
  try {
    if (!WhatsBot.frome && !WhatsBot.isSudo) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (WhatsBot.mentionByReply) {
      let repliedPerson =
        WhatsBot.mtype == "extendedTextMessage" &&
        WhatsBot.message.extendedTextMessage.contextInfo != null
          ? WhatsBot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      WhatsBot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already un-banned!`
            );
          } else {
            userBan.delete();
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been un-banned!`
            );
          }
        }
      );
    } else if (WhatsBot.args[0] && WhatsBot.args[0].startsWith("@")) {
      let mention = WhatsBot.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || WhatsBot.msg.contextInfo.participant;
      WhatsBot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            return voxchat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already un-banned!`);
          } else {
            userBan.delete();
            return voxchat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been un-banned!`);
          }
        }
      );
    } else if (
      !WhatsBot.mentionByReply &&
      !WhatsBot.args[0] &&
      !WhatsBot.args[0].startsWith("@")
    ) {
      WhatsBot.userBanCheck.findOne(
        {
          Id: voxchat.chat,
        },
        async (error, userBan) => {
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already un-banned!`
            );
          } else {
            userBan.delete();
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been un-banned!`
            );
          }
        }
      );
    } else {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${WhatsBot.prefix}${finalname} reply to person to ban_
> _${WhatsBot.prefix}${finalname} don't reply to anyone and group will be un-banned_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
  }
};
