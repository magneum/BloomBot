<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (WhatsBot, voxchat, update, store) => {
  let gmeta = voxchat.isGroup
    ? await WhatsBot.groupMetadata(voxchat.chat).catch((error) => {})
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (voxbot, voxchat, update, store) => {
  let gmeta = voxchat.isGroup
    ? await voxbot.groupMetadata(voxchat.chat).catch((error) => {})
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    : "";
  let groupName = voxchat.isGroup ? gmeta.subject : "";
  let participants = voxchat.isGroup ? await gmeta.participants : "";
  let groupAdmins = voxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = voxchat.isGroup ? gmeta.owner : "";
  let isBotAdmin = voxchat.isGroup
<<<<<<< HEAD
    ? groupAdmins.includes(await WhatsBot.decodeJid(WhatsBot.user.id))
=======
    ? groupAdmins.includes(await voxbot.decodeJid(voxbot.user.id))
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    : false;
  let isAdmin = voxchat.isGroup ? groupAdmins.includes(voxchat.sender) : false;

  let vbody =
    voxchat.mtype === "conversation"
      ? voxchat.message.conversation
      : voxchat.mtype == "imageMessage"
      ? voxchat.message.imageMessage.caption
      : voxchat.mtype == "videoMessage"
      ? voxchat.message.videoMessage.caption
      : voxchat.mtype == "extendedTextMessage"
      ? voxchat.message.extendedTextMessage.text
      : voxchat.mtype == "buttonsResponseMessage"
      ? voxchat.message.buttonsResponseMessage.selectedButtonId
      : voxchat.mtype == "listResponseMessage"
      ? voxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : voxchat.mtype == "templateButtonReplyMessage"
      ? voxchat.message.templateButtonReplyMessage.selectedId
      : voxchat.mtype === "messageContextInfo"
      ? voxchat.message.buttonsResponseMessage?.selectedButtonId ||
        voxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        voxchat.text
      : "";
  var vcommand = vbody
<<<<<<< HEAD
    .replace(WhatsBot.prefix, "")
=======
    .replace(voxbot.prefix, "")
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
<<<<<<< HEAD
    "\n◎✕———————————————————————✕ WhatsBot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    WhatsBot.chalk.blueBright("🖊️COMMANDS: "),
    WhatsBot.chalk.green(vcommand)
  );
  console.log(
    WhatsBot.chalk.blueBright("🖊️MESSAGE: "),
    WhatsBot.chalk.green(vbody)
  );
  console.log(
    WhatsBot.chalk.blueBright("❣️USER_NAME: "),
    WhatsBot.chalk.green(WhatsBot.pushname)
  );
  console.log(
    WhatsBot.chalk.blueBright("📱USER_NUMBER: "),
    WhatsBot.chalk.green(voxchat.sender)
  );
  console.log(
    WhatsBot.chalk.blueBright("💬CHAT_Id: "),
    WhatsBot.chalk.green(voxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ WhatsBot by magneum ✕———————————————————————✕◎\n"
=======
    "\n◎✕———————————————————————✕ voxbot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    voxbot.chalk.blueBright("🖊️COMMANDS: "),
    voxbot.chalk.green(vcommand)
  );
  console.log(
    voxbot.chalk.blueBright("🖊️MESSAGE: "),
    voxbot.chalk.green(vbody)
  );
  console.log(
    voxbot.chalk.blueBright("❣️USER_NAME: "),
    voxbot.chalk.green(voxbot.pushname)
  );
  console.log(
    voxbot.chalk.blueBright("📱USER_NUMBER: "),
    voxbot.chalk.green(voxchat.sender)
  );
  console.log(
    voxbot.chalk.blueBright("💬CHAT_Id: "),
    voxbot.chalk.green(voxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ voxbot by magneum ✕———————————————————————✕◎\n"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "dashboard":
    case "Dashboard":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "neko":
    case "sneko":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "shinobu":
    case "sshinobu":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "megumin":
    case "smegumin":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "awoo":
    case "sawoo":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "sglomp":
    case "glomp":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "shandhold":
    case "handhold":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;

    case "sbite":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "tts":
    case "talktospeech":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    case "bal":
    case "gold":
    case "money":
    case "balance":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "dly":
    case "daily":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "job":
    case "work":
    case "earn":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "reddit":
    case "subreddit":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "google":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "google":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "group":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "group":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../models/🔰Group/antinsfw")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../models/🔰Group/antinsfw")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../models/🍑Hentai/foxgirl")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "school":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../models/🍑Hentai/foxgirl")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "school":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          update,
          store
        );
<<<<<<< HEAD
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(WhatsBot, voxchat, update, store);
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          WhatsBot,
=======
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(voxbot, voxchat, update, store);
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "bcgroup":
    case "broadcast":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "join":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "join":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      });
      break;
    case "rule":
    case "rules":
<<<<<<< HEAD
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          WhatsBot,
=======
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(WhatsBot, voxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          WhatsBot,
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(voxbot, voxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
<<<<<<< HEAD
          WhatsBot.isSudo
        );
        updatedb.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await WhatsBot.imagebutton(
        WhatsBot,
        voxchat,
        `*😥Apologies:* @${WhatsBot.Tname}
=======
          voxbot.isSudo
        );
        updatedb.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await voxbot.imagebutton(
        voxbot,
        voxchat,
        `*😥Apologies:* @${voxbot.Tname}
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./public/404.jpg"
      );
      break;
  }
};
