`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Image_Button = require(`../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞☘️𝐊𝐞𝐲𝐬/Image_Button`);
const Video_Button = require(`../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞☘️𝐊𝐞𝐲𝐬/Video_Button`);
const Text_List = require(`../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞☘️𝐊𝐞𝐲𝐬/Text_List`);
import { MessageType } from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/message-type";
const Downloader = require(`nodejs-file-downloader`);
const Oops = require(`../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
import { proto } from "@adiwajshing/baileys";
const VOID = require(`../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/void`);
import Client from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/client";
import νℓкуяιє from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/msb";
const ffmpeg = require(`fluent-ffmpeg`);
const anime = require(`anime-actions`);
import Konf from "../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/config";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
import * as fs from "fs";
import path from "path";
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
export = {
name: dotScrpt,
async handle(
client: Client,
chat: proto.IWebMessageInfo,
νℓкуяιє: νℓкуяιє,
args: string[]
): Promise<void> {
try {
const ʟɴᴀᴍᴇ = νℓкуяιє.sender;
const ᴅꜰɴᴀᴍᴇ = νℓкуяιє.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
await client.getGroupMetaData(νℓкуяιє.chatId, νℓкуяιє);
console.log("💡𝐈𝐧𝐟𝐨: Is Group: " + νℓкуяιє.isGroup);
console.log("💡𝐈𝐧𝐟𝐨: Is Bot Group Admin: " + νℓкуяιє.isBotGroupAdmin);
console.log(
"💡𝐈𝐧𝐟𝐨: Is Sender Group Admin: " + νℓкуяιє.isSenderGroupAdmin
);
console.log("💡𝐈𝐧𝐟𝐨: Is Reply Message: " + νℓкуяιє.replyMessage);
console.log("💡𝐈𝐧𝐟𝐨: Is Text Reply: " + νℓкуяιє.isTextReply);
if (νℓкуяιє.isTextReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
if (Receiver === ʟɴᴀᴍᴇ) {
console.log("💡𝐈𝐧𝐟𝐨: Receiver = Self: " + chat.pushName);
} else {
console.log("💡𝐈𝐧𝐟𝐨: Receiver: " + քɛʀֆօռɢօȶռʊʍ);
}
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
let FinalLink;
var AnimeLink = await anime.happy();
const GotFile = `./${chat.key.id}${Date.now()}.gif`;
const GiveFile = `./${chat.key.id}${Date.now()}.mp4`;
if (!AnimeLink.endsWith(`.gif`) && !AnimeLink.endsWith(`.mp4`)) {
const anime2 = require(`anime-actions`);
FinalLink = await anime2.happy();
} else {
FinalLink = AnimeLink;
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const downloader = await new Downloader({
url: FinalLink,
directory: `./`,
fileName: GotFile,
cloneFiles: false,
});
try {
await downloader
.download()
.then(
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
)
);
} catch (error) {
console.log(`❌𝐄𝐫𝐫𝐨𝐫: 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫: ` + error);
return Oops.VOp(client, chat, νℓкуяιє, error);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (args[0] && args[0].startsWith("@")) {
var TagPerson = args[0].replace(/[^0-9]/g, "");
var TagMention = TagPerson + "@s.whatsapp.net";
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await client
.sendMessage(
νℓкуяιє.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔

🍕𝐅𝐫𝐨𝐦: _${chat.pushName}_
🌭𝐓𝐨: @${TagPerson}`,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ, TagMention] },
}
)
.catch((error) => Oops.VOp(client, chat, νℓкуяιє, error));
return await VOID.VOID(GiveFile, GotFile);
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else if (νℓкуяιє.isTextReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
if (Receiver === ʟɴᴀᴍᴇ) {
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await client
.sendMessage(
νℓкуяιє.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔

🍕𝐅𝐨𝐫: _${chat.pushName}_`,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
}
)
.catch((error) => Oops.VOp(client, chat, νℓкуяιє, error));
return await VOID.VOID(GiveFile, GotFile);
});
} else
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await client
.sendMessage(
νℓкуяιє.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔

🍕𝐅𝐫𝐨𝐦: _${chat.pushName}_
🌭𝐓𝐨: _@${քɛʀֆօռɢօȶռʊʍ}_`,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ, Receiver] },
}
)
.catch((error) => Oops.VOp(client, chat, νℓкуяιє, error));
return await VOID.VOID(GiveFile, GotFile);
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await client
.sendMessage(
νℓкуяιє.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔

🍕𝐅𝐨𝐫: _${chat.pushName}_`,
contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
}
)
.catch((error) => Oops.VOp(client, chat, νℓкуяιє, error));
return await VOID.VOID(GiveFile, GotFile);
});
} catch (error) {
return Oops.VOp(client, chat, νℓкуяιє, error);
}
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;