("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../SandBox/process.js");
require("events").EventEmitter.prototype._maxListeners = 0;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
console.error(error, "Uncaught Exception....");
});
let dbAuth = require("./Auth.js");
let sequelize = DATABASE;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var {
default: кяуνℓ,
MessageRetryMap,
DisconnectReason,
makeInMemoryStore,
} = require("@adiwajshing/baileys");
var pino = require("pino");
var store = makeInMemoryStore({
logger: pino().child({ level: "silent", stream: "store" }),
});
var getVersionWaweb = () => {
let version;
try {
let a = fetchJson(
"https://web.whatsapp.com/check-update?version=1&platform=web"
);
version = [a.currentVersion.replace(/[.]/g, ", ")];
} catch {
version = [2, 2204, 13];
}
return version;
};
var msgRetryCounterMap = MessageRetryMap;
async function кяукєηz() {
await sequelize.sync();
let { state, sandbox } = await dbAuth();
console.log("νℓкуяє  -------")
var νℓкуяє = кяуνℓ({
auth: state,
printQRInTerminal: true,
logger: pino({ level: "silent" }),
defaultQueryTimeoutMs: undefined,
browser: ["Vlkyre", "safari", "1.0.0"],
version: getVersionWaweb() || [2, 2242, 6],
fireInitQueries: false,
shouldSyncHistoryMessage: false,
downloadHistory: false,
syncFullHistory: false,
generateHighQualityLinkPreview: true,
msgRetryCounterMap,
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
return msg.message || undefined;
}
return {
conversation: "An Error Occurred, Repeat Command!",
};
},
});
store.bind(νℓкуяє.ev);
νℓкуяє.ev.on("creds.update", (update) => sandbox(update));
νℓкуяє.ev.on("connection.update", async (update) => {
var { lastDisconnect, connection, qr } = update;
var { Boom } = require("@hapi/boom");
var fs = require("fs");
if (connection == "open")
console.log("🟢νℓкуяє: ", "Successfully connected to whatsapp...");
if (connection === "close") {
console.log("🔴Error: ", "Connection terminated...");
let reason = new Boom(lastDisconnect.error).output.statusCode;
if (reason === DisconnectReason.badSession) {
console.log("🔴Error: ", "Bad Session File.Please Scan Again...");
process.exit(0);
} else if (reason === DisconnectReason.connectionClosed) {
console.log("🟡Info: ", "Connection closed.Reconnecting....");
await кяукєηz();
} else if (reason === DisconnectReason.connectionLost) {
console.log("🔵Info: ", "Connection Lost from Server.Reconnecting...");
await кяукєηz();
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(
"🔴Error: ",
"Connection Replaced, Another New Session Opened.Please Close Current Session First..."
);
if (fs.existsSync("кяє.кяу")) fs.unlinkSync("кяє.кяу");
await кяукєηz();
} else if (reason === DisconnectReason.loggedOut) {
console.log("🔴Error: ", "Device Logged Out.Please Scan Again...");
if (fs.existsSync("кяє.кяу")) fs.unlinkSync("кяє.кяу");
await кяукєηz();
} else if (reason === DisconnectReason.restartRequired) {
console.log("🟡Info: ", "Restart Required.Restarting...");
await кяукєηz();
} else if (reason === DisconnectReason.timedOut) {
console.log("🟡Info: ", "Connection Timedout.Reconnecting...");
await кяукєηz();
} else {
νℓкуяє.end(
`Unknown DisconnectReason: ${reason}|${lastDisconnect.error}`
);
}
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (qr) {
console.clear();
console.log("🦋Info: ", qr);
console.log("🔵Info: ", "New QR generated.Please Scan...");
}
});
}
кяукєηz();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
