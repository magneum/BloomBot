const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const ud = require(`urban-dictionary`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `ud`,
  description: `Urban Dictionary`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this command to find the meaning of a word in Urban Dictionary. Enter  *${ᴋᴇɪ}ud*  command.`,
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
          `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

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
          `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

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
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      try {
        var text = ``;
        if (!(𝓜𝓮𝓮6.replyMessage === ``)) {
          text = 𝓜𝓮𝓮6.replyMessage;
        } else if (arg.length === 0) {
          return await ʍɛɛℓιєηт
            .sendMessage(
              𝓜𝓮𝓮6.chatId,
              {
                url: ꜱɪɢɴ.ARC,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give text!*

*Usage Example*
*${ᴋᴇɪ}ud <text>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
            });
        } else {
          text = arg.join(` `);
        }

        let Response = await ud.define(text);
        let result = Response.reduce(function (prev, current) {
          return prev.thumbs_up + prev.thumbs_down >
            current.thumbs_up + current.thumbs_down
            ? prev
            : current;
        });

        result.definition = result.definition.replace(/\[/g, `_`);
        result.definition = result.definition.replace(/\]/g, `_`);
        result.example = result.example.replace(/\[/g, `_`);
        result.example = result.example.replace(/\]/g, `_`);

        let msg =
          `*Word :* ` +
          result.word +
          `\n\n*Meaning :*\n` +
          result.definition +
          `\n\n*Example:*\n` +
          result.example +
          `\n〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️\n👍` +
          result.thumbs_up +
          `  👎` +
          result.thumbs_down;
        await ʍɛɛℓιєηт
          .sendMessage(𝓜𝓮𝓮6.chatId, msg, MessageType.text)
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      } catch (cᴇʀʀᴏʀ) {
        ʍɛɛℓιєηт.sendMessage(
          𝓜𝓮𝓮6.chatId,
          `*🎮𝓜𝓮𝓮6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      }
      return;
    }
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
