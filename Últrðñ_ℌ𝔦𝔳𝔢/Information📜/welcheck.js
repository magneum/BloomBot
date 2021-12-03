// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType
} = require(`@adiwajshing/baileys`);
const Greetings = require(`../../Últrðñ/wlcmr`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `welcheck`,
  description: `...`,
  ƈʏɮօʀɢʍօʀɛ: `....`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      if (!Últrðñ.isGroup) {
        ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `This command is only applicable in a group chat.`, MessageType.text)
        return;
      }
      var Msg = await Greetings.getMessage(Últrðñ.chatId, `welcome`);
      if (arguments.length == 0) {
        var enabled = await Greetings.checkSettings(Últrðñ.chatId, `welcome`);
        try {
          if (enabled === false || enabled === undefined) {
            ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Set a welcome message first.`, MessageType.text)
            return;
          } else if (enabled === `OFF`) {
            ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Greetings are enabled: False \nCurrently greeting new members with:`, MessageType.text)
            ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, Msg.message, MessageType.text)
            return;
          }

          ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Greetings are enabled: True \nCurrently greeting new members with:`, MessageType.text)
          ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, Msg.message, MessageType.text)
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        try {
          if (arguments[0] === `OFF` || arguments[0] === `off` || arguments[0] === `Off`) {
            switched = `OFF`;
            await Greetings.changeSettings(Últrðñ.chatId, switched);
            ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Welcome message has been disabled.`, MessageType.text)
            return;
          }
          if (arguments[0] === `ON` || arguments[0] === `on` || arguments[0] === `On`) {
            switched = `ON`;
            await Greetings.changeSettings(Últrðñ.chatId, switched);
            ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Welcome message has been enabled.`, MessageType.text)
            return;
          }
          if (arguments[0] === `delete`) {
            var Msg = await Greetings.deleteMessage(Últrðñ.chatId, `welcome`);
            if (Msg === false || Msg === undefined) {
              ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Set a welcome message first.`, MessageType.text)
              return;
            }

            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Welcome message deleted.`, MessageType.text)
            return;
          }
          text = Últrðñ.body.replace(Últrðñ.body[0] + Últrðñ.commandName + ` `, ``);
          if (Msg === false || Msg === undefined) {
            await Greetings.setWelcome(Últrðñ.chatId, text);
            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Welcome message updated and enabled.`, MessageType.text)
            return;
          } else {
            await Greetings.deleteMessage(Últrðñ.chatId, `welcome`);
            await Greetings.setWelcome(Últrðñ.chatId, text);
            await ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `Welcome message updated and enabled.`, MessageType.text)
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      }
    } catch (cᴇʀʀᴏʀ) {
      ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId,
        `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`, MessageType.text);
      return;
    }
  },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================