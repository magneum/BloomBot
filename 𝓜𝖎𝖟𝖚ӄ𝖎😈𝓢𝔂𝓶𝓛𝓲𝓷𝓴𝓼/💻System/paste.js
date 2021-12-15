const { MessageType } = require("@adiwajshing/baileys");
const got = require("got");

module.exports = {
  name: "neko",
  description: `REPLY.DESCRIPTION`,
  𝓜𝓮𝓮6ʍօʀɛ: `REPLY.EXTENDED_DESCRIPTION`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    if (arg.length === 0 && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `REPLY.ENTER_TEXT`,
        MessageType.text
      );
      return;
    }
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `REPLY.PROCESSING`,
      MessageType.text
    );
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var json = {
        content: 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
          𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + " ",
          ""
        ),
      };
    } else {
      var json = {
        content: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage.replace(
          𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + " ",
          ""
        ),
      };
    }
    let text = await got.post("https://nekobin.com/api/documents", {
      json,
    });
    json = JSON.parse(text.body);
    neko_url = "https://nekobin.com/" + json.result.key;
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, neko_url, MessageType.text);
  },
};
