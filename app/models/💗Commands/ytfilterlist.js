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


┌『 *⭕${currFile.toUpperCase()}⭕* 』
│║⦁ ${BloomBot.prefix}ytpanning
│║⦁ ${BloomBot.prefix}ytbassboost
│║⦁ ${BloomBot.prefix}ytecho
│║⦁ ${BloomBot.prefix}ytflanger
│║⦁ ${BloomBot.prefix}ytnightcore
│║⦁ ${BloomBot.prefix}ytphaser
│║⦁ ${BloomBot.prefix}ytreverse
│║⦁ ${BloomBot.prefix}ytslow
│║⦁ ${BloomBot.prefix}ytspeed
│║⦁ ${BloomBot.prefix}ytsubboost
│║⦁ ${BloomBot.prefix}ytsuperslow
│║⦁ ${BloomBot.prefix}ytsuperspeed
│║⦁ ${BloomBot.prefix}ytsurround
│║⦁ ${BloomBot.prefix}ytvaporwave
│║⦁ ${BloomBot.prefix}ytvibrato
┕╚═══════⋑`,
    BloomBot.display,
  );
};
