`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ᴠʟᴋʏʀᴇ_Buttons = require(`./ᴠʟᴋʏʀᴇ_Buttons`);
const { YouTube_Music } = require(`./youmaker`);
const ffmpeg = require("fluent-ffmpeg");
const vers = require(`../package.json`);
const Tinyurl = require("tinyurl-api");
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
exports.FFmpegAudio = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat, Found, userBadge) => {
var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
var FFmpegFile = `./ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/${chat.key.id}.mp3`;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
YouTube_Music(Found.url).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
TinyURL.shorten(dl_link).then(
async function (TUrl) {
const downloader = await new Downloader({
url: TUrl,
directory: `ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ`,
fileName: `${chat.key.id}.mp3`,
cloneFiles: false,
});
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
await downloader.download().then(() => {
console.log(`⬡═════════| 🥂𝐍𝐨𝐝𝐞 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |════════⬡`);
return ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{ quoted: chat, mimetype: "audio/mp4" }
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
});
} catch (Error) {
const downloadFFmpegFile = ytdl(Found.url, { filter: "audioonly" });
const writeStream = fs.createWriteStream(FFmpegFile);
downloadFFmpegFile.pipe(writeStream);
downloadFFmpegFile.on("end", () => {
console.log(`⬡════════| ⭐𝐘𝐓𝐃𝐋 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝⭐ |════════⬡`);
return ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{ quoted: chat, mimetype: "audio/mp4" }
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
});
}
},
async function (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + Error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
);
});
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
