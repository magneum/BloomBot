//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    var formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!OpenBot.args[0] && !OpenBot.args[1]) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(OpenBot.args[0])) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(OpenBot.args[1])) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !OpenBot.args[0].includes("red") &&
      !OpenBot.args[0].includes("black") &&
      !OpenBot.args[0].includes("purple")
    ) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    var ColorRoom = OpenBot.args[0];
    var AmountRoom = parseInt(OpenBot.args[1]);
    if (AmountRoom < 50) {
      return await OpenBot.imagebutton(
        OpenBot,
        ocID,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        OpenBot.display
      );
    }

    if (AmountRoom > 800) {
      return await OpenBot.imagebutton(
        OpenBot,
        ocID,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        OpenBot.display
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await OpenBot.imagebutton(
        OpenBot,
        ocID,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        OpenBot.display
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await OpenBot.imagebutton(
        OpenBot,
        ocID,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        OpenBot.display
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await OpenBot.imagebutton(
        OpenBot,
        ocID,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        OpenBot.display
      );
    }

    OpenBot.Economy.findOne(
      {
        Id: ocID.sender,
      },
      async (error, userEco) => {
        if (error) {
          return OpenBot.handlerror(OpenBot, ocID, error);
        }

        if (!userEco) {
          var newUser = new OpenBot.Economy({
            Id: ocID.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return OpenBot.handlerror(OpenBot, ocID, error);
          });
          return await OpenBot.imagebutton(
            OpenBot,
            ocID,
            `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            OpenBot.display
          );
        }

        OpenBot.Gamble.findOne(
          {
            Id: ocID.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return OpenBot.handlerror(OpenBot, ocID, error);
            }

            if (!userGamble) {
              var newUser = new OpenBot.Gamble({
                Id: ocID.sender,
                serverId: ocID.chat,
                Gambledone: 0,
                Gambvarimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              return await OpenBot.imagebutton(
                OpenBot,
                ocID,
                `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                OpenBot.display
              );
            }

            if (
              userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              var time = OpenBot.ms(
                userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone)
              );
              return await OpenBot.imagebutton(
                OpenBot,
                ocID,
                `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                OpenBot.display
              );
            }

            function isOdd(num) {
              if (num % 2 == 0) return false;
              else if (num % 2 == 1) return true;
              else if (num % 3 == 0) return false;
              else if (num % 4 == 1) return true;
              else return false;
            }
            var Color = ColorRoom;
            var money = parseInt(AmountRoom);
            var CurrentMoney = userEco.money;
            var Amount = Math.floor(Math.random() * 10);

            if (!Color) {
              await OpenBot.sendMessage(ocID.chat, {
                react: {
                  text: "❌",
                  key: ocID.key,
                },
              });
              return ocID.reply(
                `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await OpenBot.sendMessage(ocID.chat, {
                react: {
                  text: "❌",
                  key: ocID.key,
                },
              });
              return ocID.reply(
                `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await OpenBot.sendMessage(ocID.chat, {
                react: {
                  text: "❌",
                  key: ocID.key,
                },
              });
              return ocID.reply(
                `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

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
              await OpenBot.sendMessage(ocID.chat, {
                react: {
                  text: "❌",
                  key: ocID.key,
                },
              });
              return ocID.reply(
                `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} color money_

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
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              await userEco.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              return await OpenBot.imagebutton(
                OpenBot,
                ocID,
                `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                OpenBot.display
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              await userEco.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              return await OpenBot.imagebutton(
                OpenBot,
                ocID,
                `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                OpenBot.display
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              await userEco.save().catch((error) => {
                return OpenBot.handlerror(OpenBot, ocID, error);
              });
              return await OpenBot.imagebutton(
                OpenBot,
                ocID,
                `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                OpenBot.display
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return OpenBot.handlerror(OpenBot, ocID, error);
            });
            await userEco.save().catch((error) => {
              return OpenBot.handlerror(OpenBot, ocID, error);
            });
            return await OpenBot.imagebutton(
              OpenBot,
              ocID,
              `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              OpenBot.display
            );
          }
        );
      }
    );
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID, error);
  }
};
