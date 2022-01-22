`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Jwork = require(`../../Sakura🛰️Server/FISH/works.json`);
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];
const Economy = require(`../../Sakura🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
        );
      }
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      const hold = require(`../../Sakura🛰️Server/Hold`);
      hold.Hold(ֆǟӄʊʀǟ);
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      Economy.findOne(
        {
          ID: ꜱᴇɴᴅᴇʀɪᴅ,
        },
        async (err, userEco) => {
          if (err) console.log(err);
          if (!userEco) {
            var newUser = new Economy({
              ID: ֆǟӄʊʀǟ.sender,
              money: 0,
              daily: 0,
              timeout: 0,
              fishdone: 0,
              fishtimeout: 0,
              workdone: Date.now(),
              worktimeout: 900000,
            });
            newUser
              .save()
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `🍹𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍹

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
╚════════════╝`,
              `./Sakura☣️Reactor/Sakura_Work.mp4`
            );
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          } else {
            if (userEco.worktimeout - (Date.now() - userEco.workdone) > 0) {
              let time = ms(
                userEco.worktimeout - (Date.now() - userEco.workdone)
              );
              Sakura_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `🍹𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍹

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👔 𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ❌You have already worked recently. 
║🕐 𝗪𝗼𝗿𝗸_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s
╚════════════╝`,
                `./Sakura☣️Reactor/Sakura_Work.mp4`
              );
              //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
            } else {
              let amount = Math.floor(Math.random() * 80) + 1;
              userEco.money = userEco.money + amount;
              userEco.workdone = Date.now();
              userEco.worktimeout = 900000;
              userEco
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
              return Sakura_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `🍹𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍹

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👔 𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ${JworkR}.
║🪙 𝗘𝗮𝗿𝗻𝗲𝗱: ${amount}
╚════════════╝`,
                `./Sakura☣️Reactor/Sakura_Work.mp4`
              );
            }
          }
        }
      );
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
