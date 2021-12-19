// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `nsfwside`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.MEE,
          },
          MessageType.image,
          {
            quoted: chat,
            mimetype: Mimetype.png || Mimetype.jpeg,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
            caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
💞𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

┌────⭓ *👅𝙃𝙪𝙢𝙖𝙣 𝙉𝙎𝙁𝙒*
│👅• ${ᴋᴇɪ}4k: _get random 4k porn image_
│👅• ${ᴋᴇɪ}blowjob: _get random 4k blowjob image_
│👅• ${ᴋᴇɪ}sluts: _get random 4k cumSluts image_
│👅• ${ᴋᴇɪ}milf: _get random 4k milf image_
│👅• ${ᴋᴇɪ}milk: _get random 4k milking image_
│👅• ${ᴋᴇɪ}pussy: _get random 4k pussy image_
└───────────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
