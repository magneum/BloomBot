`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const moment = require(`moment-timezone`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
require(`python-format-js`);
const fs = require(`fs`);
const cleanRF = require(`./cleanRF`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
const vers = require(`../package.json`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const time2 = moment().tz(`Asia/Kolkata`).format(`HH:mm:ss`);
if (time2 < `24:59:00`) {
  var Timers = `𝐍𝐢𝐠𝐡𝐭😴`;
}
if (time2 < `19:00:00`) {
  var Timers = `𝐄𝐯𝐞𝐧𝐢𝐧𝐠🌞`;
}
if (time2 < `18:00:00`) {
  var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧🌄`;
}
if (time2 < `15:00:00`) {
  var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧☀️`;
}
if (time2 < `11:00:00`) {
  var Timers = `𝐌𝐨𝐫𝐧𝐢𝐧𝐠🌅`;
}
if (time2 < `05:00:00`) {
  var Timers = `𝐍𝐢𝐠𝐡𝐭💤`;
}
exports.catch = async (Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart) => {
  var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
  var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
  const defaultnm = ֆǟӄʊʀǟ.commandName;
  const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  `⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
  await ӄʀǟӄɨռʐ.sendMessage(
    ֆǟӄʊʀǟ.chatId,
    {
      contentText: `@${աɦօֆɛռȶɦǟȶռʊʍ} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨,

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🤦🏻‍♀️ 𝐎𝐩𝐩𝐬𝐢𝐞: _Try Again Later._
║🐞 𝗕𝘂𝗴: _Api Timeout._
╚════════════╝`,
      footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 • 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers} ⏋\n⎿ ${Clock} • ${Ping}ms ⏋`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 1,
    },
    MessageType.buttonsMessage,
    {
      quoted: mozart,
      contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
    }
  );
  `⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
  return await ӄʀǟӄɨռʐ.sendMessage(
    ֆǟӄʊʀǟ.Myself,
    {
      contentText: `*🐞Error:* ${Error}`,
      footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 • 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers} ⏋\n⎿ ${Clock} • ${Ping}ms ⏋`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}bugreport`,
          buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
          type: 1,
        },
      ],
      headerType: 1,
    },
    MessageType.buttonsMessage,
    {
      quoted: mozart,
    }
  );
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
