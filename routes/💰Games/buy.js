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
    let Item;
    let NewLimit;
    let ItemPrice;
    const BadgeCatelog = [
      "🥉Bronze 20 Commands",
      "🥈Silver 40 Commands",
      "🥇Golden 60 Commands",
      "💍Platinum 80 Commands",
      "💎Diamond 100 Commands",
    ];
    const BadCatelog = ["bronze", "silver", "gold", "platinum", "diamond"];
    const RobCatelog = ["sword", "laptop", "charm"];

    if (VօxB໐t.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (VօxB໐t.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (VօxB໐t.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (VօxB໐t.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (VօxB໐t.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (VօxB໐t.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (VօxB໐t.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (VօxB໐t.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (VօxB໐t.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (VօxB໐t.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (VօxB໐t.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (VօxB໐t.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (VօxB໐t.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!VօxB໐t.args) {
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
> _${VօxB໐t.prefix}${pfname} item_
> _You may use ${VօxB໐t.prefix}shop to look for items..._`
      );
    }

    if (VօxB໐t.args.length === 0) {
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
> _${VօxB໐t.prefix}${pfname} item_
> _You may use ${VօxB໐t.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(VօxB໐t.args[0])) {
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
*💰Balance:* _Just Opened Your Account!_`,
              "./src/voxbot.jpg"
            );
          }
          VօxB໐t.Robbery.findOne(
            {
              ID: νℓкhat.sender,
            },
            async (error, userRob) => {
              if (error) {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              }
              if (!userRob) {
                new VօxB໐t.Robbery({
                  ID: νℓкhat.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await VօxB໐t.imgB(
                    VօxB໐t,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      VօxB໐t.Tname || VօxB໐t.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  return await VօxB໐t.imgB(
                    VօxB໐t,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      VօxB໐t.Tname || VօxB໐t.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  return await VօxB໐t.imgB(
                    VօxB໐t,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      VօxB໐t.Tname || VօxB໐t.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  await userRob.save().catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                  return await VօxB໐t.imgB(
                    VօxB໐t,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      VօxB໐t.Tname || VօxB໐t.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./src/voxbot.jpg"
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(VօxB໐t.args[0])) {
      await VօxB໐t.Economy.findOne(
        {
          ID: νℓкhat.sender,
        },
        async (error, userEco) => {
          if (error) {
            return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
          }

          await VօxB໐t.Bagde.findOne(
            {
              ID: νℓкhat.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
              }

              if (!userEco) {
                new VօxB໐t.Economy({
                  ID: νℓкhat.sender,
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
                    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                  });
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (!userBadge) {
                let newBagdeUser = new VօxB໐t.Bagde({
                  ID: νℓкhat.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                });
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userEco.money < ItemPrice) {
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userBadge.Badge === Item) {
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./src/voxbot.jpg"
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
                  return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                });
                await userBadge.save().catch((error) => {
                  return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                });
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  "./src/voxbot.jpg"
                );
              }
            }
          );
        }
      );
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
> _${VօxB໐t.prefix}${pfname} item_
> _You may use ${VօxB໐t.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
  }
};
