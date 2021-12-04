// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tagall`,
  commandType: "Fun⚡",
  description: `Module to tag evryone in a group.`,
  ᴜʟᴛʀᴏɴʍօʀɛ: `Use this module to tag everyone in the group by either replying to a message or simply using  *${UltronSitreper.ULTRONIX}tagall*  module.`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    try {
      if (!ᴜʟᴛʀᴏɴ.isGroup) {
        return await υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            {
              url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️ONLY IN GROUPS!*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
          });
      }
      let members = [];
      for (var i = 0; i < ᴜʟᴛʀᴏɴ.groupMembers.length; i++) {
        members[i] = ᴜʟᴛʀᴏɴ.groupMembers[i].jid;
      }
      if (ᴜʟᴛʀᴏɴ.isReply) {
        υℓтяσηℓιєηт
          .sendMessage(ᴜʟᴛʀᴏɴ.chatId, `*Everyone!*`, MessageType.text, {
            contextInfo: {
              stanzaId: ᴜʟᴛʀᴏɴ.replyMessageId,
              participant: ᴜʟᴛʀᴏɴ.replyParticipant,
              quotedMessage: {
                conversation: ᴜʟᴛʀᴏɴ.replyMessage,
              },
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      }
      if (Arc.length) {
        υℓтяσηℓιєηт
          .sendMessage(ᴜʟᴛʀᴏɴ.chatId, Arc.join(` `), MessageType.text, {
            contextInfo: {
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      }

      υℓтяσηℓιєηт
        .sendMessage(ᴜʟᴛʀᴏɴ.chatId, `*Everyone!*`, MessageType.text, {
          contextInfo: {
            mentionedJid: members,
          },
        })
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `*🎮ᴜʟᴛʀᴏɴ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
