("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (update, νℓкуяє, DisconnectReason, кяукηz) => {
var { lastDisconnect, connection, qr } = update;
var { Boom } = require("@hapi/boom");
var chalk = require("chalk");
var fs = require("fs");
function ShowRed(Topic, Text) {
let TShow = chalk.hex("#ff6347").bold(Topic);
let Show = chalk.hex("#ed7777").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowBlue(Topic, Text) {
let TShow = chalk.hex("#008B8B").bold(Topic);
let Show = chalk.hex("#818d94").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowGreen(Topic, Text) {
let TShow = chalk.hex("#2D5A27").bold(Topic);
let Show = chalk.hex("#849871").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowYellow(Topic, Text) {
let TShow = chalk.hex("#8B8000").bold(Topic);
let Show = chalk.hex("#ECCF8D").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (connection == "open") ShowGreen("🟢νℓкуяє: ", "Successfully connected to whatsapp...");
if (connection === "close") {
ShowRed("🔴Error: ", "Connection terminated...");
let reason = new Boom(lastDisconnect.error).output.statusCode;
if (reason === DisconnectReason.badSession) {
ShowRed("🔴Error: ", "Bad Session File.Please Scan Again...");
process.exit(0);
} else if (reason === DisconnectReason.connectionClosed) {
ShowYellow("🟡Info: ", "Connection closed.Reconnecting....");
await кяукηz();
} else if (reason === DisconnectReason.connectionLost) {
ShowBlue("🔵Info: ", "Connection Lost from Server.Reconnecting...");
await кяукηz();
} else if (reason === DisconnectReason.connectionReplaced) {
ShowRed("🔴Error: ","Connection Replaced, Another New Session Opened.Please Close Current Session First...");
if (fs.existsSync("νℓкуяє.кяу")) fs.unlinkSync("νℓкуяє.кяу");
await кяукηz();
} else if (reason === DisconnectReason.loggedOut) {
ShowRed("🔴Error: ", "Device Logged Out.Please Scan Again...");
if (fs.existsSync("νℓкуяє.кяу")) fs.unlinkSync("νℓкуяє.кяу");
await кяукηz();
} else if (reason === DisconnectReason.restartRequired) {
ShowYellow("🟡Info: ", "Restart Required.Restarting...");
await кяукηz();
} else if (reason === DisconnectReason.timedOut) {
ShowYellow("🟡Info: ", "Connection Timedout.Reconnecting...");
await кяукηz();
} else {
νℓкуяє.end(`Unknown DisconnectReason: ${reason}|${lastDisconnect.error}`);
}
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (qr) {
console.clear();
ShowYellow("🦋Info: ", qr);
ShowBlue("🔵Info: ", "New QR generated.Please Scan...");
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
