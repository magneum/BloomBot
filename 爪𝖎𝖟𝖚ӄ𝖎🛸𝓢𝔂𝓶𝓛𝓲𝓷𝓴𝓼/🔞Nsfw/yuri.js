const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const akaneko = require(`akaneko`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `yuri`,
  description: `ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!`,
  async handle(ʍɛɛℓιєηт, chat, 爪𝖎𝖟𝖚ӄ𝖎6, arg) {
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎6.sender;
    var personsending = Sender.substring(0, Sender.length - 15);
    const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6.total != 0) {
      console.log(ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6);
      await ʍɛɛℓιєηт
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.logGroup,
          `*⦿𝐌𝐞𝐞𝟔™   ⬡••••••••⬡*
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 爪𝖎𝖟𝖚ӄ𝖎6));
    } else {
      console.log("No commits to pull");
    }
    if (爪𝖎𝖟𝖚ӄ𝖎6.chatId === "120363022474862829@g.us") {
      return await ʍɛɛℓιєηт
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          {
            url: await akaneko.nsfw.yuri(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎6.sender],
            },
            caption: `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

Nsfw Topic: *Yuri*
Asked By? @${personsending} (admin)`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 爪𝖎𝖟𝖚ӄ𝖎6));
    }
    if (爪𝖎𝖟𝖚ӄ𝖎6.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
    } else {
      if (爪𝖎𝖟𝖚ӄ𝖎6.isGroup && !爪𝖎𝖟𝖚ӄ𝖎6.isSenderGroupAdmin) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            {
              url: ꜱɪɢɴ.ERROR,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `
  ⚠️𝗘𝗿𝗿𝗼𝗿: 
  ➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩
  
  ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
  ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ..
  `,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 爪𝖎𝖟𝖚ӄ𝖎6));
      } else {
        return await ʍɛɛℓιєηт
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            {
              url: await akaneko.nsfw.yuri(),
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              contextInfo: {
                mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎6.sender],
              },
              caption: `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

Nsfw Topic: *Yuri*
Asked By? @${personsending} (admin)`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 爪𝖎𝖟𝖚ӄ𝖎6));
      }
    }
  },
};
