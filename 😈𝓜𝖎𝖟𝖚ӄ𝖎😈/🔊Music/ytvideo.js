const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { ytv } = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const getVideoId = require(`get-video-id`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require("request");
const yts = require(`yt-search`);
const axios = require(`axios`);
const fs = require(`fs`);
const now = Date.now();
let mime = ``;
const RegexYouTube =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `ytvideo`,
  description: `ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴜɴᴅᴇʀ 100ᴍʙ ꜱɪᴢᴇ.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytaudio <link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    `🐙============================================================================================================================<⚡>`;
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
      )`🐙============================================================================================================================<⚡>`;
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
      )`🐙============================================================================================================================<⚡>`;
    } else {
      const LinkForExtractor = await yts(arg.join(` `));
      const Extractor = LinkForExtractor.videos.slice(0, 1);
      Extractor.forEach(async function (youfound) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™*

📹𝗩𝗶𝗱𝗲𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 
𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗗𝗠 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗩𝗶𝗱𝗲𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      });
      `🐙============================================================================================================================<⚡>`;
      const sendMediaURL = async (to, url, text = "", mids = []) => {
        if (mids.length > 0) {
          text = normalizeMention(to, text, mids);
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString();
        let mime = "";
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers["content-type"];
            request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };
        download(url, filename, async function () {
          console.log("done");
          let media = fs.readFileSync(filename);
          let type = mime.split("/")[0] + "Message";
          if (mime === "image/gif") {
            type = MessageType.video;
            mime = Mimetype.gif;
          }
          if (mime.split("/")[0] === "audio") {
            mime = Mimetype.mp4Audio;
          }
          ӄʀǟӄɨռʐ.sendMessage(to, media, type, {
            quoted: chat,
            mimetype: mime,
            caption: text,
            contextInfo: { mentionedJid: mids },
          });
          fs.unlinkSync(filename);
        });
      };
      `🐙============================================================================================================================<⚡>`;
      try {
        ytv(arg[0]).then((res) => {
          const { dl_link, thumb, title, filesizeF, filesize } = res;
          axios
            .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then((a) => {
              if (Number(filesize) >= 9999999)
                return ӄʀǟӄɨռʐ
                  .sendMessage(
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
                      content: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*

📹𝗩𝗶𝗱𝗲𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 
𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
*Size* : ${filesizeF}`,
                    }
                  )
                  .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
              sendMediaURL(ꜱᴇɴᴅᴇʀɪᴅ, dl_link).catch((ℓαвєяяσя) =>
                ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎)
              );
            });
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
`🐙============================================================================================================================<⚡>`;
