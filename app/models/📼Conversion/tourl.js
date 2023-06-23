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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image/Video in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video_`
      );
    }

    switch (true) {
      case /image/.test(BloomBot.mime):
        media = await BloomBot.quoted.download();
        upload = await BloomBot.TelegraPh(media);
        console.log(media, upload);
        await BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🎊Link: * _${BloomBot.util.format(upload)}_`,
          BloomBot.display
        );
        break;

      case /video/.test(BloomBot.mime):
        media = await BloomBot.quoted.download();
        upload = await BloomBot.TelegraPh(media);
        await BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🎊Link: * _${BloomBot.util.format(upload)}_`,
          BloomBot.display
        );
        break;

      default:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image/Video in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
