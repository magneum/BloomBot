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
    const Reds = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"];
    const Rads = Reds[Math.floor(Math.random() * Reds.length)];
    const res = await BloomBot.fetch(
      `https://www.reddit.com/r/${Rads}/random/.json`,
    );
    const json = await res.json();
    const data = json[0].data.children[0].data;
    await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
> *🥪Title:* ${data.title}
> *✒️Author:* ${data.author}
> *👍🏽‍Ups:* ${data.ups || 0} 👍
> *👎🏽‍Downs:* ${data.downs || 0} 👎
> *💬Comments:* ${data.num_comments || 0} 💬`,
      data.url,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
