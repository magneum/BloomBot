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
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/anime?q=${BloomBot.args.join(" ")}`,
    ).then(async (response) => {
      const mgdata = response.data;

      BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `🌻 *Here's some information about ${
          BloomBot.pushname || BloomBot.tagname
        }:*

*🔍Mal Id:* ${mgdata.meta.id_mal}
*🎬Title:* ${mgdata.meta.title}
*🌐English Title:* ${mgdata.meta.en_title}
*🎌Japanese Title:* ${mgdata.meta.jp_title}
*📷Image:* ${mgdata.meta.image}
*📅Premiered:* ${mgdata.meta.premiered}
*🌐Webpage:* ${mgdata.meta.webpage}
*📺Broadcast:* ${mgdata.meta.broadcast}
*🎭Genres:* ${mgdata.meta.genres}
*🔖Type:* ${mgdata.meta.type}
*📺Episodes:* ${mgdata.meta.episodes}
*⭐Rating:* ${mgdata.meta.rating}
*📅Aired:* ${mgdata.meta.aired}
*📈Score:* ${mgdata.meta.score}
*❤️Favorites:* ${mgdata.meta.favorites}
*🔢Rank:* ${mgdata.meta.rank}
*⏳Duration:* ${mgdata.meta.duration}
*🏢Studios:* ${mgdata.meta.studios}
*🎬Producers:* ${mgdata.meta.producers}
*🔥Popularity:* ${mgdata.meta.popularity}
*👥Total Members:* ${mgdata.meta.members}
*⚖️Score Status:* ${mgdata.meta.scores}
*🎬Source:* ${mgdata.meta.source}
*📚Synonyms:* ${mgdata.meta.synonyms}
*📖Synopsis:* ${mgdata.meta.synopsis}
*👥Characters:* ${mgdata.meta.characters}
*👥Staff:* ${mgdata.meta.staffs}`,
        mgdata.meta.image,
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
