// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const fs = require(`fs`);
require(`python-format-js`);
const cleanRF = require("./cleanRF");
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require("performance-now");
let Timestamp = speed();
const Ping = speed() - Timestamp;
const date = require("date-and-time");
const now = new Date();
date.format(now, "ddd, MMM DD YYYY");
const pattern = date.compile("ddd, MMM DD YYYY");
const Clock = date.format(now, pattern);
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/HousttelySignature-GOonZ.ttf`, {
  family: `Housttely`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/AngelesPersonalUseItalic-2Odz8.ttf`, {
  family: `AngelesPersonalUseItalic`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/KashmirrosyPersonaluse-X3qLd.otf`, {
  family: `KashmirrosyPersonaluse`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/TheHeartOfEverythingDemo-KRdD.ttf`, {
  family: `TheHeartOfEverythingDemo`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/SlouchybrushRegular-eZnEB.ttf`, {
  family: `SlouchybrushRegular`,
});
registerFont(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Shalma-Rp0Pe.otf`, {
  family: `Shalma-Rp0Pe`,
});
var randomMC = require(`random-material-color`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
exports.nonee = async (
  ӄʀǟӄɨռʐ,
  chat,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  ꜱᴇɴᴅᴇʀɪᴅ,
  ꜱᴇɴᴅᴇʀeceived,
  commandName,
  needs
) => {
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
    context.font = `bold 40pt Shalma-Rp0Pe`;
    context.fillText(`(c)Mizuki`, 600, 530);
    loadImage(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`).then(async () => {
      const buffer = canvas.toBuffer(`image/png`);
      fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`, buffer);
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: `./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Noargs.png`,
          },
          MessageType.image,
          {
            quoted: chat,
            mimetype: Mimetype.png,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
              4
            )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, 

⬡━━━━━━━★
⚡𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${commandName}
🤖𝐔𝐬𝐚𝐠𝐞/𝐈𝐧𝐟𝐨:  
${needs === undefined ? `null` : needs}`,
          }
        )
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    });
  } catch (ℓαвєяяσя) {
    await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
    console.log(
      "⬡==========================⬡    🍁 " +
        ℓαвєяяσя +
        "🍁    ⬡==========================⬡"
    );
  }
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
