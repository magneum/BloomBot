// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ffmpeg = require(`fluent-ffmpeg`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
var path = require("path");
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var GifID = chat.key.id;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var personreceived = Receiver.substring(0, Receiver.length - 15);
        var GifID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        const link = await anime.thinking();
        const downloader = await new Downloader({
          url: link,
          directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
          fileName: `${FinalName}_${GifID}.gif`,
          cloneFiles: false,
        });
        await downloader.download();
        await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                  quoted: chat,
                  mimetype: "video/gif",
                  caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* _${vers.vers}_

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}
🤩𝐓𝐨: @${personreceived}`,
                }
              )
              .then(
                fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.gif`),
                fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`)
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
          });
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        const link = await anime.thinking();
        const downloader = await new Downloader({
          url: link,
          directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
          fileName: `${FinalName}_${GifID}.gif`,
          cloneFiles: false,
        });
        await downloader.download();
        ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.gif`)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`)
          .on("end", async () => {
            console.log("Finished");
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  quoted: chat,
                  mimetype: "video/gif",
                  caption: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* _${vers.vers}_

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🍯𝐓𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞: @${ꜱᴇɴᴅᴇʀeceived}`,
                }
              )
              .then(
                fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.gif`),
                fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${GifID}.mp4`)
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
          });
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
