"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const fs_1 = __importDefault(require("fs"));
const sequelize_1 = require("sequelize");
if (fs_1.default.existsSync("Vʟӄʏʀɛ.env")) {
    require("dotenv").config({ path: "./Vʟӄʏʀɛ.env" });
}
else {
    require("dotenv");
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const convertToLogLevel = (value) => {
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
        ? "./Vʟӄʏʀɛ.db"
        : process.env.DATABASE_URL;
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const ʟᴀʏᴏᴜᴛ = {
    Ten: process.env.Ten,
    VMango: process.env.VMango,
    Spotify_Id: process.env.Spotify_Id,
    Heroku_Api: process.env.Heroku_Api,
    Heroku_App: process.env.Heroku_App,
    Spotify_Client_Id: process.env.Spotify_Client_Id,
    HEROKU: process.env.HEROKU,
    CCD: process.env.CCD,
    OCR: process.env.OCR,
    VlkyreYT: process.env.VlkyreYT,
    IMDB: process.env.IMDB,
    Weather: process.env.CURRENT_WEATHER_API_KEY,
    MOD: process.env.MOD,
    OFFLINE_RESPONSE: process.env.OFFLINE_RESPONSE,
    DATABASE_URL: process.env.DATABASE_URL === undefined
        ? "./𝕶𝖗𝖆𝖐𝖎𝖓𝖟𝕷𝖆𝖇®/Vʟӄʏʀɛ.db"
        : process.env.DATABASE_URL,
    DEBUG: process.env.DEBUG === undefined ? false : process.env.DEBUG,
    DATABASE: process.env.DATABASE_URL === "./BotsApp.db"
        ? new sequelize_1.Sequelize({
            dialect: "sqlite",
            storage: process.env.DATABASE_URL,
            logging: convertToLogLevel(process.env.DEBUG),
        })
        : new sequelize_1.Sequelize(process.env.DATABASE_URL, {
            dialect: "postgres",
            protocol: "postgres",
            logging: convertToLogLevel(process.env.DEBUG),
            dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
    PREFIX: process.env.PREFIX === undefined ? "^[.?/]" : process.env.PREFIX,
    MuveOn: "/",
};
exports.default = ʟᴀʏᴏᴜᴛ;
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
