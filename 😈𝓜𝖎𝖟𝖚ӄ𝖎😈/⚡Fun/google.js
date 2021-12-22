const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fetch = require("node-fetch");
const Google = require("google-it");
const vers = require(`../../package.json`);
module.exports = {
  name: `google`,
  description: `Search anything on google`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}google <text>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    if (arg.length === 0) {
      var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
      return nahargs
        .nahargs(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    `🐙============================================================================================================================<⚡>`;
    try {
      await Google({ query: arg.join(` `) })
        .then(async (results) => {
          let msg = results.map(({ title, link, snippet }) => {
            return `🍻𝐓𝐢𝐭𝐥𝐞⤞ *${title}*
🔗𝐋𝐢𝐧𝐤⤞ ${link}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧⤞ ${snippet}`;
          }).join`\n\n`;
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            { url: `./𝓜𝖎𝖟𝖚ӄ𝖎/Mizuki_Google.png` },
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          );
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                contentText: `•@${ꜱᴇɴᴅᴇʀeceived},`,
                footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\n${msg}`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}bugreport`,
                    buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
                    type: 1,
                  },
                ],
                headerType: 4,
                imageMessage: media.message.imageMessage,
              },
              MessageType.buttonsMessage,
              {
                quoted: chat,
                contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
