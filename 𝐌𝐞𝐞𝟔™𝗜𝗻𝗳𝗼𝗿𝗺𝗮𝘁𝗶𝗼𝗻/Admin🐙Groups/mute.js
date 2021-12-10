const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `mute`,
  commandType: "Admin🐙Groups",
  description: `Mute non-admin members of a group. 
You can even specify the duration using s, m or h.
For example:
*${ꜱɪɢɴ.Mee6IX}mute 15 m*
will change chat permissions to admin-only for 15 minutes.`,
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
      //       await ʍɛɛℓιєηт
      //         .sendMessage(
      //           ᴍᴇᴇ6.chatId,
      //           `⬡••••••••⬡    *⦿𝐌𝐞𝐞𝟔™⦿*    ⬡••••••••⬡

      // ᴊᴏɪɴ ꜱᴘᴀᴍ ɢʀᴏᴜᴘ ᴛᴏ ᴜꜱᴇ ᴀɴʏ/ᴀʟʟ ᴍᴇᴇ6 ᴄᴏᴍᴍᴀɴᴅꜱ!
      // シ︎𝐒𝐩𝐚𝐦 𝐆𝐫𝐨𝐮𝐩🛸https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
      //           `conversation`
      //         )
      //         .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    } else {
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
            `*${ᴋᴇɪ}mute*  command is only applicable in a group chat.`,
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
      if (arg.length === 0) {
        await ʍɛɛℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Chat permissions changed to  *admin only*${ᴋᴇɪ}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      } else if (isNaN(arg[0])) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Please mention how long you want to mute the chat. For example,\n*${ᴋᴇɪ}mute 10 s*  to mute for 10 seconds.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }

      var duration;
      var type = `minutes`;
      if (arg[1] === `s`) {
        duration = arg[0] * 1000;
        type = `seconds`;
      } else if (arg[1] === `m`) {
        duration = arg[0] * 60 * 1000;
        type = `seconds`;
      } else if (arg[1] === `h`) {
        duration = arg[0] * 60 * 60 * 1000;
        type = `seconds`;
      } else {
        duration = arg[0] * 60 * 1000;
      }

      ʍɛɛℓιєηт
        .groupSettingChange(ᴍᴇᴇ6.chatId, GroupSettingChange.messageSend, true)
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Chat permissions changed to  *admin only*  for ` +
            arg[0] +
            ` ` +
            type +
            `.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      setTimeout(() => {
        ʍɛɛℓιєηт
          .groupSettingChange(
            ᴍᴇᴇ6.chatId,
            GroupSettingChange.messageSend,
            false
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Chat permissions changed to  *all group members*${ᴋᴇɪ}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }, duration);
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
