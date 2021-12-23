const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { ytv } = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const request = require("request");
const yts = require(`yt-search`);
const axios = require(`axios`);
const fs = require(`fs`);
let mime = ``;
const RegexYouTube =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
`🐙`;
`🐙`;

`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;

`🐙`;
`🐙`;
module.exports = {
  name: `ytvideo`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytvideo <youtube link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    const ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    const 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
    const ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const 𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);

    if (arg.length === 0) {
      const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
      return nahargs.nahargs(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        ꜱᴇɴᴅᴇʀɪᴅ,
        ꜱᴇɴᴅᴇʀeceived,
        𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
        𝓜𝓮𝓮ʍօʀɛ
      );
    } else if (!RegexYouTube.test(arg[0])) {
      const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
      return nahargs.nahargs(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        ꜱᴇɴᴅᴇʀɪᴅ,
        ꜱᴇɴᴅᴇʀeceived,
        𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
        𝓜𝓮𝓮ʍօʀɛ
      );
    } else {
      const filename = `${FinalName}_${ꜱᴇɴᴅᴇʀɪᴅ}_${Date.now()}`;
      const LinkForExtractor = await yts(arg.join(` `));
      const ExtractorVideo = LinkForExtractor.videos.slice(0, 1);
      await ExtractorVideo.forEach(async function (youfound) {
        const YouFetchers = async (filename, url) => {
          var Download_Video = function (uri, filename, callback) {
            request.head(uri, function (ℓαвєяяσя, gotResp, body) {
              mime = gotResp.headers[`content-type`];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on(`close`, callback);
            });
          };
          await Download_Video(url, filename, async function () {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(filename),
                MessageType.video,
                {
                  quoted: chat,
                  mimetype: Mimetype.mp4Audio,
                  caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

📀𝗩𝗶𝗱𝗲𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗗𝗠 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗩𝗶𝗱𝗲𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`,
                  contextInfo: {
                    mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                  },
                }
              )
              .then(fs.unlinkSync(filename));
          });
        };

        ytv(arg[0]).then(async (gotResp) => {
          const { dl_link, thumb, title, filesizeF, filesize } = gotResp;
          axios
            .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then((a) => {
              if (Number(filesize) >= 9999999) {
                return ӄʀǟӄɨռʐ.sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    caption: thumb,
                  },
                  MessageType.image,
                  {
                    quoted: chat,
                    contextInfo: {
                      mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                    },
                    mimetype: Mimetype.png || Mimetype.jpeg,
                    content: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

📀𝗩𝗶𝗱𝗲𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🥣𝐒𝐢𝐳𝐞⤞ ${filesizeF}`,
                  }
                );
              } else {
                YouFetchers(filename, dl_link);
              }
            });
        });
      });
    }
  },
};
