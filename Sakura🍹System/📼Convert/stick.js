// `|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
// `|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
// `|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
// `|🍹|`;
// `|🍹|`;
// `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
// const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
// const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
// const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
// const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
// const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
// const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
// const ffmpeg = require(`fluent-ffmpeg`);
// const fs = require(`fs`);
// var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
// var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// var path = require(`path`);
// var scriptName = path.basename(__filename);
// var newScpt = scriptName.slice(0, -3).toLowerCase();
// `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
// module.exports = {
//   name: newScpt,
//   ֆǟӄʊʀǟӄǟɨʐօ: `*Reply With:* _${ᴋᴇɪ}${newScpt}_
// *Supported Media:* _Image/Video/Gif/Mp4/Jpeg/Png_`,
//   async handle(ӄʀǟӄɨռʐ, mozart, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
//     if (ֆǟӄʊʀǟ.isReply) {
//       var FileObject = {
//         message: mozart.message.extendedTextMessage.contextInfo.quotedMessage,
//       };
//       var FileId = mozart.message.extendedTextMessage.contextInfo.stanzaId;
//       console.log(FileObject);
//       console.log(FileId);
//       var FileJpeg = FileId + `.jpeg`;
//       var FileWebp = FileId + `.webp`;
//       var FilePng = FileId + `.png`;
//       var FileMp4 = FileId + `.mp4`;
//       var StickerName = FileId + `FromConvertedTo` + `.webp`;
//       `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
//       try {
//         await ӄʀǟӄɨռʐ
//           .downloadAndSaveMediaMessage(FileObject, FileId)
//           .then(() => {
//             if (fs.existsSync(FileId + `.jpeg`)) {
//               console.log(`============|❓𝐅𝐢𝐥𝐞 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧: ` + `.jpeg`);
//               ffmpeg(FileJpeg)
//                 .outputOptions([`-y`, `-vcodec libwebp`])
//                 .videoFilters(
//                   `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
//                   `format=rgba`,
//                   `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
//                 )
//                 .save(StickerName)
//                 .on(`end`, async () => {
//                   await ӄʀǟӄɨռʐ
//                     .sendMessage(
//                       ֆǟӄʊʀǟ.chatId,
//                       fs.readFileSync(StickerName),
//                       MessageType.sticker,
//                       { quoted: mozart }
//                     )
//                     .then(cleanRF.cleanRF(FileJpeg, StickerName))
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                 })
//                 .on(`error`, async (Error) => {
//                   userBadge.Limits = userBadge.Limits + 1;
//                   await userBadge
//                     .save()
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                   return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
//                 });
//             }
//             `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
//             if (fs.existsSync(FileId + `.png`)) {
//               console.log(`============|❓𝐅𝐢𝐥𝐞 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧: ` + `.png`);
//               ffmpeg(FilePng)
//                 .outputOptions([`-y`, `-vcodec libwebp`])
//                 .videoFilters(
//                   `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
//                   `format=rgba`,
//                   `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
//                 )
//                 .save(StickerName)
//                 .on(`end`, async () => {
//                   await ӄʀǟӄɨռʐ
//                     .sendMessage(
//                       ֆǟӄʊʀǟ.chatId,
//                       fs.readFileSync(StickerName),
//                       MessageType.sticker,
//                       { quoted: mozart }
//                     )
//                     .then(cleanRF.cleanRF(FilePng, StickerName))
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                 })
//                 .on(`error`, async (Error) => {
//                   userBadge.Limits = userBadge.Limits + 1;
//                   await userBadge
//                     .save()
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                   return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
//                 });
//             }
//             `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
//             if (fs.existsSync(FileId + `.webp`)) {
//               console.log(`============|❓𝐅𝐢𝐥𝐞 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧: ` + `.webp`);
//               return ӄʀǟӄɨռʐ
//                 .sendMessage(
//                   ֆǟӄʊʀǟ.chatId,
//                   fs.readFileSync(FileWebp),
//                   MessageType.sticker,
//                   { quoted: mozart }
//                 )
//                 .then(cleanRF.cleanRF(FileWebp))
//                 .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//             }
//             `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
//             if (fs.existsSync(FileId + `.mp4`)) {
//               console.log(`============|❓𝐅𝐢𝐥𝐞 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧: ` + `.mp4`);
//               ffmpeg(FileMp4)
//                 .duration(8)
//                 .outputOptions([
//                   `-y`,
//                   `-vcodec libwebp`,
//                   `-lossless 1`,
//                   `-qscale 1`,
//                   `-preset default`,
//                   `-loop 0`,
//                   `-an`,
//                   `-vsync 0`,
//                   `-s 600x600`,
//                 ])
//                 .videoFilters(
//                   `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
//                 )
//                 .save(StickerName)
//                 .on(`end`, async () => {
//                   await ӄʀǟӄɨռʐ
//                     .sendMessage(
//                       ֆǟӄʊʀǟ.chatId,
//                       fs.readFileSync(StickerName),
//                       MessageType.sticker,
//                       { quoted: mozart }
//                     )
//                     .then(cleanRF.cleanRF(FileMp4, StickerName))
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                 })
//                 .on(`error`, async (Error) => {
//                   userBadge.Limits = userBadge.Limits + 1;
//                   await userBadge
//                     .save()
//                     .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//                   return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
//                 });
//             }
//           });
//         `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
//       } catch (Error) {
//         userBadge.Limits = userBadge.Limits + 1;
//         await userBadge
//           .save()
//           .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
//         var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
//         var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
//           𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
//         ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
//           ӄʀǟӄɨռʐ,
//           mozart,
//           ֆǟӄʊʀǟ,
//           աɦօֆɛռȶɦǟȶ,
//           աɦօֆɛռȶɦǟȶռʊʍ,
//           ֆǟӄʊʀǟ.commandName,
//           ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
//         );
//         return;
//       }
//     } else {
//       const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
//       var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
//       var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
//         𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
//       ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
//         ӄʀǟӄɨռʐ,
//         mozart,
//         ֆǟӄʊʀǟ,
//         աɦօֆɛռȶɦǟȶ,
//         աɦօֆɛռȶɦǟȶռʊʍ,
//         ֆǟӄʊʀǟ.commandName,
//         ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
//       );
//       return;
//     }
//   },
// };
// `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
// `|🍹|`;
// `|🍹|`;
// `|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
// `|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
// `|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
