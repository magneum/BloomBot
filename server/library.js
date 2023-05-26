// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  let gmeta = νℓкhat.isGroup
    ? await ѕуηтнσяiα.groupMetadata(νℓкhat.chat).catch((error) => {})
    : "";
  let groupName = νℓкhat.isGroup ? gmeta.subject : "";
  let participants = νℓкhat.isGroup ? await gmeta.participants : "";
  let groupAdmins = νℓкhat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = νℓкhat.isGroup ? gmeta.owner : "";
  let isBotAdmin = νℓкhat.isGroup
    ? groupAdmins.includes(await ѕуηтнσяiα.decodeJid(ѕуηтнσяiα.user.id))
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
    .replace(ѕуηтнσяiα.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ ѕуηтнσяiα вσт ву mågneum ✕———————————————————————✕◎"
  );
  console.log(
    ѕуηтнσяiα.chalk.blueBright("🖊️COMMANDS: "),
    ѕуηтнσяiα.chalk.green(vcommand)
  );
  console.log(
    ѕуηтнσяiα.chalk.blueBright("🖊️MESSAGE: "),
    ѕуηтнσяiα.chalk.green(vbody)
  );
  console.log(
    ѕуηтнσяiα.chalk.blueBright("❣️USER_NAME: "),
    ѕуηтнσяiα.chalk.green(ѕуηтнσяiα.pushname)
  );
  console.log(
    ѕуηтнσяiα.chalk.blueBright("📱USER_NUMBER: "),
    ѕуηтнσяiα.chalk.green(νℓкhat.sender)
  );
  console.log(
    ѕуηтнσяiα.chalk.blueBright("💬CHAT_ID: "),
    ѕуηтнσяiα.chalk.green(νℓкhat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ ѕуηтнσяiα вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../routes/⚙️System/help")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../routes/⚙️System/dashboard")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../routes/📥Downloader/ytaudio")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../routes/🐉Emotions/bite")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "blush":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../routes/🐉Emotions/blush")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bonk":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../routes/🐉Emotions/bonk")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bored":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../routes/🐉Emotions/bored")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "confused":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../routes/🐉Emotions/confused")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "cry":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../routes/🐉Emotions/cry")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../routes/🐉Emotions/cuddle")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "dance":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../routes/🐉Emotions/dance")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../routes/🐉Emotions/goodnight")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "happy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../routes/🐉Emotions/happy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "highfive":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../routes/🐉Emotions/highfive")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "hug":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../routes/🐉Emotions/hug")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "kill":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../routes/🐉Emotions/kill")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "kiss":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../routes/🐉Emotions/kiss")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nervous":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../routes/🐉Emotions/nervous")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pat":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../routes/🐉Emotions/pat")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "poke":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../routes/🐉Emotions/poke")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "punch":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../routes/🐉Emotions/punch")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sad":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../routes/🐉Emotions/sad")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "scream":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../routes/🐉Emotions/scream")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "slap":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../routes/🐉Emotions/slap")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "smile":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../routes/🐉Emotions/smile")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "stare":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../routes/🐉Emotions/stare")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "wave":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../routes/🐉Emotions/wave")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "wink":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../routes/🐉Emotions/wink")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "yeet":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../routes/🐉Emotions/yeet")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "yes":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../routes/🐉Emotions/yes")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../routes/💗Commands/nsfwlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../routes/💗Commands/sfwlist")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../routes/💗Commands/animationlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../routes/💗Commands/audiofilterlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../routes/💗Commands/conversionlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../routes/💗Commands/downloadlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../routes/💗Commands/gameslist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../routes/💗Commands/grouplist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../routes/💗Commands/hentailist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../routes/💗Commands/ownerlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "photolist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../routes/💗Commands/photolist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../routes/💗Commands/searchlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../routes/💗Commands/ytfilterlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../routes/📢aFilter/bassboost")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "echo":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../routes/📢aFilter/echo")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "flanger":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../routes/📢aFilter/flanger")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../routes/📢aFilter/nightcore")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "phaser":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../routes/📢aFilter/phaser")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "reverse":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../routes/📢aFilter/reverse")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "slow":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../routes/📢aFilter/slow")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "speed":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../routes/📢aFilter/speed")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "subboost":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../routes/📢aFilter/subboost")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "superslow":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../routes/📢aFilter/superslow")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../routes/📢aFilter/superspeed")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "surround":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../routes/📢aFilter/surround")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../routes/📢aFilter/vaporwave")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../routes/📢aFilter/vibrato")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "panning":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../routes/📢aFilter/panning")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../routes/⭕YTFilter/ytbassboost")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../routes/⭕YTFilter/ytecho")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../routes/⭕YTFilter/ytflanger")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../routes/⭕YTFilter/ytnightcore")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../routes/⭕YTFilter/ytphaser")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../routes/⭕YTFilter/ytreverse")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../routes/⭕YTFilter/ytslow")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../routes/⭕YTFilter/ytspeed")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../routes/⭕YTFilter/ytsubboost")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../routes/⭕YTFilter/ytsuperslow")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../routes/⭕YTFilter/ytsuperspeed")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../routes/⭕YTFilter/ytsurround")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../routes/⭕YTFilter/ytvaporwave")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../routes/⭕YTFilter/ytvibrato")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../routes/⭕YTFilter/ytpanning")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../routes/🦄SFW/swaifu")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../routes/🦄SFW/sneko")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../routes/🦄SFW/sshinobu")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../routes/🦄SFW/smegumin")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../routes/🦄SFW/sawoo")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../routes/🦄SFW/sglomp")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../routes/🦄SFW/shandhold")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;

    case "sbite":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../routes/🦄SFW/sbite")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sblush":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../routes/🦄SFW/sblush")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../routes/🦄SFW/sbonk")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sbully":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../routes/🦄SFW/sbully")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "scringe":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../routes/🦄SFW/scringe")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "scry":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../routes/🦄SFW/scry")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../routes/🦄SFW/scuddle")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sdance":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../routes/🦄SFW/sdance")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "shappy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../routes/🦄SFW/shappy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../routes/🦄SFW/shighfive")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "shug":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../routes/🦄SFW/shug")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "skick":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../routes/🦄SFW/skick")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "skill":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../routes/🦄SFW/skill")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "skiss":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../routes/🦄SFW/skiss")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "slick":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../routes/🦄SFW/slick")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "snom":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../routes/🦄SFW/snom")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "spat":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../routes/🦄SFW/spat")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "spoke":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../routes/🦄SFW/spoke")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sslap":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../routes/🦄SFW/sslap")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../routes/🦄SFW/ssmile")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../routes/🦄SFW/ssmug")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "swave":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../routes/🦄SFW/swave")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "swink":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../routes/🦄SFW/swink")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "syeet":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../routes/🦄SFW/syeet")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../routes/📼Conversion/sticker")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../routes/📼Conversion/tinyurl")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "toimg":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../routes/📼Conversion/toimg")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "tourl":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../routes/📼Conversion/tourl")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "carbon":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../routes/📼Conversion/carbon")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ship":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../routes/📼Conversion/ship")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../routes/📼Conversion/tts")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../routes/💰Games/balance")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "buy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../routes/💰Games/buy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../routes/💰Games/daily")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../routes/💰Games/fish")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../routes/💰Games/gamble")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../routes/💰Games/pay")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../routes/💰Games/rob")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../routes/💰Games/inv")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../routes/💰Games/store")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../routes/💰Games/work")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../routes/💰Games/zoo")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../routes/🖼️Photogenic/unsplash")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../routes/🖼️Photogenic/pinterest")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../routes/🖼️Photogenic/wallpaper")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../routes/🔎Searches/advice")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "fact":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../routes/🔎Searches/fact")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "meme":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../routes/🔎Searches/meme")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "quote":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../routes/🔎Searches/quote")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../routes/🔎Searches/joke")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "anime":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../routes/🔎Searches/anime")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "manga":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../routes/🔎Searches/manga")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "google":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../routes/🔎Searches/google")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../routes/🔎Searches/chordlist")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "getChord":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../routes/🔎Searches/getChord")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../routes/🔎Searches/pokedex")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "gify":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../routes/🔎Searches/gify")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../routes/🔎Searches/lyrics")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../routes/🔎Searches/ytsearch")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "instagram":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../routes/🔎Searches/instagram")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../routes/🔰Group/demote")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "group":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../routes/🔰Group/group")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "promote":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../routes/🔰Group/promote")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "kick":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../routes/🔰Group/kick")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../routes/🔰Group/setdesc")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "seticon":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../routes/🔰Group/seticon")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "tagall":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../routes/🔰Group/tagall")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../routes/🔰Group/antilink")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../routes/🔰Group/antinsfw")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../routes/🍑Hentai/ass")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../routes/🍑Hentai/bdsm")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../routes/🍑Hentai/blowjob")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/🍑Hentai/cum")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "doujin":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../routes/🍑Hentai/doujin")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "feet":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../routes/🍑Hentai/feet")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "femdom":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../routes/🍑Hentai/femdom")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../routes/🍑Hentai/foxgirl")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "glasses":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../routes/🍑Hentai/glasses")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "hentai":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../routes/🍑Hentai/hentai")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "maid":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../routes/🍑Hentai/maid")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../routes/🍑Hentai/masturbation")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "netorare":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../routes/🍑Hentai/netorare")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "orgy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../routes/🍑Hentai/orgy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "panties":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../routes/🍑Hentai/panties")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/🍑Hentai/pussy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "school":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../routes/🍑Hentai/school")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "succubus":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../routes/🍑Hentai/succubus")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../routes/🍑Hentai/tentacles")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "thighs":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../routes/🍑Hentai/thighs")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../routes/🍑Hentai/uglyBastard")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "uniform":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../routes/🍑Hentai/uniform")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "yuri":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../routes/🍑Hentai/yuri")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../routes/🍑Hentai/zettaiRyouiki")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../routes/👅NSFW/4k")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../routes/👅NSFW/bimbofetish")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../routes/👅NSFW/blowjobs")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../routes/👅NSFW/bonermaterial")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../routes/👅NSFW/breedingmaterial")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "canthold":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../routes/👅NSFW/canthold")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../routes/👅NSFW/christiangirls")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "cum":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/👅NSFW/cum")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../routes/👅NSFW/cumslut")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../routes/👅NSFW/dirtygaming")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "distension":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../routes/👅NSFW/distension")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../routes/👅NSFW/exxxtras")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../routes/👅NSFW/femalepov")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../routes/👅NSFW/gifsofremoval")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../routes/👅NSFW/hotstuffnsfw")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../routes/👅NSFW/iwanttofuckher")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../routes/👅NSFW/justhotwomen")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "lactating":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../routes/👅NSFW/lactating")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "milf":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../routes/👅NSFW/milf")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "milk":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../routes/👅NSFW/milk")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "milking":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../routes/👅NSFW/milking")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../routes/👅NSFW/nostalgiafapping")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../routes/👅NSFW/nsfw")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../routes/👅NSFW/nsfw2")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../routes/👅NSFW/nsfw411")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "nudes":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../routes/👅NSFW/nudes")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../routes/👅NSFW/omgbeckylookathiscock")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "pussy":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/👅NSFW/pussy")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../routes/👅NSFW/realgirls")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../routes/👅NSFW/sexybutnotporn")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../routes/👅NSFW/sexygirls")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "slut":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../routes/👅NSFW/slut")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../routes/👅NSFW/stripgirls")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../routes/👅NSFW/toocuteforporn")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../routes/👅NSFW/truefmk")(ѕуηтнσяiα, νℓкhat, update, store);
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../routes/👅NSFW/uncommonposes")(
          ѕуηтнσяiα,
          νℓкhat,
          update,
          store
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/ban")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "join":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/join")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "leave":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/leave")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "reboot":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/reboot")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/rules")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "unban":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/unban")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
    case "verify":
      require("./dboard")(ѕуηтнσяiα, νℓкhat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/verify")(
          ѕуηтнσяiα,
          νℓкhat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ѕуηтнσяiα.isSudoWorker
        );
        updatedb.save().catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await ѕуηтнσяiα.imgB(
        ѕуηтнσяiα,
        νℓкhat,
        `*😥Sorry:* @${ѕуηтнσяiα.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./src/404.jpg"
      );
      break;
  }
};
