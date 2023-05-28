//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  whatsbot,
  whatschat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await whatsbot.sendMessage(whatschat.chat, {
    react: {
      text: "🔖",
      key: whatschat.key,
    },
  });
  try {
    if (!whatsbot.frome && !whatsbot.isSudo) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (whatsbot.mentionByReply) {
      let repliedPerson =
        whatsbot.mtype == "extendedTextMessage" &&
        whatsbot.message.extendedTextMessage.contextInfo != null
          ? whatsbot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      whatsbot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
          if (!userBan) {
            new whatsbot.userBanCheck({
              Id: repliedPerson,
            }).save();
            return whatschat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return whatschat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (whatsbot.args[0] && whatsbot.args[0].startsWith("@")) {
      let mention = whatsbot.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || whatsbot.msg.contextInfo.participant;
      whatsbot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
          if (!userBan) {
            new whatsbot.userBanCheck({
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return whatschat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return whatschat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !whatsbot.mentionByReply &&
      !whatsbot.args[0] &&
      !whatsbot.args[0].startsWith("@")
    ) {
      whatsbot.userBanCheck.findOne(
        {
          Id: whatschat.chat,
        },
        async (error, userBan) => {
          if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
          if (!userBan) {
            new whatsbot.userBanCheck({
              Id: whatschat.chat,
            }).save();
            return whatschat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return whatschat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply to person to ban_
> _${whatsbot.prefix}${finalname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
