//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
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

    if (NekoBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (NekoBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (NekoBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (NekoBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (NekoBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (NekoBot.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (NekoBot.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (NekoBot.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (NekoBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (NekoBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (NekoBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (NekoBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (NekoBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!NekoBot.args) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} item_
> _You may use ${NekoBot.prefix}shop to look for items..._`
      );
    }

    if (NekoBot.args.length === 0) {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} item_
> _You may use ${NekoBot.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(NekoBot.args[0])) {
      NekoBot.Economy.findOne(
        {
          Id: Nekos.sender,
        },
        async (error, userEco) => {
          if (error) {
            return NekoBot.handlerror(NekoBot, Nekos, error);
          }

          if (!userEco) {
            var newUser = new NekoBot.Economy({
              Id: Nekos.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser.save().catch((error) => {
              return NekoBot.handlerror(NekoBot, Nekos, error);
            });
            return await NekoBot.imagebutton(
              NekoBot,
              Nekos,
              `*🔖Here, ${finalname} for ${NekoBot.pushname || NekoBot.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
              NekoBot.display
            );
          }
          NekoBot.Robbery.findOne(
            {
              Id: Nekos.sender,
            },
            async (error, userRob) => {
              if (error) {
                return NekoBot.handlerror(NekoBot, Nekos, error);
              }
              if (!userRob) {
                new NekoBot.Robbery({
                  Id: Nekos.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
*💰Balance:* _Just Opened Your Account!_`,
                  NekoBot.display
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await NekoBot.imagebutton(
                    NekoBot,
                    Nekos,
                    `*🔖Here, ${finalname} for @${
                      NekoBot.Tname || NekoBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    NekoBot.display
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  await userRob.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  return await NekoBot.imagebutton(
                    NekoBot,
                    Nekos,
                    `*🔖Here, ${finalname} for @${
                      NekoBot.Tname || NekoBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    NekoBot.display
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  await userRob.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  return await NekoBot.imagebutton(
                    NekoBot,
                    Nekos,
                    `*🔖Here, ${finalname} for @${
                      NekoBot.Tname || NekoBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    NekoBot.display
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  await userRob.save().catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                  return await NekoBot.imagebutton(
                    NekoBot,
                    Nekos,
                    `*🔖Here, ${finalname} for @${
                      NekoBot.Tname || NekoBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    NekoBot.display
                  );
                }
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  NekoBot.display
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(NekoBot.args[0])) {
      await NekoBot.Economy.findOne(
        {
          Id: Nekos.sender,
        },
        async (error, userEco) => {
          if (error) {
            return NekoBot.handlerror(NekoBot, Nekos, error);
          }

          await NekoBot.Bagde.findOne(
            {
              Id: Nekos.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return NekoBot.handlerror(NekoBot, Nekos, error);
              }

              if (!userEco) {
                new NekoBot.Economy({
                  Id: Nekos.sender,
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
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  NekoBot.display
                );
              }

              if (!userBadge) {
                var newBagdeUser = new NekoBot.Bagde({
                  Id: Nekos.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return NekoBot.handlerror(NekoBot, Nekos, error);
                });
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  NekoBot.display
                );
              }

              if (userEco.money < ItemPrice) {
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  NekoBot.display
                );
              }

              if (userBadge.Badge === Item) {
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  NekoBot.display
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
                  return NekoBot.handlerror(NekoBot, Nekos, error);
                });
                await userBadge.save().catch((error) => {
                  return NekoBot.handlerror(NekoBot, Nekos, error);
                });
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  NekoBot.display
                );
              }
            }
          );
        }
      );
    } else {
      await NekoBot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} item_
> _You may use ${NekoBot.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return NekoBot.handlerror(NekoBot, Nekos, error);
  }
};
