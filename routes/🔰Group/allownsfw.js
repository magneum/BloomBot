//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Foxchat.isGroup) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> This is an Admin only Command!`
      );
    } else if (!isbotAdmin) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await Foxbot.profilePictureUrl(Foxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = Foxbot.display;
    }
    if (!Foxbot.args) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${Foxbot.prefix}${finalname} on
> ${Foxbot.prefix}${finalname} off`
      );
    } else if (
      Foxbot.args[0] === "ON" ||
      Foxbot.args[0] === "on" ||
      Foxbot.args[0] === "On"
    ) {
      return await Foxbot.nsfwCheck.findOne(
        {
          serverId: Foxchat.chat,
        },
        async (error, server) => {
          if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
          if (!server) {
            new Foxbot.nsfwCheck({
              serverId: Foxchat.chat,
              value: "ON",
            }).save();
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
        }
      );
    } else if (
      Foxbot.args[0] === "OFF" ||
      Foxbot.args[0] === "off" ||
      Foxbot.args[0] === "Off"
    ) {
      return await Foxbot.nsfwCheck.findOne(
        {
          serverId: Foxchat.chat,
        },
        async (error, server) => {
          if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
          if (!server) {
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else await server.delete();
          return await Foxbot.imagebutton(
            Foxbot,
            Foxchat,
            `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            𝕯𝖎𝖘𝖕𝖑𝖆𝖞
          );
        }
      );
    } else
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
    return Foxchat.reply(
      `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${Foxbot.prefix}${finalname} on
> ${Foxbot.prefix}${finalname} off`
    );
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat);
  }
};
