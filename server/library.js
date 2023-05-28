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
module.exports = async (whatsbot, voxchat, update, store) => {
  let gmeta = voxchat.isGroup
    ? await whatsbot.groupMetadata(voxchat.chat).catch((error) => {})
    : "";
  let groupName = voxchat.isGroup ? gmeta.subject : "";
  let participants = voxchat.isGroup ? await gmeta.participants : "";
  let groupAdmins = voxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let groupOwner = voxchat.isGroup ? gmeta.owner : "";
  let isBotAdmin = voxchat.isGroup
    ? groupAdmins.includes(await whatsbot.decodeJid(whatsbot.user.id))
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
    whatsbot.chalk.green(voxchat.sender)
  );
  console.log(
    whatsbot.chalk.blueBright("💬CHAT_Id: "),
    whatsbot.chalk.green(voxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ whatsbot by magneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
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
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;

    case "sbite":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "google":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "group":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "antinsfw":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.antinsfw = updatedb.antinsfw + 1;
        require("../models/🔰Group/antinsfw")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "foxgirl":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.foxgirl = updatedb.foxgirl + 1;
        require("../models/🍑Hentai/foxgirl")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "school":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          whatsbot,
          voxchat,
          update,
          store
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(whatsbot, voxchat, update, store);
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "join":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(whatsbot, voxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          whatsbot,
          voxchat,
          gmeta,
          isAdmin,
          groupName,
          isBotAdmin,
          groupAdmins,
          participants,
          whatsbot.isSudo
        );
        updatedb.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await whatsbot.imagebutton(
        whatsbot,
        voxchat,
        `*😥Apologies:* @${whatsbot.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        "./public/404.jpg"
      );
      break;
  }
};
