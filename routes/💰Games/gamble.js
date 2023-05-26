//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  try {
    let FormatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let FormatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
    if (!VօxB໐t.args[0] && !VօxB໐t.args[1]) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (FormatColor.test(VօxB໐t.args[0])) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (FormatAmount.test(VօxB໐t.args[1])) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    if (
      !VօxB໐t.args[0].includes("red") &&
      !VօxB໐t.args[0].includes("black") &&
      !VօxB໐t.args[0].includes("purple")
    ) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
      );
    }

    let ColorRoom = VօxB໐t.args[0];
    let AmountRoom = parseInt(VօxB໐t.args[1]);
    if (AmountRoom < 50) {
      return await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`,
        "./src/voxbot.jpg"
      );
    }

    if (AmountRoom > 800) {
      return await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`,
        "./src/voxbot.jpg"
      );
    }

    if (ColorRoom === "red" && AmountRoom > 200) {
      return await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`,
        "./src/voxbot.jpg"
      );
    }

    if (ColorRoom === "black" && AmountRoom > 500) {
      return await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`,
        "./src/voxbot.jpg"
      );
    }

    if (ColorRoom === "purple" && AmountRoom > 800) {
      return await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _Money For Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`,
        "./src/voxbot.jpg"
      );
    }

    VօxB໐t.Economy.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
        }

        if (!userEco) {
          let newUser = new VօxB໐t.Economy({
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
            return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
          });
          return await VօxB໐t.imgB(
            VօxB໐t,
            νℓкhat,
            `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*💰Balance:* Just Opened Your Account!`,
            "./src/voxbot.jpg"
          );
        }

        VօxB໐t.Gamble.findOne(
          {
            ID: νℓкhat.sender,
          },
          async (error, userGamble) => {
            if (error) {
              return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
            }

            if (!userGamble) {
              let newUser = new VօxB໐t.Gamble({
                ID: νℓкhat.sender,
                serverID: νℓкhat.chat,
                Gambledone: 0,
                Gambletimeout: 480000,
              });
              await newUser.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*🧈Status:* Added To DB!
🦋Try Again!`,
                "./src/voxbot.jpg"
              );
            }

            if (
              userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
              0
            ) {
              let time = VօxB໐t.ms(
                userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
              );
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                "./src/voxbot.jpg"
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
              await VօxB໐t.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Argument Needed!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} _color money_
🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
              );
            }

            Color = Color.toLowerCase();
            if (!money) {
              await VօxB໐t.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

*(medium) Red:* _even out of 10_ 
*(hard) Black:* _2 out of 10_ 
*(god) Purple:* _1 out of 10_`
              );
            }

            if (money > CurrentMoney) {
              await VօxB໐t.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

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
              await VօxB໐t.sendMessage(νℓкhat.chat, {
                react: {
                  text: "❌",
                  key: νℓкhat.key,
                },
              });
              return νℓкhat.reply(
                `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} color money_

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
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`,
                "./src/voxbot.jpg"
              );
            }

            if (!isOdd(Amount) && Color == 1) {
              money = parseInt(money * 1.5);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`,
                "./src/voxbot.jpg"
              );
            }

            if (isOdd(Amount) && Color == 0) {
              money = parseInt(money * 2);
              userEco.money = userEco.money + money;
              userGamble.Gambledone = Date.now();
              await userGamble.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              await userEco.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              });
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`,
                "./src/voxbot.jpg"
              );
            }

            userEco.money = userEco.money - money;
            userGamble.Gambledone = Date.now();
            await userGamble.save().catch((error) => {
              return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
            });
            await userEco.save().catch((error) => {
              return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
            });
            return await VօxB໐t.imgB(
              VօxB໐t,
              νℓкhat,
              `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`,
              "./src/voxbot.jpg"
            );
          }
        );
      }
    );
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
  }
};
