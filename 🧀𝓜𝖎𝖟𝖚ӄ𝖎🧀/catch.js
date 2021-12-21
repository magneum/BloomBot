`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
require(`python-format-js`);
const fs = require(`fs`);
`🐙============================================================================================================================<⚡>`;
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
  const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  `🐙============================================================================================================================<⚡>`;
  const media = await ӄʀǟӄɨռʐ.prepareMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/MizukiError.png`),
    MessageType.image,
    {
      mimetype: Mimetype.png,
    }
  );
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      contentText: `${ꜱᴇɴᴅᴇʀeceived} 
*🐙Please try Again Later!*
There Was temporary erorr in *${ᴋᴇɪ}${FinalName} command.* 

📂𝗟𝗼𝗴:
${ℓαвєяяσя}`,
      footerText: `*🍁𝓜𝖎𝖟𝖚ӄ𝖎™*`,
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
  );
};
`🐙============================================================================================================================<⚡>`;
