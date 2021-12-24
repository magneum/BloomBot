// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const LinkList = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/LinkList`);
const Downloader = require(`nodejs-file-downloader`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `antilink`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}antilink (on/off)`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ) {
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
      console.log(𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev);
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev) {
        let content = await fs.readFileSync(_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          {
            mimetype: Mimetype.png,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `@${ꜱᴇɴᴅᴇʀeceived}, ❌ You Are Not Allowed!

*🎊Groups:* Admins & Developers!`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
          buttons: buttons,
          headerType: 5,
          videoMessage: media.message.videoMessage,
        };
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          buttonMessage,
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          }
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.ERROR,
          },
          MessageType.image,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀeceived}, *ʏᴏᴜ need ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ᴀᴅᴍɪɴ ꜰɪʀꜱᴛ*`,
          }
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (
        !(await LinkList.getLinklistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId)) &&
        arg.length == 0
      ) {
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
          MessageType.video,
          {
            mimetype: "video/gif",
          }
        );
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived}, (admin)

📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _⚠️not-set_
⚙️𝐄𝐧𝐠𝐢𝐧𝐞: *⋊ʀʏᴏ* _ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ_

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
            footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}antilink on`,
                buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}antilink off`,
                buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
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
        );

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (
        (await LinkList.getLinklistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId)) &&
        arg.length == 0
      ) {
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
          MessageType.video,
          {
            mimetype: "video/gif",
          }
        );
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived}, (admin)

📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _✅Pre-Turned-On_
⚙️𝐄𝐧𝐠𝐢𝐧𝐞: *⋊ʀʏᴏ* _ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ_

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
            footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}antilink on`,
                buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}antilink off`,
                buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
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
        );

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
        await LinkList.addLinklistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId).then(async () => {
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
            MessageType.video,
            {
              mimetype: "video/gif",
            }
          );
          return await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived}, (admin)

📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _✅Enabled_
⚙️𝐄𝐧𝐠𝐢𝐧𝐞: *⋊ʀʏᴏ* _ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ_

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
              footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}antilink on`,
                  buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                  type: 1,
                },
                {
                  buttonId: `${ᴋᴇɪ}antilink off`,
                  buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
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
          );
        });
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
        await LinkList.removeLinklistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId).then(async () => {
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
            MessageType.video,
            {
              mimetype: "video/gif",
            }
          );
          return await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 •@${ꜱᴇɴᴅᴇʀeceived}, (admin)

📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _❌Disabled_
⚙️𝐄𝐧𝐠𝐢𝐧𝐞: *⋊ʀʏᴏ* _ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ_

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
              footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}antilink on`,
                  buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                  type: 1,
                },
                {
                  buttonId: `${ᴋᴇɪ}antilink off`,
                  buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
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
          );
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
