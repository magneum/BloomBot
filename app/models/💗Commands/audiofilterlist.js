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


┌『 *📢${currFile.toUpperCase()}📢* 』
│║⦁ ${BloomBot.prefix}panning
│║⦁ ${BloomBot.prefix}bassboost
│║⦁ ${BloomBot.prefix}echo
│║⦁ ${BloomBot.prefix}fast
│║⦁ ${BloomBot.prefix}flanger
│║⦁ ${BloomBot.prefix}nightcore
│║⦁ ${BloomBot.prefix}phaser
│║⦁ ${BloomBot.prefix}reverse
│║⦁ ${BloomBot.prefix}slow
│║⦁ ${BloomBot.prefix}speed
│║⦁ ${BloomBot.prefix}subboost
│║⦁ ${BloomBot.prefix}superslow
│║⦁ ${BloomBot.prefix}superspeed
│║⦁ ${BloomBot.prefix}surround
│║⦁ ${BloomBot.prefix}vaporwave
│║⦁ ${BloomBot.prefix}vibrato
┕╚═══════⋑`,
    BloomBot.display,
  );
};
