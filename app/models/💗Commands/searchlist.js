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
  participants
) => {
  await BloomBot.imagebutton(
    BloomBot,
    chatkey,
    `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🤖Hello, I am BloomBot User-bot🤖*
• ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *🔎${currFile.toUpperCase()}🔎* 』
│║• ${BloomBot.prefix}advice
│║• ${BloomBot.prefix}anime
│║• ${BloomBot.prefix}chordlist
│║• ${BloomBot.prefix}fact
│║• ${BloomBot.prefix}getchord
│║• ${BloomBot.prefix}gify
│║• ${BloomBot.prefix}google
│║• ${BloomBot.prefix}instagram
│║• ${BloomBot.prefix}joke
│║• ${BloomBot.prefix}lyrics
│║• ${BloomBot.prefix}manga
│║• ${BloomBot.prefix}meme
│║• ${BloomBot.prefix}pokedex
│║• ${BloomBot.prefix}quote
│║• ${BloomBot.prefix}reddit
│║• ${BloomBot.prefix}ytsearch
┕╚═══════⋑`,
    BloomBot.display
  );
};
