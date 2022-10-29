("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
Object.defineProperty(exports, "__esModule", { value: true });
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const baileys_1 = require("@adiwajshing/baileys");
const chalk_1 = __importDefault(require("chalk"));
const auth_1 = require("./Authy");
const KEY_MAP = {
'pre-key': 'preKeys',
'session': 'sessions',
'sender-key': 'senderKeys',
'app-state-sync-key': 'appStateSyncKeys',
'app-state-sync-version': 'appStateVersions',
'sender-key-memory': 'senderKeyMemory'
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const Authenticator = (logger) =>
__awaiter(void 0, void 0, void 0, function* () {
// require fs here so that in case "fs" is not available -- the app does not crash
const { readFileSync, writeFileSync, existsSync } = require("fs");
let creds;
let keys = {};
const checkCreds = () =>
__awaiter(void 0, void 0, void 0, function* () {
const lock = yield auth_1.Cred.findOne({
where: {
key: "noiseKey",
},
});
if (lock) {
return true;
} else {
return false;
}
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const loadCreds = () =>
__awaiter(void 0, void 0, void 0, function* () {
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const loadKeys = () =>
__awaiter(void 0, void 0, void 0, function* () {
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const saveCreds = (data) =>
__awaiter(void 0, void 0, void 0, function* () {
if (!data) {
// console.log('Saving all creds');
data = creds;
}
for (const _key in data) {
const cred = yield auth_1.Cred.findOne({
where: {
key: _key,
},
});
if (cred) {
yield cred.update({
value: JSON.stringify(
data[_key],
baileys_1.BufferJSON.replacer,
2
),
});
// .then((res) => { console.log(`updated value ${_key} `) }).catch(err => { console.log(chalk.whiteBright(err)) });
} else {
yield auth_1.Cred.create({
key: _key,
value: JSON.stringify(
data[_key],
baileys_1.BufferJSON.replacer,
2
),
});
// .then((res) => { console.log(`inserted value ${_key}`) }).catch(err => { console.log(chalk.whiteBright(err)) });
}
}
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const saveKey = (key, data, _key) =>
__awaiter(void 0, void 0, void 0, function* () {
for (const subKey in data[_key]) {
// console.log(`Trying to find key ${key} and subKey ${subKey}.`);
const res = yield auth_1.Key.findOne({
where: {
key: subKey,
type: key,
},
});
if (res) {
yield res
.update({
value: JSON.stringify(
data[_key][subKey],
baileys_1.BufferJSON.replacer,
2
),
})
.then((res) => {
// console.log(`updated key ${key} and subKey ${subKey}`)
})
.catch((err) => {
console.log(chalk_1.default.blueBright(err));
});
} else {
yield auth_1.Key.create({
key: subKey,
value: JSON.stringify(
data[_key][subKey],
baileys_1.BufferJSON.replacer,
2
),
type: key,
})
.then((res) => {
// console.log(`inserted key ${key} and subKey ${subKey}`)
})
.catch((err) => {
console.log(chalk_1.default.blueBright(err));
});
}
}
return;
});
let credsExist = yield checkCreds();
if (credsExist) {
// console.log('loading values back.');
let parent = {
creds: {},
keys: {},
};
const allCreds = yield loadCreds();
const allKeys = yield loadKeys();
parent.creds = allCreds;
parent.keys = allKeys;
const final = JSON.parse(
JSON.stringify(parent),
baileys_1.BufferJSON.reviver
);
// console.log(final);
creds = final.creds;
keys = final.keys;
} else {
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
let value =
(_a = keys[key]) === null || _a === void 0 ? void 0 : _a[id];
if (value) {
if (type === "app-state-sync-key") {
value = baileys_1.proto.AppStateSyncKeyData.fromObject(value);
}
dict[id] = value;
}
return dict;
}, {});
},
set: (data) =>
__awaiter(void 0, void 0, void 0, function* () {
for (const _key in data) {
const key = KEY_MAP[_key];
// console.log(`Got raw key - ${_key} and got mapped key ${key}. The value is ${data[_key]}`)
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
exports.default = Authenticator;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
