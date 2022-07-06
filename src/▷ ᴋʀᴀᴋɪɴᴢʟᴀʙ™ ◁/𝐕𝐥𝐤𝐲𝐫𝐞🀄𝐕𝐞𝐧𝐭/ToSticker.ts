`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
import { Transform } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { writeFile } from "fs/promises";
const Oops = require(`../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
import { MessageType } from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { downloadContentFromMessage } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const ToSticker = async (
TUF: any,
Fox: any,
ǟʀɢʊʍɛռȶ: any,
Vʟӄʏʀɛ: any,
FileID: string,
FileSocket: { message: any; type: any }
): Promise<void> => {
try {
const FileName: string = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/B-" + FileID;
const ConvertedPath: string = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/A-" + FileID + ".webp";
const FileStream: Transform = await downloadContentFromMessage(
FileSocket.message,
FileSocket.type
);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const saveBuffer = async (
FileName: string,
FileStream: Transform
): Promise<void> => {
let buffer = Buffer.from([]);
for await (const chunk of FileStream) {
buffer = Buffer.concat([buffer, chunk]);
}
await writeFile(FileName, buffer);
};
await saveBuffer(FileName, FileStream);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (Vʟӄʏʀɛ.type === "image" || Vʟӄʏʀɛ.isReplyImage) {
ffmpeg(FileName)
.outputOptions(["-y", "-vcodec libwebp"])
.videoFilters(
"scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"
)
.save(ConvertedPath)
.on("end", async (error: any) => {
if (error) {
return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
}
let ᴋʀᴀᴋɪɴᴢʟᴀʙ = await new Sticker(ConvertedPath, {
type: "full",
pack: ǟʀɢʊʍɛռȶ[0] || "ʙʏ",
author: "⌬𝐕𝐥𝐤𝐲𝐫𝐞",
categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
}).build();
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (!ǟʀɢʊʍɛռȶ) {
await TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
`💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐕𝐥𝐤𝐲𝐫𝐞
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
MessageType.text,
{
quoted: true,
}
);
await TUF
.sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
await VOID.VOID(FileName, ConvertedPath);
} else {
await TUF
.sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
await VOID.VOID(FileName, ConvertedPath);
}
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
} else {
ffmpeg(FileName)
.duration(8)
.outputOptions([
"-y",
"-vcodec libwebp",
"-lossless 1",
"-qscale 1",
"-preset default",
"-loop 0",
"-an",
"-vsync 0",
"-s 600x600",
])
.videoFilters(
"scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"
)
.save(ConvertedPath)
.on("end", async (error: any) => {
if (error) {
return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
}
let ᴋʀᴀᴋɪɴᴢʟᴀʙ = await new Sticker(ConvertedPath, {
type: "full",
pack: ǟʀɢʊʍɛռȶ[0] || "ʙʏ",
author: "⌬𝐕𝐥𝐤𝐲𝐫𝐞",
categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
}).build();
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (!ǟʀɢʊʍɛռȶ) {
await TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
`💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐕𝐥𝐤𝐲𝐫𝐞
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
MessageType.text,
{
quoted: true,
}
);
await TUF
.sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
await VOID.VOID(FileName, ConvertedPath);
} else {
await TUF
.sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
await VOID.VOID(FileName, ConvertedPath);
}
});
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
} catch (error) {
console.log(error);
}
};
export = {
VStk: ToSticker,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
