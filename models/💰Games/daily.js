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
    WhatsBot.Economy.findOne(
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    voxbot.Economy.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        Id: voxchat.sender,
      },
      async (error, userEco) => {
        if (error) {
<<<<<<< HEAD
          return WhatsBot.handlerror(WhatsBot, voxchat, error);
        }

        if (!userEco) {
          new WhatsBot.Economy({
=======
          return voxbot.handlerror(voxbot, voxchat, error);
        }

        if (!userEco) {
          new voxbot.Economy({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            Id: voxchat.sender,
            money: 500,
            daily: Date.now(),
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
<<<<<<< HEAD
              return WhatsBot.handlerror(WhatsBot, voxchat, error);
            });
          return await WhatsBot.imagebutton(
            WhatsBot,
            voxchat,
            `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
              return voxbot.handlerror(voxbot, voxchat, error);
            });
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*🧈Status:* Added To DB!
✅𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
*💰Balance:* Just Opened Your Account!`,
<<<<<<< HEAD
            "./public/WhatsBot.jpg"
          );
        } else {
          if (userEco.timeout - (Date.now() - userEco.daily) > 0) {
            let ᴄʟᴏᴄᴋ = WhatsBot.ms(
              userEco.timeout - (Date.now() - userEco.daily)
            );
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
💵𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s`,
              "./public/WhatsBot.jpg"
=======
            "./public/voxbot.jpg"
          );
        } else {
          if (userEco.timeout - (Date.now() - userEco.daily) > 0) {
            let ᴄʟᴏᴄᴋ = voxbot.ms(
              userEco.timeout - (Date.now() - userEco.daily)
            );
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
💵𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s`,
              "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            );
          }

          userEco.daily = Date.now();
          userEco.money = userEco.money + 500;
          userEco.save().catch((error) => {
<<<<<<< HEAD
            return WhatsBot.handlerror(WhatsBot, voxchat, error);
          });
          return await WhatsBot.imagebutton(
            WhatsBot,
            voxchat,
            `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`,
            "./public/WhatsBot.jpg"
=======
            return voxbot.handlerror(voxbot, voxchat, error);
          });
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`,
            "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          );
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
