const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const speed = require("performance-now");
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `groupside`,
  description: `ᴄʜᴇᴄᴋ 爪𝖎𝖟𝖚ӄ𝖎 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎, arg) {
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(
        爪𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: _𝔏𝔞𝔟_.MEE,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
          },
          caption: `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

*Hey •@${personsending}*,
*⬡••••••⦿  𝙂𝙧𝙤𝙪𝙥𝙨  ⦿••••••⬡*

• *${ᴋᴇɪ}promote*  𝘗𝘳𝘰𝘮𝘰𝘵𝘦 𝘢 𝘮𝘦𝘮𝘣𝘦𝘳 𝘵𝘰 𝘢𝘥𝘮𝘪𝘯
• *${ᴋᴇɪ}spam*  Spam Messages ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}ban*  ᴍᴏᴅᴜʟᴇ ᴛᴏ Add the number to banlist.
• *${ᴋᴇɪ}unban*  ᴍᴏᴅᴜʟᴇ ᴛᴏ remove the number from banlist.
• *${ᴋᴇɪ}invite*  ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
• *${ᴋᴇɪ}admins*  ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}disappear*  ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}setgoodbye*  ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
• *${ᴋᴇɪ}mute*  ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
• *${ᴋᴇɪ}kick*  ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}groupdp*  ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
• *${ᴋᴇɪ}unmute*  ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
• *${ᴋᴇɪ}tagall*  ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}setwelcome*  ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ
*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
  },
};
