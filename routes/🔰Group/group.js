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
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await Voxbot.profilePictureUrl(Voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = Voxbot.display;
    }

    if (Voxbot.args[0] === "open") {
      await Voxbot.groupSettingUpdate(Voxchat.chat, "not_announcement")
        .then(
          async (res) =>
            await Voxbot.imagebutton(
              Voxbot,
              Voxchat,
              `> *Group have been Opened by: ${
                Voxbot.pushname || Voxbot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          Voxchat.reply(
            `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (Voxbot.args[0] === "close") {
      await Voxbot.groupSettingUpdate(Voxchat.chat, "announcement")
        .then(
          async (res) =>
            await Voxbot.imagebutton(
              Voxbot,
              Voxchat,
              `> *Group have been Closed by: ${
                Voxbot.pushname || Voxbot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          Voxchat.reply(
            `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (Voxbot.args[0] === "antilink") {
      if (
        Voxbot.args[1] === "ON" ||
        Voxbot.args[1] === "on" ||
        Voxbot.args[1] === "On"
      ) {
        return await Voxbot.LinkList.findOne(
          {
            serverId: Voxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return Voxbot.reply(`*🕊️You:* ${
                Voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${Voxchat.chat}

*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              var newServer = new Voxbot.LinkList({
                serverId: Voxchat.chat,
                value: "ON",
              });
              await newServer.save();
              return await Voxbot.imagebutton(
                Voxbot,
                Voxchat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await Voxbot.imagebutton(
                Voxbot,
                Voxchat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        Voxbot.args[1] === "OFF" ||
        Voxbot.args[1] === "off" ||
        Voxbot.args[1] === "Off"
      ) {
        return await Voxbot.LinkList.findOne(
          {
            serverId: Voxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return Voxbot.reply(`*🕊️You:* ${
                Voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${Voxchat.chat}

*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await Voxbot.imagebutton(
                Voxbot,
                Voxchat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await Voxbot.imagebutton(
                Voxbot,
                Voxchat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await Voxbot.sendMessage(Voxchat.chat, {
          react: {
            text: "❌",
            key: Voxchat.key,
          },
        });
        return Voxchat.reply(
          `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} close/open
> _${Voxbot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} close/open
> _${Voxbot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat);
  }
};
