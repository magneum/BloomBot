// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `sticker`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}sticker <reply> (image/gif/video)`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
        var FILEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var FILEID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(FILEOBJECT);
        await ӄʀǟӄɨռʐ
          .downloadAndSaveMediaMessage(FILEOBJECT, `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}`)
          .then(async () => {
            const pathcheck = await fs.existsSync(
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.jpeg`
            );
            if (pathcheck) {
              console.log(`${FILEID}.JPEG`);
              ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.jpeg`)
                .outputOptions([`-y`, `-vcodec libwebp`])
                .videoFilters(
                  `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                  `format=rgba`,
                  `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`)
                .on(`end`, async () => {
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.jpeg`),
                      fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`)
                    );
                })
                .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                  console.log(ℓαвєяяσя);
                });
              // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
            } else {
              console.log(`${FILEID}.PNG`);
              ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.png`)
                .outputOptions([`-y`, `-vcodec libwebp`])
                .videoFilters(
                  `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                  `format=rgba`,
                  `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`)
                .on(`end`, async () => {
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.png`),
                      fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FILEID}.webp`)
                    );
                })
                .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                  console.log(ℓαвєяяσя);
                });
            }
          });
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyVideo || 𝓜𝖎𝖟𝖚ӄ𝖎.isReplyGIF) {
        var VIDEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var VIDEOID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(VIDEOBJECT);
        await ӄʀǟӄɨռʐ
          .downloadAndSaveMediaMessage(VIDEOBJECT, `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}`)
          .then(async () => {
            ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}.mp4`)
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
              .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}.webp`)
              .on(`end`, async () => {
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}.webp`),
                    MessageType.sticker,
                    { quoted: chat }
                  )
                  .then(
                    fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}.mp4`),
                    fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${VIDEOID}.webp`)
                  );
              })
              .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                console.log(ℓαвєяяσя);
              });
          });
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        );
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
