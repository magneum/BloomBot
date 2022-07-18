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
let { ARanks } = require("./ARanks");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
let Heroku = require("heroku-client");
let { DenyLink } = require("./DenyLink");
let { 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙 } = require("./𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙");
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
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.ӄᴘᴏᴡ = async (Ѷ𝖎𝖔𝖓, ӄryӄnz, Vlkyre) => {
if (Vlkyre.message) {
try {
let ʀᴇᴠ_ɢɪᴛʜᴜʙ = ʀᴇᴠ_ɢɪᴛ();
await ʀᴇᴠ_ɢɪᴛʜᴜʙ.fetch();
let ɴᴇᴡ = await ɢɪᴛᴄᴀʟʟ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (ɴᴇᴡ.total != 0) {
await Hoku.delete(
"/apps/" + HEROKU_APP_NAME + "/dynos/" + "worker"
).catch((error) =>
console.log(
ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(error))
)
);
}
} catch (error) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(error)));
}
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
async function ӄ_counter(Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔) {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (error, ꜱᴇʀᴄ) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔,
LastTime: Date.now(),
PermaTime: 10000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄryӄnz, Vlkyre, error));
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
ꜱᴇʀᴄ.Total = ꜱᴇʀᴄ.Total + Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔;
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
}
}
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (error, userRank) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
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
!Vlkyre.Body.includes("MENU") &&
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
www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA`,
contextInfo: { mentionedJid: [Vlkyre.sender] },
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (error, ꜱᴇʀᴄ) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: 0,
LastTime: 0,
PermaTime: 15000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄryӄnz, Vlkyre, error));
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱ(
ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime)
);
if (ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime) > 0) {
return Vlkyre.reply(
"*❌𝕰𝖗𝖗𝖔𝖗:* Wait for " + ᴄʟᴏᴄᴋ.seconds + "secs!"
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ
.save()
.catch((error) => Caught(ӄryӄnz, Vlkyre, error));
await ӄօʟօʀs(ӄryӄnz, Vlkyre);
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
let FArray = [
"h",
"how",
"help",
"HELP",
"m",
"allmenu",
"command",
"commands",
"WebMenu",
"GameMenu",
"NsfwMenu",
"AnimeMenu",
"OwnerMenu",
"StoreMenu",
"GroupMenu",
"RandomMenu",
"HentaiMenu",
"YTFilterMenu",
"AnimationMenu",
"ConverterMenu ",
"DownloaderMenu",
"AudioFilterMenu",
"VLKYRE",
"HELP",
"RULES",
"menu",
"admins",
"antilink",
"autorank",
"del",
"demote",
"group",
"invite",
"promote",
"remove",
"setdesc",
"setgpfp",
"setwelcome",
"tagall",
"warn",
"baka",
"bite",
"blush",
"bonk",
"bored",
"confused",
"cry",
"cuddle",
"dance",
"goodnight",
"happy",
"highfive",
"hug",
"kick",
"kill",
"kiss",
"nervous",
"pat",
"poke",
"punch",
"sad",
"scream",
"slap",
"smile",
"stare",
"wave",
"wink",
"yeet",
"yes",
"Test",
"ban",
"bcgroup",
"dbrem",
"dataclean",
"purgedata",
"join",
"leave",
"reboot",
"rules",
"support",
"unban",
"verify",
];
console.log(Vlkyre.commandName);
if (!FArray.includes(Vlkyre.commandName)) {
await Bagde.findOne(
{
ID: Vlkyre.sender,
},
async (error, userBg) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
if (!userBg) {
let newUser = new Bagde({
ID: Vlkyre.sender,
Badge: "🧵Basic 10 Commands",
value: "True",
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser.save();
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(
Vlkyre,
ӄryӄnz,
ӄ_counter,
Ѷ𝖎𝖔𝖓
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
let Time = ᴍꜱ(
userBg.PermanentLimitTime -
(Date.now() - userBg.CurrentLimitTime)
);
if (Time > 0 && userBg.Limits == 0) {
userBg.value = "False";
await userBg.save();
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (Time > 0 && !userBg.Limits == 0) {
userBg.Limits = userBg.Limits - 1;
userBg.value = "True";
await userBg.save();
await ӄօʟօʀs(ӄryӄnz, Vlkyre);
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(
Vlkyre,
ӄryӄnz,
ӄ_counter,
Ѷ𝖎𝖔𝖓
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (Time < 0 && userBg.Limits == 0) {
if (userBg.Badge === "🧵Basic 10 Commands")
userBg.Limits = 10;
if (userBg.Badge === "🥉Bronze 20 Commands")
userBg.Limits = 20;
if (userBg.Badge === "🥈Silver 40 Commands")
userBg.Limits = 40;
if (userBg.Badge === "🥇Golden 60 Commands")
userBg.Limits = 60;
if (userBg.Badge === "💍Platinum 80 Commands")
userBg.Limits = 80;
if (userBg.Badge === "💎Diamond 100 Commands")
userBg.Limits = 100;
userBg.CurrentLimitTime = Date.now();
userBg.value = "True";
await userBg.save();
await ӄօʟօʀs(ӄryӄnz, Vlkyre);
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(
Vlkyre,
ӄryӄnz,
ӄ_counter,
Ѷ𝖎𝖔𝖓
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (userBg.value === "False") {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
}
}
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
await ӄօʟօʀs(ӄryӄnz, Vlkyre);
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(
Vlkyre,
ӄryӄnz,
ӄ_counter,
Ѷ𝖎𝖔𝖓
);
}
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
