//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
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
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already un-banned!`
            );
          } else {
            userBan.delete();
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been un-banned!`
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
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already un-banned!`
            );
          } else {
            userBan.delete();
            return ᴠᴏxᴄ.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been un-banned!`);
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
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already un-banned!`
            );
          } else {
            userBan.delete();
            return ᴠᴏxᴄ.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been un-banned!`
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
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} don't reply to anyone and group will be un-banned_`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
