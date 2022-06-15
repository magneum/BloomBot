`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import Image_Button from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button";
import Video_Button from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Video_Button";
import Text_List from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Text_List";
import FoxNeeded from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/FoxNeeded";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const Downloader = require(`nodejs-file-downloader`);
const { ytv } = require("../𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/Tube");
const Tinyurl = require("tinyurl-api");
const ytdl = require("ytdl-core");
import * as fs from "fs";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import { proto } from "@adiwajshing/baileys";
import AʀƈȶɨӼ from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import Client from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import Oops from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const TubeVideo = async (
TUF: any,
Fox: any,
AʀƈȶɨӼ: any,
Found: any
): Promise<void> => {
try {
let { dl_link, thumb, title, filesizeF } = await ytv(Found.url, "id4");
let DirectFile: any;
try {
DirectFile = await Tinyurl(dl_link);
} catch (error) {
return Oops.VOp(TUF, Fox, AʀƈȶɨӼ, error);
}
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
await Image_Button.VImg(
TUF,
Fox,
AʀƈȶɨӼ,
`𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${Found.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
Found.thumbnail
);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
try {
var FFmpegFile = `./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/${Fox.key.id}.mp4`;
const downloader = await new Downloader({
url: DirectFile,
directory: `𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞`,
fileName: `${Fox.key.id}.mp4`,
cloneFiles: false,
});
await downloader.download();
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox.message,
contextInfo: {
mentionedJid: [AʀƈȶɨӼ.sender],
},
timestamp: Date(),
video: fs.readFileSync(FFmpegFile),
mimetype: "video/mp4",
caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
├• *Tαɠ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *Nαɱҽ:* ${Fox.pushName}
├• *Cσɱɱαɳԃ:* ${AʀƈȶɨӼ.commandName}
└────────────◇

𝐘𝐨𝐮𝐓𝐮𝐛𝐞📹𝐕𝐢𝐝𝐞𝐨
🍻𝗧𝗶𝘁𝗹𝗲: ${Found.title}
🙈𝗩𝗶𝗲𝘄𝘀: ${Found.views}
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
✒️𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
📅𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
footer: `⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
],
headerType: 5,
},
MessageType.buttonsMessage
)
.then(VOID.VOID(FFmpegFile))
.catch((error: any) => Oops.VOp(TUF, Fox, AʀƈȶɨӼ, error));
} catch (error) {
const downloadFFmpegFile = ytdl(Found.url, {
quality: "highest",
});
const writeStream = fs.createWriteStream(FFmpegFile);
downloadFFmpegFile.pipe(writeStream);
downloadFFmpegFile.on("end", async () => {
console.log(`⬡════════| ⭐ 𝐘𝐓𝐃𝐋 ⭐ |════════⬡`);
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox.message,
contextInfo: {
mentionedJid: [AʀƈȶɨӼ.sender],
},
timestamp: Date(),
video: fs.readFileSync(FFmpegFile),
mimetype: "video/mp4",
caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
├• *Tαɠ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *Nαɱҽ:* ${Fox.pushName}
├• *Cσɱɱαɳԃ:* ${AʀƈȶɨӼ.commandName}
└────────────◇

𝐘𝐨𝐮𝐓𝐮𝐛𝐞📹𝐕𝐢𝐝𝐞𝐨
🍻𝗧𝗶𝘁𝗹𝗲: ${Found.title}
🙈𝗩𝗶𝗲𝘄𝘀: ${Found.views}
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
✒️𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
📅𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
footer: `⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
],
headerType: 5,
},
MessageType.buttonsMessage
)
.then(VOID.VOID(FFmpegFile))
.catch((error: any) => Oops.VOp(TUF, Fox, AʀƈȶɨӼ, error));
});
}

//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
} catch (error) {
console.log(error);
}
};
export = {
VTvdo: TubeVideo,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
