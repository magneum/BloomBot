`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import config from "../𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import fs, { PathLike } from "fs";
import chalk from "chalk";
import { Transform } from "stream";
import { writeFile } from "fs/promises";
import Vʟӄʏʀɛ from "./msb";
import Client from "./TUF";
import { MessageType } from "./message-type";
import { GroupParticipant } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const getCleanedContact = async (
ǟʀɢʊʍɛռȶ: string[],
TUF: Client,
Vʟӄʏʀɛ: Vʟӄʏʀɛ
) => {
var jidNumber = "";
var countryCode = config.CCD;
if (parseInt(ǟʀɢʊʍɛռȶ[0]) === NaN || ǟʀɢʊʍɛռȶ[0][0] === "+" || ǟʀɢʊʍɛռȶ[0][0] === "@") {
if (ǟʀɢʊʍɛռȶ[0][0] === "@" || ǟʀɢʊʍɛռȶ[0][0] === "+") {
jidNumber = ǟʀɢʊʍɛռȶ[0].substring(1, ǟʀɢʊʍɛռȶ[0].length + 1);
} else {
TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
"*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
MessageType.text
);
return undefined;
}
} else {
jidNumber = ǟʀɢʊʍɛռȶ[0];
}

if (jidNumber.length < 8 || jidNumber.length > 13) {
TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
"*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
MessageType.text
);
return undefined;
} else if (jidNumber.length === 10) {
jidNumber = countryCode + jidNumber;
}
console.log(jidNumber);
var isOnWhatsApp = await TUF.ӄ𝖗𝖞ӄ𝖓𝖟.onWhatsApp(jidNumber);
if (isOnWhatsApp === undefined) {
throw "NumberInvalid";
}
return jidNumber;
};
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const deleteFiles = async (...locations: PathLike[]) => {
for (let location of locations) {
fs.unlink(location, (err) => {
if (err) console.log(err);
else {
console.log("\nDeleted file at: " + location);
}
});
}
};
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const performanceTime = async (startTime) => {
var endTime = window.performance.now();
console.log(
`-----------\nExecution time: ${
(endTime - startTime) / 1000
} seconds\n----------`
);
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const isMember = async (chatId: string, groupMembers: GroupParticipant[]) => {
var isMember = false;
if (!(chatId === undefined)) {
for (const index in groupMembers) {
if (chatId == groupMembers[index].id.split("@")[0]) {
isMember = true;
}
}
}
return isMember;
};
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const handleError = async (
err,
TUF,
Vʟӄʏʀɛ,
customMessage = "```Something went wrong. The error has been logged in log chats```"
) => {
console.log(chalk.redBright.bold("[ERROR] " + err));
let data = {
commandName: Vʟӄʏʀɛ.commandName,
fromMe: Vʟӄʏʀɛ.fromMe,
isReply: Vʟӄʏʀɛ.isReply,
isGroup: Vʟӄʏʀɛ.isGroup,
isPm: Vʟӄʏʀɛ.isPm,
isImage: Vʟӄʏʀɛ.isImage,
isBotGroupAdmin: Vʟӄʏʀɛ.isBotGroupAdmin,
isSenderGroupAdmin: Vʟӄʏʀɛ.isSenderGroupAdmin,
isSenderMOD: Vʟӄʏʀɛ.isSenderMOD,
err: err,
};
// TUF.sendMessage(Vʟӄʏʀɛ.chatId, customMessage, MessageType.text);
// TUF.sendMessage(Vʟӄʏʀɛ.logGroup, { text: format(ERROR_TEMPLATE, data) });
};
const saveBuffer = async (fileName: string, stream: Transform) => {
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
await writeFile(fileName, buffer);
};
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const inputSanitization = {
handleError: handleError,
deleteFiles: deleteFiles,
saveBuffer: saveBuffer,
getCleanedContact: getCleanedContact,
isMember: isMember,
};
export default inputSanitization;
export const adminCommands = [
"add",
"demote",
"invite",
"mute",
"promote",
"remove",
"unmute",
"welcome",
"disappear",
"goodbye",
"setdp",
"tagall",
"abl",
"rbl",
];
export const MODCommands = ["block", "unblock"];
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;