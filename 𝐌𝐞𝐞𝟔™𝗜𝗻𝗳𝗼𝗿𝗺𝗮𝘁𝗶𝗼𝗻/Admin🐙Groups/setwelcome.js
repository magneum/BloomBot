const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const Greetings = require(`../../ᴍᴇᴇ6/ɠɠᴍᴇᴇ6`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `setwelcome`,
  commandType: "Admin🐙Groups",
  description: `New members of a group chat will be welcomed with a message. 
It can be an image, video, gif with caption or just a text message.
Use this command to either set, update or delete the existing message.
The setwelcome option can be disabled but saved using the   *${ꜱɪɢɴ.Mee6IX}setwelcome  off*  command. 
In order to delete the existing message, use  *${ꜱɪɢɴ.Mee6IX}setwelcome  delete* .
Do note, the setwelcome option is still enabled after you use the delete option.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    if (!ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
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
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
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
    var Msg = await Greetings.getMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
    if (arg.length == 0) {
      var enabled = await Greetings.checkSettings(ᴍᴇᴇ6.chatId, `setwelcome`);
      try {
        if (enabled === false || enabled === undefined) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Set a setwelcome message first.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        } else if (enabled === `OFF`) {
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Greetings are enabled: False \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          ʍɛɛℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }

        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Greetings are enabled: True \nCurrently greeting new members with:`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          });
        ʍɛɛℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text)
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          });
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    } else {
      try {
        if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
          switched = `OFF`;
          await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Welcome message has been disabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
          switched = `ON`;
          await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
          ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Welcome message has been enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        if (arg[0] === `delete`) {
          var Msg = await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
          if (Msg === false || Msg === undefined) {
            ʍɛɛℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Set a setwelcome message first.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }

          await ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Welcome message deleted.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        text = ᴍᴇᴇ6.body.replace(ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `, ``);
        if (Msg === false || Msg === undefined) {
          await Greetings.setWelcome(ᴍᴇᴇ6.chatId, text);
          await ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Welcome message updated and enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        } else {
          await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
          await Greetings.setWelcome(ᴍᴇᴇ6.chatId, text);
          await ʍɛɛℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Welcome message updated and enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
