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
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    const manga = new BloomBot.Manga();
    const response = await manga.searchManga(BloomBot.args.join(" "));
    const Found = `*🎀Title:* ${response.data[0].title}`;
    Found += `*📈Status:* ${response.data[0].status}`;
    Found += `*🌸Total Volumes:* ${response.data[0].volumes}`;
    Found += `*🎗Total Chapters:* ${response.data[0].chapters}`;
    Found += `*🧧Genres:*`;
    for (const i = 0; i < response.data[0].genres.length; i++) {
      Found += `\t\t\t\t\t\t\t\t*${response.data[0].genres[i].name}*`;
    }
    Found += `*✨Published on:* ${response.data[0].published.from}`;
    Found += `*🌟Score:* ${response.data[0].scored}`;
    Found += `*🎐Popularity:* ${response.data[0].popularity}`;
    Found += `*🎏Favorites:* ${response.data[0].favorites}`;
    Found += `*✍Authors:*`;
    for (const i = 0; i < response.data[0].authors.length; i++) {
      Found += `\t\t\t\t\t\t\t\t\t*${response.data[0].authors[i].name}* *(${response.data[0].authors[0].type})*`;
    }
    Found += `*🌐URL:* ${response.data[0].url}`;
    if (response.data[0].background !== null)
      Found += `*🎆Background:* ${response.data[0].background}`;
    Found += `*❄️Description:* ${response.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ``,
    )}`;
    await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
> ${Found}`,
      response.data[0].images.png.large_image_url,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
