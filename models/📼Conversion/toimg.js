<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    if (!WhatsBot.quoted) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    if (!voxbot.quoted) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(WhatsBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await WhatsBot.downloadAndSaveMediaMessage(WhatsBot.quoted, random);
      WhatsBot.exec(
        WhatsBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return WhatsBot.reply(`*🕊️You:* ${
              WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${voxchat.chat}

*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
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
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

<<<<<<< HEAD
          if (WhatsBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (WhatsBot.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (WhatsBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (WhatsBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await WhatsBot.sendMessage(voxchat.chat, {
=======
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
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              react: {
                text: "❌",
                key: voxchat.key,
              },
            });
            return voxchat.reply(
<<<<<<< HEAD
              `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
              `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to Image_`
            );
          }

          return await WhatsBot
            .sendMessage(
              voxchat.chat,
              {
                image: WhatsBot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${voxchat.chat.split("@")[0]}
│║⦁ *📢Console:* ${WhatsBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*`,
                footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${WhatsBot.ShowInfo}_
_*⛺HomeLog:* ${WhatsBot.Showlogs}_`,
                mentions: [voxchat.sender],
                buttons: [
                  {
                    buttonId: `${WhatsBot.prefix}Commands`,
                    buttonText: {
                      displayText: `${WhatsBot.prefix}✈️Commands`,
=======
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
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    },
                    type: 1,
                  },
                  {
<<<<<<< HEAD
                    buttonId: `${WhatsBot.prefix}Synthia`,
                    buttonText: { displayText: `${WhatsBot.prefix}🛰️Synthia` },
=======
                    buttonId: `${voxbot.prefix}Synthia`,
                    buttonText: { displayText: `${voxbot.prefix}🛰️Synthia` },
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
              WhatsBot.fs.unlinkSync(Found),
              WhatsBot.fs.unlinkSync(random + ".png")
=======
              voxbot.fs.unlinkSync(Found),
              voxbot.fs.unlinkSync(random + ".png")
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            );
        }
      );
    } else {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
> _${voxbot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
