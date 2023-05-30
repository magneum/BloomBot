//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
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

    if (OpenBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (OpenBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (OpenBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (OpenBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (OpenBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }
    if (OpenBot.args[0] === "charm") {
      Item = "charm";
      ItemPrice = 6000;
    }
    if (OpenBot.args[0] === "sword") {
      Item = "sword";
      ItemPrice = 1000;
    }
    if (OpenBot.args[0] === "laptop") {
      Item = "laptop";
      ItemPrice = 4000;
    }

    if (OpenBot.args[0] === "bronze") {
      Item = "🥉Bronze 20 Commands";
      ItemPrice = 20000;
      NewLimit = 20;
    }
    if (OpenBot.args[0] === "silver") {
      Item = "🥈Silver 40 Commands";
      ItemPrice = 40000;
      NewLimit = 40;
    }
    if (OpenBot.args[0] === "gold") {
      Item = "🥇Golden 60 Commands";
      ItemPrice = 60000;
      NewLimit = 60;
    }
    if (OpenBot.args[0] === "platinum") {
      Item = "💍Platinum 80 Commands";
      ItemPrice = 80000;
      NewLimit = 80;
    }
    if (OpenBot.args[0] === "diamond") {
      Item = "💎Diamond 100 Commands";
      ItemPrice = 100000;
      NewLimit = 100;
    }

    if (!OpenBot.args) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} item_
> _You may use ${OpenBot.prefix}shop to look for items..._`
      );
    }

    if (OpenBot.args.length === 0) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} item_
> _You may use ${OpenBot.prefix}shop to look for items..._`
      );
    }

    if (RobCatelog.includes(OpenBot.args[0])) {
      OpenBot.Economy.findOne(
        {
          Id: ocID.sender,
        },
        async (error, userEco) => {
          if (error) {
            return OpenBot.handlerror(OpenBot, ocID, error);
          }

          if (!userEco) {
            var newUser = new OpenBot.Economy({
              Id: ocID.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser.save().catch((error) => {
              return OpenBot.handlerror(OpenBot, ocID, error);
            });
            return await OpenBot.imagebutton(
              OpenBot,
              ocID,
              `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
*💰Balance:* _Just Opened Your Account!_`,
              OpenBot.display
            );
          }
          OpenBot.Robbery.findOne(
            {
              Id: ocID.sender,
            },
            async (error, userRob) => {
              if (error) {
                return OpenBot.handlerror(OpenBot, ocID, error);
              }
              if (!userRob) {
                new OpenBot.Robbery({
                  Id: ocID.sender,
                  sword: 0,
                  laptop: 0,
                  charm: 0,
                  CurrentRobberyTime: 0,
                  PermanentRobberyTime: 600000,
                })
                  .save()
                  .catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
*💰Balance:* _Just Opened Your Account!_`,
                  OpenBot.display
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return await OpenBot.imagebutton(
                    OpenBot,
                    ocID,
                    `*🔖Here, ${finalname} for @${
                      OpenBot.Tname || OpenBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    OpenBot.display
                  );
                }

                if (Item === "sword" && userRob.sword < 2) {
                  userRob.sword = userRob.sword + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  await userRob.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  return await OpenBot.imagebutton(
                    OpenBot,
                    ocID,
                    `*🔖Here, ${finalname} for @${
                      OpenBot.Tname || OpenBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    OpenBot.display
                  );
                }

                if (Item === "laptop" && userRob.laptop < 2) {
                  userRob.laptop = userRob.laptop + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  await userRob.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  return await OpenBot.imagebutton(
                    OpenBot,
                    ocID,
                    `*🔖Here, ${finalname} for @${
                      OpenBot.Tname || OpenBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    OpenBot.display
                  );
                }

                if (Item === "charm" && userRob.charm < 2) {
                  userRob.charm = userRob.charm + 1;
                  userEco.money = userEco.money - ItemPrice;
                  await userEco.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  await userRob.save().catch((error) => {
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                  return await OpenBot.imagebutton(
                    OpenBot,
                    ocID,
                    `*🔖Here, ${finalname} for @${
                      OpenBot.Tname || OpenBot.pushname
                    }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                    OpenBot.display
                  );
                }
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`,
                  OpenBot.display
                );
              }
            }
          );
        }
      );
    } else if (BadCatelog.includes(OpenBot.args[0])) {
      await OpenBot.Economy.findOne(
        {
          Id: ocID.sender,
        },
        async (error, userEco) => {
          if (error) {
            return OpenBot.handlerror(OpenBot, ocID, error);
          }

          await OpenBot.Bagde.findOne(
            {
              Id: ocID.sender,
            },
            async (error, userBadge) => {
              if (error) {
                return OpenBot.handlerror(OpenBot, ocID, error);
              }

              if (!userEco) {
                new OpenBot.Economy({
                  Id: ocID.sender,
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
                    return OpenBot.handlerror(OpenBot, ocID, error);
                  });
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  OpenBot.display
                );
              }

              if (!userBadge) {
                var newBagdeUser = new OpenBot.Bagde({
                  Id: ocID.sender,
                  Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                  value: `True`,
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser.save().catch((error) => {
                  return OpenBot.handlerror(OpenBot, ocID, error);
                });
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
                  OpenBot.display
                );
              }

              if (userEco.money < ItemPrice) {
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  OpenBot.display
                );
              }

              if (userBadge.Badge === Item) {
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
                  OpenBot.display
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
                  return OpenBot.handlerror(OpenBot, ocID, error);
                });
                await userBadge.save().catch((error) => {
                  return OpenBot.handlerror(OpenBot, ocID, error);
                });
                return await OpenBot.imagebutton(
                  OpenBot,
                  ocID,
                  `*🔖Here, ${finalname} for ${
                    OpenBot.pushname || OpenBot.Tname
                  }:*
🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Compvare!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
                  OpenBot.display
                );
              }
            }
          );
        }
      );
    } else {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} item_
> _You may use ${OpenBot.prefix}shop to look for items..._`
      );
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID, error);
  }
};
