`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
(async () => {
try {
const VlkyreGit = require(`simple-git`)();
await VlkyreGit.fetch();
var VlkyreFetched = await VlkyreGit.log([`KryTek..origin/KryTek`]);
if (VlkyreFetched.total != 0) {
require(`simple-git`)()
.exec(() =>
console.log(`💡 𝐈𝐧𝐟𝐨⬰ Updating Vlkyre System With Latest Patch...`)
)
.pull((Error, update) => {
if (Error)
console.log(
`❌ 𝐄𝐫𝐫𝐨𝐫⬰ Merge Resulted with Total-Conflicts: ` + Error
);
if (update && update.summary.changes)
require("child_process").exec("python3 B͓̽o͓̽o͓̽t͓̽L͓̽o͓̽a͓̽d͓̽e͓̽r͓̽i.py");
});
}
} catch (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + Error);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { spawn } = require("child_process");
let folders = [".", ...Object.keys(require("../package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(".js")))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
if (file == path.join(__dirname, __filename)) continue;
console.error("Verifying: ", file);
spawn("node", ["-c", file])
.on("exit", () => assert.ok(file) & console.log("Verified: ", file))
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
const ᴠʟᴋʏʀᴇgoose = require("mongoose");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
await ᴠʟᴋʏʀᴇgoose.connect(_𝔏𝔞𝔟_.VLKYREMDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
});
console.log("💡 𝐈𝐧𝐟𝐨⬰ VlkyreDB Ready!");
const { ᴠʟᴋʏʀᴇ } = require("./ᴠʟᴋʏʀᴇ™.js");
await ᴠʟᴋʏʀᴇ();
} catch (Error) {
console.log(`💡 𝐈𝐧𝐟𝐨⬰ VlkyreDB Error: \n${Error}`);
process.exit(0);
}
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
