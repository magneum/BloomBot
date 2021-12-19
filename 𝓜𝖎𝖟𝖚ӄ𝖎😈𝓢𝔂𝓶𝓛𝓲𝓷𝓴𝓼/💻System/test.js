// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `test`,
  description: `Use this module to paste your text to (NEKOBIN).`,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}nekobin* <text>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const link = await anime.bored();
      console.log(link);
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        personreceived = Receiver.substring(0, Receiver.length - 15);
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(
                  `𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                ),
                MessageType.video,
                {
                  quoted: chat,
                  mimetype: "video/gif",
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`
                );
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(
                  `𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                ),
                MessageType.video,
                {
                  quoted: chat,
                  mimetype: "video/gif",
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`
                );
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else {
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .noAudio()
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(
                  `𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                ),
                MessageType.video,
                {
                  quoted: chat,
                  mimetype: "video/gif",
                }
              )
              .then(async () => {
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.gif`
                );
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
                );
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          })
          .on("error", (e) => console.log(e))
          .run();
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
