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
    await BloomBot.Economy.findOne(
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
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            BloomBot.display
          );
        } else {
          await BloomBot.Zoology.findOne(
            {
              Id: Sockey.sender,
            },
            async (error, userZoo) => {
              if (error) return Caught(ӄryӄnz, BloomBot, error);
              if (!userZoo) {
                new BloomBot.Zoology({
                  Id: Sockey.sender,
                  zoodone: Date.now(),
                  zootimeout: 1800000,
                })
                  .save()
                  .catch(async (error) => {
                    return BloomBot.handlerror(BloomBot, Sockey, error);
                  });
                return await BloomBot.imagebutton(
                  BloomBot,
                  Sockey,
                  `*🌻Hola!* ${currFile} for ${
                    BloomBot.pushname || BloomBot.tagname
                  }
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
                    Sockey,
                    `*🌻Here, ${currFile} for @${
                      BloomBot.tagname || BloomBot.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    BloomBot.display
                  );
                } else {
                  const zooId = Math.floor(Math.random() * 10) + 1;
                  let rarity;
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
                  userZoo.save().catch(async (error) => {
                    return BloomBot.handlerror(BloomBot, Sockey, error);
                  });
                  return await BloomBot.imagebutton(
                    BloomBot,
                    Sockey,
                    `*🌻Here, ${currFile} for @${
                      BloomBot.tagname || BloomBot.pushname
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
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
