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
    var formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!Foxbot.args[0] && !Foxbot.args[1]) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(Foxbot.args[0])) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(Foxbot.args[1])) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !Foxbot.args[0].includes("red") &&
      !Foxbot.args[0].includes("black") &&
      !Foxbot.args[0].includes("purple")
    ) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    var ColorRoom = Foxbot.args[0];
    var AmountRoom = parseInt(Foxbot.args[1]);
    if (AmountRoom < 50) {
      return await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        Foxbot.display
      );
    }

    if (AmountRoom > 800) {
      return await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        Foxbot.display
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        Foxbot.display
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        Foxbot.display
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        Foxbot.display
      );
    }

    Foxbot.Economy.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return Foxbot.handlerror(Foxbot, Foxchat, error);
        }

        if (!userEco) {
          var newUser = new Foxbot.Economy({
            Id: Foxchat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return Foxbot.handlerror(Foxbot, Foxchat, error);
          });
          return await Foxbot.imagebutton(
            Foxbot,
            Foxchat,
            `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            Foxbot.display
          );
        }

        Foxbot.Gamble.findOne(
          {
            Id: Foxchat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return Foxbot.handlerror(Foxbot, Foxchat, error);
            }

            if (!userGamble) {
              var newUser = new Foxbot.Gamble({
                Id: Foxchat.sender,
                serverId: Foxchat.chat,
                Gambledone: 0,
                Gambvarimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                Foxbot.display
              );
            }

            if (
              userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              var time = Foxbot.ms(
                userGamble.Gambvarimeout - (Date.now() - userGamble.Gambledone)
              );
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                Foxbot.display
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
              await Foxbot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await Foxbot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await Foxbot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

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
              await Foxbot.sendMessage(Foxchat.chat, {
                react: {
                  text: "❌",
                  key: Foxchat.key,
                },
              });
              return Foxchat.reply(
                `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} color money_

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
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                Foxbot.display
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                Foxbot.display
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              await userEco.save().catch((error) => {
                return Foxbot.handlerror(Foxbot, Foxchat, error);
              });
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                Foxbot.display
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return Foxbot.handlerror(Foxbot, Foxchat, error);
            });
            await userEco.save().catch((error) => {
              return Foxbot.handlerror(Foxbot, Foxchat, error);
            });
            return await Foxbot.imagebutton(
              Foxbot,
              Foxchat,
              `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              Foxbot.display
            );
          }
        );
      }
    );
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
