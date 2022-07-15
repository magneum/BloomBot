("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let Ranker = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
let ServerDB = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/ServerDB`);
let Welcome = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
let ProTon = async (ӄӄ, Vlkyre) => {
await ServerDB.findOne(
{
ServerID: Vlkyre.chatID,
},
async (error, Server) => {
if (error) console.log(error);
if (!Server) {
var newServerID = new ServerDB({
ServerID: Vlkyre.chatID,
});
await newServerID.save().catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await ӄӄ
.sendMessage(
Vlkyre.chatID,
{
image: { url: "./Vlkyre👗Skins/Vlkyre_LabGreen.png" },
caption: `*⦓ ©Vlkyre ༒ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫 ⦔* 
👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, To Admins Of This Group, Some Of Your Members Requested Our Valkyrie HQ to Add Our Bot In This Group.
Have Fun!

╔══「 Vlkyre 𝐏𝐫𝐨𝐭𝐨® 」
║ *antilink:* _on/off_
║ *autorank:* _on/off_
╚═══════╝`,
footer: "*⦓ ⒸVlkyre ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "BOTRULES",
buttonText: { displayText: prefix + "rules" },
type: 1,
},
{
buttonId: prefix + "BOTSUPPORT",
buttonText: { displayText: prefix + "BOTSUPPORT" },
type: 1,
},
],
headerType: 4,
mentions: Vlkyre.participants.map((a) => a.id),
},
{ quoted: Vlkyre }
)
.catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await Welcome.findOne(
{
ID: Vlkyre.chatID,
},
async (error, userWel) => {
if (error) console.log(error);
if (!userWel) {
var newServer = new Welcome({
ID: Vlkyre.chatID,
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
serverID: Vlkyre.chatID,
},
async (error, server) => {
if (error) return console.log(error);
if (!server) {
var newServer = new Ranker({
serverID: Vlkyre.chatID,
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
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
