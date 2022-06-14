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
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const message_type_1 = require("./message-type");
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
class Client {
    constructor(ӄ𝖗𝖞ӄ𝖓𝖟) {
        this.ӄ𝖗𝖞ӄ𝖓𝖟 = ӄ𝖗𝖞ӄ𝖓𝖟;
    }
    sendMessage(jid, content, type, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            let ops;
            if (type === message_type_1.MessageType.text) {
                ops = {
                    text: content,
                };
                console.log(options);
                if ((_a = options === null || options === void 0 ? void 0 : options.contextInfo) === null || _a === void 0 ? void 0 : _a.mentionedJid) {
                    ops.mentions = options.contextInfo.mentionedJid;
                }
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
            }
            else if (type === message_type_1.MessageType.sticker) {
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
                    sticker: new Buffer(content),
                });
            }
            else if (type === message_type_1.MessageType.audio) {
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
                    audio: content,
                    mimetype: "audio/mp4",
                });
            }
            else if (type === message_type_1.MessageType.image) {
                ops = {
                    image: content,
                };
                if (options === null || options === void 0 ? void 0 : options.caption) {
                    ops.caption = options.caption;
                }
                console.log(options);
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
            }
            else if (type == message_type_1.MessageType.audio) {
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
                    audio: content,
                    mimetype: "audio/mp3",
                });
            }
            else if (type === message_type_1.MessageType.buttonsMessage) {
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, content);
            }
            else if (type == message_type_1.MessageType.video) {
                ops = {
                    video: content,
                };
                if (options === null || options === void 0 ? void 0 : options.caption) {
                    ops.caption = options.caption;
                }
                console.log(options);
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
            }
            else if (type === message_type_1.MessageType.document) {
                ops = {
                    text: options.caption,
                };
                let ops2 = {
                    document: content,
                };
                if (options === null || options === void 0 ? void 0 : options.mimetype) {
                    ops2.mimetype = options.mimetype;
                    ops2.fileName = options.filename;
                }
                console.log(options);
                yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops);
                res = yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, ops2);
            }
            return res;
        });
    }
    deleteMessage(jid, key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, {
                delete: key,
            });
        });
    }
    getGroupMetaData(jid, AʀƈȶɨӼ) {
        return __awaiter(this, void 0, void 0, function* () {
            const groupMetadata = jid.endsWith("@g.us")
                ? yield this.ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(jid)
                : null;
            const getGroupAdmins = (participants) => {
                var admins = [];
                for (var i in participants) {
                    participants[i].admin ? admins.push(participants[i].id) : "";
                }
                return admins;
            };
            AʀƈȶɨӼ.groupName = AʀƈȶɨӼ.isGroup ? groupMetadata.subject : null;
            AʀƈȶɨӼ.groupMembers = AʀƈȶɨӼ.isGroup ? groupMetadata.participants : null;
            AʀƈȶɨӼ.groupAdmins = AʀƈȶɨӼ.isGroup
                ? getGroupAdmins(AʀƈȶɨӼ.groupMembers)
                : null;
            AʀƈȶɨӼ.groupId = AʀƈȶɨӼ.isGroup ? groupMetadata.id : null;
            AʀƈȶɨӼ.isBotGroupAdmin = AʀƈȶɨӼ.isGroup
                ? AʀƈȶɨӼ.groupAdmins.includes(AʀƈȶɨӼ.owner)
                : false;
            AʀƈȶɨӼ.isSenderGroupAdmin = AʀƈȶɨӼ.isGroup
                ? AʀƈȶɨӼ.groupAdmins.includes(AʀƈȶɨӼ.sender)
                : false;
        });
    }
}
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = Client;
