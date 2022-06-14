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
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.YTDL_NO_UPDATE = "0";
process.env.SPDL_NO_UPDATE = "0";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
const baileys_1 = __importStar(require("@adiwajshing/baileys"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = require("path");
const mongoose_1 = __importDefault(require("mongoose"));
const pino_1 = __importDefault(require("pino"));
const ______1 = __importDefault(require("./\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const chalkAnimation = require("chalkercli");
const dbAuth_1 = __importDefault(require("./\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u269C\uFE0F\uD835\uDC0A\uD835\uDC2B\uD835\uDC32\uD835\uDC28\uD835\uDC13\uD835\uDC1E\uD835\uDC24/dbAuth"));
const messages_upsert_1 = __importDefault(require("./\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/messages_upsert"));
const connection_update_1 = __importDefault(require("./\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/connection_update"));
const participants_update_1 = __importDefault(require("./\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83D\uDCA5\uD835\uDC04\uD835\uDC2F\uD835\uDC1E\uD835\uDC27\uD835\uDC2D\uD835\uDC2C/participants_update"));
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const sequelize = ______1.default.DATABASE;
const logger = (0, pino_1.default)({
    timestamp: () => `,"Time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
const store = (0, baileys_1.makeInMemoryStore)({ logger });
store === null || store === void 0 ? void 0 : store.readFromFile("./AʀƈȶɨӼ.json");
setInterval(() => {
    store === null || store === void 0 ? void 0 : store.writeToFile("./AʀƈȶɨӼ.json");
}, 10000);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.yellow("💡𝐈𝐧𝐟𝐨: Trying To Connect To '🍃mongo + 🕸️sql'"));
    try {
        yield sequelize.authenticate();
        console.log(chalk_1.default.green("💡𝐈𝐧𝐟𝐨: Connected with 🕸️SQL."));
    }
    catch (error) {
        console.error(chalk_1.default.red("❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🕸️SQL"));
        console.log(error);
        process.exit(0);
    }
    yield sequelize.sync();
    try {
        yield mongoose_1.default.connect(______1.default.VMango, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }).catch((error) => {
            console.log(chalk_1.default.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`));
            process.exit(0);
        });
    }
    finally {
        console.log(chalk_1.default.green("💡𝐈𝐧𝐟𝐨: Connected with 🍃MONGO."));
    }
    console.log(chalk_1.default.green("💡𝐈𝐧𝐟𝐨: Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 connected to servers and verified..."));
    chalkAnimation.rainbow(" (𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! ");
    //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
    let commandHandler = new Map();
    let Folders = fs_1.default.readdirSync((0, path_1.join)(__dirname, "𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭"));
    for (const Files of Folders) {
        const AllFiles = fs_1.default
            .readdirSync((0, path_1.join)(__dirname, `./𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭/${Files}`))
            .filter((File) => File.endsWith(`.js`));
        for (const File of AllFiles) {
            const command = require(`./𝐀𝐫𝐜𝐭𝐢𝐱💖𝐇𝐞𝐚𝐫𝐭/${Files}/${File}`);
            try {
                commandHandler.set(command.name, command);
                console.log(chalk_1.default.green(Files + " :") + chalk_1.default.blue(File + " ✔️"));
            }
            catch (error) {
                console.log(chalk_1.default.red("❌𝐄𝐫𝐫𝐨𝐫: " + error + " | ") +
                    chalk_1.default.green(Files + " :") +
                    chalk_1.default.blue(File));
                continue;
            }
        }
    }
    //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
    const { state, saveCreds } = yield (0, dbAuth_1.default)(logger);
    const startSock = () => __awaiter(void 0, void 0, void 0, function* () {
        const ӄ𝖗𝖞ӄ𝖓𝖟 = (0, baileys_1.default)({
            logger,
            printQRInTerminal: true,
            auth: state,
            browser: ["Arctix Api", "Chrome", "4.0.0"],
            getMessage: (key) => __awaiter(void 0, void 0, void 0, function* () {
                return {};
            }),
        });
        //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
        store === null || store === void 0 ? void 0 : store.bind(ӄ𝖗𝖞ӄ𝖓𝖟.ev);
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("group-participants.update", (update) => __awaiter(void 0, void 0, void 0, function* () {
            participants_update_1.default.participants_update(update, ӄ𝖗𝖞ӄ𝖓𝖟);
        }));
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("connection.update", (update) => {
            connection_update_1.default.connection_update(update, baileys_1.DisconnectReason, startSock);
        });
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("messages.upsert", (update) => __awaiter(void 0, void 0, void 0, function* () {
            messages_upsert_1.default.messages_upsert(update, ӄ𝖗𝖞ӄ𝖓𝖟, commandHandler);
        }));
        ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("creds.update", (creds) => {
            saveCreds(creds);
        });
        return ӄ𝖗𝖞ӄ𝖓𝖟;
    });
    startSock();
}))().catch((error) => console.log("[MAINERROR] : %s", chalk_1.default.red(error)));
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
