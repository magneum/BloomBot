`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
const moon = [
  `bite`,
  `blush`,
  `bored`,
  `confused`,
  `cry`,
  `cuddle`,
  `goodnight`,
  `happy`,
  `highfive`,
  `hug`,
  `kiss`,
  `pat`,
  `poke`,
  `sad`,
  `slap`,
  `smile`,
  `thinking`,
  `wave`,
  `wink`,
  `yes`,
];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `humanside`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        { url: `./𝓜𝖎𝖟𝖚ӄ𝖎/Mizuki_Main.png` },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}list`,
          buttonText: { displayText: `${ᴋᴇɪ}list` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}${moonshine}`,
          buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `•@${ꜱᴇɴᴅᴇʀeceived},
🤖𝘼𝙙𝙙 𝙈𝙞𝙯𝙪𝙠𝙞 𝙄𝙣 𝙔𝙤𝙪𝙧 𝙜𝙧𝙤𝙪𝙥: *${ᴋᴇɪ}request*

┌────⭓ *👅𝙃𝙪𝙢𝙖𝙣 𝙉𝙎𝙁𝙒*
│👅• ${ᴋᴇɪ}rporn: _get random porn gif_
│👅• ${ᴋᴇɪ}tikporn: _get random tiktoc porn video_
│👅• ${ᴋᴇɪ}4k: _get random 4k human nsfw image_
│👅• ${ᴋᴇɪ}blowjob: _get random 4k blowjob image_
│👅• ${ᴋᴇɪ}slut: _get random 4k cumSluts image_
│👅• ${ᴋᴇɪ}milf: _get random 4k milf image_
│👅• ${ᴋᴇɪ}milk: _get random 4k milking image_
│👅• ${ᴋᴇɪ}pussy: _get random 4k pussy image_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
        footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
