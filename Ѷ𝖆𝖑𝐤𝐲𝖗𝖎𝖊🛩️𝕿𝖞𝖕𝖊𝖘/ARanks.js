("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
var randomMC = require("random-material-color");
let canvacord = require("canvacord");
let Levels = require("discord-xp");
let fetch = require("node-fetch");
var color = randomMC.getColor();
let fs = require(`fs`);
Levels.setURL(MONGOOSE);
exports.ARanks = async (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ӄ𝖚𝖓𝖆𝖎, Caught) => {
  let randomXp = Math.floor(Math.random() * 3) + 1;
  let user = await Levels.fetch(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, true);
  if (!user) {
    await Levels.createUser(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
    await Levels.setLevel(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, 1);
    await Levels.setXp(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, 1);
  }
  let hasLeveledUp = await Levels.appendXp(
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
    randomXp
  );

  if (hasLeveledUp) {
    await Levels.setLevel(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, user.level + 1);
    let levelRole = user.level;
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
    var աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
    let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, `image`);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`;
    }
    var expFile = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${Date.now()}r${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.png`;
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
        if (error) return Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, error);
        await ӄ𝖚𝖓𝖆𝖎.sendPresenceUpdate("composing", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
        await ӄ𝖚𝖓𝖆𝖎
          .sendMessage(
            Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
            {
              contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
              image: { url: expFile },
              caption: `┌─「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
├• ɴᴀᴍᴇ: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
└────────────────◇


* LEVEL UP! *
Congrats!! 🎉🎉

*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*`,

              footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\n_ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™_",
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
              quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
            }
          )
          .catch((e) => Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e));
        return fs.unlinkSync(expFile);
      });
    });
  }
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
