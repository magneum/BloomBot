require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    BloomBot.Economy.findOne(
      {
        Id: chatkey.sender,
      },
      async (error, userEco) => {
        if (error) {
          return BloomBot.handlerror(BloomBot, chatkey, error);
        }

        if (!userEco) {
          new BloomBot.Economy({
            Id: chatkey.sender,
            money: 500,
            daily: Date.now(),
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch(async (error) => {
              return BloomBot.handlerror(BloomBot, chatkey, error);
            });
          return await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🧈Status:* Added To DB!
✅𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display
          );
        } else {
          const timeout = userEco.timeout - (Date.now() - userEco.daily);
          switch (true) {
            case timeout > 0:
              const ᴄʟᴏᴄᴋ = BloomBot.ms(timeout);
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
❌𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
💵𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s`,
                BloomBot.display
              );
            default:
              userEco.daily = Date.now();
              userEco.money = userEco.money + 500;
              userEco.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`,
                BloomBot.display
              );
          }
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
