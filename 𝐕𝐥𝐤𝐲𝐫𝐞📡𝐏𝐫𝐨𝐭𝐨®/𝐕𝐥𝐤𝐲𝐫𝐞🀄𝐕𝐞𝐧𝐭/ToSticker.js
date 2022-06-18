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
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const promises_1 = require("fs/promises");
const Oops = require(`../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
const message_type_1 = require("../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\u269C\uFE0F\uD835\uDC0A\uD835\uDC2B\uD835\uDC32\uD835\uDC28\uD835\uDC13\uD835\uDC1E\uD835\uDC24/message-type");
const baileys_1 = require("@adiwajshing/baileys");
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const ToSticker = (TUF, Fox, ǟʀɢʊʍɛռȶ, Vʟӄʏʀɛ, FileID, FileSocket) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const FileName = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/B-" + FileID;
        const ConvertedPath = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/A-" + FileID + ".webp";
        const FileStream = yield (0, baileys_1.downloadContentFromMessage)(FileSocket.message, FileSocket.type);
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        const saveBuffer = (FileName, FileStream) => { var FileStream_1, FileStream_1_1; return __awaiter(void 0, void 0, void 0, function* () {
            var e_1, _a;
            let buffer = Buffer.from([]);
            try {
                for (FileStream_1 = __asyncValues(FileStream); FileStream_1_1 = yield FileStream_1.next(), !FileStream_1_1.done;) {
                    const chunk = FileStream_1_1.value;
                    buffer = Buffer.concat([buffer, chunk]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (FileStream_1_1 && !FileStream_1_1.done && (_a = FileStream_1.return)) yield _a.call(FileStream_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            yield (0, promises_1.writeFile)(FileName, buffer);
        }); };
        yield saveBuffer(FileName, FileStream);
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        if (Vʟӄʏʀɛ.type === "image" || Vʟӄʏʀɛ.isReplyImage) {
            (0, fluent_ffmpeg_1.default)(FileName)
                .outputOptions(["-y", "-vcodec libwebp"])
                .videoFilters("scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1")
                .save(ConvertedPath)
                .on("end", (error) => __awaiter(void 0, void 0, void 0, function* () {
                if (error) {
                    return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
                }
                let ᴋʀᴀᴋɪɴᴢʟᴀʙ = yield new Sticker(ConvertedPath, {
                    type: "full",
                    pack: ǟʀɢʊʍɛռȶ[0] || "ʙʏ",
                    author: "⌬𝐕𝐥𝐤𝐲𝐫𝐞",
                    categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
                }).build();
                // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
                if (!ǟʀɢʊʍɛռȶ) {
                    yield TUF.sendMessage(Vʟӄʏʀɛ.chatId, `💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐕𝐥𝐤𝐲𝐫𝐞
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`, message_type_1.MessageType.text, {
                        quoted: true,
                    });
                    yield TUF
                        .sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, message_type_1.MessageType.sticker)
                        .catch((error) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
                    yield VOID.VOID(FileName, ConvertedPath);
                }
                else {
                    yield TUF
                        .sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, message_type_1.MessageType.sticker)
                        .catch((error) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
                    yield VOID.VOID(FileName, ConvertedPath);
                }
            }));
            // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        }
        else {
            (0, fluent_ffmpeg_1.default)(FileName)
                .duration(8)
                .outputOptions([
                "-y",
                "-vcodec libwebp",
                "-lossless 1",
                "-qscale 1",
                "-preset default",
                "-loop 0",
                "-an",
                "-vsync 0",
                "-s 600x600",
            ])
                .videoFilters("scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1")
                .save(ConvertedPath)
                .on("end", (error) => __awaiter(void 0, void 0, void 0, function* () {
                if (error) {
                    return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
                }
                let ᴋʀᴀᴋɪɴᴢʟᴀʙ = yield new Sticker(ConvertedPath, {
                    type: "full",
                    pack: ǟʀɢʊʍɛռȶ[0] || "ʙʏ",
                    author: "⌬𝐕𝐥𝐤𝐲𝐫𝐞",
                    categories: "ᴋʀᴀᴋɪɴᴢʟᴀʙ™",
                }).build();
                // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
                if (!ǟʀɢʊʍɛռȶ) {
                    yield TUF.sendMessage(Vʟӄʏʀɛ.chatId, `💡𝐈𝐧𝐟𝐨: No Sticker Title Provided.
Using Default Layout..

*Sticker Title:* ʙʏ,
*Sticker Author:* ⌬𝐕𝐥𝐤𝐲𝐫𝐞
*Sticker Category:* ᴋʀᴀᴋɪɴᴢʟᴀʙ™`, message_type_1.MessageType.text, {
                        quoted: true,
                    });
                    yield TUF
                        .sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, message_type_1.MessageType.sticker)
                        .catch((error) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
                    yield VOID.VOID(FileName, ConvertedPath);
                }
                else {
                    yield TUF
                        .sendMessage(Vʟӄʏʀɛ.chatId, ᴋʀᴀᴋɪɴᴢʟᴀʙ, message_type_1.MessageType.sticker)
                        .catch((error) => Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error));
                    yield VOID.VOID(FileName, ConvertedPath);
                }
            }));
        }
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
    }
    catch (error) {
        console.log(error);
    }
});
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
module.exports = {
    VStk: ToSticker,
};
