("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  try {
    let FormatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let FormatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!νℓкуяє.args[0] && !νℓкуяє.args[1]) {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (FormatColor.test(νℓкуяє.args[0])) {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (FormatAmount.test(νℓкуяє.args[1])) {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !νℓкуяє.args[0].includes("red") &&
      !νℓкуяє.args[0].includes("black") &&
      !νℓкуяє.args[0].includes("purple")
    ) {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    let ColorRoom = νℓкуяє.args[0];
    let AmountRoom = parseInt(νℓкуяє.args[1]);
    if (AmountRoom < 50) {
      return await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./src/vlkyre.jpg"
      );
    }

    if (AmountRoom > 800) {
      return await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./src/vlkyre.jpg"
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./src/vlkyre.jpg"
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./src/vlkyre.jpg"
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./src/vlkyre.jpg"
      );
    }

    νℓкуяє.Economy.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
        }

        if (!userEco) {
          let newUser = new νℓкуяє.Economy({
            ID: νℓкhat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
          });
          return await νℓкуяє.imgB(
            νℓкуяє,
            νℓкhat,
            `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            "./src/vlkyre.jpg"
          );
        }

        νℓкуяє.Gamble.findOne(
          {
            ID: νℓкhat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
            }

            if (!userGamble) {
              let newUser = new νℓкуяє.Gamble({
                ID: νℓкhat.sender,
                serverID: νℓкhat.chat,
                Gambledone: 0,
                Gambletimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓкhat,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./src/vlkyre.jpg"
              );
            }

            if (
              userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              let time = νℓкуяє.ms(
                userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
              );
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓкhat,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./src/vlkyre.jpg"
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
              await νℓкуяє.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await νℓкуяє.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await νℓкуяє.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

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
              await νℓкуяє.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} color money_

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
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓкhat,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./src/vlkyre.jpg"
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓкhat,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./src/vlkyre.jpg"
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
              });
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓкhat,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./src/vlkyre.jpg"
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
            });
            await userEco.save().catch((error) => {
              return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
            });
            return await νℓкуяє.imgB(
              νℓкуяє,
              νℓкhat,
              `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./src/vlkyre.jpg"
            );
          }
        );
      }
    );
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
  }
};
