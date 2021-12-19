// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { porno } = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/scraper`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const Downloader = require(`nodejs-file-downloader`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require("fs");
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `porn`,
  description: `Get random porn from tikporntok`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}porn `,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(`𝐓𝐨𝐩𝐢𝐜: ` + FinalName);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      prn = await porno();
      const link = prn.video;
      console.log(link);
      var ppl = `https://tikporntok.com/` + prn.video;
      console.log(ppl);
      const downloader = await new Downloader({
        url: ppl,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `${FinalName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        let content = fs.readFileSync(
          `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`
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
          contentText: `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

┌────⭓
│⦿ 𝐀𝐬𝐤𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
│⦿ 𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
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
          footerText: `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ`,
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
              contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
            }
          )
          .then(() => {
            fs.unlinkSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${FinalName}_${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}.mp4`);
          })
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
