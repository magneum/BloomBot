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
  name: `add`,
  description: `Module to add a person to a group.`,
  ƈʏɮօʀɢʍօʀɛ: `
Add new people to a group by entering their mobile number as per the format mentioned below.
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example -
*${UltronSitreper.ULTRONIX}add 9861212121*`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      if (!Últrðñ.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Command only applicable in a group chat.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      if (!Últrðñ.isBotGroupAdmin) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Sorry, don't have permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      if (!arguments[0]) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Enter the number you want to add.\n\nFor instance,  *${UltronSitreper.ULTRONIX}add <NUMBER>* .`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      let number;
      if (isNaN(arguments[0]) || arguments[0][0] === `+` || arguments[0].length < 10) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Valid formats -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-\n*${UltronSitreper.ULTRONIX}add 9861212121*\n*${UltronSitreper.ULTRONIX}add 919861212121*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      if (arguments[0].length == 10 && !isNaN(arguments[0])) {
        number = `91` + arguments[0];
      } else {
        number = arguments[0];
      }
      const exists = await ӄʀǟӄɨռʐ.isOnWhatsApp(number + `@s.whatsapp.net`);
      if (!exists) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `The number you're trying to add isn't available on WhatsApp.\nPlease verify the number again.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      const request = ӄʀǟӄɨռʐ.groupAdd(Últrðñ.chatId, [
        Últrðñ.owner,
        number + `@s.whatsapp.net`,
      ]);
      const response = await request;

      if (response[number + `@c.us`] == 408) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `The number entered cannot be added back before 24 hours.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      } else if (response[number + `@c.us`] == 409) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `The number entered is already a member of this group.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
        return;
      }
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        ` ` + number + ` added successfully!` + ``,
        MessageType.text
      );
    } catch (cᴇʀʀᴏʀ) {
      if (cᴇʀʀᴏʀ.status == 400) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
VERIFY NUMBER \  NOT IN WHATSAPP!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
              MessageType.text
            )
          );
      }
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

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
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================