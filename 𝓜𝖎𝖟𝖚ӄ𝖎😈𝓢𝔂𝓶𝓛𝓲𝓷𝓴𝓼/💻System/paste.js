const { MessageType } = require("@adiwajshing/baileys");
const got = require("got");
var lib = require("nekobin");

module.exports = {
  name: "neko",
  description: `REPLY.DESCRIPTION`,
  𝓜𝓮𝓮6ʍօʀɛ: `REPLY.EXTENDED_DESCRIPTION`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var content = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
        𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + " ",
        ""
      );
    } else {
      var content = 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage.replace(
        𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + " ",
        ""
      );
    }
    lib.nekobin(content).then((data) => {
      console.log(data)
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, content, MessageType.text);
    });
    
  },
};
