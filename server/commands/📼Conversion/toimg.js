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
require("#/config/index.js");
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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Could not find any Image in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} reply to Image_`,
      );
    }

    if (/image/.test(BloomBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await BloomBot.downloadAndSaveMediaMessage(
        BloomBot.quoted,
        random,
      );
      BloomBot.exec(
        BloomBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return BloomBot.reply(`*🌻You:* ${
              BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
> ${error}`);
          }

          if (BloomBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (BloomBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (BloomBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (BloomBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
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
> _Could not find any Image in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} reply to Image_`,
            );
          }

          return await BloomBot.sendMessage(
            chatkey.chat,
            {
              image: BloomBot.fs.readFileSync(Found),
              caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🌻You:* ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭Chat Id:* ${chatkey.chat.split("@")[0]}
│║⦁ *📢Console:* ${BloomBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}`,
              footer: `*BloomBot™ bot By KRYKNZ*

_*💻homePage:* ${BloomBot.ShowInfo}_
_*⛺homeLog:* ${BloomBot.Showlogger}_`,
              mentions: [chatkey.sender],
              buttons: [
                {
                  buttonId: `${BloomBot.prefix}Commands`,
                  buttonText: {
                    displayText: `${BloomBot.prefix}✈️Commands`,
                  },
                  type: 1,
                },
                {
                  buttonId: `${BloomBot.prefix}BloomBot`,
                  buttonText: { displayText: `${BloomBot.prefix}🛰️BloomBot` },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            {
              quoted: chatkey,
            },
          ).then(
            BloomBot.fs.unlinkSync(Found),
            BloomBot.fs.unlinkSync(random + ".png"),
          );
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
> _Could not find any Image in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} reply to Image_`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
