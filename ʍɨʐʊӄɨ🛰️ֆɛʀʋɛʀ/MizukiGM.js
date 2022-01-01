try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const { MizukiTenorMaker } = require(`./MizukiTenorMaker`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const ℓιєηт = require(`./oShit`);
  const ffmpeg = require(`fluent-ffmpeg`);
  const cleanRF = require(`./cleanRF`);
  require(`python-format-js`);
  const ꜰᴜᴄᴋ = require(`./oShit`);
  const vers = require(`../package.json`);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  const Downloader = require(`nodejs-file-downloader`);
  const anime = require(`anime-actions`);
  const fs = require(`fs`);
  const speed = require(`performance-now`);
  let Timestamp = speed();
  const Pong = speed() - Timestamp;
  const Ping = Pong.toFixed(4);
  const date = require(`date-and-time`);
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.MizukiGM = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
    var MizukiGMid = chat.key.id;
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
      var MizukiGMid = chat.message.extendedTextMessage.contextInfo.stanzaId;
    }
    const link = MizukiTenorMaker(FinalName.toLowerCase());
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      const downloader = await new Downloader({
        url: link,
        directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
        fileName: `${FinalName}_${MizukiGMid}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`)
          .on(`end`, async () => {
            console.log(`Finished`);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ* 

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🍪 𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived}
│🍛 𝐓𝐨: @${personreceived}
└───────〇 `,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.gif`,
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`
                )
              );
          })
          .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
          });
      } catch (ℓαвєяяσя) {
        console.log(ℓαвєяяσя);
      }
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      const downloader = await new Downloader({
        url: link,
        directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
        fileName: `${FinalName}_${MizukiGMid}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
        ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`)
          .on(`end`, async () => {
            console.log(`Finished`);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                fs.readFileSync(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`
                ),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ* 

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│🍯𝐓𝐡𝐞𝐦𝐬𝐞𝐥𝐯𝐞: @${ꜱᴇɴᴅᴇʀeceived}
└───────〇`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.gif`,
                  `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${MizukiGMid}.mp4`
                )
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
          });
      } catch (ℓαвєяяσя) {
        console.log(ℓαвєяяσя);
      }
    }
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
