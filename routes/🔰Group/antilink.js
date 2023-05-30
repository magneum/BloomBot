//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Nekobot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Nekos.isGroup) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await Nekobot.profilePictureUrl(Nekos.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = Nekobot.display;
    }
    if (!Nekobot.args) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${Nekobot.prefix}${finalname} on
> _${Nekobot.prefix}${finalname} off_`
      );
    } else if (
      Nekobot.args[0] === "ON" ||
      Nekobot.args[0] === "on" ||
      Nekobot.args[0] === "On"
    ) {
      return await Nekobot.LinkList.findOne(
        {
          serverId: Nekos.chat,
        },
        async (error, server) => {
          if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
          if (!server) {
            new Nekobot.LinkList({
              serverId: Nekos.chat,
              value: "ON",
            }).save();
            return await Nekobot.imagebutton(
              Nekobot,
              Nekos,
              `*🔖Here, ${finalname} for ${Nekobot.pushname || Nekobot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
            return await Nekobot.imagebutton(
              Nekobot,
              Nekos,
              `*🔖Here, ${finalname} for ${Nekobot.pushname || Nekobot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else if (
      Nekobot.args[0] === "OFF" ||
      Nekobot.args[0] === "off" ||
      Nekobot.args[0] === "Off"
    ) {
      return await Nekobot.LinkList.findOne(
        {
          serverId: Nekos.chat,
        },
        async (error, server) => {
          if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
          if (!server) {
            return await Nekobot.imagebutton(
              Nekobot,
              Nekos,
              `*🔖Here, ${finalname} for ${Nekobot.pushname || Nekobot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
            await server.delete();
            return await Nekobot.imagebutton(
              Nekobot,
              Nekos,
              `*🔖Here, ${finalname} for ${Nekobot.pushname || Nekobot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${Nekobot.prefix}${finalname} on
> _${Nekobot.prefix}${finalname} off_`
      );
    }
  } catch (error) {
    return Nekobot.handlerror(Nekobot, Nekos);
  }
};
