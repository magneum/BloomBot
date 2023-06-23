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
  try {
    await BloomBot.sendMessage(Sockey.chat, {
      react: {
        text: "🌻",
        key: Sockey.key,
      },
    });
    await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      `*🌻Here, ${currFile} for @${BloomBot.tagname || BloomBot.pushname}:*
*🤖Hello, I am BloomBot User-bot🤖*
• ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!

*🏮Rules:*
> Do not abuse/disrespect bot and its owner.
> If you want this bot in your group then contact devs.
> Do not call bot, if you do then you'll get blocked by bot.
> If you see any bug/error in bot then report it to devs in the above group chats.
> Do not spam bot with commands, if bot is not responding then it means either bot is offline or there's internet issue at server end.`,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
