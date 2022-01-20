const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Bagde = require(`../../Mizuki🍃Goose/badge`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    Bagde.findOne(
      {
        id: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
      },
      async (err, userLimit) => {
        if (err) console.log(err);
        if (!userLimit) {
          var newUser = new Bagde({
            id: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
            badge: "basic",
            limits: 10,
            CurrentLimitTime: Date.now(),
            TemporaryLimitTime: 0,
            PermanentLimitTime: 86400000,
          });
          newUser.save();
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `*Allowed to Use:* _10-commands!_`
          );
        } else {
          console.log(userLimit);
          var currentLimit = userLimit.limits;
          var permanentLimit = userLimit.PermanentLimitTime;
          var currentLimitTime = userLimit.CurrentLimitTime;
          var Timeout = permanentLimit - (Date.now() - currentLimitTime);

          if (currentLimit === 0 && Timeout > permanentLimit) {
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `Daily Limit For *Basic-Badge(${currentLimit}commands)* is Over! _Buy more using ${ᴋᴇɪ}store_`
            );
          }

          if (!currentLimit === 0 && Timeout < permanentLimit) {
            currentLimitTime = Date.now();
            currentLimit = currentLimit - 1;
            userLimit.save();
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `*Allowed to Use:* _${currentLimit}commands!_`
            );
          } else if (currentLimit === 0 && Timeout < permanentLimit) {
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `*Not Allowed to Use:*  _${currentLimit}commands!_`
            );
          } else if (currentLimit === 0 && Timeout > permanentLimit) {
            userLimit.TemporaryLimitTime = Date.now();
            if (userLimit.badge === "basic") {
              currentLimit = 10;
            } else if (userLimit.badge === "bronze") {
              currentLimit = 20;
            } else if (userLimit.badge === "silver") {
              currentLimit = 40;
            } else if (userLimit.badge === "gold") {
              currentLimit = 60;
            } else if (userLimit.badge === "platinum") {
              currentLimit = 80;
            } else if (userLimit.badge === "diamond") {
              currentLimit = 100;
            }
            userLimit.save();
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `*Allowed to Use:* _${currentLimit}commands!_`
            );
          }
        }
      }
    );
  },
};
