// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const songlyrics = require(`songlyrics`).default;
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const lyrics = require(`music-lyrics`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `lyrics`,
  description: `Use this command to find the lyrics of a song by using  *${ᴋᴇɪ}lyrics*  command.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      var song = ``;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        song = 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage;
      } else if (arg.length === 0) {
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else {
        song = arg.join(` `);
      }
      try {
        const lyrics = await songlyrics(song);
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_𝐌𝐢𝐳𝐮𝐤𝐢™_


𝗟𝘆𝗿𝗶𝗰𝘀 𝗦𝗼𝘂𝗿𝗰𝗲: ${lyrics.source.name}
𝗟𝘆𝗿𝗶𝗰𝘀 𝗨𝗿𝗹: ${lyrics.source.link}
𝗟𝘆𝗿𝗶𝗰𝘀 𝗙𝗼𝘂𝗻𝗱 𝗙𝗼𝗿: _${song}_
${lyrics.lyrics}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        try {
          const lyric = await lyrics.search(song);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `𝗟𝘆𝗿𝗶𝗰𝘀 𝗙𝗼𝘂𝗻𝗱 𝗙𝗼𝗿 ${song}:
${lyric}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (ℓαвєяяσя) {
          await ℓιєηт.catch(`No Lyrics Found!`, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
