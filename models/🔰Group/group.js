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
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await WhatsBot.profilePictureUrl(voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/WhatsBot.jpg";
    }

    if (WhatsBot.args[0] === "open") {
      await WhatsBot
        .groupSettingUpdate(voxchat.chat, "not_announcement")
        .then(
          async (res) =>
            await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `> *Group have been Opened by: ${
                WhatsBot.pushname || WhatsBot.Tname
=======
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await voxbot.profilePictureUrl(voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/voxbot.jpg";
    }

    if (voxbot.args[0] === "open") {
      await voxbot
        .groupSettingUpdate(voxchat.chat, "not_announcement")
        .then(
          async (res) =>
            await voxbot.imagebutton(
              voxbot,
              voxchat,
              `> *Group have been Opened by: ${
                voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          voxchat.reply(
<<<<<<< HEAD
            `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
            `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> ${jsonformat(error)}`
          )
        );
<<<<<<< HEAD
    } else if (WhatsBot.args[0] === "close") {
      await WhatsBot
        .groupSettingUpdate(voxchat.chat, "announcement")
        .then(
          async (res) =>
            await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `> *Group have been Closed by: ${
                WhatsBot.pushname || WhatsBot.Tname
=======
    } else if (voxbot.args[0] === "close") {
      await voxbot
        .groupSettingUpdate(voxchat.chat, "announcement")
        .then(
          async (res) =>
            await voxbot.imagebutton(
              voxbot,
              voxchat,
              `> *Group have been Closed by: ${
                voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          voxchat.reply(
<<<<<<< HEAD
            `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
            `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> ${jsonformat(error)}`
          )
        );
<<<<<<< HEAD
    } else if (WhatsBot.args[0] === "antilink") {
      if (
        WhatsBot.args[1] === "ON" ||
        WhatsBot.args[1] === "on" ||
        WhatsBot.args[1] === "On"
      ) {
        return await WhatsBot.LinkList.findOne(
=======
    } else if (voxbot.args[0] === "antilink") {
      if (
        voxbot.args[1] === "ON" ||
        voxbot.args[1] === "on" ||
        voxbot.args[1] === "On"
      ) {
        return await voxbot.LinkList.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          {
            serverId: voxchat.chat,
          },
          async (error, server) => {
            if (error) {
<<<<<<< HEAD
              return WhatsBot.reply(`*🕊️You:* ${
                WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
              return voxbot.reply(`*🕊️You:* ${
                voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
<<<<<<< HEAD
              let newServer = new WhatsBot.LinkList({
=======
              let newServer = new voxbot.LinkList({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                serverId: voxchat.chat,
                value: "ON",
              });
              await newServer.save();
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
=======
              return await voxbot.imagebutton(
                voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                voxchat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
=======
              return await voxbot.imagebutton(
                voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                voxchat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
<<<<<<< HEAD
        WhatsBot.args[1] === "OFF" ||
        WhatsBot.args[1] === "off" ||
        WhatsBot.args[1] === "Off"
      ) {
        return await WhatsBot.LinkList.findOne(
=======
        voxbot.args[1] === "OFF" ||
        voxbot.args[1] === "off" ||
        voxbot.args[1] === "Off"
      ) {
        return await voxbot.LinkList.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          {
            serverId: voxchat.chat,
          },
          async (error, server) => {
            if (error) {
<<<<<<< HEAD
              return WhatsBot.reply(`*🕊️You:* ${
                WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
              return voxbot.reply(`*🕊️You:* ${
                voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
=======
              return await voxbot.imagebutton(
                voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                voxchat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
=======
              return await voxbot.imagebutton(
                voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                voxchat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
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
> _Argument Missing!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} close/open
> _${WhatsBot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
> _${voxbot.prefix}${finalname} close/open
> _${voxbot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
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
> _Argument Missing!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} close/open
> _${WhatsBot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat);
=======
> _${voxbot.prefix}${finalname} close/open
> _${voxbot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
