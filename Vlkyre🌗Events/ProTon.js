("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let Ranker = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
let ServerDB = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/ServerDB`);
let Welcome = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
let ProTon = async (𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞) => {
await ServerDB.findOne(
{
ServerID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
},
async (error, Server) => {
if (error) console.log(error);
if (!Server) {
var newServerID = new ServerDB({
ServerID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
});
await newServerID.save().catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await 𝖍𝖆𝖜ӄ
.sendMessage(
𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
{
image: { url: "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_White.png" },
caption: `*⦓ ©𝐕𝐥𝐤𝐲𝐫𝐞 ༒ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫 ⦔* 
👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, To Admins Of This Group, Some Of Your Members Requested Our Valkyrie HQ to Add Our Bot In This Group.
Have Fun!

╔══「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║ *antilink:* _on/off_
║ *autorank:* _on/off_
╚═══════╝`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
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
mentions: 𝐕𝐥𝐤𝐲𝐫𝐞.participants.map((a) => a.id),
},
{ quoted: 𝐕𝐥𝐤𝐲𝐫𝐞 }
)
.catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await Welcome.findOne(
{
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
},
async (error, userWel) => {
if (error) console.log(error);
if (!userWel) {
var newServer = new Welcome({
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
message:
"👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚 New Member!\n👇🏽‍𝐏𝐫𝐞𝐬𝐬 𝐁𝐞𝐥𝐨𝐰 𝐁𝐮𝐭𝐭𝐨𝐧𝐬 𝐓𝐨 𝐒𝐭𝐚𝐫𝐭 𝐔𝐬𝐢𝐧𝐠 𝐀𝐈.👇🏽‍",
});
await newServer.save().catch((error) => console.log(error));
}
}
).catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
return await Ranker.findOne(
{
serverID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
},
async (error, server) => {
if (error) return console.log(error);
if (!server) {
var newServer = new Ranker({
serverID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
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
Vprtn: ProTon,
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
