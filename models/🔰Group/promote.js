//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  whatsbot,
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!voxchat.isGroup) {
      await whatsbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await whatsbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await whatsbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    if (whatsbot.args[0] && whatsbot.args[0].startsWith("@")) {
      let mention = whatsbot.mentionByTag;
      let users = (await mention[0]) || voxchat.msg.contextInfo.participant;
      if (!users) {
        await whatsbot.sendMessage(voxchat.chat, {
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await whatsbot.groupParticipantsUpdate(voxchat.chat, [users], "promote");
      } catch {
        await whatsbot.sendMessage(voxchat.chat, {
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await whatsbot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/whatsbot.jpg";
      }
      await whatsbot.imagebutton(
        whatsbot,
        voxchat,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (whatsbot.mentionByReply) {
      let users =
        voxchat.mtype == "extendedTextMessage" &&
        voxchat.message.extendedTextMessage.contextInfo != null
          ? voxchat.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await whatsbot.sendMessage(voxchat.chat, {
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} @tag/reply_`
        );
      }
      try {
        await whatsbot.groupParticipantsUpdate(voxchat.chat, [users], "promote");
      } catch {
        await whatsbot.sendMessage(voxchat.chat, {
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await whatsbot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/whatsbot.jpg";
      }
      await whatsbot.imagebutton(
        whatsbot,
        voxchat,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else {
      await whatsbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} @tag/reply_`
      );
    }
  } catch (error) {
    return whatsbot.handlerror(whatsbot, voxchat);
  }
};
