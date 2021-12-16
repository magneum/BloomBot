//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const { getDadjoke, getRandomCHNJoke, getRandomJoke } = require(`random-jokes`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `joke`,
  description: `Get any random Jokes`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var 𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜 = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜.total != 0) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      } else {
        const dadJoke = await getDadjoke();
        const getrandomCHNJoke = await getRandomCHNJoke();
        const getrandomJoke = await getRandomJoke();
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰}, Here are the jokes!*
*⬣ Dadjoke*
_${dadJoke}_`,
            `*` + dadJoke + `*\n@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
