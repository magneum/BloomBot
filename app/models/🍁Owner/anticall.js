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
  participants
) => {
  try {
    if (!BloomBot.byMyself) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _It's an Owner command!_`
      );
    }

    if (!BloomBot.args) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:*   
⦁ _${BloomBot.prefix}${currFile} on
⦁ _${BloomBot.prefix}${currFile} off_`
      );
    }

    switch (BloomBot.args[0].toLowerCase()) {
      case "on":
        return await BloomBot.Anticall.findOne(
          {
            Id: chatkey.sender,
          },
          async (error, server) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!server) {
              new BloomBot.Anticall({
                Id: chatkey.sender,
                value: "ON",
              }).save();
            }

            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
*🎖️Anticall:* ✅On`,
              BloomBot.display
            );
          }
        );

      case "off":
        return await BloomBot.Anticall.findOne(
          {
            Id: chatkey.sender,
          },
          async (error, server) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!server) {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
*🎖️Anticall:* ❌OFF`,
                BloomBot.display
              );
            } else {
              await server.delete();
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
*🎖️Anticall:* ❌OFF`,
                BloomBot.display
              );
            }
          }
        );

      default:
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:*   
⦁ _${BloomBot.prefix}${currFile} on_
⦁ _${BloomBot.prefix}${currFile} off_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
