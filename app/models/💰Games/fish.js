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
          new BloomBot.Economy({
            Id: Sockey.sender,
            money: 0,
            daily: 0,
            timeout: 0,
            fishdone: Date.now(),
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch(async (error) => {
              return BloomBot.handlerror(BloomBot, Sockey, error);
            });
          return await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🧈Status:* Added To DB!
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display
          );
        } else {
          if (userEco.fishtimeout - (Date.now() - userEco.fishdone) > 0) {
            const time = BloomBot.ms(
              userEco.fishtimeout - (Date.now() - userEco.fishdone)
            );
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Casted A Line. 
🕐𝗙𝗶𝘀𝗵 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              BloomBot.display
            );
          } else {
            const fishId = Math.floor(Math.random() * 10) + 1;
            let rarity;
            switch (true) {
              case fishId < 5:
                rarity = `junk`;
                break;
              case fishId < 8:
                rarity = `common`;
                break;
              case fishId < 9:
                rarity = `uncommon`;
                break;
              case fishId < 10:
                rarity = `rare`;
                break;
              default:
                rarity = `legendary`;
                break;
            }
            const fishh = BloomBot.Fishes[rarity];
            const worth =
              Math.floor(Math.random() * (fishh.max - fishh.min + 1)) +
              fishh.min;
            userEco.money = userEco.money + worth;
            userEco.fishdone = Date.now();
            userEco.fishtimeout = 1800000;
            userEco.save().catch(async (error) => {
              return BloomBot.handlerror(BloomBot, Sockey, error);
            });
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
🎣𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: You Cast Out Your Line And Caught A ${fishh.symbol}.
💵𝗪𝗼𝗿𝘁𝗵: It'd Sell for Around *${worth}*!
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: ${rarity}`,
              BloomBot.display
            );
          }
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
