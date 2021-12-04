// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `invite`,
  commandType: "Information📜",
  description: `Use this module to send a group invite link in the group or personally to someone.`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    if (!ᴜʟᴛʀᴏɴ.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `module only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      return;
    }
    if (!ᴜʟᴛʀᴏɴ.isBotGroupAdmin) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `Sorry, don't have permission to do so since I am not an admin.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      return;
    }
    const code = await υℓтяσηℓιєηт.groupInviteCode(ᴜʟᴛʀᴏɴ.chatId);
    if (ᴜʟᴛʀᴏɴ.isReply) {
      υℓтяσηℓιєηт
        .sendMessage(
          chat.message.extendedTextMessage.contextInfo.participant,
          `https://chat.whatsapp.com/` + code,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `Invite link sent in DM, please check.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      return;
    }
    υℓтяσηℓιєηт
      .sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `https://chat.whatsapp.com/` + code,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    return;
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
