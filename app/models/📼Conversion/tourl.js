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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Could not find any Image/Video in context!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} reply to Image/Video_`,
      );
    }

    if (/image/.test(BloomBot.mime)) {
      media = await BloomBot.quoted.download();
      upload = await BloomBot.TelegraPh(media);
      console.log(media, upload);
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🎊Link: * _${BloomBot.util.format(upload)}_`,
        BloomBot.display,
      );
    } else if (/video/.test(BloomBot.mime)) {
      media = await BloomBot.quoted.download();
      upload = await BloomBot.TelegraPh(media);
      await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🎊Link: * _${BloomBot.util.format(upload)}_`,
        BloomBot.display,
      );
    } else {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Could not find any Image/Video in context!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} reply to Image/Video_`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
