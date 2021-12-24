// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const Downloader = require(`nodejs-file-downloader`);
const ffmpegInstaller = require(`@ffmpeg-installer/ffmpeg`);
const ffprobe = require(`@ffprobe-installer/ffprobe`);
const ffmpeg = require(`fluent-ffmpeg`)()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const fs = require(`fs`);
const akaneko = require(`akaneko`);
var path = require("path");
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      const ʟᴀʙᴛᴇꜱᴛ = await akaneko.nsfw.netorare();
      console.log(ʟᴀʙᴛᴇꜱᴛ);
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      console.log(𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev);
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev
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
          contentText: `@${ꜱᴇɴᴅᴇʀeceived}, ❌ You Are Not Allowed!

*🎊Groups:* Admins & Developers!
*🫒Private:* Everyone`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          buttonMessage,
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          }
        );

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`png`)) {
          const downloader = await new Downloader({
            url: ʟᴀʙᴛᴇꜱᴛ,
            directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
            fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
            cloneFiles: false,
          });
          try {
            await downloader.download();
            let content = await fs.readFileSync(
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
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
↳👅𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
↳⚡𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} 
`,
                  footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
                  buttons: [
                    {
                      buttonId: `${ᴋᴇɪ}list`,
                      buttonText: { displayText: `${ᴋᴇɪ}list` },
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
              .then(
                fs.unlinkSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                )
              );
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя.status == 404) {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            } else {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            }
          }
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`webp`)) {
          const downloader = await new Downloader({
            url: ʟᴀʙᴛᴇꜱᴛ,
            directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
            fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`,
            cloneFiles: false,
          });
          try {
            await downloader.download();
            await ffmpeg
              .input(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`)
              .output(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
              .on(`end`, async () => {
                console.log(`Finished WEBP to PNG`);
                let content = await fs.readFileSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
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
↳👅𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
↳⚡𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} `,
                      footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}list`,
                          buttonText: { displayText: `${ᴋᴇɪ}list` },
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
                  .then(
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`
                    ),
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    )
                  );
              })
              .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
              .run();
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя.status == 404) {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            } else {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            }
          }
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`jpg`)) {
          const downloader = await new Downloader({
            url: ʟᴀʙᴛᴇꜱᴛ,
            directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
            fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`,
            cloneFiles: false,
          });
          try {
            await downloader.download();
            await ffmpeg
              .input(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`)
              .output(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
              .on(`end`, async () => {
                console.log(`Finished JPG to PNG`);
                let content = await fs.readFileSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
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
↳👅𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
↳⚡𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} 
`,
                      footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}list`,
                          buttonText: { displayText: `${ᴋᴇɪ}list` },
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
                  .then(
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`
                    ),
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    )
                  );
              })
              .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
              .run();
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя.status == 404) {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            } else {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            }
          }
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ʟᴀʙᴛᴇꜱᴛ.endsWith(`jpeg`)) {
          const downloader = await new Downloader({
            url: ʟᴀʙᴛᴇꜱᴛ,
            directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
            fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`,
            cloneFiles: false,
          });
          try {
            await downloader.download();
            await ffmpeg
              .input(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`)
              .output(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`)
              .on(`end`, async () => {
                console.log(`Finished JPEG to PNG`);
                let content = await fs.readFileSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
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
↳👅𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
↳⚡𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} 
`,
                      footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}list`,
                          buttonText: { displayText: `${ᴋᴇɪ}list` },
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
                  .then(
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpeg`
                    ),
                    fs.unlinkSync(
                      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                    )
                  );
              })
              .on(`error`, (ℓαвєяяσя) => console.log(ℓαвєяяσя))
              .run();
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя.status == 404) {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            } else {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            }
          }
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (
          !ʟᴀʙᴛᴇꜱᴛ.endsWith(`png`) ||
          !ʟᴀʙᴛᴇꜱᴛ.endsWith(`webp`) ||
          !ʟᴀʙᴛᴇꜱᴛ.endsWith(`jpg`) ||
          !ʟᴀʙᴛᴇꜱᴛ.endsWith(`jpeg`)
        ) {
          const downloader = await new Downloader({
            url: ʟᴀʙᴛᴇꜱᴛ,
            directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
            fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
            cloneFiles: false,
          });
          try {
            await downloader.download();
            let content = await fs.readFileSync(
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
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
↳👅𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
↳⚡𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} 
`,
                  footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
                  buttons: [
                    {
                      buttonId: `${ᴋᴇɪ}list`,
                      buttonText: { displayText: `${ᴋᴇɪ}list` },
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
              .then(
                fs.unlinkSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
                )
              );
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя.status == 404) {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            } else {
              ꜰᴜᴄᴋ.catch(`Try Again Image Not Found`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
            }
          }
        }
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
