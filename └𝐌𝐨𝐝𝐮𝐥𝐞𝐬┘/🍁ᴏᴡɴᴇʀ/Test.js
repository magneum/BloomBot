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
require("../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require("../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ");
let fs = require("fs");
let util = require("util");
let hxz = require("hxz-api");
let db = require("quick.db");
let axios = require("axios");
let chalk = require("chalk");
let ɢɪᴛ = require("simple-git")();
let canvacord = require("canvacord");
let Heroku = require("heroku-client");
let { Character } = require("mailist");
let moment = require("moment-timezone");
let Carbon = require("unofficial-carbon-now");
let Hoku = new Heroku({ token: HEROKU_API_KEY });
let PhoneNumber = require("awesome-phonenumber");
let { exec, execSync } = require("child_process");
let { jidDecode } = require("@adiwajshing/baileys");
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require("wa-sticker-formatter");
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let ClaimSchema = require("../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/Claim");
let Present_Path = require("path");
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
let { PokeList } = require("..//pokelist");
let pokemon = require("pokemontcgsdk");
let CronJob = require("cron").CronJob;
let Fetch = require("node-fetch");
let cron = require("node-cron");
let Https = require("https");
let Fs = require("fs");
("|⬡════════════════════════════════════════════════════════════════════└  Vlkyre 𝐀𝐩𝐢®  ┘═══════════════════════════════════════════════════════════════════⬡|");
exports.test = async (
Ѷ𝖎𝖔𝖓,
ӄryӄnz,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body
) => {
try {
console.log(
"|⬡═══════════════════════|▷ Fetch Any Random Pokemon from Pokedex"
);
let PokemonData;
let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
try {
let res = await fetch(
API("https://some-random-api.ml", "/pokedex", {
pokemon: BasePoke.toLowerCase(),
})
).catch((Èrrðr) => console.log(Èrrðr));
PokemonData = await res.json().catch((Èrrðr) => console.log(Èrrðr));
pokemon.configure({ apiKey: "123abc" });
await pokemon.card
.all({ q: `name:${PokemonData.name}` })
.then(async (card) => {
await ClaimSchema.findOne(
{ Active: "N" || null },
async (Èrrðr, msTdb) => {
if (Èrrðr) return console.log(Èrrðr);
if (!msTdb) {
let getGroups = await ӄryӄnz.groupFetchAllParticipating();
console.log(getGroups);
let newUser = await new ClaimSchema({
Active: "Y",
GroupIDs: getGroups,
UserNumber: undefined,
})
.save()
.catch((Èrrðr) => console.log(Èrrðr));
let groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
console.log(groups);
let sendGroups = groups.map((v) => v.id);
console.log(sendGroups);
for (let G of sendGroups) {
return await ӄryӄnz.sendMessage(G, {
image: {
url: card[0].images.large,
},
mimetype: "image/png",
fileName: "Pokedex.png",
caption: ` 
𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀 𝐓𝐄𝐒𝐓 𝐏𝐎𝐊𝐄𝐌𝐎𝐍 𝐂𝐀𝐑𝐃 𝐆𝐀𝐌𝐄!
𝐖𝐀𝐈𝐓 𝐅𝐎𝐑 _!𝐂𝐋𝐀𝐈𝐌_ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃.....


💫 *Name:* ${PokemonData.name}
〽️ *Pokedex ID:* ${PokemonData.id}
🎀 *Type:* ${PokemonData.type}
🐞 *Species*: ${PokemonData.species}`.trim(),
});
}
}
}
);
});
} catch (Èrrðr) {
return console.log(Èrrðr);
}
} catch (error) {
console.log(chalk.black(chalk.bgWhite("❌𝐄𝐫𝐫𝐨𝐫: "), chalk.bgRed(error)));
}
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
