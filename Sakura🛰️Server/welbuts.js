`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const Welcome = require(`../Sakura🍃Goose/welcome`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4) * 60;
const date = require(`date-and-time`);
const now = new Date();
const cleanRF = require(`./cleanRF`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const fs = require(`fs`);
var ᴛᴡᴇʟ = [
  `just joined the server!`,
  `just joined. Everyone,look busy!`,
  `just joined!`,
  `joined the party!`,
  `welcome, we were expecting you to join!`,
  `welcome, we hope you bought pizza for us!`,
  `welcome, leave your weapons by the door!`,
  `Swooosh! Just landed.`,
  `just joined. Hide your bananas!`,
  `just joined. Seems OP, please nerf!`,
  `just slid into the server!`,
  `has spawned in the server!`,
  `just showed up in the server!`,
];
var Flower = [`💐`, `🌻`, `🌼`, `🌹`, `🌸`, `💮`];
var People = [`👮`, `👳`, `🤱`, `🤰`, `💂`];
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
exports.welbuts = async (
  ӄʀǟӄɨռʐ,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum
) => {
  try {
    const ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
    const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
    const PeopleWel = People[Math.floor(Math.random() * People.length)];
    var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.substring(0, MemNum.length - 15);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    Welcome.findOne(
      {
        ID: GroupID,
      },
      async (Error, userWel) => {
        if (Error) console.log(Error);
        if (!userWel) {
          return;
        } else {
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          try {
            𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(
              MemNum.split(`@`)[0] + "@c.us"
            );
          } catch {
            𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.jpeg";
          }
          const downloader = await new Downloader({
            url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
            directory: `./Sakura🗑️Temp`,
            fileName: `${ᴘᴘᴡᴇʟᴄᴏᴍᴇ.toString()}__${Date.now()}_.jpeg`,
            cloneFiles: false,
          });
          await downloader.download();
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            GroupID,
            fs.readFileSync(
              `./Sakura🗑️Temp/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ.toString()}__${Date.now()}_.jpeg`
            ),
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
            }
          );
          await ӄʀǟӄɨռʐ
            .sendMessage(
              GroupID,
              {
                contentText: `
╔════◇🥞 🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}, 
║${FlowerWel}𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel}𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${GroupMemG}
║🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${GroupMemData.subject}
╚════════════╝

${userWel.message}`,
                footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 ◈ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozen${vers.vers}_ ⏋\n⎿ 𝐃𝐚𝐭𝐞: _${Clock}_ ⏋\n⎿ 𝐏𝐢𝐧𝐠: _${Ping}ms_ ⏋`,
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
          await cleanRF.cleanRF(
            `./Sakura🗑️Temp/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ.toString()}__${Date.now()}_.jpeg`
          );
          return;
        }
      }
    );
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
  } catch (Error) {
    console.log(
      `⬡==========================⬡    🍹 ` +
        Error +
        `🍹    ⬡==========================⬡`
    );
  }
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
