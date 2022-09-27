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
let fs = require(`fs`);
let fetch = require("node-fetch");
let Levels = require("discord-xp");
let canvacord = require("canvacord");
let randomMC = require("random-material-color");
let Economy = require(`../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../👒Buttons/Image_Button");
let color = randomMC.getColor();
Levels.setURL(MONGOOSE);
exports.ARanks = async (Vlkyre, ӄryӄnz, Caught, A𝖗𝖌𝖘) => {
const randomXp = Math.floor(Math.random() * 3) + +10;
const user = await Levels.fetch(Vlkyre.sender, Vlkyre.chatID, true);
if (!user) {
await Levels.createUser(Vlkyre.sender, Vlkyre.chatID);
await Levels.setLevel(Vlkyre.sender, Vlkyre.chatID, 1);
await Levels.setXp(Vlkyre.sender, Vlkyre.chatID, 1);
return;
}
const hasLeveledUp = await Levels.appendXp(
Vlkyre.sender,
Vlkyre.chatID,
randomXp
);
if (hasLeveledUp) {
const levelRole = user.level;
var role = "Warrior";
var Amnt = 100;
if (levelRole <= 2) {
var role = "Elite III";
var Amnt = 150;
} else if (levelRole <= 4) {
var role = "Elite II";
var Amnt = 200;
} else if (levelRole <= 6) {
var role = "Elite I";
var Amnt = 250;
} else if (levelRole <= 8) {
var role = "Master IV";
var Amnt = 300;
} else if (levelRole <= 10) {
var role = "Master III";
var Amnt = 350;
} else if (levelRole <= 12) {
var role = "Master II";
var Amnt = 400;
} else if (levelRole <= 14) {
var role = "Master I";
var Amnt = 450;
} else if (levelRole <= 16) {
var role = "Grandmaster V";
var Amnt = 500;
} else if (levelRole <= 18) {
var role = "Grandmaster IV";
var Amnt = 550;
} else if (levelRole <= 20) {
var role = "Grandmaster III";
var Amnt = 600;
} else if (levelRole <= 22) {
var role = "Grandmaster II";
var Amnt = 650;
} else if (levelRole <= 24) {
var role = "Grandmaster I";
var Amnt = 700;
} else if (levelRole <= 26) {
var role = "Epic V";
var Amnt = 750;
} else if (levelRole <= 28) {
var role = "Epic IV";
var Amnt = 800;
} else if (levelRole <= 30) {
var role = "Epic III";
var Amnt = 850;
} else if (levelRole <= 32) {
var role = "Epic II";
var Amnt = 900;
} else if (levelRole <= 34) {
var role = "Epic I";
var Amnt = 950;
} else if (levelRole <= 36) {
var role = "Legend V";
var Amnt = 1000;
} else if (levelRole <= 38) {
var role = "Legend IV";
var Amnt = 1500;
} else if (levelRole <= 40) {
var role = "Legend III";
var Amnt = 2000;
} else if (levelRole <= 42) {
var role = "Legend II";
var Amnt = 2500;
} else if (levelRole <= 44) {
var role = "Legend I";
var Amnt = 3000;
} else if (levelRole <= 46) {
var role = "Mythic";
var Amnt = 4000;
} else if (levelRole <= 50) {
var role = "Mythic Glory";
var Amnt = 5000;
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let expFile = `./🎒Root/${Date.now()}${Vlkyre.key.id}.png`;
let աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
let 𝕯𝖎𝖘𝖕𝖑𝖆𝖞;
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ӄryӄnz.profilePictureUrl(Vlkyre.chatID, `image`);
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = `./👗Skins/Vlkyre.png`;
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let rank = new canvacord.Rank()
.setAvatar(𝕯𝖎𝖘𝖕𝖑𝖆𝖞)
.setCurrentXP(user.xp)
.setRequiredXP(Levels.xpFor(user.level + 1))
.setRank(user.position)
.setLevel(user.level)
.setStatus("online")
.setBackground("IMAGE", Img)
.setProgressBar(color, "COLOR")
.setUsername("Ranker!")
.setDiscriminator(աɦօֆɛ);
rank.build().then(async (data) => {
fs.writeFile(expFile, data, async (Èrrðr) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
await Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return console.log(Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save();
await Image_Button(
ӄryӄnz,
Vlkyre,
A𝖗𝖌𝖘,
expFile,
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞🎉𝐑𝐚𝐧𝐤𝐞𝐫
╚◇══════════◇╝
*🎉LEVEL UP CONGRATS!🎉*
*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*


╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝
🔥𝐁𝐨𝐧𝐮𝐬: ${Amnt}
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!`
);
return await fs.unlinkSync(expFile);
}
`|⬡════════════════════════════════════════════════════════════════════「  Vlkyre 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
userEco.money = userEco.money + Amnt;
userEco.save();
await Image_Button(
ӄryӄnz,
Vlkyre,
A𝖗𝖌𝖘,
expFile,
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞🎉𝐑𝐚𝐧𝐤𝐞𝐫
╚◇══════════◇╝
*🎉LEVEL UP CONGRATS!🎉*
*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*


╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝
🔥𝐁𝐨𝐧𝐮𝐬: ${Amnt}
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`
);
return await fs.unlinkSync(expFile);
}
);
});
});
}
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