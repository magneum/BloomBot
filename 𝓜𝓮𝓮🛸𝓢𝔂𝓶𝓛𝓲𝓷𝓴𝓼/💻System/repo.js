const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `repo`,
  description: `ᴄʜᴇᴄᴋ 𝓜𝓮𝓮6 ʀᴇᴘᴏ`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝓮𝓮6.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.logGroup,
          `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (𝓜𝓮𝓮6.chatId === "120363025343298860@g.us" && !𝓜𝓮𝓮6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      var Sender = 𝓜𝓮𝓮6.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
      timestampe = speed();
      latensie = speed() - timestampe;
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          {
            url: "https://i.postimg.cc/5yQVrzBn/Capture.png",
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
            caption: `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*•@${personsending}*,  ⧪➛ 𝗛𝗲𝗿𝗲 𝗜𝘀 𝗠𝗲𝗲𝟲 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆: https://github.com/Krakinz/Mee6
⧪➛ 𝗝𝗼𝗶𝗻 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽: https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
  },
};
