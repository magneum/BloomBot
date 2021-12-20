// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const Downloader = require(`nodejs-file-downloader`);
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const fs = require(`fs`);
const akaneko = require(`akaneko`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
var moon = [
  "ass",
  "bsdm",
  "blowjob",
  "cum",
  "doujin",
  "feet",
  "femdom",
  "foxgirl",
  "glasses",
  "hentai",
  "maid",
  "masturbation",
  "netorare",
  "orgy",
  "panties",
  "pussy",
  "school",
  "tentacles",
  "thighs",
  "uniform",
  "yuri",
];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
module.exports = {
  name: `ass`,
  description: `ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    const link = await akaneko.nsfw.ass();
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      let content = fs.readFileSync(_𝔏𝔞𝔟_.MINAN);
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
      console.log(link);
      if (link.endsWith(`.png`)) {
        const downloader = await new Downloader({
          url: link,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
          );
          console.log(content);
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
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}*
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${link}`,
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
            .then(() => {
              fs.unlinkSync(
                `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
              );
            })
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      } else if (link.endsWith(`.webp`)) {
        console.log(link);
        const downloader = await new Downloader({
          url: link,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.webp`
          );
          console.log(content);
          await ffmpeg
            .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.webp`)
            .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`)
            .on("end", async () => {
              console.log("Finished");
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`
                  ),
                  MessageType.video,
                  {
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                    quoted: chat,
                    mimetype: "video/gif",
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_
                
┌────⭓ 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

@${ꜱᴇɴᴅᴇʀeceived} hugged @${personreceived}!

🔗𝐋𝐢𝐧𝐤: ${link}`,
                  }
                )
                .then(async () => {
                  await fs.unlinkSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.webp`
                  );
                  await fs.unlinkSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`
                  );
                })
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            })
            .on("error", (e) => console.log(e))
            .run();
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      } else {
        console.log(link);
        const downloader = await new Downloader({
          url: link,
          directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = fs.readFileSync(
            `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.jpg`
          );
          console.log(content);
          await ffmpeg
            .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.jpg`)
            .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`)
            .on("end", async () => {
              console.log("Finished");
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`
                  ),
                  MessageType.video,
                  {
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                    quoted: chat,
                    mimetype: "video/gif",
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_
                
┌────⭓ 
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

@${ꜱᴇɴᴅᴇʀeceived} hugged @${personreceived}!

🔗𝐋𝐢𝐧𝐤: ${link}`,
                  }
                )
                .then(async () => {
                  await fs.unlinkSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.jpg`
                  );
                  await fs.unlinkSync(
                    `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.png`
                  );
                })
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            })
            .on("error", (e) => console.log(e))
            .run();
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
    }
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
