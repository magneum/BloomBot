("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../global.js");
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  require("./graphine")(νℓкуяє, vcнaт, update, store);
  require("./kronLink")(νℓкуяє, vcнaт, update, store);
  if (vcнaт.isGroup && νℓкуяє.command) {
    νℓкуяє.userBanCheck.findOne(
      {
        ID: vcнaт.sender,
      },
      (error, banCheck) => {
        if (error) {
          return νℓкуяє.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        νℓкуяє.userBanCheck.findOne(
          {
            ID: vcнaт.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return νℓкуяє.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
            if (groupCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
            await νℓкуяє.Ranker.findOne(
              {
                serverID: vcнaт.chat,
              },
              async (error, userRank) => {
                if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                if (!userRank) return;
                var { sendRanks } = require("../Enforcers/ranker");
                return sendRanks(νℓкуяє, vcнaт, update, store);
              }
            );

            await νℓкуяє.LinkList.findOne(
              {
                serverID: vcнaт.chat,
              },
              async (error, server) => {
                if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                if (!server) return;
                var { noLink } = require("../Enforcers/antilink");
                return noLink(νℓкуяє, vcнaт, update, store);
              }
            );

            ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            respA = await νℓкуяє.groupMetadata("120363020792949649@g.us");
            for (let i = 0; i < respA.participants.length; i++)
              νℓкуяє.memberRespA[i] = respA.participants[i].id;
            if (
              !νℓкуяє.fromMe &&
              !νℓкуяє.isModerator &&
              !νℓкуяє.letResp.includes(νℓкуяє.command) &&
              !νℓкуяє.memberRespA.includes(vcнaт.sender)
            ) {
              return await νℓкуяє.imgB(
                νℓкуяє,
                vcнaт,
                `*📢Verification Needed*
*😥Sorry:* _${νℓкуяє.pushname}_

*❌Error* 
> _You need to be verified to use bot..._
> _Press: https://bit.ly/krykenz_
`,
                "https://i.postimg.cc/G2YxctNp/Verity-Vlkyre.png"
              );
            }
            return require("./router")(νℓкуяє, vcнaт, update, store);
          }
        );
      }
    );
  }
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function router(νℓкуяє, vcнaт, update, store) {
  gmeta = vcнaт.isGroup
    ? await νℓкуяє.groupMetadata(vcнaт.chat).catch((error) => {})
    : "";
  groupName = vcнaт.isGroup ? gmeta.subject : "";
  participants = vcнaт.isGroup ? await gmeta.participants : "";
  groupAdmins = vcнaт.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  groupOwner = vcнaт.isGroup ? gmeta.owner : "";
  isBotAdmin = vcнaт.isGroup
    ? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
    : false;
  isAdmin = vcнaт.isGroup ? groupAdmins.includes(vcнaт.sender) : false;
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  switch (νℓкуяє.command) {
    case "vlkyre":
      await require("../Modular/vlkyre")(νℓкуяє, vcнaт);
      break;
    case "h":
    case "how":
    case "help":
    case "HELP":
    case "m":
    case "menu":
    case "allmenu":
    case "command":
    case "commands":
      await require("../Modular/help")(νℓкуяє, vcнaт);
      break;

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
      await require("../Modular/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(νℓкуяє, vcнaт);
      break;

    case "bite":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(νℓкуяє, vcнaт);
      break;
    case "blush":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(νℓкуяє, vcнaт);
      break;
    case "bonk":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(νℓкуяє, vcнaт);
      break;
    case "bored":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(νℓкуяє, vcнaт);
      break;
    case "confused":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(νℓкуяє, vcнaт);
      break;
    case "cry":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(νℓкуяє, vcнaт);
      break;
    case "cuddle":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(νℓкуяє, vcнaт);
      break;
    case "dance":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(νℓкуяє, vcнaт);
      break;
    case "goodnight":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(νℓкуяє, vcнaт);
      break;
    case "happy":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(νℓкуяє, vcнaт);
      break;
    case "highfive":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(νℓкуяє, vcнaт);
      break;
    case "hug":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(νℓкуяє, vcнaт);
      break;
    case "kick":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kick")(νℓкуяє, vcнaт);
      break;
    case "kill":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(νℓкуяє, vcнaт);
      break;
    case "kiss":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(νℓкуяє, vcнaт);
      break;
    case "nervous":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(νℓкуяє, vcнaт);
      break;
    case "pat":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(νℓкуяє, vcнaт);
      break;
    case "poke":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(νℓкуяє, vcнaт);
      break;
    case "punch":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(νℓкуяє, vcнaт);
      break;
    case "sad":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(νℓкуяє, vcнaт);
      break;
    case "scream":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(νℓкуяє, vcнaт);
      break;
    case "slap":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(νℓкуяє, vcнaт);
      break;
    case "smile":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(νℓкуяє, vcнaт);
      break;
    case "stare":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(νℓкуяє, vcнaт);
      break;
    case "wave":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(νℓкуяє, vcнaт);
      break;
    case "wink":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(νℓкуяє, vcнaт);
      break;
    case "yeet":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(νℓкуяє, vcнaт);
      break;
    case "yes":
      await require("../Modular/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(νℓкуяє, vcнaт);
      break;

    case "h.anime":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(νℓкуяє, vcнaт);
      break;
    case "h.download":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(νℓкуяє, vcнaт);
      break;
    case "h.filter":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(νℓкуяє, vcнaт);
      break;
    case "h.game":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(νℓкуяє, vcнaт);
      break;
    case "h.group":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(νℓкуяє, vcнaт);
      break;
    case "h.hentai":
      await require("../Bin/_hentai")(νℓкуяє, vcнaт);
      break;
    case "h.image":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(νℓкуяє, vcнaт);
      break;
    case "h.search":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(νℓкуяє, vcнaт);
      break;
    case "h.ytfilter":
      await require("../Modular/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(νℓкуяє, vcнaт);
      break;

    case "8d":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/8d")(νℓкуяє, vcнaт);
      break;
    case "bassboost":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(νℓкуяє, vcнaт);
      break;
    case "echo":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(νℓкуяє, vcнaт);
      break;
    case "flanger":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(νℓкуяє, vcнaт);
      break;
    case "nightcore":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(νℓкуяє, vcнaт);
      break;
    case "phaser":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(νℓкуяє, vcнaт);
      break;
    case "reverse":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(νℓкуяє, vcнaт);
      break;
    case "slow":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(νℓкуяє, vcнaт);
      break;
    case "speed":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(νℓкуяє, vcнaт);
      break;
    case "subboost":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(νℓкуяє, vcнaт);
      break;
    case "superslow":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(νℓкуяє, vcнaт);
      break;
    case "superspeed":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(νℓкуяє, vcнaт);
      break;
    case "surround":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(νℓкуяє, vcнaт);
      break;
    case "vaporwave":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(νℓкуяє, vcнaт);
      break;
    case "vibrato":
      await require("../Modular/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(νℓкуяє, vcнaт);
      break;

    case "yt8d":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/yt8d")(νℓкуяє, vcнaт);
      break;
    case "ytbassboost":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(νℓкуяє, vcнaт);
      break;
    case "ytecho":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(νℓкуяє, vcнaт);
      break;
    case "ytflanger":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(νℓкуяє, vcнaт);
      break;
    case "ytnightcore":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(νℓкуяє, vcнaт);
      break;
    case "ytphaser":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(νℓкуяє, vcнaт);
      break;
    case "ytreverse":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(νℓкуяє, vcнaт);
      break;
    case "ytslow":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(νℓкуяє, vcнaт);
      break;
    case "ytspeed":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(νℓкуяє, vcнaт);
      break;
    case "ytsubboost":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(νℓкуяє, vcнaт);
      break;
    case "ytsuperslow":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(νℓкуяє, vcнaт);
      break;
    case "ytsuperspeed":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(νℓкуяє, vcнaт);
      break;
    case "ytsurround":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(νℓкуяє, vcнaт);
      break;
    case "ytvaporwave":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(νℓкуяє, vcнaт);
      break;
    case "ytvibrato":
      await require("../Modular/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(νℓкуяє, vcнaт);
      break;

    case "s":
    case "sgif":
    case "sticker":
    case "stickergif":
      await require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(νℓкуяє, vcнaт);
      break;
    case "tinyurl":
      await require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(νℓкуяє, vcнaт);
      break;
    case "toimg":
      await require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(νℓкуяє, vcнaт);
      break;
    case "tourl":
      await require("../Modular/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(νℓкуяє, vcнaт);
      break;

    case "bal":
    case "gold":
    case "money":
    case "balance":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(νℓкуяє, vcнaт);
      break;
    case "buy":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(νℓкуяє, vcнaт);
      break;
    case "dly":
    case "daily":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(νℓкуяє, vcнaт);
      break;
    case "fish":
    case "pond":
    case "fishes":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(νℓкуяє, vcнaт);
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "roulette":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(νℓкуяє, vcнaт);
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/pay")(νℓкуяє, vcнaт);
      break;
    case "rob":
    case "thief":
    case "robbery":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/rob")(νℓкуяє, vcнaт);
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(νℓкуяє, vcнaт);
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(νℓкуяє, vcнaт);
      break;
    case "job":
    case "work":
    case "earn":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(νℓкуяє, vcнaт);
      break;
    case "zoo":
    case "forest":
    case "animals":
      await require("../Modular/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(νℓкуяє, vcнaт);
      break;

    case "gimage":
    case "image":
      await require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(νℓкуяє, vcнaт);
      break;
    case "neko":
      await require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(νℓкуяє, vcнaт);
      break;
    case "pin":
    case "pinterest":
      await require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(νℓкуяє, vcнaт);
      break;
    case "waifu":
      await require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(νℓкуяє, vcнaт);
      break;
    case "wallpaper":
      await require("../Modular/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(νℓкуяє, vcнaт);
      break;
    case "advice":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(νℓкуяє, vcнaт);
      break;
    case "fact":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(νℓкуяє, vcнaт);
      break;
    case "joke":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
      break;
    case "meme":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(νℓкуяє, vcнaт);
      break;
    case "quote":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(νℓкуяє, vcнaт);
      break;

    case "sr":
    case "reddit":
    case "subreddit":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(νℓкуяє, vcнaт);
      break;
    case "anime":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(νℓкуяє, vcнaт);
      break;
    case "manga":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(νℓкуяє, vcнaт);
      break;
    case "google":
      await require("../Modular/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(νℓкуяє, vcнaт);
      break;

    case "demote":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "group":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "promote":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "remove":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/remove")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "setdesc":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "seticon":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "tagall":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "autorank":
    case "autorole":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/autorank")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/antilink")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;
    case "bcg":
    case "bcgroup":
    case "broadcast":
      await require("../Modular/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/broadcast")(
        νℓкуяє,
        vcнaт,
        gmeta,
        isAdmin,
        groupName,
        isBotAdmin,
        groupAdmins,
        participants
      );
      break;

    default:
      await νℓкуяє.imgB(
        νℓкуяє,
        vcнaт,
        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No Such Command Found_
> Visit To Know Commands: _bit.ly/krykenz_`,
        "./Gallery/KryPage.png"
      );
      break;
  }
}
