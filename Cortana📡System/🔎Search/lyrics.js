`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Second_Try_Lyrics = require(`songlyrics`).default;
const First_Try_Lyrics = require(`genius-lyrics`);
const Third_Try_Lyrics = require(`music-lyrics`);
const GeniusClient = new First_Try_Lyrics.Client();
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ƈօʀȶǟռǟӄǟɨʐօ: `*${ᴋᴇɪ}lyrics* _song name_`,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const Song = `${Needs.join(` `)}`;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
console.log(userBadge);
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
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ƈօʀȶǟռǟ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ƈօʀȶǟռǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ƈօʀȶǟռǟӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Cortana🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
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
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
try {
console.log(`🛸Genius-Lyrics🛸    ⬡==========================⬡`);
const searches = await GeniusClient.songs.search(Song);
const GeniusSong = searches[0];
const Geniuslyrics = await GeniusSong.lyrics();
Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`•🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

────◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
📜 𝗟𝘆𝗿𝗶𝗰𝘀 𝗙𝗼𝘂𝗻𝗱 𝗙𝗼𝗿: _${Song}_
🎹 𝐓𝐢𝐭𝐥𝐞: *${GeniusSong.raw.title}*
💡 𝗟𝘆𝗿𝗶𝗰𝘀 𝗦𝗼𝘂𝗿𝗰𝗲: _Genius-Lyrics_
🔗 𝗟𝘆𝗿𝗶𝗰𝘀 𝗨𝗿𝗹: ${GeniusSong.raw.url}
🛸𝗟𝘆𝗿𝗶𝗰𝘀🛸
${Geniuslyrics}`,
GeniusSong.raw.song_art_image_thumbnail_url
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
console.log(Error);
try {
console.log(`🛸Music-Lyrics🛸    ⬡==========================⬡`);
const lyricssong = await Second_Try_Lyrics(Song);
Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`•🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

────◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
📜 𝗟𝘆𝗿𝗶𝗰𝘀 𝗙𝗼𝘂𝗻𝗱 𝗙𝗼𝗿: _${Song}_
💡 𝗟𝘆𝗿𝗶𝗰𝘀 𝗦𝗼𝘂𝗿𝗰𝗲: ${lyricssong.source.name}
🔗 𝗟𝘆𝗿𝗶𝗰𝘀 𝗨𝗿𝗹: ${lyricssong.source.link}
🛸𝗟𝘆𝗿𝗶𝗰𝘀🛸
${lyricssong.lyrics}`
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
console.log(Error);
try {
} catch (Error) {
console.log(Error);
console.log(
`🛸Song-Lyrics🛸    ⬡==========================⬡`
);
const lyric = await Third_Try_Lyrics.search(Song);
Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`•🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

────◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
📜 𝗟𝘆𝗿𝗶𝗰𝘀 𝗙𝗼𝘂𝗻𝗱 𝗙𝗼𝗿: _${Song}_
🛸𝗟𝘆𝗿𝗶𝗰𝘀🛸
${lyric}`
);
}
}
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

🤧𝐎𝐩𝐩𝐬𝐢𝐞 𝘛𝘳𝘺 𝘈𝘨𝘢𝘪𝘯!
_No Such Song Lyrics Found_`
);
}
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
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