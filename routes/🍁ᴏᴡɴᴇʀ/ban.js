("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ ѕуηтнiα was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ѕуηтнiα,
  νℓкhat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await ѕуηтнiα.sendMessage(νℓкhat.chat, {
    react: {
      text: "🔖",
      key: νℓкhat.key,
    },
  });
  try {
    if (!ѕуηтнiα.frome && !ѕуηтнiα.isSudoWorker) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }

    if (ѕуηтнiα.mentionByReply) {
      let repliedPerson =
        ѕуηтнiα.mtype == "extendedTextMessage" &&
        ѕуηтнiα.message.extendedTextMessage.contextInfo != null
          ? ѕуηтнiα.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      ѕуηтнiα.userBanCheck.findOne(
        {
          ID: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
          if (!userBan) {
            new ѕуηтнiα.userBanCheck({
              ID: repliedPerson,
            }).save();
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (ѕуηтнiα.args[0] && ѕуηтнiα.args[0].startsWith("@")) {
      let mention = ѕуηтнiα.mentionByTag;
      let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || ѕуηтнiα.msg.contextInfo.participant;
      ѕуηтнiα.userBanCheck.findOne(
        {
          ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
          if (!userBan) {
            new ѕуηтнiα.userBanCheck({
              ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return νℓкhat.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !ѕуηтнiα.mentionByReply &&
      !ѕуηтнiα.args[0] &&
      !ѕуηтнiα.args[0].startsWith("@")
    ) {
      ѕуηтнiα.userBanCheck.findOne(
        {
          ID: νℓкhat.chat,
        },
        async (error, userBan) => {
          if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
          if (!userBan) {
            new ѕуηтнiα.userBanCheck({
              ID: νℓкhat.chat,
            }).save();
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return νℓкhat.reply(
              `*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} reply to person to ban_
> _${ѕуηтнiα.prefix}${pfname} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
  }
};
