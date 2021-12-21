// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const fs = require(`fs`);
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
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
  name: `s`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}sticker <reply to image>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isImage) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        replyChat = replyChatObject;
        const FileName = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/convert_` + imageId;
        const FN = FileName + ".jpeg";
        await ӄʀǟӄɨռʐ
          .downloadAndSaveMediaMessage(replyChat, FileName)
          .then(async () => {
            const SN = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/sticker_${imageId}.webp`;
            await ffmpeg
              .input(FN)
              .outputOptions([`-y`, `-vcodec libwebp`])
              .videoFilters(
                `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                `format=rgba`,
                `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .output(SN)
              .on("end", async () => {
                return await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    fs.readFileSync(SN),
                    MessageType.sticker,
                    { quoted: chat }
                  )
                  .then(async () => {
                    await fs.unlinkSync(FN);
                    await fs.unlinkSync(SN);
                  });
              })
              .on("error", (e) => console.log(e))
              .run();
          });
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        replyChat = replyChatObject;
        const FileName = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/convert_` + imageId;
        const FN = FileName + ".jpeg";
        await ӄʀǟӄɨռʐ
          .downloadAndSaveMediaMessage(replyChat, FileName)
          .then(async () => {
            const SN = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/sticker_${imageId}.webp`;
            await ffmpeg
              .input(FN)
              .outputOptions([`-y`, `-vcodec libwebp`])
              .videoFilters(
                `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                `format=rgba`,
                `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .output(SN)
              .on("end", async () => {
                return await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    { url: SN },
                    fs.readFileSync(SN),
                    MessageType.sticker,
                    { quoted: chat }
                  )
                  .then(async () => {
                    await fs.unlinkSync(FN);
                    await fs.unlinkSync(SN);
                  });
              })
              .on("error", (e) => console.log(e))
              .run();
          });
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
