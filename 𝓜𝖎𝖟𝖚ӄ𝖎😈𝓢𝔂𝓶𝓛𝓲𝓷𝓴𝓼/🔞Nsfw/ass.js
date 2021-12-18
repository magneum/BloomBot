// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const akaneko = require(`akaneko`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `ass`,
  description: `ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ᴛᴏᴘɪᴄ = await akaneko.nsfw.ass();
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        console.log(ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ);
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `(c)𝐌𝐢𝐳𝐮𝐤𝐢

❗ 𝐌𝐢𝐳𝐮𝐤𝐢™ 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜
•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderKRAK
      ) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `(c)𝐌𝐢𝐳𝐮𝐤𝐢

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 
ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isSenderKRAK) {
        const downloader = await new Downloader({
          url: ᴛᴏᴘɪᴄ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads`,
          fileName: `ᴛᴏᴘɪᴄ.jpeg`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = await fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads/ᴛᴏᴘɪᴄ.jpeg`
          );
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.sender,
            content,
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
            }
          );
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              {
                contentText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢

Nsfw Topic: ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}
Asked By? @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} (dev)`,
                footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}ass`,
                    buttonText: { displayText: `${ᴋᴇɪ}ass` },
                    type: 1,
                  },
                ],
                headerType: 4,
                imageMessage: media.message.imageMessage,
              },
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (error) {
          console.log("Download failed", error);
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else {
        const downloader = await new Downloader({
          url: ᴛᴏᴘɪᴄ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads`,
          fileName: `ᴛᴏᴘɪᴄ.jpeg`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = await fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads/ᴛᴏᴘɪᴄ.jpeg`
          );
          const media = await ӄʀǟӄɨռʐ
            .prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.sender, content, MessageType.image, {
              mimetype: Mimetype.jpeg,
            })
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              {
                contentText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢

Nsfw Topic: ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}
Asked By? @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} (admin)`,
                footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}ass`,
                    buttonText: { displayText: `${ᴋᴇɪ}ass` },
                    type: 1,
                  },
                ],
                headerType: 4,
                imageMessage: media.message.imageMessage,
              },
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (error) {
          console.log("Download failed", error);
        }
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
