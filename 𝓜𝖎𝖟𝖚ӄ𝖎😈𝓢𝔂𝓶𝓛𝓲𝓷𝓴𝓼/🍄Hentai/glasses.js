// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var moon = [
  `ass`,
  `bdsm`,
  `blowjob`,
  `cum`,
  `doujin`,
  `feet`,
  `femdom`,
  `foxgirl`,
  `glasses`,
  `hentai`,
  `maid`,
  `masturbation`,
  `netorare`,
  `orgy`,
  `panties`,
  `pussy`,
  `school`,
  `tentacles`,
  `thighs`,
  `uniform`,
  `yuri`,
];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
const Downloader = require(`nodejs-file-downloader`);
const ffmpegInstaller = require(`@ffmpeg-installer/ffmpeg`);
const ffprobe = require(`@ffprobe-installer/ffprobe`);
const ffmpeg = require(`fluent-ffmpeg`)()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const fs = require(`fs`);
const akaneko = require(`akaneko`);
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
module.exports = {
  name: `glasses`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    const ʟᴀʙᴛᴇꜱᴛ = await akaneko.nsfw.glasses();
    console.log(ʟᴀʙᴛᴇꜱᴛ);
    var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      let content = await fs.readFileSync(_𝔏𝔞𝔟_.MINAN);
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
        contentText: `❌ @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},  *You Are Not Allowed!*

_❗In Groups This Command allowed to Admins & Developers!_`,
        footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      return await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    } else {
      if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`.png`)) {
        const downloader = await new Downloader({
          url: ʟᴀʙᴛᴇꜱᴛ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = await fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
          );

          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            content,
            MessageType.image,
            { mimetype: Mimetype.png }
          );
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${ʟᴀʙᴛᴇꜱᴛ}`,
                footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}${moonshine}`,
                    buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                    type: 1,
                  },
                ],
                headerType: 4,
                imageMessage: media.message.imageMessage,
              },
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              }
            )
            .then(async () => {
              try {
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                );
              } catch (ℓαвєяяσя) {
                if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
                  ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                }
                ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
              }
            });
        } catch (ℓαвєяяσя) {
          if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
            ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          }
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
      if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`.webp`)) {
        const downloader = await new Downloader({
          url: ʟᴀʙᴛᴇꜱᴛ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          await ffmpeg
            .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`)
            .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
            .on(`end`, async () => {
              console.log(`Finished WEBP to PNG`);
              let content = await fs.readFileSync(
                `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
              );

              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                content,
                MessageType.image,
                { mimetype: Mimetype.png }
              );
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${ʟᴀʙᴛᴇꜱᴛ}`,
                    footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}${moonshine}`,
                        buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  }
                )
                .then(async () => {
                  try {
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`
                    );
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    );
                  } catch (ℓαвєяяσя) {
                    if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
                      ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                    }
                    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                  }
                });
            })
            .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
            .run();
        } catch (ℓαвєяяσя) {
          if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
            ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          }
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
      if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`.jpg`)) {
        const downloader = await new Downloader({
          url: ʟᴀʙᴛᴇꜱᴛ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          await ffmpeg
            .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`)
            .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
            .on(`end`, async () => {
              console.log(`Finished JPG to PNG`);
              let content = await fs.readFileSync(
                `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
              );

              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                content,
                MessageType.image,
                { mimetype: Mimetype.png }
              );
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${ʟᴀʙᴛᴇꜱᴛ}`,
                    footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}${moonshine}`,
                        buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  }
                )
                .then(async () => {
                  try {
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`
                    );
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    );
                  } catch (ℓαвєяяσя) {
                    if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
                      ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                    }
                    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                  }
                });
            })
            .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
            .run();
        } catch (ℓαвєяяσя) {
          if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
            ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          }
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
      if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`.jpeg`)) {
        const downloader = await new Downloader({
          url: ʟᴀʙᴛᴇꜱᴛ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          await ffmpeg
            .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`)
            .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
            .on(`end`, async () => {
              console.log(`Finished JPEG to PNG`);
              let content = await fs.readFileSync(
                `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
              );

              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                content,
                MessageType.image,
                { mimetype: Mimetype.png }
              );
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${ʟᴀʙᴛᴇꜱᴛ}`,
                    footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}${moonshine}`,
                        buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  }
                )
                .then(async () => {
                  try {
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`
                    );
                    await fs.unlinkSync(
                      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    );
                  } catch (ℓαвєяяσя) {
                    if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
                      ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                    }
                    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                  }
                });
            })
            .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
            .run();
        } catch (ℓαвєяяσя) {
          if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
            ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          }
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
      if (
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.png`) ||
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.webp`) ||
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.jpg`) ||
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.jpeg`) ||
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.gif`) ||
        !ʟᴀʙᴛᴇꜱᴛ.endsWith(`.mp4`)
      ) {
        const downloader = await new Downloader({
          url: ʟᴀʙᴛᴇꜱᴛ,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = await fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
          );

          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            content,
            MessageType.image,
            { mimetype: Mimetype.png }
          );
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                contentText: `
┌────⭓ 🔞𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${ʟᴀʙᴛᴇꜱᴛ}`,
                footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}${moonshine}`,
                    buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
                    type: 1,
                  },
                ],
                headerType: 4,
                imageMessage: media.message.imageMessage,
              },
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              }
            )
            .then(async () => {
              try {
                await fs.unlinkSync(
                  `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                );
              } catch (ℓαвєяяσя) {
                if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
                  ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
                }
                ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
              }
            });
        } catch (ℓαвєяяσя) {
          if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
            ℓιєηт.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          }
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
    }
  },
};
