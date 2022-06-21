("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
const fs = require("fs");
const sequelize = require("sequelize");
if (fs.existsSync("Ѷ𝖆𝖑.env")) {
require("dotenv").config({ path: "./Ѷ𝖆𝖑.env" });
} else {
require("dotenv");
}
const Log = (value) => {
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
? "./Ѷ𝖆𝖑.db"
: process.env.DATABASE_URL;

let gg = process.env.MODS;
if (!gg) {
gg = "917430922909";
}
global.KATE =
process.env.KATE === undefined
? `918436686758,917430922909`
: process.env.KATE;
global.owner = gg.split(",");
global.MONGOOSE = process.env.MONGOOSE;
global.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./Ѷ𝖆𝖑.db"
: process.env.DATABASE_URL;
global.DATABASE =
process.env.DATABASE_URL === "./Ѷ𝖆𝖑.db"
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
global.port = process.env.PORT || 8080;
global.packname = process.env.PACKNAME || "Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊";
global.prefix = process.env.PREFIX || "=";
global.author = process.env.AUTHOR || "Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊";
global.sessionName = "ӄ𝖚𝖓𝖆𝖎";
global.name = process.env.NAME || "Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊";
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");