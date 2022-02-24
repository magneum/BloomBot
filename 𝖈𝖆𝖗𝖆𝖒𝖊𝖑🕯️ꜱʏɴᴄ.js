`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
const fs = require("fs");
const path = require("path");
const Kolor = require("chalk");
const assert = require("assert");
const git = require("simple-git")();
const { spawn } = require("child_process");
const ᴠʟᴋʏʀᴇ = require("./ᴠʟᴋʏʀᴇ🔌cord/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗");
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
try {
if (fs.existsSync("package-lock.json")) {
var PkgRm = require("child_process").exec("rm package-lock.json");
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(PkgRm.pid));
PkgRm.stderr.pipe(process.stderr);
PkgRm.stdout.pipe(process.stdout);
PkgRm.on("exit", function (code, signal) {
if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
process.exitCode = 1;
});
}
} catch (error) {
console.log(Kolor.red(error));
}
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
(async () => {
await git.fetch();
var newCommits = await git.log(["KryTek..origin/KryTek"]);
console.log(newCommits);
if (newCommits.total != 0) {
try {
try {
var InitReset = require("child_process").exec(
"git config --global user.name 'KryKnz' && git config --global user.email 'KryKnz@yandex.com' && git config pull.rebase false && git init --initial-branch=KryTek && git fetch origin KryTek && git reset --hard origin/KryTek && git stash && git stash drop"
);
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(InitReset.pid));
InitReset.stderr.pipe(process.stderr);
InitReset.stdout.pipe(process.stdout);
InitReset.on("exit", function (code, signal) {
if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
process.exitCode = 1;
});
} catch (error) {
console.log(Kolor.red(error));
}
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
await git.pull("origin", "KryTek", (error, update) => {
if (error) console.log(Kolor.red(error));
if (
update &&
update.summary.changes &&
update.files.includes("package.json")
) {
try {
var Installer = require("child_process").exec(
"npm install --force --save"
);
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(Installer.pid));
Installer.stderr.pipe(process.stderr);
Installer.stdout.pipe(process.stdout);
Installer.on("exit", function (code, signal) {
if (code)
console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log(
"📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:",
Kolor.blue(signal)
);
process.exitCode = 1;
});
} catch (error) {
console.log(Kolor.red(error));
}
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
try {
if (fs.existsSync("package-lock.json")) {
var InstalCleaner = require("child_process").exec(
"rm package-lock.json"
);
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(InstalCleaner.pid));
InstalCleaner.stderr.pipe(process.stderr);
InstalCleaner.stdout.pipe(process.stdout);
InstalCleaner.on("exit", function (code, signal) {
if (code)
console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log(
"📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:",
Kolor.blue(signal)
);
process.exitCode = 1;
});
}
} catch (error) {
console.log(Kolor.red(error));
}
}
});
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
} catch (error) {
console.log(Kolor.red(error));
try {
var Resets = require("child_process").exec(
"git config --global user.name 'KryKnz' && git config --global user.email 'KryKnz@yandex.com' && git config pull.rebase false && git init --initial-branch=KryTek && git fetch origin KryTek && git reset --hard origin/KryTek && git stash && git stash drop && git pull"
);
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(Resets.pid));
Resets.stderr.pipe(process.stderr);
Resets.stdout.pipe(process.stdout);
Resets.on("exit", function (code, signal) {
if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
process.exitCode = 1;
});
} catch (error) {
console.log(Kolor.red(error));
}
}
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
ᴠʟᴋʏʀᴇ().catch((error) => {
console.log(Kolor.red(error));
process.exit();
});
})();
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
