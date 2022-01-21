`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UsersSakura = require(`../../Sakura🍃Goose/experience`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
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
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var Canvas = require(`canvas`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        try {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived}, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   

❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const applyText = (canvas, text) => {
        const ctx = canvas.getContext(`2d`);
        let fontSize = 50;
        do {
          ctx.font = `${(fontSize -= 10)}px Symbola`;
        } while (ctx.measureText(text).width > canvas.width - 300);
        return ctx.font;
      };
      var canvas = Canvas.createCanvas(840, 300);
      var ctx = canvas.getContext(`2d`);
      try {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(ֆǟӄʊʀǟ.sender);
      } catch {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/6QmT53dR/Npp.png`;
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      UsersSakura.findOne(
        {
          did: ֆǟӄʊʀǟ.sender,
        },
        async (err, users) => {
          if (err) console.log(err);
          if (!users) {
            var newUsers = new UsersSakura({
              did: ֆǟӄʊʀǟ.sender,
              xp: xpAdd,
              level: 0,
              message: messageAdd,
            });
            newUsers.save().catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
          } else {
            `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
            var background = await Canvas.loadImage(
              "https://i.postimg.cc/htTPpb6w/Rank.png"
            );
            ctx.drawImage(background, 0, 0, 1366, 768);
            ctx.beginPath();
            ctx.fillStyle = `rgba(236,180,95, 0.5)`;
            ctx.fillRect(260, 80, 650, 160);
            ctx.closePath();
            ctx.stroke();
            ctx.font = applyText(canvas, `User`);
            ctx.fillStyle = `#000`;
            ctx.font = `80px LobsterTwo-Bold`;
            ctx.fillText(`★Rank Check!★`, 280, 136);
            let nxtlvl = 200 * Math.pow(2, users.level);
            var xpleft = nxtlvl - users.xp;
            ctx.font = `40px TheHeartOfEverythingDemo`;
            ctx.fillStyle = `#000`;
            ctx.fillText(
              `Level now ` + users.level + ` - ` + users.xp + ` XP`,
              280,
              180
            );
            `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
            await Canvas.loadImage(𝕻𝕻𝖑𝖊𝖙𝖊𝖗).then((avatar) => {
              ctx.beginPath();
              ctx.arc(125, 140, 100, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(avatar, 25, 40, 200, 200);
              const out = fs.createWriteStream(
                `${ꜱᴇɴᴅᴇʀeceived.toString()}_.jpeg`
              );
              const stream = canvas.createJPEGStream();
              stream.pipe(out);
              out.on(`finish`, () => {
                ӄʀǟӄɨռʐ.sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  fs.readFileSync(`${ꜱᴇɴᴅᴇʀeceived.toString()}_.jpeg`),
                  MessageType.image,
                  {
                    mimetype: Mimetype.jpeg,
                    quoted: chat,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    caption: `@${ꜱᴇɴᴅᴇʀeceived}

╔═══════ 📜𝐑𝐚𝐧𝐤 𝐂𝐚𝐫𝐝
║🍇 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗫𝗣: _${users.xp}_
║🍈 𝗖𝘂𝗿𝗲𝗻𝘁 𝗟𝗲𝘃𝗲𝗹: _${users.level}_
║🍊 𝗡𝗲𝘅𝘁 𝗟𝗲𝘃𝗲𝗹 𝗶𝗻: _${xpleft}_
╚════════════╝

🎉𝐓𝐡𝐞 𝐌𝐨𝐫𝐞 𝐘𝐨𝐮 𝐓𝐚𝐥𝐤, 𝐓𝐡𝐞 𝐌𝐨𝐫𝐞 𝐗𝐏+𝐆𝐎𝐋𝐃 𝐘𝐨𝐮 𝐆𝐚𝐢𝐧. 
🎉𝐊𝐞𝐞𝐩 𝐔𝐩!`,
                  }
                );
                cleanRF.cleanRF(`${ꜱᴇɴᴅᴇʀeceived.toString()}_.jpeg`);
              });
            });
          }
        }
      );
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
