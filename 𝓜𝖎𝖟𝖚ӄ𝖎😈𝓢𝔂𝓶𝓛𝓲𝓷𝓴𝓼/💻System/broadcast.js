//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
module.exports = {
  name: `broadcast`,
  description: `Send broadcast Messages to All Groups/Dms You Are In.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      } else {
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `only *𝓜𝖎𝖟𝖚ӄ𝖎-Devs* can use this feature`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } else if (arg.length === 0) {
          var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
          𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
          const nahargs = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/nahargs`);
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
        𝓜𝓮𝓮s = await ӄʀǟӄɨռʐ.chats.all();
        for (let _ of 𝓜𝓮𝓮s) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              _.jid,
              `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_

*𝕾𝖕𝖊𝖈𝖎𝖆𝖑📜𝕭𝖗𝖔𝖆𝖉𝖈𝖆𝖘𝖙*
${arg.join(` `)}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                },
                sendEphemeral: true,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},𝗕𝗿𝗼𝗮𝗱𝗖𝗮𝘀𝘁𝗶𝗻𝗴 𝗙𝗶𝗻𝗶𝘀𝗵𝗲𝗱!`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
