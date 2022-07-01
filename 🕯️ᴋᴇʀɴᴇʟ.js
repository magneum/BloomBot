("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let ᴅᴇꜱɢ = require("chalk");
let ʀɪᴍʀᴀꜰ = require("rimraf");
let ɢɪᴛ = require("simple-git")();
let vers = require("./package.json");
async function dcreate() {
let ꜰᴏʟᴅᴇʀꜱ = [
".",
...Object.keys(require("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/ꜱᴘᴀᴄᴇ.json").ꜱᴘᴀᴄᴇ),
];
for (let ꜰᴏʟᴅᴇʀ of ꜰᴏʟᴅᴇʀꜱ) {
ʀɪᴍʀᴀꜰ(ꜰᴏʟᴅᴇʀ, function (ERROR) {
if (ERROR) return console.log(ᴅᴇꜱɢ.bgRed("-rm"), ERROR);
console.log(ᴅᴇꜱɢ.bgGreen("-rm"), ꜰᴏʟᴅᴇʀ);
});
}
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
async function create() {
var h𝖛𝖑𝖐𝖕 = require("child_process").exec("git pull");
h𝖛𝖑𝖐𝖕.stderr.pipe(process.stderr);
h𝖛𝖑𝖐𝖕.on("exit", function (code, signal) {
if (code) console.log(ᴅᴇꜱɢ.red(code));
if (signal) console.log(ᴅᴇꜱɢ.blue(signal));
process.exitCode = 1;
});
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
async function fcreate() {
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
var h𝖛𝖑𝖐𝖕 = require("child_process").exec(
`git pull && git add --all && git commit -am "「 Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 」 : ${
vers.vers
} 🧆 𝐃𝐚𝐭𝐞: ${
year +
"-" +
month +
"-" +
date +
" " +
hours +
":" +
minutes +
":" +
seconds
} " && git push`
);
h𝖛𝖑𝖐𝖕.stderr.pipe(process.stderr);
h𝖛𝖑𝖐𝖕.on("exit", function (code, signal) {
if (code) console.log(ᴅᴇꜱɢ.red(code));
if (signal) console.log(ᴅᴇꜱɢ.blue(signal));
process.exitCode = 1;
});
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
async function ᴄᴏᴍᴍɪᴛ() {
await ɢɪᴛ.fetch();
var ɴᴇᴡᴄᴏᴍᴍɪᴛꜱ = await ɢɪᴛ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (ɴᴇᴡᴄᴏᴍᴍɪᴛꜱ.total != 0) {
await dcreate();
await create();
} else {
console.log(ᴅᴇꜱɢ.bgYellow(new Date()));
await fcreate();
}
}
ᴄᴏᴍᴍɪᴛ().catch((ERROR) => console.error(ERROR));
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
