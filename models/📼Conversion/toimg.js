//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    if (!voxbot.quoted) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(voxbot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await voxbot.downloadAndSaveMediaMessage(voxbot.quoted, random);
      voxbot.exec(
        voxbot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return voxbot.reply(`*🕊️You:* ${
              voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (voxbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (voxbot.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (voxbot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (voxbot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await voxbot.sendMessage(voxchat.chat, {
              react: {
                text: "❌",
                key: voxchat.key,
              },
            });
            return voxchat.reply(
              `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} reply to Image_`
            );
          }

          return await voxbot
            .sendMessage(
              voxchat.chat,
              {
                image: voxbot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${voxchat.chat.split("@")[0]}
│║⦁ *📢Console:* ${voxbot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*`,
                footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${voxbot.ShowInfo}_
_*⛺HomeLog:* ${voxbot.Showlogs}_`,
                mentions: [voxchat.sender],
                buttons: [
                  {
                    buttonId: `${voxbot.prefix}Commands`,
                    buttonText: {
                      displayText: `${voxbot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${voxbot.prefix}Synthia`,
                    buttonText: { displayText: `${voxbot.prefix}🛰️Synthia` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: voxchat,
              }
            )
            .then(
              voxbot.fs.unlinkSync(Found),
              voxbot.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
  }
};
