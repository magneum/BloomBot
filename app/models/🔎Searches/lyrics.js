require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const lyricsFinder = require("lyrics-finder");
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
    const query = BloomBot.args.join(" ");
    if (!query) {
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

    const response = await BloomBot.magfetch(
      BloomBot,
      "https://magneum.vercel.app/api/youtube_sr?q=" + query,
    );
    const mgdata = response.data;
    

    const artist = "";
    const title = query;
    const lyrics = await lyricsFinder(artist, title);
    if (lyrics) {
      const metadeta = `*🌻Hola!* ${currFile} for ${
        BloomBot.pushname || BloomBot.tagname
      }

*📜Lyrics For:* ${mgdata.youtube_search[0].TITLE}
*🙈Views:* ${mgdata.youtube_search[0].VIEWS}
*🔗Link:* ${mgdata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mgdata.youtube_search[0].DURATION_FULL}`;

      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `${metadeta}

${lyrics}`,
        mgdata.youtube_search[0].HQ_IMAGE,
      );
    } else {
      return await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
