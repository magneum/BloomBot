("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
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
("⦓════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」══════════]  ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  [══════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」════════════════════════⦔");
process.env.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./Ѷ𝖆𝖑.db"
: process.env.DATABASE_URL;

let gg = process.env.MODS;
if (!gg) {
gg = "917430922909";
}
global.owner = gg.split(",");
global.mongodb = process.env.MONGOOSE;
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
global.packname = process.env.PACKNAME || "kaguya";
global.prefix = process.env.PREFIX || ".";
global.author = process.env.AUTHOR || "ARUS";
global.sessionName = "ӄ𝖚𝖓𝖆𝖎";
global.name = process.env.NAME || "Mizuhara";
global.menu = `
💻 *Dev*
❐ update, broadcast, ban, unban, chatid, session, join

🔮 *General*
❐ help, delete, info, rank, profile

💠 *Fun*
❐ ship, advice, quote, leaderboard, react, fact, bot

🔈 *Media*
❐ yta, ytv, play, gify, yts, lyrics

👑 *Moderation*
❐ demote, remove, ping, promote, deact, act, invite, group, seticon, setdesc

💮 *Weeb*
❐ anime, manga, charecter, haigusha, neko, waifu, pokemon

🖇 *Utils*
❐ google, image, meme, subreddit, tourl, img, iguser, gif, sticker, take, pinterest, carbon

🗃️ *Note: *Calls and Dm will lead you to ban*`;
global.thumb = fs.readFileSync("./src/info.jpeg");
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("|⬡═════════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|════════════════════════════════════════════════⬡|");
