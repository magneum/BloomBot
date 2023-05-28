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
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    let formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!whatsbot.args[0] && !whatsbot.args[1]) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(whatsbot.args[0])) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(whatsbot.args[1])) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !whatsbot.args[0].includes("red") &&
      !whatsbot.args[0].includes("black") &&
      !whatsbot.args[0].includes("purple")
    ) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    let ColorRoom = whatsbot.args[0];
    let AmountRoom = parseInt(whatsbot.args[1]);
    if (AmountRoom < 50) {
      return await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./public/whatsbot.png"
      );
    }

    if (AmountRoom > 800) {
      return await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./public/whatsbot.png"
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./public/whatsbot.png"
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./public/whatsbot.png"
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./public/whatsbot.png"
      );
    }

    whatsbot.Economy.findOne(
      {
        Id: whatschat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return whatsbot.handlerror(whatsbot, whatschat, error);
        }

        if (!userEco) {
          let newUser = new whatsbot.Economy({
            Id: whatschat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return whatsbot.handlerror(whatsbot, whatschat, error);
          });
          return await whatsbot.imagebutton(
            whatsbot,
            whatschat,
            `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            "./public/whatsbot.png"
          );
        }

        whatsbot.Gamble.findOne(
          {
            Id: whatschat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            }

            if (!userGamble) {
              let newUser = new whatsbot.Gamble({
                Id: whatschat.sender,
                serverId: whatschat.chat,
                Gambledone: 0,
                Gambletimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./public/whatsbot.png"
              );
            }

            if (
              userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              let time = whatsbot.ms(
                userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
              );
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./public/whatsbot.png"
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
              await whatsbot.sendMessage(whatschat.chat, {
                react: {
                  text: "❌",
                  key: whatschat.key,
                },
              });
              return whatschat.reply(
                `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await whatsbot.sendMessage(whatschat.chat, {
                react: {
                  text: "❌",
                  key: whatschat.key,
                },
              });
              return whatschat.reply(
                `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await whatsbot.sendMessage(whatschat.chat, {
                react: {
                  text: "❌",
                  key: whatschat.key,
                },
              });
              return whatschat.reply(
                `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

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
              await whatsbot.sendMessage(whatschat.chat, {
                react: {
                  text: "❌",
                  key: whatschat.key,
                },
              });
              return whatschat.reply(
                `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} color money_

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
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              await userEco.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./public/whatsbot.png"
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              await userEco.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./public/whatsbot.png"
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              await userEco.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./public/whatsbot.png"
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
            await userEco.save().catch((error) => {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
            return await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./public/whatsbot.png"
            );
          }
        );
      }
    );
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
