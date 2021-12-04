const Heroku = require("heroku-client");
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
var heroku = new Heroku({ token: UltronSitreper.HEROKU_API });

module.exports = {
  name: `update`,
  commandType: "Information📜",
  description: `This module can be used to check if the bot is currently online or not.`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    await υℓтяσηℓιєηт
      .sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          url: `https://i.postimg.cc/LXXS56kT/reboot.png`,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: `
❗𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍❗
ʏᴏᴜʀ ᴜʟᴛʀᴏɴ ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ...
ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐔𝐋𝐓𝐑𝐎𝐍™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    heroku
      .delete("/apps/" + UltronSitreper.HEROKU_BOT_NAME + "/dynos/" + "worker")
      .then((x) => console.log(x));
  },
};
