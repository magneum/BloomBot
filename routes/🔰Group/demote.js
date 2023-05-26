// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
  try {
    if (!νℓкhat.isGroup) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    if (ѕуηтнiα.args[0] && ѕуηтнiα.args[0].startsWith("@")) {
      let mention = ѕуηтнiα.mentionByTag;
      let users = (await mention[0]) || νℓкhat.msg.contextInfo.participant;
      if (!users) {
        await ѕуηтнiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} @tag/reply_`
        );
      }
      try {
        await ѕуηтнiα.groupParticipantsUpdate(νℓкhat.chat, [users], "demote");
      } catch {
        await ѕуηтнiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ѕуηтнiα.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ѕуηтнiα.jpg";
      }
      await ѕуηтнiα.imgB(
        ѕуηтнiα,
        νℓкhat,
        `OOPs!! looks like someone demoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (ѕуηтнiα.mentionByReply) {
      let users =
        νℓкhat.mtype == "extendedTextMessage" &&
        νℓкhat.message.extendedTextMessage.contextInfo != null
          ? νℓкhat.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await ѕуηтнiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} @tag/reply_`
        );
      }
      try {
        await ѕуηтнiα.groupParticipantsUpdate(νℓкhat.chat, [users], "demote");
      } catch {
        await ѕуηтнiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ѕуηтнiα.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ѕуηтнiα.jpg";
      }
      await ѕуηтнiα.imgB(
        ѕуηтнiα,
        νℓкhat,
        `OOPs!! looks like someone demoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
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
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} @tag/reply_`
      );
    }
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat);
  }
};
