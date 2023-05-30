//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Nekos.isGroup) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    if (NekoBot.args[0] && NekoBot.args[0].startsWith("@")) {
      var mention = NekoBot.mentionByTag;
      var users = (await mention[0]) || Nekos.msg.contextInfo.participant;
      if (!users) {
        await NekoBot.sendMessage(Nekos.chat, {
          react: {
            text: "❌",
            key: Nekos.key,
          },
        });
        return Nekos.reply(
          `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await NekoBot.groupParticipantsUpdate(Nekos.chat, [users], "remove");
      } catch {
        await NekoBot.sendMessage(Nekos.chat, {
          react: {
            text: "❌",
            key: Nekos.key,
          },
        });
        return Nekos.reply(
          `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await NekoBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = NekoBot.display;
      }
      await NekoBot.imagebutton(
        NekoBot,
        Nekos,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (NekoBot.mentionByReply) {
      var users =
        Nekos.mtype == "extendedTextMessage" &&
        Nekos.message.extendedTextMessage.contextInfo != null
          ? Nekos.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await NekoBot.sendMessage(Nekos.chat, {
          react: {
            text: "❌",
            key: Nekos.key,
          },
        });
        return Nekos.reply(
          `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await NekoBot.groupParticipantsUpdate(Nekos.chat, [users], "remove");
      } catch {
        await NekoBot.sendMessage(Nekos.chat, {
          react: {
            text: "❌",
            key: Nekos.key,
          },
        });
        return Nekos.reply(
          `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await NekoBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = NekoBot.display;
      }
      await NekoBot.imagebutton(
        NekoBot,
        Nekos,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} @tag/reply_`
      );
    }
  } catch (error) {
    return NekoBot.handlerror(NekoBot, Nekos);
  }
};
