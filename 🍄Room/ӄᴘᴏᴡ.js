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
require("../🤖Utilities/Settings");
let ᴍꜱ = require("parse-ms");
let ӄօʟօʀ = require("chalk");
let { Night } = require("./Night");
let ʀᴇᴠ_ɢɪᴛ = require("simple-git");
let { ShortC } = require("./ShortC");
let { ArtDrw } = require("./ArtDrw");
let { ARanks } = require("./ARanks");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
let Heroku = require("heroku-client");
let { DenyLink } = require("./DenyLink");
let { req } = require("pino-std-serializers");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
let ProTon = require("../🌗Events/ProTon");
let { Caught } = require("../👒Buttons/Caught");
let { ӄօʟօʀs } = require("../🌗Events/ӄօʟօʀs");
let Bagde = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let { simpleGit, CleanOptions } = require("simple-git");
let Ranker = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank");
let LinkList = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/antilink");
let { Image_Button } = require("../👒Buttons/Image_Button");
let usedUser = require("../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser");
let userBanCheck = require("../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let userExhaust = require("../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/userExhaust");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.ӄᴘᴏᴡ = async (Ѷ𝖎𝖔𝖓, ӄryӄnz, Vlkyre) => {
if (Vlkyre.message) {
try {
let ʀᴇᴠ_ɢɪᴛʜᴜʙ = ʀᴇᴠ_ɢɪᴛ();
await ʀᴇᴠ_ɢɪᴛʜᴜʙ.fetch();
let ɴᴇᴡ = await ɢɪᴛᴄᴀʟʟ.log(["𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩..origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"]);
if (ɴᴇᴡ.total != 0) {
await Hoku.delete(
"/apps/" + HEROKU_APP_NAME + "/dynos/" + "worker"
).catch((ᴇʀ) =>
console.log(
ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(ᴇʀ))
)
);
}
} catch (ᴇʀ) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(ᴇʀ)));
}
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
async function ӄ_counter(Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔) {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (ᴇʀ, ꜱᴇʀᴄ) => {
if (ᴇʀ) return Caught(ӄryӄnz, Vlkyre, ᴇʀ);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔,
LastTime: Date.now(),
PermaTime: 10000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
ꜱᴇʀᴄ.Total = ꜱᴇʀᴄ.Total + Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔;
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
}
}
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (ᴇʀ, userRank) => {
if (ᴇʀ) return Caught(ӄryӄnz, Vlkyre, ᴇʀ);
if (!userRank) return;
await ARanks(Vlkyre, ӄryӄnz, Caught, Vlkyre.A𝖗𝖌𝖘);
}
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await ProTon.Vprtn(ӄryӄnz, Vlkyre);
if (
Vlkyre.message &&
!Vlkyre.isSenderAdmin &&
Vlkyre.isBotAdmin &&
!Vlkyre.isSenderTUF
) {
await DenyLink(
Vlkyre,
ӄryӄnz,
Caught,
Image_Button,
Vlkyre.A𝖗𝖌𝖘,
LinkList,
Vlkyre.Body
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await userBanCheck.findOne(
{
ID: Vlkyre.sender,
},
async (ᴇʀ, userBCheck) => {
if (ᴇʀ) return console.log(ᴇʀ);
await userBanCheck.findOne(
{
ID: Vlkyre.chatID,
},
async (ᴇʀ, userGCheck) => {
if (ᴇʀ) return console.log(ᴇʀ);
if (userBCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
if (userGCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.isCommand) {
let MeA = [];
let MeB = [];
let MeC = [];
let MeD = [];
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await ӄryӄnz.groupInviteCode(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await ӄryӄnz.groupInviteCode(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await ӄryӄnz.groupInviteCode(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await ӄryӄnz.groupInviteCode(
"120363042762307739@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇA = await ӄryӄnz.groupMetadata(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇB = await ӄryӄnz.groupMetadata(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇC = await ӄryӄnz.groupMetadata(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇD = await ӄryӄnz.groupMetadata(
"120363042762307739@g.us"
);
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇA.participants.length; i++)
MeA[i] = ʀᴇꜱᴘᴏɴꜱᴇA.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇB.participants.length; i++)
MeB[i] = ʀᴇꜱᴘᴏɴꜱᴇB.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇC.participants.length; i++)
MeC[i] = ʀᴇꜱᴘᴏɴꜱᴇC.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇD.participants.length; i++)
MeD[i] = ʀᴇꜱᴘᴏɴꜱᴇD.participants[i].id;
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (
!Vlkyre.fromMe &&
Vlkyre.isCommand &&
!Vlkyre.isSenderTUF &&
!Vlkyre.Body.includes("help") &&
!Vlkyre.Body.includes("menu") &&
!Vlkyre.Body.includes("rules") &&
!Vlkyre.Body.includes("vlkyre") &&
!Vlkyre.Body.includes("verify") &&
!Vlkyre.Body.includes("support") &&
!Vlkyre.Body.includes("HELP") &&
!Vlkyre.Body.includes("menu") &&
!Vlkyre.Body.includes("RULES") &&
!Vlkyre.Body.includes("VLKYRE") &&
!Vlkyre.Body.includes("SUPPORT") &&
!MeA.includes(Vlkyre.sender) &&
!MeB.includes(Vlkyre.sender) &&
!MeC.includes(Vlkyre.sender) &&
!MeD.includes(Vlkyre.sender)
) {
return await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: `❗𝐕𝐄𝐑𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍❗
@${Vlkyre.sender.split("@")[0]}
*Check The Verification Video:*
youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA`,
contextInfo: { mentionedJid: [Vlkyre.sender] },
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (ᴇʀ, ꜱᴇʀᴄ) => {
if (ᴇʀ) return Caught(ӄryӄnz, Vlkyre, ᴇʀ);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: 0,
LastTime: 0,
PermaTime: 20000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
} else {
await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
return await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
// let ᴄʟᴏᴄᴋ = ᴍꜱ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
// if (ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime) > 0) {
// return;
// ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// } else {
// let ArrayAllowed = [
// "warn",
// "nolink",
// "stoplink",
// "antilink",
// "welcome",
// "welcomer",
// "setwelcome",
// "autorole",
// "autorank",
// "del",
// "demote",
// "promote",
// "group",
// "remove",
// "setdesc",
// "setgpfp",
// "tagall",
// "admins",
// "ban",
// "unban",
// "reboot",
// "dbrem",
// "dataclean",
// "purgedata",
// "join",
// "leave",
// "support",
// "bcgroup",
// "bc",
// "sp",
// "mod",
// "mods",
// "repo",
// "githubrepo",
// "repository",
// "dev",
// "devs",
// "support",
// "official",
// "rule",
// "rules",
// "h",
// "how",
// "help",
// "menu",
// "allmenu",
// "command",
// "commands",
// "BOTSUPPORT",
// "krakinzlab",
// "vlkyre",
// "KRAKINZLAB",
// "VLKYRE",
// "HELP",
// "RULES",
// "animationmenu",
// "animemenu",
// "audioFiltermenu",
// "convertermenu",
// "downloadermenu",
// "Gamemenu",
// "Groupmenu",
// "Hentaimenu",
// "nsfwmenu",
// "ownermenu",
// "randommenu",
// "storemenu",
// "webmenu",
// "ytfiltermenu",
// ];
// ꜱᴇʀᴄ.LastTime = Date.now();
// await ꜱᴇʀᴄ.save().catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
// if (ArrayAllowed.includes(Vlkyre.commandName)) {
// console.log("🕊️Default Continue!");
// await ӄryӄnz.sendPresenceUpdate("composing",Vlkyre.chatID);
// return await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
// ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// } else {
// await userExhaust.findOne(
// {
// ExhaustUser: Vlkyre.sender,
// },
// async (ᴇʀ, ᴇx) => {
// if (ᴇʀ) return console.log(ᴇʀ.message);
// if (!ᴇx) {
// new userExhaust({
// ExhaustUser: Vlkyre.sender,
// ExhaustTotal: 20,
// ExhaustLastTime: Date.now(),
// ExhaustPermTime: 86400000,
// }).save().catch((ᴇʀ) => console.log(ᴇʀ.message));
// await Image_Button(
// ӄryӄnz,
// Vlkyre,
// Vlkyre.A𝖗𝖌𝖘,
// "./👗Skins/KrakinzLab.png",
// `💡𝐋𝐢𝐦𝐢𝐭: 20/20commands Left per 24hrs.
// After you exhaust all 20 free commands either Join Discord to be able to use bot infinitely or wait for 24hrs.
// ❣️𝐃𝐢𝐬𝐜𝐨𝐫𝐝: https://discord.gg/W5cE5UE3VH
// `
// );
// await ӄryӄnz.sendPresenceUpdate("composing",Vlkyre.chatID);
// await ArtDrw(
// ӄryӄnz,
// Vlkyre,
// "20",
// "❣️NEW Continue!"
// );
// await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
// return console.log(ᴇx);
// ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// } else {
// let Time = ᴍꜱ(ᴇx.ExhaustPermTime -(Date.now() - ᴇx.ExhaustLastTime));
// if (Time.hours > 0 && ᴇx.ExhaustTotal == 0) {
// console.log("❌NOT 24hrs But Limit Exhausted!");
// await Image_Button(
// ӄryӄnz,
// Vlkyre,
// Vlkyre.A𝖗𝖌𝖘,
// "./👗Skins/KrakinzLab.png",
// `❌𝐄𝐱𝐡𝐚𝐮𝐬𝐭𝐞𝐝: You've Exhausted Free Daily _20commands_ Limit.
// Join Discord to be able to use bot infinitely or wait for
// 💡𝐖𝐚𝐢𝐭: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s.
// ❣️𝐃𝐢𝐬𝐜𝐨𝐫𝐝: https://discord.gg/W5cE5UE3VH
// `
// );
// return console.log(ᴇx);
// ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// } else if (Time.hours == 0) {
// ᴇx.ExhaustTotal = 20;
// ᴇx.ExhaustLastTime = Date.now();
// await ᴇx.save().catch((ᴇʀ) => console.log(ᴇʀ.message));
// await ӄryӄnz.sendPresenceUpdate("composing",Vlkyre.chatID);
// await ArtDrw(
// ӄryӄnz,
// Vlkyre,
// ᴇx.ExhaustTotal,
// "⏰YES 24hrs && Limit Exhausted So Reset!"
// );
// await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
// return console.log(ᴇx);
// ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// } else {
// ᴇx.ExhaustTotal = ᴇx.ExhaustTotal - 1;
// await ᴇx.save().catch((ᴇʀ) => console.log(ᴇʀ.message));
// await ӄryӄnz.sendPresenceUpdate("composing",Vlkyre.chatID);
// await ArtDrw(
// ӄryӄnz,
// Vlkyre,
// ᴇx.ExhaustTotal,
// "💚YES Continue But Limit -1!"
// );
// await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
// return console.log(ᴇx);
// }
// }
// }
// );
// }
// }
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
