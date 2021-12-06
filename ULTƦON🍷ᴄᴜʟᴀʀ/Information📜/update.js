const Heroku = require("heroku-client");
const ℓιєηт = require("../../ULTƦON/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
var heroku = new Heroku({ token: ꜱɪɢɴ.HEROKU_API });

module.exports = {
  name: `update`,
  commandType: "Information📜",
  description: `This command can be used to update the bot`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    if (!ULTƦON.fromMe) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/T27psvhB/error.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `⚠️hahaha Nice Try!
Only My Owner Can use that command!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } else {
      await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/T3m1hyQX/update.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
❗𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍❗
ʏᴏᴜʀ ULTƦON ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ...
ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐔𝐋𝐓𝐑𝐎𝐍™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      heroku
        .delete(
          "/apps/" + ꜱɪɢɴ.HEROKU_BOT_NAME + "/dynos/" + "worker"
        )
        .then((x) => console.log(x));
    }
  },
};
