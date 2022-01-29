`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Sakura_Buttons = require(`./Sakura_Buttons`);
const { YouTube_Music } = require(`./youmaker`);
const FFmpeg = require("fluent-ffmpeg");
const Readline = require(`readline`);
const cleanRF = require(`./cleanRF`);
const TinyURL = require("tinyurl");
const FFmpegProc = new FFmpeg();
const fs = require(`fs`);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
exports.FFmpegAudio = async (ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart, Found, userBadge) => {
  try {
    console.log(Found);
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    var Stream = "./Sakura🗑️Temp/" + Date.now();
    var Stream2 = "./Sakura🗑️Temp/" + Date.now() + ".mp3";
    var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    Sakura_Buttons.MIB(
      ӄʀǟӄɨռʐ,
      mozart,
      ֆǟӄʊʀǟ,
      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
    
╔════◇🌿𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁!
║⭕ 𝗙𝗶𝗹𝗲 𝗧𝘆𝗽𝗲: _Audio_
║⏰ 𝗪𝗮𝗶𝘁 𝗧𝗶𝗺𝗲: _Depends on Length of file._
╚════════════╝

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍻 𝐓𝐢𝐭𝐥𝐞: ${Found.title}
║🙈 𝐕𝐢𝐞𝐰𝐬: ${Found.views}
║⏰ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
║✒️ 𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
║🔗 𝐋𝐢𝐧𝐤: ${Found.url}
║📜 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}
╚════════════╝`,
      Found.thumbnail
    );
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    try {
      YouTube_Music(Found.url).then((res) => {
        const { dl_link, thumb, title, filesizeF, filesize } = res;
        TinyURL.shorten(dl_link).then(
          async function (DirectFile) {
            await FFmpegProc.addInput(DirectFile)
              .output(Stream)
              .format("mp3")
              .on(`progress`, (p) => {
                Readline.cursorTo(process.stdout, 0);
                process.stdout.write(`💯𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬: ${p.targetSize}kb`);
              })
              .on("error", async (Error) => {
                console.log(`⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫: ` + Error);
                userBadge.Limits = userBadge.Limits + 1;
                await userBadge
                  .save()
                  .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
                return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
              })
              .on("end", async () => {
                console.log(
                  `\n⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝 |═══════════════════⬡`
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    ֆǟӄʊʀǟ.chatId,
                    fs.readFileSync(Stream),
                    MessageType.audio,
                    {
                      quoted: mozart,
                      mimetype: "audio/mp4",
                    }
                  )
                  .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
                await cleanRF.cleanRF(Stream);
              });
            FFmpegProc.run();
          },
          async function (Error) {
            console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
            userBadge.Limits = userBadge.Limits + 1;
            await userBadge
              .save()
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
            return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
          }
        );
      });
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } catch (Error) {
      console.log(Error);
      YouTube_Music(Found.url).then((res) => {
        const { dl_link, thumb, title, filesizeF, filesize } = res;
        TinyURL.shorten(dl_link).then(
          async function (DirectFile) {
            require(`child_process`).exec(
              `ffmpeg -i "${DirectFile}" "${Stream2}"`,
              async (Error) => {
                if (Error) {
                  console.log(
                    `⬡═══════════════════| 🔺𝐅𝐅𝐦𝐩𝐞𝐠 𝐄𝐫𝐫𝐨𝐫🔺 |═══════════════════⬡` +
                      Error
                  );
                  userBadge.Limits = userBadge.Limits + 1;
                  await userBadge
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
                  return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
                } else {
                  console.log(
                    `⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
                  );
                  console.log("FileName: " + Stream2);
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      ֆǟӄʊʀǟ.chatId,
                      fs.readFileSync(Stream2),
                      MessageType.audio,
                      {
                        quoted: mozart,
                        mimetype: "audio/mp4",
                      }
                    )
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
                  await cleanRF.cleanRF(Stream2);
                }
              }
            );
          },
          async function (Error) {
            console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
            userBadge.Limits = userBadge.Limits + 1;
            await userBadge
              .save()
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
            return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
          }
        );
      });
    }
  } catch (Error) {
    console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
    userBadge.Limits = userBadge.Limits + 1;
    await userBadge
      .save()
      .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart));
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, mozart);
  }
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
// const { spawn } = require("child_process");
// const child = spawn("node", ["Sakura☣️Reactor/🍹ֆǟӄʊʀǟ™.js"]);
// child.stdout.on("data", (data) => {
//   console.log("Stdout:" + data);
// });
// child.stderr.on("data", (data) => {
//   console.log("Stderr:" + data);
// });
// child.on("error", (Error) => console.log("Error:" + Error));
// child.on("exit", (code, signal) => {
//   if (code) console.log("Process Exited With Code: " + code);
//   if (signal) console.log("Process Exited With Signal: " + signal);
//   console.log("All Done!");
// });
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
