const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const { getCleanedContact } = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/getCleanedContact`);
const { isMember } = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/isMember`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `promote`,
  extendedDescription: `Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
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
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

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
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

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
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    try {
      if (!𝓜𝓮𝓮6.isGroup) {
        ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        return;
      }
      if (!𝓜𝓮𝓮6.isBotGroupAdmin) {
        ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            `Sorry, dont have the permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        return;
      }
      if (!𝓜𝓮𝓮6.isReply && typeof arg[0] == `undefined`) {
        ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            `Reply/tag/enter contact number of the person to be promoted.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        return;
      }
      const reply = chat.message.extendedTextMessage;

      if (𝓜𝓮𝓮6.isReply) {
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = await getCleanedContact(arg, ʍɛɛℓιєηт, 𝓜𝓮𝓮6);
      }

      var admin = false;
      var CheckMember = await isMember(contact, 𝓜𝓮𝓮6.groupMembers);
      for (const index in 𝓜𝓮𝓮6.groupMembers) {
        if (contact == 𝓜𝓮𝓮6.groupMembers[index].jid.split(`@`)[0]) {
          if (𝓜𝓮𝓮6.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      if (CheckMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          ʍɛɛℓιєηт.groupMakeAdmin(𝓜𝓮𝓮6.chatId, arr);
          ʍɛɛℓιєηт
            .sendMessage(
              𝓜𝓮𝓮6.chatId,
              `*` + contact + ` promoted to admin*`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        } else {
          ʍɛɛℓιєηт
            .sendMessage(
              𝓜𝓮𝓮6.chatId,
              `*` + contact + ` is already an admin*`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        }
      }
      if (!CheckMember) {
        if (contact === undefined) {
          return;
        }

        ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            `Person is not in the group.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        return;
      }
    } catch (error) {
      if (error === `NumberInvalid`) {
        ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            `The number you're trying to add isn't available on WhatsApp or  ${arg[0]} is Invalid number`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      } else {
        await ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6);
      }
    }
  },
};
