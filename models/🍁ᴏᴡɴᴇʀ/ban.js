//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  FoxBot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await FoxBot.sendMessage(Foxchat.chat, {
    react: {
      text: "🔖",
      key: Foxchat.key,
    },
  });
  try {
    if (!FoxBot.frome && !FoxBot.isSudo) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (FoxBot.mentionByReply) {
      var repliedPerson =
        FoxBot.mtype == "extendedTextMessage" &&
        FoxBot.message.extendedTextMessage.contextInfo != null
          ? FoxBot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      var repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      FoxBot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
          if (!userBan) {
            new FoxBot.userBanCheck({
              Id: repliedPerson,
            }).save();
            return Foxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return Foxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (FoxBot.args[0] && FoxBot.args[0].startsWith("@")) {
      var mention = FoxBot.mentionByTag;
      var 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || FoxBot.msg.contextInfo.participant;
      FoxBot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
          if (!userBan) {
            new FoxBot.userBanCheck({
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return Foxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return Foxchat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !FoxBot.mentionByReply &&
      !FoxBot.args[0] &&
      !FoxBot.args[0].startsWith("@")
    ) {
      FoxBot.userBanCheck.findOne(
        {
          Id: Foxchat.chat,
        },
        async (error, userBan) => {
          if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
          if (!userBan) {
            new FoxBot.userBanCheck({
              Id: Foxchat.chat,
            }).save();
            return Foxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return Foxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} reply to person to ban_
> _${FoxBot.prefix}${finalname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat, error);
  }
};
