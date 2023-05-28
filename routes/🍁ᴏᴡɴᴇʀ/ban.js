//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ꪜᴏxʙᴏᴛ,
  ᴠᴏxᴄ,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
    react: {
      text: "🔖",
      key: ᴠᴏxᴄ.key,
    },
  });
  try {
    if (!ꪜᴏxʙᴏᴛ.frome && !ꪜᴏxʙᴏᴛ.isSudoWorker) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (ꪜᴏxʙᴏᴛ.mentionByReply) {
      let repliedPerson =
        ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
        ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
          ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      ꪜᴏxʙᴏᴛ.userBanCheck.findOne(
        {
          ID: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          if (!userBan) {
            new ꪜᴏxʙᴏᴛ.userBanCheck({
              ID: repliedPerson,
            }).save();
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (ꪜᴏxʙᴏᴛ.args[0] && ꪜᴏxʙᴏᴛ.args[0].startsWith("@")) {
      let mention = ꪜᴏxʙᴏᴛ.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || ꪜᴏxʙᴏᴛ.msg.contextInfo.participant;
      ꪜᴏxʙᴏᴛ.userBanCheck.findOne(
        {
          ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          if (!userBan) {
            new ꪜᴏxʙᴏᴛ.userBanCheck({
              ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return ᴠᴏxᴄ.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !ꪜᴏxʙᴏᴛ.mentionByReply &&
      !ꪜᴏxʙᴏᴛ.args[0] &&
      !ꪜᴏxʙᴏᴛ.args[0].startsWith("@")
    ) {
      ꪜᴏxʙᴏᴛ.userBanCheck.findOne(
        {
          ID: ᴠᴏxᴄ.chat,
        },
        async (error, userBan) => {
          if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          if (!userBan) {
            new ꪜᴏxʙᴏᴛ.userBanCheck({
              ID: ᴠᴏxᴄ.chat,
            }).save();
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to person to ban_
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
