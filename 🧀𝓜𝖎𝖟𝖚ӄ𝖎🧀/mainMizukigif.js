// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ℓιєηт = require(`./catch`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const ffmpeg = require(`fluent-ffmpeg`);
const vers = require(`../package.json`);
const fs = require(`fs`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
exports.mainMizukigif = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, 𝓜𝖎𝖟𝖚ӄ𝖎Text) => {
  `🐙============================================================================================================================<⚡>`;
  if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
    var 𝓜𝖎𝖟𝖚ӄ𝖎ID = chat.message.extendedTextMessage.contextInfo.stanzaId;
  } else {
    var 𝓜𝖎𝖟𝖚ӄ𝖎ID = chat.key.id;
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  }
  `🐙============================================================================================================================<⚡>`;
  const downloader = await new Downloader({
    url: `https://i.postimg.cc/zvmqDTF7/ezgif-com-gif-maker.gif`,
    directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
    fileName: `𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`,
    cloneFiles: false,
  });
  try {
    await downloader.download();
  } catch (ℓαвєяяσя) {
    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
  }
  await ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`)
    .outputOptions([
      "-pix_fmt yuv420p",
      "-c:v libx264",
      "-movflags +faststart",
      "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
    ])
    .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`)
    .on("end", async () => {
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`),
        MessageType.video,
        {
          mimetype: Mimetype.gif,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived}\n====<⚡>${𝓜𝖎𝖟𝖚ӄ𝖎Text}`,
            footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_ ${vers.vers}`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}list`,
                buttonText: { displayText: `${ᴋᴇɪ}list` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}mizuki`,
                buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          }
        )
        .then(
          fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`),
          fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`)
        );
    })
    .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
      console.log(ℓαвєяяσя);
    });
};
