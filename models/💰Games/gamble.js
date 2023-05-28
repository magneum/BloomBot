//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    let formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!voxbot.args[0] && !voxbot.args[1]) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(voxbot.args[0])) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(voxbot.args[1])) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !voxbot.args[0].includes("red") &&
      !voxbot.args[0].includes("black") &&
      !voxbot.args[0].includes("purple")
    ) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

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
      );
    }

    if (AmountRoom > 800) {
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./public/voxbot.jpg"
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./public/voxbot.jpg"
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./public/voxbot.jpg"
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
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
      {
        Id: voxchat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return voxbot.handlerror(voxbot, voxchat, error);
        }

        if (!userEco) {
          let newUser = new voxbot.Economy({
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
          {
            Id: voxchat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return voxbot.handlerror(voxbot, voxchat, error);
            }

            if (!userGamble) {
              let newUser = new voxbot.Gamble({
                Id: voxchat.sender,
                serverId: voxchat.chat,
                Gambledone: 0,
                Gambletimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./public/voxbot.jpg"
              );
            }

            if (
              userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
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
              await voxbot.sendMessage(voxchat.chat, {
                react: {
                  text: "❌",
                  key: voxchat.key,
                },
              });
              return voxchat.reply(
                `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await voxbot.sendMessage(voxchat.chat, {
                react: {
                  text: "❌",
                  key: voxchat.key,
                },
              });
              return voxchat.reply(
                `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await voxbot.sendMessage(voxchat.chat, {
                react: {
                  text: "❌",
                  key: voxchat.key,
                },
              });
              return voxchat.reply(
                `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

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
              await voxbot.sendMessage(voxchat.chat, {
                react: {
                  text: "❌",
                  key: voxchat.key,
                },
              });
              return voxchat.reply(
                `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${voxbot.prefix}${finalname} color money_

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
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
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
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
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
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
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
            );
          }
        );
      }
    );
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
  }
};
