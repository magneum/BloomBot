// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ║
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ѕуηтнσяiα,
  νℓкhat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
    react: {
      text: "🔖",
      key: νℓкhat.key,
    },
  });
  try {
    if (!ѕуηтнσяiα.frome && !ѕуηтнσяiα.isSudoWorker) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (ѕуηтнσяiα.mentionByReply) {
      let repliedPerson =
        ѕуηтнσяiα.mtype == "extendedTextMessage" &&
        ѕуηтнσяiα.message.extendedTextMessage.contextInfo != null
          ? ѕуηтнσяiα.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      ѕуηтнσяiα.userBanCheck.findOne(
        {
          ID: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          if (!userBan) {
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already un-banned!`
            );
          } else {
            userBan.delete();
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been un-banned!`
            );
          }
        }
      );
    } else if (ѕуηтнσяiα.args[0] && ѕуηтнσяiα.args[0].startsWith("@")) {
      let mention = ѕуηтнσяiα.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || ѕуηтнσяiα.msg.contextInfo.participant;
      ѕуηтнσяiα.userBanCheck.findOne(
        {
          ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          if (!userBan) {
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already un-banned!`
            );
          } else {
            userBan.delete();
            return νℓкhat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been un-banned!`);
          }
        }
      );
    } else if (
      !ѕуηтнσяiα.mentionByReply &&
      !ѕуηтнσяiα.args[0] &&
      !ѕуηтнσяiα.args[0].startsWith("@")
    ) {
      ѕуηтнσяiα.userBanCheck.findOne(
        {
          ID: νℓкhat.chat,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          if (!userBan) {
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already un-banned!`
            );
          } else {
            userBan.delete();
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been un-banned!`
            );
          }
        }
      );
    } else {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} reply to person to ban_
> _${ѕуηтнσяiα.prefix}${pfname} don't reply to anyone and group will be un-banned_`
      );
    }
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
