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
    const response = await BloomBot.axios.get(
      "https://api.adviceslip.com/advice",
    );
    await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
      
> ${response.data.slip.advice}`,
      BloomBot.display,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
