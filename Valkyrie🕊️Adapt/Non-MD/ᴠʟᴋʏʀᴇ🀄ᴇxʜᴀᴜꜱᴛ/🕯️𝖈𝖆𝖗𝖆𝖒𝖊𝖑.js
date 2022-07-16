`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
console.clear();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
const fs = require("fs");
const path = require("path");
const Kolor = require("chalk");
const assert = require("assert");
const git = require("simple-git")();
const ᴠʟᴋʏʀᴇgoose = require("mongoose");
const { spawn } = require("child_process");
const _𝔏𝔞𝔟_ = require(`../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
const ᴠʟᴋʏʀᴇ = require("../ᴠʟᴋʏʀᴇ🔌cord/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗");
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
} finally {
require("child_process")
.exec("export TERM=xterm-256color")
.stderr.pipe(process.stderr);
}
(async () => {
await git.fetch();
var newCommits = await git.log(["🛰️KryTek..origin/🛰️KryTek"]);
if (newCommits.total != 0) {
try {
var 𝖛𝖑𝖐𝖕 = require("child_process").exec(
"python ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/🐍𝖛𝖑𝖐𝖕𝖞.py"
);
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(𝖛𝖑𝖐𝖕.pid));
𝖛𝖑𝖐𝖕.stderr.pipe(process.stderr);
𝖛𝖑𝖐𝖕.stdout.pipe(process.stdout);
𝖛𝖑𝖐𝖕.on("exit", function (code, signal) {
if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
  console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
process.exitCode = 1;
});
} catch (error) {
console.log(Kolor.red(error));
}
}
let folders = [".", ...Object.keys(require("../package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(`.js`)))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
let Fils = [file];
if (file == path.join(__dirname, __filename)) continue;
spawn("node", ["-c", file])
.on("exit", () => {
fs.readFile(file, function (err, content) {
  if (err) throw err;
  console.log(Fils);
  if (content.indexOf("ᴀʙ™") > -1 === false) process.exit(0);
  if (content.indexOf("𝐲𝐫𝐞") > -1 === false) process.exit(0);
});
})
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂ Connecting to Database..."));
try {
await ᴠʟᴋʏʀᴇgoose
.connect(_𝔏𝔞𝔟_.VLKYREMDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((error) => {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`));
process.exit(0);
});
} finally {
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂ Connected With Database..."));
console.log(
Kolor.green("💡𝐈𝐧𝐟𝐨꧂ All models were synchronized successfully...")
);
await ᴠʟᴋʏʀᴇ().catch((error) => {
console.log(Kolor.red(error));
process.exit(0);
});
}
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂ Connected..."));
console.log(Kolor.green("|⬡|❝  Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ❞|⬡|"));
})();
if (!ᴠʟᴋʏʀᴇ) {
console.log(
"Seems Like The Main File is Having Some Kind Of Data Error. Please Re-Check!"
);
} else {
Kolor.greenBright("Everything is Ready!");
}
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
