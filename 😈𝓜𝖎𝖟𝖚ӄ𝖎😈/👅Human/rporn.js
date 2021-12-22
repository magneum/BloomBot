`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ffmpeg = require(`fluent-ffmpeg`);
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const RandomHub = require("random-hub").RandomHub;
const hub = new RandomHub();
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;

module.exports = {
  name: `rporn`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var RpornID = chat.key.id;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `🐙============================================================================================================================<⚡>`;
      console.log(𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO);
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO
      ) {
        let content = await fs.readFileSync(_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          {
            mimetype: Mimetype.png,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, ❌ You Are Not Allowed!

*🎊Groups:* Admins & Developers!
*🫒Private:* Everyone`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            buttonMessage,
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        `🐙============================================================================================================================<⚡>`;
      } else {
        const link = hub.getRandomHub();
        console.log(link);
        const downloader = await new Downloader({
          url: link,
          directory: `🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
          fileName: `${FinalName}_${RpornID}.gif`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          await ffmpeg(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${RpornID}.gif`)
            .outputOptions([
              "-pix_fmt yuv420p",
              "-c:v libx264",
              "-movflags +faststart",
              "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
            ])
            .save(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${RpornID}.mp4`)
            .on("end", async () => {
              console.log("Finished");
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${RpornID}.mp4`),
                  MessageType.video,
                  {
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    quoted: chat,
                    mimetype: "video/gif",
                    caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}

🔗𝐋𝐢𝐧𝐤: ${link}`,
                  }
                )
                .then(
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${RpornID}.gif`),
                  fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${FinalName}_${RpornID}.mp4`)
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
