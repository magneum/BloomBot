//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Nekobot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await Nekobot.sendMessage(Nekos.chat, {
    react: {
      text: "🔖",
      key: Nekos.key,
    },
  });
  try {
    if (!Nekobot.frome && !Nekobot.isSudo) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (Nekobot.mentionByReply) {
      var repliedPerson =
        Nekobot.mtype == "extendedTextMessage" &&
        Nekobot.message.extendedTextMessage.contextInfo != null
          ? Nekobot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      var repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      Nekobot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
          if (!userBan) {
            new Nekobot.userBanCheck({
              Id: repliedPerson,
            }).save();
            return Nekos.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return Nekos.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (Nekobot.args[0] && Nekobot.args[0].startsWith("@")) {
      var mention = Nekobot.mentionByTag;
      var 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || Nekobot.msg.contextInfo.participant;
      Nekobot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
          if (!userBan) {
            new Nekobot.userBanCheck({
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return Nekos.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return Nekos.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !Nekobot.mentionByReply &&
      !Nekobot.args[0] &&
      !Nekobot.args[0].startsWith("@")
    ) {
      Nekobot.userBanCheck.findOne(
        {
          Id: Nekos.chat,
        },
        async (error, userBan) => {
          if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
          if (!userBan) {
            new Nekobot.userBanCheck({
              Id: Nekos.chat,
            }).save();
            return Nekos.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return Nekos.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${Nekobot.prefix}${finalname} reply to person to ban_
> _${Nekobot.prefix}${finalname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return Nekobot.handlerror(Nekobot, Nekos, error);
  }
};
