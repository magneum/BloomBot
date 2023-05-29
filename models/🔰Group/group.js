//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  voxbot,
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
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await voxbot.profilePictureUrl(voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/voxbot.png";
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
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          voxchat.reply(
            `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
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
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          voxchat.reply(
            `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (voxbot.args[0] === "antilink") {
      if (
        voxbot.args[1] === "ON" ||
        voxbot.args[1] === "on" ||
        voxbot.args[1] === "On"
      ) {
        return await voxbot.LinkList.findOne(
          {
            serverId: voxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return voxbot.reply(`*🕊️You:* ${
                voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              var newServer = new voxbot.LinkList({
                serverId: voxchat.chat,
                value: "ON",
              });
              await newServer.save();
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        voxbot.args[1] === "OFF" ||
        voxbot.args[1] === "off" ||
        voxbot.args[1] === "Off"
      ) {
        return await voxbot.LinkList.findOne(
          {
            serverId: voxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return voxbot.reply(`*🕊️You:* ${
                voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await voxbot.sendMessage(voxchat.chat, {
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
          `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} close/open
> _${voxbot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} close/open
> _${voxbot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat);
  }
};
