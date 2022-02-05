`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Cortana_Buttons = require(`./Cortana_Buttons`);
const { YouTube_Music } = require(`./youmaker`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const ytdl = require("ytdl-core");
const fs = require(`fs`);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
exports.FFmpegAudio = async (ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat, Found, userBadge) => {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
var FFmpegFile = `./Cortana☕Shop/${Date.now().toString()}_${chat.key.id}.mp3`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🌿𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁!
║⭕ 𝗙𝗶𝗹𝗲 𝗧𝘆𝗽𝗲: _Audio_
║⏰ 𝗪𝗮𝗶𝘁 𝗧𝗶𝗺𝗲: _Depends on Length of file._
╚════════════╝

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║🙈 𝐕𝐢𝐞𝐰𝐬: ${Found.views}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
║✒️ 𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
║🔗 𝐋𝐢𝐧𝐤: ${Found.url}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
╚════════════╝`,
Found.thumbnail
);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
try {
YouTube_Music(Found.url).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
TinyURL.shorten(dl_link).then(
async function (DirectFile) {
require(`child_process`).exec(
`ffmpeg -i "${DirectFile}" "${FFmpegFile}"`,
async (Error) => {
if (Error) {
console.log(
`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
Error
);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
} else {
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
);
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{
quoted: chat,
mimetype: "audio/mp4",
}
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return;
}
}
);
},
async function (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
);
});
} catch (Error) {
const downloadFFmpegFile = ytdl(Found.url, { filter: "audioonly" });
const writeStream = fs.createWriteStream(FFmpegFile);
downloadFFmpegFile.pipe(writeStream);
downloadFFmpegFile.on("end", () => {
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
);
ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{
quoted: chat,
mimetype: "audio/mp4",
}
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return;
});
}
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
