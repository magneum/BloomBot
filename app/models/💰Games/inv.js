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
    BloomBot.Robbery.findOne(
      {
        Id: Sockey.sender,
      },
      async (error, userRob) => {
        if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
        if (!userRob) {
          new BloomBot.Robbery({
            Id: Sockey.sender,
            sword: 0,
            laptop: 0,
            charm: 0,
            CurrentRobberyTime: 0,
            PermanentRobberyTime: 900000,
          })
            .save()
            .catch(async (error) =>
              BloomBot.handlerror(BloomBot, Sockey, error)
            );
          return await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🧈Status:* Added To DB!
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display
          );
        }
        return await BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
⚔️ 𝗦𝘄𝗼𝗿𝗱: ${userRob.sword}
💻 𝗟𝗮𝗽𝘁𝗼𝗽: ${userRob.laptop}
🔮 𝗖𝗵𝗮𝗿𝗺: ${userRob.charm}`,
          BloomBot.display
        );
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
