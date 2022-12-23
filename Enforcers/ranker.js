await Ranker.findOne(
  {
    serverID: vcнaт.chat,
  },
  async (ᴇʀ, userRank) => {
    if (ᴇʀ) return Caught(νℓкуяє, νℓкуяє, ᴇʀ);
    if (!userRank) return;
    await sendRanks(νℓкуяє, νℓкуяє, Caught, νℓкуяє.A𝖗𝖌𝖘);
  }
);
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
exports.sendRanks = async (νℓкуяє, vcнaт) => {
  νℓкуяє.Levels.setURL(MONGO_URL);
  var color = νℓкуяє.randomMC.getColor();
  var randomXp = Math.floor(Math.random() * 3) + +10;
  var user = await νℓкуяє.Levels.νℓкуяє.fetch(νℓкуяє.sender, vcнaт.chat, true);
  if (!user) {
    await νℓкуяє.Levels.createUser(νℓкуяє.sender, vcнaт.chat);
    await νℓкуяє.Levels.setLevel(νℓкуяє.sender, vcнaт.chat, 1);
    await νℓкуяє.Levels.setXp(νℓкуяє.sender, vcнaт.chat, 1);
    return;
  }
  var hasLeveledUp = await νℓкуяє.Levels.appendXp(
    νℓкуяє.sender,
    vcнaт.chat,
    randomXp
  );
  if (hasLeveledUp) {
    var lvlRole = user.level;
    var role = "Warrior";
    var Amnt = 100;
    if (lvlRole <= 2) {
      var role = "Elite III";
      var Amnt = 150;
    } else if (lvlRole <= 4) {
      var role = "Elite II";
      var Amnt = 200;
    } else if (lvlRole <= 6) {
      var role = "Elite I";
      var Amnt = 250;
    } else if (lvlRole <= 8) {
      var role = "Master IV";
      var Amnt = 300;
    } else if (lvlRole <= 10) {
      var role = "Master III";
      var Amnt = 350;
    } else if (lvlRole <= 12) {
      var role = "Master II";
      var Amnt = 400;
    } else if (lvlRole <= 14) {
      var role = "Master I";
      var Amnt = 450;
    } else if (lvlRole <= 16) {
      var role = "Grandmaster V";
      var Amnt = 500;
    } else if (lvlRole <= 18) {
      var role = "Grandmaster IV";
      var Amnt = 550;
    } else if (lvlRole <= 20) {
      var role = "Grandmaster III";
      var Amnt = 600;
    } else if (lvlRole <= 22) {
      var role = "Grandmaster II";
      var Amnt = 650;
    } else if (lvlRole <= 24) {
      var role = "Grandmaster I";
      var Amnt = 700;
    } else if (lvlRole <= 26) {
      var role = "Epic V";
      var Amnt = 750;
    } else if (lvlRole <= 28) {
      var role = "Epic IV";
      var Amnt = 800;
    } else if (lvlRole <= 30) {
      var role = "Epic III";
      var Amnt = 850;
    } else if (lvlRole <= 32) {
      var role = "Epic II";
      var Amnt = 900;
    } else if (lvlRole <= 34) {
      var role = "Epic I";
      var Amnt = 950;
    } else if (lvlRole <= 36) {
      var role = "Legend V";
      var Amnt = 1000;
    } else if (lvlRole <= 38) {
      var role = "Legend IV";
      var Amnt = 1500;
    } else if (lvlRole <= 40) {
      var role = "Legend III";
      var Amnt = 2000;
    } else if (lvlRole <= 42) {
      var role = "Legend II";
      var Amnt = 2500;
    } else if (lvlRole <= 44) {
      var role = "Legend I";
      var Amnt = 3000;
    } else if (lvlRole <= 46) {
      var role = "Mythic";
      var Amnt = 4000;
    } else if (lvlRole <= 50) {
      var role = "Mythic Glory";
      var Amnt = 5000;
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    var expFile = `./Bin/${Date.now()}${νℓкуяє.key.id}.png`;
    var աɦօֆɛ = Math.floor(1000 + Math.random() * 9000);
    var 𝕯𝖎𝖘𝖕𝖑𝖆𝖞;
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(vcнaт.chat, `image`);
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = `./Gallery/νℓкуяє.png`;
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    try {
      var ResGot = await νℓкуяє.fetch(
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
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    var rank = new νℓкуяє.canvacord.Rank()
      .setAvatar(𝕯𝖎𝖘𝖕𝖑𝖆𝖞)
      .setCurrentXP(user.xp)
      .setRequiredXP(νℓкуяє.Levels.xpFor(user.level + 1))
      .setRank(user.position)
      .setLevel(user.level)
      .setStatus("online")
      .setBackground("IMAGE", Img)
      .setProgressBar(color, "COLOR")
      .setUsername("Ranker!")
      .setDiscriminator(աɦօֆɛ);
    rank.build().then(async (data) => {
      νℓкуяє.fs.writeFile(expFile, data, async (error) => {
        if (error) return Caught(νℓкуяє, νℓкуяє, error);
        await νℓкуяє.Economy.findOne(
          {
            ID: νℓкуяє.sender,
          },
          async (error, uData) => {
            if (error) return console.log(error);
            if (!uData) {
              new νℓкуяє.Economy({
                ID: νℓкуяє.sender,
                money: 0,
                daily: 0,
                timeout: 86400000,
                fishdone: 0,
                fishtimeout: 1800000,
                workdone: 0,
                worktimeout: 900000,
              })
                .save()
                .catch((error) => {
                  return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                });

              await νℓкуяє.imgB(
                νℓкуяє,
                vcнaт,
                `
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞🎉𝐑𝐚𝐧𝐤𝐞𝐫
╚◇══════════◇╝
*🎉LEVEL UP CONGRATS!🎉*
*🍀Exp*: ${user.xp} / ${νℓкуяє.Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*


╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝
🔥𝐁𝐨𝐧𝐮𝐬: ${Amnt}
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!`,
                expFile
              );
              return await νℓкуяє.fs.unlinkSync(expFile);
            }
            `|⬡════════════════════════════════════════════════════════════════════•  νℓкуяє 𝐀𝐩𝐢®  ┘═══════════════════════════════════════════════════════════════════⬡|`;
            uData.money = uData.money + Amnt;
            uData.save().catch((error) => {
              return νℓкуяє.grab(νℓкуяє, vcнaт, error);
            });
            await νℓкуяє.imgB(
              νℓкуяє,
              vcнaт,
              `╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞🎉𝐑𝐚𝐧𝐤𝐞𝐫
╚◇══════════◇╝
*🎉LEVEL UP CONGRATS!🎉*
*🍀Exp*: ${user.xp} / ${νℓкуяє.Levels.xpFor(user.level + 1)}
*🎐Level*: ${user.level}
*🔮️Role*: *${role}*


╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝
🔥𝐁𝐨𝐧𝐮𝐬: ${Amnt}
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${uData.money}`,
              expFile
            );
            return await νℓкуяє.fs.unlinkSync(expFile);
          }
        );
      });
    });
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
