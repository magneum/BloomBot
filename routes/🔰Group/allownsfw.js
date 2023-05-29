//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Voxchat.isGroup) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> This is an Admin only Command!`
      );
    } else if (!isbotAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await Voxbot.profilePictureUrl(Voxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = Voxbot.display;
    }
    if (!Voxbot.args) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${Voxbot.prefix}${finalname} on
> ${Voxbot.prefix}${finalname} off`
      );
    } else if (
      Voxbot.args[0] === "ON" ||
      Voxbot.args[0] === "on" ||
      Voxbot.args[0] === "On"
    ) {
      return await Voxbot.nsfwCheck.findOne(
        {
          serverId: Voxchat.chat,
        },
        async (error, server) => {
          if (error) return Voxbot.handlerror(Voxbot, Voxchat, error);
          if (!server) {
            new Voxbot.nsfwCheck({
              serverId: Voxchat.chat,
              value: "ON",
            }).save();
            return await Voxbot.imagebutton(
              Voxbot,
              Voxchat,
              `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else
            return await Voxbot.imagebutton(
              Voxbot,
              Voxchat,
              `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
        }
      );
    } else if (
      Voxbot.args[0] === "OFF" ||
      Voxbot.args[0] === "off" ||
      Voxbot.args[0] === "Off"
    ) {
      return await Voxbot.nsfwCheck.findOne(
        {
          serverId: Voxchat.chat,
        },
        async (error, server) => {
          if (error) return Voxbot.handlerror(Voxbot, Voxchat, error);
          if (!server) {
            return await Voxbot.imagebutton(
              Voxbot,
              Voxchat,
              `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else await server.delete();
          return await Voxbot.imagebutton(
            Voxbot,
            Voxchat,
            `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            𝕯𝖎𝖘𝖕𝖑𝖆𝖞
          );
        }
      );
    } else
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
    return Voxchat.reply(
      `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${Voxbot.prefix}${finalname} on
> ${Voxbot.prefix}${finalname} off`
    );
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat);
  }
};
