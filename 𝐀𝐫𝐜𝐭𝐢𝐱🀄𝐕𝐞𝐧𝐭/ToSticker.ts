`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
import { Transform } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { writeFile } from "fs/promises";
const Oops = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { downloadContentFromMessage } from "@adiwajshing/baileys";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const ToSticker = async (
client: any,
chat: any,
args: any,
νℓкуяιє: any,
FileID: string,
FileSocket: { message: any; type: any }
): Promise<void> => {
try {
const FileName: string = "./converter-" + FileID;
const ConvertedPath: string = "./sticker-" + FileID + ".webp";
const FileStream: Transform = await downloadContentFromMessage(
FileSocket.message,
FileSocket.type
);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (νℓкуяιє.type === "image" || νℓкуяιє.isReplyImage) {
ffmpeg(FileName)
.outputOptions(["-y", "-vcodec libwebp"])
.videoFilters(
"scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"
)
.save(ConvertedPath)
.on("end", async (error: any) => {
if (error) {
return Oops.VOp(client, chat, νℓкуяιє, error);
}
let ᴋʀᴀᴋɪɴᴢʟᴀʙ = await new Sticker(ConvertedPath, {
type: "full",
pack: args[0] || "ʙʏ",
author: "⌬𝐀𝐫𝐜𝐭𝐢𝐱",
categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
}).build();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (!args) {
await client.sendMessage(
νℓкуяιє.chatId,
`💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐀𝐫𝐜𝐭𝐢𝐱
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
MessageType.text,
{
quoted: true,
}
);
await client
.sendMessage(νℓкуяιє.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(client, chat, νℓкуяιє, error));
await VOID.VOID(FileName, ConvertedPath);
} else {
await client
.sendMessage(νℓкуяιє.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(client, chat, νℓкуяιє, error));
await VOID.VOID(FileName, ConvertedPath);
}
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
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
return Oops.VOp(client, chat, νℓкуяιє, error);
}
let ᴋʀᴀᴋɪɴᴢʟᴀʙ = await new Sticker(ConvertedPath, {
type: "full",
pack: args[0] || "ʙʏ",
author: "⌬𝐀𝐫𝐜𝐭𝐢𝐱",
categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
}).build();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (!args) {
await client.sendMessage(
νℓкуяιє.chatId,
`💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐀𝐫𝐜𝐭𝐢𝐱
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
MessageType.text,
{
quoted: true,
}
);
await client
.sendMessage(νℓкуяιє.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(client, chat, νℓкуяιє, error));
await VOID.VOID(FileName, ConvertedPath);
} else {
await client
.sendMessage(νℓкуяιє.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, MessageType.sticker)
.catch((error: any) => Oops.VOp(client, chat, νℓкуяιє, error));
await VOID.VOID(FileName, ConvertedPath);
}
});
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} catch (error) {
console.log(error);
}
};
export = {
VStk: ToSticker,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
