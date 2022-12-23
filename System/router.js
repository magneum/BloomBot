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
module.exports = async (νℓкуяє, vcнaт, update) => {
  console.log(
    "\n◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎"
  );
  console.log(
    νℓкуяє.chalk.blueBright("       🖊️ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
    νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype)
  );
  console.log(
    νℓкуяє.chalk.blueBright("       ❣️ 𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: "),
    νℓкуяє.chalk.green(νℓкуяє.pushname)
  );
  console.log(
    νℓкуяє.chalk.blueBright("       📱 𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: "),
    νℓкуяє.chalk.green(vcнaт.sender)
  );
  console.log(
    νℓкуяє.chalk.blueBright("       💬 𝐂𝐡𝐚𝐭-𝐈𝐝: "),
    νℓкуяє.chalk.green(vcнaт.chat)
  );
  console.log(
    "◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎\n"
  );
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
      return require("../Modular/vlkyre")(νℓкуяє, vcнaт);
      break;
    case "h":
    case "how":
    case "help":
    case "HELP":
    case "m":
    case "menu":
    case "allmenu":
    case "command":
    case "commands":
      return require("../Modular/help")(νℓкуяє, vcнaт);
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
      return require("../Modular/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(νℓкуяє, vcнaт);
      break;

    case "bite":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(νℓкуяє, vcнaт);
      break;
    case "blush":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(νℓкуяє, vcнaт);
      break;
    case "bonk":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(νℓкуяє, vcнaт);
      break;
    case "bored":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(νℓкуяє, vcнaт);
      break;
    case "confused":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(νℓкуяє, vcнaт);
      break;
    case "cry":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(νℓкуяє, vcнaт);
      break;
    case "cuddle":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(νℓкуяє, vcнaт);
      break;
    case "dance":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(νℓкуяє, vcнaт);
      break;
    case "goodnight":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(νℓкуяє, vcнaт);
      break;
    case "happy":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(νℓкуяє, vcнaт);
      break;
    case "highfive":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(νℓкуяє, vcнaт);
      break;
    case "hug":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(νℓкуяє, vcнaт);
      break;
    case "kick":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kick")(νℓкуяє, vcнaт);
      break;
    case "kill":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(νℓкуяє, vcнaт);
      break;
    case "kiss":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(νℓкуяє, vcнaт);
      break;
    case "nervous":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(νℓкуяє, vcнaт);
      break;
    case "pat":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(νℓкуяє, vcнaт);
      break;
    case "poke":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(νℓкуяє, vcнaт);
      break;
    case "punch":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(νℓкуяє, vcнaт);
      break;
    case "sad":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(νℓкуяє, vcнaт);
      break;
    case "scream":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(νℓкуяє, vcнaт);
      break;
    case "slap":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(νℓкуяє, vcнaт);
      break;
    case "smile":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(νℓкуяє, vcнaт);
      break;
    case "stare":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(νℓкуяє, vcнaт);
      break;
    case "wave":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(νℓкуяє, vcнaт);
      break;
    case "wink":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(νℓкуяє, vcнaт);
      break;
    case "yeet":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(νℓкуяє, vcнaт);
      break;
    case "yes":
      return require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(νℓкуяє, vcнaт);
      break;

    case "h.anime":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(νℓкуяє, vcнaт);
      break;
    case "h.download":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(νℓкуяє, vcнaт);
      break;
    case "h.filter":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(νℓкуяє, vcнaт);
      break;
    case "h.game":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(νℓкуяє, vcнaт);
      break;
    case "h.group":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(νℓкуяє, vcнaт);
      break;
    case "h.hentai":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_hentai")(νℓкуяє, vcнaт);
      break;
    case "h.image":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(νℓкуяє, vcнaт);
      break;
    case "h.search":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(νℓкуяє, vcнaт);
      break;
    case "h.ytfilter":
      return require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(νℓкуяє, vcнaт);
      break;

    case "8d":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/8d")(νℓкуяє, vcнaт);
      break;
    case "bassboost":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(νℓкуяє, vcнaт);
      break;
    case "echo":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(νℓкуяє, vcнaт);
      break;
    case "flanger":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(νℓкуяє, vcнaт);
      break;
    case "nightcore":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(νℓкуяє, vcнaт);
      break;
    case "phaser":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(νℓкуяє, vcнaт);
      break;
    case "reverse":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(νℓкуяє, vcнaт);
      break;
    case "slow":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(νℓкуяє, vcнaт);
      break;
    case "speed":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(νℓкуяє, vcнaт);
      break;
    case "subboost":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(νℓкуяє, vcнaт);
      break;
    case "superslow":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(νℓкуяє, vcнaт);
      break;
    case "superspeed":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(νℓкуяє, vcнaт);
      break;
    case "surround":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(νℓкуяє, vcнaт);
      break;
    case "vaporwave":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(νℓкуяє, vcнaт);
      break;
    case "vibrato":
      return require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(νℓкуяє, vcнaт);
      break;

    case "yt8d":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/yt8d")(νℓкуяє, vcнaт);
      break;
    case "ytbassboost":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(νℓкуяє, vcнaт);
      break;
    case "ytecho":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(νℓкуяє, vcнaт);
      break;
    case "ytflanger":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(νℓкуяє, vcнaт);
      break;
    case "ytnightcore":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(νℓкуяє, vcнaт);
      break;
    case "ytphaser":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(νℓкуяє, vcнaт);
      break;
    case "ytreverse":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(νℓкуяє, vcнaт);
      break;
    case "ytslow":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(νℓкуяє, vcнaт);
      break;
    case "ytspeed":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(νℓкуяє, vcнaт);
      break;
    case "ytsubboost":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(νℓкуяє, vcнaт);
      break;
    case "ytsuperslow":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(νℓкуяє, vcнaт);
      break;
    case "ytsuperspeed":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(νℓкуяє, vcнaт);
      break;
    case "ytsurround":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(νℓкуяє, vcнaт);
      break;
    case "ytvaporwave":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(νℓкуяє, vcнaт);
      break;
    case "ytvibrato":
      return require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(νℓкуяє, vcнaт);
      break;

    case "s":
    case "sgif":
    case "sticker":
    case "stickergif":
      return require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(νℓкуяє, vcнaт);
      break;
    case "tinyurl":
      return require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(νℓкуяє, vcнaт);
      break;
    case "toimg":
      return require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(νℓкуяє, vcнaт);
      break;
    case "tourl":
      return require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(νℓкуяє, vcнaт);
      break;

    case "bal":
    case "gold":
    case "money":
    case "balance":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(νℓкуяє, vcнaт);
      break;
    case "buy":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(νℓкуяє, vcнaт);
      break;
    case "dly":
    case "daily":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(νℓкуяє, vcнaт);
      break;
    case "fish":
    case "pond":
    case "fishes":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(νℓкуяє, vcнaт);
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(νℓкуяє, vcнaт);
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/pay")(νℓкуяє, vcнaт);
      break;
    case "rob":
    case "thief":
    case "robbery":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/rob")(νℓкуяє, vcнaт);
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(νℓкуяє, vcнaт);
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(νℓкуяє, vcнaт);
      break;
    case "job":
    case "work":
    case "earn":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(νℓкуяє, vcнaт);
      break;
    case "zoo":
    case "forest":
    case "animals":
      return require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(νℓкуяє, vcнaт);
      break;

    case "ass":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/ass")(νℓкуяє, vcнaт);
      break;
    case "bsdm":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/bdsm")(νℓкуяє, vcнaт);
      break;
    case "blowjob":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/blowjob")(νℓкуяє, vcнaт);
      break;
    case "cum":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/cum")(νℓкуяє, vcнaт);
      break;
    case "doujin":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/doujin")(νℓкуяє, vcнaт);
      break;
    case "feet":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/feet")(νℓкуяє, vcнaт);
      break;
    case "femdom":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/femdom")(νℓкуяє, vcнaт);
      break;
    case "foxgirl":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/foxgirl")(νℓкуяє, vcнaт);
      break;
    case "glasses":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/glasses")(νℓкуяє, vcнaт);
      break;
    case "hentai":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/hentai")(νℓкуяє, vcнaт);
      break;
    case "maid":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/maid")(νℓкуяє, vcнaт);
      break;
    case "masturbation":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/masturbation")(νℓкуяє, vcнaт);
      break;
    case "netorare":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/netorare")(νℓкуяє, vcнaт);
      break;
    case "orgy":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/orgy")(νℓкуяє, vcнaт);
      break;
    case "pussy":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/pussy")(νℓкуяє, vcнaт);
      break;
    case "school":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/school")(νℓкуяє, vcнaт);
      break;
    case "succubus":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/succubus")(νℓкуяє, vcнaт);
      break;
    case "tentacles":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/tentacles")(νℓкуяє, vcнaт);
      break;
    case "thighs":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/thighs")(νℓкуяє, vcнaт);
      break;
    case "uglyBastard":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uglyBastard")(νℓкуяє, vcнaт);
      break;
    case "uniform":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uniform")(νℓкуяє, vcнaт);
      break;
    case "yuri":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/yuri")(νℓкуяє, vcнaт);
      break;
    case "zettaiRyouiki":
      return require("../Modular/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/zettaiRyouiki")(νℓкуяє, vcнaт);
      break;

    case "gimage":
    case "image":
      return require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(νℓкуяє, vcнaт);
      break;
    case "neko":
      return require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(νℓкуяє, vcнaт);
      break;
    case "pin":
    case "pinterest":
      return require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(νℓкуяє, vcнaт);
      break;
    case "waifu":
      return require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(νℓкуяє, vcнaт);
      break;
    case "wallpaper":
      return require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(νℓкуяє, vcнaт);
      break;
    case "advice":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(νℓкуяє, vcнaт);
      break;
    case "fact":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(νℓкуяє, vcнaт);
      break;
    case "joke":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
      break;
    case "meme":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(νℓкуяє, vcнaт);
      break;
    case "quote":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(νℓкуяє, vcнaт);
      break;

    case "sr":
    case "reddit":
    case "subreddit":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
      break;
    case "anime":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(νℓкуяє, vcнaт);
      break;
    case "manga":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(νℓкуяє, vcнaт);
      break;
    case "google":
      return require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(νℓкуяє, vcнaт);
      break;

    case "demote":
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
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
    case "remove":
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/remove")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
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
    case "autorank":
    case "autorole":
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/autorank")(
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
      return require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/antilink")(
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
      return await νℓкуяє.imgB(
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
