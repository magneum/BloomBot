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
const Cortana_Text_But = async (ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, MainText) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
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
ӄʀǟӄɨռʐ
.sendMessage(ƈօʀȶǟռǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
})
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
ӄʀǟӄɨռʐ
.sendMessage(ƈօʀȶǟռǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
})
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_Image_But = async (ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, MainText, MediaUrl) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.image,
{ mimetype: Mimetype.png }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.image,
{ mimetype: Mimetype.png }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_Video_But = async (ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, MainText, MediaUrl) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/mp4` }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/mp4` }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_GIF_But = async (ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, MainText, MediaUrl) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/gif` }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/gif` }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
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
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_VideoAudio_But = async (
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
MainText,
MediaUrl
) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
}
const media = ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.mp4Audio,
{ mimetype: `audio/mp4` }
);
const buttonMessages = {
videoMessage: media.message.videoMessage,
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
headerType: 5,
};
ӄʀǟӄɨռʐ
.sendMessage(ƈօʀȶǟռǟ.chatId, buttonMessages, MessageType.buttonsMessage, {
mimetype: Mimetype.mp4Audio,

quoted: chat,
})
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Cortana_Location_But = async (
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
MainText,
MediaUrl
) => {
try {
if (ƈօʀȶǟռǟ.isReply) {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
} else {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
}
const media = ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: MediaUrl },
MessageType.location
);
const buttonMessages = {
locationMessage: media.message.locationMessage,
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
headerType: 6,
};
ӄʀǟӄɨռʐ
.sendMessage(ƈօʀȶǟռǟ.chatId, buttonMessages, MessageType.buttonsMessage, {
quoted: chat,
})
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
};
`⬡🛸⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
MTB: Cortana_Text_But,
MGB: Cortana_GIF_But,
MIB: Cortana_Image_But,
MVB: Cortana_Video_But,
MLB: Cortana_Location_But,
MAB: Cortana_VideoAudio_But,
};
`|🛸|`;
`|🛸|`;
`|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
