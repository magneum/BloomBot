`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
require(`./konfs`);
const { registerFont } = require(`canvas`);
registerFont(`./Sakura🛰️Server/LobsterTwo-Bold.ttf`, {
  family: `LobsterTwo-Bold`,
});
registerFont(`./Sakura🛰️Server/SlouchybrushRegular-eZnEB.ttf`, {
  family: `SlouchybrushRegular`,
});
registerFont(`./Sakura🛰️Server/TheHeartOfEverythingDemo-KRdD.ttf`, {
  family: `TheHeartOfEverythingDemo`,
});
const Canvas = require("canvas");
var randomMC = require("random-material-color");
const Economy = require(`../Sakura🍃Goose/economy`);
const UserSakura = require(`../Sakura🍃Goose/experience`);
const cleanRF = require(`./cleanRF`);
const fetch = require(`node-fetch`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const Kolor = require(`chalk`);
let Timestamp = speed();
const moment = require(`moment-timezone`);
const speed = require(`performance-now`);
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const RankCheck = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ) => {
  try {
    let eAd;
    let nLvl;
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    var expFile = "./Sakura🗑️Temp/" + աɦօֆɛռȶɦǟȶ.toString() + ".jpeg";
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(աɦօֆɛռȶɦǟȶ);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    UserSakura.findOne(
      {
        ID: աɦօֆɛռȶɦǟȶ,
        serverID: ֆǟӄʊʀǟ.chatId,
      },
      async (Error, userExp) => {
        var color = randomMC.getColor();
        if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        if (!userExp) {
          var newUserExp = new UserSakura({
            ID: աɦօֆɛռȶɦǟȶ,
            serverID: ֆǟӄʊʀǟ.chatId,
            xp: Math.ceil(Math.random() * 40),
            level: 0,
          });
          await newUserExp
            .save()
            .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              ֆǟӄʊʀǟ.chatId,
              `📜𝐑𝐚𝐧𝐤: @${աɦօֆɛռȶɦǟȶռʊʍ}, Auto-Rank has Started!\n*Type:* ${ᴋᴇɪ}help or ${ᴋᴇɪ}menu`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
              }
            )
            .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
        }
        console.log(
          Kolor.green("═══════════════| 💡 Rank 💡 |═══════════════")
        );
        console.log(userExp);
        console.log(
          Kolor.green("═══════════════| 💡 Rank 💡 |═══════════════")
        );
        var cLvl = userExp.level;
        var cExp = userExp.xp;
        if (cLvl < 5) {
          eAd = Math.ceil(Math.random() * 40);
          nLvl = 50 * Math.pow(2, cLvl);
        } else if (cLvl >= 5) {
          eAd = Math.ceil(Math.random() * 38);
          nLvl = 100 * Math.pow(2, cLvl);
        } else if (cLvl >= 10) {
          eAd = Math.ceil(Math.random() * 36);
          nLvl = 150 * Math.pow(2, cLvl);
        } else if (cLvl >= 20) {
          eAd = Math.ceil(Math.random() * 25);
          nLvl = 250 * Math.pow(2, cLvl);
        } else if (cLvl >= 30) {
          eAd = Math.ceil(Math.random() * 20);
          nLvl = 300 * Math.pow(2, cLvl);
        } else if (cLvl >= 40) {
          eAd = Math.ceil(Math.random() * 15);
          nLvl = 350 * Math.pow(2, cLvl);
        } else if (cLvl >= 50) {
          eAd = Math.ceil(Math.random() * 13);
          nLvl = 400 * Math.pow(2, cLvl);
        } else if (cLvl >= 60) {
          eAd = Math.ceil(Math.random() * 10);
          nLvl = 450 * Math.pow(2, cLvl);
        } else if (cLvl >= 70) {
          eAd = Math.ceil(Math.random() * 8);
          nLvl = 500 * Math.pow(2, cLvl);
        } else if (cLvl >= 80) {
          eAd = Math.ceil(Math.random() * 6);
          nLvl = 550 * Math.pow(2, cLvl);
        } else if (cLvl >= 90) {
          eAd = Math.ceil(Math.random() * 4);
          nLvl = 600 * Math.pow(2, cLvl);
        } else if (cLvl >= 100) {
          eAd = Math.ceil(Math.random() * 2);
          nLvl = 750 * Math.pow(2, cLvl);
        }
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        userExp.xp = userExp.xp + eAd;
        if (userExp.xp >= nLvl) {
          let Res = await fetch(
            global.API("https://wall.alphacoders.com/api2.0", "/get.php", {
              auth: "3e7756c85df54b78f934a284c11abe4e",
              method: "search",
              term: "anime landscape",
            })
          );
          let Bson = await Res.json();
          let Img =
            Bson.wallpapers[Math.floor(Math.random() * Bson.wallpapers.length)];
          userExp.level = cLvl + 1;
          const canvas = Canvas.createCanvas(800, 300);
          const ctx = canvas.getContext("2d");
          const background = await Canvas.loadImage(Img.url_image);
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = "#74037b";
          ctx.strokeRect(0, 0, canvas.width, canvas.height);
          ctx.font = "50px TheHeartOfEverythingDemo";
          ctx.fillStyle = "#1a1a1a";
          ctx.fillText(`Congrats You Ranked Up!`, 230, 120);
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.fillStyle = color;
          ctx.moveTo(220, 135);
          ctx.lineTo(690, 135);
          ctx.quadraticCurveTo(710, 135, 710, 152.5);
          ctx.quadraticCurveTo(710, 170, 690, 170);
          ctx.lineTo(220, 170);
          ctx.lineTo(220, 135);
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(130, 155, 110, 0, Math.PI * 2, true);
          ctx.lineWidth = 2;
          ctx.fillStyle = color;
          ctx.moveTo(220, 135);
          ctx.lineTo(220, 170);
          ctx.lineTo(220, 135);
          ctx.fill();
          ctx.font = "30px LobsterTwo-Bold";
          ctx.fillStyle = "#000";
          ctx.fillText(`${cExp}XP |Lvl: ${cLvl}`, 250, 162);
          ctx.closePath();
          ctx.beginPath();
          ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          const avatar = await Canvas.loadImage(𝕻𝕻𝖑𝖊𝖙𝖊𝖗);
          ctx.drawImage(avatar, 25, 50, 200, 200);
          const out = fs.createWriteStream(expFile);
          const stream = canvas.createJPEGStream();
          stream.pipe(out);
          out.on(`finish`, () => {
            Economy.findOne(
              {
                ID: աɦօֆɛռȶɦǟȶ,
              },
              async (Error, userEco) => {
                if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
                if (!userEco) {
                  var newUser = new Economy({
                    ID: աɦօֆɛռȶɦǟȶ,
                    money: 200,
                    daily: 0,
                    timeout: 86400000,
                    fishdone: 0,
                    fishtimeout: 1800000,
                    workdone: 0,
                    worktimeout: 900000,
                  });
                  await newUser
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return await ӄʀǟӄɨռʐ
                    .sendMessage(
                      ֆǟӄʊʀǟ.chatId,
                      `𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤: @${աɦօֆɛռȶɦǟȶռʊʍ}, Auto-Opened Your Account!\n*Type:* ${ᴋᴇɪ}help or ${ᴋᴇɪ}menu`,
                      MessageType.text,
                      {
                        quoted: chat,
                        contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                      }
                    )
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                } else {
                  var groupDataRank = await ӄʀǟӄɨռʐ.groupMetadata(
                    chat.key.remoteJid
                  );
                  var Ran = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
                  userEco.money = userEco.money + Ran;
                  await userEco
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  await userExp
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  const media = await ӄʀǟӄɨռʐ.prepareMessage(
                    ֆǟӄʊʀǟ.chatId,
                    fs.readFileSync(expFile),
                    MessageType.image,
                    { mimetype: Mimetype.jpeg }
                  );
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      ֆǟӄʊʀǟ.chatId,
                      {
                        contentText: `✨𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 @${աɦօֆɛռȶɦǟȶռʊʍ} 𝐋𝐞𝐯𝐞𝐥𝐞𝐝 𝐔𝐏,
╔◇══════════════◇╗
┊ 𝐑𝐚𝐧𝐤𝐢𝐧𝐠📜𝐒𝐲𝐬𝐭𝐞𝐦
╚◇══════════════◇╝
╔◇📜𝐑𝐚𝐧𝐤
║🥂 𝗫𝗽: _${cExp}_
║🍩 𝗟𝗲𝘃𝗲𝗹: _${cLvl}_
║🎪 𝗚𝗿𝗼𝘂𝗽: _${groupDataRank.subject}_
╚════════════╝


╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
╚◇══════════════◇╝
╔◇🛵𝗕𝗼𝗻𝘂𝘀: _${Ran}coins_
║🪙 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money}coins_
╚════════════╝


◇ The More You Talk, The More *Xp+Coins* You Gain.
◇ You Can Spend The Coins in *${ᴋᴇɪ}shop!*`,
                        footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 ◈𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers} ⏋\n⎿ ◈𝐃𝐚𝐭𝐞: ${Clock} ⏋\n⎿ ◈𝐏𝐢𝐧𝐠: ${Ping}ms ⏋`,
                        buttons: [
                          {
                            buttonId: `${ᴋᴇɪ}rank`,
                            buttonText: {
                              displayText: `${ᴋᴇɪ}rank`,
                            },
                            type: 1,
                          },
                          {
                            buttonId: `${ᴋᴇɪ}shop`,
                            buttonText: {
                              displayText: `${ᴋᴇɪ}shop`,
                            },
                            type: 1,
                          },
                        ],
                        headerType: 4,
                        imageMessage: media.message.imageMessage,
                      },
                      MessageType.buttonsMessage,
                      {
                        quoted: chat,
                        contextInfo: {
                          mentionedJid: [աɦօֆɛռȶɦǟȶ],
                        },
                      }
                    )
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return await cleanRF.cleanRF(expFile);
                }
              }
            );
          });
        }
      }
    );
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
  } catch (Error) {
    console.log(Error);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
module.exports = {
  MRC: RankCheck,
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
