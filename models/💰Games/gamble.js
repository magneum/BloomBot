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
    let formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!WhatsBot.args[0] && !WhatsBot.args[1]) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    let formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!voxbot.args[0] && !voxbot.args[1]) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

<<<<<<< HEAD
    if (formatColor.test(WhatsBot.args[0])) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (formatColor.test(voxbot.args[0])) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

<<<<<<< HEAD
    if (formatAmount.test(WhatsBot.args[1])) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (formatAmount.test(voxbot.args[1])) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
<<<<<<< HEAD
      !WhatsBot.args[0].includes("red") &&
      !WhatsBot.args[0].includes("black") &&
      !WhatsBot.args[0].includes("purple")
    ) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      !voxbot.args[0].includes("red") &&
      !voxbot.args[0].includes("black") &&
      !voxbot.args[0].includes("purple")
    ) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

<<<<<<< HEAD
    let ColorRoom = WhatsBot.args[0];
    let AmountRoom = parseInt(WhatsBot.args[1]);
    if (AmountRoom < 50) {
      return await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./public/WhatsBot.jpg"
=======
    let ColorRoom = voxbot.args[0];
    let AmountRoom = parseInt(voxbot.args[1]);
    if (AmountRoom < 50) {
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      );
    }

    if (AmountRoom > 800) {
<<<<<<< HEAD
      return await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./public/WhatsBot.jpg"
=======
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
<<<<<<< HEAD
      return await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./public/WhatsBot.jpg"
=======
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
<<<<<<< HEAD
      return await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./public/WhatsBot.jpg"
=======
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
<<<<<<< HEAD
      return await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./public/WhatsBot.jpg"
      );
    }

    WhatsBot.Economy.findOne(
=======
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./public/voxbot.jpg"
      );
    }

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
*💰Balance:* Just Opened Your Account!`,
            "./public/WhatsBot.jpg"
          );
        }

        WhatsBot.Gamble.findOne(
=======
            return voxbot.handlerror(voxbot, voxchat, error);
          });
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            "./public/voxbot.jpg"
          );
        }

        voxbot.Gamble.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          {
            Id: voxchat.sender,
          },
          async (error, userGamble) => {
            if (error) {
<<<<<<< HEAD
              return WhatsBot.handlerror(WhatsBot, voxchat, error);
            }

            if (!userGamble) {
              let newUser = new WhatsBot.Gamble({
=======
              return voxbot.handlerror(voxbot, voxchat, error);
            }

            if (!userGamble) {
              let newUser = new voxbot.Gamble({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                Id: voxchat.sender,
                serverId: voxchat.chat,
                Gambledone: 0,
                Gambletimeout: 480000,
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
🦋Try Again!`,
                "./public/WhatsBot.jpg"
=======
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (
              userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
<<<<<<< HEAD
              let time = WhatsBot.ms(
                userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
              );
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./public/WhatsBot.jpg"
=======
              let time = voxbot.ms(
                userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
              );
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            function isOdd(num) {
              if (num % 2 == 0) return false;
              else if (num % 2 == 1) return true;
              else if (num % 3 == 0) return false;
              else if (num % 4 == 1) return true;
              else return false;
            }
            let Color = ColorRoom;
            let money = parseInt(AmountRoom);
            let CurrentMoney = userEco.money;
            let Amount = Math.floor(Math.random() * 10);

            if (!Color) {
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
> _Argument Needed!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} _color money_
=======
> _${voxbot.prefix}${finalname} _color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (Color.includes("black")) {
              Color = 0;
            } else if (Color.includes("red")) {
              Color = 1;
            } else if (Color.includes("purple")) {
              Color = 2;
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
> _${WhatsBot.prefix}${finalname} color money_
=======
> _${voxbot.prefix}${finalname} color money_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (Amount == 1 && Color == 2) {
              money *= 15;
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
<<<<<<< HEAD
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./public/WhatsBot.jpg"
=======
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
<<<<<<< HEAD
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./public/WhatsBot.jpg"
=======
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
<<<<<<< HEAD
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./public/WhatsBot.jpg"
=======
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              await userEco.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
<<<<<<< HEAD
              return WhatsBot.handlerror(WhatsBot, voxchat, error);
            });
            await userEco.save().catch((error) => {
              return WhatsBot.handlerror(WhatsBot, voxchat, error);
            });
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./public/WhatsBot.jpg"
=======
              return voxbot.handlerror(voxbot, voxchat, error);
            });
            await userEco.save().catch((error) => {
              return voxbot.handlerror(voxbot, voxchat, error);
            });
            return await voxbot.imagebutton(
              voxbot,
              voxchat,
              `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            );
          }
        );
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
