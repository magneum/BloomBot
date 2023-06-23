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
  participants
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
• _Could not find any Image/Video in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video_`
      );
    }

    if (/image/.test(BloomBot.mime)) {
      const media = await BloomBot.quoted.download();
      const sticker = new BloomBot.Sticker(media, {
        pack: "ⒸBloomBot",
        author: BloomBot.args.join(" ") || "Magneum™",
        type: BloomBot.StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 100,
        background: "transparent",
      });
      const buffer = await sticker.toBuffer();
      return await BloomBot.sendMessage(
        chatkey.chat,
        {
          sticker: buffer,
        },
        { quoted: chatkey }
      );
    } else if (/video/.test(BloomBot.mime)) {
      if ((BloomBot.quoted.msg || BloomBot.quoted).seconds > 20) {
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Cannot convert videos longer than 21 Seconds!_`
        );
      } else {
        const media = await BloomBot.quoted.download();
        const sticker = new BloomBot.Sticker(media, {
          pack: "ⒸBloomBot",
          author: BloomBot.args.join(" ") || "Magneum™",
          type: BloomBot.StickerTypes.FULL,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 100,
          background: "transparent",
        });
        const buffer = await sticker.toBuffer();
        return await BloomBot.sendMessage(
          chatkey.chat,
          {
            sticker: buffer,
          },
          { quoted: chatkey }
        );
      }
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
• _Could not find any Image/Video in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image/Video_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = ["imgsticker", "vidsticker"];
