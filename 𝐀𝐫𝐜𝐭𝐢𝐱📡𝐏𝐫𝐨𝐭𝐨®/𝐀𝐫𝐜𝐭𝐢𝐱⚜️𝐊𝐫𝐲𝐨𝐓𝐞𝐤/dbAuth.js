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
Object.defineProperty(exports, "__esModule", { value: true });
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const baileys_1 = require("@adiwajshing/baileys");
const auth_1 = require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u2708\uFE0F\uD835\uDC02\uD835\uDC28\uD835\uDC27\uD835\uDC27\uD835\uDC1E\uD835\uDC1C\uD835\uDC2D/\uD83D\uDD78\uFE0Fsql/auth");
const KEY_MAP = {
    "pre-key": "preKeys",
    session: "sessions",
    "sender-key": "senderKeys",
    "app-state-sync-key": "appStateSyncKeys",
    "app-state-sync-version": "appStateVersions",
    "sender-key-memory": "senderKeyMemory",
};
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const useRemoteFileAuthState = (logger) => __awaiter(void 0, void 0, void 0, function* () {
    let creds;
    let keys = {};
    const checkCreds = () => __awaiter(void 0, void 0, void 0, function* () {
        const lock = yield auth_1.Cred.findOne({
            where: {
                key: "noiseKey",
            },
        });
        if (lock) {
            return true;
        }
        else {
            return false;
        }
    });
    /*
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    */
    const loadCreds = () => __awaiter(void 0, void 0, void 0, function* () {
        const allCreds = yield auth_1.Cred.findAll();
        let temp = {};
        allCreds.forEach((res) => {
            let val = res.getDataValue("value");
            let key = res.getDataValue("key");
            val = JSON.parse(val, baileys_1.BufferJSON.reviver);
            temp[key] = val;
        });
        return temp;
    });
    /*
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    */
    const loadKeys = () => __awaiter(void 0, void 0, void 0, function* () {
        let keys = {
            preKeys: {},
            sessions: {},
            senderKeys: {},
            appStateSyncKeys: {},
            appStateVersions: {},
            senderKeyMemory: {},
        };
        const allKeys = yield auth_1.Key.findAll();
        allKeys.forEach((res) => {
            let val = res.getDataValue("value");
            let key = res.getDataValue("key");
            let type = res.getDataValue("type");
            val = JSON.parse(val, baileys_1.BufferJSON.reviver);
            keys[type][key] = val;
        });
        return keys;
    });
    /*
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    */
    const saveCreds = (data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!data) {
            data = creds;
        }
        for (const _key in data) {
            const cred = yield auth_1.Cred.findOne({
                where: {
                    key: _key,
                },
            });
            if (cred) {
                yield cred
                    .update({
                    value: JSON.stringify(data[_key], baileys_1.BufferJSON.replacer, 2),
                })
                    .then((res) => { })
                    .catch((err) => { });
            }
            else {
                yield auth_1.Cred.create({
                    key: _key,
                    value: JSON.stringify(data[_key], baileys_1.BufferJSON.replacer, 2),
                })
                    .then((res) => { })
                    .catch((err) => { });
            }
        }
    });
    /*
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    */
    const saveKey = (key, data, _key) => __awaiter(void 0, void 0, void 0, function* () {
        for (const subKey in data[_key]) {
            const res = yield auth_1.Key.findOne({
                where: {
                    key: subKey,
                    type: key,
                },
            });
            if (res) {
                yield res
                    .update({
                    value: JSON.stringify(data[_key][subKey], baileys_1.BufferJSON.replacer, 2),
                })
                    .then((res) => { })
                    .catch((err) => { });
            }
            else {
                yield auth_1.Key.create({
                    key: subKey,
                    value: JSON.stringify(data[_key][subKey], baileys_1.BufferJSON.replacer, 2),
                    type: key,
                })
                    .then((res) => { })
                    .catch((err) => { });
            }
        }
        return;
    });
    /*
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
    */
    let credsExist = yield checkCreds();
    if (credsExist) {
        let parent = {
            creds: {},
            keys: {},
        };
        const allCreds = yield loadCreds();
        const allKeys = yield loadKeys();
        parent.creds = allCreds;
        parent.keys = allKeys;
        const final = JSON.parse(JSON.stringify(parent), baileys_1.BufferJSON.reviver);
        creds = final.creds;
        keys = final.keys;
    }
    else {
        creds = (0, baileys_1.initAuthCreds)();
        keys = {};
        saveCreds();
    }
    return {
        state: {
            creds,
            keys: {
                get: (type, ids) => {
                    const key = KEY_MAP[type];
                    return ids.reduce((dict, id) => {
                        let _a;
                        let value = (_a = keys[key]) === null || _a === void 0 ? void 0 : _a[id];
                        if (value) {
                            if (type === "app-state-sync-key") {
                                value = baileys_1.proto.AppStateSyncKeyData.fromObject(value);
                            }
                            dict[id] = value;
                        }
                        return dict;
                    }, {});
                },
                set: (data) => __awaiter(void 0, void 0, void 0, function* () {
                    for (const _key in data) {
                        const key = KEY_MAP[_key];
                        keys[key] = keys[key] || {};
                        Object.assign(keys[key], data[_key]);
                        yield saveKey(key, data, _key);
                    }
                    // saveState();
                }),
            },
        },
        saveCreds,
    };
});
exports.default = useRemoteFileAuthState;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
