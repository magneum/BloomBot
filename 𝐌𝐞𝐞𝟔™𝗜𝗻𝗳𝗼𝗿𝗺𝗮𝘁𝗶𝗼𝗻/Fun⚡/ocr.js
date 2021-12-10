const { MessageType } = require(`@adiwajshing/baileys`);
const ocrSpace = require(`ocr-space-api-wrapper`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `ocr`,
  commandType: "Fun⚡",
  description: `Use this command to obtain text from an image by  *${ᴋᴇɪ}space*  command.`,
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
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      try {
        if (ᴍᴇᴇ6.isImage) {
          var replyChatObject = {
            message: chat.message,
          };
          var imageId = chat.key.id;
          const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
          const filePath = await ʍɛɛℓιєηт.downloadAndSaveMediaMessage(
            replyChatObject,
            fileName
          );
          try {
            const text = await ocrSpace(filePath, {
              apiKey: ꜱɪɢɴ.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              ʍɛɛℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
                });
            }
            ʍɛɛℓιєηт
              .sendMessage(ᴍᴇᴇ6.chatId, Msg, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
              });
          } catch (cᴇʀʀᴏʀ) {
            throw cᴇʀʀᴏʀ;
          }
          fs.unlink(filePath),
            (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log("Deleted!");
              }
            };
        }
        if (ᴍᴇᴇ6.isReplyImage) {
          var replyChatObject = {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          };
          var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
          const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
          const filePath = await ʍɛɛℓιєηт.downloadAndSaveMediaMessage(
            replyChatObject,
            fileName
          );
          try {
            const text = await ocrSpace(filePath, {
              apiKey: ꜱɪɢɴ.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              ʍɛɛℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
                });
            }
            ʍɛɛℓιєηт
              .sendMessage(ᴍᴇᴇ6.chatId, Msg, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
              });
          } catch (cᴇʀʀᴏʀ) {
            throw cᴇʀʀᴏʀ;
          }
          fs.unlink(filePath),
            (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log("Deleted!");
              }
            };
        }
        setTimeout(async () => {
          await ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Please tag a valid message.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          return;
        }, 300000);
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Please tag a valid message.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      } catch (CYΣЯЯ) {
        ʍɛɛℓιєηт.sendMessage(
          ᴍᴇᴇ6.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}

💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
