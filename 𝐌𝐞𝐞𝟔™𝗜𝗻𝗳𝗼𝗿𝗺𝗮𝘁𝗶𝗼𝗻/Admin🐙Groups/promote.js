const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../ᴍᴇᴇ6/catch`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const { getCleanedContact } = require(`../../ᴍᴇᴇ6/getCleanedContact`);
const { isMember } = require(`../../ᴍᴇᴇ6/isMember`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `promote`,
  description: `Promote a member to admin`,
  extendedDescription: `Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    const ᴍᴇᴇgit = require("simple-git")();
    await ᴍᴇᴇgit.fetch();
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      console.log(ɴᴇᴡᴍᴇᴇ6);
      var str = ᴍᴇᴇ6.sender;
      var newString = str.substring(0, str.length - 15);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    *⦿𝐌𝐞𝐞𝟔™⦿*    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*💞Dҽαɾ @${newString},*
𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      console.log("No commits to pull");
    }
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      console.log("Dev-only-Mode-Allowed!");
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    *⦿𝐌𝐞𝐞𝟔™⦿*    ⬡••••••••⬡

ᴊᴏɪɴ ꜱᴘᴀᴍ ɢʀᴏᴜᴘ ᴛᴏ ᴜꜱᴇ ᴀɴʏ/ᴀʟʟ ᴍᴇᴇ6 ᴄᴏᴍᴍᴀɴᴅꜱ!
シ︎𝐒𝐩𝐚𝐦 𝐆𝐫𝐨𝐮𝐩🛸https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          `conversation`
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    } else {
      try {
        if (!ᴍᴇᴇ6.isGroup) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `This command is only applicable in a group chat.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          return;
        }
        if (!ᴍᴇᴇ6.isBotGroupAdmin) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Sorry, dont have the permission to do so since I am not an admin.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          return;
        }
        if (!ᴍᴇᴇ6.isReply && typeof arg[0] == `undefined`) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Reply/tag/enter contact number of the person to be promoted.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          return;
        }
        const reply = chat.message.extendedTextMessage;

        if (ᴍᴇᴇ6.isReply) {
          var contact = reply.contextInfo.participant.split(`@`)[0];
        } else {
          var contact = await getCleanedContact(arg, ʍɛɛℓιєηт, ᴍᴇᴇ6);
        }

        var admin = false;
        var CheckMember = await isMember(contact, ᴍᴇᴇ6.groupMembers);
        for (const index in ᴍᴇᴇ6.groupMembers) {
          if (contact == ᴍᴇᴇ6.groupMembers[index].jid.split(`@`)[0]) {
            if (ᴍᴇᴇ6.groupMembers[index].isAdmin) {
              admin = true;
            }
          }
        }
        if (CheckMember) {
          if (!admin == true) {
            const arr = [contact + `@s.whatsapp.net`];
            ʍɛɛℓιєηт.groupMakeAdmin(ᴍᴇᴇ6.chatId, arr);
            ʍɛɛℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `*` + contact + ` promoted to admin*`,
                MessageType.text
              )
              .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          } else {
            ʍɛɛℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `*` + contact + ` is already an admin*`,
                MessageType.text
              )
              .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          }
        }
        if (!CheckMember) {
          if (contact === undefined) {
            return;
          }

          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Person is not in the group.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          return;
        }
      } catch (error) {
        if (error === `NumberInvalid`) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `The number you're trying to add isn't available on WhatsApp or  ${arg[0]} is Invalid number`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        } else {
          await ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6);
        }
      }
    }
  },
};
