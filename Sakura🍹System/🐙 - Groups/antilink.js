`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const LinkList = require(`../../Sakura🍃Goose/antilink`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const motor = require(`../../Sakura🛰️Server/motor`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
name: newScpt,
ֆǟӄʊʀǟӄǟɨʐօ: `${ᴋᴇɪ}antilink <on/off>`,
async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
const hold = require("../../Sakura🛰️Server/Hold");
hold.Hold(ֆǟӄʊʀǟ);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
try {
return Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`*❌ Admins Only | You Are Not Allowed! ❌*`,
_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
_𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (!ֆǟӄʊʀǟ.isGroup) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧  

❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
ꜱᴇɴᴅᴇʀɪᴅ,
ꜱᴇɴᴅᴇʀeceived,
ֆǟӄʊʀǟ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
} else {
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (Needs[0] === `ON` || Needs[0] === `on` || Needs[0] === `On`) {
LinkList.findOne(
{
serverID: ֆǟӄʊʀǟ.chatId,
},
async (err, server) => {
if (err) console.log(err);
if (!server) {
var newServer = new LinkList({
serverID: ֆǟӄʊʀǟ.chatId,
value: "ON",
});
newServer
.save()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(`./Sakura☣️Reactor/Sakura_Antilink.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${ֆǟӄʊʀǟ.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
footerText: `🍹(©️)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}antilink on`,
buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}antilink off`,
buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
}
)
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
} else {
server
.save()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(`./Sakura☣️Reactor/Sakura_Antilink.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${ֆǟӄʊʀǟ.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
footerText: `🍹(©️)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}antilink on`,
buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}antilink off`,
buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
}
)
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
}
}
);
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (Needs[0] === `OFF` || Needs[0] === `off` || Needs[0] === `Off`) {
LinkList.findOne(
{
serverID: ֆǟӄʊʀǟ.chatId,
},
async (err, server) => {
if (err) console.log(err);
if (!server) {
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(`./Sakura☣️Reactor/Sakura_Antilink.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${ֆǟӄʊʀǟ.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
footerText: `🍹(©️)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}antilink on`,
buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}antilink off`,
buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
}
)
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
} else {
server
.delete()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(`./Sakura☣️Reactor/Sakura_Antilink.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${ֆǟӄʊʀǟ.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
footerText: `🍹(©️)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}antilink on`,
buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}antilink off`,
buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
}
)
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
}
}
);
}
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
},
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;

