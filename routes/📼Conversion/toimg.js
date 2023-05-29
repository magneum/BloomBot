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
    if (!Voxbot.quoted) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(Voxbot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await Voxbot.downloadAndSaveMediaMessage(Voxbot.quoted, random);
      Voxbot.exec(
        Voxbot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
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

          if (Voxbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (Voxbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (Voxbot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (Voxbot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
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
> _Could not find any Image in context!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} reply to Image_`
            );
          }

          return await Voxbot
            .sendMessage(
              Voxchat.chat,
              {
                image: Voxbot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${Voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${Voxchat.chat.split("@")[0]}
│║⦁ *📢Console:* ${Voxbot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*`,
                footer: `*Voxbot™ bot By KRYKNZ*

_*💻HomePage:* ${Voxbot.ShowInfo}_
_*⛺HomeLog:* ${Voxbot.Showlogger}_`,
                mentions: [Voxchat.sender],
                buttons: [
                  {
                    buttonId: `${Voxbot.prefix}Commands`,
                    buttonText: {
                      displayText: `${Voxbot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${Voxbot.prefix}Voxbot`,
                    buttonText: { displayText: `${Voxbot.prefix}🛰️Voxbot` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: Voxchat,
              }
            )
            .then(
              Voxbot.fs.unlinkSync(Found),
              Voxbot.fs.unlinkSync(random + ".png")
            );
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
> _Could not find any Image in context!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat, error);
  }
};
