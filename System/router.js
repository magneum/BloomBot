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
var dboard = require("../Enforcers/dboard");
module.exports = async (νℓкуяє, vcнaт, update) => {
gmeta = vcнaт.isGroup
? await νℓкуяє.groupMetadata(vcнaт.chat).catch((error) => {})
: "";
groupName = vcнaт.isGroup ? gmeta.subject : "";
participants = vcнaт.isGroup ? await gmeta.participants : "";
groupAdmins = vcнaт.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
groupOwner = vcнaт.isGroup ? gmeta.owner : "";
isBotAdmin = vcнaт.isGroup
? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
: false;
isAdmin = vcнaт.isGroup ? groupAdmins.includes(vcнaт.sender) : false;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
switch (νℓкуяє.command) {
case "vlkyre":
require("../Modular/vlkyre")(νℓкуяє, vcнaт);
dboard.dboard(νℓкуяє, vcнaт, async function (udBase) {
udBase.vlkyre = udBase.vlkyre + 1;
udBase.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
console.log(udBase);
});
break;

case "how":
case "help":
case "HELP":
case "menu":
case "allmenu":
case "command":
case "commands":
require("../Modular/help")(νℓкуяє, vcнaт);
break;

case "yta":
case "play":
case "song":
case "sing":
case "ytmp3":
case "music":
case "ytplay":
case "ytaudio":
case "ytmusic":
case "youtubemusic":
require("../Modular/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(νℓкуяє, vcнaт);
break;

case "bite":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(νℓкуяє, vcнaт);
break;
case "blush":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(νℓкуяє, vcнaт);
break;
case "bonk":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(νℓкуяє, vcнaт);
break;
case "bored":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(νℓкуяє, vcнaт);
break;
case "confused":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(νℓкуяє, vcнaт);
break;
case "cry":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(νℓкуяє, vcнaт);
break;
case "cuddle":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(νℓкуяє, vcнaт);
break;
case "dance":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(νℓкуяє, vcнaт);
break;
case "goodnight":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(νℓкуяє, vcнaт);
break;
case "happy":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(νℓкуяє, vcнaт);
break;
case "highfive":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(νℓкуяє, vcнaт);
break;
case "hug":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(νℓкуяє, vcнaт);
break;
case "kill":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(νℓкуяє, vcнaт);
break;
case "kiss":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(νℓкуяє, vcнaт);
break;
case "nervous":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(νℓкуяє, vcнaт);
break;
case "pat":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(νℓкуяє, vcнaт);
break;
case "poke":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(νℓкуяє, vcнaт);
break;
case "punch":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(νℓкуяє, vcнaт);
break;
case "sad":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(νℓкуяє, vcнaт);
break;
case "scream":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(νℓкуяє, vcнaт);
break;
case "slap":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(νℓкуяє, vcнaт);
break;
case "smile":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(νℓкуяє, vcнaт);
break;
case "stare":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(νℓкуяє, vcнaт);
break;
case "wave":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(νℓкуяє, vcнaт);
break;
case "wink":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(νℓкуяє, vcнaт);
break;
case "yeet":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(νℓкуяє, vcнaт);
break;
case "yes":
require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(νℓкуяє, vcнaт);
break;

case "h.anime":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(νℓкуяє, vcнaт);
break;
case "h.download":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(νℓкуяє, vcнaт);
break;
case "h.filter":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(νℓкуяє, vcнaт);
break;
case "h.game":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(νℓкуяє, vcнaт);
break;
case "h.group":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(νℓкуяє, vcнaт);
break;
case "h.hentai":
require("../Bin/_hentai")(νℓкуяє, vcнaт);
break;
case "h.image":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(νℓкуяє, vcнaт);
break;
case "h.search":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(νℓкуяє, vcнaт);
break;
case "h.ytfilter":
require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(νℓкуяє, vcнaт);
break;

case "8d":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/8d")(νℓкуяє, vcнaт);
break;
case "bassboost":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(νℓкуяє, vcнaт);
break;
case "echo":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(νℓкуяє, vcнaт);
break;
case "flanger":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(νℓкуяє, vcнaт);
break;
case "nightcore":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(νℓкуяє, vcнaт);
break;
case "phaser":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(νℓкуяє, vcнaт);
break;
case "reverse":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(νℓкуяє, vcнaт);
break;
case "slow":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(νℓкуяє, vcнaт);
break;
case "speed":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(νℓкуяє, vcнaт);
break;
case "subboost":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(νℓкуяє, vcнaт);
break;
case "superslow":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(νℓкуяє, vcнaт);
break;
case "superspeed":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(νℓкуяє, vcнaт);
break;
case "surround":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(νℓкуяє, vcнaт);
break;
case "vaporwave":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(νℓкуяє, vcнaт);
break;
case "vibrato":
require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(νℓкуяє, vcнaт);
break;

case "yt8d":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/yt8d")(νℓкуяє, vcнaт);
break;
case "ytbassboost":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(νℓкуяє, vcнaт);
break;
case "ytecho":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(νℓкуяє, vcнaт);
break;
case "ytflanger":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(νℓкуяє, vcнaт);
break;
case "ytnightcore":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(νℓкуяє, vcнaт);
break;
case "ytphaser":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(νℓкуяє, vcнaт);
break;
case "ytreverse":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(νℓкуяє, vcнaт);
break;
case "ytslow":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(νℓкуяє, vcнaт);
break;
case "ytspeed":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(νℓкуяє, vcнaт);
break;
case "ytsubboost":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(νℓкуяє, vcнaт);
break;
case "ytsuperslow":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(νℓкуяє, vcнaт);
break;
case "ytsuperspeed":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(νℓкуяє, vcнaт);
break;
case "ytsurround":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(νℓкуяє, vcнaт);
break;
case "ytvaporwave":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(νℓкуяє, vcнaт);
break;
case "ytvibrato":
require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(νℓкуяє, vcнaт);
break;

case "s":
case "sgif":
case "sticker":
case "stickergif":
require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(νℓкуяє, vcнaт);
break;
case "tinyurl":
require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(νℓкуяє, vcнaт);
break;
case "toimg":
require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(νℓкуяє, vcнaт);
break;
case "tourl":
require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(νℓкуяє, vcнaт);
break;

case "bal":
case "gold":
case "money":
case "balance":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(νℓкуяє, vcнaт);
break;
case "buy":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(νℓкуяє, vcнaт);
break;
case "dly":
case "daily":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(νℓкуяє, vcнaт);
break;
case "fish":
case "pond":
case "fishes":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(νℓкуяє, vcнaт);
break;
case "bet":
case "gamble":
case "betting":
case "roulette":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(νℓкуяє, vcнaт);
break;
case "pay":
case "loan":
case "borrow":
case "payment":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/pay")(νℓкуяє, vcнaт);
break;
case "rob":
case "thief":
case "robbery":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/rob")(νℓкуяє, vcнaт);
break;
case "bag":
case "inv":
case "loot":
case "inventory":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(νℓкуяє, vcнaт);
break;
case "mall":
case "shop":
case "store":
case "shopping":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(νℓкуяє, vcнaт);
break;
case "job":
case "work":
case "earn":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(νℓкуяє, vcнaт);
break;
case "zoo":
case "forest":
case "animals":
require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(νℓкуяє, vcнaт);
break;

case "gimage":
case "image":
require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(νℓкуяє, vcнaт);
break;
case "neko":
require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(νℓкуяє, vcнaт);
break;
case "pin":
case "pinterest":
require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(νℓкуяє, vcнaт);
break;
case "waifu":
require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(νℓкуяє, vcнaт);
break;
case "wallpaper":
require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(νℓкуяє, vcнaт);
break;
case "advice":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(νℓкуяє, vcнaт);
break;
case "fact":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(νℓкуяє, vcнaт);
break;
case "joke":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
break;
case "meme":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(νℓкуяє, vcнaт);
break;
case "quote":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(νℓкуяє, vcнaт);
break;

case "sr":
case "reddit":
case "subreddit":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
break;
case "anime":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(νℓкуяє, vcнaт);
break;
case "manga":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(νℓкуяє, vcнaт);
break;
case "google":
require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(νℓкуяє, vcнaт);
break;

case "demote":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "group":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "promote":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "kick":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/kick")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "setdesc":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "seticon":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "tagall":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "antilink":
case "stoplink":
case "nolink":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/antilink")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;
case "bcg":
case "bcgroup":
case "broadcast":
require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/broadcast")(
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants
);
break;

default:
await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No Such Command Found_
> Visit To Know Commands: _bit.ly/krykenz_`,
"./Gallery/KryPage.png"
);
break;
}
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
