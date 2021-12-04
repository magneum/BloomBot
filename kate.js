const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
module.exports = {
  name: `ultron`,
  description: `test ultron`,
  υℓтяσηʍօʀɛ: `test ultron`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, args) {
    await υℓтяσηℓιєηт.sendMessage(
      ᴜʟᴛʀᴏɴ.chatId,
      { url: "https://i.postimg.cc/G2SZsJ7Z/image.gif" },
      MessageType.video,
      { mimetype: Mimetype.gif, caption: `Test GIF Command` }
    );
  },
};
