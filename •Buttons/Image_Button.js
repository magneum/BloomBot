("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../•Sandbox/Settings");
let Economy = require(`../•dBase/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
exports.Image_Button = async (ӄryӄnz, Vlkyre, A𝖗𝖌𝖘, M𝖊𝖉𝖎𝖆, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
await Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 500,
daily: Date.now(),
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));

await ӄryӄnz.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
image: { url: "./•Assests/Vlkyre_DB.png" },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
•╚═══════⋑

╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
Try The Command Again.`,
footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
quoted: Vlkyre,
}
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
let ʀᴇᴀᴄᴛ;
if (Vlkyre.isReply) {
var Receiver =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
ʀᴇᴀᴄᴛ = await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
•╚═══════⋑

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Vlkyre.mentionByTag) {
var Receiver =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.mentionedJid
: [];
ʀᴇᴀᴄᴛ = await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
•╚═══════⋑

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
ʀᴇᴀᴄᴛ = await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
•╚═══════⋑

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: `❝ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ❞\n𝖇𝔂 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ [𝟒.𝟒.𝟎]`,
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: ʀᴇᴀᴄᴛ.key,
},
};
console.log(ʀᴇᴀᴄᴛ);
return await ӄryӄnz
.sendMessage(Vlkyre.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
}
}
);
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
