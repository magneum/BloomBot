//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, vChat, groupName) => {
  await BloomBot.sendMessage(vChat.chat, {
    react: {
      text: "🌻",
      key: vChat.key,
    },
  });
  try {
    if (!BloomBot.frome && !BloomBot.isSudo) {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (BloomBot.mentionByReply) {
      var repliedPerson =
        BloomBot.mtype == "extendedTextMessage" &&
        BloomBot.message.extendedTextMessage.contextInfo != null
          ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      var repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      BloomBot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, vChat, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: repliedPerson,
            }).save();
            return vChat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return vChat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      var mention = BloomBot.mentionByTag;
      var 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || BloomBot.msg.contextInfo.participant;
      BloomBot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, vChat, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return vChat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return vChat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !BloomBot.mentionByReply &&
      !BloomBot.args[0] &&
      !BloomBot.args[0].startsWith("@")
    ) {
      BloomBot.userBanCheck.findOne(
        {
          Id: vChat.chat,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, vChat, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: vChat.chat,
            }).save();
            return vChat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return vChat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error* 
> _Could not find any context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to person to ban_
> _${BloomBot.prefix}${fpth} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, vChat, error);
  }
};
module.exports.aliases = [];
