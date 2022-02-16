`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const speed = require(`performance-now`);
const vers = require(`../package.json`);
const date = require(`date-and-time`);
const cleanRF = require(`./cleanRF`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
let Timestamp = speed();
const now = new Date();
const fs = require(`fs`);
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_GIF_Static = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  chat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: chat,
          caption:
            `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n\n` + MainText,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: chat,
          caption:
            `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n\n` + MainText,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};

module.exports = {
  MGS: ᴠʟᴋʏʀᴇ_GIF_Static,
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
