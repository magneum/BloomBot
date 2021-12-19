// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `category`,
  description: `ᴄʜᴇᴄᴋ 𝓜𝖎𝖟𝖚ӄ𝖎 category`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎ɦɛʟք.png`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        content,
        MessageType.image,
        {
          mimetype: Mimetype.png || Mimetype.jpeg,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}menu`,
          buttonText: { displayText: `${ᴋᴇɪ}menu` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},


┌────⭓ 𝐀𝐥𝐥 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬
│🐙 *${ᴋᴇɪ}ownerside:* _ᴏᴡɴᴇʀ_
│⚙️ *${ᴋᴇɪ}systemside:* _ꜱʏꜱᴛᴇᴍ_
│🎋 *${ᴋᴇɪ}animeside:* _ᴀɴɪᴍᴇ_
│🍫 *${ᴋᴇɪ}musicside:* _ᴍᴜꜱɪᴄ_
│🍭 *${ᴋᴇɪ}groupside:* _ɢʀᴏᴜᴘꜱ_
│🦄 *${ᴋᴇɪ}funside:* _ꜰᴜɴꜱ_
│🍄 *${ᴋᴇɪ}nsfwside:* _ᴀᴅᴜʟᴛ_
└───────────⭓

*Press below Menu Button All Commands!👇🏽‍*
`,
        footerText: `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
