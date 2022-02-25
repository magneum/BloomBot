`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ᴠʟᴋʏʀᴇ_Buttons = require(`./ᴠʟᴋʏʀᴇ_Buttons`);
const { yta } = require("./VariableServers");
const Tinyurl = require("tinyurl-api");
const cleanRF = require(`./cleanRF`);
const ytdl = require("ytdl-core");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
exports.FFmpegAudio = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat, Found, userBadge) => {
const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
let ᴘɴᴀᴍᴇ;
try {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/\@s.whatsapp.net/g, "").replace(/\D/g, "");
} catch {
ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/\D/g, "");
}
var FFmpegFile = `./ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ/${chat.key.id}.mp3`;
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
let { dl_link, thumb, title, filesize, filesizeF } = await yta(Found.url,"id4");
const DirectFile = await Tinyurl(dl_link);
if (filesize > 80000) {
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║❌ 𝗘𝗿𝗿𝗼𝗿: _Choose Smaller Audio File Then 80mb!_
║🔎 𝐒𝐞𝐚𝐫𝐜𝐡 𝐘𝐨𝐮𝐓𝐮𝐛𝐞? _${ᴋᴇɪ}ytsearch_
╚◇╗
╔◇╝
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
║🌐 𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
╚════════════╝`,
Found.thumbnail
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
try {
ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔⧉༻🌿𝐓𝐨𝐩𝐢𝐜: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║🙈 𝐕𝐢𝐞𝐰𝐬: ${Found.views}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
║✒️ 𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
║🫖 𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
║🌐 𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
║🔗 𝐋𝐢𝐧𝐤: ${Found.url}
╚════════════╝

📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
Found.thumbnail
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const downloader = await new Downloader({
url: DirectFile,
directory: `ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ`,
fileName: `${chat.key.id}.mp3`,
cloneFiles: false,
});
try {
await downloader.download();
console.log(`⬡════════| ⭐𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝⭐ |════════⬡`);
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(FFmpegFile),
MessageType.audio,
{ quoted: chat, mimetype: "audio/mp4" }
)
.then(cleanRF.cleanRF(FFmpegFile))
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
} catch (error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + error);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
} catch (error) {
ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*♡「 _@${ᴘɴᴀᴍᴇ}_ 」♡*
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${ꜰɪɴᴀᴍᴇ}
║
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║🙈 𝐕𝐢𝐞𝐰𝐬: ${Found.views}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
║✒️ 𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
║🌐 𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
║🔗 𝐋𝐢𝐧𝐤: ${Found.url}
╚════════════╝

📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
Found.thumbnail
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
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
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
});
}
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
