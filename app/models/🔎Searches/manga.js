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
    switch (!BloomBot.args.join(" ")) {
      case true: {
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _No query provided!_\n\n*🌻Usage:*\n• _${
            BloomBot.prefix
          }${currFile} manga-name_`
        );
      }
      default: {
        const manga = new BloomBot.Manga();
        const response = await manga.searchManga(BloomBot.args.join(" "));
        let Found = `*🎀Title:* ${response.data[0].title}`;
        Found += `*📈Status:* ${response.data[0].status}`;
        Found += `*🌸Total Volumes:* ${response.data[0].volumes}`;
        Found += `*🎗Total Chapters:* ${response.data[0].chapters}`;
        Found += `*🧧Genres:*`;
        for (let i = 0; i < response.data[0].genres.length; i++) {
          Found += `\t\t\t\t\t\t\t\t*${response.data[0].genres[i].name}*`;
        }
        Found += `*✨Published on:* ${response.data[0].published.from}`;
        Found += `*🌟Score:* ${response.data[0].scored}`;
        Found += `*🎐Popularity:* ${response.data[0].popularity}`;
        Found += `*🎏Favorites:* ${response.data[0].favorites}`;
        Found += `*✍Authors:*`;
        for (let i = 0; i < response.data[0].authors.length; i++) {
          Found += `\t\t\t\t\t\t\t\t\t*${response.data[0].authors[i].name}* *(${response.data[0].authors[0].type})*`;
        }
        Found += `*🌐URL:* ${response.data[0].url}`;
        if (response.data[0].background !== null)
          Found += `*🎆Background:* ${response.data[0].background}`;
        Found += `*❄️Description:* ${response.data[0].synopsis.replace(
          /\[Written by MAL Rewrite]/g,
          ``
        )}`;
        await BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `*🌻Hola!* ${currFile} for ${
            BloomBot.pushname || BloomBot.tagname
          }\n• ${Found}`,
          response.data[0].images.png.large_image_url
        );
      }
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
