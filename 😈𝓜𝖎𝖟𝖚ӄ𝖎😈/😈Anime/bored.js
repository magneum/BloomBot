const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ffmpeg = require(`fluent-ffmpeg`);
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
  name: `bored`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var GifID = chat.key.id;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `🐙============================================================================================================================<⚡>`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var personreceived = Receiver.substring(0, Receiver.length - 15);
        var GifID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        const link = await anime.bored();
        const downloader = await new Downloader({
          url: link,
          directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
          fileName: `${FinalName}_${GifID}.gif`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          await ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.gif`)
            .outputOptions([
              "-pix_fmt yuv420p",
              "-c:v libx264",
              "-movflags +faststart",
              "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
            ])
            .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`)
            .on("end", async () => {
              console.log("Finished");
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`),
                  MessageType.video,
                  {
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                    quoted: chat,
                    mimetype: "video/gif",
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}
🤩𝐓𝐨: @${personreceived}

`,
                  }
                )
                .then(
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.gif`),
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`)
                );
            })
            .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
              console.log(ℓαвєяяσя);
            });
        } catch (ℓαвєяяσя) {
          console.log(ℓαвєяяσя);
        }
      }
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        const link = await anime.bored();
        const downloader = await new Downloader({
          url: link,
          directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
          fileName: `${FinalName}_${GifID}.gif`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.gif`)
            .outputOptions([
              "-pix_fmt yuv420p",
              "-c:v libx264",
              "-movflags +faststart",
              "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
            ])
            .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`)
            .on("end", async () => {
              console.log("Finished");
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`),
                  MessageType.video,
                  {
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    quoted: chat,
                    mimetype: "video/gif",
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🍯𝐓𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞: @${ꜱᴇɴᴅᴇʀeceived}
`,
                  }
                )
                .then(
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.gif`),
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${GifID}.mp4`)
                );
            })
            .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
              console.log(ℓαвєяяσя);
            });
        } catch (ℓαвєяяσя) {
          console.log(ℓαвєяяσя);
        }
      }
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
