// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { porno } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/scraper`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const Downloader = require(`nodejs-file-downloader`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `tikporn`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `Who Is This Non-Admin •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Admin-Only Commands.

*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│🌶️𝐆𝐫𝐨𝐮𝐩𝐬: _Admins & Devs!_
│🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 _Everyone_
└───────〇`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      try {
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        try {
          if (𝓜𝖎𝖟𝖚ӄ𝖎.sender === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) return;
          const jsoncool = JSON.parse(
            fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
          );
          jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender + 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          fs.writeFileSync(
            `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout(async (error) => {
            if (error) console.log(error);
            jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender + 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
            fs.writeFileSync(
              `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 6000);
        } catch (ℓαвєяяσя) {
          console.log(ℓαвєяяσя);
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        var Raw = await porno();
        RawData = `https://tikporntok.com/` + Raw.video;
        if (!RawData.endsWith(`.mp4`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else {
          TikPork = RawData;
        }
        console.log(`────◆➤ ` + TikPork);
        const downloader = await new Downloader({
          url: TikPork,
          directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
          fileName: `${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`,
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
        let content = fs.readFileSync(
          `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
        );
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.video,
          {
            mimetype: Mimetype.mp4,
          }
        );
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│📜𝐓𝐢𝐭𝐥𝐞: ${Raw.title}
│👀𝐕𝐢𝐞𝐰𝐬: ${Raw.views}
│🔸𝐓𝐚𝐠𝐬: ${Raw.tags}
│👍🏽‍𝐋𝐢𝐤𝐞𝐬: ${Raw.like}
│👎🏽‍𝐃𝐢𝐬𝐥𝐢𝐤𝐞𝐬: ${Raw.dislike}
│⭐𝐅𝐚𝐯𝐨𝐮𝐫𝐢𝐭𝐞: ${Raw.favorite}
│📤𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${Raw.upload}
│🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Raw.desc}
│📥𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝: https://tikporntok.com/${TikPork.video}
│🔥𝐒𝐨𝐮𝐫𝐜𝐞: https://tikporntok.com/${TikPork.source}
└───────〇`,
              footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}menu`,
                  buttonText: { displayText: `${ᴋᴇɪ}menu` },
                  type: 1,
                },
              ],
              headerType: 5,
              videoMessage: media.message.videoMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .then(
            cleanRF.cleanRF(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`)
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } catch {
        var Raw = await porno();
        RawData = `https://tikporntok.com/` + Raw.video;
        if (RawData.endsWith(`.gif`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.png`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.jpg`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.jpeg`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else {
          TikPork = RawData;
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        console.log(`────◆➤ ` + TikPork);
        const downloader = await new Downloader({
          url: TikPork,
          directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
          fileName: `${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`,
          cloneFiles: false,
        });
        await downloader.download();
        let content = fs.readFileSync(
          `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`
        );
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.video,
          {
            mimetype: Mimetype.mp4,
          }
        );
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│📜𝐓𝐢𝐭𝐥𝐞: ${Raw.title}
│👀𝐕𝐢𝐞𝐰𝐬: ${Raw.views}
│🔸𝐓𝐚𝐠𝐬: ${Raw.tags}
│👍🏽‍𝐋𝐢𝐤𝐞𝐬: ${Raw.like}
│👎🏽‍𝐃𝐢𝐬𝐥𝐢𝐤𝐞𝐬: ${Raw.dislike}
│⭐𝐅𝐚𝐯𝐨𝐮𝐫𝐢𝐭𝐞: ${Raw.favorite}
│📤𝐔𝐩𝐥𝐨𝐚𝐝𝐞𝐝: ${Raw.upload}
│🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Raw.desc}
│📥𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝: https://tikporntok.com/${TikPork.video}
│🔥𝐒𝐨𝐮𝐫𝐜𝐞: https://tikporntok.com/${TikPork.source}
└───────〇`,
              footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}menu`,
                  buttonText: { displayText: `${ᴋᴇɪ}menu` },
                  type: 1,
                },
              ],
              headerType: 5,
              videoMessage: media.message.videoMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .then(
            cleanRF.cleanRF(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${FinalName}_${ꜱᴇɴᴅᴇʀeceived}.mp4`)
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
