`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const postDb = require(`./postDb`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
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
    var ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ = await postDb.getMessage(GroupID, `setwelcome`);
    const ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
    const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
    const PeopleWel = People[Math.floor(Math.random() * People.length)];
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.substring(0, MemNum.length - 15);
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
    }
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    const downloader = await new Downloader({
      url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
      directory: `${__dirname}`,
      fileName: `${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`,
      cloneFiles: false,
    });
    await downloader.download();
    let content = fs.readFileSync(`${__dirname}/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`);
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      GroupID,
      content,
      MessageType.image,
      {
        mimetype: Mimetype.png,
      }
    );
    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
    await ӄʀǟӄɨռʐ
      .sendMessage(
        GroupID,
        {
          contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 •@${ᴘᴘᴡᴇʟᴄᴏᴍᴇ} 
${ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ}

╔════◇
║${FlowerWel}𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel}𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${GroupMemG}
║🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${GroupMemData.subject}
╚════════════╝

${ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ.message}`,
          footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 • 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen3 ⏋\n⎿ ${Clock} • ${Ping}ms ⏋`,
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
            {
              buttonId: `${ᴋᴇɪ}repo`,
              buttonText: { displayText: `${ᴋᴇɪ}repo` },
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
      .then(cleanRF.cleanRF(`${__dirname}/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`))
      .catch((Error) => console.log(Error));
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
