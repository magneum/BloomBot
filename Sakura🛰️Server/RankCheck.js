`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
require(`./konfs`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { registerFont } = require(`canvas`);
registerFont(`./Sakura🛰️Server/LobsterTwo-Bold.ttf`, {
family: `LobsterTwo-Bold`,
});
registerFont(`./Sakura🛰️Server/SlouchybrushRegular-eZnEB.ttf`, {
family: `SlouchybrushRegular`,
});
registerFont(`./Sakura🛰️Server/TheHeartOfEverythingDemo-KRdD.ttf`, {
family: `TheHeartOfEverythingDemo`,
});
const Canvas = require("canvas");
var randomMC = require("random-material-color");
const Economy = require(`../Sakura🍃Goose/economy`);
const SakuraExp = require(`../Sakura🍃Goose/experience`);
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
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const RankCheck = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ) => {
try {
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
var expFile =
"./Sakura☕Shop/" +
Date.now().toString() +
աɦօֆɛռȶɦǟȶ.toString() +
".png";
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(աɦօֆɛռȶɦǟȶ);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
let xpAdd;
let Bonus;
SakuraExp.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
serverID: ֆǟӄʊʀǟ.chatId,
},
async (Error, users) => {
if (Error) return console.log(Error);
if (!users) {
var newUsers = new SakuraExp({
ID: աɦօֆɛռȶɦǟȶ,
serverID: ֆǟӄʊʀǟ.chatId,
xp: Math.ceil(Math.random() * 50),
level: 0,
});
await newUsers
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `📜𝐑𝐚𝐧𝐤: @${աɦօֆɛռȶɦǟȶռʊʍ}, Auto-Ranking has Started!`,
footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozenV${vers.vers}_ ⏋`,
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
headerType: 1,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
} else {
let ToNxtLvl;
if (users.level < 5) {
xpAdd = Math.ceil(Math.random() * 50);
ToNxtLvl = 50 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
} else if (users.level >= 5) {
xpAdd = Math.ceil(Math.random() * 45);
ToNxtLvl = 60 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
} else if (users.level >= 10) {
xpAdd = Math.ceil(Math.random() * 40);
ToNxtLvl = 70 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
} else if (users.level >= 20) {
xpAdd = Math.ceil(Math.random() * 35);
ToNxtLvl = 80 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (70 - 10 + 1)) + 10;
} else if (users.level >= 30) {
xpAdd = Math.ceil(Math.random() * 30);
ToNxtLvl = 90 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
} else if (users.level >= 40) {
xpAdd = Math.ceil(Math.random() * 25);
ToNxtLvl = 100 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
} else if (users.level >= 50) {
xpAdd = Math.ceil(Math.random() * 20);
ToNxtLvl = 150 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
} else if (users.level >= 60) {
xpAdd = Math.ceil(Math.random() * 15);
ToNxtLvl = 160 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
} else if (users.level >= 70) {
xpAdd = Math.ceil(Math.random() * 10);
ToNxtLvl = 170 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
} else if (users.level >= 80) {
xpAdd = Math.ceil(Math.random() * 5);
ToNxtLvl = 180 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (18 - 10 + 1)) + 10;
} else if (users.level >= 90) {
xpAdd = Math.ceil(Math.random() * 3);
ToNxtLvl = 190 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
} else if (users.level >= 100) {
xpAdd = Math.ceil(Math.random() * 2);
ToNxtLvl = 200 * Math.pow(2, users.level);
Bonus = Math.floor(Math.random() * (14 - 10 + 1)) + 10;
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (users.xp >= ToNxtLvl) {
let Img;
users.level = users.level + 1;
await users
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
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
const canvas = Canvas.createCanvas(800, 300);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage(Img);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#74037b";
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.font = "50px TheHeartOfEverythingDemo";
ctx.fillStyle = color;
ctx.fillText(`Congrats You Ranked Up!`, 230, 120);
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = color;
ctx.moveTo(220, 135);
ctx.lineTo(690, 135);
ctx.quadraticCurveTo(710, 135, 710, 152.5);
ctx.quadraticCurveTo(710, 170, 690, 170);
ctx.lineTo(220, 170);
ctx.lineTo(220, 135);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(130, 155, 110, 0, Math.PI * 2, true);
ctx.lineWidth = 2;
ctx.fillStyle = color;
ctx.moveTo(220, 135);
ctx.lineTo(220, 170);
ctx.lineTo(220, 135);
ctx.fill();
ctx.font = "30px LobsterTwo-Bold";
ctx.fillStyle = "#000";
ctx.fillText(`Experience: ${users.xp}xp`, 250, 162);
ctx.closePath();
ctx.beginPath();
ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(𝕻𝕻𝖑𝖊𝖙𝖊𝖗);
ctx.drawImage(avatar, 25, 50, 200, 200);
const out = fs.createWriteStream(expFile);
const stream = canvas.createPNGStream();
stream.pipe(out);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
out.on(`finish`, async () => {
await Economy.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userEco) => {
if (Error) return console.log(Error);
if (!userEco) {
var newUser = new Economy({
ID: աɦօֆɛռȶɦǟȶ,
money: 1000,
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
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤: @${աɦօֆɛռȶɦǟȶռʊʍ}, Auto-Opened Your Account!`,
footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozenV${vers.vers}_ ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}shop`,
buttonText: { displayText: `${ᴋᴇɪ}shop` },
type: 1,
},
],
headerType: 1,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
userEco.money = userEco.money + Bonus;
await userEco
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ֆǟӄʊʀǟ.chatId,
fs.readFileSync(expFile),
MessageType.image,
{ mimetype: Mimetype.png }
);
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{
contentText: `✨𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 @${աɦօֆɛռȶɦǟȶռʊʍ}, _𝐋𝐞𝐯𝐞𝐥𝐞𝐝-𝐔𝐏!_
╔◇══════════════◇╗
┊ 𝐑𝐚𝐧𝐤𝐢𝐧𝐠📜𝐒𝐲𝐬𝐭𝐞𝐦
╚◇║
╔◇║
║🥂 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗫𝗣: _${users.xp}xp_
║🍰 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗲𝘃𝗲𝗹: _${users.level}_
║🎂 𝗫𝗽 𝗧𝗼 𝗡𝗲𝘅𝘁 𝗟𝗲𝘃𝗲𝗹: _${ToNxtLvl}xp_
╚════════════╝


╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
╚◇║
╔◇║
║🛵𝗕𝗼𝗻𝘂𝘀: _${Bonus}gold_
║🪙 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money}gold_
╚════════════╝

◇ *The More You Talk, The More Xp+Gold You Gain.You Can Spend The gold in ${ᴋᴇɪ}shop!*

`,
footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozenV${vers.vers}_ ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}rank`,
buttonText: {
displayText: `${ᴋᴇɪ}rank`,
},
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
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return await cleanRF.cleanRF(expFile);
}
);
});
}
users.xp = users.xp + xpAdd;
return await users
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
}
}
);
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
};
module.exports = {
MRC: RankCheck,
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
