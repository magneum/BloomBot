`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(4) * 60;
const date = require(`date-and-time`);
const now = new Date();
const cleanRF = require(`./cleanRF`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const fs = require(`fs`);
var Flower = [`💐`, `🌻`, `🌼`, `🌹`, `🌸`, `💮`];
var People = [`👮`, `👳`, `🤱`, `🤰`, `💂`];
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
exports.welbuts = async (
  ӄʀǟӄɨռʐ,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum,
  Message
) => {
  try {
    const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
    const PeopleWel = People[Math.floor(Math.random() * People.length)];
    var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.substring(0, MemNum.length - 15);
    let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    const downloader = await new Downloader({
      url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
      directory: `./`,
      fileName: `${Date.now().toString()}.png`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        GroupID,
        fs.readFileSync(`./${Date.now().toString()}.png`),
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          GroupID,
          {
            contentText: `
╔◇══════════════◇╗
┊  🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫🥞
╚◇══════════════◇╝

╔════◇❣️𝗠𝗲𝗻𝘁𝗶𝗼𝗻: @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
║${FlowerWel} 𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel} 𝐌𝐞𝐦𝐛𝐞𝐫𝐳: ${GroupMemG}
║🎪 𝐆𝐫𝐨𝐮𝐩: ${GroupMemData.subject}
╚════════════╝

${Message}`,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}menu`,
                buttonText: { displayText: `${ᴋᴇɪ}menu` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            contextInfo: { mentionedJid: [MemNum] },
          }
        )
        .catch((Error) => console.log(Error));
      return await cleanRF.cleanRF(`./${Date.now().toString()}.png`);
    } catch (Error) {
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        GroupID,
        { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          GroupID,
          {
            contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
╔◇══════════════◇╗
┊  🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫🥞
╚◇║
╔◇║
║${FlowerWel} 𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel} 𝐌𝐞𝐦𝐛𝐞𝐫𝐳: ${GroupMemG}
║🎪 𝐆𝐫𝐨𝐮𝐩: ${GroupMemData.subject}
╚════════════╝

${Message}`,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}menu`,
                buttonText: { displayText: `${ᴋᴇɪ}menu` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            contextInfo: { mentionedJid: [MemNum] },
          }
        )
        .catch((Error) => console.log(Error));
    }
  } catch (Error) {
    console.log(Error);
  }
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
