import * as fs from "fs";
const Oops = require(`../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import { MessageType } from "../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";

const Filter_Media = async (
client,
chat,
νℓкуяιє,
FileName,
ConvertedName,
Filter
): Promise<void> => {
try {
require(`child_process`).exec(
`ffmpeg -i ${FileName} ${Filter} ${ConvertedName}`,
async () => {
await client
.sendMessage(
νℓкуяιє.chatId,
fs.readFileSync(ConvertedName),
MessageType.audio
)
.catch((error) => Oops.VOp(client, chat, νℓкуяιє, error));
await VOID.VOID(FileName, ConvertedName);
}
);
} catch (error) {
console.log(error);
}
};
export = {
VFmedia: Filter_Media,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
