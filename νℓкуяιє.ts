`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
import makeWASocket, {
DisconnectReason,
makeInMemoryStore,
WASocket,
proto,
} from "@adiwajshing/baileys";
import fs from "fs";
import Kolor from "chalk";
import { join } from "path";
import Vmangos from "mongoose";
import P, { Logger } from "pino";
import { Boom } from "@hapi/boom";
import νℓкуяιє from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/msb";
import Client from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/client";
import resolve from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/helper";
import Konf from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/config";
import Command from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/command";
import { Sequelize } from "sequelize/types";
import { MessageType } from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/message-type";
import useRemoteFileAuthState from "./𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/dbAuth";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const UserPrivate = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
const BanPerson = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const logger: Logger = P({
timestamp: () => `,"time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂  Trying To Connect To '🍃mongo + 🕸️sql'"));
const sequelize: Sequelize = Konf.DATABASE;
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
(async () => {
try {
await sequelize.authenticate();
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂  Connected with 🕸️SQL."));
} catch (error) {
console.error(Kolor.red("❌𝐄𝐫𝐫𝐨𝐫꧂ Unable to Connected with 🕸️SQL"));
console.log(error);
process.exit(0);
}
await sequelize.sync();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
try {
await Vmangos.connect(Konf.VMango, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
}).catch((error) => {
console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`));
process.exit(0);
});
} finally {
console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂  Connected with 🍃MONGO."));
console.log(
Kolor.green("💡𝐈𝐧𝐟𝐨꧂  All models synchronized successfully...")
);
}
console.clear();
console.log(
Kolor.green("💡𝐈𝐧𝐟𝐨꧂  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐚𝐧𝐝 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝 𝐰𝐢𝐭𝐡 𝐒𝐞𝐫𝐯𝐞𝐫𝐬...")
);
})().catch((err) => console.log("[Server Error] : %s", Kolor.red(err)));
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const store = makeInMemoryStore({ logger });
store?.readFromFile("./Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞.json");
setInterval(() => {
store?.writeToFile("./Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞.json");
}, 10_000);
(async (): Promise<void> => {
let commandHandler: Map<string, Command> = new Map();
let Folders: string[] = fs.readdirSync(join(__dirname, "𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥"));
for (const Files of Folders) {
console.log(Files);
const AllFiles = fs
.readdirSync(join(__dirname, `./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥/${Files}`))
.filter((File) => File.endsWith(`.js`));
for (const File of AllFiles) {
const command = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥/${Files}/${File}`);
try {
commandHandler.set(command.name, command);
} catch (error) {
console.log(
Kolor.blue("💡𝐈𝐧𝐟𝐨꧂  Could not import module"),
Kolor.red(`${File}`)
);
console.log(`❌𝐄𝐫𝐫𝐨𝐫꧂ `, error);
continue;
}
}
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
let FFolders: string[] = fs.readdirSync(join(__dirname, "𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭"));
for (const FFiles of FFolders) {
console.log(FFiles);
const AllFFiles = fs
.readdirSync(join(__dirname, `./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭/${FFiles}`))
.filter((File) => File.endsWith(`.js`));
for (const File of AllFFiles) {
const command = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭/${FFiles}/${File}`);
try {
commandHandler.set(command.name, command);
} catch (error) {
console.log(`❌𝐄𝐫𝐫𝐨𝐫꧂ Could not import module [ ${File} ]`, error);
continue;
}
}
}
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂  Plugins Installed Successfully."));
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const { state, saveCreds } = await useRemoteFileAuthState(logger);
const startSock = async () => {
const sock: WASocket = makeWASocket({
logger,
printQRInTerminal: true,
auth: state,
browser: ["Vlkyrie", "Chrome", "4.0.0"],
getMessage: async (key) => {
return {};
},
});
store?.bind(sock.ev);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
sock.ev.on("messages.upsert", async (m) => {
if (m.type === "append" && !Konf.OFFLINE_RESPONSE) {
return;
}
if (m.type !== "notify") {
return;
}
let chat: proto.IWebMessageInfo = m.messages[0];
let νℓкуяιє: νℓкуяιє = await resolve(chat, sock);
let client: Client = new Client(sock);
if (νℓкуяιє.isCmd) {
console.log(νℓкуяιє);
console.log(
Kolor.red(`💡𝐈𝐧𝐟𝐨꧂  ${νℓкуяιє.commandName} command executed.`)
);
const command = commandHandler.get(νℓкуяιє.commandName);
var args = νℓкуяιє.body.trim().split(/\s+/).slice(1);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (!command) {
await client.sendMessage(
νℓкуяιє.chatId,
{
quoted: chat.message,
contextInfo: {
mentionedJid: [νℓкуяιє.sender],
},
timestamp: Date(),
image: { url: "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞👜𝐁𝐚𝐠/νℓкуяιє.png" },
caption: `✥𝐔𝐬𝐞𝐫: ${chat.pushName}

*❌𝗘𝗿𝗿𝗼𝗿:* No Such Command In Database.`,
footer: `⦓ 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ⦔`,
buttons: [
{
  buttonId: `${Konf.MuveOn}help`,
  buttonText: { displayText: `${Konf.MuveOn}help` },
  type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
}
// else if (command && νℓкуяιє.commandName == "help") {
// try {
// command.handle(client, chat, νℓкуяιє, args, commandHandler);
// return;
// } catch (err) {
// console.log(Kolor.red("❌𝐄𝐫𝐫𝐨𝐫꧂ ", err));
// return;
// }
// }
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
try {
await command
.handle(client, chat, νℓкуяιє, args)
.catch((err) => console.log("❌𝐄𝐫𝐫𝐨𝐫꧂ " + err));
} catch (err) {
console.log(Kolor.red("❌𝐄𝐫𝐫𝐨𝐫꧂ ", err));
}
}
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
sock.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
if (
(lastDisconnect.error as Boom)?.output?.statusCode !==
DisconnectReason.loggedOut
) {
startSock();
} else {
console.log("❌𝐄𝐫𝐫𝐨𝐫꧂ Connection closed. You are logged out.");
process.exit(0);
}
} else if (connection === "connecting") {
console.log(Kolor.yellowBright("💡𝐈𝐧𝐟𝐨꧂  Connecting to WhatsApp..."));
} else if (connection === "open") {
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂  Connected! Welcome to νℓкуяιє"));
} else {
console.log("connection update", update);
}
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
sock.ev.on("creds.update", (creds) => {
saveCreds(creds);
});
return sock;
};
startSock();
})().catch((err) => console.log("[MAINERROR] : %s", Kolor.red(err)));
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
