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
    if (!BloomBot.args[0] && isNaN(BloomBot.args[0])) {
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
> _${BloomBot.prefix}${currFile} Id_
> _get the Id from ${BloomBot.prefix}${currFile}chordlist command!_`,
      );
    }

    const data = await BloomBot.axios.get(
      "http://app.chordindonesia.com/?json=get_post&id=" + BloomBot.args[0],
    );
    const clean = (data) => {
      const regex = /(<([^>]+)>)/gi;
      data = data.replace(/(<br?\s?\/>)/gi, " \n");
      return data.replace(regex, "");
    };
    const result = data.data;
    chordFound = "*• Chord Music Found*\n";
    chordFound += `*- Title:* ${result.post.title.replace(
      /[0-9]|[#&;]/gi,
      "",
    )}\n\n`;
    chordFound += clean(result.post.content);
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
• ${chordFound}`,
        bsoni.url_image,
      );
    } catch {
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
• ${chordFound}`,
        BloomBot.display,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
