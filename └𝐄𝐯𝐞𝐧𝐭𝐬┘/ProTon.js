("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let Ranker = require(`../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
let ServerDB = require(`../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/ServerDB`);
let Welcome = require(`../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
let ProTon = async (ӄryӄnz, Vlkyre) => {
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
await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
image: { url: "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_LabGreen.png" },
caption: `*⦓ ©𝐕𝐥𝐤𝐲𝐫𝐞 ༒ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫 ⦔* 
▷ 𝐕𝐥𝐤𝐲𝐫𝐞!! is a whatsapp userbot with automation,moderation,music,games and 140+ commands!
▷ 𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚!! To Admins Of This Group, Some Of Your Members Requested Our Valkyrie HQ to Add Our Bot In This Group.

┌╔══『 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐯𝐞 』
│║⦁ 💻𝐆𝐢𝐭𝐇𝐮𝐛: github.com/kryknz/vlkyre
│║⦁ 🌐𝐖𝐞𝐛𝐬𝐢𝐭𝐞: Vlkyre.krakinzkon.repl.co
│║⦁ ⭕𝐘𝐨𝐮𝐓𝐮𝐛𝐞: youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA
└╚═══════⋑

┌╔══『 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
│║⦁ *🔗${prefix}antilink* on/off
│║⦁ *🎖️${prefix}autorank* on/off
│║⦁ *❣️setwelcome* text/off
└╚═══════⋑

┌╔══『 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬 』
│║⦁ 🐝${prefix}AnimationMenu
│║⦁ 🐾${prefix}AnimeMenu
│║⦁ 👓${prefix}AudioFilterMenu
│║⦁ 🏝️${prefix}ConverterMenu
│║⦁ 📥${prefix}DownloaderMenu
│║⦁ 💰${prefix}GameMenu
│║⦁ 🔰${prefix}GroupMenu
│║⦁ 🍌${prefix}HentaiMenu
│║⦁ 🍑${prefix}NsfwMenu
│║⦁ 👑${prefix}OwnerMenu
│║⦁ 🏳️‍🌈${prefix}RandomMenu
│║⦁ 🛍️${prefix}StoreMenu
│║⦁ 🌐${prefix}WebMenu
│║⦁ ⭕${prefix}YTFilterMenu
└╚═══════⋑`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
