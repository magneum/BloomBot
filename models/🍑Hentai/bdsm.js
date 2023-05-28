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
    return await WhatsBot.nsfwCheck.findOne(
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    return await voxbot.nsfwCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        serverId: voxchat.chat,
      },
      async (error, server) => {
<<<<<<< HEAD
        if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
        if (!server) {
          await WhatsBot.sendMessage(voxchat.chat, {
=======
        if (error) return voxbot.handlerror(voxbot, voxchat, error);
        if (!server) {
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

*❌ Error* 
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
        } else {
<<<<<<< HEAD
          WhatsBot
            .magfetch(
              WhatsBot,
=======
          voxbot
            .magfetch(
              voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              "https://magneum.vercel.app/api/hentai?q=" + finalname
            )
            .then(async (response) => {
              var fetchedata = response.data;
              console.log(fetchedata);
              if (!fetchedata[0].meta.url) {
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

*❌ Error* 
> There has been an API Error. Please try again later.`
                );
              } else
<<<<<<< HEAD
                await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname}:*
=======
                await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

> *Description:* ${fetchedata[0].meta.description}
> *Api Fetch Url:* https://magneum.vercel.app/api/hentai`,
                  fetchedata[0].meta.url
                );
            });
        }
      }
    );
  } catch (error) {
<<<<<<< HEAD
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
