const translate = require(`@vitalets/google-translate-api`);
const { MessageType } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
// 🛸𝓜𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
module.exports = {
  name: `tr`,
  description: `Language Translator`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use  *${ᴋᴇɪ}tr <text> = <language>*  to translate text to the specified language. 
You can also reply to a text message with syntax  *${ᴋᴇɪ}tr <language>*  to translate text.`,
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
          `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

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
          `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

*•@${personsending}*,
シ︎𝐆𝐫𝐨𝐮𝐩👓https://chat.whatsapp.com/Ih78PSfbxhn6hIS2D09S5S`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
    } else {
      var text = ``;
      var language = ``;
      if (arg.length === 0) {
        return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: _𝔏𝔞𝔟_.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${ᴋᴇɪ}tr <text> = <language>*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
      }
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        try {
          var body = 𝓜𝖎𝖟𝖚ӄ𝖎.body.split(`=`);
          text = body[0].replace(𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `, ``);
          var i = 0;
          while (body[1].split(` `)[i] == ``) {
            i++;
          }
          language = body[1].split(` `)[i];
        } catch (cᴇʀʀᴏʀ) {
          if (cᴇʀʀᴏʀ instanceof TypeError) {
            text = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `, ``);
            language = `English`;
          }
        }
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage) {
        text = 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage;
        language = arg[0];
      } else {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Please reply to a text message.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      if (text.length > 4000) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*Total characters should be less than 4000.*\nTotal characters for current input were {}.`.format(
              text.length
            ),
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      await translate(text, {
        to: language,
      })
        .then((res) => {
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Translated From *${res.from.language.iso}* to> *${language}*
${res.text}`,
            MessageType.text
          );
        })
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
  },
};
// ===============================================================================
// 🎮𝓜𝖎𝖟𝖚ӄ𝖎™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
