// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const Greetings = require(`../../ULTƦON/ɠɠULTƦON`);
const ℓιєηт = require("../../ULTƦON/catch");
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `setwelcome`,
  commandType: "Administration🐙",
  description: `New members of a group chat will be welcomed with a message. 
It can be an image, video, gif with caption or just a text message.
Use this command to either set, update or delete the existing message.
The setwelcome option can be disabled but saved using the   *${ꜱɪɢɴ.ULTRONIX}setwelcome  off*  command. 
In order to delete the existing message, use  *${ꜱɪɢɴ.ULTRONIX}setwelcome  delete*${ꜱɪɢɴ.ULTRONIX} .
Do note, the setwelcome option is still enabled after you use the delete option.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      if (!ULTƦON.isGroup) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      var Msg = await Greetings.getMessage(ULTƦON.chatId, `setwelcome`);
      if (Arc.length == 0) {
        var enabled = await Greetings.checkSettings(ULTƦON.chatId, `setwelcome`);
        try {
          if (enabled === false || enabled === undefined) {
            υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Set a setwelcome message first.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          } else if (enabled === `OFF`) {
            υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Greetings are enabled: False \nCurrently greeting new members with:`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            υℓтяσηℓιєηт
              .sendMessage(ULTƦON.chatId, Msg.message, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }

          υℓтяσηℓιєηт
            .sendMessage(
              ULTƦON.chatId,
              `Greetings are enabled: True \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
          υℓтяσηℓιєηт
            .sendMessage(ULTƦON.chatId, Msg.message, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
            });
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        try {
          if (Arc[0] === `OFF` || Arc[0] === `off` || Arc[0] === `Off`) {
            switched = `OFF`;
            await Greetings.changeSettings(ULTƦON.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Welcome message has been disabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
          if (Arc[0] === `ON` || Arc[0] === `on` || Arc[0] === `On`) {
            switched = `ON`;
            await Greetings.changeSettings(ULTƦON.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Welcome message has been enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
          if (Arc[0] === `delete`) {
            var Msg = await Greetings.deleteMessage(ULTƦON.chatId, `setwelcome`);
            if (Msg === false || Msg === undefined) {
              υℓтяσηℓιєηт
                .sendMessage(
                  ULTƦON.chatId,
                  `Set a setwelcome message first.`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
                });
              return;
            }

            await υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Welcome message deleted.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
          text = ULTƦON.body.replace(
            ULTƦON.body[0] + ULTƦON.commandName + ` `,
            ``
          );
          if (Msg === false || Msg === undefined) {
            await Greetings.setWelcome(ULTƦON.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          } else {
            await Greetings.deleteMessage(ULTƦON.chatId, `setwelcome`);
            await Greetings.setWelcome(ULTƦON.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      }
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
