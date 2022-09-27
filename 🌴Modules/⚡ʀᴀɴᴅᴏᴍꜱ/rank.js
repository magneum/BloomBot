("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../../🤖Utilities/Settings");
let {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let Levels = require("discord-xp");
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let randomMC = require("random-material-color");
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
var color = randomMC.getColor();
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.rank = async (
  ӄryӄnz,
  Vlkyre,
  pushName,
  F𝖚𝖑𝖑_A𝖗𝖌𝖘,
  quoted,
  isMedia,
  isGroup,
  isBotAdmin,
  isSenderAdmin,
  isSenderTUF,
  commandName,
  body
) => {
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  const user = await Levels.fetch(Vlkyre.sender, Vlkyre.chatID, true);
  if (!user) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄryӄnz,
      Vlkyre,
      `*❌ERROR:* Seems like you have no rank XP for this chat.
Try to talk more and check if autorank is turned on.`
    );
  }
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  const levelRole = user.level;
  var role = `Warrior`;
  if (levelRole <= 2) {
    var role = `Elite III`;
  } else if (levelRole <= 4) {
    var role = `Elite II`;
  } else if (levelRole <= 6) {
    var role = `Elite I`;
  } else if (levelRole <= 8) {
    var role = `Master IV`;
  } else if (levelRole <= 10) {
    var role = `Master III`;
  } else if (levelRole <= 12) {
    var role = `Master II`;
  } else if (levelRole <= 14) {
    var role = `Master I`;
  } else if (levelRole <= 16) {
    var role = `Grandmaster V`;
  } else if (levelRole <= 18) {
    var role = `Grandmaster IV`;
  } else if (levelRole <= 20) {
    var role = `Grandmaster III`;
  } else if (levelRole <= 22) {
    var role = `Grandmaster II`;
  } else if (levelRole <= 24) {
    var role = `Grandmaster I`;
  } else if (levelRole <= 26) {
    var role = `Epic V`;
  } else if (levelRole <= 28) {
    var role = `Epic IV`;
  } else if (levelRole <= 30) {
    var role = `Epic III`;
  } else if (levelRole <= 32) {
    var role = `Epic II`;
  } else if (levelRole <= 34) {
    var role = `Epic I`;
  } else if (levelRole <= 36) {
    var role = `Legend V`;
  } else if (levelRole <= 38) {
    var role = `Legend IV`;
  } else if (levelRole <= 40) {
    var role = `Legend III`;
  } else if (levelRole <= 42) {
    var role = `Legend II`;
  } else if (levelRole <= 44) {
    var role = `Legend I`;
  } else if (levelRole <= 46) {
    var role = `Mythic`;
  } else if (levelRole <= 50) {
    var role = `Mythic Glory`;
  }
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  var աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
  let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
  try {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄryӄnz.profilePictureUrl(Vlkyre.chatID, `image`);
  } catch {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `./👗Skins/Vlkyre.png`;
  }
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  var expFile = `./Vlkyre🎒Bag/${Date.now()}r${Vlkyre.key.id}.png`;
  try {
    var ResGot = await fetch(
      global.API("https://wall.alphacoders.com/api2.0", "/get.php", {
        auth: "3e7756c85df54b78f934a284c11abe4e",
        method: "search",
        term: "anime landscape",
      })
    );
    var Bson = await ResGot.json();
    var ImgBson =
      Bson.wallpapers[Math.floor(Math.random() * Bson.wallpapers.length)];
    Img = ImgBson.url_image;
  } catch {
    Img = "https://i.postimg.cc/Kc65RLnX/Full.png";
  }
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  let rank = new canvacord.Rank()
    .setAvatar(𝕻𝕻𝖑𝖊𝖙𝖊𝖗)
    .setCurrentXP(user.xp)
    .setRequiredXP(Levels.xpFor(user.level + 1))
    .setRank(user.position)
    .setLevel(user.level)
    .setStatus("online")
    .setBackground("IMAGE", Img)
    .setProgressBar(color, "COLOR")
    .setUsername("Ranker!")
    .setDiscriminator(աɦօֆɛ);
  return await rank.build().then(async (data) => {
    fs.writeFile(expFile, data, async (error) => {
      if (error) return Caught(ӄryӄnz, Vlkyre, error);
      await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
      await ӄryӄnz
        .sendMessage(
          Vlkyre.chatID,
          {
            contextInfo: { mentionedJid: [Vlkyre.sender] },
            image: { url: expFile },
            caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Vlkyre.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
╚═══════╝


💡𝐈𝐧𝐟𝐨: _Here Is Your Rank Card!_  
*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*`,

            footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n_ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™_",
            buttons: [
              {
                buttonId: prefix + "rank",
                buttonText: { displayText: prefix + "rank" },
                type: 1,
              },
            ],
            headerType: 4,
          },
          {
            quoted: Vlkyre,
          }
        )
        .catch((e) => Caught(ӄryӄnz, Vlkyre, e));
    });
  });
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
