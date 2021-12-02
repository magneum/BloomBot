const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `yuri`,
  description: `	Girls on Girls, and Girl's only!<3`,
  ƈʏɮօʀɢʍօʀɛ: `	Girls on Girls, and Girl's only!<3`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.yuri(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_*☢️Últrðñ*

⚠️𝙉𝙤𝙩 𝙎𝙖𝙛𝙚 𝙁𝙤𝙧 𝙒𝙤𝙧𝙠
🔸𝐓𝐨𝐩𝐢𝐜⬰ ʏᴜʀɪ
🔸𝐀𝐝𝐮𝐥𝐭⬰ ᴛʀᴜᴇ(ɴꜱꜰᴡ)
🔸𝐓𝐲𝐩𝐞⬰ ʜᴇɴᴛᴀɪ`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};