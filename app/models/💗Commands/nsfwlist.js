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
• ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *👅${currFile.toUpperCase()}👅* 』
│║• ${BloomBot.prefix}nsfw
│║• ${BloomBot.prefix}nsfw2
│║• ${BloomBot.prefix}bonermaterial
│║• ${BloomBot.prefix}nsfw411
│║• ${BloomBot.prefix}iwanttofuckher
│║• ${BloomBot.prefix}exxxtras
│║• ${BloomBot.prefix}distension
│║• ${BloomBot.prefix}bimbofetish
│║• ${BloomBot.prefix}christiangirls
│║• ${BloomBot.prefix}dirtygaming
│║• ${BloomBot.prefix}sexybutnotporn
│║• ${BloomBot.prefix}femalepov
│║• ${BloomBot.prefix}omgbeckylookathiscock
│║• ${BloomBot.prefix}sexygirls
│║• ${BloomBot.prefix}breedingmaterial
│║• ${BloomBot.prefix}canthold
│║• ${BloomBot.prefix}toocuteforporn
│║• ${BloomBot.prefix}justhotwomen
│║• ${BloomBot.prefix}stripgirls
│║• ${BloomBot.prefix}hotstuffnsfw
│║• ${BloomBot.prefix}uncommonposes
│║• ${BloomBot.prefix}gifsofremoval
│║• ${BloomBot.prefix}nostalgiafapping
│║• ${BloomBot.prefix}truefmk
│║• ${BloomBot.prefix}nudes
│║• ${BloomBot.prefix}4k
│║• ${BloomBot.prefix}realgirls
│║• ${BloomBot.prefix}blowjobs
│║• ${BloomBot.prefix}milf
│║• ${BloomBot.prefix}milk
│║• ${BloomBot.prefix}milking
│║• ${BloomBot.prefix}lactating
│║• ${BloomBot.prefix}pussy
│║• ${BloomBot.prefix}cum
│║• ${BloomBot.prefix}slut
│║• ${BloomBot.prefix}cumslut
┕╚═══════⋑`,
    BloomBot.display,
  );
};
