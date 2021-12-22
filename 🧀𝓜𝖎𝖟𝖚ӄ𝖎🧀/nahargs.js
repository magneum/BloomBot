`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ℓιєηт = require(`./catch`);
const fs = require(`fs`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/HousttelySignature-GOonZ.ttf`, {
  family: `Housttely`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/AngelesPersonalUseItalic-2Odz8.ttf`, {
  family: `AngelesPersonalUseItalic`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/KashmirrosyPersonaluse-X3qLd.otf`, {
  family: `KashmirrosyPersonaluse`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/TheHeartOfEverythingDemo-KRdD.ttf`, {
  family: `TheHeartOfEverythingDemo`,
});
registerFont(`./🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/SlouchybrushRegular-eZnEB.ttf`, {
  family: `SlouchybrushRegular`,
});
var randomMC = require(`random-material-color`);
exports.nahargs = async (
  ӄʀǟӄɨռʐ,
  chat,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  ꜱᴇɴᴅᴇʀɪᴅ,
  ꜱᴇɴᴅᴇʀeceived,
  commandName,
  needs
) => {
  `🐙============================================================================================================================<⚡>`;
  try {
    const width = 1280;
    const height = 720;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext(`2d`);
    context.fillStyle = `#252525`;
    context.fillRect(0, 0, width, height);
    context.font = `bold 120pt KashmirrosyPersonaluse`;
    context.textAlign = `center`;
    context.textBaseline = `top`;
    const text = `No Arguments!`;
    const textWidth = context.measureText(text).width;
    context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
    context.fillStyle = randomMC.getColor();
    context.fillText(text, 600, 170);
    context.fillStyle = `#fff`;
    context.font = `bold 40pt SlouchybrushRegular`;
    context.fillText(`(c)Mizuki By KrakinzLab`, 600, 530);
    loadImage(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`).then(async () => {
      const buffer = canvas.toBuffer(`image/png`);
      fs.writeFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`, buffer);
      await ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`,
        },
        MessageType.image,
        {
          quoted: chat,
          mimetype: Mimetype.png,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*

*😑Baka* @${ꜱᴇɴᴅᴇʀeceived}, 𝘍𝘰𝘳𝘨𝘰𝘵 𝘛𝘰 𝘎𝘪𝘷𝘦 𝘈𝘯𝘺 𝘈𝘳𝘨𝘶𝘮𝘦𝘯𝘵!


┌────⭓ ⚡𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${commandName}
└─────────⭓ 𝐔𝐬𝐚𝐠𝐞/𝐈𝐧𝐟𝐨👇🏽‍
${needs === undefined ? `null` : needs}`,
        }
      );
    });
  } catch (ℓαвєяяσя) {
    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
  }
};
`🐙============================================================================================================================<⚡>`;
