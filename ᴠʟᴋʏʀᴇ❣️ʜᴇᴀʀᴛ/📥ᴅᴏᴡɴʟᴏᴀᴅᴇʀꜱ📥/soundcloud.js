`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Buttons = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Buttons`);
const ᴠʟᴋʏʀᴇ_Static = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/cleanRF`);
const scdl = require("soundcloud-downloader").default;
const _𝔏𝔞𝔟_ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
const SoundScrapper = require("soundcloud-scraper");
const ꜰᴜᴄᴋ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/oShit`);
const ScrapperClient = new SoundScrapper.Client();
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
const SCTrack =
/^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ᴠʟᴋʏʀᴇӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _soundcloud link_`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
let ᴘɴᴀᴍᴇ;
try {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/\@s.whatsapp.net/g, "").replace(/\D/g, "");
} catch {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/\D/g, "");
}
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
var FFmpegFile = `./ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/${Date.now()}_${chat.key.id}.mp3`;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ᴠʟᴋʏʀᴇ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
ʟɴᴀᴍᴇ,
ᴘɴᴀᴍᴇ,
ᴠʟᴋʏʀᴇ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (!SCTrack.test(Needs[0])) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ᴠʟᴋʏʀᴇ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
ʟɴᴀᴍᴇ,
ᴘɴᴀᴍᴇ,
ᴠʟᴋʏʀᴇ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const Bagde = require(`../../ᴠʟᴋʏʀᴇ🥠ᴘᴏʀᴛ/badge`);
const ms = require(`parse-ms`);
Bagde.findOne(
{
ID: ᴠʟᴋʏʀᴇ.sender,
},
async (error, userBadge) => {
if (error) return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
if (!userBadge) {
var newUser = new Bagde({
ID: ᴠʟᴋʏʀᴇ.sender,
Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
value: `True`,
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*

╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║🧈 *Added To DB for _${newScpt}_ command First Time!*
║🦋 _Try ${ᴋᴇɪ}${ᴅꜰɴᴀᴍᴇ} Again!_
╚════════════╝`,
`./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_Mongo.png`
);
} else {
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
var clock =
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime);
if (clock > 0 && userBadge.Limits == 0) {
userBadge.value = `False`;
await userBadge
.save()
.catch((error) =>
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat)
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.Limits = userBadge.Limits - 1;
userBadge.value = `True`;
await userBadge
.save()
.catch((error) =>
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat)
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (clock < 0 && userBadge.Limits == 0) {
if (userBadge.Badge === `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 10;
} else if (userBadge.Badge === `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 20;
} else if (userBadge.Badge === `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 40;
} else if (userBadge.Badge === `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 60;
} else if (userBadge.Badge === `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 80;
} else if (userBadge.Badge === `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 100;
}
userBadge.CurrentLimitTime = Date.now();
userBadge.value = `True`;
await userBadge
.save()
.catch((error) =>
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat)
);
}
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (!ᴠʟᴋʏʀᴇ.fromMe && userBadge.value === "False") {
let time = ms(
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime)
);
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔⧉༻❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
║💡 𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_
╚════════════╝`,
"./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_UnivB.png"
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
await ScrapperClient.getSongInfo(Needs[0])
.then(async (song) => {
await ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║🍻 𝐓𝐢𝐭𝐥𝐞: ${song.title}
║🎵 𝗣𝗹𝗮𝘆𝗲𝗱: ${song.playCount}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${song.duration}
║✒️ 𝐀𝐮𝐭𝐡𝐨𝐫: ${song.author.name}
║👍🏽‍ 𝗟𝗶𝗸𝗲𝘀: ${song.likes}
║💬 𝗖𝗼𝗺𝗺𝗲𝗻𝘁𝘀: ${song.commentsCount}
║⚡ 𝗚𝗲𝗻𝗿𝗲: ${song.genre}
║🔗 𝐋𝐢𝐧𝐤: ${song.trackURL}
╚════════════╝

📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${song.description}`,
song.thumbnail
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const stream = await song.downloadProgressive();
const writer = stream.pipe(fs.createWriteStream(FFmpegFile));
writer.on("finish", async (error) => {
if (error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((error) =>
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat)
);
return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
console.log(`⬡════════| ⭐𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝⭐ |════════⬡`);
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{ quoted: chat, mimetype: "audio/mp4" }
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((error) =>
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat)
);
});
})
.catch(async (error) => {
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
});
}
);
} catch (error) {
return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
