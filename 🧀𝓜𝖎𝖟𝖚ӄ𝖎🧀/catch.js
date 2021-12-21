`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
require(`python-format-js`);
const fs = require(`fs`);
`🐙============================================================================================================================<⚡>`;
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/MizukiError.png`);
  const media = await ӄʀǟӄɨռʐ.prepareMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    content,
    MessageType.image,
    {
      mimetype: Mimetype.png,
    }
  );
  await ӄʀǟӄɨռʐ
    .sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      {
        contentText: `*🐙Please try Again Later!*
There Was temporary erorr in that command.`,
        footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
          {
            buttonId: `${ᴋᴇɪ}report`,
            buttonText: { displayText: `${ᴋᴇɪ}report` },
            type: 1,
          },
        ],
        headerType: 4,
        imageMessage: media.message.imageMessage,
      },
      MessageType.buttonsMessage,
      {
        contextInfo: {
          mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
        },
      }
    )
    .then(console.log(ℓαвєяяσя));
};
`🐙============================================================================================================================<⚡>`;
