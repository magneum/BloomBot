`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
(async () => {
const { ƈօʀȶǟռǟ, ӄʀǟӄɨռʐ } = require(`../Cortana🛰️Server/🛸ƈօʀȶǟռǟ™`);
const _𝔏𝔞𝔟_ = require(`../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ƈօʀȶǟռǟgoose = require("mongoose");
const Kolor = require(`chalk`);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([`KrakinzLab..origin/KrakinzLab`]);
if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
require(`simple-git`)()
.exec(async () => {
console.log(
Kolor.yellow(
`💡 𝐈𝐧𝐟𝐨⬰ Updating Cortana System With Latest Patch...`
)
);
})
.pull(async (Error, update) => {
if (Error) {
try {
const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
console.log(
Kolor.green(
`💡 𝐈𝐧𝐟𝐨⬰ Auto-Updating Finished. Total Changes: [${mergeSummary.merges.length}]`
)
);
} catch (Error) {
console.log(
Kolor.red(
`❌ 𝐄𝐫𝐫𝐨𝐫⬰ Merge Resulted with Total-Conflicts: ${Kolor.red(
Error
)} `
)
);
}
} else if (update && update.summary.changes) {
var childs = require(`child_process`).exec(`python3 ᴄᴏʀᴛᴀɴᴀ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
} catch (Error) {
console.log(Error);
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
console.log(Kolor.yellow(`💡 𝐈𝐧𝐟𝐨⬰ CortanaGoose Connecting!`));
await ƈօʀȶǟռǟgoose
.connect(_𝔏𝔞𝔟_.CORTANAMDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((err) => {
console.log(Kolor.red(`💡 𝐈𝐧𝐟𝐨⬰ CortanaGoose Error: \n${err}`));
process.exit(0);
});
console.log(Kolor.green(`💡 𝐈𝐧𝐟𝐨⬰ CortanaGoose Connected!`));
ӄʀǟӄɨռʐ.logger.level = "error";
ƈօʀȶǟռǟ();
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
