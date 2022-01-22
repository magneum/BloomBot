const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}sticker* [reply to image/gif/video]`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
    let FileName = Date.now();
    const NameWebp = `${FileName}.webp`;
    const NameJpeg = `${FileName}.jpeg`;
    const NamePng = `${FileName}.png`;
    const NameMp4 = `${FileName}.mp4`;
    //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
    try {
      var FileObject = {
        message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
      };
      var FileType = await ӄʀǟӄɨռʐ.downloadAndSaveMediaMessage(
        FileObject,
        FileName
      );
    } catch (ℓαвєяяσя) {
      if (ℓαвєяяσя == "contextInfo") {
        console.log("Error downloading ContextInfo");
      }
      console.log(ℓαвєяяσя);
      var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
      var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
        𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
      const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        ꜱᴇɴᴅᴇʀɪᴅ,
        ꜱᴇɴᴅᴇʀeceived,
        ֆǟӄʊʀǟ.commandName,
        ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
      );
      return;
    }
    await setTimeout(async (ℓαвєяяσя) => {
      // ====================================================================================================== JPEG
      if (ℓαвєяяσя) {
        console.log(ℓαвєяяσя);
        await Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
        );
        return;
      }
      // ====================================================================================================== JPEG
      console.log(FileType);
      console.log(FileObject);
      console.log("FileName: " + FileName);
      // ====================================================================================================== JPEG
      if (FileType.endsWith(".jpeg")) {
        await ffmpeg(NameJpeg)
          .outputOptions([`-y`, `-vcodec libwebp`])
          .videoFilters(
            `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
            `format=rgba`,
            `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
          )
          .save(NameWebp)
          .on(`end`, async (ℓαвєяяσя) => {
            // ====================================================================================================== JPEG
            if (ℓαвєяяσя) {
              console.log(ℓαвєяяσя);
              await Sakura_Buttons.MTB(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
              );
              return;
            }
            // ====================================================================================================== JPEG
            await ӄʀǟӄɨռʐ.sendMessage(
              ֆǟӄʊʀǟ.chatId,
              fs.readFileSync(NameWebp),
              MessageType.sticker,
              { quoted: chat }
            );
            cleanRF.cleanRF(NameJpeg, NameWebp);
            return;
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
            await Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
            );
            return;
          });
        // ====================================================================================================== PNG
      } else if (FileType.endsWith(".png")) {
        await ffmpeg(NamePng)
          .outputOptions([`-y`, `-vcodec libwebp`])
          .videoFilters(
            `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
            `format=rgba`,
            `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
          )
          .save(NameWebp)
          .on(`end`, async (ℓαвєяяσя) => {
            // ====================================================================================================== JPEG
            if (ℓαвєяяσя) {
              console.log(ℓαвєяяσя);
              await Sakura_Buttons.MTB(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
              );
              return;
            }
            // ====================================================================================================== JPEG
            await ӄʀǟӄɨռʐ.sendMessage(
              ֆǟӄʊʀǟ.chatId,
              fs.readFileSync(NameWebp),
              MessageType.sticker,
              { quoted: chat }
            );
            cleanRF.cleanRF(NameMp4, NameWebp);
            return;
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
            await Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
            );
            return;
          });
        // ====================================================================================================== WEBP
      } else if (FileType.endsWith(".webp")) {
        await ӄʀǟӄɨռʐ.sendMessage(
          ֆǟӄʊʀǟ.chatId,
          fs.readFileSync(NameWebp),
          MessageType.sticker,
          { quoted: chat }
        );
        cleanRF.cleanRF(NameWebp);
        return;
        // ====================================================================================================== MP4
      } else if (FileType.endsWith(".mp4")) {
        await ffmpeg(NameMp4)
          .duration(8)
          .outputOptions([
            `-y`,
            `-vcodec libwebp`,
            `-lossless 1`,
            `-qscale 1`,
            `-preset default`,
            `-loop 0`,
            `-an`,
            `-vsync 0`,
            `-s 600x600`,
          ])
          .videoFilters(
            `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
          )
          .save(NameWebp)
          .on(`end`, async (ℓαвєяяσя) => {
            // ====================================================================================================== JPEG
            if (ℓαвєяяσя) {
              console.log(ℓαвєяяσя);
              await Sakura_Buttons.MTB(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
              );
              return;
            }
            // ====================================================================================================== JPEG
            await ӄʀǟӄɨռʐ.sendMessage(
              ֆǟӄʊʀǟ.chatId,
              fs.readFileSync(NameWebp),
              MessageType.sticker,
              { quoted: chat }
            );
            cleanRF.cleanRF(NameMp4, NameWebp);
            return;
          })
          .on(`error`, async (ℓαвєяяσя) => {
            console.log(ℓαвєяяσя);
            await Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
            );
            return;
          });
        return;
        //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      } else {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
        return;
      }
      try {
        cleanRF.cleanRF(NameMp4, NameWebp, NameJpeg, NamePng);
      } catch (e) {
        console.log("Nothing To cleanRF!");
      }
    }, 3000);
    return;
    //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
  },
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
