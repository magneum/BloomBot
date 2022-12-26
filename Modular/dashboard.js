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
async (error, data) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);

if (!data) {
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
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*

╔══┌┌『 *📥DOWNLOAD HUB📥* 』
│║⦁ ${νℓкуяє.prefix}yta: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}play: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}song: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}sing: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}ytmp3: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}music: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}ytplay: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}ytaudio: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}ytmusic: ${data.youtube}
│║⦁ ${νℓкуяє.prefix}youtubemusic: ${data.youtube}
┕╚═══════⋑


┌『 *🐝ANIME HUB🐝* 』
│║⦁ ${νℓкуяє.prefix}bite: ${data.bite}
│║⦁ ${νℓкуяє.prefix}blush: ${data.blush}
│║⦁ ${νℓкуяє.prefix}bonk: ${data.bonk}
│║⦁ ${νℓкуяє.prefix}bored: ${data.bored}
│║⦁ ${νℓкуяє.prefix}confused: ${data.confused}
│║⦁ ${νℓкуяє.prefix}cry: ${data.cry}
│║⦁ ${νℓкуяє.prefix}cuddle: ${data.cuddle}
│║⦁ ${νℓкуяє.prefix}dance: ${data.dance}
│║⦁ ${νℓкуяє.prefix}goodnight: ${data.goodnight}
│║⦁ ${νℓкуяє.prefix}happy: ${data.happy}
│║⦁ ${νℓкуяє.prefix}highfive: ${data.highfive}
│║⦁ ${νℓкуяє.prefix}hug: ${data.hug}
│║⦁ ${νℓкуяє.prefix}kill: ${data.kill}
│║⦁ ${νℓкуяє.prefix}kiss: ${data.kiss}
│║⦁ ${νℓкуяє.prefix}nervous: ${data.nervous}
│║⦁ ${νℓкуяє.prefix}pat: ${data.pat}
│║⦁ ${νℓкуяє.prefix}poke: ${data.poke}
│║⦁ ${νℓкуяє.prefix}punch: ${data.punch}
│║⦁ ${νℓкуяє.prefix}sad: ${data.sad}
│║⦁ ${νℓкуяє.prefix}scream: ${data.scream}
│║⦁ ${νℓкуяє.prefix}slap: ${data.slap}
│║⦁ ${νℓкуяє.prefix}smile: ${data.smile}
│║⦁ ${νℓкуяє.prefix}stare: ${data.stare}
│║⦁ ${νℓкуяє.prefix}wave: ${data.wave}
│║⦁ ${νℓкуяє.prefix}wink: ${data.wink}
│║⦁ ${νℓкуяє.prefix}yeet: ${data.yeet}
│║⦁ ${νℓкуяє.prefix}yes: ${data.yes}
┕╚═══════⋑

┌『 *📢FILTER HUB📢* 』
│║⦁ ${νℓкуяє.prefix}bassboost: ${data.bassboost}
│║⦁ ${νℓкуяє.prefix}echo: ${data.echo}
│║⦁ ${νℓкуяє.prefix}fast: ${data.fast}
│║⦁ ${νℓкуяє.prefix}flanger: ${data.flanger}
│║⦁ ${νℓкуяє.prefix}nightcore: ${data.nightcore}
│║⦁ ${νℓкуяє.prefix}phaser: ${data.phaser}
│║⦁ ${νℓкуяє.prefix}reverse: ${data.reverse}
│║⦁ ${νℓкуяє.prefix}slow: ${data.slow}
│║⦁ ${νℓкуяє.prefix}speed: ${data.speed}
│║⦁ ${νℓкуяє.prefix}subboost: ${data.subboost}
│║⦁ ${νℓкуяє.prefix}superslow: ${data.superslow}
│║⦁ ${νℓкуяє.prefix}superspeed: ${data.superspeed}
│║⦁ ${νℓкуяє.prefix}surround: ${data.surround}
│║⦁ ${νℓкуяє.prefix}vaporwave: ${data.vaporwave}
│║⦁ ${νℓкуяє.prefix}vibrato: ${data.vibrato}
┕╚═══════⋑

┌『 *💰GAME HUB💰* 』
│║⦁ ${νℓкуяє.prefix}balance: ${data.balance}
│║⦁ ${νℓкуяє.prefix}buy: ${data.buy}
│║⦁ ${νℓкуяє.prefix}daily: ${data.daily}
│║⦁ ${νℓкуяє.prefix}fish: ${data.fish}
│║⦁ ${νℓкуяє.prefix}gamble: ${data.gamble}
│║⦁ ${νℓкуяє.prefix}inv: ${data.inv}
│║⦁ ${νℓкуяє.prefix}store: ${data.store}
│║⦁ ${νℓкуяє.prefix}work: ${data.work}
│║⦁ ${νℓкуяє.prefix}zoo: ${data.zoo}
┕╚═══════⋑

┌『 *🔰GROUP HUB🔰* 』
│║⦁ ${νℓкуяє.prefix}demote: ${data.demote}
│║⦁ ${νℓкуяє.prefix}promote: ${data.promote}
│║⦁ ${νℓкуяє.prefix}kick: ${data.kick}
│║⦁ ${νℓкуяє.prefix}setdesc: ${data.setdesc}
│║⦁ ${νℓкуяє.prefix}seticon: ${data.seticon}
│║⦁ ${νℓкуяє.prefix}tagall: ${data.tagall}
│║⦁ ${νℓкуяє.prefix}group open: ${data.group}
│║⦁ ${νℓкуяє.prefix}group close: ${data.group}
│║⦁ ${νℓкуяє.prefix}antilink: ${data.antilink}
│║⦁ ${νℓкуяє.prefix}stoplink: ${data.stoplink}
│║⦁ ${νℓкуяє.prefix}nolink: ${data.nolink}
┕╚═══════⋑

┌『 *🖼️IMAGE HUB🖼️* 』
│║⦁ ${νℓкуяє.prefix}image: ${data.image}
│║⦁ ${νℓкуяє.prefix}neko: ${data.neko}
│║⦁ ${νℓкуяє.prefix}pinterest: ${data.pinterest}
│║⦁ ${νℓкуяє.prefix}waifu: ${data.waifu}
│║⦁ ${νℓкуяє.prefix}wallpaper: ${data.wallpaper}
┕╚═══════⋑

┌『 *🌐SEARCH HUB🌐* 』
│║⦁ ${νℓкуяє.prefix}advice: ${data.advice}
│║⦁ ${νℓкуяє.prefix}anime: ${data.anime}
│║⦁ ${νℓкуяє.prefix}fact: ${data.fact}
│║⦁ ${νℓкуяє.prefix}google: ${data.google}
│║⦁ ${νℓкуяє.prefix}joke: ${data.joke}
│║⦁ ${νℓкуяє.prefix}manga: ${data.manga}
│║⦁ ${νℓкуяє.prefix}meme: ${data.meme}
│║⦁ ${νℓкуяє.prefix}quote: ${data.quote}
│║⦁ ${νℓкуяє.prefix}reddit: ${data.reddit}
┕╚═══════⋑

┌『 *⭕YT-FILTER HUB⭕* 』
│║⦁ ${νℓкуяє.prefix}ytbassboost: ${data.ytbassboost}
│║⦁ ${νℓкуяє.prefix}ytecho: ${data.ytecho}
│║⦁ ${νℓкуяє.prefix}ytflanger: ${data.ytflanger}
│║⦁ ${νℓкуяє.prefix}ytnightcore: ${data.ytnightcore}
│║⦁ ${νℓкуяє.prefix}ytphaser: ${data.ytphaser}
│║⦁ ${νℓкуяє.prefix}ytreverse: ${data.ytreverse}
│║⦁ ${νℓкуяє.prefix}ytslow: ${data.ytslow}
│║⦁ ${νℓкуяє.prefix}ytspeed: ${data.ytspeed}
│║⦁ ${νℓкуяє.prefix}ytsubboost: ${data.ytsubboost}
│║⦁ ${νℓкуяє.prefix}ytsuperslow: ${data.ytsuperslow}
│║⦁ ${νℓкуяє.prefix}ytsuperspeed: ${data.ytsuperspeed}
│║⦁ ${νℓкуяє.prefix}ytsurround: ${data.ytsurround}
│║⦁ ${νℓкуяє.prefix}ytvaporwave: ${data.ytvaporwave}
│║⦁ ${νℓкуяє.prefix}ytvibrato: ${data.ytvibrato}
┕╚═══════⋑`,
"./Gallery/KryPage.png"
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
