const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
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
  description: `jokes`,
  ƈʏɮօʀɢʍօʀɛ: `jokes`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      const dadJoke = await getDadjoke();
      console.log(dadJoke);
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_*☢️Últrðñ*\n` + dadJoke,
        MessageType.text
      );
    } catch (err) {
      console.log(err);
    }
  },
};