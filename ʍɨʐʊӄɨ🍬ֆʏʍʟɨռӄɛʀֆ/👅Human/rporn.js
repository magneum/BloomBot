// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ffmpeg = require(`fluent-ffmpeg`);
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
const RandomHub = require("random-hub").RandomHub;
const hub = new RandomHub();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡

module.exports = {
name: `rporn`,
async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var RpornID = chat.key.id;
var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
console.log(
"🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev) {
return Mizuki_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
𝓜𝖎𝖟𝖚ӄ𝖎,
`@${ꜱᴇɴᴅᴇʀeceived}, *❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*


┌────⭓ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧     
│🌶️𝐆𝐫𝐨𝐮𝐩𝐬: _Admins & Devs!_
│🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 _Everyone_
└───────⭓`
).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} else {
const link = hub.getRandomHub();
console.log(link);
const downloader = await new Downloader({
url: link,
directory: `ʍɨʐʊӄɨ🗑️ȶɛʍք`,
fileName: `${FinalName}_${RpornID}.gif`,
cloneFiles: false,
});
await downloader.download();
await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${RpornID}.gif`)
.outputOptions([
"-pix_fmt yuv420p",
"-c:v libx264",
"-movflags +faststart",
"-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
])
.save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${RpornID}.mp4`)
.on("end", async () => {
console.log("Finished");
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${RpornID}.mp4`),
MessageType.video,
{
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
quoted: chat,
mimetype: "video/gif",
caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}

🔗𝐋𝐢𝐧𝐤: ${link}`,
}
)
.then(
fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${RpornID}.gif`),
fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${RpornID}.mp4`)
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
})
.on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
console.log(ℓαвєяяσя);
});
}
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
