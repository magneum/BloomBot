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

┌╔══『 🎐𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎐 』
│║⦁ 𝐩𝐫𝐞𝐟𝐢𝐱: ${prefix}
│║⦁ 𝐧𝐚𝐦𝐞:${Vlkyre.pushName || "~ɴᴏ_ɴᴀᴍᴇ~"}
│║⦁ 𝐠𝐩𝐚𝐲: +918436686758
│║⦁ 𝐮𝐩𝐢: krakinzkon@oksbi
│║⦁ 𝐠𝐢𝐭: github.com/kryknz/vlkyre
│║⦁ 𝐠𝐫𝐨𝐮𝐩: Vlkyre.krakinzkon.repl.co
└╚═══════⋑

┌🐝${prefix}AnimationMenu
│╔══『 🐝𝐀𝐍𝐈𝐌𝐀𝐓𝐈𝐎𝐍🐝 』
│║⦁ ${prefix}baka
│║⦁ ${prefix}bite
│║⦁ ${prefix}blush
│║⦁ ${prefix}bonk
│║⦁ ${prefix}bored
│║⦁ ${prefix}confused
│║⦁ ${prefix}cry
│║⦁ ${prefix}cuddle
│║⦁ ${prefix}dance
│║⦁ ${prefix}goodnight
│║⦁ ${prefix}happy
│║⦁ ${prefix}hi5
│║⦁ ${prefix}highfive
│║⦁ ${prefix}hug
│║⦁ ${prefix}kick
│║⦁ ${prefix}kill
│║⦁ ${prefix}kiss
│║⦁ ${prefix}nervous
│║⦁ ${prefix}pat
│║⦁ ${prefix}poke
│║⦁ ${prefix}punch
│║⦁ ${prefix}sad
│║⦁ ${prefix}smile
│║⦁ ${prefix}stare
│║⦁ ${prefix}wave
│║⦁ ${prefix}wink
│║⦁ ${prefix}yeet
│║⦁ ${prefix}yes
│║⦁ ${prefix}zerotwo
└╚═══════⋑

┌🐾${prefix}AnimeMenu
│╔══『 🐾𝐀𝐍𝐈𝐌𝐄_𝐌𝐀𝐍𝐆𝐀🐾 』
│║⦁ ${prefix}anime
│║⦁ ${prefix}manga
└╚═══════⋑

┌👓${prefix}AudioFilterMenu
│╔══『 👓𝐀𝐔𝐃𝐈𝐎_𝐅𝐈𝐋𝐓𝐄𝐑𝐒👓 』
│║⦁ ${prefix}bassboost
│║⦁ ${prefix}echo
│║⦁ ${prefix}fast
│║⦁ ${prefix}flanger
│║⦁ ${prefix}nightcore
│║⦁ ${prefix}phaser
│║⦁ ${prefix}reverse
│║⦁ ${prefix}slow
│║⦁ ${prefix}speed
│║⦁ ${prefix}subboost
│║⦁ ${prefix}superslow
│║⦁ ${prefix}superspeed
│║⦁ ${prefix}surround
│║⦁ ${prefix}vaporwave
│║⦁ ${prefix}vibrato
└╚═══════⋑

┌🏝️${prefix}ConverterMenu
│╔══『 🏝️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑🏝️ 』
│║⦁ ${prefix}carbon
│║⦁ ${prefix}steal
│║⦁ ${prefix}sticker
│║⦁ ${prefix}tinyurl
│║⦁ ${prefix}toimg
│║⦁ ${prefix}stourl
└╚═══════⋑

┌📥${prefix}DownloaderMenu
│╔══『 📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📥 』
│║⦁ ${prefix}yta
│║⦁ ${prefix}play
│║⦁ ${prefix}song
│║⦁ ${prefix}sing
│║⦁ ${prefix}ytmp3
│║⦁ ${prefix}ytplay
│║⦁ ${prefix}ytaudio
│║⦁ ${prefix}ytmusic
│║⦁ ${prefix}youtubemusic
│║⦁ ${prefix}ytv
│║⦁ ${prefix}watch
│║⦁ ${prefix}ytmp4
│║⦁ ${prefix}stream
│║⦁ ${prefix}ytvideo
│║⦁ ${prefix}youtubevideo
│║⦁ ${prefix}radio
│║⦁ ${prefix}randmusic
│║⦁ ${prefix}randaudio
│║⦁ ${prefix}randomaudio
│║⦁ ${prefix}randommusic
│║⦁ ${prefix}suggestaudio
│║⦁ ${prefix}suggestmusic
└╚═══════⋑

┌💰${prefix}GameMenu
│╔══『 💰𝐄𝐂𝐎𝐍𝐎𝐌𝐘_𝐆𝐀𝐌𝐄💰 』
│║⦁ ${prefix}job
│║⦁ ${prefix}work
│║⦁ ${prefix}earn
│║⦁ ${prefix}bag
│║⦁ ${prefix}inv
│║⦁ ${prefix}loot
│║⦁ ${prefix}inventory
│║⦁ ${prefix}dly
│║⦁ ${prefix}daily
│║⦁ ${prefix}pond
│║⦁ ${prefix}fish
│║⦁ ${prefix}fishesh
│║⦁ ${prefix}bet
│║⦁ ${prefix}gamble
│║⦁ ${prefix}betting
│║⦁ ${prefix}roulette
│║⦁ ${prefix}hunt
│║⦁ ${prefix}hunting
│║⦁ ${prefix}pokehunt
│║⦁ ${prefix}zoo
│║⦁ ${prefix}forest
│║⦁ ${prefix}animals
│║⦁ ${prefix}pay
│║⦁ ${prefix}loan
│║⦁ ${prefix}borrow
│║⦁ ${prefix}payment
│║⦁ ${prefix}rob
│║⦁ ${prefix}thief
│║⦁ ${prefix}robbery
│║⦁ ${prefix}bal
│║⦁ ${prefix}gold
│║⦁ ${prefix}money
│║⦁ ${prefix}balance
│║⦁ ${prefix}buy
│║⦁ ${prefix}store
│║⦁ ${prefix}shop
│║⦁ ${prefix}mall
│║⦁ ${prefix}shopping
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

┌🍌${prefix}HentaiMenu
│╔══『 🍌𝐇𝐄𝐍𝐓𝐀𝐈🍌 』 
│║⦁ ${prefix}ass
│║⦁ ${prefix}bdsm
│║⦁ ${prefix}cum  
│║⦁ ${prefix}doujin
│║⦁ ${prefix}feet  
│║⦁ ${prefix}femdom  
│║⦁ ${prefix}foxgirl  
│║⦁ ${prefix}glasses  
│║⦁ ${prefix}hentai
│║⦁ ${prefix}maid 
│║⦁ ${prefix}masturbation
│║⦁ ${prefix}netorare  
│║⦁ ${prefix}orgy
│║⦁ ${prefix}panties
│║⦁ ${prefix}pussy
│║⦁ ${prefix}school
│║⦁ ${prefix}tentacles
│║⦁ ${prefix}thighs
│║⦁ ${prefix}uniform
│║⦁ ${prefix}yuri
└╚═══════⋑

┌🍑${prefix}NsfwMenu
│╔══『 🍑𝐍𝐒𝐅𝐖🍑 』
│║⦁ ${prefix}p4k
│║⦁ ${prefix}pblowjob
│║⦁ ${prefix}pmilf
│║⦁ ${prefix}ppussy
│║⦁ ${prefix}pslut
│║⦁ ${prefix}tikporn
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
│║⦁ ${prefix}advice
│║⦁ ${prefix}rank
│║⦁ ${prefix}fact
│║⦁ ${prefix}meme
│║⦁ ${prefix}neko
│║⦁ ${prefix}quote
│║⦁ ${prefix}reddit
│║⦁ ${prefix}sr
│║⦁ ${prefix}subreddit
│║⦁ ${prefix}ship
│║⦁ ${prefix}waifu
│║⦁ ${prefix}tts
│║⦁ ${prefix}gtts
│║⦁ ${prefix}text2speech
│║⦁ ${prefix}fun
│║⦁ ${prefix}joke
│║⦁ ${prefix}funny
│║⦁ ${prefix}laugh
│║⦁ ${prefix}dadjoke
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
│║⦁ ${prefix}gify
│║⦁ ${prefix}gif
│║⦁ ${prefix}google
│║⦁ ${prefix}web
│║⦁ ${prefix}find
│║⦁ ${prefix}search
│║⦁ ${prefix}iguser 
│║⦁ ${prefix}image
│║⦁ ${prefix}lyrics
│║⦁ ${prefix}pinterest
│║⦁ ${prefix}pokemon
│║⦁ ${prefix}pokedex
│║⦁ ${prefix}wallpaper
│║⦁ ${prefix}yts
│║⦁ ${prefix}ytsearch
│║⦁ ${prefix}ytscrape
│║⦁ ${prefix}youtubescrape
│║⦁ ${prefix}youtubesearch
└╚═══════⋑

┌⭕${prefix}YTFilterMenu
│╔══『 ⭕𝐘𝐎𝐔𝐓𝐔𝐁𝐄_𝐅𝐈𝐋𝐓𝐄𝐑⭕ 』
│║⦁ ${prefix}yt8d
│║⦁ ${prefix}ytbassboost
│║⦁ ${prefix}ytecho
│║⦁ ${prefix}ytflanger
│║⦁ ${prefix}ytnightcore
│║⦁ ${prefix}ytphaser
│║⦁ ${prefix}ytreverse
│║⦁ ${prefix}ytslow
│║⦁ ${prefix}ytspeed
│║⦁ ${prefix}ytsubboost
│║⦁ ${prefix}ytsuperslow
│║⦁ ${prefix}ytsuperspeed
│║⦁ ${prefix}ytsurround
│║⦁ ${prefix}ytvaporwave
│║⦁ ${prefix}ytvibrato
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
