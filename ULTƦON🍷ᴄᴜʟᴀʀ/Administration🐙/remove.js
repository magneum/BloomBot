// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const ℓιєηт = require("../../ULTƦON/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `remove`,
  commandType: "Administration🐙",
  description: `Use this command to remove people from a group by tagging them  *${ꜱɪɢɴ.ULTRONIX}remove @<person-to-remove>*  or replying to them  *${ꜱɪɢɴ.ULTRONIX}remove*${ꜱɪɢɴ.ULTRONIX}`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
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
      let owner = ULTƦON.chatId.split(`-`)[0];
      if (ULTƦON.isReply) {
        let PersonToRemove =
          chat.message.extendedTextMessage.contextInfo.participant;
        if (PersonToRemove === owner + `@s.whatsapp.net`) {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        }
        if (PersonToRemove === ULTƦON.owner) {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!🥺\n*Request Rejected.* 😤`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        }
        var isMember = async (chatId, groupMembers) => {
          var isMember = false;
          if (!(chatId === undefined)) {
            for (const index in groupMembers) {
              if (chatId == groupMembers[index].jid.split(`@`)[0]) {
                isMember = true;
              }
            }
            return isMember;
          } else {
            return isMember;
          }
        };
        if (!isMember) {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `*person is not in the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
        }
        try {
          if (PersonToRemove) {
            υℓтяσηℓιєηт
              .groupRemove(ULTƦON.chatId, [PersonToRemove])
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
        return;
      }
      if (!Arc[0]) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Reply to the person you want to remove or tag them.\n\nFor instance,  *${ꜱɪɢɴ.ULTRONIX}remove @<person-to-remove>*  or reply using  *${ꜱɪɢɴ.ULTRONIX}remove*${ꜱɪɢɴ.ULTRONIX}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (Arc[0][0] == `@`) {
        const number = Arc[0].substring(1);
        if (isNaN(number)) {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `Reply to the person you want to remove or tag them.\n\nFor instance,  *${ꜱɪɢɴ.ULTRONIX}remove @<person-to-remove>*  or reply using  *${ꜱɪɢɴ.ULTRONIX}remove*${ꜱɪɢɴ.ULTRONIX}`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        }

        if (number + `@s.whatsapp.net` === ULTƦON.owner) {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!🥺\n*Request Rejected.* 😤`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        }

        if (!(number === owner)) {
          υℓтяσηℓιєηт
            .groupRemove(ULTƦON.chatId, [number + `@s.whatsapp.net`])
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        } else {
          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          return;
        }
      }
      υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `Reply to the person you want to remove or tag them.\n\nFor instance,  *${ꜱɪɢɴ.ULTRONIX}remove @<person-to-remove>*  or reply using  *${ꜱɪɢɴ.ULTRONIX}remove*${ꜱɪɢɴ.ULTRONIX}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
