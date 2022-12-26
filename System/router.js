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
  switch (νℓкуяє.command) {
    case "vlkyre":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "help":
    case "menu":
    case "command":
    case "dashboard":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.help = dback.help + 1;
        require("../Modular/help")(νℓкуяє, vcнaт);
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blush":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bonk":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bored":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "confused":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cry":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cuddle":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dance":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "goodnight":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "happy":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "highfive":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hug":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kill":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kiss":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nervous":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pat":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "poke":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "punch":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sad":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scream":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slap":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "smile":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "stare":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wave":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wink":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yeet":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yes":
      require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "h.anime":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.download":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.filter":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.game":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.group":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.hentai":
      require("../Bin/_hentai")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.image":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.search":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "h.ytfilter":
      require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(νℓкуяє, vcнaт);
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vlkyre = dback.vlkyre + 1;
        require("../Modular/vlkyre")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bassboost = dback.bassboost + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "echo":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.echo = dback.echo + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "flanger":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.flanger = dback.flanger + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nightcore":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nightcore = dback.nightcore + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "phaser":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.phaser = dback.phaser + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reverse":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.reverse = dback.reverse + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slow":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.slow = dback.slow + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "speed":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.speed = dback.speed + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "subboost":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.subboost = dback.subboost + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superslow":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.superslow = dback.superslow + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superspeed":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.superspeed = dback.superspeed + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "surround":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.surround = dback.surround + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vaporwave":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vaporwave = dback.vaporwave + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vibrato":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vibrato = dback.vibrato + 1;
        require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytbassboost = dback.ytbassboost + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytecho":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytecho = dback.ytecho + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytflanger":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytflanger = dback.ytflanger + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytnightcore":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytnightcore = dback.ytnightcore + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytphaser":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytphaser = dback.ytphaser + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytreverse":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytreverse = dback.ytreverse + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytslow":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytslow = dback.ytslow + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytspeed":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytspeed = dback.ytspeed + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsubboost":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsubboost = dback.ytsubboost + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperslow":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsuperslow = dback.ytsuperslow + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperspeed":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsuperspeed = dback.ytsuperspeed + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsurround":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsurround = dback.ytsurround + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvaporwave":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytvaporwave = dback.ytvaporwave + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvibrato":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytvibrato = dback.ytvibrato + 1;
        require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "s":
    case "sgif":
    case "sticker":
    case "stickergif":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.sticker = dback.sticker + 1;
        require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tinyurl":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.tinyurl = dback.tinyurl + 1;
        require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "toimg":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.toimg = dback.toimg + 1;
        require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tourl":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.balance = dback.balance + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "buy":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.buy = dback.buy + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dly":
    case "daily":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.daily = dback.daily + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.fish = dback.fish + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.gamble = dback.gamble + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pay = dback.pay + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/pay")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.rob = dback.rob + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/rob")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.inv = dback.inv + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.store = dback.store + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.work = dback.work + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "zoo":
    case "forest":
    case "animals":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.zoo = dback.zoo + 1;
        require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "gimage":
    case "image":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.image = dback.image + 1;
        require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "neko":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.neko = dback.neko + 1;
        require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pin":
    case "pinterest":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pinterest = dback.pinterest + 1;
        require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "waifu":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.waifu = dback.waifu + 1;
        require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wallpaper":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.wallpaper = dback.wallpaper + 1;
        require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.advice = dback.advice + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fact":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.fact = dback.fact + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "meme":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.meme = dback.meme + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "quote":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.quote = dback.quote + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sr":
    case "reddit":
    case "subreddit":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.joke = dback.joke + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "anime":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.anime = dback.anime + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "manga":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.manga = dback.manga + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "google":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.google = dback.google + 1;
        require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(νℓкуяє, vcнaт);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
      require("../Enforcers/dboard")(νℓкуяє, vcнaт, (dback) => {
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
