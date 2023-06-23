"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    const formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!BloomBot.args[0] && !BloomBot.args[1]) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
      );
    }

    if (formatColor.test(BloomBot.args[0])) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
      );
    }

    if (formatAmount.test(BloomBot.args[1])) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
      );
    }

    if (
      !BloomBot.args[0].includes("red") &&
      !BloomBot.args[0].includes("black") &&
      !BloomBot.args[0].includes("purple")
    ) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
      );
    }

    const ColorRoom = BloomBot.args[0];
    const AmountRoom = parseInt(BloomBot.args[1]);
    if (AmountRoom < 50) {
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        BloomBot.display,
      );
    }

    if (AmountRoom > 800) {
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        BloomBot.display,
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        BloomBot.display,
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        BloomBot.display,
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        BloomBot.display,
      );
    }

    BloomBot.Economy.findOne(
      {
        Id: chatkey.sender,
      },
      async (error, userEco) => {
        if (error) {
          return BloomBot.handlerror(BloomBot, chatkey, error);
        }

        if (!userEco) {
          const newUser = new BloomBot.Economy({
            Id: chatkey.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch(async (error) => {
            return BloomBot.handlerror(BloomBot, chatkey, error);
          });
          return await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display,
          );
        }

        BloomBot.Gamble.findOne(
          {
            Id: chatkey.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return BloomBot.handlerror(BloomBot, chatkey, error);
            }

            if (!userGamble) {
              const newUser = new BloomBot.Gamble({
                Id: chatkey.sender,
                serverId: chatkey.chat,
                Gambledone: 0,
                Gambconstimeout: 480000,
              });
              await newUser.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🧈Status:* Added To DB!
🦋Try Again!`,
                BloomBot.display,
              );
            }

            if (
              userGamble.Gambconstimeout -
                (Date.now() - userGamble.Gambledone) >
              0
            ) {
              const time = BloomBot.ms(
                userGamble.Gambconstimeout -
                  (Date.now() - userGamble.Gambledone),
              );
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                BloomBot.display,
              );
            }

            function isOdd(num) {
              if (num % 2 == 0) return false;
              else if (num % 2 == 1) return true;
              else if (num % 3 == 0) return false;
              else if (num % 4 == 1) return true;
              else return false;
            }
            const Color = ColorRoom;
            const money = parseInt(AmountRoom);
            const CurrentMoney = userEco.money;
            const Amount = Math.floor(Math.random() * 10);

            if (!Color) {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Argument Needed!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`,
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
              );
            }

            if (money > CurrentMoney) {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
              );
            }

            if (Color.includes("black")) {
              Color = 0;
            } else if (Color.includes("red")) {
              Color = 1;
            } else if (Color.includes("purple")) {
              Color = 2;
            } else {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`,
              );
            }

            if (Amount == 1 && Color == 2) {
              money *= 15;
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                BloomBot.display,
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                BloomBot.display,
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                BloomBot.display,
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch(async (error) => {
              return BloomBot.handlerror(BloomBot, chatkey, error);
            });
            await userEco.save().catch(async (error) => {
              return BloomBot.handlerror(BloomBot, chatkey, error);
            });
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              BloomBot.display,
            );
          },
        );
      },
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
