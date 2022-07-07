(async (done) => {
let ӄօʟօʀ = require("chalk");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
let Heroku = require("heroku-client");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
const ᴘꜱᴇᴜɢɪᴛ = require('simple-git');
ᴘꜱᴇᴜɢɪᴛ().clean(ᴘꜱᴇᴜɢɪᴛ.CleanOptions.FORCE);
let ɢɪᴛ = ᴘꜱᴇᴜɢɪᴛ({ progress ({method, stage, progress}) { console.log(`git.${method} ${stage} stage ${progress}% complete`);}});
ɢɪᴛ.checkout("https://github.com/KryKnz/Vlkyre.git");
try {
let ɴᴇᴡᴄᴏᴍᴍɪᴛꜱ = await ɢɪᴛᴄᴀʟʟ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (ɴᴇᴡᴄᴏᴍᴍɪᴛꜱ.total != 0) {
await ɢɪᴛᴄᴀʟʟ.pull().catch((error) => console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(error))));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("🐙𝐂𝐨𝐦𝐦𝐢𝐭𝐬: "),ӄօʟօʀ.bgMagenta(ɴᴇᴡᴄᴏᴍᴍɪᴛꜱ)));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgYellow("Starting Git-Pull")));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("🕐𝐓𝐢𝐦𝐞: "),ӄօʟօʀ.bgGreen("".concat(new Date()))));
let ʀᴇᴅ = require("child_process").exec("npm restart");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📟𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞: "),ӄօʟօʀ.bgRed(code)));
if (signal) console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("📶𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥: "),ӄօʟօʀ.bgBlue(signal)));
process.exitCode = 1;
});
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgGreen("Git-Pull Finished")));
return await Vlkyre.reply("💡𝐈𝐧𝐟𝐨: Logger Attached.\nGit-Pull Finished");
} else {
return await Vlkyre.reply("💡𝐈𝐧𝐟𝐨: Logger Detached.\nFalling Back To Legacy Method");
}
} catch (error) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(error)));
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("💡𝐈𝐧𝐟𝐨: "),ӄօʟօʀ.bgYellow("Falling Back To Legacy Method")));
await Hoku.delete("/apps/" + HEROKU_APP_NAME + "/dynos/" + "worker").catch((error) => console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(error))));
}
})()