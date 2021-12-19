// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const {
  GroupSettingChange,
  MessageType,
  Mimetype,
} = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `unmute`,
  description: `Unmute non-admin members of a group`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}unmute`,
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
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `©️ ᴍɪᴢᴜᴋɪ ʙᴏᴛ

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `©️ ᴍɪᴢᴜᴋɪ ʙᴏᴛ

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        let content = fs.readFileSync(_𝔏𝔞𝔟_.MINAN);
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
          contentText: `@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
          footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
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
              contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
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
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*${ᴋᴇɪ}unmute*  command is only applicable for a group chat.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      ӄʀǟӄɨռʐ
        .groupSettingChange(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          GroupSettingChange.messageSend,
          false
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `Chat permissions changed to  *all group members*${ᴋᴇɪ}`,
          MessageType.text,
          { quoted: chat }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
