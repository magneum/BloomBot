`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
require(`../../Sakura🛰️Server/konfs`);
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ffmpeg = require(`fluent-ffmpeg`);
const fetch = require(`node-fetch`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    const hold = require("../../Sakura🛰️Server/Hold");
    hold.Hold(ֆǟӄʊʀǟ);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (ֆǟӄʊʀǟ.isReply) {
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      try {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(Receiver);
      } catch {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
      }
      let Triggered = global.API(
        "https://some-random-api.ml",
        "/canvas/triggered",
        {
          avatar: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
        }
      );
      var File = Date.now() + ".gif";
      var FileDone = Date.now() + "_.mp4";
      const downloader = await new Downloader({
        url: Triggered,
        directory: `./`,
        fileName: File,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        ffmpeg(File)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(FileDone)
          .on(`end`, async () => {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                { url: FileDone },
                MessageType.video,
                {
                  mimetype: `video/gif`,
                  quoted: chat,
                  caption: `⎿(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers}⏋\n⎿◈𝐃𝐚𝐭𝐞: ${Clock}⏋\n⎿◈𝐏𝐢𝐧𝐠: ${Ping}ms⏋
                  

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: @${քɛʀֆօռɢօȶռʊʍ}
╚════════════╝`,
                  contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
                }
              )
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            await cleanRF.cleanRF(File, FileDone);
          });
      } catch (Error) {
        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        return;
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } else {
      try {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(աɦօֆɛռȶɦǟȶ);
      } catch {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/gcw6vq3X/Npp.png";
      }
      let Triggered = global.API(
        "https://some-random-api.ml",
        "/canvas/triggered",
        {
          avatar: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
        }
      );
      var File = Date.now() + ".gif";
      var FileDone = Date.now() + "_.mp4";
      const downloader = await new Downloader({
        url: Triggered,
        directory: `./`,
        fileName: File,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        ffmpeg(File)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(FileDone)
          .on(`end`, async () => {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                { url: FileDone },
                MessageType.video,
                {
                  mimetype: `video/gif`,
                  quoted: chat,
                  caption: `⎿(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers}⏋\n⎿◈𝐃𝐚𝐭𝐞: ${Clock}⏋\n⎿◈𝐏𝐢𝐧𝐠: ${Ping}ms⏋


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
╚════════════╝`,
                  contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                }
              )
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            await cleanRF.cleanRF(File, FileDone);
          });
      } catch (Error) {
        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        return;
      }
    }
  },
};
