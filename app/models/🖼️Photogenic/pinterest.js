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
  participants,
) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    await BloomBot.magfetch(
      BloomBot,
      "https://magneum.vercel.app/api/pinterest?q=" + BloomBot.args.join(" "),
    ).then(async (response) => {
      const mgdata = response.data;
      

      const download =
        mgdata.meta.links[Math.floor(Math.random() * mgdata.meta.links.length)];
      return await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📚Topic:* ${mgdata.meta.topic}
*❓Query*: ${mgdata.meta.query}`,
        download,
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
