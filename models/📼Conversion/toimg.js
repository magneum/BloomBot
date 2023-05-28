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
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    if (!whatsbot.quoted) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(whatsbot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await whatsbot.downloadAndSaveMediaMessage(whatsbot.quoted, random);
      whatsbot.exec(
        whatsbot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
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

          if (whatsbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (whatsbot.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (whatsbot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (whatsbot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
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
> _Could not find any Image in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply to Image_`
            );
          }

          return await whatsbot
            .sendMessage(
              whatschat.chat,
              {
                image: whatsbot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${whatsbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${whatschat.chat.split("@")[0]}
│║⦁ *📢Console:* ${whatsbot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*`,
                footer: `*whatsbot™ Bot By KRYKNZ*

_*💻HomePage:* ${whatsbot.ShowInfo}_
_*⛺HomeLog:* ${whatsbot.Showlogs}_`,
                mentions: [whatschat.sender],
                buttons: [
                  {
                    buttonId: `${whatsbot.prefix}Commands`,
                    buttonText: {
                      displayText: `${whatsbot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${whatsbot.prefix}Synthia`,
                    buttonText: { displayText: `${whatsbot.prefix}🛰️Synthia` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: whatschat,
              }
            )
            .then(
              whatsbot.fs.unlinkSync(Found),
              whatsbot.fs.unlinkSync(random + ".png")
            );
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
> _Could not find any Image in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
