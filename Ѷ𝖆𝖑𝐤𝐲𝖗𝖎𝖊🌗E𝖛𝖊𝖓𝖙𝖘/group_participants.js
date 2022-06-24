("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const moment = require(`moment-timezone`);
const Ranker = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
const Welcome = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
const group_participants = async (𝖚𝖕𝖉𝖆𝖙𝖊, ӄ𝖚𝖓𝖆𝖎) => {
let 𝖕𝖋𝖕𝖀𝖘𝖊𝖗;
let 𝕷𝖆𝖙𝖊𝖘𝖙 = 𝖚𝖕𝖉𝖆𝖙𝖊.participants[0];
let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(𝖚𝖕𝖉𝖆𝖙𝖊.id);
let 𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊 = await ӄ𝖚𝖓𝖆𝖎.getName(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]);
try {
console.log(𝕷𝖆𝖙𝖊𝖘𝖙);
console.log(𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊);
console.log(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆);
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0], "image");
} catch {
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_𝖕𝖋𝖕𝖀𝖘𝖊𝖗.png";
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
await Welcome.findOne(
{
ID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
},
async (𝕰𝖗𝖗𝖔𝖗, userWel) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (!userWel) return;
if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "add" && !𝕷𝖆𝖙𝖊𝖘𝖙.includes(ӄ𝖚𝖓𝖆𝖎.user.id)) {
console.log(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆);
return await ӄ𝖚𝖓𝖆𝖎
.sendMessage(𝖚𝖕𝖉𝖆𝖙𝖊.id, {
contextInfo: { mentionedJid: [𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]] },
image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
caption: `*『 🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞🥞 』* 
╔══「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║ *💡 ɴᴀᴍᴇ:* @${𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊}
║ *🎐 ɢʀᴏᴜᴘ:* ${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || ""}
║ *🎍 ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛꜱ:* ${𝖚𝖕𝖉𝖆𝖙𝖊.participants.length}
║ *🍀 ᴍᴀᴅᴇ:* ${moment(`${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.creation}` * 1000)
.tz("Asia/Kolkata")
.format("DD/MM/YYYY HH:mm:ss")}
╚═══════╝


*『 🍯𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐍𝐨𝐭𝐞🍯 』* 
${userWel.message}`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "rules",
buttonText: { displayText: prefix + "rules" },
type: 1,
},
],
headerType: 4,
})
.catch((error) => console.log(error));
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
} else if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "add" && 𝕷𝖆𝖙𝖊𝖘𝖙.includes(ӄ𝖚𝖓𝖆𝖎.user.id)) {
console.log(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆);
await ӄ𝖚𝖓𝖆𝖎
.sendMessage(𝖚𝖕𝖉𝖆𝖙𝖊.id, {
image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
caption: `👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, To Admins Of This Group, Some Of Your Members Requested Our Valkyrie HQ to Add Our Bot In This Group.
Have Fun!

╔══「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║ *antilink:* _on/off_
║ *autorank:* _on/off_
╚═══════╝`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "rules",
buttonText: { displayText: prefix + "rules" },
type: 1,
},
],
headerType: 4,
})
.catch((error) => console.log(error));
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
await Welcome.findOne(
{
ID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
},
async (error, userWel) => {
if (error) console.log(error);
if (!userWel) {
var newServer = new Welcome({
ID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
message:
"👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚 New Member!\n👇🏽‍𝐏𝐫𝐞𝐬𝐬 𝐁𝐞𝐥𝐨𝐰 𝐁𝐮𝐭𝐭𝐨𝐧𝐬 𝐓𝐨 𝐒𝐭𝐚𝐫𝐭 𝐔𝐬𝐢𝐧𝐠 𝐀𝐈.👇🏽‍",
});
await newServer.save().catch((error) => console.log(error));
}
}
).catch((error) => console.log(error));
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
return await Ranker.findOne(
{
serverID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
},
async (error, server) => {
if (error) return console.log(error);
if (!server) {
var newServer = new Ranker({
serverID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
value: "ON",
});
await newServer.save().catch((error) => console.log(error));
}
}
).catch((error) => console.log(error));
}
}
);
};
module.exports = {
Vgrpns: group_participants,
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
