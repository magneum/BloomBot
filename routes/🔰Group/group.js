//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!nekos.isGroup) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await NekoBot.profilePictureUrl(nekos.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = NekoBot.display;
    }

    if (NekoBot.args[0] === "open") {
      await NekoBot.groupSettingUpdate(nekos.chat, "not_announcement")
        .then(
          async (res) =>
            await NekoBot.imagebutton(
              NekoBot,
              nekos,
              `> *Group have been Opened by: ${
                NekoBot.pushname || NekoBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          nekos.reply(
            `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (NekoBot.args[0] === "close") {
      await NekoBot.groupSettingUpdate(nekos.chat, "announcement")
        .then(
          async (res) =>
            await NekoBot.imagebutton(
              NekoBot,
              nekos,
              `> *Group have been Closed by: ${
                NekoBot.pushname || NekoBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          nekos.reply(
            `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (NekoBot.args[0] === "antilink") {
      if (
        NekoBot.args[1] === "ON" ||
        NekoBot.args[1] === "on" ||
        NekoBot.args[1] === "On"
      ) {
        return await NekoBot.LinkList.findOne(
          {
            serverId: nekos.chat,
          },
          async (error, server) => {
            if (error) {
              return NekoBot.reply(`*🕊️You:* ${
                NekoBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${nekos.chat}

*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              var newServer = new NekoBot.LinkList({
                serverId: nekos.chat,
                value: "ON",
              });
              await newServer.save();
              return await NekoBot.imagebutton(
                NekoBot,
                nekos,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await NekoBot.imagebutton(
                NekoBot,
                nekos,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        NekoBot.args[1] === "OFF" ||
        NekoBot.args[1] === "off" ||
        NekoBot.args[1] === "Off"
      ) {
        return await NekoBot.LinkList.findOne(
          {
            serverId: nekos.chat,
          },
          async (error, server) => {
            if (error) {
              return NekoBot.reply(`*🕊️You:* ${
                NekoBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${nekos.chat}

*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await NekoBot.imagebutton(
                NekoBot,
                nekos,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await NekoBot.imagebutton(
                NekoBot,
                nekos,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await NekoBot.sendMessage(nekos.chat, {
          react: {
            text: "❌",
            key: nekos.key,
          },
        });
        return nekos.reply(
          `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} close/open
> _${NekoBot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} close/open
> _${NekoBot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return NekoBot.handlerror(NekoBot, nekos);
  }
};
