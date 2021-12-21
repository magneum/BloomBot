// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const got = require("got");
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
var moon = ["4k", "slut", "blowjob", "milf", "milk", "pussy"];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `pussy`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    got("https://www.reddit.com/r/pussy/random.json").then(async (response) => {
      let content = JSON.parse(response.body);
      var title = content[0].data.children[0].data.title;
      var amazeme = content[0].data.children[0].data.url;
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        (!𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin || !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO)
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
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      } else {
        const downloader = await new Downloader({
          url: amazeme,
          directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
          fileName: `${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
          let content = fs.readFileSync(
            `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
          );
          console.log(content);
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            content,
            MessageType.image,
            { mimetype: Mimetype.png }
          );
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                contentText: `
┌────⭓
│⚡ 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} 
│⚡ 𝐓𝐢𝐭𝐥𝐞: *${title}*
│⚡ 𝐓𝐨𝐩𝐢𝐜: ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}
└───────────⭓
🔗𝐋𝐢𝐧𝐤: ${amazeme}`,
                footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
                buttons: [
                  {
                    buttonId: `${ᴋᴇɪ}${moonshine}`,
                    buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
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
            .then(() => {
              fs.unlinkSync(
                `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}_${ꜱᴇɴᴅᴇʀɪᴅ}.png`
              );
            })
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (ℓαвєяяσя) {
          ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
    });
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
