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
    if (!BloomBot.args) {
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
⦁ _${BloomBot.prefix}${currFile} image-name_`,
      );
    }

    await BloomBot.magfetch(
      BloomBot,
      "https://magneum.vercel.app/api/unsplash?q=" + BloomBot.args.join(" "),
    ).then(async (response) => {
      const mgdata = response.data;
      
      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📚Topic:* ${mgdata.meta.topic}
*❓Query*: ${mgdata.meta.query}
*Width*: ${mgdata.meta.width}
*Height*: ${mgdata.meta.height}
*Color*: ${mgdata.meta.color}
*Description*: ${mgdata.meta.description || null}
*Alt-Desc*: ${mgdata.meta.alt_description || null}`,
        mgdata.meta.images[0]._raw,
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
