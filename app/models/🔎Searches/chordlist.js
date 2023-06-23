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
⦁ _No query provided!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} song-name_`,
      );
    }

    const data = await BloomBot.axios.get(
      "http://app.chordindonesia.com/?json=get_search_results&search=" +
        BloomBot.args.join(" "),
    );
    const result = data.data;
    if (result.count < 0) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
⦁ _no chords for this song were found_`,
      );
    }
    no = 1;
    chord = "*•Chord Search Engine*\n\n";
    for (const i of result.posts) {
      chord += `*📚Name:*  ${no++}\n`;
      chord += `*🌻Id:* ${i.id}\n`;
      chord += `*📕Title:* ${i.title.replace(/[0-9]|[#&;]/gi, "")}\n`;
      chord += `*🔔Date:* ${i.date}\n`;
      chord += `*👨‍🎨Author:* ${i.categories[0].title}\n\n`;
    }
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
> ${chord}`,
        bsoni.url_image,
      );
    } catch {
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
> ${chord}`,
        BloomBot.display,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
