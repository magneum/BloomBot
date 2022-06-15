`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const UserPrivate = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const BanPerson = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
import { jidNormalizedUser } from "@adiwajshing/baileys";
const Downloader = require(`nodejs-file-downloader`);
import Client from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const participants_update = async (update: any, ӄ𝖗𝖞ӄ𝖓𝖟: any): Promise<void> => {
let client: Client = new Client(ӄ𝖗𝖞ӄ𝖓𝖟);
const Member_Info = update.participants[0];
if (update.action == "add" && Member_Info.includes(ӄ𝖗𝖞ӄ𝖓𝖟.user.id)) {
await client.sendMessage(
update.id,
{
timestamp: Date(),
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Gold.png" },
caption: `*👋🏻Some Of Your Members Requested Our Arctix HQ to Add Our Bot In This Group.*


╔⧉༻ ⭕𝐅𝐨𝐫 𝐀𝐝𝐦𝐢𝐧𝐬 ꧂
║◇ *antilink:* _on/off_
║◇ *autorank:* _on/off_
╚════════════╝

╔⧉༻ 🧀 𝐃𝐞𝐟𝐚𝐮𝐥𝐭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬! ꧂
║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}help:* _commands of Arctix!_
║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}support:* _official arctix groups!_
╚════════════╝`,
footer: `⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
await Welcome.findOne(
{
ID: update.id,
},
async (error: any, userWel: any) => {
if (error) console.log(error);
if (!userWel) {
var newServer = new Welcome({
ID: update.id,
message: "❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞",
});
await newServer.save().catch((error: any) => console.log(error));
} else {
console.log("data already saved!");
}
}
);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
} else if (update.action == `add` && !Member_Info.includes(ӄ𝖗𝖞ӄ𝖓𝖟.user.id)) {
Welcome.findOne(
{
ID: update.id,
},
async (error, userWel) => {
if (error) console.log(error);
if (!userWel) {
return;
} else {
try {
let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗: string;
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖞ӄ𝖓𝖟.profilePictureUrl(
jidNormalizedUser(`${Member_Info.split("@")[0]}@c.us`)
);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 =
"https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}
const downloader = await new Downloader({
url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
directory: `./`,
fileName: `${Date.now().toString()}.png`,
cloneFiles: false,
});
await downloader.download();
const GroupMemData = await ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(update.jid);
const GroupMemG = GroupMemData.participants.length;
const GroupMemBio = await ӄ𝖗𝖞ӄ𝖓𝖟.getStatus(
update.participants[0],
MessageType.text
);
const ᴘᴘᴡᴇʟᴄᴏᴍᴇ = Member_Info.replace(/[^\d-]/g, "");
await client.sendMessage(
update.id,
{
timestamp: Date(),
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Black.png" },
caption: `🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞: *『@${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}』*
꧁◇══════════════◇꧂
𝗕𝗶𝗼: ${GroupMemBio.status}
𝐌𝐞𝐦𝐛𝐞𝐫𝐳: ${GroupMemG}
🎪 𝐆𝐫𝐨𝐮𝐩: ${GroupMemData.subject}
꧁◇══════════════◇꧂

${userWel.message}`,
footer: `⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
} catch (error) {
console.log(error);
}
}
}
);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
} else if (update.action === `remove`) {
return;
} else {
return;
}
};
export = {
participants_update: participants_update,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
