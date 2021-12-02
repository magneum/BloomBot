// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
module.exports = {
  name: `demote`,
  description: `Demote a person from admin`,
  ƈʏɮօʀɢʍօʀɛ: `Use this module to demote a person from admin by entering the person's mobile number. Valid Syntaxes -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nFor example -\n*${UltronSitreper.ULTRONIX}demote 9861212121*`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      if (!Últrðñ.isGroup) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `This command is only applicable for group chats.`,
          MessageType.text
        );
        return;
      }
      if (!Últrðñ.isBotGroupAdmin) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Sorry, dont have the permission to do so since I am not an admin.`,
          MessageType.text
        );
        return;
      }
      if (!Últrðñ.isReply && typeof arguments[0] == `undefined`) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Reply/tag/enter contact number of the person to be demoted.`,
          MessageType.text
        );
        return;
      }

      const reply = chat.message.extendedTextMessage;
      if (Últrðñ.isReply) {
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = async (arguments, ӄʀǟӄɨռʐ, Últrðñ) => {
          var JoinIDNum = ``;
          var countryCode = UltronSitreper.COUNTRY_CODE;
          if (isNaN(arguments[0]) || arguments[0][0] === `+`) {
            if (arguments[0][0] === `@` || arguments[0][0] === `+`) {
              JoinIDNum = arguments[0].substring(1, arguments[0].length + 1);
            } else {
              ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
                MessageType.text
              );
              return;
            }
          } else {
            JoinIDNum = arguments[0];
          }

          if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
              MessageType.text
            );
            return;
          } else if (JoinIDNum.length === 10) {
            JoinIDNum = countryCode + JoinIDNum;
          }
          var isOnWhatsApp = await ӄʀǟӄɨռʐ.isOnWhatsApp(JoinIDNum);
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
      var owner = Últrðñ.chatId.split(`-`)[0];
      for (const index in Últrðñ.groupMembers) {
        if (contact == Últrðñ.groupMembers[index].jid.split(`@`)[0]) {
          if (Últrðñ.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }

      if (contact === owner) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `*` + contact + ` is the owner of the group*`,
          MessageType.text
        );
        return;
      }

      if (isMember) {
        if (admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          ӄʀǟӄɨռʐ.groupDemoteAdmin(Últrðñ.chatId, arr);
          ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `*` + contact + ` is demoted from admin*`,
            MessageType.text
          );
          return;
        } else {
          ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `*` + contact + ` was not an admin*`,
            MessageType.text
          );
          return;
        }
      }
      if (!isMember) {
        if (contact === undefined) {
          return;
        }

        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Person not found.`,
          MessageType.text
        );
        return;
      }
      return;
    } catch (cᴇʀʀᴏʀ) {
      if (cᴇʀʀᴏʀ === `NumberInvalid`) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
${arguments[0]} INVALID!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
          MessageType.text
        );
      } else {
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================