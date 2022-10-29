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
var _impHold = (this && this._impHold) || function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var impModule = (this && this.impModule) || function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var { readFileSync, writeFileSync, existsSync } = require("fs");
var Baileys = require("@adiwajshing/baileys");
var chalk = impModule(require("chalk"));
var Authy = require("./Authy");
var KEY_MAP = {
"pre-key": "preKeys",
session: "sessions",
"sender-key": "senderKeys",
"app-state-sync-key": "appStateSyncKeys",
"app-state-sync-version": "appStateVersions",
"sender-key-memory": "senderKeyMemory",
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var Authenticator = async () => {
_impHold(void 0, void 0, void 0, async function* () {
let creds;
let keys = {};
var checkCreds = () =>
_impHold(void 0, void 0, void 0, function* () {
var lock = yield Authy.credentials.findOne({
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
var loadCreds = () =>
_impHold(void 0, void 0, void 0, function* () {
var allCreds = yield Authy.credentials.findAll();
let temp = {};
allCreds.forEach((res) => {
let val = res.getDataValue("value");
let key = res.getDataValue("key");
val = JSON.parse(val, Baileys.BufferJSON.reviver);
temp[key] = val;
});
return temp;
});
var loadKeys = () =>
_impHold(void 0, void 0, void 0, function* () {
let keys = {
preKeys: {},
sessions: {},
senderKeys: {},
appStateSyncKeys: {},
appStateVersions: {},
senderKeyMemory: {},
};
var allKeys = yield Authy.slot.findAll();
allKeys.forEach((res) => {
let val = res.getDataValue("value");
let key = res.getDataValue("key");
let type = res.getDataValue("type");
val = JSON.parse(val, Baileys.BufferJSON.reviver);
keys[type][key] = val;
});
return keys;
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var saveCreds = (data) =>
_impHold(void 0, void 0, void 0, function* () {
if (!data) {
console.log("Saving all creds");
data = creds;
}
for (var _key in data) {
var cred = yield Authy.credentials.findOne({
where: {
key: _key,
},
});
if (cred) {
yield cred
.update({
value: JSON.stringify(
data[_key],
Baileys.BufferJSON.replacer,
2
),
})
.then((res) => {
console.log(`updated value ${_key} `);
})
.catch((err) => {
console.log(chalk.whiteBright(err));
});
} else {
yield Authy.credentials.create({
key: _key,
value: JSON.stringify(data[_key], Baileys.BufferJSON.replacer, 2),
})
.then((res) => {
console.log(`inserted value ${_key}`);
})
.catch((err) => {
console.log(chalk.whiteBright(err));
});
}
}
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var saveKey = (key, data, _key) =>
_impHold(void 0, void 0, void 0, function* () {
for (var subKey in data[_key]) {
console.log(`Trying to find key ${key} and subKey ${subKey}.`);
var res = yield Authy.slot.findOne({
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
Baileys.BufferJSON.replacer,
2
),
})
.then((res) => {
console.log(`updated key ${key} and subKey ${subKey}`);
})
.catch((err) => {
console.log(chalk.default.blueBright(err));
});
} else {
yield Authy.slot.create({
key: subKey,
value: JSON.stringify(
data[_key][subKey],
Baileys.BufferJSON.replacer,
2
),
type: key,
})
.then((res) => {
console.log(`inserted key ${key} and subKey ${subKey}`);
})
.catch((err) => {
console.log(chalk.default.blueBright(err));
});
}
}
return;
});
let credsExist = yield checkCreds();
if (credsExist) {
console.log("loading values back.");
let parent = {
creds: {},
keys: {},
};
var allCreds = yield loadCreds();
var allKeys = yield loadKeys();
parent.creds = allCreds;
parent.keys = allKeys;
var final = JSON.parse(
JSON.stringify(parent),
Baileys.BufferJSON.reviver
);
console.log(final);
creds = final.creds;
keys = final.keys;
} else {
creds = (0, Baileys.initAuthCreds)();
keys = {};
saveCreds();
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
return {
state: {
creds,
keys: {
get: (type, ids) => {
var key = KEY_MAP[type];
return ids.reduce((dict, id) => {
let _a;
let value =
(_a = keys[key]) === null || _a === void 0 ? void 0 : _a[id];
if (value) {
if (type === "app-state-sync-key") {
value = Baileys.proto.AppStateSyncKeyData.fromObject(value);
}
dict[id] = value;
}
return dict;
}, {});
},
set: (data) =>
_impHold(void 0, void 0, void 0, function* () {
for (var _key in data) {
var key = KEY_MAP[_key];
console.log(
`Got raw key - ${_key} and got mapped key ${key}. The value is ${data[_key]}`
);
keys[key] = keys[key] || {};
Object.assign(keys[key], data[_key]);
yield saveKey(key, data, _key);
}
}),
},
},
saveCreds,
};
});
};
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
