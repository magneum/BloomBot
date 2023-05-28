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
    await WhatsBot.Economy.findOne(
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    await voxbot.Economy.findOne(
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
          let newUser = new WhatsBot.Economy({
=======
          return voxbot.handlerror(voxbot, voxchat, error);
        }

        if (!userEco) {
          let newUser = new voxbot.Economy({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            Id: voxchat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
<<<<<<< HEAD
            return WhatsBot.handlerror(WhatsBot, voxchat, error);
          });
          return await WhatsBot.imagebutton(
            WhatsBot,
            voxchat,
            `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            "./public/WhatsBot.jpg"
          );
        } else {
          await WhatsBot.Zoology.findOne(
=======
            return voxbot.handlerror(voxbot, voxchat, error);
          });
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            "./public/voxbot.jpg"
          );
        } else {
          await voxbot.Zoology.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            {
              Id: voxchat.sender,
            },
            async (error, userZoo) => {
              if (error) return Caught(ӄryӄnz, Synthia, error);
              if (!userZoo) {
<<<<<<< HEAD
                new WhatsBot.Zoology({
=======
                new voxbot.Zoology({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  Id: voxchat.sender,
                  zoodone: Date.now(),
                  zootimeout: 1800000,
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
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
                  "./public/WhatsBot.jpg"
                );
              } else {
                if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                  let time = WhatsBot.ms(
                    userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                  );
                  return await WhatsBot.imagebutton(
                    WhatsBot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      WhatsBot.Tname || WhatsBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    "./public/WhatsBot.jpg"
=======
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
                  "./public/voxbot.jpg"
                );
              } else {
                if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                  let time = voxbot.ms(
                    userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                  );
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  );
                } else {
                  let zooId = Math.floor(Math.random() * 10) + 1;
                  let rarity;
                  if (zooId < 5) rarity = `small`;
                  else if (zooId < 8) rarity = `medium`;
                  else if (zooId < 9) rarity = `big`;
                  else if (zooId < 10) rarity = `large`;
                  else rarity = `legendary`;
<<<<<<< HEAD
                  let anim = WhatsBot.animals[rarity];
=======
                  let anim = voxbot.animals[rarity];
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  let worth =
                    Math.floor(Math.random() * (anim.max - anim.min + 1)) +
                    anim.min;
                  userEco.money = userEco.money + worth;
                  userZoo.zoodone = Date.now();
                  userZoo.zootimeout = 1800000;
                  userZoo.save().catch((error) => {
<<<<<<< HEAD
                    return WhatsBot.handlerror(WhatsBot, voxchat, error);
                  });
                  return await WhatsBot.imagebutton(
                    WhatsBot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      WhatsBot.Tname || WhatsBot.pushname
=======
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    }:*
🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`,
<<<<<<< HEAD
                    "./public/WhatsBot.jpg"
=======
                    "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  );
                }
              }
            }
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
