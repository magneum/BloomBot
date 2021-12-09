const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `admins`,
  commandType: "Admin🐙Groups",
  description: `Tag admins of a group (either as a reply to another message or a direct tag).`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    if (!ᴍᴇᴇ6.isGroup) {
      ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*${ᴋᴇɪ}admins*  command is only applicable for group chats.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }

    var message = ``;
    for (let admin of ᴍᴇᴇ6.groupAdmins) {
      let number = admin.split(`@`)[0];
      message += `@${number} `;
    }

    if (!ᴍᴇᴇ6.isReply) {
      ʍɛɛℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, message, MessageType.text, {
          contextInfo: {
            mentionedJid: ᴍᴇᴇ6.groupAdmins,
          },
        })
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }

    ʍɛɛℓιєηт
      .sendMessage(ᴍᴇᴇ6.chatId, message, MessageType.text, {
        contextInfo: {
          stanzaId: ᴍᴇᴇ6.replyMessageId,
          participant: ᴍᴇᴇ6.replyParticipant,
          quotedMessage: {
            conversation: ᴍᴇᴇ6.replyMessage,
          },
          mentionedJid: ᴍᴇᴇ6.groupAdmins,
        },
      })
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
