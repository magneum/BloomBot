// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
name: `animemenu`,
async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
console.log(
"🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const media = await ӄʀǟӄɨռʐ.prepareMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{ url: _𝔏𝔞𝔟_.MEE },
MessageType.image,
{
mimetype: Mimetype.jpeg,
}
);
const buttons = [
{
buttonId: `${ᴋᴇɪ}list`,
buttonText: { displayText: `${ᴋᴇɪ}list` },
type: 1,
},
];
const buttonMessage = {
contentText: `•@${ꜱᴇɴᴅᴇʀeceived},
🤖ᴀᴅᴅ ᴍɪᴢᴜᴋɪ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ: _${ᴋᴇɪ}request_


┌────⭓ 𝘼𝙣𝙞𝙢𝙚*  ⦿
│🍣• ${ᴋᴇɪ}anime _search any anime_
│🍣• ${ᴋᴇɪ}ranimewall _get random anime wallpaper_
│🍣• ${ᴋᴇɪ}smile _(ɢɪꜰ)_ 
│🍣• ${ᴋᴇɪ}yes _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}bite _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}blush _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}bored _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}confused _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}cry _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}goodnight _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}happy _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}hi5 _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}poke _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}sad _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}thinking _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}cuddle _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}hug _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}pat _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}slap _(ɢɪꜰ)_ 
│🍣• ${ᴋᴇɪ}wink _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}angry _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}baka _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}bonk _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}bully _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}bye _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}chase _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}cheer _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}cringe _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}dab _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}dance _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}die _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}facepalm _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}feed _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}glomp _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}hold _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}hate _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}hi _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}kill _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}laugh _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}lick _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}love _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}lurk _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}nervous _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}nope _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}nom _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}nuzzle _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}panic _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}peck _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}poke _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}pout _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}run _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}sip _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}shoot _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}shrug _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}sleep _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}smug _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}stab _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}stare _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}tease _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}tickle _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}thumbsup _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}triggered _(ɢɪꜰ)_
│🍣• ${ᴋᴇɪ}wag _(ɢɪꜰ)_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
buttons: buttons,
headerType: 4,
imageMessage: media.message.imageMessage,
};
await ӄʀǟӄɨռʐ
.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
} catch (ℓαвєяяσя) {
await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
console.log(
"⬡==========================⬡    🍁 " +
ℓαвєяяσя +
"🍁    ⬡==========================⬡"
);
}
},
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
