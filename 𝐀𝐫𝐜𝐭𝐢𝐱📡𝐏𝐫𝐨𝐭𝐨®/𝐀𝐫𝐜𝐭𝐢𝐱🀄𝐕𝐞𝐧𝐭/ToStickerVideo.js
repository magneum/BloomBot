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
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const fs = __importStar(require("fs"));
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const form_data_1 = __importDefault(require("form-data"));
const promises_1 = require("fs/promises");
const Oops = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
const Video_Button_1 = __importDefault(require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u2618\uFE0F\uD835\uDC0A\uD835\uDC1E\uD835\uDC32\uD835\uDC2C/Video_Button"));
const baileys_1 = require("@adiwajshing/baileys");
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const ToStickerVideo = (TUF, Fox, ǟʀɢʊʍɛռȶ, AʀƈȶɨӼ, FileID, FileSocket) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        */
        function ProcM(filePath, ConvertedVideo) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const bodyForm = new form_data_1.default();
                    bodyForm.append("new-image-url", "");
                    bodyForm.append("new-image", fs.createReadStream(filePath));
                    let { data } = yield (0, axios_1.default)({
                        method: "post",
                        url: "https://s6.ezgif.com/webp-to-mp4",
                        data: bodyForm,
                        headers: {
                            "Content-Type": `multipart/form-data boundary=${bodyForm._boundary}`,
                        },
                    });
                    const bodyFormThen = new form_data_1.default();
                    var $ = cheerio_1.default.load(data);
                    const file = $('input[name="file"]').attr("value");
                    const convert = $('input[name="file"]').attr("value");
                    const gotdata = {
                        file: file,
                        convert: convert,
                    };
                    bodyFormThen.append("file", gotdata.file);
                    bodyFormThen.append("convert", gotdata.convert);
                    let res = yield (0, axios_1.default)({
                        method: "post",
                        url: "https://ezgif.com/webp-to-mp4/" + gotdata.file,
                        data: bodyFormThen,
                        headers: {
                            "Content-Type": `multipart/form-data boundary=${bodyFormThen._boundary}`,
                        },
                    });
                    $ = cheerio_1.default.load(res.data);
                    const result = "https:" + $("div#output > p.outfile > video > source").attr("src");
                    return result;
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
        /*
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        */
        const FileName = "./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/B-" + FileID;
        const ConvertedVideo = "./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/A-" + FileID + ".mp4";
        const FileStream = yield (0, baileys_1.downloadContentFromMessage)(FileSocket.message, FileSocket.type);
        /*
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        */
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
        /*
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
        */
        try {
            let res = yield ProcM(FileName, ConvertedVideo);
            yield Video_Button_1.default.VVid(TUF, Fox, AʀƈȶɨӼ, res, `💡𝐈𝐧𝐟𝐨: Here is your Sticker To Video Converted File.`);
            return yield VOID.VOID(FileName, ConvertedVideo);
        }
        catch (error) {
            return Oops.VOp(TUF, Fox, AʀƈȶɨӼ, error);
        }
    }
    catch (error) {
        console.log(error);
    }
});
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = {
    VStk: ToStickerVideo,
};
