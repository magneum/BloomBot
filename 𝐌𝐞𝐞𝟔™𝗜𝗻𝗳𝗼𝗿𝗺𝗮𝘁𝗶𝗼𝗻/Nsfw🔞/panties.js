const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const akaneko = require(`akaneko`);
module.exports = {
  name: `panties`,
  commandType: "Nsfw🔞",
  description: `ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (ᴍᴇᴇ6.isGroup && !ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } else {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: await akaneko.nsfw.panties(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*⚡𝐌𝐞𝐞𝟔™*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
  },
};