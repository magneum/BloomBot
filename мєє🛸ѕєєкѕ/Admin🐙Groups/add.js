// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
// ⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡
module.exports = {
  name: `add`,
  commandType: "Admin🐙Groups",
  description: `command to add a person to a group.
Add new people to a group by entering their mobile number as per the format mentioned below.
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example -
*${ꜱɪɢɴ.Mee6IX}add 9861212121*
`,
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
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞!
⧪ 𝙰𝚍𝚟𝚊𝚗𝚌𝚎 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛𝚋𝚘𝚝 ⧪



*↱ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲 ↰*
*⬡${ꜱɪɢɴ.Mee6IX}uptime*  
*⬡${ꜱɪɢɴ.Mee6IX}ping*  
*⬡${ꜱɪɢɴ.Mee6IX}help*  
*⬡${ꜱɪɢɴ.Mee6IX}alive* 
*⬡${ꜱɪɢɴ.Mee6IX}update*  
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (!ᴍᴇᴇ6.isBotGroupAdmin) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Sorry, don't have permission to do so since I am not an admin.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (Arc.length === 0) {
      await υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
      await υℓтяσηℓιєηт.sendMessage(
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
      );
      return;
    }
    let number;
    if (isNaN(Arc[0]) || Arc[0][0] === `+` || Arc[0].length < 10) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Valid formats -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-\n*${ꜱɪɢɴ.Mee6IX}add 9861212121*\n*${ꜱɪɢɴ.Mee6IX}add 919861212121*`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (Arc[0].length == 10 && !isNaN(Arc[0])) {
      number = `91` + Arc[0];
    } else {
      number = Arc[0];
    }
    const exists = await υℓтяσηℓιєηт.isOnWhatsApp(number + `@s.whatsapp.net`);
    if (!exists) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `The number you're trying to add isn't available on WhatsApp.\nPlease verify the number again.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const request = υℓтяσηℓιєηт.groupAdd(ᴍᴇᴇ6.chatId, [
      ᴍᴇᴇ6.owner,
      number + `@s.whatsapp.net`,
    ]);
    const response = await request;

    if (response[number + `@c.us`] == 408) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `The number entered cannot be added back before 24 hours.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    } else if (response[number + `@c.us`] == 409) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `The number entered is already a member of this group.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    υℓтяσηℓιєηт.sendMessage(
      ᴍᴇᴇ6.chatId,
      ` ` + number + ` added successfully!` + ``,
      MessageType.text
    );
    return;
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
