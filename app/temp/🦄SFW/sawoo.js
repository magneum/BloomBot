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
    BloomBot.fetch(`https://magneum.vercel.app/api/sfw?q=${currFile.slice(1)}`)
      .then((res) => res.json())
      .then(async (json) => {
        if (json.meta.url) {
          console.log(json.meta.url)
          await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}

*📚Topic:* ${currFile.slice(1)}`,
            BloomBot.display,
          );
        }
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
