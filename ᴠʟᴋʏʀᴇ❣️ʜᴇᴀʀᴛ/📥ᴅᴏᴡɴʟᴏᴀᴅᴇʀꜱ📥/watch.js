`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Buttons = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Buttons`);
const ᴠʟᴋʏʀᴇ_Static = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const FFmpegVideo = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/FFmpegVideo`);
const cleanRF = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ffmpeg = require("fluent-ffmpeg");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
const ytIdRegex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ᴠʟᴋʏʀᴇӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _name/youtube link_

🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? _${ᴋᴇɪ}ytsearch_
╔◇꧁༺ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬 ༻꧂
║
║•  ${ᴋᴇɪ}watch: 10m (fastest)
║•  ${ᴋᴇɪ}stream: 20m (longest) 
╚══════════༻꧂`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/[+ ]/g, "");
const FinalName = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
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
if (Needs.includes("yout")) {
if (!ytIdRegex.test(Needs[0])) {
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
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const Bagde = require(`../../ᴠʟᴋʏʀᴇ🥠ᴘᴏʀᴛ/badge`);
const ms = require(`parse-ms`);
Bagde.findOne(
{
ID: ᴠʟᴋʏʀᴇ.sender,
},
async (Error, userBadge) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
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
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${ᴘɴᴀᴍᴇ}* ⧉꧂


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
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
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.Limits = userBadge.Limits - 1;
userBadge.value = `True`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
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
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
}
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (!ᴠʟᴋʏʀᴇ.fromMe && userBadge.value === "False") {
let time = ms(
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime)
);
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const LinkFound = await yts(Needs.join(` `));
if (!LinkFound) {
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${ᴘɴᴀᴍᴇ}* ⧉꧂

 
❌𝗘𝗿𝗿𝗼𝗿: No Music Found!

🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? _${ᴋᴇɪ}ytsearch_
╔◇꧁༺ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬 ༻꧂
║
║•  ${ᴋᴇɪ}watch: 10m (fastest)
║•  ${ᴋᴇɪ}stream: 20m (longest) 
╚══════════༻꧂`
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const Videos = LinkFound.videos.slice(0, 1);
Videos.forEach(async function (Found) {
if (Found.seconds > `600`) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${ᴘɴᴀᴍᴇ}* ⧉꧂


❌𝗘𝗿𝗿𝗼𝗿: 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗩𝗶𝗱𝗲𝗼 𝗧𝗵𝗲𝗻 10-𝗺𝗶𝗻𝘂𝘁𝗲𝘀!

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
╚════════════╝

🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? _${ᴋᴇɪ}ytsearch_
╔◇꧁༺ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬 ༻꧂
║
║📥  ${ᴋᴇɪ}watch: 10m (fastest)
║📥  ${ᴋᴇɪ}stream: 20m (longest) 
╚══════════༻꧂`,
Found.thumbnail
);
} else {
ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${ᴘɴᴀᴍᴇ}* ⧉꧂



╔════◇🌿𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁!
║
║🎥 𝗙𝗶𝗹𝗲 𝗧𝘆𝗽𝗲: _Video_
║⏰ 𝗪𝗮𝗶𝘁 𝗧𝗶𝗺𝗲: _Depends on Length of file._
╚════════════╝`,
Found.thumbnail
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
await FFmpegVideo.FFmpegVideo(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
ᴠʟᴋʏʀᴇ,
chat,
Found,
userBadge
);
return;
}
});
}
);
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
