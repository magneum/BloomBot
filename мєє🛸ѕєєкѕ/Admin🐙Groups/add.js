const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `add`,
  commandType: "Admin🐙Groups",
  description: `command to add a person to a group.
Add new people to a group by entering their mobile number as per the format mentioned below.
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example -
*${ꜱɪɢɴ.Mee6IX}add 9861212121*`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (!ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
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
    if (Arc.length === 0) {
      await υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
      await υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId, {
          url: ꜱɪɢɴ.ARC,
        },
        MessageType.image, {
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