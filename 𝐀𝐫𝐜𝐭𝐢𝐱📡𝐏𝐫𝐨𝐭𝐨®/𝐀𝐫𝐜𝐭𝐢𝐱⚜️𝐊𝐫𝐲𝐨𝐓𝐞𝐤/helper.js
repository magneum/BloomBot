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
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ______1 = __importDefault(require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const chalk_1 = __importDefault(require("chalk"));
const msb_1 = __importDefault(require("./msb"));
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const resolve = function (messageInstance, TUF) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
    return __awaiter(this, void 0, void 0, function* () {
        var AʀƈȶɨӼ = new msb_1.default();
        var prefix = ______1.default.PREFIX + "\\w+";
        var prefixRegex = new RegExp(prefix, "g");
        var TUFsstring = ______1.default.TUFs;
        try {
            var jsonMessage = JSON.stringify(messageInstance);
        }
        catch (err) {
            console.log(chalk_1.default.redBright("[ERROR] Something went wrong. ", err));
        }
        //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
        AʀƈȶɨӼ.chatId = messageInstance.key.remoteJid;
        AʀƈȶɨӼ.fromMe = messageInstance.key.fromMe;
        AʀƈȶɨӼ.owner = TUF.user.id.replace(/:.*@/g, "@");
        AʀƈȶɨӼ.mimeType = messageInstance.message
            ? Object.keys(messageInstance.message)[0] === "senderKeyDistributionMessage"
                ? Object.keys(messageInstance.message)[2]
                : Object.keys(messageInstance.message)[0]
            : null;
        AʀƈȶɨӼ.type =
            AʀƈȶɨӼ.mimeType === "imageMessage"
                ? "image"
                : AʀƈȶɨӼ.mimeType === "videoMessage"
                    ? "video"
                    : AʀƈȶɨӼ.mimeType === "conversation" ||
                        AʀƈȶɨӼ.mimeType == "extendedTextMessage"
                        ? "text"
                        : AʀƈȶɨӼ.mimeType === "audioMessage"
                            ? "audio"
                            : AʀƈȶɨӼ.mimeType === "stickerMessage"
                                ? "sticker"
                                : AʀƈȶɨӼ.mimeType === "senderKeyDistributionMessage" &&
                                    ((_b = (_a = messageInstance.message) === null || _a === void 0 ? void 0 : _a.senderKeyDistributionMessage) === null || _b === void 0 ? void 0 : _b.groupId) ===
                                        "status@broadcast"
                                    ? "status"
                                    : null;
        AʀƈȶɨӼ.isTextReply =
            AʀƈȶɨӼ.mimeType === "extendedTextMessage" &&
                ((_e = (_d = (_c = messageInstance.message) === null || _c === void 0 ? void 0 : _c.extendedTextMessage) === null || _d === void 0 ? void 0 : _d.contextInfo) === null || _e === void 0 ? void 0 : _e.stanzaId)
                ? true
                : false;
        AʀƈȶɨӼ.replyMessageId =
            (_h = (_g = (_f = messageInstance.message) === null || _f === void 0 ? void 0 : _f.extendedTextMessage) === null || _g === void 0 ? void 0 : _g.contextInfo) === null || _h === void 0 ? void 0 : _h.stanzaId;
        AʀƈȶɨӼ.replyParticipant =
            (_l = (_k = (_j = messageInstance.message) === null || _j === void 0 ? void 0 : _j.extendedTextMessage) === null || _k === void 0 ? void 0 : _k.contextInfo) === null || _l === void 0 ? void 0 : _l.participant;
        AʀƈȶɨӼ.replyMessage =
            (_q = (_p = (_o = (_m = messageInstance.message) === null || _m === void 0 ? void 0 : _m.extendedTextMessage) === null || _o === void 0 ? void 0 : _o.contextInfo) === null || _p === void 0 ? void 0 : _p.quotedMessage) === null || _q === void 0 ? void 0 : _q.conversation;
        AʀƈȶɨӼ.body =
            AʀƈȶɨӼ.mimeType === "conversation"
                ? (_r = messageInstance.message) === null || _r === void 0 ? void 0 : _r.conversation
                : AʀƈȶɨӼ.mimeType == "imageMessage"
                    ? (_s = messageInstance.message) === null || _s === void 0 ? void 0 : _s.imageMessage.caption
                    : AʀƈȶɨӼ.mimeType == "videoMessage"
                        ? (_t = messageInstance.message) === null || _t === void 0 ? void 0 : _t.videoMessage.caption
                        : AʀƈȶɨӼ.mimeType == "extendedTextMessage"
                            ? (_v = (_u = messageInstance.message) === null || _u === void 0 ? void 0 : _u.extendedTextMessage) === null || _v === void 0 ? void 0 : _v.text
                            : AʀƈȶɨӼ.mimeType == "buttonsResponseMessage"
                                ? (_w = messageInstance.message) === null || _w === void 0 ? void 0 : _w.buttonsResponseMessage.selectedDisplayText
                                : null;
        AʀƈȶɨӼ.isCmd = prefixRegex.test(AʀƈȶɨӼ.body);
        AʀƈȶɨӼ.commandName = AʀƈȶɨӼ.isCmd
            ? AʀƈȶɨӼ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
            : null;
        AʀƈȶɨӼ.isImage = AʀƈȶɨӼ.type === "image";
        AʀƈȶɨӼ.isReplyImage = ((_0 = (_z = (_y = (_x = messageInstance.message) === null || _x === void 0 ? void 0 : _x.extendedTextMessage) === null || _y === void 0 ? void 0 : _y.contextInfo) === null || _z === void 0 ? void 0 : _z.quotedMessage) === null || _0 === void 0 ? void 0 : _0.imageMessage)
            ? true
            : false;
        AʀƈȶɨӼ.imageCaption = AʀƈȶɨӼ.isImage
            ? (_1 = messageInstance.message) === null || _1 === void 0 ? void 0 : _1.imageMessage.caption
            : null;
        AʀƈȶɨӼ.isGIF =
            AʀƈȶɨӼ.type === "video" &&
                ((_3 = (_2 = messageInstance.message) === null || _2 === void 0 ? void 0 : _2.videoMessage) === null || _3 === void 0 ? void 0 : _3.gifPlayback);
        AʀƈȶɨӼ.isReplyGIF = ((_8 = (_7 = (_6 = (_5 = (_4 = messageInstance.message) === null || _4 === void 0 ? void 0 : _4.extendedTextMessage) === null || _5 === void 0 ? void 0 : _5.contextInfo) === null || _6 === void 0 ? void 0 : _6.quotedMessage) === null || _7 === void 0 ? void 0 : _7.videoMessage) === null || _8 === void 0 ? void 0 : _8.gifPlayback)
            ? true
            : false;
        AʀƈȶɨӼ.isSticker = AʀƈȶɨӼ.type === "sticker";
        AʀƈȶɨӼ.isReplySticker = ((_12 = (_11 = (_10 = (_9 = messageInstance.message) === null || _9 === void 0 ? void 0 : _9.extendedTextMessage) === null || _10 === void 0 ? void 0 : _10.contextInfo) === null || _11 === void 0 ? void 0 : _11.quotedMessage) === null || _12 === void 0 ? void 0 : _12.stickerMessage)
            ? true
            : false;
        AʀƈȶɨӼ.isReplyAnimatedSticker =
            (_17 = (_16 = (_15 = (_14 = (_13 = messageInstance.message) === null || _13 === void 0 ? void 0 : _13.extendedTextMessage) === null || _14 === void 0 ? void 0 : _14.contextInfo) === null || _15 === void 0 ? void 0 : _15.quotedMessage) === null || _16 === void 0 ? void 0 : _16.stickerMessage) === null || _17 === void 0 ? void 0 : _17.isAnimated;
        AʀƈȶɨӼ.isVideo =
            AʀƈȶɨӼ.type === "video" &&
                !((_19 = (_18 = messageInstance.message) === null || _18 === void 0 ? void 0 : _18.videoMessage) === null || _19 === void 0 ? void 0 : _19.gifPlayback);
        AʀƈȶɨӼ.isReplyVideo = AʀƈȶɨӼ.isTextReply
            ? jsonMessage.indexOf("videoMessage") !== -1 &&
                !((_21 = (_20 = messageInstance.message) === null || _20 === void 0 ? void 0 : _20.extendedTextMessage) === null || _21 === void 0 ? void 0 : _21.contextInfo.quotedMessage.videoMessage.gifPlayback)
            : false;
        AʀƈȶɨӼ.isAudio = AʀƈȶɨӼ.type === "audio";
        AʀƈȶɨӼ.isReplyAudio = ((_25 = (_24 = (_23 = (_22 = messageInstance.message) === null || _22 === void 0 ? void 0 : _22.extendedTextMessage) === null || _23 === void 0 ? void 0 : _23.contextInfo) === null || _24 === void 0 ? void 0 : _24.quotedMessage) === null || _25 === void 0 ? void 0 : _25.audioMessage)
            ? true
            : false;
        AʀƈȶɨӼ.logGroup = TUF.user.id.replace(/:.*@/g, "@");
        AʀƈȶɨӼ.isGroup = AʀƈȶɨӼ.chatId.endsWith("@g.us");
        AʀƈȶɨӼ.isPm = !AʀƈȶɨӼ.isGroup;
        AʀƈȶɨӼ.sender =
            AʀƈȶɨӼ.isGroup && messageInstance.message && AʀƈȶɨӼ.fromMe
                ? AʀƈȶɨӼ.owner
                : AʀƈȶɨӼ.isGroup && messageInstance.message
                    ? messageInstance.key.participant
                    : !AʀƈȶɨӼ.isGroup
                        ? AʀƈȶɨӼ.chatId
                        : null;
        AʀƈȶɨӼ.isSenderTUFs = TUFsstring.includes((_26 = AʀƈȶɨӼ.sender) === null || _26 === void 0 ? void 0 : _26.substring(0, AʀƈȶɨӼ.sender.indexOf("@")));
        return AʀƈȶɨӼ;
    });
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = resolve;
