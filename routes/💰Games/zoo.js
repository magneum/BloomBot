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
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    await BloomBot.Economy.findOne(
      {
        Id: mags.sender,
      },
      async (error, userEco) => {
        if (error) {
          return BloomBot.handlerror(BloomBot, mags, error);
        }

        if (!userEco) {
          const newUser = new BloomBot.Economy({
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
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            BloomBot.display
          );
        } else {
          await BloomBot.Zoology.findOne(
            {
              Id: mags.sender,
            },
            async (error, userZoo) => {
              if (error) return Caught(ӄryӄnz, BloomBot, error);
              if (!userZoo) {
                new BloomBot.Zoology({
                  Id: mags.sender,
                  zoodone: Date.now(),
                  zootimeout: 1800000,
                })
                  .save()
                  .catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
                  BloomBot.display
                );
              } else {
                if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                  const time = BloomBot.ms(
                    userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                  );
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    BloomBot.display
                  );
                } else {
                  const zooId = Math.floor(Math.random() * 10) + 1;
                  const rarity;
                  if (zooId < 5) rarity = `small`;
                  else if (zooId < 8) rarity = `medium`;
                  else if (zooId < 9) rarity = `big`;
                  else if (zooId < 10) rarity = `large`;
                  else rarity = `legendary`;
                  const anim = BloomBot.animals[rarity];
                  const worth =
                    Math.floor(Math.random() * (anim.max - anim.min + 1)) +
                    anim.min;
                  userEco.money = userEco.money + worth;
                  userZoo.zoodone = Date.now();
                  userZoo.zootimeout = 1800000;
                  userZoo.save().catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                  return await BloomBot.imagebutton(
                    BloomBot,
                    mags,
                    `*🌻Here, ${fpth} for @${
                      BloomBot.Tname || BloomBot.pushname
                    }:*
🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`,
                    BloomBot.display
                  );
                }
              }
            }
          );
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
