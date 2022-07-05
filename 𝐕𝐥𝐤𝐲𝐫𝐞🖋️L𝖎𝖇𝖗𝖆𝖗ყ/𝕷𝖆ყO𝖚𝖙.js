("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let fs = require("fs");
let sequelize = require("sequelize");
if (fs.existsSync("𝐕𝐥𝐤𝐲𝐫𝐞.env")) {
require("dotenv").config({ path: "./𝐕𝐥𝐤𝐲𝐫𝐞.env" });
} else {
require("dotenv");
}
let Log = (value) => {
var log = false;
if (typeof value === "string") {
if (value.toLowerCase() === "true") {
log = console.log;
}
}
return log;
};
process.env.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./🕊️𝐕𝐥𝐤𝐲𝐫𝐞🕊️/𝐕𝐥𝐤𝐲𝐫𝐞.db"
: process.env.DATABASE_URL;
let gg =
process.env.MODS === undefined
? "917430922909,918436686758"
: process.env.MODS;
global.VlkyreYT = process.env.VlkyreYT;
global.HEROKU = process.env.HEROKU;
global.HEROKU_API_KEY =
process.env.HEROKU_API_KEY === undefined
? "Null"
: process.env.HEROKU_API_KEY;
global.HEROKU_APP_NAME =
process.env.HEROKU_APP_NAME === undefined
? "Null"
: process.env.HEROKU_APP_NAME;
global.owner = gg.split(",");
global.MONGOOSE = process.env.MongoDb;
global.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./🕊️𝐕𝐥𝐤𝐲𝐫𝐞🕊️/𝐕𝐥𝐤𝐲𝐫𝐞.db"
: process.env.DATABASE_URL;
global.DATABASE =
process.env.DATABASE_URL === "./🕊️𝐕𝐥𝐤𝐲𝐫𝐞🕊️/𝐕𝐥𝐤𝐲𝐫𝐞.db"
? new sequelize.Sequelize({
dialect: "sqlite",
storage: process.env.DATABASE_URL,
logging: Log("false"),
})
: new sequelize.Sequelize(process.env.DATABASE_URL, {
dialect: "postgres",
protocol: "postgres",
logging: Log("false"),
dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});
global.prefix = process.env.PREFIX || ".";
global.port = process.env.PORT || 8080;
global.packname = "𝐕𝐥𝐤𝐲𝐫𝐞";
global.author = "𝐕𝐥𝐤𝐲𝐫𝐞";
global.name = "𝐕𝐥𝐤𝐲𝐫𝐞";
global.APIs = {
nrtm: "https://nurutomo.herokuapp.com",
dzx: "https://api.dhamzxploit.my.id",
xteam: "https://api.xteam.xyz",
zahir: "https://zahirr-web.herokuapp.com",
zeks: "https://api.zeks.xyz",
pencarikode: "https://pencarikode.xyz",
LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.APIKeys = {
"https://api.xteam.xyz": "d90a9e986e18778b",
"https://zahirr-web.herokuapp.com": "zahirgans",
"https://api.zeks.xyz": "apivinz",
"https://pencarikode.xyz": "pais",
"https://leyscoders-api.herokuapp.com": "dappakntlll",
};
global.API = (name, path = "/", query = {}, apikeyqueryname) =>
(name in global.APIs ? global.APIs[name] : name) +
path +
(query || apikeyqueryname
? "?" +
new URLSearchParams(
Object.entries({
...query,
...(apikeyqueryname
? {
[apikeyqueryname]:
global.APIKeys[
name in global.APIs ? global.APIs[name] : name
],
}
: {}),
})
)
: "");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
