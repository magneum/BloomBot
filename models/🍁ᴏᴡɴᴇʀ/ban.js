<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
<<<<<<< HEAD
  WhatsBot,
=======
  voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
<<<<<<< HEAD
  await WhatsBot.sendMessage(voxchat.chat, {
=======
  await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    react: {
      text: "🔖",
      key: voxchat.key,
    },
  });
  try {
<<<<<<< HEAD
    if (!WhatsBot.frome && !WhatsBot.isSudo) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (!voxbot.frome && !voxbot.isSudo) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> _Owner Only Command!_`
      );
    }

<<<<<<< HEAD
    if (WhatsBot.mentionByReply) {
      let repliedPerson =
        WhatsBot.mtype == "extendedTextMessage" &&
        WhatsBot.message.extendedTextMessage.contextInfo != null
          ? WhatsBot.message.extendedTextMessage.contextInfo.participant || ""
=======
    if (voxbot.mentionByReply) {
      let repliedPerson =
        voxbot.mtype == "extendedTextMessage" &&
        voxbot.message.extendedTextMessage.contextInfo != null
          ? voxbot.message.extendedTextMessage.contextInfo.participant || ""
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
<<<<<<< HEAD
      WhatsBot.userBanCheck.findOne(
=======
      voxbot.userBanCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
<<<<<<< HEAD
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            new WhatsBot.userBanCheck({
=======
          if (error) return voxbot.handlerror(voxbot, voxchat, error);
          if (!userBan) {
            new voxbot.userBanCheck({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              Id: repliedPerson,
            }).save();
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
<<<<<<< HEAD
    } else if (WhatsBot.args[0] && WhatsBot.args[0].startsWith("@")) {
      let mention = WhatsBot.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || WhatsBot.msg.contextInfo.participant;
      WhatsBot.userBanCheck.findOne(
=======
    } else if (voxbot.args[0] && voxbot.args[0].startsWith("@")) {
      let mention = voxbot.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || voxbot.msg.contextInfo.participant;
      voxbot.userBanCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
<<<<<<< HEAD
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            new WhatsBot.userBanCheck({
=======
          if (error) return voxbot.handlerror(voxbot, voxchat, error);
          if (!userBan) {
            new voxbot.userBanCheck({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return voxchat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
<<<<<<< HEAD
      !WhatsBot.mentionByReply &&
      !WhatsBot.args[0] &&
      !WhatsBot.args[0].startsWith("@")
    ) {
      WhatsBot.userBanCheck.findOne(
=======
      !voxbot.mentionByReply &&
      !voxbot.args[0] &&
      !voxbot.args[0].startsWith("@")
    ) {
      voxbot.userBanCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        {
          Id: voxchat.chat,
        },
        async (error, userBan) => {
<<<<<<< HEAD
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!userBan) {
            new WhatsBot.userBanCheck({
=======
          if (error) return voxbot.handlerror(voxbot, voxchat, error);
          if (!userBan) {
            new voxbot.userBanCheck({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              Id: voxchat.chat,
            }).save();
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return voxchat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to person to ban_
> _${WhatsBot.prefix}${finalname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
> _${voxbot.prefix}${finalname} reply to person to ban_
> _${voxbot.prefix}${finalname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
