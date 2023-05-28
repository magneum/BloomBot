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
=======
module.exports = async (voxbot, voxchat, update, store) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  try {
    let Item;
    let NewLimit;
    let ItemPrice;
    var BadgeCatelog = [
      "🥉Bronze 20 Commands",
      "🥈Silver 40 Commands",
      "🥇Golden 60 Commands",
      "💍Platinum 80 Commands",
      "💎Diamond 100 Commands",
    ];
    var BadCatelog = ["bronze", "silver", "gold", "platinum", "diamond"];
    var RobCatelog = ["sword", "laptop", "charm"];

<<<<<<< HEAD
    if (WhatsBot.args[0] === "bronze") {
=======
    if (voxbot.args[0] === "bronze") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "silver") {
=======
    if (voxbot.args[0] === "silver") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "gold") {
=======
    if (voxbot.args[0] === "gold") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "platinum") {
=======
    if (voxbot.args[0] === "platinum") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "diamond") {
=======
    if (voxbot.args[0] === "diamond") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (WhatsBot.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (WhatsBot.args[0] === "laptop") {
=======
    if (voxbot.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (voxbot.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (voxbot.args[0] === "laptop") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "laptop";
      ItemPrice = 4000;
    }

<<<<<<< HEAD
    if (WhatsBot.args[0] === "bronze") {
=======
    if (voxbot.args[0] === "bronze") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "silver") {
=======
    if (voxbot.args[0] === "silver") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "gold") {
=======
    if (voxbot.args[0] === "gold") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "platinum") {
=======
    if (voxbot.args[0] === "platinum") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
<<<<<<< HEAD
    if (WhatsBot.args[0] === "diamond") {
=======
    if (voxbot.args[0] === "diamond") {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

<<<<<<< HEAD
    if (!WhatsBot.args) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (!voxbot.args) {
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
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} item_
> _You may use ${WhatsBot.prefix}shop to look for items..._`
      );
    }

    if (WhatsBot.args.length === 0) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
> _${voxbot.prefix}${finalname} item_
> _You may use ${voxbot.prefix}shop to look for items..._`
      );
    }

    if (voxbot.args.length === 0) {
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
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} item_
> _You may use ${WhatsBot.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(WhatsBot.args[0])) {
      WhatsBot.Economy.findOne(
=======
> _${voxbot.prefix}${finalname} item_
> _You may use ${voxbot.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(voxbot.args[0])) {
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
*💰Balance:* _Just Opened Your Account!_`,
              "./public/WhatsBot.jpg"
            );
          }
          WhatsBot.Robbery.findOne(
=======
              return voxbot.handlerror(voxbot, voxchat, error);
            });
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
              "./public/voxbot.jpg"
            );
          }
          voxbot.Robbery.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            {
              Id: voxchat.sender,
            },
            async (error, userRob) => {
              if (error) {
<<<<<<< HEAD
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              }
              if (!userRob) {
                new WhatsBot.Robbery({
=======
                return voxbot.handlerror(voxbot, voxchat, error);
              }
              if (!userRob) {
                new voxbot.Robbery({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  Id: voxchat.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
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
*💰Balance:* _Just Opened Your Account!_`,
                  "./public/WhatsBot.jpg"
                );
              } else {
                if (userEco.money < ItemPrice) {
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
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
                  "./public/voxbot.jpg"
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                    "./public/WhatsBot.jpg"
=======
                    "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
<<<<<<< HEAD
                    return WhatsBot.handlerror(WhatsBot, voxchat, error);
                  });
                  await userRob.save().catch((error) => {
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
                  await userRob.save().catch((error) => {
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                    "./public/WhatsBot.jpg"
=======
                    "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
<<<<<<< HEAD
                    return WhatsBot.handlerror(WhatsBot, voxchat, error);
                  });
                  await userRob.save().catch((error) => {
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
                  await userRob.save().catch((error) => {
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                    "./public/WhatsBot.jpg"
=======
                    "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
<<<<<<< HEAD
                    return WhatsBot.handlerror(WhatsBot, voxchat, error);
                  });
                  await userRob.save().catch((error) => {
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
                  await userRob.save().catch((error) => {
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                  return await voxbot.imagebutton(
                    voxbot,
                    voxchat,
                    `*🔖Here, ${finalname} for @${
                      voxbot.Tname || voxbot.pushname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                    "./public/WhatsBot.jpg"
                  );
                }
                return await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./public/WhatsBot.jpg"
=======
                    "./public/voxbot.jpg"
                  );
                }
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }
            }
          );
        }
      );
<<<<<<< HEAD
    } else if (BadCatelog.includes(WhatsBot.args[0])) {
      await WhatsBot.Economy.findOne(
=======
    } else if (BadCatelog.includes(voxbot.args[0])) {
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

          await WhatsBot.Bagde.findOne(
=======
            return voxbot.handlerror(voxbot, voxchat, error);
          }

          await voxbot.Bagde.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            {
              Id: voxchat.sender,
            },
            async (error, userBadge) => {
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
                  money: 0,
                  daily: 0,
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
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
<<<<<<< HEAD
                  "./public/WhatsBot.jpg"
=======
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }

              if (!userBadge) {
<<<<<<< HEAD
                let newBagdeUser = new WhatsBot.Bagde({
=======
                let newBagdeUser = new voxbot.Bagde({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  Id: voxchat.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
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
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
<<<<<<< HEAD
                  "./public/WhatsBot.jpg"
=======
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }

              if (userEco.money < ItemPrice) {
<<<<<<< HEAD
                return await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                  "./public/WhatsBot.jpg"
=======
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }

              if (userBadge.Badge === Item) {
<<<<<<< HEAD
                return await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./public/WhatsBot.jpg"
=======
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }

              if (
                userEco.money > ItemPrice &&
                BadgeCatelog.includes(Item) &&
                NewLimit > 0
              ) {
                userEco.money = userEco.money - ItemPrice;
                userBadge.Limits = NewLimit;
                userBadge.Badge = Item;
                await userEco.save().catch((error) => {
<<<<<<< HEAD
                  return WhatsBot.handlerror(WhatsBot, voxchat, error);
                });
                await userBadge.save().catch((error) => {
                  return WhatsBot.handlerror(WhatsBot, voxchat, error);
                });
                return await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
                  return voxbot.handlerror(voxbot, voxchat, error);
                });
                await userBadge.save().catch((error) => {
                  return voxbot.handlerror(voxbot, voxchat, error);
                });
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
<<<<<<< HEAD
                  "./public/WhatsBot.jpg"
=======
                  "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                );
              }
            }
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
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} item_
> _You may use ${WhatsBot.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
> _${voxbot.prefix}${finalname} item_
> _You may use ${voxbot.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
