// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `remove`,
  commandType: "Administration🐙",
  description: `Use this module to remove people from a group by tagging them  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or replying to them  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    try {
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
      let owner = ᴜʟᴛʀᴏɴ.chatId.split(`-`)[0];
      if (ᴜʟᴛʀᴏɴ.isReply) {
        let PersonToRemove =
          chat.message.extendedTextMessage.contextInfo.participant;
        if (PersonToRemove === owner + `@s.whatsapp.net`) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
          return;
        }
        if (PersonToRemove === ᴜʟᴛʀᴏɴ.owner) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!🥺\n*Request Rejected.* 😤`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
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
              ᴜʟᴛʀᴏɴ.chatId,
              `*person is not in the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
        }
        try {
          if (PersonToRemove) {
            υℓтяσηℓιєηт
              .groupRemove(ᴜʟᴛʀᴏɴ.chatId, [PersonToRemove])
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
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
            ᴜʟᴛʀᴏɴ.chatId,
            `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      }
      if (Arc[0][0] == `@`) {
        const number = Arc[0].substring(1);
        if (isNaN(number)) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
          return;
        }

        if (number + `@s.whatsapp.net` === ᴜʟᴛʀᴏɴ.owner) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!🥺\n*Request Rejected.* 😤`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
          return;
        }

        if (!(number === owner)) {
          υℓтяσηℓιєηт
            .groupRemove(ᴜʟᴛʀᴏɴ.chatId, [number + `@s.whatsapp.net`])
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
          return;
        } else {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
          return;
        }
      }
      υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `*🎮ᴜʟᴛʀᴏɴ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
