// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ULTƦON/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tagall`,
  commandType: "Fun⚡",
  description: `command to tag evryone in a group.`,
  ULTƦONʍօʀɛ: `Use this command to tag everyone in the group by either replying to a message or simply using  *${ꜱɪɢɴ.ULTRONIX}tagall*  command.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      if (!ULTƦON.isGroup) {
        return await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            {
              url: `https://i.postimg.cc/5tb40s6w/Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️ONLY IN GROUPS!*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
          });
      }
      let members = [];
      for (var i = 0; i < ULTƦON.groupMembers.length; i++) {
        members[i] = ULTƦON.groupMembers[i].jid;
      }
      if (ULTƦON.isReply) {
        υℓтяσηℓιєηт
          .sendMessage(ULTƦON.chatId, `*Everyone!*`, MessageType.text, {
            contextInfo: {
              stanzaId: ULTƦON.replyMessageId,
              participant: ULTƦON.replyParticipant,
              quotedMessage: {
                conversation: ULTƦON.replyMessage,
              },
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (Arc.length) {
        υℓтяσηℓιєηт
          .sendMessage(ULTƦON.chatId, Arc.join(` `), MessageType.text, {
            contextInfo: {
              mentionedJid: members,
            },
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }

      υℓтяσηℓιєηт
        .sendMessage(ULTƦON.chatId, `*Everyone!*`, MessageType.text, {
          contextInfo: {
            mentionedJid: members,
          },
        })
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
