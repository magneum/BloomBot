const Heroku = require("heroku-client");
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
var heroku = new Heroku({ token: UltronSitreper.HEROKU_API });

module.exports = {
  name: `update`,
  commandType: "Information📜",
  description: `This module can be used to check if the bot is currently online or not.`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    await υℓтяσηℓιєηт
      .sendMessage(ᴜʟᴛʀᴏɴ.chatId, ``, MessageType.text)
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    heroku
      .delete("/apps/" + UltronSitreper.HEROKU_BOT_NAME + "/dynos/" + "worker")
      .then((x) => console.log(x));
  },
};
