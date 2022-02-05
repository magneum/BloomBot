`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Ranker = require(`../../Cortana🍃Goose/autorank`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
const motor = require(`../../Cortana🛰️Server/motor`);
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ƈօʀȶǟռǟӄǟɨʐօ: `${ᴋᴇɪ}autorank _on/off_`,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
const hold = require("../../Cortana🛰️Server/Hold");
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.isGroup) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (ƈօʀȶǟռǟ.isGroup && !ƈօʀȶǟռǟ.isSenderGroupAdmin) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Admins/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (ƈօʀȶǟռǟ.isGroup && !ƈօʀȶǟռǟ.isBotGroupAdmin) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❌𝐃𝐞𝐧𝐢𝐞𝐝: _How Can I Use Admin Only Commands If i am not admin?_
║💡 𝐅𝐢𝐱: _Make Me Admin First!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ƈօʀȶǟռǟ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ƈօʀȶǟռǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ƈօʀȶǟռǟӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Cortana🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
ƈօʀȶǟռǟ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (Needs[0] === `ON` || Needs[0] === `on` || Needs[0] === `On`) {
Ranker.findOne(
{
serverID: ƈօʀȶǟռǟ.chatId,
},
async (Error, server) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!server) {
var newServer = new Ranker({
serverID: ƈօʀȶǟռǟ.chatId,
});
await newServer
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{
url: "https://i.postimg.cc/GtzHrQNr/Cortana-Rank-Catelog.png",
},
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
contentText: `𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ƈօʀȶǟռǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
footerText: `⎿ ©️ 𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐀𝐈 ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}autorank on`,
buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}autorank off`,
buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
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
return;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
} else {
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{
url: "https://i.postimg.cc/GtzHrQNr/Cortana-Rank-Catelog.png",
},
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
contentText: `𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ƈօʀȶǟռǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
footerText: `⎿ ©️ 𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐀𝐈 ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}autorank on`,
buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}autorank off`,
buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
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
}
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (Needs[0] === `OFF` || Needs[0] === `off` || Needs[0] === `Off`) {
Ranker.findOne(
{
serverID: ƈօʀȶǟռǟ.chatId,
},
async (Error, server) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!server) {
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{
url: "https://i.postimg.cc/GtzHrQNr/Cortana-Rank-Catelog.png",
},
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
contentText: `𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ƈօʀȶǟռǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
footerText: `⎿ ©️ 𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐀𝐈 ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}autorank on`,
buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}autorank off`,
buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
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
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
} else {
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{
url: "https://i.postimg.cc/GtzHrQNr/Cortana-Rank-Catelog.png",
},
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
contentText: `𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ƈօʀȶǟռǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
footerText: `⎿ ©️ 𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐀𝐈 ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}autorank on`,
buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}autorank off`,
buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
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
}
);
}
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
