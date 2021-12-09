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
    const ᴍᴇᴇgit = require("simple-git")();
    await ᴍᴇᴇgit.fetch();
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      console.log(ɴᴇᴡᴍᴇᴇ6);
      var str = ᴍᴇᴇ6.sender;
      var newString = str.substring(0, str.length - 15);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    *⦿𝐌𝐞𝐞𝟔™⦿*    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*💞Dҽαɾ @${newString},*
𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      console.log("No commits to pull");
    }
    if (ᴍᴇᴇ6.chatId === "918436686758-120363025343298860@g.us") {
      console.log("Dev-only-Mode-Allowed!");
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    *⦿𝐌𝐞𝐞𝟔™⦿*    ⬡••••••••⬡

ᴊᴏɪɴ ꜱᴘᴀᴍ ɢʀᴏᴜᴘ ᴛᴏ ᴜꜱᴇ ᴀɴʏ/ᴀʟʟ ᴍᴇᴇ6 ᴄᴏᴍᴍᴀɴᴅꜱ!
シ︎𝐒𝐩𝐚𝐦 𝐆𝐫𝐨𝐮𝐩🛸https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          `conversation`
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    } else {
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
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
