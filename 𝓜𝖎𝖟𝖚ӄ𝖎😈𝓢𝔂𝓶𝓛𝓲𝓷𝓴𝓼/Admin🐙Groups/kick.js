const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
module.exports = {
  name: `kick`,
  description: `Use this command to kick people from a group by tagging them  *${ᴋᴇɪ}kick @<person-to-kick>*  or replying to them  *${ᴋᴇɪ}kick*`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
          `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === "120363025343298860@g.us" && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `⬡••• *𝐌𝐢𝐳𝐮𝐤𝐢 by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟* •••⦿

*•@${personsending}*,
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
    }
    // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
      return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
    }
    let owner = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId.split(`-`)[0];
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      let PersonToRemove =
        chat.message.extendedTextMessage.contextInfo.participant;
      if (PersonToRemove === owner + `@s.whatsapp.net`) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      }
      if (PersonToRemove === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      }
      var isMember = async (chatId, groupMembers) => {
        var isMember = false;
        if (!(chatId === undefined)) {
          for (const index in groupMembers) {
            if (chatId == groupMembers[index].jid.split(`@`)[0]) {
              isMember = true;
            }
          }
          return isMember;
        } else {
          return isMember;
        }
      };
      if (!isMember) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*person is not in the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
      }
      try {
        if (PersonToRemove) {
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [PersonToRemove])
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
      return;
    }
    if (!arg[0]) {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
    }
    if (arg[0][0] == `@`) {
      const number = arg[0].substring(1);
      if (isNaN(number)) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      }

      if (number + `@s.whatsapp.net` === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      }

      if (!(number === owner)) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [number + `@s.whatsapp.net`])
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      } else {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        return;
      }
    }
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
