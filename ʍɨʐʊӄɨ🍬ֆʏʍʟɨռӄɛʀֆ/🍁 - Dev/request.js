// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { Encoder, QRByte, ErrorCorrectionLevel } = require(`@nuintun/qrcode`);
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
  async handle(
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    Needs,
    ꜱɪᴛʀᴀᴘ,
    Clock,
    Ping,
    Timers,
    version
  ) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (Needs.length === 0) {
        return Mizuki_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, @${ꜱᴇɴᴅᴇʀeceived},

┌────◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢?
│
│• ᴊᴏɪɴ ᴍɪᴢᴜᴋɪ ɢʀᴏᴜᴘ.
│• ɪɴ ʙᴏᴛ'ꜱ ᴅᴍ: ${ᴋᴇɪ}ʀᴇQᴜᴇꜱᴛ _<ʏᴏᴜʀ ɢᴄ ʟɪɴᴋ>_
└───────〇
_ɪꜰ ʏᴏᴜ ᴅᴏ ɴᴏᴛ ꜰᴏʟʟᴏᴡ/ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜᴇɴ ᴡᴇ *ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅᴇᴠꜱ* ᴅᴏɴᴏᴛ ᴄᴀʀᴇ!_`
        );
      } // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (
        !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
        𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https://chat.whatsapp`)
      ) {
        return Mizuki_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, @${ꜱᴇɴᴅᴇʀeceived},

┌────◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢?
│
│• ᴊᴏɪɴ ᴍɪᴢᴜᴋɪ ɢʀᴏᴜᴘ.
│• ɪɴ ʙᴏᴛ'ꜱ ᴅᴍ: ${ᴋᴇɪ}ʀᴇQᴜᴇꜱᴛ _<ʏᴏᴜʀ ɢᴄ ʟɪɴᴋ>_
└───────〇
_ɪꜰ ʏᴏᴜ ᴅᴏ ɴᴏᴛ ꜰᴏʟʟᴏᴡ/ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜᴇɴ ᴡᴇ *ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅᴇᴠꜱ* ᴅᴏɴᴏᴛ ᴄᴀʀᴇ!_`
        );
      } // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const qrcode = new Encoder();
      qrcode.setEncodingHint(true);
      qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.Q);
      qrcode.write(
        new QRByte(
          `${Needs.join(` `).replace(
            `https://chat.whatsapp.com/`,
            `?verified/`
          )}\n` +
            `\n` +
            `*ReqBy:* @${ꜱᴇɴᴅᴇʀeceived}` +
            `\n` +
            `*ChatID:* ${𝓜𝖎𝖟𝖚ӄ𝖎.chatId}`
        )
      );
      qrcode.make();
      const output = qrcode.toDataURL().split(`,`)[1];
      const imagePath = `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${ꜱᴇɴᴅᴇʀɪᴅ}_${FinalName}.png`;
      fs.writeFileSync(
        imagePath,
        output,
        { encoding: `base64` },
        async function (ℓαвєяяσя) {
          if (ℓαвєяяσя) {
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, @${ꜱᴇɴᴅᴇʀeceived},

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│🥺𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
│◇ ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅɪᴅɴ'ᴛ ꜱᴇɴᴅ ᴀɴʏ ʀᴇꜱᴘᴏɴꜱᴇ
└───────〇`
            );
          }
        }
      );
      await Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, @${ꜱᴇɴᴅᴇʀeceived},

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│⬡ 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐢𝐧𝐠 𝐭𝐨 𝐚𝐝𝐝 _𝐌𝐢𝐳𝐮𝐤𝐢🍹_ 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩!
│⬡ 𝐍𝐨𝐰 𝐒𝐞𝐧𝐝 𝐓𝐡𝐢𝐬 _𝐐𝐑-𝐂𝐎𝐃𝐄_ 𝐢𝐧 𝐌𝐢𝐳𝐮𝐤𝐢 𝐆𝐫𝐨𝐮𝐩! _(ɴᴏᴛ-ʟɪɴᴋ)_
│🐙 𝐆𝐑𝐎𝐔𝐏: ${_𝔏𝔞𝔟_.HASH}`,
        imagePath
      );
      await cleanRF.cleanRF(imagePath);
      return await ӄʀǟӄɨռʐ.sendMessage(
        `19175804221@s.whatsapp.net`,
        `│🍪 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*\n│🔗𝐋𝐢𝐧𝐤 ${Needs.join(` `)}`,
        MessageType.text
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
