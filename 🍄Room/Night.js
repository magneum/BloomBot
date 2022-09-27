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
let Heroku = require("heroku-client");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
let { DenyLink } = require("./DenyLink");
let ProTon = require("../🌗Events/ProTon");
let { ShortC } = require("./ShortC");
let { req } = require("pino-std-serializers");
let { ӄօʟօʀs } = require("../🌗Events/ӄօʟօʀs");
let { Caught } = require("../👒Buttons/Caught");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
let Bagde = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let Ranker = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank");
let LinkList = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/antilink");
let { simpleGit, CleanOptions } = require("simple-git");
let usedUser = require("../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser");
let userBanCheck = require("../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let { Image_Button } = require("../👒Buttons/Image_Button");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
async function badgeTimeout(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓) {
await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
let FArray = [
"m",
"menu",
"allmenu",
"command",
"commands",
"h",
"how",
"help",
"HELP",
"r",
"rule",
"rules",
"RULES",
"webmenu",
"gamemenu",
"nsfwmenu",
"animemenu",
"ownermenu",
"storemenu",
"groupmenu",
"randommenu",
"hentaimenu",
"ytfiltermenu",
"animationmenu",
"convertermenu",
"downloadermenu",
"audiofiltermenu",
"sp",
"dev",
"devs",
"mod",
"mods",
"moderator",
"support",
"official",
"repo",
"githubrepo",
"repository",
"VLKYRE",
"KRAKINZLAB",
"vlkyre",
"krakinzlab",
"BOTSUPPORT",
"ban",
"unban",
"reboot",
"join",
"leave",
"bcgroup",
"bc",
"sp",
"buy",
"warn",
"nolink",
"stoplink",
"antilink",
"welcome",
"welcomer",
"setwelcome",
"autorole",
"autorank",
"del",
"demote",
"promote",
"group",
"remove",
"setdesc",
"setgpfp",
"tagall",
"admins",
];
if (!FArray.includes(`${Vlkyre.commandName}`)) {
await Bagde.findOne(
{
ID: Vlkyre.sender,
},
async (error, userBadge) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
if (!userBadge) {
let newuserBadge = new Bagde({
ID: Vlkyre.sender,
Badge: "🧵Basic 10 Commands",
value: "True",
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newuserBadge.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
await ӄօʟօʀs(ӄryӄnz, Vlkyre);
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_15AKv5i_omy24uvWcz64NpA.png",
`*🧈Added To DB for Current command First Time!*
⚔️𝗕𝗮𝗱𝗴𝗲: 🧵Basic 
🧀𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: 10 Commands`
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
let Time = ᴍꜱ(userBadge.PermanentLimitTime - (Date.now() - userBadge.CurrentLimitTime));
if (Time > 0 && userBadge.Limits == 0) {
userBadge.value = "False";
await userBadge.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else if (Time > 0 && !userBadge.Limits == 0) {
userBadge.value = "True";
userBadge.Limits = userBadge.Limits - 1;
await userBadge.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else if (Time < 0 && userBadge.Limits == 0) {
if (userBadge.Badge === "🧵Basic 10 Commands") {
userBadge.Limits = 10;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
} else if (userBadge.Badge === "🥉Bronze 20 Commands") {
userBadge.Limits = 20;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
} else if (userBadge.Badge === "🥈Silver 40 Commands") {
userBadge.Limits = 40;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
} else if (userBadge.Badge === "🥇Golden 60 Commands") {
userBadge.Limits = 60;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
} else if (userBadge.Badge === "💍Platinum 80 Commands") {
userBadge.Limits = 80;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
} else if (userBadge.Badge === "💎Diamond 100 Commands") {
serBadge.Limits = 100;
userBadge.value = "True";
userBadge.CurrentLimitTime = Date.now();
}
await userBadge.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else if (userBadge.value === "False") {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
} else {
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
}
}
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed("Default Command Executed!")));
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
}
}
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
return await ɴᴇᴡᴜꜱᴇʀᴄ.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
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
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await ӄryӄnz.groupInviteCode("120363020792949649@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await ӄryӄnz.groupInviteCode("120363039223842047@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await ӄryӄnz.groupInviteCode("120363024871653603@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await ӄryӄnz.groupInviteCode("120363042762307739@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇA = await ӄryӄnz.groupMetadata("120363020792949649@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇB = await ӄryӄnz.groupMetadata("120363039223842047@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇC = await ӄryӄnz.groupMetadata("120363024871653603@g.us");
let ʀᴇꜱᴘᴏɴꜱᴇD = await ӄryӄnz.groupMetadata("120363042762307739@g.us");
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
youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA`,
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
await ɴᴇᴡᴜꜱᴇʀᴄ.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
} 
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
let ᴄʟᴏᴄᴋ = ᴍꜱ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
if (ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime) > 0) {
return Vlkyre.reply("*❌Error:* Wait for 15secs!");
}
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((error) => Caught(ӄryӄnz, Vlkyre, error));
return await badgeTimeout(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
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