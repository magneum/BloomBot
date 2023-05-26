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
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  let gmeta = νℓкhat.isGroup
    ? await νℓкуяє.groupMetadata(νℓкhat.chat).catch((error) => {})
    : "";
  let groupName = νℓкhat.isGroup ? gmeta.subject : "";
  let participants = νℓкhat.isGroup ? await gmeta.participants : "";
  let groupAdmins = νℓкhat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = νℓкhat.isGroup ? gmeta.owner : "";
  let isBotAdmin = νℓкhat.isGroup
    ? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
    : false;
  let isAdmin = νℓкhat.isGroup ? groupAdmins.includes(νℓкhat.sender) : false;

  let vbody =
    νℓкhat.mtype === "conversation"
      ? νℓкhat.message.conversation
      : νℓкhat.mtype == "imageMessage"
      ? νℓкhat.message.imageMessage.caption
      : νℓкhat.mtype == "videoMessage"
      ? νℓкhat.message.videoMessage.caption
      : νℓкhat.mtype == "extendedTextMessage"
      ? νℓкhat.message.extendedTextMessage.text
      : νℓкhat.mtype == "buttonsResponseMessage"
      ? νℓкhat.message.buttonsResponseMessage.selectedButtonId
      : νℓкhat.mtype == "listResponseMessage"
      ? νℓкhat.message.listResponseMessage.singleSelectReply.selectedRowId
      : νℓкhat.mtype == "templateButtonReplyMessage"
      ? νℓкhat.message.templateButtonReplyMessage.selectedId
      : νℓкhat.mtype === "messageContextInfo"
      ? νℓкhat.message.buttonsResponseMessage?.selectedButtonId ||
        νℓкhat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        νℓкhat.text
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
    νℓкуяє.chalk.green(νℓкhat.sender)
  );
  console.log(
    νℓкуяє.chalk.blueBright("💬CHAT_ID: "),
    νℓкуяє.chalk.green(νℓкhat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ νℓкуяє вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../routes/⚙️System/help")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../routes/⚙️System/dashboard")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
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
    case "ytv":
    case "watch":
    case "stream":
    case "ytmp4":
    case "video":
    case "ytwatch":
    case "ytvideo":
    case "youtubevideo":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../routes/📥Downloader/ytaudio")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../routes/🐉Emotions/bite")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "blush":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../routes/🐉Emotions/blush")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bonk":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../routes/🐉Emotions/bonk")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bored":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../routes/🐉Emotions/bored")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "confused":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../routes/🐉Emotions/confused")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "cry":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../routes/🐉Emotions/cry")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../routes/🐉Emotions/cuddle")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "dance":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../routes/🐉Emotions/dance")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../routes/🐉Emotions/goodnight")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "happy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../routes/🐉Emotions/happy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "highfive":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../routes/🐉Emotions/highfive")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "hug":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../routes/🐉Emotions/hug")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "kill":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../routes/🐉Emotions/kill")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "kiss":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../routes/🐉Emotions/kiss")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nervous":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../routes/🐉Emotions/nervous")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pat":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../routes/🐉Emotions/pat")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "poke":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../routes/🐉Emotions/poke")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "punch":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../routes/🐉Emotions/punch")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sad":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../routes/🐉Emotions/sad")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "scream":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../routes/🐉Emotions/scream")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "slap":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../routes/🐉Emotions/slap")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "smile":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../routes/🐉Emotions/smile")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "stare":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../routes/🐉Emotions/stare")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "wave":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../routes/🐉Emotions/wave")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "wink":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../routes/🐉Emotions/wink")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "yeet":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../routes/🐉Emotions/yeet")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "yes":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../routes/🐉Emotions/yes")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../routes/💗Commands/nsfwlist")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../routes/💗Commands/sfwlist")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../routes/💗Commands/animationlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../routes/💗Commands/audiofilterlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../routes/💗Commands/conversionlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../routes/💗Commands/downloadlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../routes/💗Commands/gameslist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../routes/💗Commands/grouplist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../routes/💗Commands/hentailist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../routes/💗Commands/ownerlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "photolist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../routes/💗Commands/photolist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../routes/💗Commands/searchlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../routes/💗Commands/ytfilterlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../routes/📢aFilter/bassboost")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "echo":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../routes/📢aFilter/echo")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "flanger":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../routes/📢aFilter/flanger")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../routes/📢aFilter/nightcore")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "phaser":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../routes/📢aFilter/phaser")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "reverse":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../routes/📢aFilter/reverse")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "slow":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../routes/📢aFilter/slow")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "speed":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../routes/📢aFilter/speed")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "subboost":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../routes/📢aFilter/subboost")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "superslow":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../routes/📢aFilter/superslow")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../routes/📢aFilter/superspeed")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "surround":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../routes/📢aFilter/surround")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../routes/📢aFilter/vaporwave")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../routes/📢aFilter/vibrato")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "panning":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../routes/📢aFilter/panning")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../routes/⭕YTFilter/ytbassboost")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../routes/⭕YTFilter/ytecho")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../routes/⭕YTFilter/ytflanger")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../routes/⭕YTFilter/ytnightcore")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../routes/⭕YTFilter/ytphaser")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../routes/⭕YTFilter/ytreverse")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../routes/⭕YTFilter/ytslow")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../routes/⭕YTFilter/ytspeed")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../routes/⭕YTFilter/ytsubboost")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../routes/⭕YTFilter/ytsuperslow")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../routes/⭕YTFilter/ytsuperspeed")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../routes/⭕YTFilter/ytsurround")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../routes/⭕YTFilter/ytvaporwave")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../routes/⭕YTFilter/ytvibrato")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../routes/⭕YTFilter/ytpanning")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../routes/🦄SFW/swaifu")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../routes/🦄SFW/sneko")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../routes/🦄SFW/sshinobu")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../routes/🦄SFW/smegumin")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../routes/🦄SFW/sawoo")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../routes/🦄SFW/sglomp")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../routes/🦄SFW/shandhold")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;

    case "sbite":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../routes/🦄SFW/sbite")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sblush":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../routes/🦄SFW/sblush")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../routes/🦄SFW/sbonk")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sbully":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../routes/🦄SFW/sbully")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "scringe":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../routes/🦄SFW/scringe")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "scry":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../routes/🦄SFW/scry")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../routes/🦄SFW/scuddle")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sdance":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../routes/🦄SFW/sdance")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "shappy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../routes/🦄SFW/shappy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../routes/🦄SFW/shighfive")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "shug":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../routes/🦄SFW/shug")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "skick":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../routes/🦄SFW/skick")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "skill":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../routes/🦄SFW/skill")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "skiss":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../routes/🦄SFW/skiss")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "slick":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../routes/🦄SFW/slick")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "snom":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../routes/🦄SFW/snom")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "spat":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../routes/🦄SFW/spat")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "spoke":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../routes/🦄SFW/spoke")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sslap":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../routes/🦄SFW/sslap")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../routes/🦄SFW/ssmile")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../routes/🦄SFW/ssmug")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "swave":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../routes/🦄SFW/swave")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "swink":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../routes/🦄SFW/swink")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "syeet":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../routes/🦄SFW/syeet")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../routes/📼Conversion/sticker")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../routes/📼Conversion/tinyurl")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "toimg":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../routes/📼Conversion/toimg")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "tourl":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../routes/📼Conversion/tourl")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "carbon":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../routes/📼Conversion/carbon")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ship":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../routes/📼Conversion/ship")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../routes/📼Conversion/tts")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../routes/💰Games/balance")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "buy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../routes/💰Games/buy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../routes/💰Games/daily")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../routes/💰Games/fish")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../routes/💰Games/gamble")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../routes/💰Games/pay")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../routes/💰Games/rob")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../routes/💰Games/inv")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../routes/💰Games/store")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../routes/💰Games/work")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../routes/💰Games/zoo")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../routes/🖼️Photogenic/unsplash")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../routes/🖼️Photogenic/pinterest")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../routes/🖼️Photogenic/wallpaper")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../routes/🔎Searches/advice")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "fact":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../routes/🔎Searches/fact")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "meme":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../routes/🔎Searches/meme")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "quote":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../routes/🔎Searches/quote")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../routes/🔎Searches/joke")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "anime":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../routes/🔎Searches/anime")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "manga":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../routes/🔎Searches/manga")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "google":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../routes/🔎Searches/google")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../routes/🔎Searches/chordlist")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "getChord":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../routes/🔎Searches/getChord")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../routes/🔎Searches/pokedex")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "gify":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../routes/🔎Searches/gify")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../routes/🔎Searches/lyrics")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../routes/🔎Searches/ytsearch")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "instagram":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../routes/🔎Searches/instagram")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../routes/🔰Group/demote")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "group":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../routes/🔰Group/group")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "promote":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../routes/🔰Group/promote")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "kick":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../routes/🔰Group/kick")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../routes/🔰Group/setdesc")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "seticon":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../routes/🔰Group/seticon")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "tagall":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../routes/🔰Group/tagall")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../routes/🔰Group/antilink")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../routes/🔰Group/antinsfw")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../routes/🍑Hentai/ass")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../routes/🍑Hentai/bdsm")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../routes/🍑Hentai/blowjob")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/🍑Hentai/cum")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "doujin":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../routes/🍑Hentai/doujin")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "feet":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../routes/🍑Hentai/feet")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "femdom":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../routes/🍑Hentai/femdom")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../routes/🍑Hentai/foxgirl")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "glasses":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../routes/🍑Hentai/glasses")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "hentai":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../routes/🍑Hentai/hentai")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "maid":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../routes/🍑Hentai/maid")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../routes/🍑Hentai/masturbation")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "netorare":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../routes/🍑Hentai/netorare")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "orgy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../routes/🍑Hentai/orgy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "panties":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../routes/🍑Hentai/panties")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/🍑Hentai/pussy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "school":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../routes/🍑Hentai/school")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "succubus":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../routes/🍑Hentai/succubus")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../routes/🍑Hentai/tentacles")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "thighs":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../routes/🍑Hentai/thighs")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../routes/🍑Hentai/uglyBastard")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "uniform":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../routes/🍑Hentai/uniform")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "yuri":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../routes/🍑Hentai/yuri")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../routes/🍑Hentai/zettaiRyouiki")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../routes/👅NSFW/4k")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../routes/👅NSFW/bimbofetish")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../routes/👅NSFW/blowjobs")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../routes/👅NSFW/bonermaterial")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../routes/👅NSFW/breedingmaterial")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "canthold":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../routes/👅NSFW/canthold")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../routes/👅NSFW/christiangirls")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/👅NSFW/cum")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../routes/👅NSFW/cumslut")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../routes/👅NSFW/dirtygaming")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "distension":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../routes/👅NSFW/distension")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../routes/👅NSFW/exxxtras")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../routes/👅NSFW/femalepov")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../routes/👅NSFW/gifsofremoval")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../routes/👅NSFW/hotstuffnsfw")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../routes/👅NSFW/iwanttofuckher")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../routes/👅NSFW/justhotwomen")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "lactating":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../routes/👅NSFW/lactating")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "milf":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../routes/👅NSFW/milf")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "milk":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../routes/👅NSFW/milk")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "milking":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../routes/👅NSFW/milking")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../routes/👅NSFW/nostalgiafapping")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../routes/👅NSFW/nsfw")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../routes/👅NSFW/nsfw2")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../routes/👅NSFW/nsfw411")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "nudes":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../routes/👅NSFW/nudes")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../routes/👅NSFW/omgbeckylookathiscock")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/👅NSFW/pussy")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../routes/👅NSFW/realgirls")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../routes/👅NSFW/sexybutnotporn")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../routes/👅NSFW/sexygirls")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "slut":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../routes/👅NSFW/slut")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../routes/👅NSFW/stripgirls")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../routes/👅NSFW/toocuteforporn")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../routes/👅NSFW/truefmk")(νℓкуяє, νℓкhat, update, store);
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../routes/👅NSFW/uncommonposes")(
          νℓкуяє,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/ban")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "join":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/join")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "leave":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/leave")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "reboot":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/reboot")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/rules")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "unban":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/unban")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
    case "verify":
      require("./dboard")(νℓкуяє, νℓкhat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/verify")(
          νℓкуяє,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          νℓкуяє.isSudoWorker
        );
        updatedb.save().catch((error) => νℓкуяє.grab(νℓкуяє, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await νℓкуяє.imgB(
        νℓкуяє,
        νℓкhat,
        `*😥Sorry:* @${νℓкуяє.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./src/404.jpg"
      );
      break;
  }
};
