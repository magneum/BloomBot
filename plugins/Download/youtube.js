("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../Core/craft");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
кяуcαℓℓ
) => {
try {
if (!νℓкуяє.args.join(" ")) {
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} song/link_`
);
} else if (νℓкуяє.args.join(" ").includes("yout")) {
if (!νℓкуяє.TubeRegex.test(νℓкуяє.args.join(" "))) {
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} song/link_`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
var Audios = await νℓкуяє.TubeSearch(νℓкуяє.args.join(" "));
if (!Audios) {
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No Music Found!_`
);
}
var oneAudio = Audios.videos.slice(0, 1);
oneAudio.forEach(async function (one) {
if (one.seconds > 1800) {
return await νℓкуяє.imgB(
νℓкуяє,
νcнαт,
`❌𝗘𝗿𝗿𝗼𝗿: _Choose Smaller Audio less then 30mins!_
🍻𝐓𝐢𝐭𝐥𝐞: ${one.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${one.timestamp}`,
one.thumbnail
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var stream = await νℓкуяє.ytdl(one.videoId, {
quality: "highestaudio",
});
var Thumb = await νℓкуяє.getBuffer(one.thumbnail);
await νℓкуяє.imgB(
νℓкуяє,
νcнαт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
🍻𝐓𝐢𝐭𝐥𝐞: ${one.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${one.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${one.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${one.author.name}
🔗𝐋𝐢𝐧𝐤: ${one.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${one.description}`,
one.thumbnail
);
νℓкуяє
.FFmpeg(stream)
.audioBitrate(320)
.toFormat("ipod")
.saveToFile(`${one.videoId}.mp3`)
.on("end", async () => {
await νℓкуяє.sendMessage(
νcнαт.chat,
{
audio: νℓкуяє.fs.readFileSync(`${one.videoId}.mp3`),
contextInfo: {
externalAdReply: {
title: `🍻𝐓𝐢𝐭𝐥𝐞: ${one.title}`,
body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
mediaType: 2,
thumbnail: await νℓкуяє.getBuffer(one.thumbnail),
mediaUrl: one.thumbnail,
},
},
mimetype: `audio/mpeg`,
fileName: `${one.title}.mp3`,
},
{ quoted: νcнαт }
);
});
});
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} catch (error) {
return кяуcαℓℓ(error);
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
