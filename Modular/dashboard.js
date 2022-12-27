("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт) => {
await νℓкуяє.dashboard.findOne(
{
ID: vcнaт.sender,
},
async (error, uBoard) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);

if (!uBoard) {
new νℓкуяє.dashboard({
ID: vcнaт.sender,
bite: 0,
blus: 0,
bonk: 0,
bored: 0,
confused: 0,
cry: 0,
cuddle: 0,
dance: 0,
goodnight: 0,
happy: 0,
highfive: 0,
hug: 0,
kill: 0,
kiss: 0,
nervous: 0,
pat: 0,
poke: 0,
poke: 0,
punch: 0,
sad: 0,
scream: 0,
slap: 0,
smile: 0,
stare: 0,
wave: 0,
wink: 0,
yeet: 0,
yes: 0,
sticker: 0,
tinyurl: 0,
toimg: 0,
tourl: 0,
youtube: 0,
bassbost: 0,
echo: 0,
flanger: 0,
nightcore: 0,
phaser: 0,
reverse: 0,
slow: 0,
speed: 0,
subboost: 0,
superslow: 0,
superspeed: 0,
surround: 0,
vaporwave: 0,
vibrato: 0,
balance: 0,
buy: 0,
daily: 0,
fish: 0,
gamble: 0,
inv: 0,
pay: 0,
rob: 0,
store: 0,
work: 0,
zoo: 0,
antilink: 0,
broadcast: 0,
delete: 0,
demote: 0,
group: 0,
promote: 0,
kick: 0,
setdesc: 0,
seticon: 0,
tagall: 0,
image: 0,
neko: 0,
pinterest: 0,
waifu: 0,
wallpaper: 0,
advice: 0,
anime: 0,
fact: 0,
google: 0,
joke: 0,
manga: 0,
meme: 0,
quote: 0,
reddit: 0,
ytbassboost: 0,
ytecho: 0,
ytflanger: 0,
ytnightcore: 0,
ytphaser: 0,
ytreverse: 0,
ytslow: 0,
ytspeed: 0,
ytsubboost: 0,
ytsuperslow: 0,
ytsuperspeed: 0,
ytsurround: 0,
ytvaporwave: 0,
ytvibrato: 0,
help: 0,
vlkyre: 0,
_anime: 0,
_download: 0,
_filter: 0,
_game: 0,
_group: 0,
_image: 0,
_search: 0,
_ytfilter: 0,
})
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🧈Status:* Your Dashboard has been created!`,
"./Gallery/vlkyre.png"
);
} else {
await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*Hello, I am Vlkyre User🤖Bot*
> _ⒸVLKYRE: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!_


┌『 *📋DASHBOARD📋* 』
│║⦁ ${νℓкуяє.prefix}help: ${uBoard.help}/∞
│║⦁ ${νℓкуяє.prefix}vlkyre: ${uBoard.vlkyre}/∞
│║⦁ ${νℓкуяє.prefix}_anime: ${uBoard._anime}/∞
│║⦁ ${νℓкуяє.prefix}_download: ${uBoard._download}/∞
│║⦁ ${νℓкуяє.prefix}_filter: ${uBoard._filter}/∞
│║⦁ ${νℓкуяє.prefix}_game: ${uBoard._game}/∞
│║⦁ ${νℓкуяє.prefix}_group: ${uBoard._group}/∞
│║⦁ ${νℓкуяє.prefix}_image: ${uBoard._image}/∞
│║⦁ ${νℓкуяє.prefix}_search: ${uBoard._search}/∞
│║⦁ ${νℓкуяє.prefix}_ytfilter: ${uBoard._ytfilter}/∞
│║⦁ 
│║⦁ ${νℓкуяє.prefix}yta: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}play: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}song: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}sing: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}ytmp3: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}music: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}ytplay: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}ytaudio: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}ytmusic: ${uBoard.youtube}
│║⦁ ${νℓкуяє.prefix}youtubemusic: ${uBoard.youtube}
│║⦁ 
│║⦁ ${νℓкуяє.prefix}bite: ${uBoard.bite}/∞
│║⦁ ${νℓкуяє.prefix}blush: ${uBoard.blush}/∞
│║⦁ ${νℓкуяє.prefix}bonk: ${uBoard.bonk}/∞
│║⦁ ${νℓкуяє.prefix}bored: ${uBoard.bored}/∞
│║⦁ ${νℓкуяє.prefix}confused: ${uBoard.confused}/∞
│║⦁ ${νℓкуяє.prefix}cry: ${uBoard.cry}/∞
│║⦁ ${νℓкуяє.prefix}cuddle: ${uBoard.cuddle}/∞
│║⦁ ${νℓкуяє.prefix}dance: ${uBoard.dance}/∞
│║⦁ ${νℓкуяє.prefix}goodnight: ${uBoard.goodnight}/∞
│║⦁ ${νℓкуяє.prefix}happy: ${uBoard.happy}/∞
│║⦁ ${νℓкуяє.prefix}highfive: ${uBoard.highfive}/∞
│║⦁ ${νℓкуяє.prefix}hug: ${uBoard.hug}/∞
│║⦁ ${νℓкуяє.prefix}kill: ${uBoard.kill}/∞
│║⦁ ${νℓкуяє.prefix}kiss: ${uBoard.kiss}/∞
│║⦁ ${νℓкуяє.prefix}nervous: ${uBoard.nervous}/∞
│║⦁ ${νℓкуяє.prefix}pat: ${uBoard.pat}/∞
│║⦁ ${νℓкуяє.prefix}poke: ${uBoard.poke}/∞
│║⦁ ${νℓкуяє.prefix}punch: ${uBoard.punch}/∞
│║⦁ ${νℓкуяє.prefix}sad: ${uBoard.sad}/∞
│║⦁ ${νℓкуяє.prefix}scream: ${uBoard.scream}/∞
│║⦁ ${νℓкуяє.prefix}slap: ${uBoard.slap}/∞
│║⦁ ${νℓкуяє.prefix}smile: ${uBoard.smile}/∞
│║⦁ ${νℓкуяє.prefix}stare: ${uBoard.stare}/∞
│║⦁ ${νℓкуяє.prefix}wave: ${uBoard.wave}/∞
│║⦁ ${νℓкуяє.prefix}wink: ${uBoard.wink}/∞
│║⦁ ${νℓкуяє.prefix}yeet: ${uBoard.yeet}/∞
│║⦁ ${νℓкуяє.prefix}yes: ${uBoard.yes}/∞
│║⦁ 
│║⦁ ${νℓкуяє.prefix}bassboost: ${uBoard.bassboost}
│║⦁ ${νℓкуяє.prefix}echo: ${uBoard.echo}
│║⦁ ${νℓкуяє.prefix}fast: ${uBoard.fast}
│║⦁ ${νℓкуяє.prefix}flanger: ${uBoard.flanger}
│║⦁ ${νℓкуяє.prefix}nightcore: ${uBoard.nightcore}
│║⦁ ${νℓкуяє.prefix}phaser: ${uBoard.phaser}
│║⦁ ${νℓкуяє.prefix}reverse: ${uBoard.reverse}
│║⦁ ${νℓкуяє.prefix}slow: ${uBoard.slow}
│║⦁ ${νℓкуяє.prefix}speed: ${uBoard.speed}
│║⦁ ${νℓкуяє.prefix}subboost: ${uBoard.subboost}
│║⦁ ${νℓкуяє.prefix}superslow: ${uBoard.superslow}
│║⦁ ${νℓкуяє.prefix}superspeed: ${uBoard.superspeed}
│║⦁ ${νℓкуяє.prefix}surround: ${uBoard.surround}
│║⦁ ${νℓкуяє.prefix}vaporwave: ${uBoard.vaporwave}
│║⦁ ${νℓкуяє.prefix}vibrato: ${uBoard.vibrato}
│║⦁ 
│║⦁ ${νℓкуяє.prefix}balance: ${uBoard.balance}
│║⦁ ${νℓкуяє.prefix}buy: ${uBoard.buy}
│║⦁ ${νℓкуяє.prefix}daily: ${uBoard.daily}
│║⦁ ${νℓкуяє.prefix}fish: ${uBoard.fish}
│║⦁ ${νℓкуяє.prefix}gamble: ${uBoard.gamble}
│║⦁ ${νℓкуяє.prefix}inv: ${uBoard.inv}
│║⦁ ${νℓкуяє.prefix}store: ${uBoard.store}
│║⦁ ${νℓкуяє.prefix}work: ${uBoard.work}
│║⦁ ${νℓкуяє.prefix}zoo: ${uBoard.zoo}
│║⦁ 
│║⦁ ${νℓкуяє.prefix}demote: ${uBoard.demote}/∞
│║⦁ ${νℓкуяє.prefix}promote: ${uBoard.promote}/∞
│║⦁ ${νℓкуяє.prefix}kick: ${uBoard.kick}/∞
│║⦁ ${νℓкуяє.prefix}setdesc: ${uBoard.setdesc}/∞
│║⦁ ${νℓкуяє.prefix}seticon: ${uBoard.seticon}/∞
│║⦁ ${νℓкуяє.prefix}tagall: ${uBoard.tagall}/∞
│║⦁ ${νℓкуяє.prefix}group open: ${uBoard.group}/∞
│║⦁ ${νℓкуяє.prefix}group close: ${uBoard.group}/∞
│║⦁ ${νℓкуяє.prefix}antilink: ${uBoard.antilink}/∞
│║⦁ ${νℓкуяє.prefix}stoplink: ${uBoard.stoplink}/∞
│║⦁ ${νℓкуяє.prefix}nolink: ${uBoard.nolink}/∞
│║⦁ 
│║⦁ ${νℓкуяє.prefix}image: ${uBoard.image}
│║⦁ ${νℓкуяє.prefix}neko: ${uBoard.neko}
│║⦁ ${νℓкуяє.prefix}pinterest: ${uBoard.pinterest}
│║⦁ ${νℓкуяє.prefix}waifu: ${uBoard.waifu}
│║⦁ ${νℓкуяє.prefix}wallpaper: ${uBoard.wallpaper}
│║⦁ 
│║⦁ ${νℓкуяє.prefix}advice: ${uBoard.advice}
│║⦁ ${νℓкуяє.prefix}anime: ${uBoard.anime}
│║⦁ ${νℓкуяє.prefix}fact: ${uBoard.fact}
│║⦁ ${νℓкуяє.prefix}google: ${uBoard.google}
│║⦁ ${νℓкуяє.prefix}joke: ${uBoard.joke}
│║⦁ ${νℓкуяє.prefix}manga: ${uBoard.manga}
│║⦁ ${νℓкуяє.prefix}meme: ${uBoard.meme}
│║⦁ ${νℓкуяє.prefix}quote: ${uBoard.quote}
│║⦁ ${νℓкуяє.prefix}reddit: ${uBoard.reddit}
│║⦁ 
│║⦁ ${νℓкуяє.prefix}ytbassboost: ${uBoard.ytbassboost}
│║⦁ ${νℓкуяє.prefix}ytecho: ${uBoard.ytecho}
│║⦁ ${νℓкуяє.prefix}ytflanger: ${uBoard.ytflanger}
│║⦁ ${νℓкуяє.prefix}ytnightcore: ${uBoard.ytnightcore}
│║⦁ ${νℓкуяє.prefix}ytphaser: ${uBoard.ytphaser}
│║⦁ ${νℓкуяє.prefix}ytreverse: ${uBoard.ytreverse}
│║⦁ ${νℓкуяє.prefix}ytslow: ${uBoard.ytslow}
│║⦁ ${νℓкуяє.prefix}ytspeed: ${uBoard.ytspeed}
│║⦁ ${νℓкуяє.prefix}ytsubboost: ${uBoard.ytsubboost}
│║⦁ ${νℓкуяє.prefix}ytsuperslow: ${uBoard.ytsuperslow}
│║⦁ ${νℓкуяє.prefix}ytsuperspeed: ${uBoard.ytsuperspeed}
│║⦁ ${νℓкуяє.prefix}ytsurround: ${uBoard.ytsurround}
│║⦁ ${νℓкуяє.prefix}ytvaporwave: ${uBoard.ytvaporwave}
│║⦁ ${νℓкуяє.prefix}ytvibrato: ${uBoard.ytvibrato}
┕╚═══════⋑`,
"./Gallery/νℓкуяє_dashboard.jpg"
);
}
}
);
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
