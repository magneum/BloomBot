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
⦁ _${BloomBot.prefix}${currFile} gif-name_`,
      );
    }

    try {
      const { data: gi } = await BloomBot.axios.get(
        `g.tenor.com/v1/search?q=${BloomBot.args.join(
          " ",
        )}&key=LIVDSRZULELA&limit=8`,
      );
      return await BloomBot.sendMessage(
        chatkey.chat,
        {
          gifPlayback: true,
          video: {
            url: gi.results?.[Math.floor(Math.random() * gi.results.length)]
              ?.media[0]?.mp4?.url,
          },
          caption: `*🌻Hola!* ${currFile} for ${
            BloomBot.pushname || BloomBot.tagname
          } 
          
*🎋Feeling:* ${currFile}
*🌻for:* @${chatkey.sender.split("@")[0] || ""}`,
          mentions: [chatkey.sender],
        },
        { quoted: chatkey },
      );
    } catch (Èrrðr) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No such gif found!_`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
