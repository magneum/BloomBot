//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await OpenBot.sendMessage(ocID.chat, {
    react: {
      text: "🔖",
      key: ocID.key,
    },
  });
  try {
    if (!OpenBot.frome && !OpenBot.isSudo) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (OpenBot.mentionByReply) {
      var repliedPerson =
        OpenBot.mtype == "extendedTextMessage" &&
        OpenBot.message.extendedTextMessage.contextInfo != null
          ? OpenBot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      var repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      OpenBot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return OpenBot.handlerror(OpenBot, ocID, error);
          if (!userBan) {
            return ocID.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already un-banned!`
            );
          } else {
            userBan.delete();
            return ocID.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been un-banned!`
            );
          }
        }
      );
    } else if (OpenBot.args[0] && OpenBot.args[0].startsWith("@")) {
      var mention = OpenBot.mentionByTag;
      var 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || OpenBot.msg.contextInfo.participant;
      OpenBot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return OpenBot.handlerror(OpenBot, ocID, error);
          if (!userBan) {
            return ocID.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already un-banned!`
            );
          } else {
            userBan.delete();
            return ocID.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been un-banned!`);
          }
        }
      );
    } else if (
      !OpenBot.mentionByReply &&
      !OpenBot.args[0] &&
      !OpenBot.args[0].startsWith("@")
    ) {
      OpenBot.userBanCheck.findOne(
        {
          Id: ocID.chat,
        },
        async (error, userBan) => {
          if (error) return OpenBot.handlerror(OpenBot, ocID, error);
          if (!userBan) {
            return ocID.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already un-banned!`
            );
          } else {
            userBan.delete();
            return ocID.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been un-banned!`
            );
          }
        }
      );
    } else {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply to person to ban_
> _${
          OpenBot.prefix
        }${finalname} don't reply to anyone and group will be un-banned_`
      );
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID, error);
  }
};
