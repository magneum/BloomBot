("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝖀𝖘𝖆𝖌𝖊) => {
let usedUser = require(`../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
let ᴍꜱᴇᴄ = require("parse-ms");
let ʙᴏᴛ_ᴜꜱᴇᴅ;
let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
await usedUser.findOne(
{
User: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
ʙᴏᴛ_ᴜꜱᴇᴅ = 0
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds
}});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", 𝐕𝐥𝐤𝐲𝐫𝐞.chatID);
await 𝖍𝖆𝖜ӄ
.sendMessage(
𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
{
contextInfo: { mentionedJid: [𝐕𝐥𝐤𝐲𝐫𝐞.sender] },
image: { url: "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞.png" },
caption: `🕊️ *ɴᴀᴍᴇ:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

${𝖀𝖘𝖆𝖌𝖊}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
quoted: 𝐕𝐥𝐤𝐲𝐫𝐞,
}
)
.catch((e) => console.log(e));
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: 𝐕𝐥𝐤𝐲𝐫𝐞.key,
},
};
return await 𝖍𝖆𝖜ӄ
.sendMessage(𝐕𝐥𝐤𝐲𝐫𝐞.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// // ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
// require("../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
// let Fs = require("fs");
// let ᴍꜱᴇᴄ = require("parse-ms");
// let ʀᴀɴᴅᴏᴍᴄ = require("random-material-color");
// let ʀᴀɴᴅᴏᴍᴋ = ʀᴀɴᴅᴏᴍᴄ.getColor();
// let { registerFont, createCanvas, loadImage } = require("canvas");
// let usedUser = require(`../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
// exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝖀𝖘𝖆𝖌𝖊) => {
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Heart_Of_Everything/Heart_Of_Everything.ttf",{ family: "Heart_Of_Everything" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Housttely_Signature/Housttely_Signature.ttf",{ family: "Housttely_Signature" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Fall_is_Coming/Fall_is_Coming.ttf", {family: "Fall_is_Coming",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Slouchy_Brush/Slouchy_Brush.ttf", {family: "Slouchy_Brush",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Kashmir_Rosy/Kashmir_Rosy.otf", {family: "Kashmir_Rosy",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Japanese/Japanese.ttf", {family: "Japanese",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Honeybee/Honeybee.ttf", {family: "Honeybee",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Angeles/Angeles.ttf", {family: "Angeles",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Shalma/Shalma.otf", { family: "Shalma" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Aquire/Aquire.otf", { family: "Aquire" });
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// let W = 1280;
// let H = 720;
// let ᴄᴀɴᴠᴀꜱ = createCanvas(W, H);
// let 𝖈𝖔𝖓𝖙𝖊𝖝𝖙 = ᴄᴀɴᴠᴀꜱ.getContext("2d");
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = ʀᴀɴᴅᴏᴍᴋ;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(0, 0, W, H);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 70pt Kashmir_Rosy";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textAlign = "center";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textBaseline = "top";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// let ᴛᴇxᴛ = "❣️ Hello There ❣️\n" + (𝐕𝐥𝐤𝐲𝐫𝐞.pushName || "ɴᴏ_ɴᴀᴍᴇ");
// let ᴛᴇxᴛᴡɪᴅᴛʜ = 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.measureText(ᴛᴇxᴛ).W;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(600 - ᴛᴇxᴛᴡɪᴅᴛʜ / 2 - 10, 170 - 5, ᴛᴇxᴛᴡɪᴅᴛʜ + 20, 120);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText(ᴛᴇxᴛ, 600, 170);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 50pt Aquire";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText("Valkyrie.com", 650, 600);
// loadImage("./Src/𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘.png").then(async (Cmg) => {
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 140, 515, 200, 200);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 980, 515, 200, 200);
// let CmgB = ᴄᴀɴᴠᴀꜱ.toBuffer("image/png");
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// Fs.writeFileSync("./Vlkyre👒Hat/Valkyrie_com.png", CmgB).then(async () => {
// let ʙᴏᴛ_ᴜꜱᴇᴅ;
// let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
// await usedUser.findOne(
// {
// User: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
// },
// async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
// if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, 𝕰𝖗𝖗𝖔𝖗);
// if (!ꜱᴇʀᴄ) {
// ʙᴏᴛ_ᴜꜱᴇᴅ = 0;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0;
// } else {
// let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
// ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds;
// }
// }
// );
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", 𝐕𝐥𝐤𝐲𝐫𝐞.chatID);
// await 𝖍𝖆𝖜ӄ
// .sendMessage(
// 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
// {
// contextInfo: { mentionedJid: [𝐕𝐥𝐤𝐲𝐫𝐞.sender] },
// image: { url: "./Valkyrie_com.png" },
// caption: `🕊️ *ɴᴀᴍᴇ:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

// ${𝖀𝖘𝖆𝖌𝖊}`,
// footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
// buttons: [
// {
// buttonId: prefix + "HELP🦀",
// buttonText: { displayText: prefix + "HELP🦀" },
// type: 1,
// },
// ],
// headerType: 4,
// },
// {
// quoted: 𝐕𝐥𝐤𝐲𝐫𝐞,
// }
// )
// .then(Fs.unlinkSync("./Vlkyre👒Hat/Valkyrie_com.png"))
// .catch((e) => console.log(e));
// let ʀᴇᴀᴄᴛionMessage = {
// ʀᴇᴀᴄᴛ: {
// text: `⚡`,
// key: 𝐕𝐥𝐤𝐲𝐫𝐞.key,
// },
// };
// return await 𝖍𝖆𝖜ӄ
// .sendMessage(𝐕𝐥𝐤𝐲𝐫𝐞.chatID, ʀᴇᴀᴄᴛionMessage)
// .catch((e) => console.log(e));
// });
// });
// };
// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// // ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
