const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const got = require(`got`);
module.exports = {
  name: `nekobin`,
  commandType: "Fun⚡",
  description: `Use this command to paste your text to a pastebin (NEKOBIN).
Enter text with the command  *${ꜱɪɢɴ.Mee6IX}neko* .`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (Arc.length === 0 && !ᴍᴇᴇ6.isReply) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give text!*

*Usage Example*
${ꜱɪɢɴ.Mee6IX}neko <text>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    if (!ᴍᴇᴇ6.isReply) {
      var json = {
        content: ᴍᴇᴇ6.body.replace(ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `, ``),
      };
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Pasting text to nekobin. Please wait...`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } else {
      var json = {
        content: ᴍᴇᴇ6.replyMessage.replace(
          ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `,
          ``
        ),
      };
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Pasting text to nekobin. Please wait...`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    let text = await got.post(`https://nekobin.com/api/documents`, {
      json,
    });
    json = JSON.parse(text.body);
    neko_url = `https://nekobin.com/` + json.result.key;
    υℓтяσηℓιєηт
      .sendMessage(ᴍᴇᴇ6.chatId, neko_url, MessageType.text)
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================