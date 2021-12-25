// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
name: `pornside`,
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
{ url: `https://i.postimg.cc/wM195MYW/mizuki-main.jpg` },
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


┌────⭓ *👅𝙋𝙤𝙧𝙣 𝙉𝙎𝙁𝙒*
│👅• ${ᴋᴇɪ}rporn: _get random porn gif_
│👅• ${ᴋᴇɪ}tikporn: _get random tiktoc porn video_
│👅• ${ᴋᴇɪ}4k: _get random 4k human nsfw image_
│👅• ${ᴋᴇɪ}blowjob: _get random 4k blowjob image_
│👅• ${ᴋᴇɪ}slut: _get random 4k cumSluts image_
│👅• ${ᴋᴇɪ}milf: _get random 4k milf image_
│👅• ${ᴋᴇɪ}milk: _get random 4k milking image_
│👅• ${ᴋᴇɪ}pussy: _get random 4k pussy image_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(4)}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
buttons: buttons,
headerType: 4,
imageMessage: media.message.imageMessage,
};
await ӄʀǟӄɨռʐ
.sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
})
.ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
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
