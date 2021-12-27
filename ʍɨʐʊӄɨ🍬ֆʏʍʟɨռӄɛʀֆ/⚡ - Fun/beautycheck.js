// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var randomMC = require(`random-material-color`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
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
const fs = require(`fs`);
const rn = require("random-number");
const Muchs = {
  min: -100,
  max: 100,
};
const Much = rn(Muchs);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `beautycheck`,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}beautycheck* or reply someone`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    console.log("🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️");
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.Group && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      const width = 1280;
      const height = 720;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext(`2d`);
      context.fillStyle = `#252525`;
      context.fillRect(0, 0, width, height);
      context.font = `bold 120pt Housttely`;
      context.textAlign = `center`;
      context.textBaseline = `top`;
      const text = `Beauty Checker`;
      const textWidth = context.measureText(text).width;
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
      context.fillStyle = randomMC.getColor();
      context.fillText(text, 600, 170);
      context.fillStyle = `#fff`;
      context.font = `bold 80pt Honeycomb`;
      context.fillText(`Percentage: ` + Much + `%`, 600, 530);
      loadImage(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`).then(async () => {
        const buffer = canvas.toBuffer(`image/png`);
        fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`, buffer);
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: `./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ʜᴏᴡ ʙᴇᴀᴜᴛʏꜰᴜʟʟ ɪꜱ *@${ꜱᴇɴᴅᴇʀeceived}*
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Much}%`,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      });
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.Group && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      personreceived = Receiver.substring(0, Receiver.length - 15);
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const Much = can[Math.floor(Math.random() * can.length)];
      const width = 1280;
      const height = 720;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext(`2d`);
      context.fillStyle = `#252525`;
      context.fillRect(0, 0, width, height);
      context.font = `bold 120pt Housttely`;
      context.textAlign = `center`;
      context.textBaseline = `top`;
      const text = `Beauty Checker`;
      const textWidth = context.measureText(text).width;
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
      context.fillStyle = randomMC.getColor();
      context.fillText(text, 600, 170);
      context.fillStyle = `#fff`;
      context.font = `bold 80pt Honeycomb`;
      context.fillText(`Percentage: ` + Much + `%`, 600, 530);
      loadImage(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`).then(async () => {
        const buffer = canvas.toBuffer(`image/png`);
        fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`, buffer);
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: `./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
              caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ʜᴏᴡ ʙᴇᴀᴜᴛʏꜰᴜʟʟ ɪꜱ *@${personreceived}*
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Much}%`,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      });
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.Group && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      personreceived = Receiver.substring(0, Receiver.length - 15);
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const Much = can[Math.floor(Math.random() * can.length)];
      const width = 1280;
      const height = 720;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext(`2d`);
      context.fillStyle = `#252525`;
      context.fillRect(0, 0, width, height);
      context.font = `bold 120pt Housttely`;
      context.textAlign = `center`;
      context.textBaseline = `top`;
      const text = `Beauty Checker`;
      const textWidth = context.measureText(text).width;
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
      context.fillStyle = randomMC.getColor();
      context.fillText(text, 600, 170);
      context.fillStyle = `#fff`;
      context.font = `bold 80pt Honeycomb`;
      context.fillText(`Percentage: ` + Much + `%`, 600, 530);
      loadImage(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`).then(async () => {
        const buffer = canvas.toBuffer(`image/png`);
        fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`, buffer);
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: `./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
              caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ʜᴏᴡ ʙᴇᴀᴜᴛʏꜰᴜʟʟ ɪꜱ *@${personreceived}*
Asked By? @${ꜱᴇɴᴅᴇʀeceived} 
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Much}%`,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      });
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.Group && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      const Much = can[Math.floor(Math.random() * can.length)];
      const width = 1280;
      const height = 720;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext(`2d`);
      context.fillStyle = `#252525`;
      context.fillRect(0, 0, width, height);
      context.font = `bold 120pt Housttely`;
      context.textAlign = `center`;
      context.textBaseline = `top`;
      const text = `Beauty Checker`;
      const textWidth = context.measureText(text).width;
      context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
      context.fillStyle = randomMC.getColor();
      context.fillText(text, 600, 170);
      context.fillStyle = `#fff`;
      context.font = `bold 80pt Honeycomb`;
      context.fillText(`Percentage: ` + Much + `%`, 600, 530);
      loadImage(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`).then(async () => {
        const buffer = canvas.toBuffer(`image/png`);
        fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`, buffer);
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: `./ʍɨʐʊӄɨ🗑️ȶɛʍք/爪𝖎𝖟𝖚ӄ𝖎Tempa.png`,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.png,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ʜᴏᴡ ʙᴇᴀᴜᴛʏꜰᴜʟʟ ɪꜱ *@${ꜱᴇɴᴅᴇʀeceived}*
𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Much}%`,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      });
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
