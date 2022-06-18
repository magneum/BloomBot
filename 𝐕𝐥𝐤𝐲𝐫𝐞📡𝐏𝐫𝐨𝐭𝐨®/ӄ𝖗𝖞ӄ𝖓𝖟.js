"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
process.env.YTDL_NO_UPDATE = "0";
process.env.SPDL_NO_UPDATE = "0";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
const baileys_1 = __importStar(require("@adiwajshing/baileys"));
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = require("path");
const mongoose_1 = __importDefault(require("mongoose"));
const pino_1 = __importDefault(require("pino"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const ______1 = __importDefault(require("./\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const types_1 = require("sequelize/types");
const sequelize = ______1.default.DATABASE;
const dbAuth_1 = __importDefault(require("./\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\u269C\uFE0F\uD835\uDC0A\uD835\uDC2B\uD835\uDC32\uD835\uDC28\uD835\uDC13\uD835\uDC1E\uD835\uDC24/dbAuth"));
const messages_upsert_1 = __importDefault(require("./\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/messages_upsert"));
const connection_update_1 = __importDefault(require("./\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/connection_update"));
const participants_update_1 = __importDefault(require("./\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/participants_update"));
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const logger = (0, pino_1.default)({
    timestamp: () => `,"Time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
var ӄ = (0, baileys_1.makeInMemoryStore)({ logger });
ӄ === null || ӄ === void 0 ? void 0 : ӄ.readFromFile("./𝕶𝖗𝖆𝖐𝖎𝖓𝖟𝕷𝖆𝖇/Vʟӄʏʀɛ.json");
setInterval(() => {
    ӄ === null || ӄ === void 0 ? void 0 : ӄ.writeToFile("./𝕶𝖗𝖆𝖐𝖎𝖓𝖟𝕷𝖆𝖇/Vʟӄʏʀɛ.json");
}, 10000);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new types_1.Sequelize("inkcyclopedia", null, null, {});
        yield sequelize.authenticate();
        yield sequelize.sync();
    }
    catch (error) {
        console.log(chalk_1.default.red(error));
    }
    try {
        yield mongoose_1.default.connect(______1.default.VMango, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    }
    catch (error) {
        console.log(chalk_1.default.red(error));
    }
    console.log(chalk_1.default.green("(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! "));
    // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
    let commandHandler = new Map();
    let Folders = fs_1.default.readdirSync((0, path_1.join)(__dirname, "𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫"));
    for (const Files of Folders) {
        const AllFiles = fs_1.default
            .readdirSync((0, path_1.join)(__dirname, `./𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫/${Files}`))
            .filter((File) => File.endsWith(`.js`));
        for (const File of AllFiles) {
            const command = require(`./𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫/${Files}/${File}`);
            try {
                commandHandler.set(command.name, command);
                if (______1.default.Heroku_App === undefined) {
                    console.log(chalk_1.default.green(Files + ":   ") +
                        chalk_1.default.blue(File.toLocaleUpperCase() + " ✔️"));
                }
            }
            catch (error) {
                console.log(chalk_1.default.red("❌𝐄𝐫𝐫𝐨𝐫: " + error + " | ") +
                    chalk_1.default.green(Files + " :") +
                    chalk_1.default.blue(File));
                continue;
            }
        }
    }
    // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
    const color = (text, color) => {
        return !color
            ? chalk_1.default.green(text)
            : color.startsWith("#")
                ? chalk_1.default.hex(color)(text)
                : chalk_1.default.keyword(color)(text);
    };
    const checkVersion = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let BASE_URL = "https://web.whatsapp.com/check-update?version=1&platform=web";
            const { data: JSONData } = yield axios_1.default.get(BASE_URL);
            let version = JSONData.currentVersion
                .split(".")
                .map((v) => parseInt(v));
            return version;
        }
        catch (err) {
            console.log(color("[ SERVER ]", "aqua"), moment_timezone_1.default.tz("Asia/Kolkata").format("DD/MM/YY HH:mm:ss"), color("Connection are required please check your connection...", "yellow"));
        }
    });
    // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
    const { state, saveCreds } = yield (0, dbAuth_1.default)(logger);
    const ӄ𝖓𝖟 = () => __awaiter(void 0, void 0, void 0, function* () {
        const ӄ𝖗𝖞ӄ𝖓𝖟 = (0, baileys_1.default)({
            logger,
            auth: state,
            printQRInTerminal: true,
            version: yield checkVersion(),
            defaultQueryTimeoutMs: undefined,
            browser: ["Vlkyre", "Chrome", "4.0.0"],
            getMessage: (key) => __awaiter(void 0, void 0, void 0, function* () {
                return {};
            }),
        });
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        ӄ === null || ӄ === void 0 ? void 0 : ӄ.bind(ӄ𝖗𝖞ӄ𝖓𝖟.ev);
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("group-participants.update", (update) => __awaiter(void 0, void 0, void 0, function* () {
            participants_update_1.default.participants_update(update, ӄ𝖗𝖞ӄ𝖓𝖟);
        }));
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("connection.update", (update) => __awaiter(void 0, void 0, void 0, function* () {
            connection_update_1.default.connection_update(update, baileys_1.DisconnectReason, ӄ𝖓𝖟, ӄ𝖗𝖞ӄ𝖓𝖟);
        }));
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("messages.upsert", (update) => __awaiter(void 0, void 0, void 0, function* () {
            messages_upsert_1.default.messages_upsert(update, ӄ𝖗𝖞ӄ𝖓𝖟, commandHandler, ӄ);
        }));
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("creds.update", (creds) => {
            saveCreds(creds);
        });
        return ӄ𝖗𝖞ӄ𝖓𝖟;
    });
    ӄ𝖓𝖟().catch((error) => console.log(chalk_1.default.red(error)));
}))().catch((error) => console.log(chalk_1.default.red(error)));
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
