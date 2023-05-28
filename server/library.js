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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  let gmeta = ᴠᴏxᴄ.isGroup
    ? await ꪜᴏxʙᴏᴛ.groupMetadata(ᴠᴏxᴄ.chat).catch((error) => {})
    : "";
  let groupName = ᴠᴏxᴄ.isGroup ? gmeta.subject : "";
  let participants = ᴠᴏxᴄ.isGroup ? await gmeta.participants : "";
  let groupAdmins = ᴠᴏxᴄ.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = ᴠᴏxᴄ.isGroup ? gmeta.owner : "";
  let isBotAdmin = ᴠᴏxᴄ.isGroup
    ? groupAdmins.includes(await ꪜᴏxʙᴏᴛ.decodeJid(ꪜᴏxʙᴏᴛ.user.id))
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
    .replace(ꪜᴏxʙᴏᴛ.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ ꪜᴏxʙᴏᴛ вσт ву mågneum ✕———————————————————————✕◎"
  );
  console.log(
    ꪜᴏxʙᴏᴛ.chalk.blueBright("🖊️COMMANDS: "),
    ꪜᴏxʙᴏᴛ.chalk.green(vcommand)
  );
  console.log(
    ꪜᴏxʙᴏᴛ.chalk.blueBright("🖊️MESSAGE: "),
    ꪜᴏxʙᴏᴛ.chalk.green(vbody)
  );
  console.log(
    ꪜᴏxʙᴏᴛ.chalk.blueBright("❣️USER_NAME: "),
    ꪜᴏxʙᴏᴛ.chalk.green(ꪜᴏxʙᴏᴛ.pushname)
  );
  console.log(
    ꪜᴏxʙᴏᴛ.chalk.blueBright("📱USER_NUMBER: "),
    ꪜᴏxʙᴏᴛ.chalk.green(ᴠᴏxᴄ.sender)
  );
  console.log(
    ꪜᴏxʙᴏᴛ.chalk.blueBright("💬CHAT_ID: "),
    ꪜᴏxʙᴏᴛ.chalk.green(ᴠᴏxᴄ.chat)
  );
  console.log(
    "◎✕———————————————————————✕ ꪜᴏxʙᴏᴛ вσт ву mågneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../routes/⚙️System/help")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../routes/⚙️System/dashboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../routes/📥Downloader/ytaudio")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../routes/🐉Emotions/bite")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "blush":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../routes/🐉Emotions/blush")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bonk":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../routes/🐉Emotions/bonk")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bored":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../routes/🐉Emotions/bored")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "confused":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../routes/🐉Emotions/confused")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "cry":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../routes/🐉Emotions/cry")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "cuddle":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../routes/🐉Emotions/cuddle")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "dance":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../routes/🐉Emotions/dance")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "goodnight":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../routes/🐉Emotions/goodnight")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "happy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../routes/🐉Emotions/happy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "highfive":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../routes/🐉Emotions/highfive")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "hug":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../routes/🐉Emotions/hug")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "kill":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../routes/🐉Emotions/kill")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "kiss":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../routes/🐉Emotions/kiss")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nervous":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../routes/🐉Emotions/nervous")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pat":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../routes/🐉Emotions/pat")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "poke":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../routes/🐉Emotions/poke")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "punch":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../routes/🐉Emotions/punch")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sad":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../routes/🐉Emotions/sad")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "scream":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../routes/🐉Emotions/scream")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "slap":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../routes/🐉Emotions/slap")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "smile":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../routes/🐉Emotions/smile")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "stare":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../routes/🐉Emotions/stare")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "wave":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../routes/🐉Emotions/wave")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "wink":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../routes/🐉Emotions/wink")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "yeet":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../routes/🐉Emotions/yeet")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "yes":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../routes/🐉Emotions/yes")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../routes/💗Commands/nsfwlist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../routes/💗Commands/sfwlist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "animationlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../routes/💗Commands/animationlist")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../routes/💗Commands/audiofilterlist")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../routes/💗Commands/conversionlist")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../routes/💗Commands/downloadlist")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "gameslist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../routes/💗Commands/gameslist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "grouplist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../routes/💗Commands/grouplist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "hentailist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../routes/💗Commands/hentailist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../routes/💗Commands/ownerlist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "photolist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../routes/💗Commands/photolist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "searchlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../routes/💗Commands/searchlist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../routes/💗Commands/ytfilterlist")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../routes/📢aFilter/bassboost")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "echo":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../routes/📢aFilter/echo")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "flanger":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../routes/📢aFilter/flanger")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nightcore":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../routes/📢aFilter/nightcore")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "phaser":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../routes/📢aFilter/phaser")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "reverse":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../routes/📢aFilter/reverse")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "slow":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../routes/📢aFilter/slow")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "speed":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../routes/📢aFilter/speed")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "subboost":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../routes/📢aFilter/subboost")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "superslow":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../routes/📢aFilter/superslow")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "superspeed":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../routes/📢aFilter/superspeed")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "surround":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../routes/📢aFilter/surround")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../routes/📢aFilter/vaporwave")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "vibrato":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../routes/📢aFilter/vibrato")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "panning":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../routes/📢aFilter/panning")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../routes/⭕YTFilter/ytbassboost")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytecho":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../routes/⭕YTFilter/ytecho")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../routes/⭕YTFilter/ytflanger")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../routes/⭕YTFilter/ytnightcore")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../routes/⭕YTFilter/ytphaser")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../routes/⭕YTFilter/ytreverse")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytslow":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../routes/⭕YTFilter/ytslow")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../routes/⭕YTFilter/ytspeed")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../routes/⭕YTFilter/ytsubboost")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../routes/⭕YTFilter/ytsuperslow")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../routes/⭕YTFilter/ytsuperspeed")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../routes/⭕YTFilter/ytsurround")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../routes/⭕YTFilter/ytvaporwave")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../routes/⭕YTFilter/ytvibrato")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../routes/⭕YTFilter/ytpanning")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../routes/🦄SFW/swaifu")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../routes/🦄SFW/sneko")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../routes/🦄SFW/sshinobu")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../routes/🦄SFW/smegumin")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../routes/🦄SFW/sawoo")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../routes/🦄SFW/sglomp")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../routes/🦄SFW/shandhold")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;

    case "sbite":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../routes/🦄SFW/sbite")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sblush":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../routes/🦄SFW/sblush")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sbonk":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../routes/🦄SFW/sbonk")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sbully":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../routes/🦄SFW/sbully")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "scringe":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../routes/🦄SFW/scringe")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "scry":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../routes/🦄SFW/scry")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "scuddle":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../routes/🦄SFW/scuddle")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sdance":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../routes/🦄SFW/sdance")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "shappy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../routes/🦄SFW/shappy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "shighfive":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../routes/🦄SFW/shighfive")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "shug":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../routes/🦄SFW/shug")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "skick":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../routes/🦄SFW/skick")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "skill":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../routes/🦄SFW/skill")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "skiss":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../routes/🦄SFW/skiss")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "slick":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../routes/🦄SFW/slick")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "snom":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../routes/🦄SFW/snom")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "spat":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../routes/🦄SFW/spat")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "spoke":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../routes/🦄SFW/spoke")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sslap":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../routes/🦄SFW/sslap")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ssmile":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../routes/🦄SFW/ssmile")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ssmug":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../routes/🦄SFW/ssmug")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "swave":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../routes/🦄SFW/swave")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "swink":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../routes/🦄SFW/swink")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "syeet":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../routes/🦄SFW/syeet")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../routes/📼Conversion/sticker")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../routes/📼Conversion/tinyurl")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "toimg":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../routes/📼Conversion/toimg")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "tourl":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../routes/📼Conversion/tourl")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "carbon":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../routes/📼Conversion/carbon")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ship":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../routes/📼Conversion/ship")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../routes/📼Conversion/tts")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../routes/💰Games/balance")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "buy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../routes/💰Games/buy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../routes/💰Games/daily")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../routes/💰Games/fish")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../routes/💰Games/gamble")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../routes/💰Games/pay")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../routes/💰Games/rob")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../routes/💰Games/inv")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../routes/💰Games/store")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../routes/💰Games/work")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../routes/💰Games/zoo")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../routes/🖼️Photogenic/unsplash")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pinterest":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../routes/🖼️Photogenic/pinterest")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../routes/🖼️Photogenic/wallpaper")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../routes/🔎Searches/advice")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "fact":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../routes/🔎Searches/fact")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "meme":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../routes/🔎Searches/meme")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "quote":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../routes/🔎Searches/quote")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../routes/🔎Searches/joke")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "anime":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../routes/🔎Searches/anime")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "manga":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../routes/🔎Searches/manga")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "google":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../routes/🔎Searches/google")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "chordlist":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../routes/🔎Searches/chordlist")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "getChord":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../routes/🔎Searches/getChord")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pokedex":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../routes/🔎Searches/pokedex")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "gify":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../routes/🔎Searches/gify")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "lyrics":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../routes/🔎Searches/lyrics")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../routes/🔎Searches/ytsearch")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "instagram":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../routes/🔎Searches/instagram")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../routes/🔰Group/demote")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "group":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../routes/🔰Group/group")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "promote":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../routes/🔰Group/promote")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "kick":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../routes/🔰Group/kick")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "setdesc":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../routes/🔰Group/setdesc")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "seticon":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../routes/🔰Group/seticon")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "tagall":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../routes/🔰Group/tagall")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../routes/🔰Group/antilink")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../routes/🔰Group/antinsfw")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../routes/🍑Hentai/ass")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bdsm":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../routes/🍑Hentai/bdsm")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "blowjob":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../routes/🍑Hentai/blowjob")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "cum":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/🍑Hentai/cum")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "doujin":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../routes/🍑Hentai/doujin")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "feet":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../routes/🍑Hentai/feet")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "femdom":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../routes/🍑Hentai/femdom")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../routes/🍑Hentai/foxgirl")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "glasses":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../routes/🍑Hentai/glasses")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "hentai":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../routes/🍑Hentai/hentai")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "maid":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../routes/🍑Hentai/maid")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "masturbation":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../routes/🍑Hentai/masturbation")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "netorare":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../routes/🍑Hentai/netorare")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "orgy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../routes/🍑Hentai/orgy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "panties":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../routes/🍑Hentai/panties")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pussy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/🍑Hentai/pussy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "school":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../routes/🍑Hentai/school")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "succubus":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../routes/🍑Hentai/succubus")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "tentacles":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../routes/🍑Hentai/tentacles")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "thighs":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../routes/🍑Hentai/thighs")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../routes/🍑Hentai/uglyBastard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "uniform":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../routes/🍑Hentai/uniform")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "yuri":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../routes/🍑Hentai/yuri")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../routes/🍑Hentai/zettaiRyouiki")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../routes/👅NSFW/4k")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../routes/👅NSFW/bimbofetish")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../routes/👅NSFW/blowjobs")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../routes/👅NSFW/bonermaterial")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../routes/👅NSFW/breedingmaterial")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "canthold":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../routes/👅NSFW/canthold")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../routes/👅NSFW/christiangirls")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "cum":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../routes/👅NSFW/cum")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "cumslut":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../routes/👅NSFW/cumslut")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../routes/👅NSFW/dirtygaming")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "distension":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../routes/👅NSFW/distension")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../routes/👅NSFW/exxxtras")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "femalepov":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../routes/👅NSFW/femalepov")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../routes/👅NSFW/gifsofremoval")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../routes/👅NSFW/hotstuffnsfw")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../routes/👅NSFW/iwanttofuckher")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../routes/👅NSFW/justhotwomen")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "lactating":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../routes/👅NSFW/lactating")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "milf":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../routes/👅NSFW/milf")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "milk":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../routes/👅NSFW/milk")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "milking":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../routes/👅NSFW/milking")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../routes/👅NSFW/nostalgiafapping")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../routes/👅NSFW/nsfw")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../routes/👅NSFW/nsfw2")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../routes/👅NSFW/nsfw411")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "nudes":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../routes/👅NSFW/nudes")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../routes/👅NSFW/omgbeckylookathiscock")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          update,
          store
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "pussy":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../routes/👅NSFW/pussy")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "realgirls":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../routes/👅NSFW/realgirls")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../routes/👅NSFW/sexybutnotporn")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../routes/👅NSFW/sexygirls")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "slut":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../routes/👅NSFW/slut")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../routes/👅NSFW/stripgirls")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../routes/👅NSFW/toocuteforporn")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "truefmk":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../routes/👅NSFW/truefmk")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../routes/👅NSFW/uncommonposes")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/ban")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "join":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/join")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "leave":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/leave")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "reboot":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/reboot")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/rules")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "unban":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/unban")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
    case "verify":
      require("./dboard")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../routes/🍁ᴏᴡɴᴇʀ/verify")(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          ꪜᴏxʙᴏᴛ.isSudoWorker
        );
        updatedb.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await ꪜᴏxʙᴏᴛ.imgB(
        ꪜᴏxʙᴏᴛ,
        ᴠᴏxᴄ,
        `*😥Sorry:* @${ꪜᴏxʙᴏᴛ.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./src/404.jpg"
      );
      break;
  }
};
