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
require("../../🤖Utilities/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
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
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { formatp, runtime } = require(`../../🤖Utilities/Human`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
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
let latensi = speed() - timestamp;
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
image: { url: "./👗Skins/Vlkyre.png" },
caption: `Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 140+ commands!

┌╔══Ῠ 𝐩𝐫𝐞𝐟𝐢𝐱: ${prefix}
│║Ῠ 𝐧𝐚𝐦𝐞:${Vlkyre.pushName || "~ɴᴏ_ɴᴀᴍᴇ~"}
│║Ῠ 𝐠𝐩𝐚𝐲: +918436686758
│║Ῠ 𝐮𝐩𝐢: krakinzkon@oksbi
│║Ῠ 𝐠𝐢𝐭: github.com/kryknz/vlkyre
│║Ῠ 𝐠𝐫𝐨𝐮𝐩: Vlkyre.krakinzkon.repl.co
└╚═══════⋑

┌🐝${prefix}AnimationMenu
│╔══『 🐝𝐀𝐍𝐈𝐌𝐀𝐓𝐈𝐎𝐍🐝 』
│║Ῠ ${prefix}baka
│║Ῠ ${prefix}bite
│║Ῠ ${prefix}blush
│║Ῠ ${prefix}bonk
│║Ῠ ${prefix}bored
│║Ῠ ${prefix}confused
│║Ῠ ${prefix}cry
│║Ῠ ${prefix}cuddle
│║Ῠ ${prefix}dance
│║Ῠ ${prefix}goodnight
│║Ῠ ${prefix}happy
│║Ῠ ${prefix}hi5
│║Ῠ ${prefix}highfive
│║Ῠ ${prefix}hug
│║Ῠ ${prefix}kick
│║Ῠ ${prefix}kill
│║Ῠ ${prefix}kiss
│║Ῠ ${prefix}nervous
│║Ῠ ${prefix}pat
│║Ῠ ${prefix}poke
│║Ῠ ${prefix}punch
│║Ῠ ${prefix}sad
│║Ῠ ${prefix}smile
│║Ῠ ${prefix}stare
│║Ῠ ${prefix}wave
│║Ῠ ${prefix}wink
│║Ῠ ${prefix}yeet
│║Ῠ ${prefix}yes
│║Ῠ ${prefix}zerotwo
└╚═══════⋑

┌🐾${prefix}AnimeMenu
│╔══『 🐾𝐀𝐍𝐈𝐌𝐄_𝐌𝐀𝐍𝐆𝐀🐾 』
│║Ῠ ${prefix}anime
│║Ῠ ${prefix}manga
└╚═══════⋑

┌👓${prefix}AudioFilterMenu
│╔══『 👓𝐀𝐔𝐃𝐈𝐎_𝐅𝐈𝐋𝐓𝐄𝐑𝐒👓 』
│║Ῠ ${prefix}bassboost
│║Ῠ ${prefix}echo
│║Ῠ ${prefix}fast
│║Ῠ ${prefix}flanger
│║Ῠ ${prefix}nightcore
│║Ῠ ${prefix}phaser
│║Ῠ ${prefix}reverse
│║Ῠ ${prefix}slow
│║Ῠ ${prefix}speed
│║Ῠ ${prefix}subboost
│║Ῠ ${prefix}superslow
│║Ῠ ${prefix}superspeed
│║Ῠ ${prefix}surround
│║Ῠ ${prefix}vaporwave
│║Ῠ ${prefix}vibrato
└╚═══════⋑

┌🏝️${prefix}ConverterMenu
│╔══『 🏝️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑🏝️ 』
│║Ῠ ${prefix}carbon
│║Ῠ ${prefix}steal
│║Ῠ ${prefix}sticker
│║Ῠ ${prefix}tinyurl
│║Ῠ ${prefix}toimg
│║Ῠ ${prefix}stourl
└╚═══════⋑

┌📥${prefix}DownloaderMenu
│╔══『 📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📥 』
│║Ῠ ${prefix}yta
│║Ῠ ${prefix}play
│║Ῠ ${prefix}song
│║Ῠ ${prefix}sing
│║Ῠ ${prefix}ytmp3
│║Ῠ ${prefix}ytplay
│║Ῠ ${prefix}ytaudio
│║Ῠ ${prefix}ytmusic
│║Ῠ ${prefix}youtubemusic
│║Ῠ ${prefix}ytv
│║Ῠ ${prefix}watch
│║Ῠ ${prefix}ytmp4
│║Ῠ ${prefix}stream
│║Ῠ ${prefix}ytvideo
│║Ῠ ${prefix}youtubevideo
│║Ῠ ${prefix}radio
│║Ῠ ${prefix}randmusic
│║Ῠ ${prefix}randaudio
│║Ῠ ${prefix}randomaudio
│║Ῠ ${prefix}randommusic
│║Ῠ ${prefix}suggestaudio
│║Ῠ ${prefix}suggestmusic
└╚═══════⋑

┌💰${prefix}GameMenu
│╔══『 💰𝐄𝐂𝐎𝐍𝐎𝐌𝐘_𝐆𝐀𝐌𝐄💰 』
│║Ῠ ${prefix}job
│║Ῠ ${prefix}work
│║Ῠ ${prefix}earn
│║Ῠ ${prefix}bag
│║Ῠ ${prefix}inv
│║Ῠ ${prefix}loot
│║Ῠ ${prefix}inventory
│║Ῠ ${prefix}dly
│║Ῠ ${prefix}daily
│║Ῠ ${prefix}pond
│║Ῠ ${prefix}fish
│║Ῠ ${prefix}fishesh
│║Ῠ ${prefix}bet
│║Ῠ ${prefix}gamble
│║Ῠ ${prefix}betting
│║Ῠ ${prefix}roulette
│║Ῠ ${prefix}hunt
│║Ῠ ${prefix}hunting
│║Ῠ ${prefix}pokehunt
│║Ῠ ${prefix}zoo
│║Ῠ ${prefix}forest
│║Ῠ ${prefix}animals
│║Ῠ ${prefix}pay
│║Ῠ ${prefix}loan
│║Ῠ ${prefix}borrow
│║Ῠ ${prefix}payment
│║Ῠ ${prefix}rob
│║Ῠ ${prefix}thief
│║Ῠ ${prefix}robbery
│║Ῠ ${prefix}bal
│║Ῠ ${prefix}gold
│║Ῠ ${prefix}money
│║Ῠ ${prefix}balance
│║Ῠ ${prefix}buy
│║Ῠ ${prefix}store
│║Ῠ ${prefix}shop
│║Ῠ ${prefix}mall
│║Ῠ ${prefix}shopping
└╚═══════⋑

┌🔰${prefix}GroupMenu
│╔══『 🔰𝐆𝐑𝐎𝐔𝐏_𝐌𝐎𝐃🔰 』
│║Ῠ ${prefix}warn
│║Ῠ ${prefix}nolink
│║Ῠ ${prefix}stoplink
│║Ῠ ${prefix}antilink
│║Ῠ ${prefix}welcome
│║Ῠ ${prefix}welcomer
│║Ῠ ${prefix}setwelcome
│║Ῠ ${prefix}autorole
│║Ῠ ${prefix}autorank
│║Ῠ ${prefix}del
│║Ῠ ${prefix}demote
│║Ῠ ${prefix}promote
│║Ῠ ${prefix}group
│║Ῠ ${prefix}remove
│║Ῠ ${prefix}setdesc
│║Ῠ ${prefix}setgpfp
│║Ῠ ${prefix}tagall
│║Ῠ ${prefix}admins
└╚═══════⋑

┌🍌${prefix}HentaiMenu
│╔══『 🍌𝐇𝐄𝐍𝐓𝐀𝐈🍌 』 
│║Ῠ ${prefix}ass
│║Ῠ ${prefix}bdsm
│║Ῠ ${prefix}cum  
│║Ῠ ${prefix}doujin
│║Ῠ ${prefix}feet  
│║Ῠ ${prefix}femdom  
│║Ῠ ${prefix}foxgirl  
│║Ῠ ${prefix}glasses  
│║Ῠ ${prefix}hentai
│║Ῠ ${prefix}maid 
│║Ῠ ${prefix}masturbation
│║Ῠ ${prefix}netorare  
│║Ῠ ${prefix}orgy
│║Ῠ ${prefix}panties
│║Ῠ ${prefix}pussy
│║Ῠ ${prefix}school
│║Ῠ ${prefix}tentacles
│║Ῠ ${prefix}thighs
│║Ῠ ${prefix}uniform
│║Ῠ ${prefix}yuri
└╚═══════⋑

┌🍑${prefix}NsfwMenu
│╔══『 🍑𝐍𝐒𝐅𝐖🍑 』
│║Ῠ ${prefix}p4k
│║Ῠ ${prefix}pblowjob
│║Ῠ ${prefix}pmilf
│║Ῠ ${prefix}ppussy
│║Ῠ ${prefix}pslut
│║Ῠ ${prefix}tikporn
└╚═══════⋑

┌👑${prefix}OwnerMenu
│╔══『 👑𝐎𝐖𝐍𝐄𝐑_𝐒𝐔𝐃𝐎👑 』
│║Ῠ ${prefix}ban
│║Ῠ ${prefix}unban
│║Ῠ ${prefix}reboot
│║Ῠ ${prefix}dbrem
│║Ῠ ${prefix}dataclean
│║Ῠ ${prefix}purgedata
│║Ῠ ${prefix}join
│║Ῠ ${prefix}leave
│║Ῠ ${prefix}support
│║Ῠ ${prefix}bcgroup
│║Ῠ ${prefix}bc
│║Ῠ ${prefix}sp
│║Ῠ ${prefix}mod
│║Ῠ ${prefix}mods
│║Ῠ ${prefix}repo
│║Ῠ ${prefix}githubrepo
│║Ῠ ${prefix}repository
│║Ῠ ${prefix}dev
│║Ῠ ${prefix}devs
│║Ῠ ${prefix}support
│║Ῠ ${prefix}official
│║Ῠ ${prefix}rule
│║Ῠ ${prefix}rules
│║Ῠ ${prefix}h
│║Ῠ ${prefix}how
│║Ῠ ${prefix}help
│║Ῠ ${prefix}menu
│║Ῠ ${prefix}allmenu
└╚═══════⋑

┌🏳️‍🌈${prefix}RandomMenu
│╔══『 🏳️‍🌈𝐑𝐀𝐍𝐃𝐎𝐌🏳️‍🌈 』
│║Ῠ ${prefix}advice
│║Ῠ ${prefix}rank
│║Ῠ ${prefix}fact
│║Ῠ ${prefix}meme
│║Ῠ ${prefix}neko
│║Ῠ ${prefix}quote
│║Ῠ ${prefix}reddit
│║Ῠ ${prefix}sr
│║Ῠ ${prefix}subreddit
│║Ῠ ${prefix}ship
│║Ῠ ${prefix}waifu
│║Ῠ ${prefix}tts
│║Ῠ ${prefix}gtts
│║Ῠ ${prefix}text2speech
│║Ῠ ${prefix}fun
│║Ῠ ${prefix}joke
│║Ῠ ${prefix}funny
│║Ῠ ${prefix}laugh
│║Ῠ ${prefix}dadjoke
└╚═══════⋑

┌🛍️${prefix}StoreMenu
│╔══『 🛍️𝐒𝐓𝐎𝐑𝐄🛍️ 』
│║Ῠ ${prefix}buy basic 
│║Ῠ ${prefix}buy bronze 
│║Ῠ ${prefix}buy silver 
│║Ῠ ${prefix}buy golden
│║Ῠ ${prefix}buy platinum 
│║Ῠ ${prefix}buy diamond
│║Ῠ ${prefix}buy sword
│║Ῠ ${prefix}buy laptop
│║Ῠ ${prefix}buy charm
└╚═══════⋑

┌🌐${prefix}WebMenu
│╔══『 🌐𝐖𝐄𝐁_𝐒𝐄𝐀𝐑𝐂𝐇🌐 』
│║Ῠ ${prefix}gify
│║Ῠ ${prefix}gif
│║Ῠ ${prefix}google
│║Ῠ ${prefix}web
│║Ῠ ${prefix}find
│║Ῠ ${prefix}search
│║Ῠ ${prefix}iguser 
│║Ῠ ${prefix}image
│║Ῠ ${prefix}lyrics
│║Ῠ ${prefix}pinterest
│║Ῠ ${prefix}pokemon
│║Ῠ ${prefix}pokedex
│║Ῠ ${prefix}wallpaper
│║Ῠ ${prefix}yts
│║Ῠ ${prefix}ytsearch
│║Ῠ ${prefix}ytscrape
│║Ῠ ${prefix}youtubescrape
│║Ῠ ${prefix}youtubesearch
└╚═══════⋑

┌⭕${prefix}YTFilterMenu
│╔══『 ⭕𝐘𝐎𝐔𝐓𝐔𝐁𝐄_𝐅𝐈𝐋𝐓𝐄𝐑⭕ 』
│║Ῠ ${prefix}yt8d
│║Ῠ ${prefix}ytbassboost
│║Ῠ ${prefix}ytecho
│║Ῠ ${prefix}ytflanger
│║Ῠ ${prefix}ytnightcore
│║Ῠ ${prefix}ytphaser
│║Ῠ ${prefix}ytreverse
│║Ῠ ${prefix}ytslow
│║Ῠ ${prefix}ytspeed
│║Ῠ ${prefix}ytsubboost
│║Ῠ ${prefix}ytsuperslow
│║Ῠ ${prefix}ytsuperspeed
│║Ῠ ${prefix}ytsurround
│║Ῠ ${prefix}ytvaporwave
│║Ῠ ${prefix}ytvibrato
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
