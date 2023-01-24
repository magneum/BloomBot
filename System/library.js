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
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.list = updatedb.list + 1;
        require("../Modular/help")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../Modular/dashboard")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
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
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../Modular/📥Downloader/ytaudio")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
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
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytvideo = updatedb.ytvideo + 1;
        require("../Modular/📥Downloader/ytvideo")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bite = updatedb.bite + 1;
        require("../Modular/🐉Animation/bite")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blush":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.blush = updatedb.blush + 1;
        require("../Modular/🐉Animation/blush")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bonk":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bonk = updatedb.bonk + 1;
        require("../Modular/🐉Animation/bonk")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bored":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bored = updatedb.bored + 1;
        require("../Modular/🐉Animation/bored")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "confused":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.confused = updatedb.confused + 1;
        require("../Modular/🐉Animation/confused")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cry":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.cry = updatedb.cry + 1;
        require("../Modular/🐉Animation/cry")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cuddle":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../Modular/🐉Animation/cuddle")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dance":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.dance = updatedb.dance + 1;
        require("../Modular/🐉Animation/dance")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "goodnight":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../Modular/🐉Animation/goodnight")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "happy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.happy = updatedb.happy + 1;
        require("../Modular/🐉Animation/happy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "highfive":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.highfive = updatedb.highfive + 1;
        require("../Modular/🐉Animation/highfive")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hug":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.hug = updatedb.hug + 1;
        require("../Modular/🐉Animation/hug")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kill":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.kill = updatedb.kill + 1;
        require("../Modular/🐉Animation/kill")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kiss":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.kiss = updatedb.kiss + 1;
        require("../Modular/🐉Animation/kiss")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nervous":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nervous = updatedb.nervous + 1;
        require("../Modular/🐉Animation/nervous")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pat":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pat = updatedb.pat + 1;
        require("../Modular/🐉Animation/pat")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "poke":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.poke = updatedb.poke + 1;
        require("../Modular/🐉Animation/poke")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "punch":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.punch = updatedb.punch + 1;
        require("../Modular/🐉Animation/punch")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sad":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sad = updatedb.sad + 1;
        require("../Modular/🐉Animation/sad")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scream":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.scream = updatedb.scream + 1;
        require("../Modular/🐉Animation/scream")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slap":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.slap = updatedb.slap + 1;
        require("../Modular/🐉Animation/slap")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "smile":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.smile = updatedb.smile + 1;
        require("../Modular/🐉Animation/smile")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "stare":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.stare = updatedb.stare + 1;
        require("../Modular/🐉Animation/stare")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wave":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.wave = updatedb.wave + 1;
        require("../Modular/🐉Animation/wave")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wink":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.wink = updatedb.wink + 1;
        require("../Modular/🐉Animation/wink")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yeet":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.yeet = updatedb.yeet + 1;
        require("../Modular/🐉Animation/yeet")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yes":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.yes = updatedb.yes + 1;
        require("../Modular/🐉Animation/yes")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../Modular/💗Commands/nsfwlist")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../Modular/💗Commands/sfwlist")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "animationlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../Modular/💗Commands/animationlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../Modular/💗Commands/audiofilterlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../Modular/💗Commands/conversionlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../Modular/💗Commands/downloadlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gameslist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../Modular/💗Commands/gameslist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "grouplist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../Modular/💗Commands/grouplist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hentailist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../Modular/💗Commands/hentailist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../Modular/💗Commands/ownerlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "photolist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.photolist = updatedb.photolist + 1;
        require("../Modular/💗Commands/photolist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "searchlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../Modular/💗Commands/searchlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../Modular/💗Commands/ytfilterlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../Modular/📢aFilter/bassboost")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "echo":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.echo = updatedb.echo + 1;
        require("../Modular/📢aFilter/echo")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "flanger":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.flanger = updatedb.flanger + 1;
        require("../Modular/📢aFilter/flanger")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nightcore":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../Modular/📢aFilter/nightcore")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "phaser":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.phaser = updatedb.phaser + 1;
        require("../Modular/📢aFilter/phaser")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reverse":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.reverse = updatedb.reverse + 1;
        require("../Modular/📢aFilter/reverse")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slow":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.slow = updatedb.slow + 1;
        require("../Modular/📢aFilter/slow")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "speed":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.speed = updatedb.speed + 1;
        require("../Modular/📢aFilter/speed")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "subboost":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.subboost = updatedb.subboost + 1;
        require("../Modular/📢aFilter/subboost")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superslow":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.superslow = updatedb.superslow + 1;
        require("../Modular/📢aFilter/superslow")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "superspeed":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../Modular/📢aFilter/superspeed")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "surround":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.surround = updatedb.surround + 1;
        require("../Modular/📢aFilter/surround")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../Modular/📢aFilter/vaporwave")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "vibrato":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../Modular/📢aFilter/vibrato")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "panning":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.panning = updatedb.panning + 1;
        require("../Modular/📢aFilter/panning")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../Modular/⭕YTFilter/ytbassboost")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytecho":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../Modular/⭕YTFilter/ytecho")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../Modular/⭕YTFilter/ytflanger")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../Modular/⭕YTFilter/ytnightcore")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../Modular/⭕YTFilter/ytphaser")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../Modular/⭕YTFilter/ytreverse")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytslow":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../Modular/⭕YTFilter/ytslow")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../Modular/⭕YTFilter/ytspeed")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../Modular/⭕YTFilter/ytsubboost")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../Modular/⭕YTFilter/ytsuperslow")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../Modular/⭕YTFilter/ytsuperspeed")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../Modular/⭕YTFilter/ytsurround")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../Modular/⭕YTFilter/ytvaporwave")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../Modular/⭕YTFilter/ytvibrato")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../Modular/⭕YTFilter/ytpanning")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../Modular/🦄SFW/swaifu")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sneko = updatedb.sneko + 1;
        require("../Modular/🦄SFW/sneko")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../Modular/🦄SFW/sshinobu")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../Modular/🦄SFW/smegumin")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../Modular/🦄SFW/sawoo")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../Modular/🦄SFW/sglomp")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../Modular/🦄SFW/shandhold")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;

    case "sbite":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sbite = updatedb.sbite + 1;
        require("../Modular/🦄SFW/sbite")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sblush":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sblush = updatedb.sblush + 1;
        require("../Modular/🦄SFW/sblush")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sbonk":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../Modular/🦄SFW/sbonk")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sbully":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sbully = updatedb.sbully + 1;
        require("../Modular/🦄SFW/sbully")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scringe":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.scringe = updatedb.scringe + 1;
        require("../Modular/🦄SFW/scringe")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scry":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.scry = updatedb.scry + 1;
        require("../Modular/🦄SFW/scry")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "scuddle":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../Modular/🦄SFW/scuddle")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sdance":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sdance = updatedb.sdance + 1;
        require("../Modular/🦄SFW/sdance")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "shappy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.shappy = updatedb.shappy + 1;
        require("../Modular/🦄SFW/shappy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "shighfive":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../Modular/🦄SFW/shighfive")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "shug":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.shug = updatedb.shug + 1;
        require("../Modular/🦄SFW/shug")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "skick":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.skick = updatedb.skick + 1;
        require("../Modular/🦄SFW/skick")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "skill":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.skill = updatedb.skill + 1;
        require("../Modular/🦄SFW/skill")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "skiss":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.skiss = updatedb.skiss + 1;
        require("../Modular/🦄SFW/skiss")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slick":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.slick = updatedb.slick + 1;
        require("../Modular/🦄SFW/slick")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "snom":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.snom = updatedb.snom + 1;
        require("../Modular/🦄SFW/snom")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "spat":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.spat = updatedb.spat + 1;
        require("../Modular/🦄SFW/spat")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "spoke":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.spoke = updatedb.spoke + 1;
        require("../Modular/🦄SFW/spoke")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sslap":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sslap = updatedb.sslap + 1;
        require("../Modular/🦄SFW/sslap")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ssmile":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../Modular/🦄SFW/ssmile")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ssmug":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../Modular/🦄SFW/ssmug")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "swave":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.swave = updatedb.swave + 1;
        require("../Modular/🦄SFW/swave")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "swink":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.swink = updatedb.swink + 1;
        require("../Modular/🦄SFW/swink")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "syeet":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.syeet = updatedb.syeet + 1;
        require("../Modular/🦄SFW/syeet")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sticker = updatedb.sticker + 1;
        require("../Modular/📼Conversion/sticker")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../Modular/📼Conversion/tinyurl")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "toimg":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.toimg = updatedb.toimg + 1;
        require("../Modular/📼Conversion/toimg")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tourl":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.tourl = updatedb.tourl + 1;
        require("../Modular/📼Conversion/tourl")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "carbon":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.carbon = updatedb.carbon + 1;
        require("../Modular/📼Conversion/carbon")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ship":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ship = updatedb.ship + 1;
        require("../Modular/📼Conversion/ship")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.tts = updatedb.tts + 1;
        require("../Modular/📼Conversion/tts")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.balance = updatedb.balance + 1;
        require("../Modular/💰Games/balance")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "buy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.buy = updatedb.buy + 1;
        require("../Modular/💰Games/buy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.daily = updatedb.daily + 1;
        require("../Modular/💰Games/daily")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.fish = updatedb.fish + 1;
        require("../Modular/💰Games/fish")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.gamble = updatedb.gamble + 1;
        require("../Modular/💰Games/gamble")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pay = updatedb.pay + 1;
        require("../Modular/💰Games/pay")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.rob = updatedb.rob + 1;
        require("../Modular/💰Games/rob")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.inv = updatedb.inv + 1;
        require("../Modular/💰Games/inv")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.store = updatedb.store + 1;
        require("../Modular/💰Games/store")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.work = updatedb.work + 1;
        require("../Modular/💰Games/work")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.zoo = updatedb.zoo + 1;
        require("../Modular/💰Games/zoo")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.image = updatedb.image + 1;
        require("../Modular/🖼️Photogenic/unsplash")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pinterest":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../Modular/🖼️Photogenic/pinterest")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../Modular/🖼️Photogenic/wallpaper")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.advice = updatedb.advice + 1;
        require("../Modular/🔎Searches/advice")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "fact":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.fact = updatedb.fact + 1;
        require("../Modular/🔎Searches/fact")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "meme":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.meme = updatedb.meme + 1;
        require("../Modular/🔎Searches/meme")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "quote":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.quote = updatedb.quote + 1;
        require("../Modular/🔎Searches/quote")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.joke = updatedb.joke + 1;
        require("../Modular/🔎Searches/joke")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "anime":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.anime = updatedb.anime + 1;
        require("../Modular/🔎Searches/anime")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "manga":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.manga = updatedb.manga + 1;
        require("../Modular/🔎Searches/manga")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "google":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.google = updatedb.google + 1;
        require("../Modular/🔎Searches/google")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "chordlist":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../Modular/🔎Searches/chordlist")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "getChord":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.getChord = updatedb.getChord + 1;
        require("../Modular/🔎Searches/getChord")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pokedex":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../Modular/🔎Searches/pokedex")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gify":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.gify = updatedb.gify + 1;
        require("../Modular/🔎Searches/gify")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "lyrics":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../Modular/🔎Searches/lyrics")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../Modular/🔎Searches/ytsearch")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "instagram":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.instagram = updatedb.instagram + 1;
        require("../Modular/🔎Searches/instagram")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.demote = updatedb.demote + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "group":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.group = updatedb.group + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "promote":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.promote = updatedb.promote + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "kick":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.kick = updatedb.kick + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "setdesc":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.setdesc = updatedb.setdesc + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "seticon":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.seticon = updatedb.seticon + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tagall":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.tagall = updatedb.tagall + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.antilink = updatedb.antilink + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../Modular/🔰Group/antinsfw")(
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ass = updatedb.ass + 1;
        require("../Modular/🍑Hentai/ass")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bdsm":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../Modular/🍑Hentai/bdsm")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blowjob":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../Modular/🍑Hentai/blowjob")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.cum = updatedb.cum + 1;
        require("../Modular/🍑Hentai/cum")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "doujin":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.doujin = updatedb.doujin + 1;
        require("../Modular/🍑Hentai/doujin")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "feet":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.feet = updatedb.feet + 1;
        require("../Modular/🍑Hentai/feet")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "femdom":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.femdom = updatedb.femdom + 1;
        require("../Modular/🍑Hentai/femdom")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../Modular/🍑Hentai/foxgirl")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "glasses":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.glasses = updatedb.glasses + 1;
        require("../Modular/🍑Hentai/glasses")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hentai":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.hentai = updatedb.hentai + 1;
        require("../Modular/🍑Hentai/hentai")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "maid":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.maid = updatedb.maid + 1;
        require("../Modular/🍑Hentai/maid")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "masturbation":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../Modular/🍑Hentai/masturbation")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "netorare":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.netorare = updatedb.netorare + 1;
        require("../Modular/🍑Hentai/netorare")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "orgy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.orgy = updatedb.orgy + 1;
        require("../Modular/🍑Hentai/orgy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "panties":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.panties = updatedb.panties + 1;
        require("../Modular/🍑Hentai/panties")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pussy = updatedb.pussy + 1;
        require("../Modular/🍑Hentai/pussy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "school":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.school = updatedb.school + 1;
        require("../Modular/🍑Hentai/school")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "succubus":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.succubus = updatedb.succubus + 1;
        require("../Modular/🍑Hentai/succubus")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "tentacles":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../Modular/🍑Hentai/tentacles")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "thighs":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.thighs = updatedb.thighs + 1;
        require("../Modular/🍑Hentai/thighs")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../Modular/🍑Hentai/uglyBastard")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uniform":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.uniform = updatedb.uniform + 1;
        require("../Modular/🍑Hentai/uniform")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "yuri":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.yuri = updatedb.yuri + 1;
        require("../Modular/🍑Hentai/yuri")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../Modular/🍑Hentai/zettaiRyouiki")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.p4k = updatedb.p4k + 1;
        require("../Modular/👅NSFW/4k")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../Modular/👅NSFW/bimbofetish")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../Modular/👅NSFW/blowjobs")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../Modular/👅NSFW/bonermaterial")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../Modular/👅NSFW/breedingmaterial")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "canthold":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.canthold = updatedb.canthold + 1;
        require("../Modular/👅NSFW/canthold")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../Modular/👅NSFW/christiangirls")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.cum = updatedb.cum + 1;
        require("../Modular/👅NSFW/cum")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "cumslut":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../Modular/👅NSFW/cumslut")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../Modular/👅NSFW/dirtygaming")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "distension":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.distension = updatedb.distension + 1;
        require("../Modular/👅NSFW/distension")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../Modular/👅NSFW/exxxtras")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "femalepov":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../Modular/👅NSFW/femalepov")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../Modular/👅NSFW/gifsofremoval")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../Modular/👅NSFW/hotstuffnsfw")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../Modular/👅NSFW/iwanttofuckher")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../Modular/👅NSFW/justhotwomen")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "lactating":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.lactating = updatedb.lactating + 1;
        require("../Modular/👅NSFW/lactating")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milf":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.milf = updatedb.milf + 1;
        require("../Modular/👅NSFW/milf")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milk":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.milk = updatedb.milk + 1;
        require("../Modular/👅NSFW/milk")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "milking":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.milking = updatedb.milking + 1;
        require("../Modular/👅NSFW/milking")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../Modular/👅NSFW/nostalgiafapping")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../Modular/👅NSFW/nsfw")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../Modular/👅NSFW/nsfw2")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../Modular/👅NSFW/nsfw411")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "nudes":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.nudes = updatedb.nudes + 1;
        require("../Modular/👅NSFW/nudes")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../Modular/👅NSFW/omgbeckylookathiscock")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.pussy = updatedb.pussy + 1;
        require("../Modular/👅NSFW/pussy")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "realgirls":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../Modular/👅NSFW/realgirls")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../Modular/👅NSFW/sexybutnotporn")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../Modular/👅NSFW/sexygirls")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "slut":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.slut = updatedb.slut + 1;
        require("../Modular/👅NSFW/slut")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../Modular/👅NSFW/stripgirls")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../Modular/👅NSFW/toocuteforporn")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "truefmk":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../Modular/👅NSFW/truefmk")(νℓкуяє, vcнaт, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../Modular/👅NSFW/uncommonposes")(
          νℓкуяє,
          vcнaт,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.ban = updatedb.ban + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.broadcast = updatedb.broadcast + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "join":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.join = updatedb.join + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "leave":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.leave = updatedb.leave + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "reboot":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.reboot = updatedb.reboot + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "rules":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.rules = updatedb.rules + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "unban":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.unban = updatedb.unban + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
      });
      break;
    case "verify":
      require("./dboard")(νℓкуяє, vcнaт, (updatedb) => {
        console.log(updatedb);
        updatedb.verify = updatedb.verify + 1;
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
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
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
