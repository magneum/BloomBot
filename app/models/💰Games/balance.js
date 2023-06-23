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
  await BloomBot.Economy.findOne(
    {
      Id: Sockey.sender,
    },
    async (error, data) => {
      switch (true) {
        case error:
          return BloomBot.handlerror(BloomBot, Sockey, error);
        case !data:
          new BloomBot.Economy({
            Id: Sockey.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
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
        default:
          return await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*💰Balance:* ${data.money}`,
            BloomBot.display
          );
      }
    }
  );
};

module.exports.aliases = [];
