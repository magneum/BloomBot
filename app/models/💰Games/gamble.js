require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    const formatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const formatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!BloomBot.args[0] && !BloomBot.args[1]) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatColor.test(BloomBot.args[0])) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (formatAmount.test(BloomBot.args[1])) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !BloomBot.args[0].includes("red") &&
      !BloomBot.args[0].includes("black") &&
      !BloomBot.args[0].includes("purple")
    ) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    const ColorRoom = BloomBot.args[0];
    const AmountRoom = parseInt(BloomBot.args[1]);
    if (AmountRoom < 50) {
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        BloomBot.display
      );
    }

    if (AmountRoom > 800) {
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        BloomBot.display
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        BloomBot.display
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        BloomBot.display
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
❌𝗘𝗿𝗿𝗼𝗿: _Money for Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        BloomBot.display
      );
    }

    BloomBot.Economy.findOne(
      {
        Id: Sockey.sender,
      },
      async (error, userEco) => {
        if (error) {
          return BloomBot.handlerror(BloomBot, Sockey, error);
        }

        if (!userEco) {
          const newUser = new BloomBot.Economy({
            Id: Sockey.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch(async (error) => {
            return BloomBot.handlerror(BloomBot, Sockey, error);
          });
          return await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display
          );
        }

        BloomBot.Gamble.findOne(
          {
            Id: Sockey.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return BloomBot.handlerror(BloomBot, Sockey, error);
            }

            if (!userGamble) {
              const newUser = new BloomBot.Gamble({
                Id: Sockey.sender,
                serverId: Sockey.chat,
                Gambledone: 0,
                Gambconstimeout: 480000,
              });
              await newUser.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
*🧈Status:* Added To DB!
🦋Try Again!`,
                BloomBot.display
              );
            }

            if (
              userGamble.Gambconstimeout -
                (Date.now() - userGamble.Gambledone) >
              0
            ) {
              const time = BloomBot.ms(
                userGamble.Gambconstimeout -
                  (Date.now() - userGamble.Gambledone)
              );
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                BloomBot.display
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
              await BloomBot.sendMessage(Sockey.chat, {
                react: {
                  text: "❌",
                  key: Sockey.key,
                },
              });
              return Sockey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Argument Needed!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await BloomBot.sendMessage(Sockey.chat, {
                react: {
                  text: "❌",
                  key: Sockey.key,
                },
              });
              return Sockey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await BloomBot.sendMessage(Sockey.chat, {
                react: {
                  text: "❌",
                  key: Sockey.key,
                },
              });
              return Sockey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

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
              await BloomBot.sendMessage(Sockey.chat, {
                react: {
                  text: "❌",
                  key: Sockey.key,
                },
              });
              return Sockey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (Amount == 1 && Color == 2) {
              money *= 15;
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                BloomBot.display
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                BloomBot.display
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              await userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, Sockey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                BloomBot.display
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch(async (error) => {
              return BloomBot.handlerror(BloomBot, Sockey, error);
            });
            await userEco.save().catch(async (error) => {
              return BloomBot.handlerror(BloomBot, Sockey, error);
            });
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              BloomBot.display
            );
          }
        );
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
