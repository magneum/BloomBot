// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF");
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const os = require("os");
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `help`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        { url: _𝔏𝔞𝔟_.MEE },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            contentText: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},

┌──────────────◆➤
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑 𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🍁 𝐀𝐝𝐝 𝐌𝐢𝐳𝐮𝐤𝐢: _${ᴋᴇɪ}request_
│☣️ 𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
│🍰 𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

│🍕 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣! _many many more_
└───────◆➤


┌━━━| 🌈𝙎𝙁𝙒 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬 |➤
│
│🍣 *${ᴋᴇɪ}animemenu*
│🐙 *${ᴋᴇɪ}ownermenu*
│📥 *${ᴋᴇɪ}downloadmenu*
│🔰 *${ᴋᴇɪ}groupmenu*
│🦄 *${ᴋᴇɪ}funmenu* 
│🔎 *${ᴋᴇɪ}searchmenu*
│🧉 *${ᴋᴇɪ}imagemenu* 
│🗂️ *${ᴋᴇɪ}ffmpegmenu*
└───────◆➤

┌━━━| 🔞𝙉𝙎𝙁𝙒 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬 |➤ 
│
│👅 *${ᴋᴇɪ}pornmenu* _(ᴀᴅᴍɪɴ-ᴏɴʟʏ)_
│🍄 *${ᴋᴇɪ}hentaimenu* _(ᴀᴅᴍɪɴ-ᴏɴʟʏ)_
└───────◆➤

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗦𝘁𝗮𝗿𝘁 𝘂𝘀𝗶𝗻𝗴 𝗠𝗶𝘇𝘂𝗸𝗶👇🏽‍ `,
            footerText: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
              4
            )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}list`,
                buttonText: { displayText: `${ᴋᴇɪ}list` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}mizuki`,
                buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
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
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
