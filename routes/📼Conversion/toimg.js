//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Foxbot.quoted) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(Foxbot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await Foxbot.downloadAndSaveMediaMessage(Foxbot.quoted, random);
      Foxbot.exec(
        Foxbot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return Foxbot.reply(`*🕊️You:* ${
              Foxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${Foxchat.chat}

*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (Foxbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (Foxbot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (Foxbot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (Foxbot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await Foxbot.sendMessage(Foxchat.chat, {
              react: {
                text: "❌",
                key: Foxchat.key,
              },
            });
            return Foxchat.reply(
              `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} reply to Image_`
            );
          }

          return await Foxbot
            .sendMessage(
              Foxchat.chat,
              {
                image: Foxbot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${Foxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${Foxchat.chat.split("@")[0]}
│║⦁ *📢Console:* ${Foxbot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*`,
                footer: `*Foxbot™ bot By KRYKNZ*

_*💻HomePage:* ${Foxbot.ShowInfo}_
_*⛺HomeLog:* ${Foxbot.Showlogger}_`,
                mentions: [Foxchat.sender],
                buttons: [
                  {
                    buttonId: `${Foxbot.prefix}Commands`,
                    buttonText: {
                      displayText: `${Foxbot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${Foxbot.prefix}Foxbot`,
                    buttonText: { displayText: `${Foxbot.prefix}🛰️Foxbot` },
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
              Foxbot.fs.unlinkSync(Found),
              Foxbot.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
