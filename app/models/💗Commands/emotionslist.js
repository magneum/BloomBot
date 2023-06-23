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


┌『 *🐉${currFile.toUpperCase()}🐉* 』
│║• ${BloomBot.prefix}bite
│║• ${BloomBot.prefix}blush
│║• ${BloomBot.prefix}bonk
│║• ${BloomBot.prefix}bored
│║• ${BloomBot.prefix}confused
│║• ${BloomBot.prefix}cry
│║• ${BloomBot.prefix}cuddle
│║• ${BloomBot.prefix}dance
│║• ${BloomBot.prefix}goodnight
│║• ${BloomBot.prefix}happy
│║• ${BloomBot.prefix}highfive
│║• ${BloomBot.prefix}hug
│║• ${BloomBot.prefix}kill
│║• ${BloomBot.prefix}kiss
│║• ${BloomBot.prefix}nervous
│║• ${BloomBot.prefix}pat
│║• ${BloomBot.prefix}poke
│║• ${BloomBot.prefix}punch
│║• ${BloomBot.prefix}sad
│║• ${BloomBot.prefix}scream
│║• ${BloomBot.prefix}slap
│║• ${BloomBot.prefix}smile
│║• ${BloomBot.prefix}stare
│║• ${BloomBot.prefix}wave
│║• ${BloomBot.prefix}wink
│║• ${BloomBot.prefix}yeet
│║• ${BloomBot.prefix}yes
┕╚═══════⋑`,
    "./public/BloomBot/BloomBot (8).png"
  );
};
