//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
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

    if (ꪜᴏxʙᴏᴛ.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (ꪜᴏxʙᴏᴛ.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (ꪜᴏxʙᴏᴛ.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!ꪜᴏxʙᴏᴛ.args) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} item_
> _You may use ${ꪜᴏxʙᴏᴛ.prefix}shop to look for items..._`
      );
    }

    if (ꪜᴏxʙᴏᴛ.args.length === 0) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} item_
> _You may use ${ꪜᴏxʙᴏᴛ.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(ꪜᴏxʙᴏᴛ.args[0])) {
      ꪜᴏxʙᴏᴛ.Economy.findOne(
        {
          ID: ᴠᴏxᴄ.sender,
        },
        async (error, userEco) => {
          if (error) {
            return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          }

          if (!userEco) {
            let newUser = new ꪜᴏxʙᴏᴛ.Economy({
              ID: ᴠᴏxᴄ.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser.save().catch((error) => {
              return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
            });
            return await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
              "./src/voxbot.jpg"
            );
          }
          ꪜᴏxʙᴏᴛ.Robbery.findOne(
            {
              ID: ᴠᴏxᴄ.sender,
            },
            async (error, userRob) => {
              if (error) {
                return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
              }
              if (!userRob) {
                new ꪜᴏxʙᴏᴛ.Robbery({
                  ID: ᴠᴏxᴄ.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await ꪜᴏxʙᴏᴛ.imgB(
                    ꪜᴏxʙᴏᴛ,
                    ᴠᴏxᴄ,
                    `*🔖Here, ${pfname} For @${
                      ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname
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
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  await userRob.save().catch((error) => {
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  return await ꪜᴏxʙᴏᴛ.imgB(
                    ꪜᴏxʙᴏᴛ,
                    ᴠᴏxᴄ,
                    `*🔖Here, ${pfname} For @${
                      ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname
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
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  await userRob.save().catch((error) => {
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  return await ꪜᴏxʙᴏᴛ.imgB(
                    ꪜᴏxʙᴏᴛ,
                    ᴠᴏxᴄ,
                    `*🔖Here, ${pfname} For @${
                      ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname
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
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  await userRob.save().catch((error) => {
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                  return await ꪜᴏxʙᴏᴛ.imgB(
                    ꪜᴏxʙᴏᴛ,
                    ᴠᴏxᴄ,
                    `*🔖Here, ${pfname} For @${
                      ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    "./src/voxbot.jpg"
                  );
                }
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  "./src/voxbot.jpg"
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(ꪜᴏxʙᴏᴛ.args[0])) {
      await ꪜᴏxʙᴏᴛ.Economy.findOne(
        {
          ID: ᴠᴏxᴄ.sender,
        },
        async (error, userEco) => {
          if (error) {
            return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          }

          await ꪜᴏxʙᴏᴛ.Bagde.findOne(
            {
              ID: ᴠᴏxᴄ.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
              }

              if (!userEco) {
                new ꪜᴏxʙᴏᴛ.Economy({
                  ID: ᴠᴏxᴄ.sender,
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
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (!userBadge) {
                let newBagdeUser = new ꪜᴏxʙᴏᴛ.Bagde({
                  ID: ᴠᴏxᴄ.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                });
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userEco.money < ItemPrice) {
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  "./src/voxbot.jpg"
                );
              }

              if (userBadge.Badge === Item) {
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
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
                  return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                });
                await userBadge.save().catch((error) => {
                  return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                });
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
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
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} item_
> _You may use ${ꪜᴏxʙᴏᴛ.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
