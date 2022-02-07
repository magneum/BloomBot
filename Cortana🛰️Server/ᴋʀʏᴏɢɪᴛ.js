(async () => {
ƈօʀȶǟռǟgoose
.connect(_𝔏𝔞𝔟_.CORTANAMDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((err) => {
console.log(`💡 𝐈𝐧𝐟𝐨⬰ CortanaGoose Error: \n${err}`);
process.exit(0);
});
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([`KrakinzLab..origin/KrakinzLab`]);
if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
require(`simple-git`)()
.exec(async () => {
console.log(`💡 𝐈𝐧𝐟𝐨⬰ Updating Cortana System With Latest Patch...`);
})
.pull(async (Error, update) => {
if (Error) {
console.log(
`❌ 𝐄𝐫𝐫𝐨𝐫⬰ Merge Resulted with Total-Conflicts: ${Kolor.red(
Error
)} `
);
} else if (update && update.summary.changes) {
var childs = require(`child_process`).exec(`python3 ᴄᴏʀᴛᴀɴᴀ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
console.log(
`💡 𝐈𝐧𝐟𝐨⬰ Auto-Updating Finished. Total Changes: [${mergeSummary.merges.length}]`
);
});
} else {
console.log(`💡 𝐈𝐧𝐟𝐨⬰ Nothing To Auto-Update!`);
}
});
}
} catch (Error) {
console.log(Error);
console.log(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`);
}
})();
