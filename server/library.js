//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (FoxBot, Foxchat, update, store) => {
  var gmeta = Foxchat.isGroup
    ? await FoxBot.groupMetadata(Foxchat.chat).catch((error) => {})
    : "";
  var groupName = Foxchat.isGroup ? gmeta.subject : "";
  var participants = Foxchat.isGroup ? await gmeta.participants : "";
  var groupAdmins = Foxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  var groupOwner = Foxchat.isGroup ? gmeta.owner : "";
  var isBotAdmin = Foxchat.isGroup
    ? groupAdmins.includes(await FoxBot.decodeJid(FoxBot.user.id))
    : false;
  var isAdmin = Foxchat.isGroup
    ? groupAdmins.includes(Foxchat.sender)
    : false;

  var vbody =
    Foxchat.mtype === "conversation"
      ? Foxchat.message.conversation
      : Foxchat.mtype == "imageMessage"
      ? Foxchat.message.imageMessage.caption
      : Foxchat.mtype == "videoMessage"
      ? Foxchat.message.videoMessage.caption
      : Foxchat.mtype == "extendedTextMessage"
      ? Foxchat.message.extendedTextMessage.text
      : Foxchat.mtype == "buttonsResponseMessage"
      ? Foxchat.message.buttonsResponseMessage.selectedButtonId
      : Foxchat.mtype == "listResponseMessage"
      ? Foxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Foxchat.mtype == "templateButtonReplyMessage"
      ? Foxchat.message.templateButtonReplyMessage.selectedId
      : Foxchat.mtype === "messageContextInfo"
      ? Foxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Foxchat.message.listResponseMessage?.singleSelectReply
          .selectedRowId ||
        Foxchat.text
      : "";
  var vcommand = vbody
    .replace(FoxBot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ FoxBot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    FoxBot.chalk.blueBright("🖊️COMMANDS: "),
    FoxBot.chalk.green(vcommand)
  );
  console.log(
    FoxBot.chalk.blueBright("🖊️MESSAGE: "),
    FoxBot.chalk.green(vbody)
  );
  console.log(
    FoxBot.chalk.blueBright("❣️USER_NAME: "),
    FoxBot.chalk.green(FoxBot.pushname)
  );
  console.log(
    FoxBot.chalk.blueBright("📱USER_NUMBER: "),
    FoxBot.chalk.green(Foxchat.sender)
  );
  console.log(
    FoxBot.chalk.blueBright("💬CHAT_Id: "),
    FoxBot.chalk.green(Foxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ FoxBot by magneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;

    case "sbite":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "rouvarte":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "google":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "group":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../models/🔰Group/antinsfw")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../models/🍑Hentai/foxgirl")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "school":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(FoxBot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(
          FoxBot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "join":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(FoxBot, Foxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          FoxBot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          FoxBot.isSudo
        );
        updatedb
          .save()
          .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await FoxBot.imagebutton(
        FoxBot,
        Foxchat,
        `*😥Apologies:* @${FoxBot.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./public/FoxBot.png"
      );
      break;
  }
};
