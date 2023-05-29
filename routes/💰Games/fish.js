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
    await Foxbot.Economy.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return Foxbot.handlerror(Foxbot, Foxchat, error);
        }

        if (!userEco) {
          new Foxbot.Economy({
            Id: Foxchat.sender,
            money: 0,
            daily: 0,
            timeout: 0,
            fishdone: Date.now(),
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return Foxbot.handlerror(Foxbot, Foxchat, error);
            });
          return await Foxbot.imagebutton(
            Foxbot,
            Foxchat,
            `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
            Foxbot.display
          );
        } else {
          if (userEco.fishtimeout - (Date.now() - userEco.fishdone) > 0) {
            var time = Foxbot.ms(
              userEco.fishtimeout - (Date.now() - userEco.fishdone)
            );
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Casted A Line. 
🕐𝗙𝗶𝘀𝗵 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              Foxbot.display
            );
          } else {
            var fishId = Math.floor(Math.random() * 10) + 1;
            var rarity;
            if (fishId < 5) rarity = `junk`;
            else if (fishId < 8) rarity = `common`;
            else if (fishId < 9) rarity = `uncommon`;
            else if (fishId < 10) rarity = `rare`;
            else rarity = `legendary`;
            var fishh = Foxbot.Fishes[rarity];
            var worth =
              Math.floor(Math.random() * (fishh.max - fishh.min + 1)) +
              fishh.min;
            userEco.money = userEco.money + worth;
            userEco.fishdone = Date.now();
            userEco.fishtimeout = 1800000;
            userEco.save().catch((error) => {
              return Foxbot.handlerror(Foxbot, Foxchat, error);
            });
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
🎣𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: You Cast Out Your Line And Caught A ${fishh.symbol}.
💵𝗪𝗼𝗿𝘁𝗵: It'd Sell for Around *${worth}*!
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: ${rarity}`,
              Foxbot.display
            );
          }
        }
      }
    );
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
