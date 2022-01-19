const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Jwork = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/FISH/works.json");
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];
const Economy = require(`../../ʍɨʐʊӄɨ🍃goose/economy`);
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
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const jsoncool = await JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      await fs.writeFileSync(
        `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
        await fs.writeFileSync(
          `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 15000);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        return Mizuki_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `@${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
        );
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      Economy.findOne(
        {
          did: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
          serverID: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        },
        async (err, userEco) => {
          if (err) console.log(err);
          if (!userEco) {
            var newUser = new Economy({
              did: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              serverID: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
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
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
            return Mizuki_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐌𝐢𝐳𝐮𝐤𝐢𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
╚════════════╝`,
              `./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Work.mp4`
            );
            `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          } else {
            if (userEco.worktimeout - (Date.now() - userEco.workdone) > 0) {
              let time = ms(
                userEco.worktimeout - (Date.now() - userEco.workdone)
              );
              Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐌𝐢𝐳𝐮𝐤𝐢𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👔 𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ❌You have already worked recently. 
║🕐 𝗪𝗼𝗿𝗸_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Work.mp4`
              );
              `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
            } else {
              let amount = Math.floor(Math.random() * 80) + 1;
              userEco.money = userEco.money + amount;
              userEco.workdone = Date.now();
              userEco.worktimeout = 900000;
              userEco
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                );
              return Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐌𝐢𝐳𝐮𝐤𝐢𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👔 𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ${JworkR}.
║🪙 𝗘𝗮𝗿𝗻𝗲𝗱: ${amount}
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Work.mp4`
              );
            }
          }
        }
      );
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
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
