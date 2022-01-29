`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const ffmpeg = require(`fluent-ffmpeg`);
const anime = require(`anime-actions`);
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, mozart, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var AnimeLink = await anime.happy();
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const GotFile = `./${Date.now()}.gif`;
      const GiveFile = `./${Date.now()}.mp4`;
      if (!AnimeLink.endsWith(`.gif`) && !AnimeLink.endsWith(`.mp4`)) {
        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
        return;
      }
      try {
        console.log("🍹====⬡ " + AnimeLink + " ⬡====🍹");
        request(AnimeLink).pipe(fs.createWriteStream(GotFile));
      } catch (Error) {
        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
        return;
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (ֆǟӄʊʀǟ.isReply) {
        var Receiver =
          mozart.message.extendedTextMessage.contextInfo.participant;
        var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
        var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
        var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
        ffmpeg(GotFile)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(GiveFile)
          .on(`end`, async () => {
            await Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              mozart,
              ֆǟӄʊʀǟ,
              `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍕𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭𝐓𝐨: @${քɛʀֆօռɢօȶռʊʍ}
╚════════════╝`,
              GiveFile
            );
            await cleanRF.cleanRF(GiveFile, GotFile);
            return;
          });
      } else {
        ffmpeg(GotFile)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(GiveFile)
          .on(`end`, async () => {
            var Check = ֆǟӄʊʀǟ.body.slice(1);
            var Tag = Check.split(" ").join("");
            var ToRm = ᴋᴇɪ + newScpt;
            var Num = ToRm.length;
            var Mention = Tag.substring(Num);
            var MentionPerson = Mention + "@s.whatsapp.net";
            if (!Needs[0]) {
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  { url: GiveFile },
                  MessageType.video,
                  {
                    mimetype: `video/gif`,
                    quoted: mozart,
                    caption: `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: Themselves
╚════════════╝`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 • 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers} ⏋\n⎿ ${Clock} • ${Ping}ms ⏋`,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
            } else {
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  { url: GiveFile },
                  MessageType.video,
                  {
                    mimetype: `video/gif`,
                    quoted: mozart,
                    caption: `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: @${Mention}
╚════════════╝`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 • 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers} ⏋\n⎿ ${Clock} • ${Ping}ms ⏋`,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, MentionPerson] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
            }
          });
      }
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
