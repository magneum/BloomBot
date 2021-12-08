const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `promote`,
  commandType: "Admin🐙Groups",
  description: `Use this command to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
For example- *${ꜱɪɢɴ.Mee6IX}promote 9861212121*`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (!ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `This command is only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (!ᴍᴇᴇ6.isReply && typeof Arc[0] == `undefined`) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Reply/tag/enter contact number of the person to be promoted.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const reply = chat.message.extendedTextMessage;
    if (ᴍᴇᴇ6.isReply) {
      var contact = reply.contextInfo.participant.split(`@`)[0];
    } else {
      var contact = async (Arc, υℓтяσηℓιєηт, ᴍᴇᴇ6) => {
        var JoinIDNum = ``;
        var countryCode = ꜱɪɢɴ.COUNTRY_CODE;
        if (isNaN(Arc[0]) || Arc[0][0] === `+`) {
          if (Arc[0][0] === `@` || Arc[0][0] === `+`) {
            JoinIDNum = Arc[0].substring(1, Arc[0].length + 1);
          } else {
            await υℓтяσηℓιєηт
              .sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            await υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId, {
                  url: ꜱɪɢɴ.ARC,
                },
                MessageType.image, {
                  mimetype: Mimetype.jpeg,
                  caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
                }
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
        } else {
          JoinIDNum = Arc[0];
        }

        if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
          await υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId, {
                url: ꜱɪɢɴ.ARC,
              },
              MessageType.image, {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
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
    for (const index in ᴍᴇᴇ6.groupMembers) {
      if (contact == ᴍᴇᴇ6.groupMembers[index].jid.split(`@`)[0]) {
        if (ᴍᴇᴇ6.groupMembers[index].isAdmin) {
          admin = true;
        }
      }
    }
    if (isMember) {
      if (!admin == true) {
        const arr = [contact + `@s.whatsapp.net`];
        υℓтяσηℓιєηт.groupMakeAdmin(ᴍᴇᴇ6.chatId, arr);
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*` + contact + ` promoted to admin*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
      } else {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*` + contact + ` is already an admin*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
      }
    }
    if (!isMember) {
      if (contact === undefined) {
        return;
      }

      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Person is not in the group.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================