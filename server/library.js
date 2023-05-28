//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (whatsbot, whatschat, update, store) => {
  let gmeta = whatschat.isGroup
    ? await whatsbot.groupMetadata(whatschat.chat).catch((error) => {})
    : "";
  let groupName = whatschat.isGroup ? gmeta.subject : "";
  let participants = whatschat.isGroup ? await gmeta.participants : "";
  let groupAdmins = whatschat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = whatschat.isGroup ? gmeta.owner : "";
  let isBotAdmin = whatschat.isGroup
    ? groupAdmins.includes(await whatsbot.decodeJid(whatsbot.user.id))
    : false;
  let isAdmin = whatschat.isGroup ? groupAdmins.includes(whatschat.sender) : false;

  let vbody =
    whatschat.mtype === "conversation"
      ? whatschat.message.conversation
      : whatschat.mtype == "imageMessage"
      ? whatschat.message.imageMessage.caption
      : whatschat.mtype == "videoMessage"
      ? whatschat.message.videoMessage.caption
      : whatschat.mtype == "extendedTextMessage"
      ? whatschat.message.extendedTextMessage.text
      : whatschat.mtype == "buttonsResponseMessage"
      ? whatschat.message.buttonsResponseMessage.selectedButtonId
      : whatschat.mtype == "listResponseMessage"
      ? whatschat.message.listResponseMessage.singleSelectReply.selectedRowId
      : whatschat.mtype == "templateButtonReplyMessage"
      ? whatschat.message.templateButtonReplyMessage.selectedId
      : whatschat.mtype === "messageContextInfo"
      ? whatschat.message.buttonsResponseMessage?.selectedButtonId ||
        whatschat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        whatschat.text
      : "";
  var vcommand = vbody
    .replace(whatsbot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ whatsbot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    whatsbot.chalk.blueBright("🖊️COMMANDS: "),
    whatsbot.chalk.green(vcommand)
  );
  console.log(
    whatsbot.chalk.blueBright("🖊️MESSAGE: "),
    whatsbot.chalk.green(vbody)
  );
  console.log(
    whatsbot.chalk.blueBright("❣️USER_NAME: "),
    whatsbot.chalk.green(whatsbot.pushname)
  );
  console.log(
    whatsbot.chalk.blueBright("📱USER_NUMBER: "),
    whatsbot.chalk.green(whatschat.sender)
  );
  console.log(
    whatsbot.chalk.blueBright("💬CHAT_Id: "),
    whatsbot.chalk.green(whatschat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ whatsbot by magneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "blush":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bonk":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bored":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "confused":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "cry":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "dance":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "happy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "highfive":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "hug":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "kill":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "kiss":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nervous":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pat":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "poke":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "punch":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sad":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "scream":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "slap":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "smile":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "stare":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "wave":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "wink":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "yeet":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "yes":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "photolist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "echo":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "flanger":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "phaser":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "reverse":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "slow":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "speed":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "subboost":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "superslow":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "surround":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "panning":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;

    case "sbite":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sblush":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sbully":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "scringe":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "scry":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sdance":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "shappy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "shug":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "skick":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "skill":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "skiss":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "slick":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "snom":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "spat":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "spoke":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sslap":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "swave":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "swink":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "syeet":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "toimg":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "tourl":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "carbon":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ship":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "buy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "fact":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "meme":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "quote":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "anime":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "manga":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "google":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "getChord":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "gify":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "instagram":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "group":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "promote":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "kick":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "seticon":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "tagall":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../models/🔰Group/antinsfw")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "cum":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "doujin":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "feet":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "femdom":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../models/🍑Hentai/foxgirl")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "glasses":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "hentai":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "maid":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "netorare":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "orgy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "panties":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pussy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "school":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "succubus":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "thighs":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "uniform":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "yuri":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "canthold":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "cum":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "distension":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "lactating":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "milf":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "milk":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "milking":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "nudes":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          whatsbot,
          whatschat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "pussy":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "slut":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(whatsbot, whatschat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "join":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "leave":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "reboot":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "unban":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
    case "verify":
      require("./dboard")(whatsbot, whatschat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          whatsbot,
          whatschat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, whatschat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await whatsbot.imagebutton(
        whatsbot,
        whatschat,
        `*😥Apologies:* @${whatsbot.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./public/404.png"
      );
      break;
  }
};
