const { MessageType } = require("@adiwajshing/baileys");
const got = require("got");

module.exports = {
  name: "paste",
  description: `DESCRIPTION`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    if (arg.length === 0 && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      await ӄʀǟӄɨռʐ.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `ENTER_TEXT`, MessageType.text);
      return;
    }
    const processing = await ӄʀǟӄɨռʐ.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `PROCESSING`,
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
    ӄʀǟӄɨռʐ.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, neko_url, MessageType.text);
    return await ӄʀǟӄɨռʐ.deleteMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, {
      id: processing.key.id,
      remoteJid: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      fromMe: true,
    });
  },
};
