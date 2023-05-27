//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  let gmeta = ᴠᴏxᴄ.isGroup
    ? await VօxB໐t.groupMetadata(ᴠᴏxᴄ.chat).catch((error) => {})
    : "";
  let groupName = ᴠᴏxᴄ.isGroup ? gmeta.subject : "";
  let participants = ᴠᴏxᴄ.isGroup ? await gmeta.participants : "";
  let groupAdmins = ᴠᴏxᴄ.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = ᴠᴏxᴄ.isGroup ? gmeta.owner : "";
  let isBotAdmin = ᴠᴏxᴄ.isGroup
    ? groupAdmins.includes(await VօxB໐t.decodeJid(VօxB໐t.user.id))
    : false;
  let isAdmin = ᴠᴏxᴄ.isGroup ? groupAdmins.includes(ᴠᴏxᴄ.sender) : false;

  let vbody =
    ᴠᴏxᴄ.mtype === "conversation"
      ? ᴠᴏxᴄ.message.conversation
      : ᴠᴏxᴄ.mtype == "imageMessage"
      ? ᴠᴏxᴄ.message.imageMessage.caption
      : ᴠᴏxᴄ.mtype == "videoMessage"
      ? ᴠᴏxᴄ.message.videoMessage.caption
      : ᴠᴏxᴄ.mtype == "extendedTextMessage"
      ? ᴠᴏxᴄ.message.extendedTextMessage.text
      : ᴠᴏxᴄ.mtype == "buttonsResponseMessage"
      ? ᴠᴏxᴄ.message.buttonsResponseMessage.selectedButtonId
      : ᴠᴏxᴄ.mtype == "listResponseMessage"
      ? ᴠᴏxᴄ.message.listResponseMessage.singleSelectReply.selectedRowId
      : ᴠᴏxᴄ.mtype == "templateButtonReplyMessage"
      ? ᴠᴏxᴄ.message.templateButtonReplyMessage.selectedId
      : ᴠᴏxᴄ.mtype === "messageContextInfo"
      ? ᴠᴏxᴄ.message.buttonsResponseMessage?.selectedButtonId ||
        ᴠᴏxᴄ.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        ᴠᴏxᴄ.text
      : "";
  const vcommand = vbody
    .replace(VօxB໐t.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ VօxB໐t вσт ву mågneum ✕———————————————————————✕◎"
  );
  console.log(
    VօxB໐t.chalk.blueBright("🖊️COMMANDS: "),
    VօxB໐t.chalk.green(vcommand)
  );
  console.log(
    VօxB໐t.chalk.blueBright("🖊️MESSAGE: "),
    VօxB໐t.chalk.green(vbody)
  );
  console.log(
    VօxB໐t.chalk.blueBright("❣️USER_NAME: "),
    VօxB໐t.chalk.green(VօxB໐t.pushname)
  );
  console.log(
    VօxB໐t.chalk.blueBright("📱USER_NUMBER: "),
    VօxB໐t.chalk.green(ᴠᴏxᴄ.sender)
  );
  console.log(
    VօxB໐t.chalk.blueBright("💬CHAT_ID: "),
    VօxB໐t.chalk.green(ᴠᴏxᴄ.chat)
  );
  console.log(
    "◎✕———————————————————————✕ VօxB໐t вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../routes/⚙️System/help")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../routes/⚙️System/dashboard")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../routes/📥Downloader/ytaudio")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../routes/🐉Emotions/bite")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "blush":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../routes/🐉Emotions/blush")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bonk":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../routes/🐉Emotions/bonk")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bored":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../routes/🐉Emotions/bored")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "confused":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../routes/🐉Emotions/confused")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "cry":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../routes/🐉Emotions/cry")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "cuddle":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../routes/🐉Emotions/cuddle")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "dance":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../routes/🐉Emotions/dance")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "goodnight":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../routes/🐉Emotions/goodnight")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "happy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../routes/🐉Emotions/happy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "highfive":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../routes/🐉Emotions/highfive")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "hug":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../routes/🐉Emotions/hug")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "kill":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../routes/🐉Emotions/kill")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "kiss":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../routes/🐉Emotions/kiss")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nervous":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../routes/🐉Emotions/nervous")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pat":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../routes/🐉Emotions/pat")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "poke":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../routes/🐉Emotions/poke")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "punch":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../routes/🐉Emotions/punch")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sad":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../routes/🐉Emotions/sad")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "scream":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../routes/🐉Emotions/scream")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "slap":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../routes/🐉Emotions/slap")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "smile":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../routes/🐉Emotions/smile")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "stare":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../routes/🐉Emotions/stare")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "wave":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../routes/🐉Emotions/wave")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "wink":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../routes/🐉Emotions/wink")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "yeet":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../routes/🐉Emotions/yeet")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "yes":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../routes/🐉Emotions/yes")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../routes/💗Commands/nsfwlist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../routes/💗Commands/sfwlist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "animationlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../routes/💗Commands/animationlist")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../routes/💗Commands/audiofilterlist")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../routes/💗Commands/conversionlist")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../routes/💗Commands/downloadlist")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "gameslist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../routes/💗Commands/gameslist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "grouplist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../routes/💗Commands/grouplist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "hentailist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../routes/💗Commands/hentailist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../routes/💗Commands/ownerlist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "photolist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../routes/💗Commands/photolist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "searchlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../routes/💗Commands/searchlist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../routes/💗Commands/ytfilterlist")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../routes/📢aFilter/bassboost")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "echo":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../routes/📢aFilter/echo")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "flanger":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../routes/📢aFilter/flanger")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nightcore":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../routes/📢aFilter/nightcore")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "phaser":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../routes/📢aFilter/phaser")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "reverse":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../routes/📢aFilter/reverse")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "slow":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../routes/📢aFilter/slow")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "speed":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../routes/📢aFilter/speed")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "subboost":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../routes/📢aFilter/subboost")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "superslow":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../routes/📢aFilter/superslow")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "superspeed":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../routes/📢aFilter/superspeed")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "surround":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../routes/📢aFilter/surround")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../routes/📢aFilter/vaporwave")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "vibrato":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../routes/📢aFilter/vibrato")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "panning":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../routes/📢aFilter/panning")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../routes/⭕YTFilter/ytbassboost")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytecho":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../routes/⭕YTFilter/ytecho")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../routes/⭕YTFilter/ytflanger")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../routes/⭕YTFilter/ytnightcore")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../routes/⭕YTFilter/ytphaser")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../routes/⭕YTFilter/ytreverse")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytslow":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../routes/⭕YTFilter/ytslow")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../routes/⭕YTFilter/ytspeed")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../routes/⭕YTFilter/ytsubboost")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../routes/⭕YTFilter/ytsuperslow")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../routes/⭕YTFilter/ytsuperspeed")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../routes/⭕YTFilter/ytsurround")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../routes/⭕YTFilter/ytvaporwave")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../routes/⭕YTFilter/ytvibrato")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../routes/⭕YTFilter/ytpanning")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../routes/🦄SFW/swaifu")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../routes/🦄SFW/sneko")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../routes/🦄SFW/sshinobu")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../routes/🦄SFW/smegumin")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../routes/🦄SFW/sawoo")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../routes/🦄SFW/sglomp")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../routes/🦄SFW/shandhold")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;

    case "sbite":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../routes/🦄SFW/sbite")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sblush":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../routes/🦄SFW/sblush")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sbonk":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../routes/🦄SFW/sbonk")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sbully":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../routes/🦄SFW/sbully")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "scringe":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../routes/🦄SFW/scringe")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "scry":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../routes/🦄SFW/scry")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "scuddle":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../routes/🦄SFW/scuddle")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sdance":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../routes/🦄SFW/sdance")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "shappy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../routes/🦄SFW/shappy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "shighfive":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../routes/🦄SFW/shighfive")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "shug":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../routes/🦄SFW/shug")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "skick":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../routes/🦄SFW/skick")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "skill":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../routes/🦄SFW/skill")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "skiss":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../routes/🦄SFW/skiss")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "slick":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../routes/🦄SFW/slick")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "snom":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../routes/🦄SFW/snom")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "spat":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../routes/🦄SFW/spat")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "spoke":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../routes/🦄SFW/spoke")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sslap":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../routes/🦄SFW/sslap")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ssmile":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../routes/🦄SFW/ssmile")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ssmug":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../routes/🦄SFW/ssmug")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "swave":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../routes/🦄SFW/swave")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "swink":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../routes/🦄SFW/swink")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "syeet":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../routes/🦄SFW/syeet")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../routes/📼Conversion/sticker")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../routes/📼Conversion/tinyurl")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "toimg":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../routes/📼Conversion/toimg")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "tourl":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../routes/📼Conversion/tourl")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "carbon":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../routes/📼Conversion/carbon")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ship":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../routes/📼Conversion/ship")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../routes/📼Conversion/tts")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../routes/💰Games/balance")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "buy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../routes/💰Games/buy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../routes/💰Games/daily")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../routes/💰Games/fish")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../routes/💰Games/gamble")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../routes/💰Games/pay")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../routes/💰Games/rob")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../routes/💰Games/inv")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../routes/💰Games/store")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../routes/💰Games/work")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../routes/💰Games/zoo")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../routes/🖼️Photogenic/unsplash")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pinterest":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../routes/🖼️Photogenic/pinterest")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../routes/🖼️Photogenic/wallpaper")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../routes/🔎Searches/advice")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "fact":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../routes/🔎Searches/fact")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "meme":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../routes/🔎Searches/meme")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "quote":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../routes/🔎Searches/quote")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../routes/🔎Searches/joke")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "anime":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../routes/🔎Searches/anime")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "manga":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../routes/🔎Searches/manga")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "google":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../routes/🔎Searches/google")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "chordlist":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../routes/🔎Searches/chordlist")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "getChord":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../routes/🔎Searches/getChord")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pokedex":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../routes/🔎Searches/pokedex")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "gify":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../routes/🔎Searches/gify")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "lyrics":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../routes/🔎Searches/lyrics")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../routes/🔎Searches/ytsearch")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "instagram":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../routes/🔎Searches/instagram")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../routes/🔰Group/demote")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "group":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../routes/🔰Group/group")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "promote":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../routes/🔰Group/promote")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "kick":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../routes/🔰Group/kick")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "setdesc":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../routes/🔰Group/setdesc")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "seticon":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../routes/🔰Group/seticon")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "tagall":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../routes/🔰Group/tagall")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../routes/🔰Group/antilink")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../routes/🔰Group/antinsfw")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../routes/🍑Hentai/ass")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bdsm":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../routes/🍑Hentai/bdsm")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "blowjob":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../routes/🍑Hentai/blowjob")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "cum":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/🍑Hentai/cum")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "doujin":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../routes/🍑Hentai/doujin")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "feet":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../routes/🍑Hentai/feet")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "femdom":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../routes/🍑Hentai/femdom")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../routes/🍑Hentai/foxgirl")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "glasses":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../routes/🍑Hentai/glasses")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "hentai":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../routes/🍑Hentai/hentai")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "maid":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../routes/🍑Hentai/maid")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "masturbation":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../routes/🍑Hentai/masturbation")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "netorare":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../routes/🍑Hentai/netorare")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "orgy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../routes/🍑Hentai/orgy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "panties":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../routes/🍑Hentai/panties")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pussy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/🍑Hentai/pussy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "school":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../routes/🍑Hentai/school")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "succubus":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../routes/🍑Hentai/succubus")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "tentacles":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../routes/🍑Hentai/tentacles")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "thighs":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../routes/🍑Hentai/thighs")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../routes/🍑Hentai/uglyBastard")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "uniform":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../routes/🍑Hentai/uniform")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "yuri":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../routes/🍑Hentai/yuri")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../routes/🍑Hentai/zettaiRyouiki")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../routes/👅NSFW/4k")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../routes/👅NSFW/bimbofetish")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../routes/👅NSFW/blowjobs")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../routes/👅NSFW/bonermaterial")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../routes/👅NSFW/breedingmaterial")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "canthold":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../routes/👅NSFW/canthold")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../routes/👅NSFW/christiangirls")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "cum":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/👅NSFW/cum")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "cumslut":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../routes/👅NSFW/cumslut")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../routes/👅NSFW/dirtygaming")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "distension":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../routes/👅NSFW/distension")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../routes/👅NSFW/exxxtras")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "femalepov":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../routes/👅NSFW/femalepov")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../routes/👅NSFW/gifsofremoval")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../routes/👅NSFW/hotstuffnsfw")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../routes/👅NSFW/iwanttofuckher")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../routes/👅NSFW/justhotwomen")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "lactating":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../routes/👅NSFW/lactating")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "milf":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../routes/👅NSFW/milf")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "milk":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../routes/👅NSFW/milk")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "milking":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../routes/👅NSFW/milking")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../routes/👅NSFW/nostalgiafapping")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../routes/👅NSFW/nsfw")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../routes/👅NSFW/nsfw2")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../routes/👅NSFW/nsfw411")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "nudes":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../routes/👅NSFW/nudes")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../routes/👅NSFW/omgbeckylookathiscock")(
          VօxB໐t,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "pussy":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/👅NSFW/pussy")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "realgirls":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../routes/👅NSFW/realgirls")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../routes/👅NSFW/sexybutnotporn")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../routes/👅NSFW/sexygirls")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "slut":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../routes/👅NSFW/slut")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../routes/👅NSFW/stripgirls")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../routes/👅NSFW/toocuteforporn")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "truefmk":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../routes/👅NSFW/truefmk")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../routes/👅NSFW/uncommonposes")(VօxB໐t, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/ban")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "join":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/join")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "leave":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/leave")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "reboot":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/reboot")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/rules")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "unban":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/unban")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
    case "verify":
      require("./dboard")(VօxB໐t, ᴠᴏxᴄ, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/verify")(
          VօxB໐t,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          VօxB໐t.isSudoWorker
        );
        updatedb.save().catch((error) => VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `*😥Sorry:* @${VօxB໐t.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./src/404.jpg"
      );
      break;
  }
};
