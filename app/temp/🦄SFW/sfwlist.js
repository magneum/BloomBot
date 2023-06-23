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


┌『 *🦄${currFile.toUpperCase()}🦄* 』
│║⦁ ${BloomBot.prefix}waifu
│║⦁ ${BloomBot.prefix}swaifu
│║⦁ ${BloomBot.prefix}whats
│║⦁ ${BloomBot.prefix}swhats
│║⦁ ${BloomBot.prefix}shinobu
│║⦁ ${BloomBot.prefix}sshinobu
│║⦁ ${BloomBot.prefix}megumin
│║⦁ ${BloomBot.prefix}smegumin
│║⦁ ${BloomBot.prefix}awoo
│║⦁ ${BloomBot.prefix}sawoo
│║⦁ ${BloomBot.prefix}glomp
│║⦁ ${BloomBot.prefix}sglomp
│║⦁ ${BloomBot.prefix}handhold
│║⦁ ${BloomBot.prefix}shandhold
│║⦁
│║⦁ ${BloomBot.prefix}sbully
│║⦁ ${BloomBot.prefix}scuddle
│║⦁ ${BloomBot.prefix}scry
│║⦁ ${BloomBot.prefix}shug
│║⦁ ${BloomBot.prefix}skiss
│║⦁ ${BloomBot.prefix}slick
│║⦁ ${BloomBot.prefix}spat
│║⦁ ${BloomBot.prefix}ssmug
│║⦁ ${BloomBot.prefix}sbonk
│║⦁ ${BloomBot.prefix}syeet
│║⦁ ${BloomBot.prefix}sblush
│║⦁ ${BloomBot.prefix}ssmile
│║⦁ ${BloomBot.prefix}swave
│║⦁ ${BloomBot.prefix}shighfive
│║⦁ ${BloomBot.prefix}snom
│║⦁ ${BloomBot.prefix}sbite
│║⦁ ${BloomBot.prefix}sslap
│║⦁ ${BloomBot.prefix}skill
│║⦁ ${BloomBot.prefix}skick
│║⦁ ${BloomBot.prefix}shappy
│║⦁ ${BloomBot.prefix}swink
│║⦁ ${BloomBot.prefix}spoke
│║⦁ ${BloomBot.prefix}sdance
│║⦁ ${BloomBot.prefix}scringe
┕╚═══════⋑`,
    BloomBot.display,
  );
};
