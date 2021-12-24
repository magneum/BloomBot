// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { yta } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
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
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `ytaudio`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytaudio <youtube link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (arg.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        );

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (!RegexYouTube.test(arg[0])) {
        const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        );

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        const filename = `${FinalName}_${ꜱᴇɴᴅᴇʀɪᴅ}_${Date.now()}`;
        const LinkForGroups = await yts(arg.join(` `));
        const PrivatesVideos = LinkForGroups.videos.slice(0, 1);
        const LinkForPrivates = await yts(arg.join(` `));
        const GroupVideos = LinkForPrivates.videos.slice(0, 1);
        await GroupVideos.forEach(async function (youfound) {
          await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

⭕𝗔𝘂𝗱𝗶𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗗𝗠 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

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
          );
        });
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const YouFetchers = async (
          filename,
          to,
          url,
          text = ``,
          mention = []
        ) => {
          if (mention.length > 0) {
            text = normalizeMention(to, text, mention);
          }
          var Download_Audio = function (uri, filename, callback) {
            request.head(uri, function (ℓαвєяяσя, gotResp, body) {
              mime = gotResp.headers[`content-type`];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on(`close`, callback);
            });
          };
          Download_Audio(url, filename, async function () {
            let media = fs.readFileSync(filename);
            let type = mime.split(`/`)[0] + `Message`;
            if (mime === `image/gif`) {
              type = MessageType.video;
              mime = Mimetype.gif;
            }
            if (mime.split(`/`)[0] === `audio`) {
              mime = Mimetype.mp4Audio;
            }
            await ӄʀǟӄɨռʐ
              .sendMessage(to, media, type, {
                quoted: chat,
                mimetype: mime,
                caption: text,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              })
              .then(fs.unlinkSync(filename));
          });
        };
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        yta(arg[0]).then(async (gotResp) => {
          const { dl_link, thumb, title, filesizeF, filesize } = gotResp;
          axios
            .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then((alpha) => {
              if (Number(filesize) >= 1000) {
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
                    content: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(2)}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

⭕𝗔𝘂𝗱𝗶𝗼 •@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🥣𝐒𝐢𝐳𝐞⤞ ${filesizeF}`,
                  }
                );
              } else {
                PrivatesVideos.forEach(function () {
                  Fetched = `⭕𝗔𝘂𝗱𝗶𝗼`;
                  YouFetchers(filename, ꜱᴇɴᴅᴇʀɪᴅ, dl_link, Fetched);
                });
              }
            });
        });
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
