("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../../🤖Utilities/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require("../../🤖Utilities/ɴᴇᴄᴛᴏʀ");
let fs = require("fs");
let util = require("util");
let hxz = require("hxz-api");
let db = require("quick.db");
let axios = require("axios");
let chalk = require("chalk");
let ɢɪᴛ = require("simple-git")();
let canvacord = require("canvacord");
let Heroku = require("heroku-client");
let { Character } = require("mailist");
let moment = require("moment-timezone");
let Carbon = require("unofficial-carbon-now");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
let PhoneNumber = require("awesome-phonenumber");
let { exec, execSync } = require("child_process");
let { jidDecode } = require("@adiwajshing/baileys");
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require("wa-sticker-formatter");
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let Present_Path = require("path");
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡════════════════════════════════════════════════════════════════════「  Vlkyre 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
exports.test = async (
Ѷ𝖎𝖔𝖓,
ӄryӄnz,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body
) => {
try {
let ɴᴇᴡ = ɢɪᴛ.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (ɴᴇᴡ.total != 0) {
console.log(
chalk.black(
chalk.bgWhite(
"⬡═════════════════════════|▷ 𝐆𝐢𝐭𝐇𝐮𝐛 𝐒𝐲𝐧𝐜 ◁|═════════════════════════⬡"
)
)
);
console.log(
chalk.black(chalk.bgWhite("🐙𝐂𝐨𝐦𝐦𝐢𝐭𝐬: "), chalk.bgMagenta(ɴᴇᴡ))
);
console.log(
chalk.black(
chalk.bgWhite("💡𝐈𝐧𝐟𝐨: "),
chalk.bgYellow("Starting Git-Pull")
)
);
console.log(
chalk.black(
chalk.bgWhite("🕐𝐓𝐢𝐦𝐞: "),
chalk.bgGreen("".concat(new Date()))
)
);
ʀᴇᴅ = require("child_process").exec("rm -f ./.git/index.lock");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
ʀᴇᴅ = require("child_process").exec("git reset --hard");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
ʀᴇᴅ = require("child_process").exec("git stash");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
ʀᴇᴅ = require("child_process").exec("git stash drop");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
ʀᴇᴅ = require("child_process").exec("git pull");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
ʀᴇᴅ = require("child_process").exec("npm restart");
ʀᴇᴅ.stderr.pipe(process.stderr);
ʀᴇᴅ.stdout.pipe(process.stdout);
ʀᴇᴅ.on("exit", function (code, signal) {
if (code)
console.log(
chalk.black(chalk.bgWhite("📟𝐄𝐂𝐨𝐝𝐞: "), chalk.bgRed(code))
);
if (signal) {
console.log(
chalk.black(chalk.bgWhite("📶𝐄𝐒𝐢𝐠𝐧𝐚𝐥: "), chalk.bgBlue(signal))
);
process.exitCode = 1;
}
});
console.log(
chalk.black(
chalk.bgWhite("💡𝐈𝐧𝐟𝐨: "),
chalk.bgGreen("Git-Pull Finished")
)
);
} else {
return await Vlkyre.reply(
"💡𝐈𝐧𝐟𝐨: Logger Detached.\nFalling Back To Legacy Method"
);
}
} catch (error) {
console.log(chalk.black(chalk.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), chalk.bgRed(error)));
console.log(
chalk.black(
chalk.bgWhite("💡𝐈𝐧𝐟𝐨: "),
chalk.bgYellow("Falling Back To Legacy Method")
)
);
await Hoku.delete("/apps/" + HEROKU_APP_NAME + "/dynos/" + "worker").catch(
(error) =>
console.log(
chalk.black(chalk.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), chalk.bgRed(error))
)
);
}
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
