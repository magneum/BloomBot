// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `poke`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        personreceived = Receiver.substring(0, Receiver.length - 15);
      }
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log("𝐓𝐨𝐩𝐢𝐜: " + FinalName);
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      const link = await anime.poke();
      console.log(link);
      const downloader = await new Downloader({
        url: link,
        directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
        fileName: `${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        await ffmpeg
          .input(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                  quoted: chat,
                  mimetype: "video/gif",
                  caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_
                  
┌────⭓ 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

@${ꜱᴇɴᴅᴇʀeceived} poked @${personreceived}!

🔗𝐋𝐢𝐧𝐤: ${link}`,
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`
                );
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      } else if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        await ffmpeg
          .input(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  quoted: chat,
                  mimetype: "video/gif",
                  caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_
                  
┌────⭓ 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

@${ꜱᴇɴᴅᴇʀeceived} is poking!

🔗𝐋𝐢𝐧𝐤: ${link}`,
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`
                );
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      } else {
        await ffmpeg
          .input(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  quoted: chat,
                  mimetype: "video/gif",
                  caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_
                  
┌────⭓ 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

🔗𝐋𝐢𝐧𝐤: ${link}`,
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.gif`
                );
                await fs.unlinkSync(
                  `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
