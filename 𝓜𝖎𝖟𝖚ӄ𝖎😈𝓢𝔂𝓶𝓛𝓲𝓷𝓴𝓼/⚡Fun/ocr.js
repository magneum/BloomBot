//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType } = require(`@adiwajshing/baileys`);
const ocrSpace = require(`ocr-space-api-wrapper`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `ocr`,
  description: `Use this command to obtain text from an image by  *${ᴋᴇɪ}space*  command.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱 = require(`simple-git`)();
      await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.fetch();
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓 = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.substring(0, 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.length - 15);
      var 𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜 = await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜.total != 0) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      } else {
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isImage) {
          var replyChatObject = {
            message: chat.message,
          };
          var imageId = chat.key.id;
          const fileName = `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/img-` + imageId;
          const filePath = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.downloadAndSaveMediaMessage(
            replyChatObject,
            fileName
          );
          try {
            const text = await ocrSpace(filePath, {
              apiKey: _𝔏𝔞𝔟_.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
            }
            𝓚𝓻𝓪𝓴𝓲𝓷𝔃
              .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg, MessageType.text, {
                quoted: chat,
              })
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
              });
          } catch (cᴇʀʀᴏʀ) {
            throw cᴇʀʀᴏʀ;
          }
          fs.unlink(filePath),
            (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log(`Deleted!`);
              }
            };
        }
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
          var replyChatObject = {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          };
          var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
          const fileName = `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/img-` + imageId;
          const filePath = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.downloadAndSaveMediaMessage(
            replyChatObject,
            fileName
          );
          try {
            const text = await ocrSpace(filePath, {
              apiKey: _𝔏𝔞𝔟_.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
            }
            𝓚𝓻𝓪𝓴𝓲𝓷𝔃
              .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg, MessageType.text, {
                quoted: chat,
              })
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
              });
          } catch (cᴇʀʀᴏʀ) {
            throw cᴇʀʀᴏʀ;
          }
          fs.unlink(filePath),
            (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log(`Deleted!`);
              }
            };
        }
        setTimeout(async () => {
          await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Please tag a valid message.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }, 300000);
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Please tag a valid message.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
    } catch (error) {
      ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(error);
    }
  },
};
//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
