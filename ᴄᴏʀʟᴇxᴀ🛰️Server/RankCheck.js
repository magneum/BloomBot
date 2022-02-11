`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
require(`./konfs`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { registerFont } = require(`canvas`);
registerFont(`./ᴄᴏʀʟᴇxᴀ🛰️Server/LobsterTwo-Bold.ttf`, {
family: `LobsterTwo-Bold`,
});
registerFont(`./ᴄᴏʀʟᴇxᴀ🛰️Server/SlouchybrushRegular-eZnEB.ttf`, {
family: `SlouchybrushRegular`,
});
registerFont(`./ᴄᴏʀʟᴇxᴀ🛰️Server/TheHeartOfEverythingDemo-KRdD.ttf`, {
family: `TheHeartOfEverythingDemo`,
});
const Canvas = require("canvas");
var randomMC = require("random-material-color");
const Economy = require(`../ᴄᴏʀʟᴇxᴀ🍃Goose/economy`);
const CorlexaExp = require(`../ᴄᴏʀʟᴇxᴀ🍃Goose/experience`);
const cleanRF = require(`./cleanRF`);
const fetch = require(`node-fetch`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const Kolor = require(`chalk`);
const moment = require(`moment-timezone`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var color = randomMC.getColor();
const canvacord = require("canvacord");
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const RankCheck = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆) => {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
CorlexaExp.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
serverID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
},
async (Error, user) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!user) {
var newUsers = new CorlexaExp({
ID: աɦօֆɛռȶɦǟȶ,
serverID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
xp: Math.ceil(Math.random() * 1),
level: 1,
});
await newUsers
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
`📜𝐑𝐚𝐧𝐤: @${աɦօֆɛռȶɦǟȶռʊʍ}, Auto-Ranking has Started!`,
MessageType.text,
{
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
let maxXP = 0;
let xpAdd = 0;
let Bonus = 0;
let ToNxtLvl = 0;
if (user.level < 10) {
maxXP = 500;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 50 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
} else if (user.level >= 15) {
maxXP = 1000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 60 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
} else if (user.level >= 20) {
maxXP = 1500;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 70 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
} else if (user.level >= 25) {
maxXP = 2000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 80 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (70 - 10 + 1)) + 10;
} else if (user.level >= 30) {
maxXP = 2500;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 90 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
} else if (user.level >= 35) {
maxXP = 3000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 100 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
} else if (user.level >= 40) {
maxXP = 3500;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 150 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
} else if (user.level >= 45) {
maxXP = 4000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 160 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
} else if (user.level >= 50) {
maxXP = 4500;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 170 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
} else if (user.level >= 55) {
maxXP = 5000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 180 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (18 - 10 + 1)) + 10;
} else if (user.level >= 80) {
maxXP = 8000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 190 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
} else if (user.level >= 100) {
maxXP = 10000;
xpAdd = Math.ceil(Math.random() * user.level + 2);
ToNxtLvl = 200 * Math.pow(2, user.level);
Bonus = Math.floor(Math.random() * (14 - 10 + 1)) + 10;
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (user.xp >= ToNxtLvl) {
let Img;
user.level = user.level + 1;
await user
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
try {
var ResGot = await fetch(
global.API("https://wall.alphacoders.com/api2.0", "/get.php", {
auth: "3e7756c85df54b78f934a284c11abe4e",
method: "search",
term: "anime landscape",
})
);
var Bson = await ResGot.json();
var ImgBson =
Bson.wallpapers[
Math.floor(Math.random() * Bson.wallpapers.length)
];
Img = ImgBson.url_image;
} catch {
Img = "https://i.postimg.cc/Kc65RLnX/Full.png";
}
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getProfilePicture(աɦօֆɛռȶɦǟȶ);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 =
"https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}
let աɦօֆɛ;
try {
աɦօֆɛ = աɦօֆɛռȶɦǟȶռʊʍ
.substring(2, աɦօֆɛռȶɦǟȶռʊʍ.length - 6)
.replace(/[+ ]/g, "");
} catch {
աɦօֆɛ = Math.floor(0001 + Math.random() * 9999);
}
var expFile = `./ᴄᴏʀʟᴇxᴀ☕ꜱʜᴏᴘ/${Date.now()}r${chat.key.id}.png`;
const rank = new canvacord.Rank()
.setStatus("online")
.setAvatar(𝕻𝕻𝖑𝖊𝖙𝖊𝖗)
.setRequiredXP(maxXP)
.setLevel(user.level)
.setCurrentXP(user.xp)
.setUsername("Ranked Up!")
.setBackground("IMAGE", Img)
.setDiscriminator(`${աɦօֆɛ}`)
.setProgressBar(color, "COLOR");
rank.build().then(async (data) => {
fs.writeFile(expFile, data, async (Error) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
Economy.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userEco) => {
if (Error)
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userEco) {
var newUser = new Economy({
ID: աɦօֆɛռȶɦǟȶ,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(expFile),
MessageType.image,
{ mimetype: Mimetype.png }
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
{
contentText: `✨𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 @${աɦօֆɛռȶɦǟȶռʊʍ}, _𝐋𝐞𝐯𝐞𝐥𝐞𝐝-𝐔𝐏!_`,
footerText: `◣Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚${vers.vers} ☊ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™◥`,
buttons: [
{
buttonId: `${ᴋᴇɪ}rank`,
buttonText: { displayText: `${ᴋᴇɪ}rank` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return await cleanRF.cleanRF(expFile);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else {
userEco.money = userEco.money + Bonus;
await userEco
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(expFile),
MessageType.image,
{ mimetype: Mimetype.png }
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
{
contentText: `✨𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 @${աɦօֆɛռȶɦǟȶռʊʍ}, _𝐋𝐞𝐯𝐞𝐥𝐞𝐝-𝐔𝐏!_`,
footerText: `◣Ⓒ𝐂𝐨𝐫𝐥𝐞𝐱𝐚${vers.vers} ☊ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™◥`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}rank`,
buttonText: { displayText: `${ᴋᴇɪ}rank` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return await cleanRF.cleanRF(expFile);
}
}
);
});
});
}
user.xp = user.xp + xpAdd;
await user
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
};
module.exports = {
MRC: RankCheck,
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
