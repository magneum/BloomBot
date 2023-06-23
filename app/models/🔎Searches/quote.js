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
  try {
    const кяуяєs = await BloomBot.axios.get("favqs.com/api/qotd");
    try {
      const кяуяєsi = await BloomBot.fetch(
        global.apiGet("wall.alphacoders.com/api2.0", "/get.php", {
          auth: "3e7756c85df54b78f934a284c11abe4e",
          method: "search",
          term: "random",
        }),
      );
      const bson = await кяуяєsi.json();
      const bsoni =
        bson.wallpapers[Math.floor(Math.random() * bson.wallpapers.length)];
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
• ${кяуяєs.data.fact}
> *📝Content:* ${кяуяєs.data.quote.body}
> *✍️Author:* ${кяуяєs.data.quote.author}`,
        bsoni.url_image,
      );
    } catch {
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
• ${кяуяєs.data.fact}
> *📝Content:* ${кяуяєs.data.quote.body}
> *✍️Author:* ${кяуяєs.data.quote.author}`,
        BloomBot.display,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
