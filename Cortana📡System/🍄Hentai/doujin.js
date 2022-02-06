`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Cortana🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const Downloader = require(`nodejs-file-downloader`);
const ffmpegInstaller = require(`@ffmpeg-installer/ffmpeg`);
const ffprobe = require(`@ffprobe-installer/ffprobe`);
const ffmpeg = require(`fluent-ffmpeg`)()
.setFfprobePath(ffprobe.path)
.setFfmpegPath(ffmpegInstaller.path);
const fs = require(`fs`);
const akaneko = require(`akaneko`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var Raw = await akaneko.nsfw.doujin();
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (
ƈօʀȶǟռǟ.isGroup &&
!ƈօʀȶǟռǟ.fromMe &&
!ƈօʀȶǟռǟ.isSenderDev &&
!ƈօʀȶǟռǟ.isSenderGroupAdmin
) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Admins/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const Bagde = require(`../../Cortana🍃Goose/badge`);
const ms = require(`parse-ms`);
Bagde.findOne(
{
ID: ƈօʀȶǟռǟ.sender,
},
async (Error, userBadge) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!userBadge) {
var newUser = new Bagde({
ID: ƈօʀȶǟռǟ.sender,
Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
value: `True`,
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
`./Cortana☣️Reactor/Cortana_Mongo.png`
);
} else {
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
console.log(userBadge);
var clock =
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime);
if (clock > 0 && userBadge.Limits == 0) {
userBadge.value = `False`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.Limits = userBadge.Limits - 1;
userBadge.value = `True`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
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
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const hold = require("../../Cortana🛰️Server/Hold");
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.fromMe && userBadge.value === "False") {
let time = ms(
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime)
);
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}chat ${time.seconds}s
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (
ƈօʀȶǟռǟ.isGroup &&
!ƈօʀȶǟռǟ.fromMe &&
!ƈօʀȶǟռǟ.isSenderDev &&
!ƈօʀȶǟռǟ.isSenderGroupAdmin
) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Admins/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
console.log(Raw);
try {
if (ƈօʀȶǟռǟ.isGroup) {
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`
╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍄𝐇𝐞𝐧𝐭𝐚𝐢 𝐍𝐒𝐅𝐖
║📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: ✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} (ᴀᴅᴍɪɴ)
╚════════════╝`,
Raw
);
} else {
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`
╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍄𝐇𝐞𝐧𝐭𝐚𝐢 𝐍𝐒𝐅𝐖
║📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: ✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 
╚════════════╝`,
Raw
);
}
} catch (Error) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🤦🏻‍♀️ 𝐎𝐩𝐩𝐬𝐢𝐞: _Try Again Later._
║🐞 𝗕𝘂𝗴: _Api Timeout._
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
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
