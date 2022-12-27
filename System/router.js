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
  if (νℓкуяє.isCommand)
    switch (νℓкуяє.command) {
      case "vlkyre":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.vlkyre = dback.vlkyre + 1;
          require("../Modular/vlkyre")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "help":
      case "menu":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.help = dback.help + 1;
          require("../Modular/help")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "db":
      case "dashboard":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.help = dback.help + 1;
          require("../Modular/dashboard")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.youtube = dback.youtube + 1;
          require("../Modular/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "bite":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bite = dback.bite + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "blush":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.blush = dback.blush + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bonk":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bonk = dback.bonk + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bored":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bored = dback.bored + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "confused":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.confused = dback.confused + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "cry":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.cry = dback.cry + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "cuddle":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.cuddle = dback.cuddle + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "dance":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.dance = dback.dance + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "goodnight":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.goodnight = dback.goodnight + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "happy":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.happy = dback.happy + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "highfive":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.highfive = dback.highfive + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "hug":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.hug = dback.hug + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "kill":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.kill = dback.kill + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "kiss":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.kiss = dback.kiss + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "nervous":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.nervous = dback.nervous + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pat":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pat = dback.pat + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "poke":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.poke = dback.poke + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "punch":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.punch = dback.punch + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "sad":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.sad = dback.sad + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "scream":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.scream = dback.scream + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "slap":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.slap = dback.slap + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "smile":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.smile = dback.smile + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "stare":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.stare = dback.stare + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wave = dback.wave + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wink":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wink = dback.wink + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "yeet":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.yeet = dback.yeet + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "yes":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.yes = dback.yes + 1;
          require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "h.anime":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._anime = dback._anime + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.download":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._download = dback._download + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.filter":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._filter = dback._filter + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.game":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._game = dback._game + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.group":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._group = dback._group + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      // case "h.hentai":
      // require("../Bin/_hentai")(νℓкуяє, vcнaт);
      // require("./dboard")(νℓкуяє, vcнaт, (dback) => {
      // dback.vlkyre = dback.vlkyre + 1;
      // require("../Modular/vlkyre")(νℓкуяє, vcнaт);
      // dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      // });
      // break;
      case "h.image":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._image = dback._image + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.search":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._search = dback._search + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.ytfilter":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._ytfilter = dback._ytfilter + 1;
          require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "bassboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bassboost = dback.bassboost + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "echo":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.echo = dback.echo + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "flanger":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.flanger = dback.flanger + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "nightcore":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.nightcore = dback.nightcore + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "phaser":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.phaser = dback.phaser + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "reverse":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.reverse = dback.reverse + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "slow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.slow = dback.slow + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "speed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.speed = dback.speed + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "subboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.subboost = dback.subboost + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "superslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.superslow = dback.superslow + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "superspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.superspeed = dback.superspeed + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "surround":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.surround = dback.surround + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "vaporwave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.vaporwave = dback.vaporwave + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "vibrato":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.vibrato = dback.vibrato + 1;
          require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "ytbassboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytbassboost = dback.ytbassboost + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytecho":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytecho = dback.ytecho + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytflanger":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytflanger = dback.ytflanger + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytnightcore":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytnightcore = dback.ytnightcore + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytphaser":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytphaser = dback.ytphaser + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytreverse":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytreverse = dback.ytreverse + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytslow = dback.ytslow + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytspeed = dback.ytspeed + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsubboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsubboost = dback.ytsubboost + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsuperslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsuperslow = dback.ytsuperslow + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsuperspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsuperspeed = dback.ytsuperspeed + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsurround":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsurround = dback.ytsurround + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytvaporwave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytvaporwave = dback.ytvaporwave + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytvibrato":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytvibrato = dback.ytvibrato + 1;
          require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "sticker":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.sticker = dback.sticker + 1;
          require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tinyurl":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tinyurl = dback.tinyurl + 1;
          require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "toimg":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.toimg = dback.toimg + 1;
          require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tourl":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tourl = dback.tourl + 1;
          require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "bal":
      case "gold":
      case "money":
      case "balance":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.balance = dback.balance + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "buy":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.buy = dback.buy + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "dly":
      case "daily":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.daily = dback.daily + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "fish":
      case "pond":
      case "fishes":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.fish = dback.fish + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bet":
      case "gamble":
      case "betting":
      case "roulette":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.gamble = dback.gamble + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pay":
      case "loan":
      case "borrow":
      case "payment":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pay = dback.pay + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/pay")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "rob":
      case "thief":
      case "robbery":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.rob = dback.rob + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/rob")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bag":
      case "inv":
      case "loot":
      case "inventory":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.inv = dback.inv + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "mall":
      case "shop":
      case "store":
      case "shopping":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.store = dback.store + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "job":
      case "work":
      case "earn":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.work = dback.work + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "zoo":
      case "hunt":
      case "forest":
      case "animals":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.zoo = dback.zoo + 1;
          require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "image":
      case "gimage":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.image = dback.image + 1;
          require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "neko":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.neko = dback.neko + 1;
          require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pinterest":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pinterest = dback.pinterest + 1;
          require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "waifu":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.waifu = dback.waifu + 1;
          require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wallpaper":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wallpaper = dback.wallpaper + 1;
          require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "advice":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.advice = dback.advice + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "fact":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.fact = dback.fact + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "meme":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.meme = dback.meme + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "quote":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.quote = dback.quote + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "reddit":
      case "subreddit":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.joke = dback.joke + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "anime":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.anime = dback.anime + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "manga":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.manga = dback.manga + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "google":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.google = dback.google + 1;
          require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "demote":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.demote = dback.demote + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "group":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.group = dback.group + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "promote":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.promote = dback.promote + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "kick":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.kick = dback.kick + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "setdesc":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.setdesc = dback.setdesc + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "seticon":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.seticon = dback.seticon + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tagall":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tagall = dback.tagall + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "antilink":
      case "stoplink":
      case "nolink":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.antilink = dback.antilink + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bcg":
      case "bcgroup":
      case "broadcast":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.broadcast = dback.broadcast + 1;
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
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
