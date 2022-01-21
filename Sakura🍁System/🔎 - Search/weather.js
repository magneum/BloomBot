`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const axios = require(`axios`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}weather* (city/state)`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const Bagde = require("../../Sakura🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        },
        async (err, userBadge) => {
          // return userBadge.delete();
          if (err) return console.log(err);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              Badge: "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ",
              value: "True",
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            newUser.save();
          } else {
            var clock =
              userBadge.PermanentLimitTime -
              (Date.now() - userBadge.CurrentLimitTime);
            if (clock > 0 && userBadge.Limits == 0) {
              userBadge.value = "False";
              userBadge.save();
            }
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = "True";
              userBadge.save();
            }
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === "🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === "🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === "🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === "💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = "True";
              userBadge.save();
            }
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          const jsoncool = await JSON.parse(
            fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
          );
          await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
          fs.writeFileSync(
            `./Sakura🛰️Server/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout((ℓαвєяяσя) => {
            if (ℓαвєяяσя) return console.log(ℓαвєяяσя);
            jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
            fs.writeFileSync(
              `./Sakura🛰️Server/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 15000);
          console.log(userBadge);
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && userBadge.value === "False") {
            let time = ms(
              userBadge.PermanentLimitTime -
                (Date.now() - userBadge.CurrentLimitTime)
            );
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
            );
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (Needs.length === 0) {
            var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
            var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
              𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
            const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
            return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀeceived,
              𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
              ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
            );
            `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          } else {
            const response = axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${Needs[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
            );
            try {
              const res = await response;
              const name = res.data.name;
              const Country = res.data.sys.country;
              const Weather = res.data.weather[0].description;
              const Temperature = res.data.main.temp + `°C`;
              const Minimum_Temperature = res.data.main.temp_min + `°C`;
              const Maximum_Temperature = res.data.main.temp_max + `°C`;
              const Humidity = res.data.main.humidity + `%`;
              const Wind = res.data.wind.speed + `km/h`;
              return Sakura_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🌸 𝐏𝐥𝐚𝐜𝐞: ${name}
💮 𝐂𝐨𝐮𝐧𝐭𝐫𝐲: ${Country}
🌈 𝐖𝐞𝐚𝐭𝐡𝐞𝐫: ${Weather}
🎋 𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞: ${Temperature}
💠 𝐌𝐢𝐧 𝐓𝐞𝐦𝐩: ${Minimum_Temperature}
📛 𝐌𝐚𝐱 𝐓𝐞𝐦𝐩: ${Maximum_Temperature}
💦 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲: ${Humidity}
🎐 𝐖𝐢𝐧𝐝: ${Wind}

`.trim(),
                `https://wttr.in/${Needs.join(` `)}.png?m`
              );
            } catch {
              return Sakura_Buttons.MTB(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived}, 
_Nothing Found For *${Needs.join(` `)}*_`
              );
            }
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
