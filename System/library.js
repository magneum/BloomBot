("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  let gmeta = vcнaт.isGroup
    ? await νℓкуяє.groupMetadata(vcнaт.chat).catch((error) => {})
    : "";
  let groupName = vcнaт.isGroup ? gmeta.subject : "";
  let participants = vcнaт.isGroup ? await gmeta.participants : "";
  let groupAdmins = vcнaт.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = vcнaт.isGroup ? gmeta.owner : "";
  let isBotAdmin = vcнaт.isGroup
    ? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
    : false;
  let isAdmin = vcнaт.isGroup ? groupAdmins.includes(vcнaт.sender) : false;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  let isSudoWorker = sudotring.includes(
    vcнaт.sender.substring(0, vcнaт.sender.indexOf("@"))
  );
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  let vbody =
    vcнaт.mtype === "conversation"
      ? vcнaт.message.conversation
      : vcнaт.mtype == "imageMessage"
      ? vcнaт.message.imageMessage.caption
      : vcнaт.mtype == "videoMessage"
      ? vcнaт.message.videoMessage.caption
      : vcнaт.mtype == "extendedTextMessage"
      ? vcнaт.message.extendedTextMessage.text
      : vcнaт.mtype == "buttonsResponseMessage"
      ? vcнaт.message.buttonsResponseMessage.selectedButtonId
      : vcнaт.mtype == "listResponseMessage"
      ? vcнaт.message.listResponseMessage.singleSelectReply.selectedRowId
      : vcнaт.mtype == "templateButtonReplyMessage"
      ? vcнaт.message.templateButtonReplyMessage.selectedId
      : vcнaт.mtype === "messageContextInfo"
      ? vcнaт.message.buttonsResponseMessage?.selectedButtonId ||
        vcнaт.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        vcнaт.text
      : "";
  const vcommand = vbody
    .replace(νℓкуяє.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ νℓкуяє вσт ву mågneum ✕———————————————————————✕◎"
  );
  console.log(
    νℓкуяє.chalk.blueBright("🖊️COMMANDS: "),
    νℓкуяє.chalk.green(vcommand)
  );
  console.log(
    νℓкуяє.chalk.blueBright("🖊️MESSAGE: "),
    νℓкуяє.chalk.green(vbody)
  );
  console.log(
    νℓкуяє.chalk.blueBright("❣️USER_NAME: "),
    νℓкуяє.chalk.green(νℓкуяє.pushname)
  );
  console.log(
    νℓкуяє.chalk.blueBright("📱USER_NUMBER: "),
    νℓкуяє.chalk.green(vcнaт.sender)
  );
  console.log(
    νℓкуяє.chalk.blueBright("💬CHAT_ID: "),
    νℓкуяє.chalk.green(vcнaт.chat)
  );
  console.log(
    "◎✕———————————————————————✕ νℓкуяє вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.list = dback.list + 1;
        require("../Modular/help")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.dashboard = dback.dashboard + 1;
        require("../Modular/dashboard")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
        dback.ytaudio = dback.ytaudio + 1;
        require("../Modular/📥Downloader/ytaudio")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytv":
    case "watch":
    case "stream":
    case "ytmp4":
    case "video":
    case "ytwatch":
    case "ytvideo":
    case "youtubevideo":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytvideo = dback.ytvideo + 1;
        require("../Modular/📥Downloader/ytvideo")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bite = dback.bite + 1;
        require("../Modular/🐉Animation/bite")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blush":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.blush = dback.blush + 1;
        require("../Modular/🐉Animation/blush")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bonk":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bonk = dback.bonk + 1;
        require("../Modular/🐉Animation/bonk")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bored":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bored = dback.bored + 1;
        require("../Modular/🐉Animation/bored")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "confused":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.confused = dback.confused + 1;
        require("../Modular/🐉Animation/confused")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cry":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.cry = dback.cry + 1;
        require("../Modular/🐉Animation/cry")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cuddle":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.cuddle = dback.cuddle + 1;
        require("../Modular/🐉Animation/cuddle")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dance":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.dance = dback.dance + 1;
        require("../Modular/🐉Animation/dance")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "goodnight":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.goodnight = dback.goodnight + 1;
        require("../Modular/🐉Animation/goodnight")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "happy":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.happy = dback.happy + 1;
        require("../Modular/🐉Animation/happy")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "highfive":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.highfive = dback.highfive + 1;
        require("../Modular/🐉Animation/highfive")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hug":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.hug = dback.hug + 1;
        require("../Modular/🐉Animation/hug")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kill":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.kill = dback.kill + 1;
        require("../Modular/🐉Animation/kill")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kiss":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.kiss = dback.kiss + 1;
        require("../Modular/🐉Animation/kiss")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nervous":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nervous = dback.nervous + 1;
        require("../Modular/🐉Animation/nervous")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pat":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pat = dback.pat + 1;
        require("../Modular/🐉Animation/pat")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "poke":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.poke = dback.poke + 1;
        require("../Modular/🐉Animation/poke")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "punch":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.punch = dback.punch + 1;
        require("../Modular/🐉Animation/punch")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sad":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.sad = dback.sad + 1;
        require("../Modular/🐉Animation/sad")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scream":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.scream = dback.scream + 1;
        require("../Modular/🐉Animation/scream")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slap":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.slap = dback.slap + 1;
        require("../Modular/🐉Animation/slap")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "smile":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.smile = dback.smile + 1;
        require("../Modular/🐉Animation/smile")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "stare":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.stare = dback.stare + 1;
        require("../Modular/🐉Animation/stare")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wave":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.wave = dback.wave + 1;
        require("../Modular/🐉Animation/wave")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wink":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.wink = dback.wink + 1;
        require("../Modular/🐉Animation/wink")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yeet":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.yeet = dback.yeet + 1;
        require("../Modular/🐉Animation/yeet")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yes":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.yes = dback.yes + 1;
        require("../Modular/🐉Animation/yes")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "adultlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.adultlist = dback.adultlist + 1;
        require("../Modular/💗Commands/adultlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "animationlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.animationlist = dback.animationlist + 1;
        require("../Modular/💗Commands/animationlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.audiofilterlist = dback.audiofilterlist + 1;
        require("../Modular/💗Commands/audiofilterlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.conversionlist = dback.conversionlist + 1;
        require("../Modular/💗Commands/conversionlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.downloadlist = dback.downloadlist + 1;
        require("../Modular/💗Commands/downloadlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gameslist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.gameslist = dback.gameslist + 1;
        require("../Modular/💗Commands/gameslist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "grouplist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.grouplist = dback.grouplist + 1;
        require("../Modular/💗Commands/grouplist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hentailist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.hentailist = dback.hentailist + 1;
        require("../Modular/💗Commands/hentailist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ownerlist = dback.ownerlist + 1;
        require("../Modular/💗Commands/ownerlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "photolist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.photolist = dback.photolist + 1;
        require("../Modular/💗Commands/photolist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "searchlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.searchlist = dback.searchlist + 1;
        require("../Modular/💗Commands/searchlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytfilterlist = dback.ytfilterlist + 1;
        require("../Modular/💗Commands/ytfilterlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bassboost = dback.bassboost + 1;
        require("../Modular/📢aFilter/bassboost")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "echo":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.echo = dback.echo + 1;
        require("../Modular/📢aFilter/echo")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "flanger":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.flanger = dback.flanger + 1;
        require("../Modular/📢aFilter/flanger")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nightcore":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nightcore = dback.nightcore + 1;
        require("../Modular/📢aFilter/nightcore")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "phaser":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.phaser = dback.phaser + 1;
        require("../Modular/📢aFilter/phaser")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reverse":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.reverse = dback.reverse + 1;
        require("../Modular/📢aFilter/reverse")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slow":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.slow = dback.slow + 1;
        require("../Modular/📢aFilter/slow")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "speed":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.speed = dback.speed + 1;
        require("../Modular/📢aFilter/speed")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "subboost":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.subboost = dback.subboost + 1;
        require("../Modular/📢aFilter/subboost")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superslow":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.superslow = dback.superslow + 1;
        require("../Modular/📢aFilter/superslow")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superspeed":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.superspeed = dback.superspeed + 1;
        require("../Modular/📢aFilter/superspeed")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "surround":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.surround = dback.surround + 1;
        require("../Modular/📢aFilter/surround")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vaporwave = dback.vaporwave + 1;
        require("../Modular/📢aFilter/vaporwave")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vibrato":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.vibrato = dback.vibrato + 1;
        require("../Modular/📢aFilter/vibrato")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "panning":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.panning = dback.panning + 1;
        require("../Modular/📢aFilter/panning")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytbassboost = dback.ytbassboost + 1;
        require("../Modular/⭕YTFilter/ytbassboost")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytecho":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytecho = dback.ytecho + 1;
        require("../Modular/⭕YTFilter/ytecho")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytflanger = dback.ytflanger + 1;
        require("../Modular/⭕YTFilter/ytflanger")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytnightcore = dback.ytnightcore + 1;
        require("../Modular/⭕YTFilter/ytnightcore")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytphaser = dback.ytphaser + 1;
        require("../Modular/⭕YTFilter/ytphaser")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytreverse = dback.ytreverse + 1;
        require("../Modular/⭕YTFilter/ytreverse")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytslow":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytslow = dback.ytslow + 1;
        require("../Modular/⭕YTFilter/ytslow")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytspeed = dback.ytspeed + 1;
        require("../Modular/⭕YTFilter/ytspeed")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsubboost = dback.ytsubboost + 1;
        require("../Modular/⭕YTFilter/ytsubboost")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsuperslow = dback.ytsuperslow + 1;
        require("../Modular/⭕YTFilter/ytsuperslow")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsuperspeed = dback.ytsuperspeed + 1;
        require("../Modular/⭕YTFilter/ytsuperspeed")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsurround = dback.ytsurround + 1;
        require("../Modular/⭕YTFilter/ytsurround")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytvaporwave = dback.ytvaporwave + 1;
        require("../Modular/⭕YTFilter/ytvaporwave")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytvibrato = dback.ytvibrato + 1;
        require("../Modular/⭕YTFilter/ytvibrato")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytpanning = dback.ytpanning + 1;
        require("../Modular/⭕YTFilter/ytpanning")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.sticker = dback.sticker + 1;
        require("../Modular/📼Conversion/sticker")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.tinyurl = dback.tinyurl + 1;
        require("../Modular/📼Conversion/tinyurl")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "toimg":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.toimg = dback.toimg + 1;
        require("../Modular/📼Conversion/toimg")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tourl":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.tourl = dback.tourl + 1;
        require("../Modular/📼Conversion/tourl")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "carbon":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.carbon = dback.carbon + 1;
        require("../Modular/📼Conversion/carbon")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ship":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ship = dback.ship + 1;
        require("../Modular/📼Conversion/ship")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.tts = dback.tts + 1;
        require("../Modular/📼Conversion/tts")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.balance = dback.balance + 1;
        require("../Modular/💰Games/balance")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "buy":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.buy = dback.buy + 1;
        require("../Modular/💰Games/buy")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.daily = dback.daily + 1;
        require("../Modular/💰Games/daily")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.fish = dback.fish + 1;
        require("../Modular/💰Games/fish")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.gamble = dback.gamble + 1;
        require("../Modular/💰Games/gamble")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pay = dback.pay + 1;
        require("../Modular/💰Games/pay")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.rob = dback.rob + 1;
        require("../Modular/💰Games/rob")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.inv = dback.inv + 1;
        require("../Modular/💰Games/inv")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.store = dback.store + 1;
        require("../Modular/💰Games/store")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.work = dback.work + 1;
        require("../Modular/💰Games/work")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.zoo = dback.zoo + 1;
        require("../Modular/💰Games/zoo")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "gimage":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.image = dback.image + 1;
        require("../Modular/🖼️Photogenic/image")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "neko":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.neko = dback.neko + 1;
        require("../Modular/🖼️Photogenic/neko")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pinterest":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pinterest = dback.pinterest + 1;
        require("../Modular/🖼️Photogenic/pinterest")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "waifu":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.waifu = dback.waifu + 1;
        require("../Modular/🖼️Photogenic/waifu")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.wallpaper = dback.wallpaper + 1;
        require("../Modular/🖼️Photogenic/wallpaper")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.advice = dback.advice + 1;
        require("../Modular/🔎Searches/advice")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fact":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.fact = dback.fact + 1;
        require("../Modular/🔎Searches/fact")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "meme":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.meme = dback.meme + 1;
        require("../Modular/🔎Searches/meme")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "quote":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.quote = dback.quote + 1;
        require("../Modular/🔎Searches/quote")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.joke = dback.joke + 1;
        require("../Modular/🔎Searches/joke")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "anime":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.anime = dback.anime + 1;
        require("../Modular/🔎Searches/anime")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "manga":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.manga = dback.manga + 1;
        require("../Modular/🔎Searches/manga")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "google":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.google = dback.google + 1;
        require("../Modular/🔎Searches/google")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "chordlist":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.chordlist = dback.chordlist + 1;
        require("../Modular/🔎Searches/chordlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "getChord":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.getChord = dback.getChord + 1;
        require("../Modular/🔎Searches/getChord")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pokedex":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pokedex = dback.pokedex + 1;
        require("../Modular/🔎Searches/pokedex")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gify":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.gify = dback.gify + 1;
        require("../Modular/🔎Searches/gify")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "lyrics":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.lyrics = dback.lyrics + 1;
        require("../Modular/🔎Searches/lyrics")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ytsearch = dback.ytsearch + 1;
        require("../Modular/🔎Searches/ytsearch")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "instagram":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.instagram = dback.instagram + 1;
        require("../Modular/🔎Searches/instagram")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.ass = dback.ass + 1;
        require("../Modular/🍑Hentai/ass")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bdsm":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bdsm = dback.bdsm + 1;
        require("../Modular/🍑Hentai/bdsm")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blowjob":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.blowjob = dback.blowjob + 1;
        require("../Modular/🍑Hentai/blowjob")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.cum = dback.cum + 1;
        require("../Modular/🍑Hentai/cum")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "doujin":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.doujin = dback.doujin + 1;
        require("../Modular/🍑Hentai/doujin")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "feet":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.feet = dback.feet + 1;
        require("../Modular/🍑Hentai/feet")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "femdom":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.femdom = dback.femdom + 1;
        require("../Modular/🍑Hentai/femdom")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.foxgirl = dback.foxgirl + 1;
        require("../Modular/🍑Hentai/foxgirl")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "glasses":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.glasses = dback.glasses + 1;
        require("../Modular/🍑Hentai/glasses")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hentai":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.hentai = dback.hentai + 1;
        require("../Modular/🍑Hentai/hentai")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "maid":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.maid = dback.maid + 1;
        require("../Modular/🍑Hentai/maid")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "masturbation":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.masturbation = dback.masturbation + 1;
        require("../Modular/🍑Hentai/masturbation")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "netorare":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.netorare = dback.netorare + 1;
        require("../Modular/🍑Hentai/netorare")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "orgy":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.orgy = dback.orgy + 1;
        require("../Modular/🍑Hentai/orgy")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "panties":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.panties = dback.panties + 1;
        require("../Modular/🍑Hentai/panties")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pussy = dback.pussy + 1;
        require("../Modular/🍑Hentai/pussy")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "school":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.school = dback.school + 1;
        require("../Modular/🍑Hentai/school")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "succubus":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.succubus = dback.succubus + 1;
        require("../Modular/🍑Hentai/succubus")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tentacles":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.tentacles = dback.tentacles + 1;
        require("../Modular/🍑Hentai/tentacles")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "thighs":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.thighs = dback.thighs + 1;
        require("../Modular/🍑Hentai/thighs")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.uglyBastard = dback.uglyBastard + 1;
        require("../Modular/🍑Hentai/uglyBastard")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uniform":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.uniform = dback.uniform + 1;
        require("../Modular/🍑Hentai/uniform")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yuri":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.yuri = dback.yuri + 1;
        require("../Modular/🍑Hentai/yuri")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.zettaiRyouiki = dback.zettaiRyouiki + 1;
        require("../Modular/🍑Hentai/zettaiRyouiki")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.p4k = dback.p4k + 1;
        require("../Modular/👅Adult/4k")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bimbofetish = dback.bimbofetish + 1;
        require("../Modular/👅Adult/bimbofetish")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.blowjobs = dback.blowjobs + 1;
        require("../Modular/👅Adult/blowjobs")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.bonermaterial = dback.bonermaterial + 1;
        require("../Modular/👅Adult/bonermaterial")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.breedingmaterial = dback.breedingmaterial + 1;
        require("../Modular/👅Adult/breedingmaterial")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "canthold":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.canthold = dback.canthold + 1;
        require("../Modular/👅Adult/canthold")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.christiangirls = dback.christiangirls + 1;
        require("../Modular/👅Adult/christiangirls")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.cum = dback.cum + 1;
        require("../Modular/👅Adult/cum")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cumslut":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.cumslut = dback.cumslut + 1;
        require("../Modular/👅Adult/cumslut")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.dirtygaming = dback.dirtygaming + 1;
        require("../Modular/👅Adult/dirtygaming")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "distension":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.distension = dback.distension + 1;
        require("../Modular/👅Adult/distension")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.exxxtras = dback.exxxtras + 1;
        require("../Modular/👅Adult/exxxtras")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "femalepov":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.femalepov = dback.femalepov + 1;
        require("../Modular/👅Adult/femalepov")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.gifsofremoval = dback.gifsofremoval + 1;
        require("../Modular/👅Adult/gifsofremoval")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.hotstuffnsfw = dback.hotstuffnsfw + 1;
        require("../Modular/👅Adult/hotstuffnsfw")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.iwanttofuckher = dback.iwanttofuckher + 1;
        require("../Modular/👅Adult/iwanttofuckher")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.justhotwomen = dback.justhotwomen + 1;
        require("../Modular/👅Adult/justhotwomen")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "lactating":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.lactating = dback.lactating + 1;
        require("../Modular/👅Adult/lactating")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milf":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.milf = dback.milf + 1;
        require("../Modular/👅Adult/milf")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milk":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.milk = dback.milk + 1;
        require("../Modular/👅Adult/milk")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milking":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.milking = dback.milking + 1;
        require("../Modular/👅Adult/milking")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nostalgiafapping = dback.nostalgiafapping + 1;
        require("../Modular/👅Adult/nostalgiafapping")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nsfw = dback.nsfw + 1;
        require("../Modular/👅Adult/nsfw")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nsfw2 = dback.nsfw2 + 1;
        require("../Modular/👅Adult/nsfw2")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nsfw411 = dback.nsfw411 + 1;
        require("../Modular/👅Adult/nsfw411")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nudes":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.nudes = dback.nudes + 1;
        require("../Modular/👅Adult/nudes")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.omgbeckylookathiscock = dback.omgbeckylookathiscock + 1;
        require("../Modular/👅Adult/omgbeckylookathiscock")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pslut":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pslut = dback.pslut + 1;
        require("../Modular/👅Adult/pslut")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.pussy = dback.pussy + 1;
        require("../Modular/👅Adult/pussy")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "realgirls":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.realgirls = dback.realgirls + 1;
        require("../Modular/👅Adult/realgirls")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.sexybutnotporn = dback.sexybutnotporn + 1;
        require("../Modular/👅Adult/sexybutnotporn")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.sexygirls = dback.sexygirls + 1;
        require("../Modular/👅Adult/sexygirls")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slut":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.slut = dback.slut + 1;
        require("../Modular/👅Adult/slut")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.stripgirls = dback.stripgirls + 1;
        require("../Modular/👅Adult/stripgirls")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.toocuteforporn = dback.toocuteforporn + 1;
        require("../Modular/👅Adult/toocuteforporn")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "truefmk":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.truefmk = dback.truefmk + 1;
        require("../Modular/👅Adult/truefmk")(νℓкуяє, vcнaт, update, store);
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(νℓкуяє, vcнaт, (dback) => {
        dback.uncommonposes = dback.uncommonposes + 1;
        require("../Modular/👅Adult/uncommonposes")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker
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
          participants,
          isSudoWorker,
          isSudoWorker
        );
        dback.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await νℓкуяє.imgB(
        νℓкуяє,
        vcнaт,
        `*😥Sorry:* @${νℓкуяє.Tname}
*❌Error* 
> _No Such Command Found_
> Visit To Know Commands: _bit.ly/magneum_`,
        "./Gallery/KryPage.jpg"
      );
      break;
  }
};
