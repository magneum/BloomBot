let ӄօʟօʀ = require("chalk");
let ʀᴇᴠ_ɢɪᴛ = require("simple-git");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
(async () =>{
let ɴᴇᴡ = await ɢɪᴛᴄᴀʟʟ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
console.log(ɴᴇᴡ);
if (ɴᴇᴡ.total != 0) {
let ʀᴇᴠ_ɢɪᴛʜᴜʙ = ʀᴇᴠ_ɢɪᴛ();
ʀᴇᴠ_ɢɪᴛʜᴜʙ.clean(ʀᴇᴠ_ɢɪᴛ.CleanOptions.FORCE);
let Data = ʀᴇᴠ_ɢɪᴛʜᴜʙ.fetch();
ʀᴇᴠ_ɢɪᴛʜᴜʙ.exec(() => console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgYellow("Starting Git-Pull"))))
.pull((error, update) => {
if (error) console.log(error);
if (update) {
console.log(update);
ʀᴇᴅ = require("child_process").exec("rm -f ./.git/index.lock");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git reset --hard");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),chalk.bgRed(code)));
if (signal) {
console.log(chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),chalk.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git stash");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
ʀᴇᴅ = require("child_process").exec("git stash drop");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
}});
// ʀᴇᴅ = require("child_process").exec("npm restart");
// ʀᴇᴅ.stderr.pipe(process.stderr);
// ʀᴇᴅ.on("exit", function (code, signal) {
// if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
// if (signal) {
// console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
// process.exitCode = 1;
// }});
}
})
.exec(() => console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgGreen("Git-Pull Finished"))));
}
})()