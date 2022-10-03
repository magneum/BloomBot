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
let os = require(`os`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let speed = require(`performance-now`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let vers = require(`../../package.json`);
let { performance } = require(`perf_hooks`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { formatp, runtime } = require(`../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Human`);
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.menu = async (
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
let used = process.memoryUsage();
let cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0
);
return cpu;
});
let cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
}
);
let timestamp = speed();
let latensi = speed();
let latest = `════════★ 𝐍𝐨𝐝𝐞𝐉𝐒 𝐌𝐞𝐦-𝐔𝐬𝐚𝐠𝐞:
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), ` `)}: ${formatp(
used[key]
)}`
)
.join(`\n`)}
════════★ ${
cpus[0]
? `𝐓𝐨𝐭𝐚𝐥 𝐂𝐏𝐔 𝐔𝐬𝐚𝐠𝐞
${cpus[0].model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + `*`).padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`
)
.join(`\n`)}
════════★ 𝐂𝐏𝐔 𝐂𝐨𝐫𝐞(𝐬) 𝐔𝐬𝐚𝐠𝐞 (_${cpus.length}_ 𝐂𝐨𝐫𝐞 𝐂𝐏𝐔)
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + `*`).padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`
)
.join(`\n`)}`
)
.join(`\n\n`)}`
: ``
}`.trim();
await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre.png" },
caption: `Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 140+ commands!

┌╔══『 🎐𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎐 』
│║⦁ 𝐩𝐫𝐞𝐟𝐢𝐱: ${prefix}
│║⦁ 𝐧𝐚𝐦𝐞:${Vlkyre.pushName || "~ɴᴏ_ɴᴀᴍᴇ~"}
│║⦁ 𝐠𝐩𝐚𝐲: +918436686758
│║⦁ 𝐮𝐩𝐢: krakinzkon@oksbi
│║⦁ 𝐠𝐢𝐭: github.com/kryknz/vlkyre
│║⦁ 𝐠𝐫𝐨𝐮𝐩: Vlkyre.krakinzkon.repl.co
└╚═══════⋑


┌📥${prefix}DownloaderMenu
│╔══『 📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📥 』
│║⦁ ${prefix}yta (60💰)
│║⦁ ${prefix}play (60💰)
│║⦁ ${prefix}song (60💰)
│║⦁ ${prefix}sing (60💰)
│║⦁ ${prefix}ytmp3 (60💰)
│║⦁ ${prefix}ytplay (60💰)
│║⦁ ${prefix}ytaudio (60💰)
│║⦁ ${prefix}ytmusic (60💰)
│║⦁ ${prefix}youtubemusic (60💰)
│║⦁ ${prefix}ytv (60💰)
│║⦁ ${prefix}watch (60💰)
│║⦁ ${prefix}ytmp4 (60💰)
│║⦁ ${prefix}stream (60💰)
│║⦁ ${prefix}ytvideo (60💰)
│║⦁ ${prefix}youtubevideo (60💰)
│║⦁ ${prefix}radio (60💰)
│║⦁ ${prefix}randmusic (60💰)
│║⦁ ${prefix}randaudio (60💰)
│║⦁ ${prefix}randomaudio (60💰)
│║⦁ ${prefix}randommusic (60💰)
│║⦁ ${prefix}suggestaudio (60💰)
│║⦁ ${prefix}suggestmusic (60💰)
└╚═══════⋑

┌🐾${prefix}AnimeMenu
│╔══『 🐾𝐀𝐍𝐈𝐌𝐄_𝐌𝐀𝐍𝐆𝐀🐾 』
│║⦁ ${prefix}anime (40💰)
│║⦁ ${prefix}manga (40💰)
└╚═══════⋑

┌🐝${prefix}AnimationMenu
│╔══『 🐝𝐀𝐍𝐈𝐌𝐀𝐓𝐈𝐎𝐍🐝 』
│║⦁ ${prefix}baka  (20💰)
│║⦁ ${prefix}bite  (20💰)
│║⦁ ${prefix}blush  (20💰)
│║⦁ ${prefix}bonk  (20💰)
│║⦁ ${prefix}bored  (20💰)
│║⦁ ${prefix}confused  (20💰)
│║⦁ ${prefix}cry  (20💰)
│║⦁ ${prefix}cuddle  (20💰)
│║⦁ ${prefix}dance  (20💰)
│║⦁ ${prefix}goodnight  (20💰)
│║⦁ ${prefix}happy  (20💰)
│║⦁ ${prefix}hi5  (20💰)
│║⦁ ${prefix}highfive  (20💰)
│║⦁ ${prefix}hug  (20💰)
│║⦁ ${prefix}kick  (20💰)
│║⦁ ${prefix}kill  (20💰)
│║⦁ ${prefix}kiss  (20💰)
│║⦁ ${prefix}nervous  (20💰)
│║⦁ ${prefix}pat  (20💰)
│║⦁ ${prefix}poke  (20💰)
│║⦁ ${prefix}punch  (20💰)
│║⦁ ${prefix}sad  (20💰)
│║⦁ ${prefix}smile  (20💰)
│║⦁ ${prefix}stare  (20💰)
│║⦁ ${prefix}wave  (20💰)
│║⦁ ${prefix}wink  (20💰)
│║⦁ ${prefix}yeet  (20💰)
│║⦁ ${prefix}yes  (20💰)
│║⦁ ${prefix}zerotwo  (20💰)
└╚═══════⋑

┌👓${prefix}AudioFilterMenu
│╔══『 👓𝐀𝐔𝐃𝐈𝐎_𝐅𝐈𝐋𝐓𝐄𝐑𝐒👓 』
│║⦁ ${prefix}bassboost (30💰)
│║⦁ ${prefix}echo (30💰)
│║⦁ ${prefix}fast (30💰)
│║⦁ ${prefix}flanger (30💰)
│║⦁ ${prefix}nightcore (30💰)
│║⦁ ${prefix}phaser (30💰)
│║⦁ ${prefix}reverse (30💰)
│║⦁ ${prefix}slow (30💰)
│║⦁ ${prefix}speed (30💰)
│║⦁ ${prefix}subboost (30💰)
│║⦁ ${prefix}superslow (30💰)
│║⦁ ${prefix}superspeed (30💰)
│║⦁ ${prefix}surround (30💰)
│║⦁ ${prefix}vaporwave (30💰)
│║⦁ ${prefix}vibrato (30💰)
└╚═══════⋑

┌🏝️${prefix}ConverterMenu
│╔══『 🏝️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑🏝️ 』
│║⦁ ${prefix}carbon (30💰)
│║⦁ ${prefix}steal (30💰)
│║⦁ ${prefix}sticker (30💰)
│║⦁ ${prefix}tinyurl (30💰)
│║⦁ ${prefix}toimg (30💰)
│║⦁ ${prefix}tourl (30💰)
└╚═══════⋑

┌💰${prefix}GameMenu
│╔══『 💰𝐄𝐂𝐎𝐍𝐎𝐌𝐘_𝐆𝐀𝐌𝐄💰 』
│║⦁ ${prefix}job (10💰)
│║⦁ ${prefix}work (10💰)
│║⦁ ${prefix}earn (10💰)
│║⦁ ${prefix}bag (10💰)
│║⦁ ${prefix}inv (10💰)
│║⦁ ${prefix}loot (10💰)
│║⦁ ${prefix}inventory (10💰)
│║⦁ ${prefix}dly (10💰)
│║⦁ ${prefix}daily (10💰)
│║⦁ ${prefix}pond (10💰)
│║⦁ ${prefix}fish (10💰)
│║⦁ ${prefix}fishesh (10💰)
│║⦁ ${prefix}bet (10💰)
│║⦁ ${prefix}gamble (10💰)
│║⦁ ${prefix}betting (10💰)
│║⦁ ${prefix}roulette (10💰)
│║⦁ ${prefix}hunt (10💰)
│║⦁ ${prefix}hunting (10💰)
│║⦁ ${prefix}pokehunt (10💰)
│║⦁ ${prefix}zoo (10💰)
│║⦁ ${prefix}forest (10💰)
│║⦁ ${prefix}animals (10💰)
│║⦁ ${prefix}pay (10💰)
│║⦁ ${prefix}loan (10💰)
│║⦁ ${prefix}borrow (10💰)
│║⦁ ${prefix}payment (10💰)
│║⦁ ${prefix}rob (10💰)
│║⦁ ${prefix}thief (10💰)
│║⦁ ${prefix}robbery (10💰)
│║⦁ ${prefix}bal (10💰)
│║⦁ ${prefix}gold (10💰)
│║⦁ ${prefix}money (10💰)
│║⦁ ${prefix}balance (10💰)
│║⦁ ${prefix}buy (10💰)
│║⦁ ${prefix}store (10💰)
│║⦁ ${prefix}shop (10💰)
│║⦁ ${prefix}mall (10💰)
│║⦁ ${prefix}shopping (10💰)
└╚═══════⋑

┌🔰${prefix}GroupMenu
│╔══『 🔰𝐆𝐑𝐎𝐔𝐏_𝐌𝐎𝐃🔰 』
│║⦁ ${prefix}warn
│║⦁ ${prefix}nolink
│║⦁ ${prefix}stoplink
│║⦁ ${prefix}antilink
│║⦁ ${prefix}welcome
│║⦁ ${prefix}welcomer
│║⦁ ${prefix}setwelcome
│║⦁ ${prefix}autorole
│║⦁ ${prefix}autorank
│║⦁ ${prefix}del
│║⦁ ${prefix}demote
│║⦁ ${prefix}promote
│║⦁ ${prefix}group
│║⦁ ${prefix}remove
│║⦁ ${prefix}setdesc
│║⦁ ${prefix}setgpfp
│║⦁ ${prefix}tagall
│║⦁ ${prefix}admins
└╚═══════⋑

┌👑${prefix}OwnerMenu
│╔══『 👑𝐎𝐖𝐍𝐄𝐑_𝐒𝐔𝐃𝐎👑 』
│║⦁ ${prefix}ban
│║⦁ ${prefix}unban
│║⦁ ${prefix}reboot
│║⦁ ${prefix}dbrem
│║⦁ ${prefix}dataclean
│║⦁ ${prefix}purgedata
│║⦁ ${prefix}join
│║⦁ ${prefix}leave
│║⦁ ${prefix}support
│║⦁ ${prefix}bcgroup
│║⦁ ${prefix}bc
│║⦁ ${prefix}sp
│║⦁ ${prefix}mod
│║⦁ ${prefix}mods
│║⦁ ${prefix}repo
│║⦁ ${prefix}githubrepo
│║⦁ ${prefix}repository
│║⦁ ${prefix}dev
│║⦁ ${prefix}devs
│║⦁ ${prefix}support
│║⦁ ${prefix}official
│║⦁ ${prefix}rule
│║⦁ ${prefix}rules
│║⦁ ${prefix}h
│║⦁ ${prefix}how
│║⦁ ${prefix}help
│║⦁ ${prefix}menu
│║⦁ ${prefix}allmenu
└╚═══════⋑

┌🏳️‍🌈${prefix}RandomMenu
│╔══『 🏳️‍🌈𝐑𝐀𝐍𝐃𝐎𝐌🏳️‍🌈 』
│║⦁ ${prefix}advice (50💰)
│║⦁ ${prefix}rank (50💰)
│║⦁ ${prefix}fact (50💰)
│║⦁ ${prefix}meme (50💰)
│║⦁ ${prefix}neko (50💰)
│║⦁ ${prefix}quote (50💰)
│║⦁ ${prefix}reddit (50💰)
│║⦁ ${prefix}sr (50💰)
│║⦁ ${prefix}subreddit (50💰)
│║⦁ ${prefix}ship (50💰)
│║⦁ ${prefix}waifu (50💰)
│║⦁ ${prefix}tts (50💰)
│║⦁ ${prefix}gtts (50💰)
│║⦁ ${prefix}text2speech (50💰)
│║⦁ ${prefix}fun (50💰)
│║⦁ ${prefix}joke (50💰)
│║⦁ ${prefix}funny (50💰)
│║⦁ ${prefix}laugh (50💰)
│║⦁ ${prefix}dadjoke (50💰)
└╚═══════⋑

┌🛍️${prefix}StoreMenu
│╔══『 🛍️𝐒𝐓𝐎𝐑𝐄🛍️ 』
│║⦁ ${prefix}buy basic 
│║⦁ ${prefix}buy bronze 
│║⦁ ${prefix}buy silver 
│║⦁ ${prefix}buy golden
│║⦁ ${prefix}buy platinum 
│║⦁ ${prefix}buy diamond
│║⦁ ${prefix}buy sword
│║⦁ ${prefix}buy laptop
│║⦁ ${prefix}buy charm
└╚═══════⋑

┌🌐${prefix}WebMenu
│╔══『 🌐𝐖𝐄𝐁_𝐒𝐄𝐀𝐑𝐂𝐇🌐 』
│║⦁ ${prefix}gify (60💰)
│║⦁ ${prefix}gif (60💰)
│║⦁ ${prefix}google (60💰)
│║⦁ ${prefix}web (60💰)
│║⦁ ${prefix}find (60💰)
│║⦁ ${prefix}search (60💰)
│║⦁ ${prefix}iguser (60💰)
│║⦁ ${prefix}image (60💰)
│║⦁ ${prefix}lyrics (60💰)
│║⦁ ${prefix}pinterest (60💰)
│║⦁ ${prefix}pokemon (60💰)
│║⦁ ${prefix}pokedex (60💰)
│║⦁ ${prefix}wallpaper (60💰)
│║⦁ ${prefix}yts (60💰)
│║⦁ ${prefix}ytsearch (60💰)
│║⦁ ${prefix}ytscrape (60💰)
│║⦁ ${prefix}youtubescrape (60💰)
│║⦁ ${prefix}youtubesearch (60💰)
└╚═══════⋑

┌⭕${prefix}YTFilterMenu
│╔══『 ⭕𝐘𝐎𝐔𝐓𝐔𝐁𝐄_𝐅𝐈𝐋𝐓𝐄𝐑⭕ 』
│║⦁ ${prefix}yt8d (40💰)
│║⦁ ${prefix}ytbassboost (40💰)
│║⦁ ${prefix}ytecho (40💰)
│║⦁ ${prefix}ytflanger (40💰)
│║⦁ ${prefix}ytnightcore (40💰)
│║⦁ ${prefix}ytphaser (40💰)
│║⦁ ${prefix}ytreverse (40💰)
│║⦁ ${prefix}ytslow (40💰)
│║⦁ ${prefix}ytspeed (40💰)
│║⦁ ${prefix}ytsubboost (40💰)
│║⦁ ${prefix}ytsuperslow (40💰)
│║⦁ ${prefix}ytsuperspeed (40💰)
│║⦁ ${prefix}ytsurround (40💰)
│║⦁ ${prefix}ytvaporwave (40💰)
│║⦁ ${prefix}ytvibrato (40💰)
└╚═══════⋑

┌🍌${prefix}HentaiMenu
│╔══『 🍌𝐇𝐄𝐍𝐓𝐀𝐈🍌 』 
│║⦁ ${prefix}ass (80💰)
│║⦁ ${prefix}bdsm (80💰)
│║⦁ ${prefix}cum (80💰)
│║⦁ ${prefix}doujin (80💰)
│║⦁ ${prefix}feet (80💰)
│║⦁ ${prefix}femdom (80💰)  
│║⦁ ${prefix}foxgirl (80💰)  
│║⦁ ${prefix}glasses (80💰)  
│║⦁ ${prefix}hentai (80💰)
│║⦁ ${prefix}maid (80💰)
│║⦁ ${prefix}masturbation (80💰)
│║⦁ ${prefix}netorare (80💰)
│║⦁ ${prefix}orgy (80💰)
│║⦁ ${prefix}panties (80💰)
│║⦁ ${prefix}pussy (80💰)
│║⦁ ${prefix}school (80💰)
│║⦁ ${prefix}tentacles (80💰)
│║⦁ ${prefix}thighs (80💰)
│║⦁ ${prefix}uniform (80💰)
│║⦁ ${prefix}yuri (80💰)
└╚═══════⋑

┌🍑${prefix}NsfwMenu
│╔══『 🍑𝐍𝐒𝐅𝐖🍑 』
│║⦁ ${prefix}p4k (100💰)
│║⦁ ${prefix}pblowjob (100💰)
│║⦁ ${prefix}pmilf (100💰)
│║⦁ ${prefix}ppussy (100💰)
│║⦁ ${prefix}pslut (100💰)
│║⦁ ${prefix}tikporn (100💰)
└╚═══════⋑`,
footer: "*❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ❞\n⭕youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA",
buttons: [
{
buttonId: prefix + "MENU",
buttonText: {
displayText: prefix + "MENU",
},
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: {
displayText: prefix + "VLKYRE",
},
type: 1,
},
{
buttonId: prefix + "RULES",
buttonText: {
displayText: prefix + "RULES",
},
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
};


// 18hhrs IST

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
