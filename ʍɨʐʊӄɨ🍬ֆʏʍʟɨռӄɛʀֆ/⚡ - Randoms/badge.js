const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Bagde = require(`../../ʍɨʐʊӄɨ🍃goose/badge`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require("parse-ms");
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
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
