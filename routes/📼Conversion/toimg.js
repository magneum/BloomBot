//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!NekoBot.quoted) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(NekoBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await NekoBot.downloadAndSaveMediaMessage(NekoBot.quoted, random);
      NekoBot.exec(
        NekoBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return NekoBot.reply(`*🕊️You:* ${
              NekoBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${Nekos.chat}

*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (NekoBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (NekoBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (NekoBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (NekoBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await NekoBot.sendMessage(Nekos.chat, {
              react: {
                text: "❌",
                key: Nekos.key,
              },
            });
            return Nekos.reply(
              `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} reply to Image_`
            );
          }

          return await NekoBot
            .sendMessage(
              Nekos.chat,
              {
                image: NekoBot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${NekoBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${Nekos.chat.split("@")[0]}
│║⦁ *📢Console:* ${NekoBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${NekoBot.pushname || NekoBot.Tname}:*`,
                footer: `*NekoBot™ bot By KRYKNZ*

_*💻HomePage:* ${NekoBot.ShowInfo}_
_*⛺HomeLog:* ${NekoBot.Showlogger}_`,
                mentions: [Nekos.sender],
                buttons: [
                  {
                    buttonId: `${NekoBot.prefix}Commands`,
                    buttonText: {
                      displayText: `${NekoBot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${NekoBot.prefix}NekoBot`,
                    buttonText: { displayText: `${NekoBot.prefix}🛰️NekoBot` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: Nekos,
              }
            )
            .then(
              NekoBot.fs.unlinkSync(Found),
              NekoBot.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return NekoBot.handlerror(NekoBot, Nekos, error);
  }
};
