// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ULTƦON/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `invite`,
  commandType: "Information📜",
  description: `Use this command to send a group invite link in the group or personally to someone.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    if (!ULTƦON.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      return;
    }
    if (!ULTƦON.isBotGroupAdmin) {
      υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `Sorry, don't have permission to do so since I am not an admin.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      return;
    }
    const code = await υℓтяσηℓιєηт.groupInviteCode(ULTƦON.chatId);
    if (ULTƦON.isReply) {
      υℓтяσηℓιєηт
        .sendMessage(
          chat.message.extendedTextMessage.contextInfo.participant,
          `https://chat.whatsapp.com/` + code,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `Invite link sent in DM, please check.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      return;
    }
    υℓтяσηℓιєηт
      .sendMessage(
        ULTƦON.chatId,
        `https://chat.whatsapp.com/` + code,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    return;
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
