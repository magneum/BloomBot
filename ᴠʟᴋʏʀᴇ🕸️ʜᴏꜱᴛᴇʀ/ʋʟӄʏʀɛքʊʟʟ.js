`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Kolor = require("chalk");
const git = require("simple-git")();
const ᴠʟᴋʏʀᴇgoose = require("mongoose");
const exec = require("child_process").exec;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const ʋʟӄʏʀɛքʊʟʟ = async () => {
try {
await ᴠʟᴋʏʀᴇgoose
.connect(_𝔏𝔞𝔟_.VLKYREMDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((error) => {
console.log(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`);
process.exit(0);
});
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
// await git.fetch();
// await git.log(["KryTek..origin/KryTek"]);
// await git.pull("origin", "KryTek", async (error, update) => {
// if (error) {
// exec(
// `git config --global user.name "Kryknz" && git config --global user.email "KryKnz@yandex.com" && git fetch --all && git config --global pull.rebase false`
// ).stdout.pipe(process.stdout);
// try {
// const mergeSummary = await git.merge();
// console.log(
// Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Changes: [${mergeSummary.merges.length}]`)
// );
// } catch (error) {}
// }
// `|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
// if (update) {
// try {
// const mergeSummary = await git.merge();
// console.log(
// Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Changes: [${mergeSummary.merges.length}]`)
// );
// } catch (error) {}
// }
// });
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const VlkyreFetch = require(`simple-git`)();
await VlkyreFetch.fetch();
var VlkyreFetched = await VlkyreFetch.log([`KryTek..origin/KryTek`]);
if (VlkyreFetched.total != 0) {
require(`simple-git`)()
.exec(async () => {
console.log(Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Starting Vlkyre Fetchers....`));
})
.pull(async (error, update) => {
if (error) {
try {
const mergeSummary = await VlkyreFetch.merge();
console.log(
Kolor.blue(`💡 𝐈𝐧𝐟𝐨⬰ Changes: [${mergeSummary.merges.length}]`)
);
} catch (error) {}
} else if (update && update.summary.changes) {
var child = require(`child_process`).exec(`python3 𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗.py`);
child.stdout.pipe(process.stdout);
child.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
} catch (error) {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${Kolor.red(error)}`));
}
};
module.exports = ʋʟӄʏʀɛքʊʟʟ;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
