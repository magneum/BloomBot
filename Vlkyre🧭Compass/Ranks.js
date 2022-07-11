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
let fs = require(`fs`);
let fetch = require("node-fetch");
let Levels = require("discord-xp");
let canvacord = require("canvacord");
let randomMC = require("random-material-color");
let color = randomMC.getColor();
Levels.setURL(MONGOOSE);
exports.ARanks = async (Vlkyre, ӄӄ, Caught) => {
let randomXp = Math.floor(Math.random() * 3) + 1;
let user = await Levels.fetch(Vlkyre.sender, Vlkyre.chatID, true);
if (!user) {
await Levels.createUser(Vlkyre.sender, Vlkyre.chatID);
await Levels.setLevel(Vlkyre.sender, Vlkyre.chatID, 1);
await Levels.setXp(Vlkyre.sender, Vlkyre.chatID, 1);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
console.log(user);
let hasLeveledUp = await Levels.appendXp(
Vlkyre.sender,
Vlkyre.chatID,
randomXp
);
if (hasLeveledUp) {
await Levels.setLevel(Vlkyre.sender, Vlkyre.chatID, user.level + 1);
let levelRole = user.level;
var role = `Warrior`;
if (levelRole <= 2) {
var role = `Elite III`;
} else if (levelRole <= 4) {
var role = `Elite II`;
} else if (levelRole <= 6) {
var role = `Elite I`;
} else if (levelRole <= 8) {
var role = `Master IV`;
} else if (levelRole <= 10) {
var role = `Master III`;
} else if (levelRole <= 12) {
var role = `Master II`;
} else if (levelRole <= 14) {
var role = `Master I`;
} else if (levelRole <= 16) {
var role = `Grandmaster V`;
} else if (levelRole <= 18) {
var role = `Grandmaster IV`;
} else if (levelRole <= 20) {
var role = `Grandmaster III`;
} else if (levelRole <= 22) {
var role = `Grandmaster II`;
} else if (levelRole <= 24) {
var role = `Grandmaster I`;
} else if (levelRole <= 26) {
var role = `Epic V`;
} else if (levelRole <= 28) {
var role = `Epic IV`;
} else if (levelRole <= 30) {
var role = `Epic III`;
} else if (levelRole <= 32) {
var role = `Epic II`;
} else if (levelRole <= 34) {
var role = `Epic I`;
} else if (levelRole <= 36) {
var role = `Legend V`;
} else if (levelRole <= 38) {
var role = `Legend IV`;
} else if (levelRole <= 40) {
var role = `Legend III`;
} else if (levelRole <= 42) {
var role = `Legend II`;
} else if (levelRole <= 44) {
var role = `Legend I`;
} else if (levelRole <= 46) {
var role = `Mythic`;
} else if (levelRole <= 50) {
var role = `Mythic Glory`;
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let expFile = `./Vlkyre🎒Bag/${Date.now()}r${Vlkyre.key.id}.png`;
let աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄӄ.profilePictureUrl(Vlkyre.chatID, `image`);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `./Vlkyre👗Skins/Vlkyre.png`;
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
try {
let ResGot = await fetch(
global.API("https://wall.alphacoders.com/api2.0", "/get.php", {
auth: "3e7756c85df54b78f934a284c11abe4e",
method: "search",
term: "anime landscape",
})
);
let Bson = await ResGot.json();
let ImgBson =
Bson.wallpapers[Math.floor(Math.random() * Bson.wallpapers.length)];
Img = ImgBson.url_image;
} catch {
Img = "https://i.postimg.cc/Kc65RLnX/Full.png";
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let rank = new canvacord.Rank()
.setAvatar(𝕻𝕻𝖑𝖊𝖙𝖊𝖗)
.setCurrentXP(user.xp)
.setRequiredXP(Levels.xpFor(user.level + 1))
.setRank(user.position)
.setLevel(user.level)
.setStatus("online")
.setBackground("IMAGE", Img)
.setProgressBar(color, "COLOR")
.setUsername("Ranker!")
.setDiscriminator(աɦօֆɛ);
return await rank.build().then(async (data) => {
fs.writeFile(expFile, data, async (error) => {
if (error) return Caught(ӄӄ, Vlkyre, error);
await ӄӄ
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: expFile },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Vlkyre.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
╚═══════╝


*LEVEL UP!*
Congrats!! 🎉🎉

*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*`,

footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n_ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™_",
buttons: [
{
buttonId: prefix + "rank",
buttonText: { displayText: prefix + "rank" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlkyre,
}
)
.catch((e) => Caught(ӄӄ, Vlkyre, e));
return fs.unlinkSync(expFile);
});
});
}
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