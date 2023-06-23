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
  try {
    switch (true) {
      case !BloomBot.args.join(" "):
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} manga-name_`
        );

      default:
        const Googled = await BloomBot.google({
          query: BloomBot.args.join(" "),
        });
        let Gxt = `*🔎Searched:* ${BloomBot.args.join(" ")}`;
        for (const gL of Googled) {
          Gxt += `*📒Title* : ${gL.title}`;
          Gxt += `*🍃Description* : ${gL.snippet}`;
          Gxt += `*🌐Link* : ${gL.link}\n\n`;
        }
        await BloomBot.imagebutton(
          BloomBot,
          chatkey,
          `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
• ${Gxt}`,
          BloomBot.display
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
