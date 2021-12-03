// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `promote`,
  description: `Promote a member to admin`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example- *${UltronSitreper.ULTRONIX}promote 9861212121*`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      if (!ʊʟȶʀօռ.isGroup) {
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `This command is only applicable in a group chat.`,
          MessageType.text
        );
        return;
      }
      if (!ʊʟȶʀօռ.isBotGroupAdmin) {
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `Sorry, dont have the permission to do so since I am not an admin.`,
          MessageType.text
        );
        return;
      }
      if (!ʊʟȶʀօռ.isReply && typeof Arc[0] == `undefined`) {
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `Reply/tag/enter contact number of the person to be promoted.`,
          MessageType.text
        );
        return;
      }
      const reply = chat.message.extendedTextMessage;

      if (ʊʟȶʀօռ.isReply) {
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = async (Arc, υℓтяσηℓιєηт, ʊʟȶʀօռ) => {
          var JoinIDNum = ``;
          var countryCode = UltronSitreper.COUNTRY_CODE;
          if (isNaN(Arc[0]) || Arc[0][0] === `+`) {
            if (Arc[0][0] === `@` || Arc[0][0] === `+`) {
              JoinIDNum = Arc[0].substring(1, Arc[0].length + 1);
            } else {
              await υℓтяσηℓιєηт.sendMessage(
                ʊʟȶʀօռ.chatId,
                "❌",
                MessageType.text
              );
              await υℓтяσηℓιєηт.sendMessage(
                ʊʟȶʀօռ.chatId,
                {
                  url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
                },
                MessageType.image,
                {
                  mimetype: Mimetype.jpeg,
                  caption: `*⚠️Seems like someone forgot to give Movie/Series name!*
      
      *Usage Example*
      .imdb <movie/series>`,
                }
              );
              return;
            }
          } else {
            JoinIDNum = Arc[0];
          }

          if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
            await υℓтяσηℓιєηт.sendMessage(
              ʊʟȶʀօռ.chatId,
              "❌",
              MessageType.text
            );
            await υℓтяσηℓιєηт.sendMessage(
              ʊʟȶʀօռ.chatId,
              {
                url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give Movie/Series name!*
    
    *Usage Example*
    .imdb <movie/series>`,
              }
            );
            return;
          } else if (JoinIDNum.length === 10) {
            JoinIDNum = countryCode + JoinIDNum;
          }
          var isOnWhatsApp = await υℓтяσηℓιєηт.isOnWhatsApp(JoinIDNum);
          if (isOnWhatsApp === undefined) {
            throw `NumberInvalid`;
          }
          return JoinIDNum;
        };
      }

      var admin = false;
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
      for (const index in ʊʟȶʀօռ.groupMembers) {
        if (contact == ʊʟȶʀօռ.groupMembers[index].jid.split(`@`)[0]) {
          if (ʊʟȶʀօռ.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      if (isMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          υℓтяσηℓιєηт.groupMakeAdmin(ʊʟȶʀօռ.chatId, arr);
          υℓтяσηℓιєηт.sendMessage(
            ʊʟȶʀօռ.chatId,
            `*` + contact + ` promoted to admin*`,
            MessageType.text
          );
        } else {
          υℓтяσηℓιєηт.sendMessage(
            ʊʟȶʀօռ.chatId,
            `*` + contact + ` is already an admin*`,
            MessageType.text
          );
        }
      }
      if (!isMember) {
        if (contact === undefined) {
          return;
        }

        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `Person is not in the group.`,
          MessageType.text
        );
        return;
      }
    } catch (cᴇʀʀᴏʀ) {
      if (cᴇʀʀᴏʀ === `NumberInvalid`) {
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      } else {
        await υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
