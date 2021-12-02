const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
module.exports = {
  name: `pfp`,
  description: `Get display picture`,
  ƈʏɮօʀɢʍօʀɛ: `Get the profile picture of the group in a group conversation or the profile picture of Últrðñ itself in personal chat.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    const processing = await ӄʀǟӄɨռʐ.sendMessage(
      Últrðñ.chatId,
      `Getting display picture...`,
      MessageType.text
    );
    try {
      let url = await ӄʀǟӄɨռʐ.getProfilePicture(Últrðñ.chatId);
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        { url: url },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: `Here is the display image. Procured by Últrðñ.`,
          thumbnail: null,
        }
      );
    } catch (cᴇʀʀᴏʀ) {
      if (cᴇʀʀᴏʀ.status == 404) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
DP NOT FOUND!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
          MessageType.text
        );
      } else {
        ӄʀǟӄɨռʐ.sendMessage(
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