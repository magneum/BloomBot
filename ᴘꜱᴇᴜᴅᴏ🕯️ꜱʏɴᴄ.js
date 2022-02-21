`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const fs = require("fs");
const path = require("path");
const Kolor = require("chalk");
const assert = require("assert");
const { spawn } = require("child_process");
const VlkyreFetch = require(`simple-git`)();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("child_process")
.exec(
`git config --global user.name "KryKnz" && git config --global user.email "KryKnz@yandex.com" && git config --global pull.ff only && git config --global pull.rebase false`
)
.stdout.pipe(process.stdout);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
(async () => {
try {
await VlkyreFetch.fetch();
var VlkyreFetched = await VlkyreFetch.log([`KryTek..origin/KryTek`]);
if (VlkyreFetched.total != 0) {
VlkyreFetch.pull(async (ᴘꜱᴇᴜᴅᴏ, update) => {
if (ᴘꜱᴇᴜᴅᴏ) {
try {
const mergeSummary = await VlkyreFetch.merge();
console.log(
Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Changes: [${mergeSummary.merges.length}]`)
);
} catch {}
} else if (update && update.summary.changes) {
var 𝖈𝖆𝖗𝖆𝖒𝖊𝖑 = require(`child_process`)
.exec(`python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py`)
.stdout.pipe(process.stdout);
𝖈𝖆𝖗𝖆𝖒𝖊𝖑.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
} catch (ᴘꜱᴇᴜᴅᴏ) {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${Kolor.red(ᴘꜱᴇᴜᴅᴏ)}`));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
let folders = [".", ...Object.keys(require("./package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(`.js`)))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
if (file == path.join(__dirname, __filename)) continue;
console.ᴘꜱᴇᴜᴅᴏ("Verifying: ", file);
spawn("node", ["-c", file])
.on("exit", () => assert.ok(file) & console.log("Verified: ", file))
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ = require("./ᴠʟᴋʏʀᴇ🔌cord/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗");
await ᴠʟᴋʏʀᴇ.ᴠʟᴋʏʀᴇ().catch((ᴘꜱᴇᴜᴅᴏ) => {
console.log(ᴘꜱᴇᴜᴅᴏ);
var 𝖈𝖆𝖗𝖆𝖒𝖊𝖑 = require(`child_process`)
.exec(`python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py`)
.stdout.pipe(process.stdout);
𝖈𝖆𝖗𝖆𝖒𝖊𝖑.on(`exit`, async function () {
process.exitCode = 1;
});
});
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
