`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const fishes = require("../../Sakura🛰️Server/FISH/fishes.json");
const Economy = require(`../../Sakura🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require("parse-ms");
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      const jsoncool = await JSON.parse(
        fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
      );
      await jsoncool.push(ֆǟӄʊʀǟ.sender);
      await fs.writeFileSync(
        `./Sakura🛰️Server/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(ֆǟӄʊʀǟ.sender);
        await fs.writeFileSync(
          `./Sakura🛰️Server/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 15000);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
        );
      }
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      Economy.findOne(
        {
          did: ֆǟӄʊʀǟ.sender,
          serverID: ֆǟӄʊʀǟ.chatId,
        },
        async (err, userEco) => {
          if (err) console.log(err);
          if (!userEco) {
            var newUser = new Economy({
              did: ֆǟӄʊʀǟ.sender,
              serverID: ֆǟӄʊʀǟ.chatId,
              money: 0,
              daily: 0,
              timeout: 0,
              fishdone: Date.now(),
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 0,
            });
            newUser
              .save()
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
╚════════════╝`,
              `./Sakura☣️Reactor/SakuraFIshing.mp4`
            );
            //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          } else {
            if (userEco.fishtimeout - (Date.now() - userEco.fishdone) > 0) {
              let time = ms(
                userEco.fishtimeout - (Date.now() - userEco.fishdone)
              );
              return Sakura_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🎣 𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: ❌You've Recently Casted A Line. 
║🕐 𝗙𝗶𝘀𝗵_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s
╚════════════╝`,
                `./Sakura☣️Reactor/SakuraFIshing.mp4`
              );
              //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
            } else {
              const fishID = Math.floor(Math.random() * 10) + 1;
              let rarity;
              if (fishID < 5) rarity = "junk";
              else if (fishID < 8) rarity = "common";
              else if (fishID < 9) rarity = "uncommon";
              else if (fishID < 10) rarity = "rare";
              else rarity = "legendary";
              const fishh = fishes[rarity];
              const worth =
                Math.floor(Math.random() * (fishh.max - fishh.min + 1)) +
                fishh.min;
              userEco.money = userEco.money + worth;
              userEco.fishdone = Date.now();
              userEco.fishtimeout = 1800000;
              userEco
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
              return Sakura_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🎣 𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: You Cast Out Your Line And Caught A ${fishh.symbol}.
║💵 𝗪𝗼𝗿𝘁𝗵: I Bet It'd Sell For Around *${worth}*!
║💍 𝗜𝘁𝗲𝗺_𝗧𝘆𝗽𝗲: ${rarity}
╚════════════╝`,
                `./Sakura☣️Reactor/SakuraFIshing.mp4`
              );
            }
          }
        }
      );
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;