// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const PostDataBase = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/postDb`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `setwelcome`,
  description: `New members of a group chat will be welcomed with a message.`,
  𝓜𝓮𝓮6ʍօʀɛ: ` 
*${ᴋᴇɪ}setwelcome <message>
*${ᴋᴇɪ}setwelcome*  <off>  
*${ᴋᴇɪ}setwelcome*  <delete>
Do note, the setwelcome option is still enabled after you use the delete option.`,
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

*🎊Groups:* Admins & Developers!
*🫒Private:* Everyone`,
          footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${
            vers.vers
          }_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(4)}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            buttonMessage,
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
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
          )
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `This command is only applicable in a group chat.`,
            MessageType.text,
            { quoted: chat }
          )
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

        return;
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var Msg = await PostDataBase.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setwelcome`);
      if (arg.length == 0) {
        var enabled = await PostDataBase.checkSettings(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `setwelcome`
        );
        if (enabled === false || enabled === undefined) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Set a setwelcome message first.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
        } else if (enabled === `OFF`) {
          ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `PostDataBase are enabled: False \nCurrently greeting new members with:`,
            MessageType.text,
            { quoted: chat }
          );

          ӄʀǟӄɨռʐ
            .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg.message, MessageType.text, {
              quoted: chat,
            })
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `PostDataBase are enabled: True \nCurrently greeting new members with:`,
          MessageType.text,
          { quoted: chat }
        );

        await ӄʀǟӄɨռʐ
          .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg.message, MessageType.text, {
            quoted: chat,
          })
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
          switched = `OFF`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Welcome message has been disabled.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
          switched = `ON`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Welcome message has been enabled.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (arg[0] === `delete`) {
          var Msg = await PostDataBase.deleteMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `setwelcome`
          );
          if (Msg === false || Msg === undefined) {
            ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `Set a setwelcome message first.`,
                MessageType.text,
                { quoted: chat }
              )
              .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

            return;
          }
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Welcome message deleted.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
        }
        text = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
          𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
          ``
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (Msg === false || Msg === undefined) {
          await PostDataBase.setWelcome(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Welcome message updated and enabled.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);

          return;
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else {
          await PostDataBase.deleteMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setwelcome`);
          await PostDataBase.setWelcome(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Welcome message updated and enabled.`,
              MessageType.text,
              { quoted: chat }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
          return;
        }
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
