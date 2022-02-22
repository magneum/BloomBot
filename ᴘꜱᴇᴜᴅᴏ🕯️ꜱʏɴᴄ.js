`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
(async () => {
const fs = require("fs");
const path = require("path");
const Kolor = require("chalk");
const assert = require("assert");
const { spawn } = require("child_process");
const VlkyreFetch = require(`simple-git`)();
const ᴠʟᴋʏʀᴇ = require("./ᴠʟᴋʏʀᴇ🔌cord/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗");
try {
await VlkyreFetch.fetch();
var VlkyreFetched = await VlkyreFetch.log([`KryTek..origin/KryTek`]);
if (VlkyreFetched.total != 0) {
require("child_process").exec(
`git config --global user.name "KryKnz" && git config --global user.email "KryKnz@yandex.com" && git config --global pull.ff only && git config --global pull.rebase false`,
async (error, stdout, stderr) => {
if (error) return console.log(error);
if (stderr) return console.log(stderr);
console.log(stdout);
}
);
VlkyreFetch.pull(async (error, update) => {
if (error) {
try {
const mergeSummary = await VlkyreFetch.merge();
console.log(
Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Changes: [${mergeSummary.merges.length}]`)
);
} catch {}
} else if (update && update.summary.changes) {
var ᴘꜱᴇᴜᴅᴏ = require("child_process").exec(
"npm install --force --save"
);
ᴘꜱᴇᴜᴅᴏ.stderr.pipe(process.stderr);
ᴘꜱᴇᴜᴅᴏ.stdout.pipe(process.stdout);
ᴘꜱᴇᴜᴅᴏ.on(`exit`, async function () {
process.exitCode = 1;
});
var 𝖈𝖆𝖗𝖆𝖒𝖊𝖑 = require("child_process").exec("python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py");
𝖈𝖆𝖗𝖆𝖒𝖊𝖑.stderr.pipe(process.stderr);
𝖈𝖆𝖗𝖆𝖒𝖊𝖑.stdout.pipe(process.stdout);
𝖈𝖆𝖗𝖆𝖒𝖊𝖑.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
} catch (error) {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${Kolor.red(error)}`));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
let folders = [".", ...Object.keys(require("./package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(`.js`)))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
if (file == path.join(__dirname, __filename)) continue;
console.log(Kolor.blue("☣️ 𝐕𝐞𝐫𝐢𝐭𝐲 𝐂𝐡𝐞𝐜𝐤: ") + file);
spawn("node", ["-c", file])
.on("exit", () => {
fs.readFile(file, function (err, content) {
if (err) throw err;
if (content.indexOf("ᴀʙ™") > -1 === false) process.exit(0);
});
})
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
try {
await ᴠʟᴋʏʀᴇ();
} catch (error) {
console.log("Error Caught In Vlkyre()\n", error);
var exec = require("child_process").exec;
var children = [];
process.on("exit", function () {
children.forEach(function (child) {
child.kill();
console.log("Killed: ", children.length, " <child_processes>");
});
});
var cleanExit = function () {
process.exit();
};
process.on("SIGINT", cleanExit);
process.on("SIGTERM", cleanExit);
children.push(
exec("python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py", async (error, stdout, stderr) => {
if (error) return console.log(error);
if (stderr) return console.log(stderr);
console.log(stdout);
})
);
}
})();
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
