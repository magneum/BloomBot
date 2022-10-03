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
let latensi = speed() (timestamp;
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
│║⦁ ${prefix}yta _(60💰)_
│║⦁ ${prefix}play _(60💰)_
│║⦁ ${prefix}song _(60💰)_
│║⦁ ${prefix}sing _(60💰)_
│║⦁ ${prefix}ytmp3 _(60💰)_
│║⦁ ${prefix}ytplay _(60💰)_
│║⦁ ${prefix}ytaudio _(60💰)_
│║⦁ ${prefix}ytmusic _(60💰)_
│║⦁ ${prefix}youtubemusic _(60💰)_
│║⦁ ${prefix}ytv _(60💰)_
│║⦁ ${prefix}watch _(60💰)_
│║⦁ ${prefix}ytmp4 _(60💰)_
│║⦁ ${prefix}stream _(60💰)_
│║⦁ ${prefix}ytvideo _(60💰)_
│║⦁ ${prefix}youtubevideo _(60💰)_
│║⦁ ${prefix}radio _(60💰)_
│║⦁ ${prefix}randmusic _(60💰)_
│║⦁ ${prefix}randaudio _(60💰)_
│║⦁ ${prefix}randomaudio _(60💰)_
│║⦁ ${prefix}randommusic _(60💰)_
│║⦁ ${prefix}suggestaudio _(60💰)_
│║⦁ ${prefix}suggestmusic _(60💰)_
└╚═══════⋑

┌🐾${prefix}AnimeMenu
│╔══『 🐾𝐀𝐍𝐈𝐌𝐄_𝐌𝐀𝐍𝐆𝐀🐾 』
│║⦁ ${prefix}anime _(40💰)_
│║⦁ ${prefix}manga _(40💰)_
└╚═══════⋑

┌🐝${prefix}AnimationMenu
│╔══『 🐝𝐀𝐍𝐈𝐌𝐀𝐓𝐈𝐎𝐍🐝 』
│║⦁ ${prefix}baka  _(20💰)_
│║⦁ ${prefix}bite  _(20💰)_
│║⦁ ${prefix}blush  _(20💰)_
│║⦁ ${prefix}bonk  _(20💰)_
│║⦁ ${prefix}bored  _(20💰)_
│║⦁ ${prefix}confused  _(20💰)_
│║⦁ ${prefix}cry  _(20💰)_
│║⦁ ${prefix}cuddle  _(20💰)_
│║⦁ ${prefix}dance  _(20💰)_
│║⦁ ${prefix}goodnight  _(20💰)_
│║⦁ ${prefix}happy  _(20💰)_
│║⦁ ${prefix}hi5  _(20💰)_
│║⦁ ${prefix}highfive  _(20💰)_
│║⦁ ${prefix}hug  _(20💰)_
│║⦁ ${prefix}kick  _(20💰)_
│║⦁ ${prefix}kill  _(20💰)_
│║⦁ ${prefix}kiss  _(20💰)_
│║⦁ ${prefix}nervous  _(20💰)_
│║⦁ ${prefix}pat  _(20💰)_
│║⦁ ${prefix}poke  _(20💰)_
│║⦁ ${prefix}punch  _(20💰)_
│║⦁ ${prefix}sad  _(20💰)_
│║⦁ ${prefix}smile  _(20💰)_
│║⦁ ${prefix}stare  _(20💰)_
│║⦁ ${prefix}wave  _(20💰)_
│║⦁ ${prefix}wink  _(20💰)_
│║⦁ ${prefix}yeet  _(20💰)_
│║⦁ ${prefix}yes  _(20💰)_
│║⦁ ${prefix}zerotwo  _(20💰)_
└╚═══════⋑

┌👓${prefix}AudioFilterMenu
│╔══『 👓𝐀𝐔𝐃𝐈𝐎_𝐅𝐈𝐋𝐓𝐄𝐑𝐒👓 』
│║⦁ ${prefix}bassboost _(30💰)_
│║⦁ ${prefix}echo _(30💰)_
│║⦁ ${prefix}fast _(30💰)_
│║⦁ ${prefix}flanger _(30💰)_
│║⦁ ${prefix}nightcore _(30💰)_
│║⦁ ${prefix}phaser _(30💰)_
│║⦁ ${prefix}reverse _(30💰)_
│║⦁ ${prefix}slow _(30💰)_
│║⦁ ${prefix}speed _(30💰)_
│║⦁ ${prefix}subboost _(30💰)_
│║⦁ ${prefix}superslow _(30💰)_
│║⦁ ${prefix}superspeed _(30💰)_
│║⦁ ${prefix}surround _(30💰)_
│║⦁ ${prefix}vaporwave _(30💰)_
│║⦁ ${prefix}vibrato _(30💰)_
└╚═══════⋑

┌🏝️${prefix}ConverterMenu
│╔══『 🏝️𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑🏝️ 』
│║⦁ ${prefix}carbon _(10💰)_
│║⦁ ${prefix}steal _(10💰)_
│║⦁ ${prefix}sticker _(10💰)_
│║⦁ ${prefix}tinyurl _(10💰)_
│║⦁ ${prefix}toimg _(10💰)_
│║⦁ ${prefix}stourl _(10💰)_
└╚═══════⋑

┌💰${prefix}GameMenu
│╔══『 💰𝐄𝐂𝐎𝐍𝐎𝐌𝐘_𝐆𝐀𝐌𝐄💰 』
│║⦁ ${prefix}job _(10💰)_
│║⦁ ${prefix}work _(10💰)_
│║⦁ ${prefix}earn _(10💰)_
│║⦁ ${prefix}bag _(10💰)_
│║⦁ ${prefix}inv _(10💰)_
│║⦁ ${prefix}loot _(10💰)_
│║⦁ ${prefix}inventory _(10💰)_
│║⦁ ${prefix}dly _(10💰)_
│║⦁ ${prefix}daily _(10💰)_
│║⦁ ${prefix}pond _(10💰)_
│║⦁ ${prefix}fish _(10💰)_
│║⦁ ${prefix}fishesh _(10💰)_
│║⦁ ${prefix}bet _(10💰)_
│║⦁ ${prefix}gamble _(10💰)_
│║⦁ ${prefix}betting _(10💰)_
│║⦁ ${prefix}roulette _(10💰)_
│║⦁ ${prefix}hunt _(10💰)_
│║⦁ ${prefix}hunting _(10💰)_
│║⦁ ${prefix}pokehunt _(10💰)_
│║⦁ ${prefix}zoo _(10💰)_
│║⦁ ${prefix}forest _(10💰)_
│║⦁ ${prefix}animals _(10💰)_
│║⦁ ${prefix}pay _(10💰)_
│║⦁ ${prefix}loan _(10💰)_
│║⦁ ${prefix}borrow _(10💰)_
│║⦁ ${prefix}payment _(10💰)_
│║⦁ ${prefix}rob _(10💰)_
│║⦁ ${prefix}thief _(10💰)_
│║⦁ ${prefix}robbery _(10💰)_
│║⦁ ${prefix}bal _(10💰)_
│║⦁ ${prefix}gold _(10💰)_
│║⦁ ${prefix}money _(10💰)_
│║⦁ ${prefix}balance _(10💰)_
│║⦁ ${prefix}buy _(10💰)_
│║⦁ ${prefix}store _(10💰)_
│║⦁ ${prefix}shop _(10💰)_
│║⦁ ${prefix}mall _(10💰)_
│║⦁ ${prefix}shopping _(10💰)_
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
│║⦁ ${prefix}advice _(50💰)_
│║⦁ ${prefix}rank _(50💰)_
│║⦁ ${prefix}fact _(50💰)_
│║⦁ ${prefix}meme _(50💰)_
│║⦁ ${prefix}neko _(50💰)_
│║⦁ ${prefix}quote _(50💰)_
│║⦁ ${prefix}reddit _(50💰)_
│║⦁ ${prefix}sr _(50💰)_
│║⦁ ${prefix}subreddit _(50💰)_
│║⦁ ${prefix}ship _(50💰)_
│║⦁ ${prefix}waifu _(50💰)_
│║⦁ ${prefix}tts _(50💰)_
│║⦁ ${prefix}gtts _(50💰)_
│║⦁ ${prefix}text2speech _(50💰)_
│║⦁ ${prefix}fun _(50💰)_
│║⦁ ${prefix}joke _(50💰)_
│║⦁ ${prefix}funny _(50💰)_
│║⦁ ${prefix}laugh _(50💰)_
│║⦁ ${prefix}dadjoke _(50💰)_
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
│║⦁ ${prefix}gify _(60💰)_
│║⦁ ${prefix}gif _(60💰)_
│║⦁ ${prefix}google _(60💰)_
│║⦁ ${prefix}web _(60💰)_
│║⦁ ${prefix}find _(60💰)_
│║⦁ ${prefix}search _(60💰)_
│║⦁ ${prefix}iguser _(60💰)_
│║⦁ ${prefix}image _(60💰)_
│║⦁ ${prefix}lyrics _(60💰)_
│║⦁ ${prefix}pinterest _(60💰)_
│║⦁ ${prefix}pokemon _(60💰)_
│║⦁ ${prefix}pokedex _(60💰)_
│║⦁ ${prefix}wallpaper _(60💰)_
│║⦁ ${prefix}yts _(60💰)_
│║⦁ ${prefix}ytsearch _(60💰)_
│║⦁ ${prefix}ytscrape _(60💰)_
│║⦁ ${prefix}youtubescrape _(60💰)_
│║⦁ ${prefix}youtubesearch _(60💰)_
└╚═══════⋑

┌⭕${prefix}YTFilterMenu
│╔══『 ⭕𝐘𝐎𝐔𝐓𝐔𝐁𝐄_𝐅𝐈𝐋𝐓𝐄𝐑⭕ 』
│║⦁ ${prefix}yt8d _(40💰)_
│║⦁ ${prefix}ytbassboost _(40💰)_
│║⦁ ${prefix}ytecho _(40💰)_
│║⦁ ${prefix}ytflanger _(40💰)_
│║⦁ ${prefix}ytnightcore _(40💰)_
│║⦁ ${prefix}ytphaser _(40💰)_
│║⦁ ${prefix}ytreverse _(40💰)_
│║⦁ ${prefix}ytslow _(40💰)_
│║⦁ ${prefix}ytspeed _(40💰)_
│║⦁ ${prefix}ytsubboost _(40💰)_
│║⦁ ${prefix}ytsuperslow _(40💰)_
│║⦁ ${prefix}ytsuperspeed _(40💰)_
│║⦁ ${prefix}ytsurround _(40💰)_
│║⦁ ${prefix}ytvaporwave _(40💰)_
│║⦁ ${prefix}ytvibrato _(40💰)_
└╚═══════⋑

┌🍌${prefix}HentaiMenu
│╔══『 🍌𝐇𝐄𝐍𝐓𝐀𝐈🍌 』 
│║⦁ ${prefix}ass _(80💰)_
│║⦁ ${prefix}bdsm _(80💰)_
│║⦁ ${prefix}cum _(80💰)_
│║⦁ ${prefix}doujin _(80💰)_
│║⦁ ${prefix}feet _(80💰)_
│║⦁ ${prefix}femdom _(80💰)_  
│║⦁ ${prefix}foxgirl _(80💰)_  
│║⦁ ${prefix}glasses _(80💰)_  
│║⦁ ${prefix}hentai _(80💰)_
│║⦁ ${prefix}maid _(80💰)_
│║⦁ ${prefix}masturbation _(80💰)_
│║⦁ ${prefix}netorare _(80💰)_
│║⦁ ${prefix}orgy _(80💰)_
│║⦁ ${prefix}panties _(80💰)_
│║⦁ ${prefix}pussy _(80💰)_
│║⦁ ${prefix}school _(80💰)_
│║⦁ ${prefix}tentacles _(80💰)_
│║⦁ ${prefix}thighs _(80💰)_
│║⦁ ${prefix}uniform _(80💰)_
│║⦁ ${prefix}yuri _(80💰)_
└╚═══════⋑

┌🍑${prefix}NsfwMenu
│╔══『 🍑𝐍𝐒𝐅𝐖🍑 』
│║⦁ ${prefix}p4k _(100💰)_
│║⦁ ${prefix}pblowjob _(100💰)_
│║⦁ ${prefix}pmilf _(100💰)_
│║⦁ ${prefix}ppussy _(100💰)_
│║⦁ ${prefix}pslut _(100💰)_
│║⦁ ${prefix}tikporn _(100💰)_
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
