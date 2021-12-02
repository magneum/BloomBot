const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `femdom`,
  description: `	Female Domination?`,
  ƈʏɮօʀɢʍօʀɛ: `	Female Domination?`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.femdom(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_*☢️Últrðñ*

⚠️𝙉𝙤𝙩 𝙎𝙖𝙛𝙚 𝙁𝙤𝙧 𝙒𝙤𝙧𝙠
🔸𝐓𝐨𝐩𝐢𝐜⬰ ꜰᴇᴍᴅᴏᴍ
🔸𝐀𝐝𝐮𝐥𝐭⬰ ᴛʀᴜᴇ(ɴꜱꜰᴡ)
🔸𝐓𝐲𝐩𝐞⬰ ʜᴇɴᴛᴀɪ`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};