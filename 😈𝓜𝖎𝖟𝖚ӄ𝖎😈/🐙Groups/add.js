// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `add`,
  description: `Add new people to a group by entering their mobile number as per the format mentioned below.`,
  𝓜𝓮𝓮6ʍօʀɛ: `Example -
${ᴋᴇɪ}add <country-code>0000000000
${ᴋᴇɪ}add 910000000000`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      try {
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        if (
          𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
          !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
          !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO
        ) {
          let content = await fs.readFileSync(_𝔏𝔞𝔟_.NotAdmin);
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            content,
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          );
          const buttons = [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
          ];
          const buttonMessage = {
            contentText: `@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, ❌ You Are Not Allowed!

*🎊Groups:* Admins & Developers!
*🫒Private:* Everyone`,
            footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
            buttons: buttons,
            headerType: 4,
            imageMessage: media.message.imageMessage,
          };
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              buttonMessage,
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.ERROR,
              },
              MessageType.image,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
                mimetype: Mimetype.png || Mimetype.jpeg,
                caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ need ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ᴀᴅᴍɪɴ ꜰɪʀꜱᴛ*`,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        if (!arg[0]) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Enter the number you want to add.
For instance,  
*${ᴋᴇɪ}add <NUMBER>* .`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
        let NUM;
        if (isNaN(arg[0]) || arg[0][0] === `+` || arg[0].length < 10) {
          var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
          𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
          const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
          return nahargs
            .nahargs(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀᴄᴏɴꜰ,
              𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
              𝓜𝓮𝓮ʍօʀɛ
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        if (arg[0].length == 10 && !isNaN(arg[0])) {
          NUM = `91` + arg[0];
        } else {
          NUM = arg[0];
        }
        const exists = await ӄʀǟӄɨռʐ.isOnWhatsApp(NUM + `@s.whatsapp.net`);
        if (!exists) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.

Example -
${ᴋᴇɪ}add <country-code>0000000000
${ᴋᴇɪ}add 910000000000`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
        NUM = `${arg[0].replace(/ /g, ``)}@s.whatsapp.net`;
        const request = ӄʀǟӄɨռʐ.groupAdd(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [NUM]);
        const response = await request;

        if (response[NUM + `@c.us`] == 408) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `The number entered cannot be added back before 24 hours.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        } else if (response[NUM + `@c.us`] == 409) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `The number entered is already a member of this group.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            ` ` + NUM + ` added successfully!` + ``,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        if (ℓαвєяяσя.status == 400) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        await ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      return;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
