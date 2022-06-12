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
const BanPerson = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const Downloader = require(`nodejs-file-downloader`);
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import Client from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/client";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const participants_update = async (update, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇): Promise<void> => {
let client: Client = new Client(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇);
const MemNum = update.participants[0];
if (update.action == `add` && MemNum.includes(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.id)) {
await client.sendMessage(
update.id,
{
timestamp: Date(),
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/νℓкуяιє.png" },
caption: `👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, Some Of Your Members Requested Our Valkyrie HQ to Add Our Bot In This Group.Have Fun!


╔⧉༻ ⭕𝐅𝐨𝐫 𝐀𝐝𝐦𝐢𝐧𝐬 ꧂
║◇ *antilink:* _on/off_
║◇ *autorank:* _on/off_
╚════════════╝

╔⧉༻ 🧀 𝐃𝐞𝐟𝐚𝐮𝐥𝐭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬! ꧂
║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}help:* _commands of Valkyrie!_
║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}rules:* _rules of Valkyrie!_
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
Welcome.findOne(
{
ID: update.id,
},
async (error, userWel) => {
if (error) console.log(error);
if (!userWel) {
var newServer = new Welcome({
ID: update.id,
message: "❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞",
});
await newServer.save().catch((error) => console.log(error));
}
}
);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else if (update.action == `add` && !MemNum.includes(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.id)) {
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
let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getProfilePicture(
`${MemNum.split(`@`)[0]}@c.us`
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
const GroupMemData = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.groupMetadata(update.jid);
const GroupMemG = GroupMemData.participants.length;
const GroupMemBio = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getStatus(
update.participants[0],
MessageType.text
);
const ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.replace(/[^\d-]/g, "");
await client.sendMessage(
update.id,
{
timestamp: Date(),
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/νℓкуяιє.png" },
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
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
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
