//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (FoxBot, Foxchat, update, store) => {
  try {
    if (!FoxBot.quoted) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(FoxBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await FoxBot.downloadAndSaveMediaMessage(FoxBot.quoted, random);
      FoxBot.exec(
        FoxBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return FoxBot.reply(`*🕊️You:* ${
              FoxBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${Foxchat.chat}

*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (FoxBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (FoxBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (FoxBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (FoxBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await FoxBot.sendMessage(Foxchat.chat, {
              react: {
                text: "❌",
                key: Foxchat.key,
              },
            });
            return Foxchat.reply(
              `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} reply to Image_`
            );
          }

          return await FoxBot
            .sendMessage(
              Foxchat.chat,
              {
                image: FoxBot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${FoxBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${Foxchat.chat.split("@")[0]}
│║⦁ *📢Console:* ${FoxBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*`,
                footer: `*FoxBot™ Bot By KRYKNZ*

_*💻HomePage:* ${FoxBot.ShowInfo}_
_*⛺HomeLog:* ${FoxBot.Showlogger}_`,
                mentions: [Foxchat.sender],
                buttons: [
                  {
                    buttonId: `${FoxBot.prefix}Commands`,
                    buttonText: {
                      displayText: `${FoxBot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${FoxBot.prefix}FoxBot`,
                    buttonText: { displayText: `${FoxBot.prefix}🛰️FoxBot` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: Foxchat,
              }
            )
            .then(
              FoxBot.fs.unlinkSync(Found),
              FoxBot.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat, error);
  }
};
