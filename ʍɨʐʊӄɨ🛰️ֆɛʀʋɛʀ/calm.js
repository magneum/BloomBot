const { MessageType } = require(`@adiwajshing/baileys`);
const Coolist = require(`./Coolist`);
const duration = 1 * 60 * 1000;

exports.calm = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var Cool = await Coolist.getCoolistUser(𝓜𝖎𝖟𝖚ӄ𝖎.sender, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
  if (Cool === true && !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) return;
  setTimeout(async (error) => {
    if (error) console.log(error);
    await Coolist.removeCoolistUser(𝓜𝖎𝖟𝖚ӄ𝖎.sender, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
  }, duration);
};
