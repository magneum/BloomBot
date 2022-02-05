`|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🛸|`;
`|🛸|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_Loca = async (ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, MainText) => {
try {
const buttonMessage = {
contentText: MainText,
footerText: `⎿ (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐈 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: ᴋʀʏᴛᴇᴋ-v${vers.vers} ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}faq`,
buttonText: { displayText: `${ᴋᴇɪ}faq` },
type: 1,
},
],
headerType: 1,
};
await ӄʀǟӄɨռʐ
.sendMessage(
"120363039223842047@g.us",
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
await ӄʀǟӄɨռʐ
.sendMessage(
"120363020792949649@g.us",
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
await ӄʀǟӄɨռʐ
.sendMessage(
`917430922909@s.whatsapp.net`,
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return;
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
MSL: Cortana_Loca,
};
