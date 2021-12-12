const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const { getCleanedContact } = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/getCleanedContact`);
const { isMember } = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/isMember`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `promote`,
  extendedDescription: `Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
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
      if (!爪𝖎𝖟𝖚ӄ𝖎6.isGroup) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      if (!爪𝖎𝖟𝖚ӄ𝖎6.isBotGroupAdmin) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Sorry, dont have the permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      if (!爪𝖎𝖟𝖚ӄ𝖎6.isReply && typeof arg[0] == `undefined`) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Reply/tag/enter contact number of the person to be promoted.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
      const reply = chat.message.extendedTextMessage;

      if (爪𝖎𝖟𝖚ӄ𝖎6.isReply) {
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = await getCleanedContact(arg, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6);
      }

      var admin = false;
      var CheckMember = await isMember(contact, 爪𝖎𝖟𝖚ӄ𝖎6.groupMembers);
      for (const index in 爪𝖎𝖟𝖚ӄ𝖎6.groupMembers) {
        if (contact == 爪𝖎𝖟𝖚ӄ𝖎6.groupMembers[index].jid.split(`@`)[0]) {
          if (爪𝖎𝖟𝖚ӄ𝖎6.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      if (CheckMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃.groupMakeAdmin(爪𝖎𝖟𝖚ӄ𝖎6.chatId, arr);
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎6.chatId,
              `*` + contact + ` promoted to admin*`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        } else {
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎6.chatId,
              `*` + contact + ` is already an admin*`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        }
      }
      if (!CheckMember) {
        if (contact === undefined) {
          return;
        }

        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Person is not in the group.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        return;
      }
    } catch (error) {
      if (error === `NumberInvalid`) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `The number you're trying to add isn't available on WhatsApp or  ${arg[0]} is Invalid number`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      } else {
        await ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6);
      }
    }
  },
};
