//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, vChat, isAdmin, isbotAdmin) => {
  try {
    if (!vChat.isGroup) {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      var mention = BloomBot.mentionByTag;
      var users = (await mention[0]) || vChat.msg.contextInfo.participant;
      if (!users) {
        await BloomBot.sendMessage(vChat.chat, {
          react: {
            text: "❌",
            key: vChat.key,
          },
        });
        return vChat.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(vChat.chat, [users], "remove");
      } catch {
        await BloomBot.sendMessage(vChat.chat, {
          react: {
            text: "❌",
            key: vChat.key,
          },
        });
        return vChat.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        vChat,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (BloomBot.mentionByReply) {
      var users =
        vChat.mtype == "extendedTextMessage" &&
        vChat.message.extendedTextMessage.contextInfo != null
          ? vChat.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await BloomBot.sendMessage(vChat.chat, {
          react: {
            text: "❌",
            key: vChat.key,
          },
        });
        return vChat.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(vChat.chat, [users], "remove");
      } catch {
        await BloomBot.sendMessage(vChat.chat, {
          react: {
            text: "❌",
            key: vChat.key,
          },
        });
        return vChat.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        vChat,
        `OOPs!! looks like someone removed @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else {
      await BloomBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Couldn't find any userId in context!_

*⚡Usage* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, vChat, error);
  }
};
module.exports.aliases = [];
