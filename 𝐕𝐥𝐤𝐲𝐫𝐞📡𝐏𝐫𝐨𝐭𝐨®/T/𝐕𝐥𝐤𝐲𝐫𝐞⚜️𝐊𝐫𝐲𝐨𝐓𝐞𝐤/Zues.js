"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODCommands = exports.adminCommands = void 0;
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const ______1 = __importDefault(require("../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const promises_1 = require("fs/promises");
const message_type_1 = require("./message-type");
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const getCleanedContact = (ǟʀɢʊʍɛռȶ, TUF, Vʟӄʏʀɛ) => __awaiter(void 0, void 0, void 0, function* () {
    var jidNumber = "";
    var countryCode = ______1.default.CCD;
    if (parseInt(ǟʀɢʊʍɛռȶ[0]) === NaN || ǟʀɢʊʍɛռȶ[0][0] === "+" || ǟʀɢʊʍɛռȶ[0][0] === "@") {
        if (ǟʀɢʊʍɛռȶ[0][0] === "@" || ǟʀɢʊʍɛռȶ[0][0] === "+") {
            jidNumber = ǟʀɢʊʍɛռȶ[0].substring(1, ǟʀɢʊʍɛռȶ[0].length + 1);
        }
        else {
            TUF.sendMessage(Vʟӄʏʀɛ.chatId, "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_", message_type_1.MessageType.text);
            return undefined;
        }
    }
    else {
        jidNumber = ǟʀɢʊʍɛռȶ[0];
    }
    if (jidNumber.length < 8 || jidNumber.length > 13) {
        TUF.sendMessage(Vʟӄʏʀɛ.chatId, "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_", message_type_1.MessageType.text);
        return undefined;
    }
    else if (jidNumber.length === 10) {
        jidNumber = countryCode + jidNumber;
    }
    console.log(jidNumber);
    var isOnWhatsApp = yield TUF.ӄ𝖗𝖞ӄ𝖓𝖟.onWhatsApp(jidNumber);
    if (isOnWhatsApp === undefined) {
        throw "NumberInvalid";
    }
    return jidNumber;
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const deleteFiles = (...locations) => __awaiter(void 0, void 0, void 0, function* () {
    for (let location of locations) {
        fs_1.default.unlink(location, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("\nDeleted file at: " + location);
            }
        });
    }
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const performanceTime = (startTime) => __awaiter(void 0, void 0, void 0, function* () {
    var endTime = window.performance.now();
    console.log(`-----------\nExecution time: ${(endTime - startTime) / 1000} seconds\n----------`);
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const isMember = (chatId, groupMembers) => __awaiter(void 0, void 0, void 0, function* () {
    var isMember = false;
    if (!(chatId === undefined)) {
        for (const index in groupMembers) {
            if (chatId == groupMembers[index].id.split("@")[0]) {
                isMember = true;
            }
        }
    }
    return isMember;
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const handleError = (err, TUF, Vʟӄʏʀɛ, customMessage = "```Something went wrong. The error has been logged in log chats```") => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.redBright.bold("[ERROR] " + err));
    let data = {
        commandName: Vʟӄʏʀɛ.commandName,
        fromMe: Vʟӄʏʀɛ.fromMe,
        isReply: Vʟӄʏʀɛ.isReply,
        isGroup: Vʟӄʏʀɛ.isGroup,
        isPm: Vʟӄʏʀɛ.isPm,
        isImage: Vʟӄʏʀɛ.isImage,
        isBotGroupAdmin: Vʟӄʏʀɛ.isBotGroupAdmin,
        isSenderGroupAdmin: Vʟӄʏʀɛ.isSenderGroupAdmin,
        isSenderMOD: Vʟӄʏʀɛ.isSenderMOD,
        err: err,
    };
    // TUF.sendMessage(Vʟӄʏʀɛ.chatId, customMessage, MessageType.text);
    // TUF.sendMessage(Vʟӄʏʀɛ.logGroup, { text: format(ERROR_TEMPLATE, data) });
});
const saveBuffer = (fileName, stream) => { var stream_1, stream_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    let buffer = Buffer.from([]);
    try {
        for (stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), !stream_1_1.done;) {
            const chunk = stream_1_1.value;
            buffer = Buffer.concat([buffer, chunk]);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (stream_1_1 && !stream_1_1.done && (_a = stream_1.return)) yield _a.call(stream_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    yield (0, promises_1.writeFile)(fileName, buffer);
}); };
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const inputSanitization = {
    handleError: handleError,
    deleteFiles: deleteFiles,
    saveBuffer: saveBuffer,
    getCleanedContact: getCleanedContact,
    isMember: isMember,
};
exports.default = inputSanitization;
exports.adminCommands = [
    "add",
    "demote",
    "invite",
    "mute",
    "promote",
    "remove",
    "unmute",
    "welcome",
    "disappear",
    "goodbye",
    "setdp",
    "tagall",
    "abl",
    "rbl",
];
exports.MODCommands = ["block", "unblock"];
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
