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
    var JworkR = whatsbot.Jwork[Math.floor(Math.random() * whatsbot.Jwork.length)];
    whatsbot.Economy.findOne(
      {
        Id: whatschat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return whatsbot.handlerror(whatsbot, whatschat, error);
        }

        if (!userEco) {
          new whatsbot.Economy({
            Id: whatschat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: Date.now(),
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
          return await whatsbot.imagebutton(
            whatsbot,
            whatschat,
            `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
            "./public/whatsbot.png"
          );
        } else {
          if (userEco.worktimeout - (Date.now() - userEco.workdone) > 0) {
            let time = whatsbot.ms(
              userEco.worktimeout - (Date.now() - userEco.workdone)
            );
            return await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌ 𝗘𝗿𝗿𝗼𝗿: _You have already worked recently._ 
🕐 𝗪𝗼𝗿𝗸_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              "./public/whatsbot.png"
            );
          } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            userEco.money = userEco.money + amount;
            userEco.workdone = Date.now();
            userEco.worktimeout = 900000;
            userEco.save().catch((error) => {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
            return await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
👔𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ${JworkR}.
🪙𝗘𝗮𝗿𝗻𝗲𝗱: ${amount}`,
              "./public/whatsbot.png"
            );
          }
        }
      }
    );
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
