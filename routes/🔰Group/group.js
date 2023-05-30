//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸOpenBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸOpenBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, vChat, isAdmin, isbotAdmin) => {
  try {
    if (!vChat.isGroup) {
      await OpenBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await OpenBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await OpenBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await OpenBot.profilePictureUrl(vChat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = OpenBot.display;
    }

    if (OpenBot.args[0] === "open") {
      await OpenBot.groupSettingUpdate(vChat.chat, "not_announcement")
        .then(
          async (res) =>
            await OpenBot.imagebutton(
              OpenBot,
              vChat,
              `> *Group have been Opened by: ${
                OpenBot.pushname || OpenBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          vChat.reply(
            `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (OpenBot.args[0] === "close") {
      await OpenBot.groupSettingUpdate(vChat.chat, "announcement")
        .then(
          async (res) =>
            await OpenBot.imagebutton(
              OpenBot,
              vChat,
              `> *Group have been Closed by: ${
                OpenBot.pushname || OpenBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          vChat.reply(
            `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (OpenBot.args[0] === "antilink") {
      if (
        OpenBot.args[1] === "ON" ||
        OpenBot.args[1] === "on" ||
        OpenBot.args[1] === "On"
      ) {
        return await OpenBot.LinkList.findOne(
          {
            serverId: vChat.chat,
          },
          async (error, server) => {
            if (error) {
              return OpenBot.reply(`*😺You:* ${
                OpenBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${vChat.chat}

*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              var newServer = new OpenBot.LinkList({
                serverId: vChat.chat,
                value: "ON",
              });
              await newServer.save();
              return await OpenBot.imagebutton(
                OpenBot,
                vChat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await OpenBot.imagebutton(
                OpenBot,
                vChat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        OpenBot.args[1] === "OFF" ||
        OpenBot.args[1] === "off" ||
        OpenBot.args[1] === "Off"
      ) {
        return await OpenBot.LinkList.findOne(
          {
            serverId: vChat.chat,
          },
          async (error, server) => {
            if (error) {
              return OpenBot.reply(`*😺You:* ${
                OpenBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${vChat.chat}

*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await OpenBot.imagebutton(
                OpenBot,
                vChat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await OpenBot.imagebutton(
                OpenBot,
                vChat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await OpenBot.sendMessage(vChat.chat, {
          react: {
            text: "❌",
            key: vChat.key,
          },
        });
        return vChat.reply(
          `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${OpenBot.prefix}${fpth} close/open
> _${OpenBot.prefix}${fpth} antilink on/off`
        );
      }
    } else {
      await OpenBot.sendMessage(vChat.chat, {
        react: {
          text: "❌",
          key: vChat.key,
        },
      });
      return vChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${OpenBot.prefix}${fpth} close/open
> _${OpenBot.prefix}${fpth} antilink on/off`
      );
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, vChat, error);
  }
};
module.exports.aliases = [];
