const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const anime = require("anime-actions");
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `bite`,
  commandType: "Anime😈",
  description: `	I know you like anime bite`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await ᴍᴇᴇgit.fetch();
    var Sender = ᴍᴇᴇ6.sender;
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    personreceived = Receiver.substring(0, Receiver.length - 15);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

❗ *👓𝓜𝓮𝓮6™* 𝙐𝙥𝙙𝙖𝙩𝙚* 𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•@${personsending}*,𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      if (!ᴍᴇᴇ6.fromMe) return;
      if (!ᴍᴇᴇ6.isSenderSUDO) {
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
            `conversation`
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
      return;
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ᴍᴇᴇ6.isGroup && ᴍᴇᴇ6.isReply) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: await anime.bite(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg || Mimetype.png,
            contextInfo: { mentionedJid: [personsending, personreceived] },
            caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

*⚡@${personsending}* bit *@${personreceived}*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ᴍᴇᴇ6.isGroup && !ᴍᴇᴇ6.isReply) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: await anime.bite(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg || Mimetype.png,
            contextInfo: { mentionedJid: [personsending] },
            caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩
  
*⚡@${personsending}* Bit!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (!ᴍᴇᴇ6.isGroup) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: await anime.bite(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg || Mimetype.png,
            caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

*⚡I Bite You!*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
  },
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
