const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `add`,
  description: `Add new people to a group by entering their mobile number as per the format mentioned below.
Example -
${ᴋᴇɪ}add <country-code>8250889325*
${ᴋᴇɪ}add 918250889325*`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎6.sender;
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.logGroup,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (爪𝖎𝖟𝖚ӄ𝖎6.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎6.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
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
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    try {
      if (!arg[0]) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Enter the number you want to add.
For instance,  
*${ᴋᴇɪ}add <NUMBER>* .`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      let NUM;
      if (isNaN(arg[0]) || arg[0][0] === `+` || arg[0].length < 10) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Valid formats -

Example -
*${ᴋᴇɪ}add <country-code>8250889325*
*${ᴋᴇɪ}add 918250889325*`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      if (arg[0].length == 10 && !isNaN(arg[0])) {
        NUM = `91` + arg[0];
      } else {
        NUM = arg[0];
      }
      const exists = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.isOnWhatsApp(NUM + `@s.whatsapp.net`);
      if (!exists) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.

Example -
*${ᴋᴇɪ}add <country-code>8250889325*
*${ᴋᴇɪ}add 918250889325*`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      NUM = `${arg[0].replace(/ /g, "")}@s.whatsapp.net`;
      const request = 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.groupAdd(爪𝖎𝖟𝖚ӄ𝖎6.chatId, [NUM]);
      const response = await request;

      if (response[NUM + `@c.us`] == 408) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `The number entered cannot be added back before 24 hours.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      } else if (response[NUM + `@c.us`] == 409) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `The number entered is already a member of this group.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          ` ` + NUM + ` added successfully!` + ``,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
    } catch (error) {
      if (error.status == 400) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      }
      await ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6);
    }
    return;
  },
};
