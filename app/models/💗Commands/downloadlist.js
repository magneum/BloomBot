require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  await BloomBot.imagebutton(
    BloomBot,
    Sockey,
    `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🤖Hello, I am BloomBot User-bot🤖*
• ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *📥${currFile.toUpperCase()}📥* 』
│║• ${BloomBot.prefix}yta
│║• ${BloomBot.prefix}play
│║• ${BloomBot.prefix}song
│║• ${BloomBot.prefix}sing
│║• ${BloomBot.prefix}ytmp3
│║• ${BloomBot.prefix}music
│║• ${BloomBot.prefix}ytplay
│║• ${BloomBot.prefix}ytaudio
│║• ${BloomBot.prefix}ytmusic
│║• ${BloomBot.prefix}youtubemusic
│║> 
│║• ${BloomBot.prefix}ytv
│║• ${BloomBot.prefix}watch
│║• ${BloomBot.prefix}stream
│║• ${BloomBot.prefix}ytmp4
│║• ${BloomBot.prefix}video
│║• ${BloomBot.prefix}ytwatch
│║• ${BloomBot.prefix}ytvideo
│║• ${BloomBot.prefix}youtubevideo
┕╚═══════⋑`,
    "./public/BloomBot/BloomBot (8).png"
  );
};
