require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  await BloomBot.imagebutton(
    BloomBot,
    chatkey,
    `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🤖Hello, I am BloomBot User-bot🤖*
> ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *🍑${currFile.toUpperCase()}🍑* 』
│║> ${BloomBot.prefix}ass
│║> ${BloomBot.prefix}bdsm
│║> ${BloomBot.prefix}blowjob
│║> ${BloomBot.prefix}cum
│║> ${BloomBot.prefix}doujin
│║> ${BloomBot.prefix}feet
│║> ${BloomBot.prefix}femdom  
│║> ${BloomBot.prefix}whatsgirl  
│║> ${BloomBot.prefix}glasses  
│║> ${BloomBot.prefix}hentai
│║> ${BloomBot.prefix}maid
│║> ${BloomBot.prefix}masturbation
│║> ${BloomBot.prefix}netorare
│║> ${BloomBot.prefix}orgy
│║> ${BloomBot.prefix}panties
│║> ${BloomBot.prefix}pussy
│║> ${BloomBot.prefix}school
│║> ${BloomBot.prefix}succubus
│║> ${BloomBot.prefix}tentacles
│║> ${BloomBot.prefix}thighs
│║> ${BloomBot.prefix}uglyBastard
│║> ${BloomBot.prefix}uniform
│║> ${BloomBot.prefix}yuri
│║> ${BloomBot.prefix}zettaiRyouiki
┕╚═══════⋑`,
    BloomBot.display,
  );
};
