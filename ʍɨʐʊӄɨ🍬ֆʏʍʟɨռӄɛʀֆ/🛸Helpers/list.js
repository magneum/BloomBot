// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
name: `list`,
description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
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
buttonId: `${ᴋᴇɪ}bugreport`,
buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
type: 1,
},
];
const buttonMessage = {
contentText: `
┌────⭓
│🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🤖ᴀᴅᴅ ᴍɪᴢᴜᴋɪ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ: _${ᴋᴇɪ}request_
│☣️𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
└───────⭓

┌────⭓ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧𝙨
│🔎 ${ᴋᴇɪ}ytsearch 
│🟢 ${ᴋᴇɪ}spotify
│⭕ ${ᴋᴇɪ}play
│⭕ ${ᴋᴇɪ}song
│⭕ ${ᴋᴇɪ}ytaudio
│⭕ ${ᴋᴇɪ}instagram
│📺 ${ᴋᴇɪ}watch 
│📺 ${ᴋᴇɪ}stream 
│📺 ${ᴋᴇɪ}ytvideo
│📺 ${ᴋᴇɪ}instagram
└───────⭓

┌────⭓ 𝘼𝙣𝙞𝙢𝙚 
│🍣 ${ᴋᴇɪ}anime 
│🍣 ${ᴋᴇɪ}ranimewall 
│🍣 ${ᴋᴇɪ}smile 
│🍣 ${ᴋᴇɪ}yes
│🍣 ${ᴋᴇɪ}bite
│🍣 ${ᴋᴇɪ}blush
│🍣 ${ᴋᴇɪ}bored
│🍣 ${ᴋᴇɪ}confused
│🍣 ${ᴋᴇɪ}cry
│🍣 ${ᴋᴇɪ}goodnight
│🍣 ${ᴋᴇɪ}happy
│🍣 ${ᴋᴇɪ}hi5
│🍣 ${ᴋᴇɪ}poke
│🍣 ${ᴋᴇɪ}sad
│🍣 ${ᴋᴇɪ}thinking
│🍣 ${ᴋᴇɪ}cuddle
│🍣 ${ᴋᴇɪ}hug
│🍣 ${ᴋᴇɪ}pat
│🍣 ${ᴋᴇɪ}slap 
│🍣 ${ᴋᴇɪ}wink
│🍣 ${ᴋᴇɪ}angry
│🍣 ${ᴋᴇɪ}baka
│🍣 ${ᴋᴇɪ}bonk
│🍣 ${ᴋᴇɪ}bully
│🍣 ${ᴋᴇɪ}bye
│🍣 ${ᴋᴇɪ}chase
│🍣 ${ᴋᴇɪ}cheer
│🍣 ${ᴋᴇɪ}cringe
│🍣 ${ᴋᴇɪ}dab
│🍣 ${ᴋᴇɪ}dance
│🍣 ${ᴋᴇɪ}die
│🍣 ${ᴋᴇɪ}facepalm
│🍣 ${ᴋᴇɪ}feed
│🍣 ${ᴋᴇɪ}glomp
│🍣 ${ᴋᴇɪ}hold
│🍣 ${ᴋᴇɪ}hate
│🍣 ${ᴋᴇɪ}hi
│🍣 ${ᴋᴇɪ}kill
│🍣 ${ᴋᴇɪ}laugh
│🍣 ${ᴋᴇɪ}lick
│🍣 ${ᴋᴇɪ}love
│🍣 ${ᴋᴇɪ}lurk
│🍣 ${ᴋᴇɪ}nervous
│🍣 ${ᴋᴇɪ}nope
│🍣 ${ᴋᴇɪ}nom
│🍣 ${ᴋᴇɪ}nuzzle
│🍣 ${ᴋᴇɪ}panic
│🍣 ${ᴋᴇɪ}peck
│🍣 ${ᴋᴇɪ}pout
│🍣 ${ᴋᴇɪ}run
│🍣 ${ᴋᴇɪ}sip
│🍣 ${ᴋᴇɪ}shoot
│🍣 ${ᴋᴇɪ}shrug
│🍣 ${ᴋᴇɪ}sleep
│🍣 ${ᴋᴇɪ}smug
│🍣 ${ᴋᴇɪ}stab
│🍣 ${ᴋᴇɪ}stare
│🍣 ${ᴋᴇɪ}tease
│🍣 ${ᴋᴇɪ}tickle
│🍣 ${ᴋᴇɪ}thumbsup
│🍣 ${ᴋᴇɪ}triggered
│🍣 ${ᴋᴇɪ}wag
└───────⭓

┌────⭓ 𝙊𝙬𝙣𝙚𝙧
│🐙 ${ᴋᴇɪ}ban
│🐙 ${ᴋᴇɪ}unban
│🐙 ${ᴋᴇɪ}update
│🐙 ${ᴋᴇɪ}broadcast
│🐙 ${ᴋᴇɪ}bugreport
│🐙 ${ᴋᴇɪ}help 
│🐙 ${ᴋᴇɪ}mizuki
│🐙 ${ᴋᴇɪ}update
│🐙 ${ᴋᴇɪ}broadcast
└───────⭓

┌────⭓ 𝙂𝙧𝙤𝙪𝙥𝙨
│🔰 ${ᴋᴇɪ}promote
│🔰 ${ᴋᴇɪ}demote
│🔰 ${ᴋᴇɪ}spam
│🔰 ${ᴋᴇɪ}invite
│🔰 ${ᴋᴇɪ}lock
│🔰 ${ᴋᴇɪ}unlock 
│🔰 ${ᴋᴇɪ}admins
│🔰 ${ᴋᴇɪ}disappear
│🔰 ${ᴋᴇɪ}groupdp
│🔰 ${ᴋᴇɪ}kick
│🔰 ${ᴋᴇɪ}getdesc
│🔰 ${ᴋᴇɪ}getdp
│🔰 ${ᴋᴇɪ}tagall
│🔰 ${ᴋᴇɪ}setwelcome
│🔰 ${ᴋᴇɪ}antilink
└───────⭓

┌────⭓ 𝙄𝙢𝙖𝙜𝙚
│🧉 ${ᴋᴇɪ}pinterest 
│🧉 ${ᴋᴇɪ}ocr
│🧉 ${ᴋᴇɪ}sticker
│🧉 ${ᴋᴇɪ}carbon
└───────⭓

┌────⭓ 𝙁𝙪𝙣𝙨
│🧀 ${ᴋᴇɪ}lyrics
│🧀 ${ᴋᴇɪ}google
│🧀 ${ᴋᴇɪ}github
│🧀 ${ᴋᴇɪ}beautycheck
│🧀 ${ᴋᴇɪ}joke
│🧀 ${ᴋᴇɪ}meme
│🧀 ${ᴋᴇɪ}translate
│🧀 ${ᴋᴇɪ}tts
│🧀 ${ᴋᴇɪ}weather
│🧀 ${ᴋᴇɪ}ud
└───────⭓

┌────⭓ 𝙋𝙤𝙧𝙣 𝙉𝙎𝙁𝙒
│👅 ${ᴋᴇɪ}rporn
│👅 ${ᴋᴇɪ}tikporn
│👅 ${ᴋᴇɪ}4k
│👅 ${ᴋᴇɪ}blowjob
│👅 ${ᴋᴇɪ}slut
│👅 ${ᴋᴇɪ}milf
│👅 ${ᴋᴇɪ}milk
│👅 ${ᴋᴇɪ}pussy
└───────⭓

┌────⭓ 𝙃𝙚𝙣𝙩𝙖𝙞 𝙉𝙎𝙁𝙒
│🍄 ${ᴋᴇɪ}rporn
│🍄 ${ᴋᴇɪ}ass  
│🍄 ${ᴋᴇɪ}bdsm  
│🍄 ${ᴋᴇɪ}cum  
│🍄 ${ᴋᴇɪ}doujin 
│🍄 ${ᴋᴇɪ}feet  
│🍄 ${ᴋᴇɪ}femdom  
│🍄 ${ᴋᴇɪ}foxgirl  
│🍄 ${ᴋᴇɪ}glasses  
│🍄 ${ᴋᴇɪ}hentai  
│🍄 ${ᴋᴇɪ}maid  
│🍄 ${ᴋᴇɪ}masturbation 
│🍄 ${ᴋᴇɪ}netorare  
│🍄 ${ᴋᴇɪ}orgy 
│🍄 ${ᴋᴇɪ}panties  
│🍄 ${ᴋᴇɪ}pussy 
│🍄 ${ᴋᴇɪ}school  
│🍄 ${ᴋᴇɪ}tentacles 
│🍄 ${ᴋᴇɪ}thighs
│🍄 ${ᴋᴇɪ}uniform
│🍄 ${ᴋᴇɪ}yuri
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!
`,
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
