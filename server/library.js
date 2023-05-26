// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  let gmeta = νℓкhat.isGroup
    ? await ѕуηтнiα.groupMetadata(νℓкhat.chat).catch((error) => {})
    : "";
  let groupName = νℓкhat.isGroup ? gmeta.subject : "";
  let participants = νℓкhat.isGroup ? await gmeta.participants : "";
  let groupAdmins = νℓкhat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = νℓкhat.isGroup ? gmeta.owner : "";
  let isBotAdmin = νℓкhat.isGroup
    ? groupAdmins.includes(await ѕуηтнiα.decodeJid(ѕуηтнiα.user.id))
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
    .replace(ѕуηтнiα.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ ѕуηтнiα вσт ву mågneum ✕———————————————————————✕◎"
  );
  console.log(
    ѕуηтнiα.chalk.blueBright("🖊️COMMANDS: "),
    ѕуηтнiα.chalk.green(vcommand)
  );
  console.log(
    ѕуηтнiα.chalk.blueBright("🖊️MESSAGE: "),
    ѕуηтнiα.chalk.green(vbody)
  );
  console.log(
    ѕуηтнiα.chalk.blueBright("❣️USER_NAME: "),
    ѕуηтнiα.chalk.green(ѕуηтнiα.pushname)
  );
  console.log(
    ѕуηтнiα.chalk.blueBright("📱USER_NUMBER: "),
    ѕуηтнiα.chalk.green(νℓкhat.sender)
  );
  console.log(
    ѕуηтнiα.chalk.blueBright("💬CHAT_ID: "),
    ѕуηтнiα.chalk.green(νℓкhat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ ѕуηтнiα вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../routes/⚙️System/help")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../routes/⚙️System/dashboard")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../routes/📥Downloader/ytaudio")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../routes/🐉Emotions/bite")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "blush":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../routes/🐉Emotions/blush")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bonk":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../routes/🐉Emotions/bonk")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bored":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../routes/🐉Emotions/bored")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "confused":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../routes/🐉Emotions/confused")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "cry":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../routes/🐉Emotions/cry")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../routes/🐉Emotions/cuddle")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "dance":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../routes/🐉Emotions/dance")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../routes/🐉Emotions/goodnight")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "happy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../routes/🐉Emotions/happy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "highfive":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../routes/🐉Emotions/highfive")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "hug":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../routes/🐉Emotions/hug")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "kill":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../routes/🐉Emotions/kill")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "kiss":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../routes/🐉Emotions/kiss")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nervous":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../routes/🐉Emotions/nervous")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pat":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../routes/🐉Emotions/pat")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "poke":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../routes/🐉Emotions/poke")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "punch":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../routes/🐉Emotions/punch")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sad":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../routes/🐉Emotions/sad")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "scream":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../routes/🐉Emotions/scream")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "slap":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../routes/🐉Emotions/slap")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "smile":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../routes/🐉Emotions/smile")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "stare":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../routes/🐉Emotions/stare")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "wave":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../routes/🐉Emotions/wave")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "wink":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../routes/🐉Emotions/wink")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "yeet":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../routes/🐉Emotions/yeet")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "yes":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../routes/🐉Emotions/yes")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../routes/💗Commands/nsfwlist")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../routes/💗Commands/sfwlist")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../routes/💗Commands/animationlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../routes/💗Commands/audiofilterlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../routes/💗Commands/conversionlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../routes/💗Commands/downloadlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../routes/💗Commands/gameslist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../routes/💗Commands/grouplist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../routes/💗Commands/hentailist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../routes/💗Commands/ownerlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "photolist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../routes/💗Commands/photolist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../routes/💗Commands/searchlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../routes/💗Commands/ytfilterlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../routes/📢aFilter/bassboost")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "echo":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../routes/📢aFilter/echo")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "flanger":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../routes/📢aFilter/flanger")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../routes/📢aFilter/nightcore")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "phaser":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../routes/📢aFilter/phaser")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "reverse":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../routes/📢aFilter/reverse")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "slow":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../routes/📢aFilter/slow")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "speed":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../routes/📢aFilter/speed")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "subboost":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../routes/📢aFilter/subboost")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "superslow":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../routes/📢aFilter/superslow")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../routes/📢aFilter/superspeed")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "surround":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../routes/📢aFilter/surround")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../routes/📢aFilter/vaporwave")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../routes/📢aFilter/vibrato")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "panning":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../routes/📢aFilter/panning")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../routes/⭕YTFilter/ytbassboost")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../routes/⭕YTFilter/ytecho")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../routes/⭕YTFilter/ytflanger")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../routes/⭕YTFilter/ytnightcore")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../routes/⭕YTFilter/ytphaser")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../routes/⭕YTFilter/ytreverse")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../routes/⭕YTFilter/ytslow")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../routes/⭕YTFilter/ytspeed")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../routes/⭕YTFilter/ytsubboost")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../routes/⭕YTFilter/ytsuperslow")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../routes/⭕YTFilter/ytsuperspeed")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../routes/⭕YTFilter/ytsurround")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../routes/⭕YTFilter/ytvaporwave")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../routes/⭕YTFilter/ytvibrato")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../routes/⭕YTFilter/ytpanning")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../routes/🦄SFW/swaifu")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../routes/🦄SFW/sneko")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../routes/🦄SFW/sshinobu")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../routes/🦄SFW/smegumin")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../routes/🦄SFW/sawoo")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../routes/🦄SFW/sglomp")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../routes/🦄SFW/shandhold")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;

    case "sbite":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../routes/🦄SFW/sbite")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sblush":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../routes/🦄SFW/sblush")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../routes/🦄SFW/sbonk")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sbully":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../routes/🦄SFW/sbully")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "scringe":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../routes/🦄SFW/scringe")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "scry":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../routes/🦄SFW/scry")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../routes/🦄SFW/scuddle")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sdance":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../routes/🦄SFW/sdance")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "shappy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../routes/🦄SFW/shappy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../routes/🦄SFW/shighfive")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "shug":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../routes/🦄SFW/shug")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "skick":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../routes/🦄SFW/skick")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "skill":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../routes/🦄SFW/skill")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "skiss":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../routes/🦄SFW/skiss")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "slick":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../routes/🦄SFW/slick")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "snom":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../routes/🦄SFW/snom")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "spat":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../routes/🦄SFW/spat")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "spoke":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../routes/🦄SFW/spoke")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sslap":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../routes/🦄SFW/sslap")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../routes/🦄SFW/ssmile")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../routes/🦄SFW/ssmug")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "swave":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../routes/🦄SFW/swave")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "swink":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../routes/🦄SFW/swink")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "syeet":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../routes/🦄SFW/syeet")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../routes/📼Conversion/sticker")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../routes/📼Conversion/tinyurl")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "toimg":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../routes/📼Conversion/toimg")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "tourl":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../routes/📼Conversion/tourl")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "carbon":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../routes/📼Conversion/carbon")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ship":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../routes/📼Conversion/ship")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../routes/📼Conversion/tts")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../routes/💰Games/balance")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "buy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../routes/💰Games/buy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../routes/💰Games/daily")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../routes/💰Games/fish")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../routes/💰Games/gamble")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../routes/💰Games/pay")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../routes/💰Games/rob")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../routes/💰Games/inv")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../routes/💰Games/store")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../routes/💰Games/work")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../routes/💰Games/zoo")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../routes/🖼️Photogenic/unsplash")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../routes/🖼️Photogenic/pinterest")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../routes/🖼️Photogenic/wallpaper")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../routes/🔎Searches/advice")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "fact":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../routes/🔎Searches/fact")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "meme":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../routes/🔎Searches/meme")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "quote":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../routes/🔎Searches/quote")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../routes/🔎Searches/joke")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "anime":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../routes/🔎Searches/anime")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "manga":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../routes/🔎Searches/manga")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "google":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../routes/🔎Searches/google")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../routes/🔎Searches/chordlist")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "getChord":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../routes/🔎Searches/getChord")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../routes/🔎Searches/pokedex")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "gify":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../routes/🔎Searches/gify")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../routes/🔎Searches/lyrics")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../routes/🔎Searches/ytsearch")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "instagram":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../routes/🔎Searches/instagram")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../routes/🔰Group/demote")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "group":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../routes/🔰Group/group")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "promote":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../routes/🔰Group/promote")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "kick":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../routes/🔰Group/kick")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../routes/🔰Group/setdesc")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "seticon":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../routes/🔰Group/seticon")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "tagall":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../routes/🔰Group/tagall")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../routes/🔰Group/antilink")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../routes/🔰Group/antinsfw")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../routes/🍑Hentai/ass")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../routes/🍑Hentai/bdsm")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../routes/🍑Hentai/blowjob")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/🍑Hentai/cum")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "doujin":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../routes/🍑Hentai/doujin")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "feet":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../routes/🍑Hentai/feet")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "femdom":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../routes/🍑Hentai/femdom")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../routes/🍑Hentai/foxgirl")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "glasses":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../routes/🍑Hentai/glasses")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "hentai":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../routes/🍑Hentai/hentai")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "maid":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../routes/🍑Hentai/maid")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../routes/🍑Hentai/masturbation")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "netorare":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../routes/🍑Hentai/netorare")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "orgy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../routes/🍑Hentai/orgy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "panties":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../routes/🍑Hentai/panties")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/🍑Hentai/pussy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "school":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../routes/🍑Hentai/school")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "succubus":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../routes/🍑Hentai/succubus")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../routes/🍑Hentai/tentacles")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "thighs":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../routes/🍑Hentai/thighs")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../routes/🍑Hentai/uglyBastard")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "uniform":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../routes/🍑Hentai/uniform")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "yuri":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../routes/🍑Hentai/yuri")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../routes/🍑Hentai/zettaiRyouiki")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../routes/👅NSFW/4k")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../routes/👅NSFW/bimbofetish")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../routes/👅NSFW/blowjobs")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../routes/👅NSFW/bonermaterial")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../routes/👅NSFW/breedingmaterial")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "canthold":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../routes/👅NSFW/canthold")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../routes/👅NSFW/christiangirls")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/👅NSFW/cum")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../routes/👅NSFW/cumslut")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../routes/👅NSFW/dirtygaming")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "distension":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../routes/👅NSFW/distension")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../routes/👅NSFW/exxxtras")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../routes/👅NSFW/femalepov")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../routes/👅NSFW/gifsofremoval")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../routes/👅NSFW/hotstuffnsfw")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../routes/👅NSFW/iwanttofuckher")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../routes/👅NSFW/justhotwomen")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "lactating":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../routes/👅NSFW/lactating")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "milf":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../routes/👅NSFW/milf")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "milk":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../routes/👅NSFW/milk")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "milking":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../routes/👅NSFW/milking")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../routes/👅NSFW/nostalgiafapping")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../routes/👅NSFW/nsfw")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../routes/👅NSFW/nsfw2")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../routes/👅NSFW/nsfw411")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "nudes":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../routes/👅NSFW/nudes")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../routes/👅NSFW/omgbeckylookathiscock")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/👅NSFW/pussy")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../routes/👅NSFW/realgirls")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../routes/👅NSFW/sexybutnotporn")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../routes/👅NSFW/sexygirls")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "slut":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../routes/👅NSFW/slut")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../routes/👅NSFW/stripgirls")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../routes/👅NSFW/toocuteforporn")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../routes/👅NSFW/truefmk")(ѕуηтнiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../routes/👅NSFW/uncommonposes")(
          ѕуηтнiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/ban")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "join":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/join")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "leave":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/leave")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "reboot":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/reboot")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/rules")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "unban":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/unban")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
    case "verify":
      require("./dboard")(ѕуηтнiα, νℓкhat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/verify")(
          ѕуηтнiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await ѕуηтнiα.imgB(
        ѕуηтнiα,
        νℓкhat,
        `*😥Sorry:* @${ѕуηтнiα.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./src/404.jpg"
      );
      break;
  }
};
