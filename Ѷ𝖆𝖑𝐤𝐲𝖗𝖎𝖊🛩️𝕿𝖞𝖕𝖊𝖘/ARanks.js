`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let fs = require(`fs`);
let fetch = require("node-fetch");
let Levels = require("discord-xp");
let canvacord = require("canvacord");
let randomMC = require("random-material-color");
let { Image_Button } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let color = randomMC.getColor();
Levels.setURL(MONGOOSE);
exports.ARanks = async (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ᴋᴜɴᴀɪ, Caught, A𝖗𝖌𝖘) => {
const randomXp = Math.floor(Math.random() * 3) + + 10;
const user = await Levels.fetch(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, true);
if (!user) {
await Levels.createUser(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
await Levels.setLevel(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, 1);
await Levels.setXp(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, 1);
return;
}
const hasLeveledUp = await Levels.appendXp(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
randomXp
);
if (hasLeveledUp) {
const levelRole = user.level;
var role = "Warrior";
if (levelRole <= 2) {
var role = "Elite III";
} else if (levelRole <= 4) {
var role = "Elite II";
} else if (levelRole <= 6) {
var role = "Elite I";
} else if (levelRole <= 8) {
var role = "Master IV";
} else if (levelRole <= 10) {
var role = "Master III";
} else if (levelRole <= 12) {
var role = "Master II";
} else if (levelRole <= 14) {
var role = "Master I";
} else if (levelRole <= 16) {
var role = "Grandmaster V";
} else if (levelRole <= 18) {
var role = "Grandmaster IV";
} else if (levelRole <= 20) {
var role = "Grandmaster III";
} else if (levelRole <= 22) {
var role = "Grandmaster II";
} else if (levelRole <= 24) {
var role = "Grandmaster I";
} else if (levelRole <= 26) {
var role = "Epic V";
} else if (levelRole <= 28) {
var role = "Epic IV";
} else if (levelRole <= 30) {
var role = "Epic III";
} else if (levelRole <= 32) {
var role = "Epic II";
} else if (levelRole <= 34) {
var role = "Epic I";
} else if (levelRole <= 36) {
var role = "Legend V";
} else if (levelRole <= 38) {
var role = "Legend IV";
} else if (levelRole <= 40) {
var role = "Legend III";
} else if (levelRole <= 42) {
var role = "Legend II";
} else if (levelRole <= 44) {
var role = "Legend I";
} else if (levelRole <= 46) {
var role = "Mythic";
} else if (levelRole <= 50) {
var role = "Mythic Glory";
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let expFile = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${Date.now()}${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.png`;
let աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ᴋᴜɴᴀɪ.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, `image`);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`;
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
rank.build().then(async (data) => {
fs.writeFile(expFile, data, async (error) => {
if (error) return Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, error);
await Image_Button(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
expFile,
`*LEVEL UP CONGRATS! 🎉🎉*
*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*`
);
return await fs.unlinkSync(expFile);
});
});
}
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
