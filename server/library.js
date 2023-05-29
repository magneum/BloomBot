//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  var gmeta = Voxchat.isGroup
    ? await Voxbot.groupMetadata(Voxchat.chat).catch((error) => {})
    : "";
  var groupName = Voxchat.isGroup ? gmeta.subject : "";
  var participants = Voxchat.isGroup ? await gmeta.participants : "";
  var groupAdmins = Voxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  var groupOwner = Voxchat.isGroup ? gmeta.owner : "";
  var isbotAdmin = Voxchat.isGroup
    ? groupAdmins.includes(await Voxbot.decodeJid(Voxbot.user.id))
    : false;
  var isAdmin = Voxchat.isGroup ? groupAdmins.includes(Voxchat.sender) : false;

  var vbody =
    Voxchat.mtype === "conversation"
      ? Voxchat.message.conversation
      : Voxchat.mtype == "imageMessage"
      ? Voxchat.message.imageMessage.caption
      : Voxchat.mtype == "videoMessage"
      ? Voxchat.message.videoMessage.caption
      : Voxchat.mtype == "extendedTextMessage"
      ? Voxchat.message.extendedTextMessage.text
      : Voxchat.mtype == "buttonsResponseMessage"
      ? Voxchat.message.buttonsResponseMessage.selectedButtonId
      : Voxchat.mtype == "listResponseMessage"
      ? Voxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Voxchat.mtype == "templateButtonReplyMessage"
      ? Voxchat.message.templateButtonReplyMessage.selectedId
      : Voxchat.mtype === "messageContextInfo"
      ? Voxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Voxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Voxchat.text
      : "";
  var vcommand = vbody
    .replace(Voxbot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ Voxbot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    Voxbot.chalk.blueBright("🖊️COMMANDS: "),
    Voxbot.chalk.green(vcommand)
  );
  console.log(
    Voxbot.chalk.blueBright("🖊️MESSAGE: "),
    Voxbot.chalk.green(vbody)
  );
  console.log(
    Voxbot.chalk.blueBright("❣️USER_NAME: "),
    Voxbot.chalk.green(Voxbot.pushname)
  );
  console.log(
    Voxbot.chalk.blueBright("📱USER_NUMBER: "),
    Voxbot.chalk.green(Voxchat.sender)
  );
  console.log(
    Voxbot.chalk.blueBright("💬CHAT_Id: "),
    Voxbot.chalk.green(Voxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ Voxbot by magneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("@/routes/⚙️System/help")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("@/routes/⚙️System/dashboard")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("@/routes/📥Downloader/ytaudio")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("@/routes/🐉Emotions/bite")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("@/routes/🐉Emotions/blush")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("@/routes/🐉Emotions/bonk")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("@/routes/🐉Emotions/bored")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("@/routes/🐉Emotions/confused")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("@/routes/🐉Emotions/cry")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("@/routes/🐉Emotions/cuddle")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("@/routes/🐉Emotions/dance")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("@/routes/🐉Emotions/goodnight")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("@/routes/🐉Emotions/happy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("@/routes/🐉Emotions/highfive")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("@/routes/🐉Emotions/hug")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("@/routes/🐉Emotions/kill")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("@/routes/🐉Emotions/kiss")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("@/routes/🐉Emotions/nervous")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("@/routes/🐉Emotions/pat")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("@/routes/🐉Emotions/poke")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("@/routes/🐉Emotions/punch")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("@/routes/🐉Emotions/sad")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("@/routes/🐉Emotions/scream")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("@/routes/🐉Emotions/slap")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("@/routes/🐉Emotions/smile")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("@/routes/🐉Emotions/stare")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("@/routes/🐉Emotions/wave")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("@/routes/🐉Emotions/wink")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("@/routes/🐉Emotions/yeet")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("@/routes/🐉Emotions/yes")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("@/routes/💗Commands/nsfwlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("@/routes/💗Commands/sfwlist")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("@/routes/💗Commands/animationlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("@/routes/💗Commands/audiofilterlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("@/routes/💗Commands/conversionlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("@/routes/💗Commands/downloadlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("@/routes/💗Commands/gameslist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("@/routes/💗Commands/grouplist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("@/routes/💗Commands/hentailist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("@/routes/💗Commands/ownerlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("@/routes/💗Commands/photolist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("@/routes/💗Commands/searchlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("@/routes/💗Commands/ytfilterlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("@/routes/📢aFilter/bassboost")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("@/routes/📢aFilter/echo")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("@/routes/📢aFilter/flanger")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("@/routes/📢aFilter/nightcore")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("@/routes/📢aFilter/phaser")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("@/routes/📢aFilter/reverse")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("@/routes/📢aFilter/slow")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("@/routes/📢aFilter/speed")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("@/routes/📢aFilter/subboost")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("@/routes/📢aFilter/superslow")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("@/routes/📢aFilter/superspeed")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("@/routes/📢aFilter/surround")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("@/routes/📢aFilter/vaporwave")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("@/routes/📢aFilter/vibrato")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("@/routes/📢aFilter/panning")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("@/routes/⭕YTFilter/ytbassboost")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("@/routes/⭕YTFilter/ytecho")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("@/routes/⭕YTFilter/ytflanger")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("@/routes/⭕YTFilter/ytnightcore")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("@/routes/⭕YTFilter/ytphaser")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("@/routes/⭕YTFilter/ytreverse")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("@/routes/⭕YTFilter/ytslow")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("@/routes/⭕YTFilter/ytspeed")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("@/routes/⭕YTFilter/ytsubboost")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("@/routes/⭕YTFilter/ytsuperslow")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("@/routes/⭕YTFilter/ytsuperspeed")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("@/routes/⭕YTFilter/ytsurround")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("@/routes/⭕YTFilter/ytvaporwave")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("@/routes/⭕YTFilter/ytvibrato")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("@/routes/⭕YTFilter/ytpanning")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("@/routes/🦄SFW/swaifu")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("@/routes/🦄SFW/sneko")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("@/routes/🦄SFW/sshinobu")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("@/routes/🦄SFW/smegumin")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("@/routes/🦄SFW/sawoo")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("@/routes/🦄SFW/sglomp")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("@/routes/🦄SFW/shandhold")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;

    case "sbite":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("@/routes/🦄SFW/sbite")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("@/routes/🦄SFW/sblush")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("@/routes/🦄SFW/sbonk")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("@/routes/🦄SFW/sbully")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("@/routes/🦄SFW/scringe")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("@/routes/🦄SFW/scry")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("@/routes/🦄SFW/scuddle")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("@/routes/🦄SFW/sdance")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("@/routes/🦄SFW/shappy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("@/routes/🦄SFW/shighfive")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("@/routes/🦄SFW/shug")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("@/routes/🦄SFW/skick")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("@/routes/🦄SFW/skill")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("@/routes/🦄SFW/skiss")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("@/routes/🦄SFW/slick")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("@/routes/🦄SFW/snom")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("@/routes/🦄SFW/spat")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("@/routes/🦄SFW/spoke")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("@/routes/🦄SFW/sslap")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("@/routes/🦄SFW/ssmile")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("@/routes/🦄SFW/ssmug")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("@/routes/🦄SFW/swave")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("@/routes/🦄SFW/swink")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("@/routes/🦄SFW/syeet")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("@/routes/📼Conversion/sticker")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("@/routes/📼Conversion/tinyurl")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("@/routes/📼Conversion/toimg")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("@/routes/📼Conversion/tourl")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("@/routes/📼Conversion/carbon")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("@/routes/📼Conversion/ship")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("@/routes/📼Conversion/tts")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("@/routes/💰Games/balance")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("@/routes/💰Games/buy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("@/routes/💰Games/daily")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("@/routes/💰Games/fish")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "rouvarte":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("@/routes/💰Games/gamble")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("@/routes/💰Games/pay")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("@/routes/💰Games/rob")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("@/routes/💰Games/inv")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("@/routes/💰Games/store")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("@/routes/💰Games/work")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("@/routes/💰Games/zoo")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("@/routes/🖼️Photogenic/unsplash")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("@/routes/🖼️Photogenic/pinterest")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("@/routes/🖼️Photogenic/wallpaper")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("@/routes/🔎Searches/advice")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("@/routes/🔎Searches/fact")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("@/routes/🔎Searches/meme")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("@/routes/🔎Searches/quote")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("@/routes/🔎Searches/joke")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("@/routes/🔎Searches/anime")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("@/routes/🔎Searches/manga")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "google":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("@/routes/🔎Searches/google")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("@/routes/🔎Searches/chordlist")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("@/routes/🔎Searches/getChord")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("@/routes/🔎Searches/pokedex")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("@/routes/🔎Searches/gify")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("@/routes/🔎Searches/lyrics")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("@/routes/🔎Searches/ytsearch")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("@/routes/🔎Searches/instagram")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("@/routes/🔰Group/demote")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "group":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("@/routes/🔰Group/group")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("@/routes/🔰Group/promote")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("@/routes/🔰Group/kick")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("@/routes/🔰Group/setdesc")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("@/routes/🔰Group/seticon")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("@/routes/🔰Group/tagall")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("@/routes/🔰Group/antilink")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "allownsfw":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.allownsfw = updatedb.allownsfw + 1;
        require("@/routes/🔰Group/allownsfw")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("@/routes/🍑Hentai/ass")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("@/routes/🍑Hentai/bdsm")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("@/routes/🍑Hentai/blowjob")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("@/routes/🍑Hentai/cum")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("@/routes/🍑Hentai/doujin")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("@/routes/🍑Hentai/feet")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("@/routes/🍑Hentai/femdom")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "Voxgirl":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.Voxgirl = updatedb.Voxgirl + 1;
        require("@/routes/🍑Hentai/Voxgirl")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("@/routes/🍑Hentai/glasses")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("@/routes/🍑Hentai/hentai")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("@/routes/🍑Hentai/maid")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("@/routes/🍑Hentai/masturbation")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("@/routes/🍑Hentai/netorare")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("@/routes/🍑Hentai/orgy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("@/routes/🍑Hentai/panties")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("@/routes/🍑Hentai/pussy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "school":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("@/routes/🍑Hentai/school")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("@/routes/🍑Hentai/succubus")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("@/routes/🍑Hentai/tentacles")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("@/routes/🍑Hentai/thighs")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("@/routes/🍑Hentai/uglyBastard")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("@/routes/🍑Hentai/uniform")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("@/routes/🍑Hentai/yuri")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("@/routes/🍑Hentai/zettaiRyouiki")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("@/routes/👅NSFW/4k")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("@/routes/👅NSFW/bimbofetish")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("@/routes/👅NSFW/blowjobs")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("@/routes/👅NSFW/bonermaterial")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("@/routes/👅NSFW/breedingmaterial")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("@/routes/👅NSFW/canthold")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("@/routes/👅NSFW/christiangirls")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("@/routes/👅NSFW/cum")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("@/routes/👅NSFW/cumslut")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("@/routes/👅NSFW/dirtygaming")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("@/routes/👅NSFW/distension")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("@/routes/👅NSFW/exxxtras")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("@/routes/👅NSFW/femalepov")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("@/routes/👅NSFW/gifsofremoval")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("@/routes/👅NSFW/hotstuffnsfw")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("@/routes/👅NSFW/iwanttofuckher")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("@/routes/👅NSFW/justhotwomen")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("@/routes/👅NSFW/lactating")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("@/routes/👅NSFW/milf")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("@/routes/👅NSFW/milk")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("@/routes/👅NSFW/milking")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("@/routes/👅NSFW/nostalgiafapping")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("@/routes/👅NSFW/nsfw")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("@/routes/👅NSFW/nsfw2")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("@/routes/👅NSFW/nsfw411")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("@/routes/👅NSFW/nudes")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("@/routes/👅NSFW/omgbeckylookathiscock")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("@/routes/👅NSFW/pussy")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("@/routes/👅NSFW/realgirls")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("@/routes/👅NSFW/sexybutnotporn")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("@/routes/👅NSFW/sexygirls")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("@/routes/👅NSFW/slut")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("@/routes/👅NSFW/stripgirls")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("@/routes/👅NSFW/toocuteforporn")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("@/routes/👅NSFW/truefmk")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("@/routes/👅NSFW/uncommonposes")(
          Voxbot,
          Voxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/ban")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/broadcast")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "join":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/join")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/leave")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/reboot")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/rules")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/unban")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(Voxbot, Voxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("@/routes/🍁ᴏᴡɴᴇʀ/verify")(
          Voxbot,
          Voxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Voxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Voxbot.handlerror(Voxbot, Voxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await Voxbot.imagebutton(
        Voxbot,
        Voxchat,
        `⚠️ *Apologies* ⚠️

@${Voxbot.Tname}, it seems that command doesn't exist.
For more information, please visit: _bit.ly/magneum_`,
        Voxbot.display
      );
      break;
  }
};
