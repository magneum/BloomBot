"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    if (!chatkey.isGroup) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _It's a group command!_`,
      );
    }
    if (!isAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _This is an Admin only Command!_`,
      );
    }
    if (!isbotAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _bot not Admin!_`,
      );
    }

    try {
      ProfilePic = await BloomBot.profilePictureUrl(chatkey.sender, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }

    if (BloomBot.args[0] === "Bloom") {
      await BloomBot.groupSettingUpdate(chatkey.chat, "not_announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `> *Group have been Bloomed by: ${
                BloomBot.pushname || BloomBot.tagname
              }*`,
              ProfilePic,
            ),
        )
        .catch(async (error) =>
          chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
> ${jsonformat(error)}`,
          ),
        );
    } else if (BloomBot.args[0] === "close") {
      await BloomBot.groupSettingUpdate(chatkey.chat, "announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `> *Group have been Closed by: ${
                BloomBot.pushname || BloomBot.tagname
              }*`,
              ProfilePic,
            ),
        )
        .catch(async (error) =>
          chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
> ${jsonformat(error)}`,
          ),
        );
    } else if (BloomBot.args[0] === "antilink") {
      if (
        BloomBot.args[1] === "ON" ||
        BloomBot.args[1] === "on" ||
        BloomBot.args[1] === "On"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: chatkey.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
> ${error}`);
            }

            if (!server) {
              const newServer = new BloomBot.LinkList({
                serverId: chatkey.chat,
                value: "ON",
              });
              await newServer.save();
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                ProfilePic,
              );
            } else {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                ProfilePic,
              );
            }
          },
        );
      } else if (
        BloomBot.args[1] === "OFF" ||
        BloomBot.args[1] === "off" ||
        BloomBot.args[1] === "Off"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: chatkey.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
> ${error}`);
            }

            if (!server) {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                ProfilePic,
              );
            } else {
              await server.delete();
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                ProfilePic,
              );
            }
          },
        );
      } else {
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Argument Missing!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} close/Bloom
⦁ _${BloomBot.prefix}${currFile} antilink on/off`,
        );
      }
    } else {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Argument Missing!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} close/Bloom
⦁ _${BloomBot.prefix}${currFile} antilink on/off`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
