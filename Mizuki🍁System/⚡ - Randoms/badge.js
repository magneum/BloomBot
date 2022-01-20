const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Bagde = require(`../../Mizuki🍃Goose/badge`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
const ms = require("parse-ms");
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    Bagde.findOne(
      {
        id: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
      },
      async (err, user) => {
        // return user.delete();
        if (err) console.log(err);
        if (!user) {
          var newUser = new Bagde({
            id: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
            badge: "basic",
            limits: 10,
            CurrentLimitTime: Date.now(),
            PermanentLimitTime: 60000,
          });
          newUser.save();
          console.log(`Allowed to Use: 10-commands!`);
        } else {
          console.log(user);
          var clock =
            user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime);
          let time = ms(
            user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime)
          );
          console.log(clock);
          console.log(time);
          if (clock > 0 && user.limits == 0) {
            console.log(
              `Daily Limit For Basic-Badge-${user.limits}commands is Over!
Renews In: ${time.hours}h ${time.minutes}m ${time.seconds}s ${time.milliseconds}ms`
            );
            return;
          }
          if (clock > 0 && !user.limits == 0) {
            user.limits = user.limits - 1;
            user.save();
            console.log(`Allowed to Use: ${user.limits}commands!
Renews In: ${time.hours}h ${time.minutes}m ${time.seconds}s ${time.milliseconds}ms`);
            return;
          }
          if (clock < 0 && user.limits == 0) {
            if (user.badge === "basic") {
              user.limits = 10;
            } else if (user.badge === "bronze") {
              user.limits = 20;
            } else if (user.badge === "silver") {
              user.limits = 40;
            } else if (user.badge === "gold") {
              user.limits = 60;
            } else if (user.badge === "platinum") {
              user.limits = 80;
            } else if (user.badge === "diamond") {
              user.limits = 100;
            }
            user.CurrentLimitTime = Date.now();
            user.save();
            console.log(`Allowed to Use: ${user.limits}commands!`);
            return;
          }
        }
      }
    );
  },
};
