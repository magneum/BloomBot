`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ᴠʟᴋʏʀᴇ_Buttons = require(`./ᴠʟᴋʏʀᴇ_Buttons`);
const { YouTube_Video } = require(`./Found`);
const vers = require(`../package.json`);
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const ytdl = require("ytdl-core");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
exports.FFmpegVideo = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat, Found, userBadge) => {
var ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/[+ ]/g, "");
var FFmpegFile = `./ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/${chat.key.id}.mp4`;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
YouTube_Video(Found.url).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
TinyURL.shorten(dl_link).then(
async function (DirectFile) {
const downloader = await new Downloader({
url: DirectFile,
directory: `ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ`,
fileName: `${chat.key.id}.mp4`,
cloneFiles: false,
});
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const downloadFFmpegFile = ytdl(Found.url, { quality: "highest" });
const writeStream = fs.createWriteStream(FFmpegFile);
downloadFFmpegFile.pipe(writeStream);
downloadFFmpegFile.on("end", async () => {
console.log(`⬡══════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |══════════⬡`);
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.video,
{ mimetype: "video/mp4" }
);
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
{
contentText: `🪶 𝐇𝐞𝐲: @${ᴘɴᴀᴍᴇ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🍻 𝗧𝗶𝘁𝗹𝗲: ${Found.title}
║🙈 𝗩𝗶𝗲𝘄𝘀: ${Found.views}
║⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
║✒️ 𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
║✒️ 𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
║🦋 𝗗𝗶𝗿𝗲𝗰𝘁-𝗗𝗹: ${DirectFile}
║🔗 𝗟𝗶𝗻𝗸: ${Found.url}
╚════════════╝`,
footerText: `⌜Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ${vers.vers}⌟\n❝ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™❞`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}request`,
buttonText: { displayText: `${ᴋᴇɪ}request` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
}
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((e) => ꜰᴜᴄᴋ.catch(e, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
});
},
async function (e) {
console.log(`⬡══════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + e);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((e) => ꜰᴜᴄᴋ.catch(e, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ꜰᴜᴄᴋ.catch(e, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
);
});
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
