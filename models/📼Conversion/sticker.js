<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    if (!WhatsBot.quoted) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    if (!voxbot.quoted) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to Image/Video_`
      );
    }

    if (/image/.test(WhatsBot.mime)) {
      let media = await WhatsBot.quoted.download();
      let sticker = new WhatsBot.Sticker(media, {
        pack: "magneum",
        author: "by WhatsBot",
        type: WhatsBot.StickerTypes.FULL,
=======
> _${voxbot.prefix}${finalname} reply to Image/Video_`
      );
    }

    if (/image/.test(voxbot.mime)) {
      let media = await voxbot.quoted.download();
      let sticker = new voxbot.Sticker(media, {
        pack: "magneum",
        author: "by voxbot",
        type: voxbot.StickerTypes.FULL,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 100,
        background: "transparent",
      });
      var buffer = await sticker.toBuffer();
<<<<<<< HEAD
      return await WhatsBot.sendMessage(
=======
      return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        voxchat.chat,
        {
          sticker: buffer,
        },
        { quoted: voxchat }
      );
<<<<<<< HEAD
    } else if (/video/.test(WhatsBot.mime)) {
      if ((WhatsBot.quoted.msg || WhatsBot.quoted).seconds > 20) {
        await WhatsBot.sendMessage(voxchat.chat, {
=======
    } else if (/video/.test(voxbot.mime)) {
      if ((voxbot.quoted.msg || voxbot.quoted).seconds > 20) {
        await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          react: {
            text: "❌",
            key: voxchat.key,
          },
        });
        return voxchat.reply(
<<<<<<< HEAD
          `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
          `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Cannot convert videos longer than 21 Seconds!_`
        );
      } else {
<<<<<<< HEAD
        let media = await WhatsBot.quoted.download();
        let sticker = new WhatsBot.Sticker(media, {
          pack: "magneum",
          author: "by WhatsBot",
          type: WhatsBot.StickerTypes.FULL,
=======
        let media = await voxbot.quoted.download();
        let sticker = new voxbot.Sticker(media, {
          pack: "magneum",
          author: "by voxbot",
          type: voxbot.StickerTypes.FULL,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 100,
          background: "transparent",
        });
        var buffer = await sticker.toBuffer();
<<<<<<< HEAD
        return await WhatsBot.sendMessage(
=======
        return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat.chat,
          {
            sticker: buffer,
          },
          { quoted: voxchat }
        );
      }
    } else {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} reply to Image/Video_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
> _${voxbot.prefix}${finalname} reply to Image/Video_`
      );
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
