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
      case "youtube":
      case "youtubemusic":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.youtube = dback.youtube + 1;
          require("../Modular/📥Downloader/youtube")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "bite":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bite = dback.bite + 1;
          require("../Modular/🐉Animation/bite")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "blush":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.blush = dback.blush + 1;
          require("../Modular/🐉Animation/blush")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bonk":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bonk = dback.bonk + 1;
          require("../Modular/🐉Animation/bonk")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bored":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bored = dback.bored + 1;
          require("../Modular/🐉Animation/bored")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "confused":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.confused = dback.confused + 1;
          require("../Modular/🐉Animation/confused")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "cry":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.cry = dback.cry + 1;
          require("../Modular/🐉Animation/cry")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "cuddle":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.cuddle = dback.cuddle + 1;
          require("../Modular/🐉Animation/cuddle")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "dance":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.dance = dback.dance + 1;
          require("../Modular/🐉Animation/dance")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "goodnight":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.goodnight = dback.goodnight + 1;
          require("../Modular/🐉Animation/goodnight")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "happy":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.happy = dback.happy + 1;
          require("../Modular/🐉Animation/happy")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "highfive":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.highfive = dback.highfive + 1;
          require("../Modular/🐉Animation/highfive")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "hug":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.hug = dback.hug + 1;
          require("../Modular/🐉Animation/hug")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "kill":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.kill = dback.kill + 1;
          require("../Modular/🐉Animation/kill")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "kiss":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.kiss = dback.kiss + 1;
          require("../Modular/🐉Animation/kiss")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "nervous":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.nervous = dback.nervous + 1;
          require("../Modular/🐉Animation/nervous")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pat":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pat = dback.pat + 1;
          require("../Modular/🐉Animation/pat")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "poke":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.poke = dback.poke + 1;
          require("../Modular/🐉Animation/poke")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "punch":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.punch = dback.punch + 1;
          require("../Modular/🐉Animation/punch")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "sad":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.sad = dback.sad + 1;
          require("../Modular/🐉Animation/sad")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "scream":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.scream = dback.scream + 1;
          require("../Modular/🐉Animation/scream")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "slap":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.slap = dback.slap + 1;
          require("../Modular/🐉Animation/slap")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "smile":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.smile = dback.smile + 1;
          require("../Modular/🐉Animation/smile")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "stare":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.stare = dback.stare + 1;
          require("../Modular/🐉Animation/stare")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wave = dback.wave + 1;
          require("../Modular/🐉Animation/wave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wink":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wink = dback.wink + 1;
          require("../Modular/🐉Animation/wink")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "yeet":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.yeet = dback.yeet + 1;
          require("../Modular/🐉Animation/yeet")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "yes":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.yes = dback.yes + 1;
          require("../Modular/🐉Animation/yes")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "h.anime":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._anime = dback._anime + 1;
          require("../Modular/💗Commands/h.anime")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.download":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._download = dback._download + 1;
          require("../Modular/💗Commands/h.download")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.filter":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._filter = dback._filter + 1;
          require("../Modular/💗Commands/h.filter")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.game":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._game = dback._game + 1;
          require("../Modular/💗Commands/h.game")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.group":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._group = dback._group + 1;
          require("../Modular/💗Commands/h.group")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      // case "h.hentai":
      // require("../Bin/h.hentai")(νℓкуяє, vcнaт);
      // require("./dboard")(νℓкуяє, vcнaт, (dback) => {
      // dback.vlkyre = dback.vlkyre + 1;
      // require("../Modular/vlkyre")(νℓкуяє, vcнaт);
      // dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      // });
      // break;
      case "h.image":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._image = dback._image + 1;
          require("../Modular/💗Commands/h.image")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.search":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._search = dback._search + 1;
          require("../Modular/💗Commands/h.search")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "h.ytfilter":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback._ytfilter = dback._ytfilter + 1;
          require("../Modular/💗Commands/h.ytfilter")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "bassboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.bassboost = dback.bassboost + 1;
          require("../Modular/📢aFilter/bassboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "echo":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.echo = dback.echo + 1;
          require("../Modular/📢aFilter/echo")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "flanger":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.flanger = dback.flanger + 1;
          require("../Modular/📢aFilter/flanger")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "nightcore":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.nightcore = dback.nightcore + 1;
          require("../Modular/📢aFilter/nightcore")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "phaser":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.phaser = dback.phaser + 1;
          require("../Modular/📢aFilter/phaser")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "reverse":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.reverse = dback.reverse + 1;
          require("../Modular/📢aFilter/reverse")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "slow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.slow = dback.slow + 1;
          require("../Modular/📢aFilter/slow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "speed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.speed = dback.speed + 1;
          require("../Modular/📢aFilter/speed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "subboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.subboost = dback.subboost + 1;
          require("../Modular/📢aFilter/subboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "superslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.superslow = dback.superslow + 1;
          require("../Modular/📢aFilter/superslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "superspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.superspeed = dback.superspeed + 1;
          require("../Modular/📢aFilter/superspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "surround":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.surround = dback.surround + 1;
          require("../Modular/📢aFilter/surround")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "vaporwave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.vaporwave = dback.vaporwave + 1;
          require("../Modular/📢aFilter/vaporwave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "vibrato":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.vibrato = dback.vibrato + 1;
          require("../Modular/📢aFilter/vibrato")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "ytbassboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytbassboost = dback.ytbassboost + 1;
          require("../Modular/⭕YTFilter/ytbassboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytecho":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytecho = dback.ytecho + 1;
          require("../Modular/⭕YTFilter/ytecho")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytflanger":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytflanger = dback.ytflanger + 1;
          require("../Modular/⭕YTFilter/ytflanger")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytnightcore":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytnightcore = dback.ytnightcore + 1;
          require("../Modular/⭕YTFilter/ytnightcore")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytphaser":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytphaser = dback.ytphaser + 1;
          require("../Modular/⭕YTFilter/ytphaser")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytreverse":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytreverse = dback.ytreverse + 1;
          require("../Modular/⭕YTFilter/ytreverse")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytslow = dback.ytslow + 1;
          require("../Modular/⭕YTFilter/ytslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytspeed = dback.ytspeed + 1;
          require("../Modular/⭕YTFilter/ytspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsubboost":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsubboost = dback.ytsubboost + 1;
          require("../Modular/⭕YTFilter/ytsubboost")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsuperslow":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsuperslow = dback.ytsuperslow + 1;
          require("../Modular/⭕YTFilter/ytsuperslow")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsuperspeed":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsuperspeed = dback.ytsuperspeed + 1;
          require("../Modular/⭕YTFilter/ytsuperspeed")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsurround":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsurround = dback.ytsurround + 1;
          require("../Modular/⭕YTFilter/ytsurround")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytvaporwave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytvaporwave = dback.ytvaporwave + 1;
          require("../Modular/⭕YTFilter/ytvaporwave")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytvibrato":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytvibrato = dback.ytvibrato + 1;
          require("../Modular/⭕YTFilter/ytvibrato")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "sticker":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.sticker = dback.sticker + 1;
          require("../Modular/📼Conversion/sticker")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tinyurl":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tinyurl = dback.tinyurl + 1;
          require("../Modular/📼Conversion/tinyurl")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "toimg":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.toimg = dback.toimg + 1;
          require("../Modular/📼Conversion/toimg")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tourl":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tourl = dback.tourl + 1;
          require("../Modular/📼Conversion/tourl")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "carbon":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.carbon = dback.carbon + 1;
          require("../Modular/📼Conversion/carbon")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ship":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ship = dback.ship + 1;
          require("../Modular/📼Conversion/ship")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tts":
      case "talktospeech":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tts = dback.tts + 1;
          require("../Modular/📼Conversion/tts")(νℓкуяє, vcнaт);
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
          require("../Modular/💰Games/balance")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "buy":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.buy = dback.buy + 1;
          require("../Modular/💰Games/buy")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "dly":
      case "daily":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.daily = dback.daily + 1;
          require("../Modular/💰Games/daily")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "fish":
      case "pond":
      case "fishes":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.fish = dback.fish + 1;
          require("../Modular/💰Games/fish")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bet":
      case "gamble":
      case "betting":
      case "roulette":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.gamble = dback.gamble + 1;
          require("../Modular/💰Games/gamble")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pay":
      case "loan":
      case "borrow":
      case "payment":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pay = dback.pay + 1;
          require("../Modular/💰Games/pay")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "rob":
      case "thief":
      case "robbery":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.rob = dback.rob + 1;
          require("../Modular/💰Games/rob")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "bag":
      case "inv":
      case "loot":
      case "inventory":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.inv = dback.inv + 1;
          require("../Modular/💰Games/inv")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "mall":
      case "shop":
      case "store":
      case "shopping":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.store = dback.store + 1;
          require("../Modular/💰Games/store")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "job":
      case "work":
      case "earn":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.work = dback.work + 1;
          require("../Modular/💰Games/work")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "zoo":
      case "hunt":
      case "forest":
      case "animals":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.zoo = dback.zoo + 1;
          require("../Modular/💰Games/zoo")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "image":
      case "gimage":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.image = dback.image + 1;
          require("../Modular/🖼️Photogenic/image")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "neko":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.neko = dback.neko + 1;
          require("../Modular/🖼️Photogenic/neko")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pinterest":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pinterest = dback.pinterest + 1;
          require("../Modular/🖼️Photogenic/pinterest")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "waifu":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.waifu = dback.waifu + 1;
          require("../Modular/🖼️Photogenic/waifu")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "wallpaper":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.wallpaper = dback.wallpaper + 1;
          require("../Modular/🖼️Photogenic/wallpaper")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "advice":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.advice = dback.advice + 1;
          require("../Modular/🔎Searches/advice")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "fact":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.fact = dback.fact + 1;
          require("../Modular/🔎Searches/fact")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "meme":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.meme = dback.meme + 1;
          require("../Modular/🔎Searches/meme")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "quote":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.quote = dback.quote + 1;
          require("../Modular/🔎Searches/quote")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "reddit":
      case "subreddit":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.joke = dback.joke + 1;
          require("../Modular/🔎Searches/joke")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "anime":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.anime = dback.anime + 1;
          require("../Modular/🔎Searches/anime")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "manga":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.manga = dback.manga + 1;
          require("../Modular/🔎Searches/manga")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "google":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.google = dback.google + 1;
          require("../Modular/🔎Searches/google")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "chordlist":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.chordlist = dback.chordlist + 1;
          require("../Modular/🔎Searches/chordlist")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "getChord":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.getChord = dback.getChord + 1;
          require("../Modular/🔎Searches/getChord")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pokedex":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pokedex = dback.pokedex + 1;
          require("../Modular/🔎Searches/pokedex")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "gify":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.gify = dback.gify + 1;
          require("../Modular/🔎Searches/gify")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "lyrics":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.lyrics = dback.lyrics + 1;
          require("../Modular/🔎Searches/lyrics")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ytsearch":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ytsearch = dback.ytsearch + 1;
          require("../Modular/🔎Searches/ytsearch")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "instagram":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.instagram = dback.instagram + 1;
          require("../Modular/🔎Searches/instagram")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "demote":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.demote = dback.demote + 1;
          require("../Modular/🔰Group/demote")(
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
          require("../Modular/🔰Group/group")(
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
          require("../Modular/🔰Group/promote")(
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
          require("../Modular/🔰Group/kick")(
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
          require("../Modular/🔰Group/setdesc")(
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
          require("../Modular/🔰Group/seticon")(
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
          require("../Modular/🔰Group/tagall")(
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
          require("../Modular/🔰Group/antilink")(
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
      case "p4k":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.p4k = dback.p4k + 1;
          require("../Modular/👅Adult/p4k")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pblowjob":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pblowjob = dback.pblowjob + 1;
          require("../Modular/👅Adult/pblowjob")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pmilf":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pmilf = dback.pmilf + 1;
          require("../Modular/👅Adult/pmilf")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pmilk":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pmilk = dback.pmilk + 1;
          require("../Modular/👅Adult/pmilk")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "ppussy":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ppussy = dback.ppussy + 1;
          require("../Modular/👅Adult/ppussy")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "pslut":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.pslut = dback.pslut + 1;
          require("../Modular/👅Adult/pslut")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
      case "tikporn":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.tikporn = dback.tikporn + 1;
          require("../Modular/👅Adult/tikporn")(νℓкуяє, vcнaт);
          dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        });
        break;
        "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
      case "ban":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.ban = dback.ban + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/ban")(
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
      case "bcgroup":
      case "broadcast":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.broadcast = dback.broadcast + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/broadcast")(
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
      case "join":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.join = dback.join + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/join")(
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
      case "leave":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.leave = dback.leave + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/leave")(
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
      case "reboot":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.reboot = dback.reboot + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/reboot")(
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
      case "rules":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.rules = dback.rules + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/rules")(
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
      case "unban":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.unban = dback.unban + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/unban")(
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
      case "verify":
        require("./dboard")(νℓкуяє, vcнaт, (dback) => {
          dback.verify = dback.verify + 1;
          require("../Modular/🍁ᴏᴡɴᴇʀ/verify")(
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
          `*😥Sorry:* @${νℓкуяє.Tname}
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
