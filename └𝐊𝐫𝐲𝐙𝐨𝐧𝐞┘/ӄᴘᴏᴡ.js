("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let ᴍꜱ = require("parse-ms");
let ӄօʟօʀ = require("chalk");
let { Night } = require("./Night");
let ʀᴇᴠ_ɢɪᴛ = require("simple-git");
let { ӄօʟօʀs } = require("./ӄօʟօʀs");
let { ShortC } = require("./ShortC");
let { ArtDrw } = require("./ArtDrw");
let { ARanks } = require("./ARanks");
let ɢɪᴛᴄᴀʟʟ = require("simple-git")();
let Heroku = require("heroku-client");
let { DenyLink } = require("./DenyLink");
let ProTon = require("../└𝐄𝐯𝐞𝐧𝐭𝐬┘/ProTon");
let { req } = require("pino-std-serializers");
let { Caught } = require("../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
let Bagde = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let { simpleGit, CleanOptions } = require("simple-git");
let Ranker = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/autorank");
let ClaimSchema = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/Claim");
let LinkList = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/antilink");
let { Image_Button } = require("../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let usedUser = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser");
let userBanCheck = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let userExhaust = require("../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/userExhaust");
let { PokeList } = require("../└𝐌𝐨𝐝𝐮𝐥𝐞𝐬┘/pokelist");
let pokemon = require("pokemontcgsdk");
let CronJob = require("cron").CronJob;
let Fetch = require("node-fetch");
let cron = require("node-cron");
let Https = require("https");
let Fs = require("fs");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.ӄᴘᴏᴡ = async (Ѷ𝖎𝖔𝖓, ӄryӄnz, Vlkyre) => {
if (Vlkyre.message) {
try {
let ʀᴇᴠ_ɢɪᴛʜᴜʙ = ʀᴇᴠ_ɢɪᴛ();
await ʀᴇᴠ_ɢɪᴛʜᴜʙ.fetch();
let ɴᴇᴡ = await ɢɪᴛᴄᴀʟʟ.log(["𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩..origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"]);
if (ɴᴇᴡ.total != 0) {
await Hoku.delete(
"/apps/" + HEROKU_APP_NAME + "/dynos/" + "worker"
).catch((ᴇʀ) =>
console.log(
ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐇𝐞𝐫𝐨𝐤𝐮 𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(ᴇʀ))
)
);
}
} catch (ᴇʀ) {
console.log(ӄօʟօʀ.black(ӄօʟօʀ.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), ӄօʟօʀ.bgRed(ᴇʀ)));
}
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// cron.schedule("*/60 * * * * *", async function () {
// console.log("running a task every 60 second");
// console.log(
// "|⬡═══════════════════════|▷ Fetch Any Random Pokemon from Pokedex"
// );
// let PokemonData;
// let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
// try {
// let res = await fetch(
// API("https://some-random-api.ml", "/pokedex", {
// pokemon: BasePoke.toLowerCase(),
// })
// ).catch((Èrrðr) => console.log(Èrrðr));
// PokemonData = await res.json().catch((Èrrðr) => console.log(Èrrðr));
// pokemon.configure({ apiKey: "123abc" });
// // Get The Card Of The Found Pokemon
// await pokemon.card
// .all({ q: `name:${PokemonData.name}` })
// .then(async (card) => {
// // Check All Needed Data Inside Mongodb if Category Not Found
// await ClaimSchema.findOne(
// { Active: "N" || null },
// async (Èrrðr, msTdb) => {
// if (Èrrðr) return console.log(Èrrðr);
// if (!msTdb) {
// let getGroups = await ӄryӄnz.groupFetchAllParticipating();
// let newUser = await new ClaimSchema({
// Active: "Y",
// GroupIDs: getGroups,
// UserNumber: undefined,
// })
// .save()
// .catch((Èrrðr) => console.log(Èrrðr));
// // Fetch all Groups and Store it in an object
// let groups = Object.entries(getGroups)
// .slice(0)
// .map((entry) => entry[1]);
// let sendGroups = groups.map((v) => v.id);
// // Send The Created Pokedex Card
// for (let G of sendGroups) {
// await ӄryӄnz.sendMessage(G, {
// image: {
// url: card[0].images.large,
// },
// mimetype: "image/png",
// fileName: "Pokedex.png",
// caption: ` 
// 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀 𝐓𝐄𝐒𝐓 𝐏𝐎𝐊𝐄𝐌𝐎𝐍 𝐂𝐀𝐑𝐃 𝐆𝐀𝐌𝐄!
// 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 _!𝐂𝐋𝐀𝐈𝐌_ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃.....


// 💫 *Name:* ${PokemonData.name}
// 〽️ *Pokedex ID:* ${PokemonData.id}
// 🎀 *Type:* ${PokemonData.type}
// 🐞 *Species*: ${PokemonData.species}`.trim(),
// });
// }
// return;
// }
// }
// );
// });
// } catch (Èrrðr) {
// return console.log(Èrrðr);
// }
// });

("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// // Executed on every midnight
// var cronJob1 = new CronJob({
// cronTime: "00 00 00 * * * ",
// onTick: async function () {
// console.log(
// "|⬡═══════════════════════|▷ Fetch Any Random Pokemon from Pokedex"
// );
// let PokemonData;
// let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
// try {
// let res = await fetch(
// API("https://some-random-api.ml", "/pokedex", {
// pokemon: BasePoke.toLowerCase(),
// })
// ).catch((Èrrðr) => console.log(Èrrðr));
// PokemonData = await res.json().catch((Èrrðr) => console.log(Èrrðr));
// pokemon.configure({ apiKey: "123abc" });
// // Get The Card Of The Found Pokemon
// await pokemon.card
// .all({ q: `name:${PokemonData.name}` })
// .then(async (card) => {
// // Check All Needed Data Inside Mongodb if Category Not Found
// await ClaimSchema.findOne(
// { Active: "N" || null },
// async (Èrrðr, msTdb) => {
// if (Èrrðr) return console.log(Èrrðr);
// if (!msTdb) {
// let getGroups = await ӄryӄnz.groupFetchAllParticipating();
// let newUser = await new ClaimSchema({
// Active: "Y",
// GroupIDs: getGroups,
// UserNumber: undefined,
// })
// .save()
// .catch((Èrrðr) => console.log(Èrrðr));
// // Fetch all Groups and Store it in an object
// let groups = Object.entries(getGroups)
// .slice(0)
// .map((entry) => entry[1]);
// let sendGroups = groups.map((v) => v.id);
// // Send The Created Pokedex Card
// for (let G of sendGroups) {
// await ӄryӄnz.sendMessage(G, {
// image: {
// url: card[0].images.large,
// },
// mimetype: "image/png",
// fileName: "Pokedex.png",
// caption: `
// 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀 𝐓𝐄𝐒𝐓 𝐏𝐎𝐊𝐄𝐌𝐎𝐍 𝐂𝐀𝐑𝐃 𝐆𝐀𝐌𝐄!
// 𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 _!𝐂𝐋𝐀𝐈𝐌_ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃.....

// 💫 *Name:* ${PokemonData.name}
// 〽️ *Pokedex ID:* ${PokemonData.id}
// 🎀 *Type:* ${PokemonData.type}
// 🐞 *Species*: ${PokemonData.species}`.trim(),
// });
// }
// return;
// }
// }
// );
// });
// } catch (Èrrðr) {
// return console.log(Èrrðr);
// }
// },
// start: true,
// runOnInit: false,
// });
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
async function ӄ_counter(Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔) {
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (ᴇʀ, ꜱᴇʀᴄ) => {
if (ᴇʀ) return Caught(ӄryӄnz, Vlkyre, ᴇʀ);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlkyre.sender,
Total: Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔,
LastTime: Date.now(),
PermaTime: 10000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
} else {
ꜱᴇʀᴄ.Total = ꜱᴇʀᴄ.Total + Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔;
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((ᴇʀ) => Caught(ӄryӄnz, Vlkyre, ᴇʀ));
}
}
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await Ranker.findOne(
{
serverID: Vlkyre.chatID,
},
async (ᴇʀ, userRank) => {
if (ᴇʀ) return Caught(ӄryӄnz, Vlkyre, ᴇʀ);
if (!userRank) return;
await ARanks(Vlkyre, ӄryӄnz, Caught, Vlkyre.A𝖗𝖌𝖘);
}
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await ProTon.Vprtn(ӄryӄnz, Vlkyre);
if (
Vlkyre.message &&
!Vlkyre.isSenderAdmin &&
Vlkyre.isBotAdmin &&
!Vlkyre.isSenderTUF
) {
await DenyLink(
Vlkyre,
ӄryӄnz,
Caught,
Image_Button,
Vlkyre.A𝖗𝖌𝖘,
LinkList,
Vlkyre.Body
);
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
await userBanCheck.findOne(
{
ID: Vlkyre.sender,
},
async (ᴇʀ, userBCheck) => {
if (ᴇʀ) return console.log(ᴇʀ);
await userBanCheck.findOne(
{
ID: Vlkyre.chatID,
},
async (ᴇʀ, userGCheck) => {
if (ᴇʀ) return console.log(ᴇʀ);
if (userBCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
if (userGCheck && !Vlkyre.fromMe && !Vlkyre.isSenderTUF) return;
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.isCommand) {
let MeA = [];
let MeB = [];
let MeC = [];
let MeD = [];
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await ӄryӄnz.groupInviteCode(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await ӄryӄnz.groupInviteCode(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await ӄryӄnz.groupInviteCode(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await ӄryӄnz.groupInviteCode(
"120363042762307739@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇA = await ӄryӄnz.groupMetadata(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇB = await ӄryӄnz.groupMetadata(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇC = await ӄryӄnz.groupMetadata(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇD = await ӄryӄnz.groupMetadata(
"120363042762307739@g.us"
);
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇA.participants.length; i++)
MeA[i] = ʀᴇꜱᴘᴏɴꜱᴇA.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇB.participants.length; i++)
MeB[i] = ʀᴇꜱᴘᴏɴꜱᴇB.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇC.participants.length; i++)
MeC[i] = ʀᴇꜱᴘᴏɴꜱᴇC.participants[i].id;
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇD.participants.length; i++)
MeD[i] = ʀᴇꜱᴘᴏɴꜱᴇD.participants[i].id;
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (
!Vlkyre.fromMe &&
Vlkyre.isCommand &&
!Vlkyre.isSenderTUF &&
!Vlkyre.Body.includes("h") &&
!Vlkyre.Body.includes("m") &&
!Vlkyre.Body.includes("help") &&
!Vlkyre.Body.includes("menu") &&
!Vlkyre.Body.includes("rules") &&
!Vlkyre.Body.includes("vlkyre") &&
!Vlkyre.Body.includes("verify") &&
!Vlkyre.Body.includes("support") &&
!Vlkyre.Body.includes("HELP") &&
!Vlkyre.Body.includes("MENU") &&
!Vlkyre.Body.includes("RULES") &&
!Vlkyre.Body.includes("VLKYRE") &&
!Vlkyre.Body.includes("SUPPORT") &&
!MeA.includes(Vlkyre.sender) &&
!MeB.includes(Vlkyre.sender) &&
!MeC.includes(Vlkyre.sender) &&
!MeD.includes(Vlkyre.sender)
) {
return await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: `❗𝐕𝐄𝐑𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍❗
@${Vlkyre.sender.split("@")[0]}
*Check The Verification Video:*
youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA`,
contextInfo: { mentionedJid: [Vlkyre.sender] },
});
} else {
await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
await ShortC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
return await ӄօʟօʀs(ӄryӄnz, Vlkyre);
}
}
}
);
}
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
