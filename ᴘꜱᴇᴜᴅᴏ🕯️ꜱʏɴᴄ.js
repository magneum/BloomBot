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
const ᴠʟᴋʏʀᴇ = require("./ᴠʟᴋʏʀᴇ🔌cord/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗");
const git = require("simple-git")();
await git.fetch();
var newCommits = await git.log(["KryTek..origin/KryTek"]);
console.log(newCommits);
if (newCommits.total) {
var sourcePull = require("child_process").exec(
"git pull",
(error, stdout, stderr) => {
if (error) console.log(Kolor.red(error));
if (stderr) console.log(Kolor.yellow(stderr));
console.log(Kolor.green(stdout));
console.log("Child ID: ", sourcePull.pid);
}
);
sourcePull.on("exit", function (code, signal) {
if (code) console.log(code);
if (signal) console.log(signal);
process.exitCode = 1;
});
var sourceInst = require("child_process").exec(
"npm --no-warnings install --force --save",
(error, stdout, stderr) => {
if (error) console.log(Kolor.red(error));
if (stderr) console.log(Kolor.yellow(stderr));
console.log(Kolor.green(stdout));
console.log("Child ID: ", sourceInst.pid);
}
);
sourceInst.on("exit", function (code, signal) {
if (code) console.log(code);
if (signal) console.log(signal);
process.exitCode = 1;
});
}
let folders = [".", ...Object.keys(require("./package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(`.js`)))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
var fils = [file];
if (file == path.join(__dirname, __filename)) continue;
console.log(fils);
spawn("node", ["-c", file])
.on("exit", () => {
fs.readFile(file, function (err, content) {
if (err) throw err;
if (content.indexOf("ᴀʙ™") > -1 === false) process.exit(0);
});
})
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
ᴠʟᴋʏʀᴇ().catch(async (error) => {
console.log(Kolor.red(error));
var sourceReRun = require("child_process").exec(
"npm --no-warnings run vlkyre",
(error, stdout, stderr) => {
if (error) console.log(Kolor.red(error));
if (stderr) console.log(Kolor.yellow(stderr));
console.log(Kolor.green(stdout));
console.log("Child ID: ", sourceReRun.pid);
}
);
sourceReRun.on("exit", function (code, signal) {
if (code) console.log(code);
if (signal) console.log(signal);
const { exit } = require("process");
exit(1);
});
});
})();
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
