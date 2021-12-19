// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { porno } = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/scraper`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const Downloader = require(`nodejs-file-downloader`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require("fs");
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
module.exports = {
  name: `tikporn`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(`𝐓𝐨𝐩𝐢𝐜: ` + FinalName);
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        (!𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin || !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderKRAK)
      ) {
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
          contentText: `❌ @${ꜱᴇɴᴅᴇʀeceived},  *You Are Not Allowed!*

_❗In Groups This Command allowed to Admins & Developers!_`,
          footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
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
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      prn = await porno();
      const link = prn.video;
      console.log(link);
      var ppl = `https://tikporntok.com/` + prn.video;
      console.log(ppl);
      const downloader = await new Downloader({
        url: ppl,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        let content = fs.readFileSync(
          `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
        );
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.video,
          {
            mimetype: Mimetype.mp4,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}porn`,
            buttonText: { displayText: `${ᴋᴇɪ}porn` },
            type: 1,
          },
          {
            buttonId: `${ᴋᴇɪ}nsfwside`,
            buttonText: { displayText: `${ᴋᴇɪ}nsfwside` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

┌────⭓
│⚡ 𝐀𝐬𝐤𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived},
│⚡ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
└───────────⭓

┌────⭓ 
│⭔ Title : ${prn.title}
│⭔ Viewers : ${prn.views}
│⭔ Tags : ${prn.tags}
│⭔ Likes : ${prn.like}
│⭔ Dislikes : ${prn.dislike}
│⭔ Favourite : ${prn.favorite}
│⭔ Time Upload : ${prn.upload}
│
└───────────⭓
⭔ Description : ${prn.desc}
⭔ Download: https://tikporntok.com/${prn.video}
⭔ Source : https://tikporntok.com/${prn.source}`,
          footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
          buttons: buttons,
          headerType: 5,
          videoMessage: media.message.videoMessage,
        };
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            buttonMessage,
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .then(() => {
            fs.unlinkSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`);
          })
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
