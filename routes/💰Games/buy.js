//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    var Item;
    var NewLimit;
    var ItemPrice;
    var BadgeCatelog = [
      "🥉Bronze 20 Commands",
      "🥈Silver 40 Commands",
      "🥇Golden 60 Commands",
      "💍Platinum 80 Commands",
      "💎Diamond 100 Commands",
    ];
    var BadCatelog = ["bronze", "silver", "gold", "platinum", "diamond"];
    var RobCatelog = ["sword", "laptop", "charm"];

    if (BloomBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (BloomBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (BloomBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (BloomBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (BloomBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (BloomBot.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (BloomBot.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (BloomBot.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (BloomBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (BloomBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (BloomBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (BloomBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (BloomBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!BloomBot.args) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} item_
> _You may use ${BloomBot.prefix}shop to look for items..._`
      );
    }

    if (BloomBot.args.length === 0) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} item_
> _You may use ${BloomBot.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(BloomBot.args[0])) {
      BloomBot.Economy.findOne(
        {
          Id: mags.sender,
        },
        async (error, userEco) => {
          if (error) {
            return BloomBot.handlerror(BloomBot, mags, error);
          }

          if (!userEco) {
            var newUser = new BloomBot.Economy({
              Id: mags.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser.save().catch((error) => {
              return BloomBot.handlerror(BloomBot, mags, error);
            });
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*💰Balance:* _Just Bloomed Your Account!_`,
              BloomBot.display
            );
          }
          BloomBot.Robbery.findOne(
            {
              Id: mags.sender,
            },
            async (error, userRob) => {
              if (error) {
                return BloomBot.handlerror(BloomBot, mags, error);
              }
              if (!userRob) {
                new BloomBot.Robbery({
                  Id: mags.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*💰Balance:* _Just Bloomed Your Account!_`,
                  BloomBot.display
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    BloomBot.display
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  await userRob.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    BloomBot.display
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  await userRob.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    BloomBot.display
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  await userRob.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    BloomBot.display
                  );
                }
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  BloomBot.display
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(BloomBot.args[0])) {
      await BloomBot.Economy.findOne(
        {
          Id: mags.sender,
        },
        async (error, userEco) => {
          if (error) {
            return BloomBot.handlerror(BloomBot, mags, error);
          }

          await BloomBot.Bagde.findOne(
            {
              Id: mags.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return BloomBot.handlerror(BloomBot, mags, error);
              }

              if (!userEco) {
                new BloomBot.Economy({
                  Id: mags.sender,
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
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Bloomed Your Account!_`,
                  BloomBot.display
                );
              }

              if (!userBadge) {
                var newBagdeUser = new BloomBot.Bagde({
                  Id: mags.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return BloomBot.handlerror(BloomBot, mags, error);
                });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Bloomed Your Account!_`,
                  BloomBot.display
                );
              }

              if (userEco.money < ItemPrice) {
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  BloomBot.display
                );
              }

              if (userBadge.Badge === Item) {
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  BloomBot.display
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
                  return BloomBot.handlerror(BloomBot, mags, error);
                });
                await userBadge.save().catch((error) => {
                  return BloomBot.handlerror(BloomBot, mags, error);
                });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  BloomBot.display
                );
              }
            }
          );
        }
      );
    } else {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} item_
> _You may use ${BloomBot.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
