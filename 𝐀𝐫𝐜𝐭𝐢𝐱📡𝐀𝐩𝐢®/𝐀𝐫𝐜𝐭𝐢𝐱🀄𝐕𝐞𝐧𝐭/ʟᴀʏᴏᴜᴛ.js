"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const fs_1 = __importDefault(require("fs"));
const sequelize_1 = require("sequelize");
if (fs_1.default.existsSync("AʀƈȶɨӼ.env")) {
    require("dotenv").config({ path: "./AʀƈȶɨӼ.env" });
}
else {
    require("dotenv");
}
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const Log = (value) => {
    var log = false;
    if (typeof value === "string") {
        if (value.toLowerCase() === "true") {
            log = console.log;
        }
    }
    return log;
};
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
        ? "./AʀƈȶɨӼ.db"
        : process.env.DATABASE_URL;
process.env.DEBUG =
    process.env.DEBUG === undefined ? "false" : process.env.DEBUG;
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const ʟᴀʏᴏᴜᴛ = {
    Ten: process.env.Ten,
    VMango: process.env.VMango,
    Spotify_Id: process.env.Spotify_Id,
    Heroku_Api: process.env.Heroku_Api,
    Heroku_App: process.env.Heroku_App,
    Spotify_Client_Id: process.env.Spotify_Client_Id,
    MuveOn: process.env.PREFIX === undefined ? "/" : process.env.PREFIX,
    STRING_SESSION: process.env.STRING_SESSION === undefined ? "" : process.env.STRING_SESSION,
    HEROKU: process.env.HEROKU === undefined ? false : true,
    PREFIX: process.env.PREFIX === undefined ? "^[/]" : process.env.PREFIX,
    CCD: process.env.CCD === undefined ? "91" : process.env.CCD,
    OCR: process.env.OCR === undefined
        ? "9ffb44def388957"
        : process.env.OCR,
    Weather: process.env.CURRENT_WEATHER_API_KEY === undefined
        ? "6729ac2b2e2bb5c686ff427a2f06df92"
        : process.env.CURRENT_WEATHER_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL === undefined
        ? "./AʀƈȶɨӼ.db"
        : process.env.DATABASE_URL,
    DEBUG: process.env.DEBUG === undefined ? false : process.env.DEBUG,
    DATABASE: process.env.DATABASE_URL === "./AʀƈȶɨӼ.db"
        ? new sequelize_1.Sequelize({
            dialect: "sqlite",
            storage: process.env.DATABASE_URL,
            logging: Log(process.env.DEBUG),
        })
        : new sequelize_1.Sequelize(process.env.DATABASE_URL, {
            dialect: "postgres",
            protocol: "postgres",
            logging: Log(process.env.DEBUG),
            dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
    TUFs: process.env.TUFs === undefined ? "" : process.env.TUFs,
    OFFLINE_RESPONSE: process.env.OFFLINE_RESPONSE === undefined
        ? true
        : process.env.OFFLINE_RESPONSE,
};
exports.default = ʟᴀʏᴏᴜᴛ;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
