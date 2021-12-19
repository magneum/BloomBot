// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `animeside`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.MEE,
          },
          MessageType.image,
          {
            quoted: chat,
            mimetype: Mimetype.png || Mimetype.jpeg,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
            caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

•@${ꜱᴇɴᴅᴇʀeceived},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}


┌────⭓ 𝘼𝙣𝙞𝙢𝙚*  ⦿
│🎋• ${ᴋᴇɪ}anime: _Get Anime Informations From MyAnimeList_
│🎋• ${ᴋᴇɪ}ranimewall: _get random HD anime wallpapers_
│🎋• ${ᴋᴇɪ}cuddle: _get anime-ᴄᴜᴅᴅʟᴇ gif_
│🎋• ${ᴋᴇɪ}hug: _get anime-ʜᴜɢ gif_
│🎋• ${ᴋᴇɪ}pat: _get anime-ᴘᴀᴛ gif_
│🎋• ${ᴋᴇɪ}smile: _get anime-ꜱᴍɪʟᴇ gif_
│🎋• ${ᴋᴇɪ}slap: _get anime-ꜱʟᴀᴘ gif_
│🎋• ${ᴋᴇɪ}wink: _get anime-ᴡɪɴᴋ gif_
│🎋• ${ᴋᴇɪ}yes: _get anime-ʏᴇꜱ gif_
│🎋• ${ᴋᴇɪ}bite: _get anime-ʙɪᴛᴇ gif_
│🎋• ${ᴋᴇɪ}blush: _get anime-ʙʟᴜꜱʜ gif_
│🎋• ${ᴋᴇɪ}bored: _get anime-ʙᴏʀᴇᴅ gif_
│🎋• ${ᴋᴇɪ}confused: _get anime-ᴄᴏɴꜰᴜꜱᴇᴅ gif_
│🎋• ${ᴋᴇɪ}cry: _get anime-ᴄʀʏ gif_
│🎋• ${ᴋᴇɪ}goodnight: _get anime-ɢᴏᴏᴅɴɪɢʜᴛ gif_
│🎋• ${ᴋᴇɪ}happy: _get anime-ʜᴀᴘᴘʏ gif_
│🎋• ${ᴋᴇɪ}hi5: _get anime-ʜɪɢʜꜰɪᴠᴇ gif_
│🎋• ${ᴋᴇɪ}poke: _get anime-ᴘᴏᴋᴇ gif_
│🎋• ${ᴋᴇɪ}sad: _get anime-ꜱᴀᴅ gif_
│🎋• ${ᴋᴇɪ}thinking: _get anime-ᴛʜɪɴᴋɪɴɢ gif_
└───────────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
