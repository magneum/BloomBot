<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
<<<<<<< HEAD
  WhatsBot,
=======
  voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
<<<<<<< HEAD
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await WhatsBot.profilePictureUrl(voxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/WhatsBot.jpg";
    }
    if (!WhatsBot.args) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await voxbot.profilePictureUrl(voxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/voxbot.jpg";
    }
    if (!voxbot.args) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage*   
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} on
> _${WhatsBot.prefix}${finalname} off_`
      );
    } else if (
      WhatsBot.args[0] === "ON" ||
      WhatsBot.args[0] === "on" ||
      WhatsBot.args[0] === "On"
    ) {
      return await WhatsBot.LinkList.findOne(
=======
> _${voxbot.prefix}${finalname} on
> _${voxbot.prefix}${finalname} off_`
      );
    } else if (
      voxbot.args[0] === "ON" ||
      voxbot.args[0] === "on" ||
      voxbot.args[0] === "On"
    ) {
      return await voxbot.LinkList.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        {
          serverId: voxchat.chat,
        },
        async (error, server) => {
<<<<<<< HEAD
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!server) {
            new WhatsBot.LinkList({
              serverId: voxchat.chat,
              value: "ON",
            }).save();
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
          if (error) return voxbot.handlerror(voxbot, voxchat, error);
          if (!server) {
            new voxbot.LinkList({
              serverId: voxchat.chat,
              value: "ON",
            }).save();
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
<<<<<<< HEAD
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else if (
<<<<<<< HEAD
      WhatsBot.args[0] === "OFF" ||
      WhatsBot.args[0] === "off" ||
      WhatsBot.args[0] === "Off"
    ) {
      return await WhatsBot.LinkList.findOne(
=======
      voxbot.args[0] === "OFF" ||
      voxbot.args[0] === "off" ||
      voxbot.args[0] === "Off"
    ) {
      return await voxbot.LinkList.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        {
          serverId: voxchat.chat,
        },
        async (error, server) => {
<<<<<<< HEAD
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!server) {
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
          if (error) return voxbot.handlerror(voxbot, voxchat, error);
          if (!server) {
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
            await server.delete();
<<<<<<< HEAD
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage*   
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} on
> _${WhatsBot.prefix}${finalname} off_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat);
=======
> _${voxbot.prefix}${finalname} on
> _${voxbot.prefix}${finalname} off_`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
