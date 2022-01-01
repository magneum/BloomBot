// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ffmpeg = require(`fluent-ffmpeg`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var Raw = await anime.cuddle();
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!Raw.endsWith(`.gif`) && !Raw.endsWith(`.mp4`)) {
        var Raw = await anime.cuddle();
        Raw = Raw;
        ʟᴀʙᴛᴇꜱᴛ = Raw;
      } else {
        ʟᴀʙᴛᴇꜱᴛ = Raw;
      }
      console.log(ʟᴀʙᴛᴇꜱᴛ);
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const downloader = await new Downloader({
        url: ʟᴀʙᴛᴇꜱᴛ,
        directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
        fileName: `${Ping}_${FinalName}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
      } catch (ℓαвєяяσя) {
        try {
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},
        
🤧𝐎𝐩𝐩𝐬𝐢𝐞 𝘛𝘳𝘺 𝘈𝘨𝘢𝘪𝘯!
_Server Didn't Send Any Response_`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`)
          .on(`end`, async () => {
            var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
            var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
            var Receiver =
              chat.message.extendedTextMessage.contextInfo.participant;
            var personreceived = Receiver.substring(0, Receiver.length - 15);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  📅ᴅᴀᴛᴇ: _${Clock}_

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🍪 𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}
│🍛 𝐓𝐨: @${personreceived}
└───────〇`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`,
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.gif`
                )
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          });
      } else {
        await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`)
          .on(`end`, async () => {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  📅ᴅᴀᴛᴇ: _${Clock}_

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🍯𝐓𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞: @${ꜱᴇɴᴅᴇʀeceived}
└───────〇`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.mp4`,
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${Ping}_${FinalName}.gif`
                )
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          });
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
