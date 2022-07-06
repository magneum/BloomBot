("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let ᴍꜱᴇᴄ = require("parse-ms");
let git = require("simple-get")();
let { 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙 } = require("./𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙");
let ProTon = require("../Vlkyre🌗Events/ProTon");
let { Caught } = require("../Vlkyre👒Hat/Caught");
let { ARanks } = require("../Vlkyre🧵Types/ARanks");
let Bagde = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let { DenyLink } = require("../Vlkyre🧵Types/DenyLink");
let Ranker = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank");
let LinkList = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/antilink");
let { Image_Button } = require("../Vlkyre👒Hat/Image_Button");
let usedUser = require("../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser");
let userBanCheck = require("../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.ӄᴘᴏᴡ = async (Ѷ𝖎𝖔𝖓, ӄӄ, Vlkyre) => {
async function ӄ_counter(Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔) {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (error, ꜱᴇʀᴄ) => {
if (error) return Caught(ӄӄ, Vlkyre, error);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔,
LastTime: Date.now(),
PermaTime: 10000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄӄ, Vlkyre, error));
} else {
ꜱᴇʀᴄ.Total = ꜱᴇʀᴄ.Total + Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔;
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((error) => Caught(ӄӄ, Vlkyre, error));
}
}
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.message) {
// await git.fetch();
// let newCommits = await git.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
// if (newCommits.total != 0) {
// let h𝖛𝖑𝖐𝖕 = require("child_process").exec(
// `heroku ps:restart worker -a ${HEROKU_APP_NAME}`
// );
// h𝖛𝖑𝖐𝖕.stderr.pipe(process.stderr);
// h𝖛𝖑𝖐𝖕.on("exit", function (code, signal) {
// if (code) console.log("💡𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
// if (signal) console.log("💡𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
// process.exitCode = 1;
// });
// }
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (error, userRank) => {
if (error) return Caught(ӄӄ, Vlkyre, error);
if (!userRank) return;
await ARanks(Vlkyre, ӄӄ, Caught, Vlkyre.A𝖗𝖌𝖘);
}
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
await ProTon.Vprtn(ӄӄ, Vlkyre);
if (
Vlkyre.message &&
!Vlkyre.isSenderAdmin &&
Vlkyre.isBotAdmin &&
!Vlkyre.isSenderTUF
) {
await DenyLink(
Vlkyre,
ӄӄ,
Caught,
Image_Button,
Vlkyre.A𝖗𝖌𝖘,
LinkList,
Vlkyre.Body
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
await userBanCheck.findOne(
{
ID: Vlkyre.sender,
},
async (error, userBCheck) => {
if (error) return console.log(error);
await userBanCheck.findOne(
{
ID: Vlkyre.chatID,
},
async (error, userGCheck) => {
if (error) return console.log(error);
if (userBCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
if (userGCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
if (Vlkyre.isCommand) {
let { ӄօʟօʀs } = require("../Vlkyre🌗Events/ӄօʟօʀs");
await ӄօʟօʀs(ӄӄ, Vlkyre);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
let MeA = [];
let MeB = [];
let MeC = [];
let MeD = [];
let MeE = [];
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await ӄӄ.groupInviteCode("120363020792949649@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await ӄӄ.groupInviteCode("120363039223842047@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await ӄӄ.groupInviteCode("120363024871653603@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await ӄӄ.groupInviteCode("120363042762307739@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ5 = await ӄӄ.groupInviteCode("120363022161584857@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇA = await ӄӄ.groupMetadata("120363020792949649@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇB = await ӄӄ.groupMetadata("120363039223842047@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇC = await ӄӄ.groupMetadata("120363024871653603@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇD = await ӄӄ.groupMetadata("120363042762307739@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇE = await ӄӄ.groupMetadata("120363022161584857@g.us");
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇA.participants.length; i++)
MeA[i] = ʀᴇꜱᴘᴏɴꜱᴇA.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇB.participants.length; i++)
MeB[i] = ʀᴇꜱᴘᴏɴꜱᴇB.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇC.participants.length; i++)
MeC[i] = ʀᴇꜱᴘᴏɴꜱᴇC.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇD.participants.length; i++)
MeD[i] = ʀᴇꜱᴘᴏɴꜱᴇD.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇE.participants.length; i++)
MeE[i] = ʀᴇꜱᴘᴏɴꜱᴇE.participants[i].id;
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
!Vlkyre.fromMe &&
Vlkyre.isCommand &&
!Vlkyre.isSenderTUF &&
!Vlkyre.Body.includes("how") &&
!Vlkyre.Body.includes("help") &&
!Vlkyre.Body.includes("menu") &&
!Vlkyre.Body.includes("support") &&
!MeA.includes(Vlkyre.sender) &&
!MeB.includes(Vlkyre.sender) &&
!MeC.includes(Vlkyre.sender) &&
!MeD.includes(Vlkyre.sender) &&
!MeE.includes(Vlkyre.sender)
) {
/*
*🕊️Grp A:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ1}
*🕊️Grp B:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ2}
*🕊️Grp C:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ3}
*🕊️Grp D:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ4}
*🕊️Grp E:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ5}
*/
return await Vlkyre.reply(`╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Vlkyre.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
╚═══════╝


❗ 𝐕𝐄𝐑𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 ❗
*Join Any Group Using Below Website and  get verified to use bot anywhere!*
VlkyreAI.krakinzkon.repl.co`);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (error, ꜱᴇʀᴄ) => {
if (error) return Caught(ӄӄ, Vlkyre, error);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: 0,
LastTime: 0,
PermaTime: 15000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄӄ, Vlkyre, error));
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(
ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime)
);
if (ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime) > 0) {
return Vlkyre.reply(
"*❌𝕰𝖗𝖗𝖔𝖗:* You Need To wait for " +
ᴄʟᴏᴄᴋ.seconds +
"secs!"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄӄ, Vlkyre, error));
await Bagde.findOne(
{
ID: Vlkyre.sender,
},
async (error, userBadge) => {
if (error)
return ꜰᴜᴄᴋ.catch(
error,
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
Vlkyre,
KryChat
);
if (!userBadge) {
let newUser = new Bagde({
ID: Vlkyre.sender,
Badge: "🧵Basic 10 Commands",
value: "True",
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser
.save()
.catch((error) =>
Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, util.format(error))
);
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_DB.png",
`🧈Added To DB for Current command First Time!`
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
let clock =userBadge.PermanentLimitTime -(Date.now() - userBadge.CurrentLimitTime);
if (clock > 0 && userBadge.Limits == 0) {
userBadge.value = "False";
await userBadge.save().catch((error) =>Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, error));
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(Vlkyre,ӄӄ,ӄ_counter,Ѷ𝖎𝖔𝖓);
}
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.value = "True";
userBadge.Limits = userBadge.Limits - 1;
await userBadge.save().catch((error) =>Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, error));
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(Vlkyre,ӄӄ,ӄ_counter,Ѷ𝖎𝖔𝖓);
}
if (clock < 0 && userBadge.Limits == 0) {
if (userBadge.Badge === "🧵Basic 10 Commands") userBadge.Limits = 10;
if (userBadge.Badge === "🥉Bronze 20 Commands") userBadge.Limits = 20;
if (userBadge.Badge === "🥈Silver 40 Commands") userBadge.Limits = 40;
if (userBadge.Badge === "🥇Gold 60 Commands") userBadge.Limits = 60;
if (userBadge.Badge === "💍Platinum 80 Commands") userBadge.Limits = 80;
if (userBadge.Badge === "💎Diamond 100 Commands") userBadge.Limits = 100;
userBadge.CurrentLimitTime = Date.now();
userBadge.value = "True";
await userBadge.save().catch((error) =>Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, error));
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(Vlkyre,ӄӄ,ӄ_counter,Ѷ𝖎𝖔𝖓);
}
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (userBadge.value === "False") {
let Time = ᴍꜱᴇᴄ(userBadge.PermanentLimitTime -(Date.now() - userBadge.CurrentLimitTime));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
}
}
);
}
}
}
);
}
}
}
);
}
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
