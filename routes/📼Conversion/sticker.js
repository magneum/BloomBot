//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    if (!ꪜᴏxʙᴏᴛ.quoted) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to Image/Video_`
      );
    }

    if (/image/.test(ꪜᴏxʙᴏᴛ.mime)) {
      let media = await ꪜᴏxʙᴏᴛ.quoted.download();
      let sticker = new ꪜᴏxʙᴏᴛ.Sticker(media, {
        pack: "mågneum",
        author: "ву ꪜᴏxʙᴏᴛ",
        type: ꪜᴏxʙᴏᴛ.StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 100,
        background: "transparent",
      });
      const buffer = await sticker.toBuffer();
      return await ꪜᴏxʙᴏᴛ.sendMessage(
        ᴠᴏxᴄ.chat,
        {
          sticker: buffer,
        },
        { quoted: ᴠᴏxᴄ }
      );
    } else if (/video/.test(ꪜᴏxʙᴏᴛ.mime)) {
      if ((ꪜᴏxʙᴏᴛ.quoted.msg || ꪜᴏxʙᴏᴛ.quoted).seconds > 20) {
        await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Cannot convert videos longer than 21 Seconds!_`
        );
      } else {
        let media = await ꪜᴏxʙᴏᴛ.quoted.download();
        let sticker = new ꪜᴏxʙᴏᴛ.Sticker(media, {
          pack: "mågneum",
          author: "ву ꪜᴏxʙᴏᴛ",
          type: ꪜᴏxʙᴏᴛ.StickerTypes.FULL,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 100,
          background: "transparent",
        });
        const buffer = await sticker.toBuffer();
        return await ꪜᴏxʙᴏᴛ.sendMessage(
          ᴠᴏxᴄ.chat,
          {
            sticker: buffer,
          },
          { quoted: ᴠᴏxᴄ }
        );
      }
    } else {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to Image/Video_`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
