`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
import Axios from "axios";
import cheerio from "cheerio";
import FormData from "form-data";
import { Transform } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { writeFile } from "fs/promises";
const Oops = require(`../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
import Video_Button from "../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Video_Button";
import { MessageType } from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { downloadContentFromMessage, proto } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const ToStickerVideo = async (
TUF: any,
Fox: any,
ǟʀɢʊʍɛռȶ: any,
Vʟӄʏʀɛ: any,
FileID: string,
FileSocket: { message: any; type: any }
): Promise<void> => {
try {
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
async function ProcM(filePath: any, ConvertedVideo: any) {
try {
const bodyForm: any = new FormData();
bodyForm.append("new-image-url", "");
bodyForm.append("new-image", fs.createReadStream(filePath));
let { data } = await Axios({
method: "post",
url: "https://s6.ezgif.com/webp-to-mp4",
data: bodyForm,
headers: {
"Content-Type": `multipart/form-data boundary=${bodyForm._boundary}`,
},
});
const bodyFormThen: any = new FormData();
var $ = cheerio.load(data);
const file = $('input[name="file"]').attr("value");
const convert = $('input[name="file"]').attr("value");
const gotdata = {
file: file,
convert: convert,
};
bodyFormThen.append("file", gotdata.file);
bodyFormThen.append("convert", gotdata.convert);
let res = await Axios({
method: "post",
url: "https://ezgif.com/webp-to-mp4/" + gotdata.file,
data: bodyFormThen,
headers: {
"Content-Type": `multipart/form-data boundary=${bodyFormThen._boundary}`,
},
});
$ = cheerio.load(res.data);
const result =
"https:" + $("div#output > p.outfile > video > source").attr("src");
return result;
} catch (err) {
console.log(err);
}
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const FileName: string = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/B-" + FileID;
const ConvertedVideo: string = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/A-" + FileID + ".mp4";
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
try {
let res = await ProcM(FileName, ConvertedVideo);
await Video_Button.VVid(
TUF,
Fox,
Vʟӄʏʀɛ,
res,
`💡𝐈𝐧𝐟𝐨: Here is your Sticker To Video Converted File.`
);
return await VOID.VOID(FileName, ConvertedVideo);
} catch (error) {
return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
}
} catch (error) {
console.log(error);
}
};
export = {
VStk: ToStickerVideo,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
