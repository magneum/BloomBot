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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const ______1 = __importDefault(require("../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const chalk_1 = __importDefault(require("chalk"));
const msb_1 = __importDefault(require("./msb"));
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const resolve = function (messageInstance, TUF) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
    return __awaiter(this, void 0, void 0, function* () {
        var Vʟӄʏʀɛ = new msb_1.default();
        var prefix = ______1.default.MuveOn;
        var MODstring = ______1.default.MOD;
        try {
            var jsonMessage = JSON.stringify(messageInstance);
        }
        catch (err) {
            console.log(chalk_1.default.redBright("[ERROR] Something went wrong. ", err));
        }
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        Vʟӄʏʀɛ.chatId = messageInstance.key.remoteJid.replace("-", "");
        Vʟӄʏʀɛ.fromMe = messageInstance.key.fromMe;
        Vʟӄʏʀɛ.owner = TUF.user.id.replace(/:.*@/g, "@");
        Vʟӄʏʀɛ.mimeType = messageInstance.message
            ? Object.keys(messageInstance.message)[0] === "senderKeyDistributionMessage"
                ? Object.keys(messageInstance.message)[2]
                : Object.keys(messageInstance.message)[0]
            : null;
        Vʟӄʏʀɛ.type =
            Vʟӄʏʀɛ.mimeType === "imageMessage"
                ? "image"
                : Vʟӄʏʀɛ.mimeType === "videoMessage"
                    ? "video"
                    : Vʟӄʏʀɛ.mimeType === "conversation" ||
                        Vʟӄʏʀɛ.mimeType == "extendedTextMessage"
                        ? "text"
                        : Vʟӄʏʀɛ.mimeType === "audioMessage"
                            ? "audio"
                            : Vʟӄʏʀɛ.mimeType === "stickerMessage"
                                ? "sticker"
                                : Vʟӄʏʀɛ.mimeType === "senderKeyDistributionMessage" &&
                                    ((_b = (_a = messageInstance.message) === null || _a === void 0 ? void 0 : _a.senderKeyDistributionMessage) === null || _b === void 0 ? void 0 : _b.groupId) ===
                                        "status@broadcast"
                                    ? "status"
                                    : null;
        Vʟӄʏʀɛ.isTextReply =
            Vʟӄʏʀɛ.mimeType === "extendedTextMessage" &&
                ((_e = (_d = (_c = messageInstance.message) === null || _c === void 0 ? void 0 : _c.extendedTextMessage) === null || _d === void 0 ? void 0 : _d.contextInfo) === null || _e === void 0 ? void 0 : _e.stanzaId)
                ? true
                : false;
        Vʟӄʏʀɛ.replyMessageId =
            (_h = (_g = (_f = messageInstance.message) === null || _f === void 0 ? void 0 : _f.extendedTextMessage) === null || _g === void 0 ? void 0 : _g.contextInfo) === null || _h === void 0 ? void 0 : _h.stanzaId;
        Vʟӄʏʀɛ.replyParticipant =
            (_l = (_k = (_j = messageInstance.message) === null || _j === void 0 ? void 0 : _j.extendedTextMessage) === null || _k === void 0 ? void 0 : _k.contextInfo) === null || _l === void 0 ? void 0 : _l.participant;
        Vʟӄʏʀɛ.replyMessage =
            (_q = (_p = (_o = (_m = messageInstance.message) === null || _m === void 0 ? void 0 : _m.extendedTextMessage) === null || _o === void 0 ? void 0 : _o.contextInfo) === null || _p === void 0 ? void 0 : _p.quotedMessage) === null || _q === void 0 ? void 0 : _q.conversation;
        Vʟӄʏʀɛ.body =
            Vʟӄʏʀɛ.mimeType === "conversation"
                ? (_r = messageInstance.message) === null || _r === void 0 ? void 0 : _r.conversation
                : Vʟӄʏʀɛ.mimeType == "imageMessage"
                    ? (_s = messageInstance.message) === null || _s === void 0 ? void 0 : _s.imageMessage.caption
                    : Vʟӄʏʀɛ.mimeType == "videoMessage"
                        ? (_t = messageInstance.message) === null || _t === void 0 ? void 0 : _t.videoMessage.caption
                        : Vʟӄʏʀɛ.mimeType == "extendedTextMessage"
                            ? (_v = (_u = messageInstance.message) === null || _u === void 0 ? void 0 : _u.extendedTextMessage) === null || _v === void 0 ? void 0 : _v.text
                            : Vʟӄʏʀɛ.mimeType == "buttonsResponseMessage"
                                ? (_w = messageInstance.message) === null || _w === void 0 ? void 0 : _w.buttonsResponseMessage.selectedDisplayText
                                : null;
        Vʟӄʏʀɛ.isARC = Vʟӄʏʀɛ.body.startsWith(prefix);
        Vʟӄʏʀɛ.commandName = Vʟӄʏʀɛ.isARC
            ? Vʟӄʏʀɛ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
            : null;
        Vʟӄʏʀɛ.isImage = Vʟӄʏʀɛ.type === "image";
        Vʟӄʏʀɛ.isReplyImage = ((_0 = (_z = (_y = (_x = messageInstance.message) === null || _x === void 0 ? void 0 : _x.extendedTextMessage) === null || _y === void 0 ? void 0 : _y.contextInfo) === null || _z === void 0 ? void 0 : _z.quotedMessage) === null || _0 === void 0 ? void 0 : _0.imageMessage)
            ? true
            : false;
        Vʟӄʏʀɛ.imageCaption = Vʟӄʏʀɛ.isImage
            ? (_1 = messageInstance.message) === null || _1 === void 0 ? void 0 : _1.imageMessage.caption
            : null;
        Vʟӄʏʀɛ.isGIF =
            Vʟӄʏʀɛ.type === "video" &&
                ((_3 = (_2 = messageInstance.message) === null || _2 === void 0 ? void 0 : _2.videoMessage) === null || _3 === void 0 ? void 0 : _3.gifPlayback);
        Vʟӄʏʀɛ.isReplyGIF = ((_8 = (_7 = (_6 = (_5 = (_4 = messageInstance.message) === null || _4 === void 0 ? void 0 : _4.extendedTextMessage) === null || _5 === void 0 ? void 0 : _5.contextInfo) === null || _6 === void 0 ? void 0 : _6.quotedMessage) === null || _7 === void 0 ? void 0 : _7.videoMessage) === null || _8 === void 0 ? void 0 : _8.gifPlayback)
            ? true
            : false;
        Vʟӄʏʀɛ.isSticker = Vʟӄʏʀɛ.type === "sticker";
        Vʟӄʏʀɛ.isReplySticker = ((_12 = (_11 = (_10 = (_9 = messageInstance.message) === null || _9 === void 0 ? void 0 : _9.extendedTextMessage) === null || _10 === void 0 ? void 0 : _10.contextInfo) === null || _11 === void 0 ? void 0 : _11.quotedMessage) === null || _12 === void 0 ? void 0 : _12.stickerMessage)
            ? true
            : false;
        Vʟӄʏʀɛ.isReplyAnimatedSticker =
            (_17 = (_16 = (_15 = (_14 = (_13 = messageInstance.message) === null || _13 === void 0 ? void 0 : _13.extendedTextMessage) === null || _14 === void 0 ? void 0 : _14.contextInfo) === null || _15 === void 0 ? void 0 : _15.quotedMessage) === null || _16 === void 0 ? void 0 : _16.stickerMessage) === null || _17 === void 0 ? void 0 : _17.isAnimated;
        Vʟӄʏʀɛ.isVideo =
            Vʟӄʏʀɛ.type === "video" &&
                !((_19 = (_18 = messageInstance.message) === null || _18 === void 0 ? void 0 : _18.videoMessage) === null || _19 === void 0 ? void 0 : _19.gifPlayback);
        Vʟӄʏʀɛ.isReplyVideo = Vʟӄʏʀɛ.isTextReply
            ? jsonMessage.indexOf("videoMessage") !== -1 &&
                !((_21 = (_20 = messageInstance.message) === null || _20 === void 0 ? void 0 : _20.extendedTextMessage) === null || _21 === void 0 ? void 0 : _21.contextInfo.quotedMessage.videoMessage.gifPlayback)
            : false;
        Vʟӄʏʀɛ.isAudio = Vʟӄʏʀɛ.type === "audio";
        Vʟӄʏʀɛ.isReplyAudio = ((_25 = (_24 = (_23 = (_22 = messageInstance.message) === null || _22 === void 0 ? void 0 : _22.extendedTextMessage) === null || _23 === void 0 ? void 0 : _23.contextInfo) === null || _24 === void 0 ? void 0 : _24.quotedMessage) === null || _25 === void 0 ? void 0 : _25.audioMessage)
            ? true
            : false;
        Vʟӄʏʀɛ.logGroup = TUF.user.id.replace(/:.*@/g, "@");
        Vʟӄʏʀɛ.isGroup = Vʟӄʏʀɛ.chatId.endsWith("@g.us");
        Vʟӄʏʀɛ.isPm = !Vʟӄʏʀɛ.isGroup;
        Vʟӄʏʀɛ.sender =
            Vʟӄʏʀɛ.isGroup && messageInstance.message && Vʟӄʏʀɛ.fromMe
                ? Vʟӄʏʀɛ.owner
                : Vʟӄʏʀɛ.isGroup && messageInstance.message
                    ? messageInstance.key.participant
                    : !Vʟӄʏʀɛ.isGroup
                        ? Vʟӄʏʀɛ.chatId
                        : null;
        Vʟӄʏʀɛ.isSenderMOD = MODstring.includes((_26 = Vʟӄʏʀɛ.sender) === null || _26 === void 0 ? void 0 : _26.substring(0, Vʟӄʏʀɛ.sender.indexOf("@")));
        return Vʟӄʏʀɛ;
    });
};
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
module.exports = resolve;
