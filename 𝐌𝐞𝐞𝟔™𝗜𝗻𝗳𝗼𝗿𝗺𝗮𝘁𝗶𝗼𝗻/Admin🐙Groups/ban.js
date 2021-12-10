const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `ban`,
  commandType: "Admin🐙Groups",
  description: `Add the number to banlist. You can reply to the person in group / pm or use ${ᴋᴇɪ}ban <number>.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await ᴍᴇᴇgit.fetch();
    var Sender = ᴍᴇᴇ6.sender;
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
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
    if (!ᴍᴇᴇ6.isReply && typeof arg[0] == `undefined`) {
      ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Tag a message or enter a number to proceed.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const reply = chat.message.extendedTextMessage;
    var contact = ``;
    if (!arg.length > 0) {
      contact = reply.contextInfo.participant.split(`@`)[0];
    } else {
      contact = async (arg, ʍɛɛℓιєηт, ᴍᴇᴇ6) => {
        var JoinIDNum = ``;
        var countryCode = ꜱɪɢɴ.COUNTRY_CODE;
        if (isNaN(arg[0]) || arg[0][0] === `+`) {
          if (arg[0][0] === `@` || arg[0][0] === `+`) {
            JoinIDNum = arg[0].substring(1, arg[0].length + 1);
          } else {
            ʍɛɛℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
        } else {
          JoinIDNum = arg[0];
        }

        if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        } else if (JoinIDNum.length === 10) {
          JoinIDNum = countryCode + JoinIDNum;
        }
        var isOnWhatsApp = await ʍɛɛℓιєηт.isOnWhatsApp(JoinIDNum);
        if (isOnWhatsApp === undefined) {
          throw `NumberInvalid`;
        }
        return JoinIDNum;
      };
    }

    if (contact === ᴍᴇᴇ6.owner.split(`@`)[0]) {
      ʍɛɛℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, `Bot can not ban itself`, MessageType.text)
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }

    if (contact === ``) {
      ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Tag a message or enter a number to proceed.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }
    var JID = contact + `@s.whatsapp.net`;
    ʍɛɛℓιєηт.banUser(JID, `add`);
    ʍɛɛℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        `*` + contact + ` baned successfully.*`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
