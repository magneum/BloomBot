`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `sticker`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}sticker <reply> (image/gif/video)`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
        var FILEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var FILEID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(FILEOBJECT);
        try {
          await ӄʀǟӄɨռʐ
            .downloadAndSaveMediaMessage(
              FILEOBJECT,
              `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}`
            )
            .then(async () => {
              if (fs.existsSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.jpeg`)) {
                await ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.jpeg`)
                  .outputOptions([`-y`, `-vcodec libwebp`])
                  .videoFilters(
                    `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                    `format=rgba`,
                    `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                  )
                  .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`)
                  .on(`end`, async () => {
                    await ӄʀǟӄɨռʐ
                      .sendMessage(
                        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                        fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`),
                        MessageType.sticker,
                        { quoted: chat }
                      )
                      .then(
                        fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.jpeg`),
                        fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`)
                      );
                  })
                  .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                    ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                  });
              }
              await ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.png`)
                .outputOptions([`-y`, `-vcodec libwebp`])
                .videoFilters(
                  `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                  `format=rgba`,
                  `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`)
                .on(`end`, async () => {
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.png`),
                      fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/𝐌𝐢𝐳𝐮𝐤𝐢__${FILEID}.webp`)
                    );
                })
                .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                  ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
            });
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
        `🐙============================================================================================================================<⚡>`;
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyVideo || 𝓜𝖎𝖟𝖚ӄ𝖎.isReplyGIF) {
        var VIDEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var VIDEOID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(VIDEOBJECT);
        try {
          await ӄʀǟӄɨռʐ
            .downloadAndSaveMediaMessage(
              VIDEOBJECT,
              `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}`
            )
            .then(async () => {
              ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}.mp4`)
                .duration(8)
                .outputOptions([
                  `-y`,
                  `-vcodec libwebp`,
                  `-lossless 1`,
                  `-qscale 1`,
                  `-preset default`,
                  `-loop 0`,
                  `-an`,
                  `-vsync 0`,
                  `-s 600x600`,
                ])
                .videoFilters(
                  `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}.webp`)
                .on(`end`, async () => {
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}.mp4`),
                      fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️//𝐌𝐢𝐳𝐮𝐤𝐢__${VIDEOID}.webp`)
                    );
                })
                .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                  ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
            });
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
        `🐙============================================================================================================================<⚡>`;
      } else {
        var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
        return nahargs.nahargs(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀᴄᴏɴꜰ,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        );
      }
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
