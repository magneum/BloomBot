// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `invite`,
  description: `Module to create group invite link`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to send a group invite link in the group or personally to someone.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    if (!ʊʟȶʀօռ.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `module only applicable in a group chat.`,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      return;
    }
    if (!ʊʟȶʀօռ.isBotGroupAdmin) {
      υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `Sorry, don't have permission to do so since I am not an admin.`,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      return;
    }
    const code = await υℓтяσηℓιєηт.groupInviteCode(ʊʟȶʀօռ.chatId);
    if (ʊʟȶʀօռ.isReply) {
      υℓтяσηℓιєηт
        .sendMessage(
          chat.message.extendedTextMessage.contextInfo.participant,
          `https://chat.whatsapp.com/` + code,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `Invite link sent in DM, please check.`,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      return;
    }
    υℓтяσηℓιєηт
      .sendMessage(
        ʊʟȶʀօռ.chatId,
        `https://chat.whatsapp.com/` + code,
        MessageType.text
      )
      .catch((cᴇʀʀᴏʀ) => {
        ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      });
    return;
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
