// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tagall`,
  commandType: "Fun⚡",
  description: `command to tag evryone in a group.`,
  ᴍᴇᴇ6ʍօʀɛ: `Use this command to tag everyone in the group by either replying to a message or simply using  *${ꜱɪɢɴ.Mee6IX}tagall*  command.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    try {
      if (!ᴍᴇᴇ6.isGroup) {
        return await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: `https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️ONLY IN GROUPS!*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
      }
      let members = [];
      for (var i = 0; i < ᴍᴇᴇ6.groupMembers.length; i++) {
        members[i] = ᴍᴇᴇ6.groupMembers[i].jid;
      }
      if (ᴍᴇᴇ6.isReply) {
        υℓтяσηℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, `*Everyone!*`, MessageType.text, {
            contextInfo: {
              stanzaId: ᴍᴇᴇ6.replyMessageId,
              participant: ᴍᴇᴇ6.replyParticipant,
              quotedMessage: {
                conversation: ᴍᴇᴇ6.replyMessage,
              },
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        return;
      }
      if (Arc.length) {
        υℓтяσηℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, Arc.join(` `), MessageType.text, {
            contextInfo: {
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        return;
      }

      υℓтяσηℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, `*Everyone!*`, MessageType.text, {
          contextInfo: {
            mentionedJid: members,
          },
        })
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.Mee6IX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
