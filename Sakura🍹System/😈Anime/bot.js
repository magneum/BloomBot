const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ffmpeg = require(`fluent-ffmpeg`);
const anime = require(`anime-actions`);
const readline = require(`readline`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      if (ֆǟӄʊʀǟ.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
        var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
        var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      } else {
        var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
        var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (chat.quoted && chat.quoted.sender) {
        chat.mentionedJid.push(chat.quoted.sender);
      } else {
        chat.mentionedJid.push(chat.sender);
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require("../../Sakura🛰️Server/Hold");
      hold.Hold(ֆǟӄʊʀǟ);
      console.log(userBadge);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const AnimeLink = await anime.bite();
      const SymName = ֆǟӄʊʀǟ.commandName;
      const LinkedName = SymName.charAt(0).toUpperCase() + SymName.slice(1);
      if (!AnimeLink.endsWith(`.gif`) && !AnimeLink.endsWith(`.mp4`)) {
        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        return;
      } else {
        console.log("🍹════════| " + AnimeLink + " |════════🍹");
        const GotFile = `./Sakura🗑️Temp/${Date.now()}_${աɦօֆɛռȶɦǟȶ.toString()}.gif`;
        const GiveFile = `./Sakura🗑️Temp/${Date.now()}_${աɦօֆɛռȶɦǟȶ.toString()}.mp4`;
        const downloader = new Downloader({
          url: AnimeLink,
          directory: `./Sakura🗑️Temp`,
          fileName: `${Date.now()}_${աɦօֆɛռȶɦǟȶ.toString()}.gif`,
          cloneFiles: false,
        });
        try {
          await downloader.download();
        } catch (Error) {
          ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
          return;
        }
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        if (ֆǟӄʊʀǟ.isReply) {
          ffmpeg(GotFile)
            .outputOptions([
              `-movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"`,
            ])
            .save(GiveFile)
            .on(`progress`, (p) => {
              readline.cursorTo(process.stdout, 0);
              process.stdout.write(`═════⬡|💯𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬: ${p.targetSize}kb`);
            })
            .on(`error`, async (Error) => {
              console.log(`═════⬡|🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
              return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
            })
            .on(`end`, async () => {
              await Sakura_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚,

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${LinkedName}
║🍕𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭𝐓𝐨: @${քɛʀֆօռɢօȶռʊʍ}
╚════════════╝`,
                GiveFile
              );
              await cleanRF.cleanRF(GiveFile, GotFile);
              return;
            });
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        }
        ffmpeg(GotFile)
          .outputOptions([
            `-movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"`,
          ])
          .save(GiveFile)
          .on(`progress`, (p) => {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`═════⬡|💯𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬: ${p.targetSize}kb`);
          })
          .on(`error`, async (Error) => {
            console.log(`═════⬡|🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
            return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
          })
          .on(`end`, async () => {
            await ӄʀǟӄɨռʐ.sendMessage(ֆǟӄʊʀǟ.chatId, GiveFile, "videoMessage", {
              mimetype: "video/gif",
              quoted: chat,
              caption: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚,

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${LinkedName}
║🍕𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭𝐓𝐨: ${chat.mentionedJid
                .map((user) =>
                  user === chat.sender
                    ? "Themselves "
                    : `@${user.split("@")[0]}`
                )
                .join(", ")}
╚════════════╝`,
              contextInfo: {
                mentionedJid: [...chat.mentionedJid, chat.sender],
              },
            });
            await cleanRF.cleanRF(GiveFile, GotFile);
            return;
          });
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
