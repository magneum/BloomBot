// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const Greetings = require(`../../ᴍᴇᴇ6/ɠɠᴍᴇᴇ6`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `setwelcome`,
  commandType: "Admin🐙Groups",
  description: `New members of a group chat will be welcomed with a message. 
It can be an image, video, gif with caption or just a text message.
Use this command to either set, update or delete the existing message.
The setwelcome option can be disabled but saved using the   *${ꜱɪɢɴ.Mee6IX}setwelcome  off*  command. 
In order to delete the existing message, use  *${ꜱɪɢɴ.Mee6IX}setwelcome  delete*${ꜱɪɢɴ.Mee6IX} .
Do note, the setwelcome option is still enabled after you use the delete option.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
⚡𝐌𝐞𝐞𝟔™ ⧪ɪ ᴀᴍ ᴍʀ ᴍᴇᴇ6, ʟᴏᴏᴋ ᴀᴛ ᴍᴇ! 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵

*↱ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲 ↰*
  *⬡${ꜱɪɢɴ.Mee6IX}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
  *⬡${ꜱɪɢɴ.Mee6IX}alive*  ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}update*  ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    try {
      if (!ᴍᴇᴇ6.isGroup) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        return;
      }
      var Msg = await Greetings.getMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
      if (Arc.length == 0) {
        var enabled = await Greetings.checkSettings(ᴍᴇᴇ6.chatId, `setwelcome`);
        try {
          if (enabled === false || enabled === undefined) {
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Set a setwelcome message first.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          } else if (enabled === `OFF`) {
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Greetings are enabled: False \nCurrently greeting new members with:`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            υℓтяσηℓιєηт
              .sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }

          υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Greetings are enabled: True \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        try {
          if (Arc[0] === `OFF` || Arc[0] === `off` || Arc[0] === `Off`) {
            switched = `OFF`;
            await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Welcome message has been disabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
          if (Arc[0] === `ON` || Arc[0] === `on` || Arc[0] === `On`) {
            switched = `ON`;
            await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Welcome message has been enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
          if (Arc[0] === `delete`) {
            var Msg = await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
            if (Msg === false || Msg === undefined) {
              υℓтяσηℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `Set a setwelcome message first.`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
                });
              return;
            }

            await υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Welcome message deleted.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
          text = ᴍᴇᴇ6.body.replace(
            ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `,
            ``
          );
          if (Msg === false || Msg === undefined) {
            await Greetings.setWelcome(ᴍᴇᴇ6.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          } else {
            await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setwelcome`);
            await Greetings.setWelcome(ᴍᴇᴇ6.chatId, text);
            await υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      }
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.Mee6IX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
