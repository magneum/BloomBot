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
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var personreceived = Receiver.substring(0, Receiver.length - 15);
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        Economy.findOne(
          {
            did: Receiver,
          },
          async (err, userEco) => {
            if (err) console.log(err);
            if (!userEco) {
              var newUser = new Economy({
                did: Receiver,
                money: 0,
                daily: 0,
                timeout: 0,
                fish: 0,
                fishdone: 0,
                fishtimeout: 0,
                workdone: Date.now(),
                worktimeout: 900000,
              });
              newUser
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
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${personreceived}
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/MizukiFIshing.mp4`
              );
            } else {
              Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐌𝐢𝐳𝐮𝐤𝐢𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.balance}
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${personreceived}
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/MizukiFIshing.mp4`
              );
            }
          }
        );
      } else {
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        Economy.findOne(
          {
            did: ꜱᴇɴᴅᴇʀɪᴅ,
          },
          async (err, userEco) => {
            if (err) console.log(err);
            if (!userEco) {
              var newUser = new Economy({
                did: ꜱᴇɴᴅᴇʀɪᴅ,
                money: 0,
                daily: 0,
                timeout: 0,
                fish: 0,
                fishdone: 0,
                fishtimeout: 0,
                workdone: Date.now(),
                worktimeout: 900000,
              });
              newUser
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
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/MizukiFIshing.mp4`
              );
            } else {
              Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `@${ꜱᴇɴᴅᴇʀeceived}'𝘀 𝐌𝐢𝐳𝐮𝐤𝐢𝐁𝐚𝐧𝐤

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.balance}
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/MizukiFIshing.mp4`
              );
            }
          }
        );
      }
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
