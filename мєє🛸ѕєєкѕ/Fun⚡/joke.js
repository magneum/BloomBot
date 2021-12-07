const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require(`../../ᴍᴇᴇ6/catch`);
const {
  getDadjoke,
  getPunchLine,
  getRandomCHNJoke,
  getCategoryCHNJoke,
  matchChuckJoke,
  matchJoke,
  getRandomJoke,
  getRandomTrumpQuote,
  getFact,
} = require(`random-jokes`);
module.exports = {
  name: `joke`,
  commandType: `Fun⚡`,
  description: `Get any random Jokes`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    try {
      const dadJoke = await getDadjoke();
      console.log(ᴍᴇᴇ6.sender);
      var str = ᴍᴇᴇ6.sender;
      var newString = str.substring(0, str.length - 15);
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*` + dadJoke + `*\n@${newString}`,
          MessageType.text, {
            contextInfo: {
              mentionedJid: [ᴍᴇᴇ6.sender]
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } catch (err) {
      console.log(err);
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================