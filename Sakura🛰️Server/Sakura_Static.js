`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
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
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4) * 60;
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_GIF_Static = async (
  ӄʀǟӄɨռʐ,
  mozart,
  ֆǟӄʊʀǟ,
  MainText,
  MediaUrl
) => {
  try {
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = mozart.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      return await ӄʀǟӄɨռʐ
        .sendMessage(ֆǟӄʊʀǟ.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: mozart,
          caption:
            `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 ◈ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozen${vers.vers}_ ⏋\n⎿ 𝐃𝐚𝐭𝐞: _${Clock}_ ⏋\n⎿ 𝐏𝐢𝐧𝐠: _${Ping}ms_ ⏋\n\n` +
            MainText,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      return await ӄʀǟӄɨռʐ
        .sendMessage(ֆǟӄʊʀǟ.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: mozart,
          caption:
            `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 ◈ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozen${vers.vers}_ ⏋\n⎿ 𝐃𝐚𝐭𝐞: _${Clock}_ ⏋\n⎿ 𝐏𝐢𝐧𝐠: _${Ping}ms_ ⏋\n\n` +
            MainText,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
    }
  } catch (Error) {
    console.log(Error);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};

module.exports = {
  MGS: Sakura_GIF_Static,
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
