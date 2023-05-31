//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to Image_`
      );
    }

    if (/image/.test(BloomBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await BloomBot.downloadAndSaveMediaMessage(BloomBot.quoted, random);
      BloomBot.exec(
        BloomBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return BloomBot.reply(`*🌻You:* ${
              BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢ChatId:* ${mags.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
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
            await BloomBot.sendMessage(mags.chat, {
              react: {
                text: "❌",
                key: mags.key,
              },
            });
            return mags.reply(
              `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to Image_`
            );
          }

          return await BloomBot.sendMessage(
            mags.chat,
            {
              image: BloomBot.fs.readFileSync(Found),
              caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🌻You:* ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${mags.chat.split("@")[0]}
│║⦁ *📢Console:* ${BloomBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*`,
              footer: `*BloomBot™ bot By KRYKNZ*

_*💻HomePage:* ${BloomBot.ShowInfo}_
_*⛺HomeLog:* ${BloomBot.Showlogger}_`,
              mentions: [mags.sender],
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
              quoted: mags,
            }
          ).then(
            BloomBot.fs.unlinkSync(Found),
            BloomBot.fs.unlinkSync(random + ".png")
          );
        }
      );
    } else {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to Image_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
