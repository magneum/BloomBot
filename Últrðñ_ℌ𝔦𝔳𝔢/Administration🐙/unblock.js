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
  name: `unblock`,
  description: `Unblock contact`,
  ƈʏɮօʀɢʍօʀɛ: `
Remove number from the blocklist.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      if (!Últrðñ.isReply && typeof arguments[0] == `undefined`) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Tag a message or enter a number.`,
          MessageType.text
        );
        return;
      }
      const reply = chat.message.extendedTextMessage;
      var contact = ``;
      if (!arguments.length > 0) {
        contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        contact = async (arguments, ӄʀǟӄɨռʐ, Últrðñ) => {
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

      if (contact === Últrðñ.owner.split(`@`)[0]) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Bot can not unblock itself`,
          MessageType.text
        );
        return;
      }

      if (contact === ``) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Tag a message or enter a number.`,
          MessageType.text
        );
        return;
      }
      var JID = contact + `@s.whatsapp.net`;
      ӄʀǟӄɨռʐ.blockUser(JID, `remove`);
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `*` + contact + ` unblocked successfully.*`,
        MessageType.text
      );
    } catch (cᴇʀʀᴏʀ) {
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================