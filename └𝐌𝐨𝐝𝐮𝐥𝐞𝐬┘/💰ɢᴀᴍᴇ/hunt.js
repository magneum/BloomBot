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
} = require(`../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let fetch = require(`node-fetch`);
let canvacord = require(`canvacord`);
let pokemon = require("pokemontcgsdk");
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let { PokeList } = require("../pokelist");
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let Gamble = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/gamble`);
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Pokemon = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/pokemon`);
let Economy = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.hunt = async (
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
let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
let Worth = Math.ceil(Math.random() * 500);
Pokemon.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userHunt) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userHunt) {
let newPokeUser = new Pokemon({
ID: Vlkyre.sender,
CurrentLimitTime: 0,
PermanentLimitTime: 21600000,
});
await newPokeUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_DB.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
🦋Try ${prefix}${Final_Name} Again!`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _You Are Very New! Better Luck Next Time!_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
let PokemonData;
try {
let res = await fetch(
API(`https://some-random-api.ml`, `/pokedex`, {
pokemon: BasePoke.toLowerCase(),
})
).catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
PokemonData = await res
.json()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
} catch (Èrrðr) {
return Caught(ӄryӄnz, Vlkyre, Èrrðr);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
userHunt.PermanentLimitTime -
(Date.now() - userHunt.CurrentLimitTime) >
0
) {
let time = ms(
userHunt.PermanentLimitTime -
(Date.now() - userHunt.CurrentLimitTime)
);
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _You've recently went in a forest!_
🪵𝗡𝗲𝘅𝘁 𝗛𝘂𝗻𝘁𝗶𝗻𝗴: _${time.hours}h ${time.minutes}m ${time.seconds}s_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
userHunt.CurrentLimitTime = Date.now();
pokemon.configure({ apiKey: "123abc" });
await pokemon.card
.all({ q: `name:${BasePoke.toLowerCase()}` })
.then(async (card) => {
if (!card) {
await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

💫 *Name:* _Caught Nothing!_
🪙 *Worth:* _0gold_`
);
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userHunt
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return;
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
userEco.money = userEco.money + Worth;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userHunt
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("child_process").exec(
`ffmpeg -i "${PokemonData.sprites.animated}" -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' "./Vlkyre🎒Bag/${Vlkyre.key.id}.mp4"`,
async (Èrrðr) => {
if (Èrrðr) {
await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

💫 *Name:* _Caught Nothing!_
🪙 *Worth:* _0gold_`
);
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userHunt
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return;
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
await Video_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
`./Vlkyre🎒Bag/${Vlkyre.key.id}.mp4`,
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

💫 *Name:* _${PokemonData.name}_
🪙 *Worth:* _${Worth}gold_
〽️ *Pokedex ID:* _${PokemonData.id}_

𝐓𝐨 𝐋𝐞𝐚𝐫𝐧 𝐌𝐨𝐫𝐞👇🏻
💫 *Type:* _${prefix}pokedex ${PokemonData.name}_
💫 *Type:* _${prefix}pokemon ${PokemonData.name}_`
);
return await fs.unlinkSync(
`./Vlkyre🎒Bag/${Vlkyre.key.id}.mp4`
);
}
);
});
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
