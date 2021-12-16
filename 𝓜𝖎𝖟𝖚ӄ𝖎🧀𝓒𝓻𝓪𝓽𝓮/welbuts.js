//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const download = require(`download-file`);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
require(`python-format-js`);
var ᴛᴡᴇʟ = [
  `ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ - ɢʟʜꜰ!`,
  `ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴇᴠᴇʀʏᴏɴᴇ, ʟᴏᴏᴋ ʙᴜꜱʏ!`,
  `ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴄᴀɴ ɪ ɢᴇᴛ ᴀ ʜᴇᴀʟ?`,
  `ᴊᴏɪɴᴇᴅ ʏᴏᴜʀ ᴘᴀʀᴛʏ.`,
  `ᴊᴏɪɴᴇᴅ. ʏᴏᴜ ᴍᴜꜱᴛ ᴄᴏɴꜱᴛʀᴜᴄᴛ ᴀᴅᴅɪᴛɪᴏɴᴀʟ ᴘʏʟᴏɴꜱ.`,
  `ᴡᴇʟᴄᴏᴍᴇ, ꜱᴛᴀʏ ᴀᴡʜɪʟᴇ ᴀɴᴅ ʟɪꜱᴛᴇɴ.`,
  `ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ᴡᴇʀᴇ ᴇxᴘᴇᴄᴛɪɴɢ ʏᴏᴜ.`,
  `ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ʜᴏᴘᴇ ʏᴏᴜ ʙʀᴏᴜɢʜᴛ ᴘɪᴢᴢᴀ.`,
  `ᴡᴇʟᴄᴏᴍᴇ ʟᴇᴀᴠᴇ ʏᴏᴜʀ ᴡᴇᴀᴘᴏɴꜱ ʙʏ ᴛʜᴇ ᴅᴏᴏʀ.`,
  `ᴊᴜꜱᴛ ᴀᴘᴘᴇᴀʀᴇᴅ.`,
  `ꜱᴡᴏᴏᴏᴏꜱʜ. ᴊᴜꜱᴛ ʟᴀɴᴅᴇᴅ.`,
  `ʙʀᴀᴄᴇ ʏᴏᴜʀꜱᴇʟᴠᴇꜱ. ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.`,
  `ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ʜɪᴅᴇ ʏᴏᴜʀ ʙᴀɴᴀɴᴀꜱ.`,
  `ᴊᴜꜱᴛ ᴀʀʀɪᴠᴇᴅ. ꜱᴇᴇᴍꜱ ᴏᴘ - ᴘʟᴇᴀꜱᴇ ɴᴇʀꜰ.`,
  `ᴊᴜꜱᴛ ꜱʟɪᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.`,
  `ʜᴀꜱ ꜱᴘᴀᴡɴᴇᴅ ɪɴ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.`,
  `ʜᴏᴘᴘᴇᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ. ᴋᴀɴɢᴀʀᴏᴏ!!`,
  `ᴊᴜꜱᴛ ꜱʜᴏᴡᴇᴅ ᴜᴘ. ʜᴏʟᴅ ᴍʏ ʙᴇᴇʀ.`,
];

//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
exports.welbuts = async (
  ӄʀǟӄɨռʐ,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum
) => {
  try {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
  } catch {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/3wfrmmpB/NoPP.jpg`;
  }
  download(
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
    {
      directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/`,
      filename: `𝕻𝕻𝖑𝖊𝖙𝖊𝖗.jpg`,
    },
    async function (ℓαвєяяσя) {
      if (ℓαвєяяσя) throw ℓαвєяяσя;
      const weltext = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
      personcum = MemNum.substring(0, MemNum.length - 15);
      let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/𝕻𝕻𝖑𝖊𝖙𝖊𝖗.jpg`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        GroupID,
        content,
        MessageType.image
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          GroupID,
          {
            contentText: `@${personcum}
${weltext}
┌───────⭓
│⬘𝗕𝗶𝗼: ${GroupMemBio.status}
│⬘𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
│⬘𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}
└───────────⭓

${Fetched.message}`,
            footerText: `*© Mïzµkï* _${vers.vers}_`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}mizuki`,
                buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            contextInfo: {
              mentionedJid: [MemNum],
            },
          }
        )
        .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
    }
  );
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
