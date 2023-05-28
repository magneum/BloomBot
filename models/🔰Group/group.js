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
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  whatsbot,
  whatschat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!whatschat.isGroup) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await whatsbot.profilePictureUrl(whatschat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/whatsbot.png";
    }

    if (whatsbot.args[0] === "open") {
      await whatsbot
        .groupSettingUpdate(whatschat.chat, "not_announcement")
        .then(
          async (res) =>
            await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `> *Group have been Opened by: ${
                whatsbot.pushname || whatsbot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          whatschat.reply(
            `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (whatsbot.args[0] === "close") {
      await whatsbot
        .groupSettingUpdate(whatschat.chat, "announcement")
        .then(
          async (res) =>
            await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `> *Group have been Closed by: ${
                whatsbot.pushname || whatsbot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          whatschat.reply(
            `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (whatsbot.args[0] === "antilink") {
      if (
        whatsbot.args[1] === "ON" ||
        whatsbot.args[1] === "on" ||
        whatsbot.args[1] === "On"
      ) {
        return await whatsbot.LinkList.findOne(
          {
            serverId: whatschat.chat,
          },
          async (error, server) => {
            if (error) {
              return whatsbot.reply(`*🕊️You:* ${
                whatsbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${whatschat.chat}

*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              let newServer = new whatsbot.LinkList({
                serverId: whatschat.chat,
                value: "ON",
              });
              await newServer.save();
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        whatsbot.args[1] === "OFF" ||
        whatsbot.args[1] === "off" ||
        whatsbot.args[1] === "Off"
      ) {
        return await whatsbot.LinkList.findOne(
          {
            serverId: whatschat.chat,
          },
          async (error, server) => {
            if (error) {
              return whatsbot.reply(`*🕊️You:* ${
                whatsbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${whatschat.chat}

*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await whatsbot.sendMessage(whatschat.chat, {
          react: {
            text: "❌",
            key: whatschat.key,
          },
        });
        return whatschat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} close/open
> _${whatsbot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} close/open
> _${whatsbot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat);
  }
};
