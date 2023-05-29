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
  try {
    if (!Foxchat.isGroup) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    if (FoxBot.args[0] && FoxBot.args[0].startsWith("@")) {
      var mention = FoxBot.mentionByTag;
      var users = (await mention[0]) || Foxchat.msg.contextInfo.participant;
      if (!users) {
        await FoxBot.sendMessage(Foxchat.chat, {
          react: {
            text: "❌",
            key: Foxchat.key,
          },
        });
        return Foxchat.reply(
          `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await FoxBot.groupParticipantsUpdate(Foxchat.chat, [users], "remove");
      } catch {
        await FoxBot.sendMessage(Foxchat.chat, {
          react: {
            text: "❌",
            key: Foxchat.key,
          },
        });
        return Foxchat.reply(
          `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await FoxBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/FoxBot.png";
      }
      await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (FoxBot.mentionByReply) {
      var users =
        Foxchat.mtype == "extendedTextMessage" &&
        Foxchat.message.extendedTextMessage.contextInfo != null
          ? Foxchat.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await FoxBot.sendMessage(Foxchat.chat, {
          react: {
            text: "❌",
            key: Foxchat.key,
          },
        });
        return Foxchat.reply(
          `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await FoxBot.groupParticipantsUpdate(Foxchat.chat, [users], "remove");
      } catch {
        await FoxBot.sendMessage(Foxchat.chat, {
          react: {
            text: "❌",
            key: Foxchat.key,
          },
        });
        return Foxchat.reply(
          `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await FoxBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/FoxBot.png";
      }
      await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
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
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} @tag/reply_`
      );
    }
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat);
  }
};
