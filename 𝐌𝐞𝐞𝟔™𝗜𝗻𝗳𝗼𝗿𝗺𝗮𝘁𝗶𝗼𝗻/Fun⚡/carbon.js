const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Carbon = require(`unofficial-carbon-now`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
module.exports = {
  name: `carbon`,
  commandType: "Fun⚡",
  description: `This command can be used to convert text/code into carbon images.
Example Usage,
*${ꜱɪɢɴ.Mee6IX}carbon <text>* 
*${ꜱɪɢɴ.Mee6IX}carbon*  and reply to a text message.
Use the -t flag after  *${ꜱɪɢɴ.Mee6IX}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${ꜱɪɢɴ.Mee6IX}carbon <text> -t <theme>* .`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6){
    if (ɴᴇᴡᴍᴇᴇ6.total) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update
𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    try {
      let themes = [
        `3024 night`,
        `a11y dark`,
        `blackboard`,
        `base 16 (dark)`,
        `base 16 (light)`,
        `cobalt`,
        `duotone`,
        `hopscotch`,
        `lucario`,
        `material`,
        `monokai`,
        `night owl`,
        `nord`,
        `oceanic next`,
        `one light`,
        `one dark`,
        `panda`,
        `paraiso`,
        `seti`,
        `shades of purple`,
        `solarized (dark)`,
        `solarized (light)`,
        `synthwave '84`,
        `twilight`,
        `verminal`,
        `vscode`,
        `yeti`,
        `zenburn`,
      ];
      var code = ``;
      if (ʍɛɛɨռք[0] == null && !ᴍᴇᴇ6.isReply) {
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*☢️ᴍᴇᴇ6*\n\nNo input provided.
Please use the command  
*${ᴋᴇɪ}carbon <text> -t <theme>*  
or reply to a text message with  
*${ᴋᴇɪ}carbon*  to carbonize the text.

*----> 𝐓𝐇𝐄𝐌𝐄𝐒 <----*
_3024 night_  *|*  _a11y dark_  
_blackboard_  *|*  _base 16 (dark)_ 
_base 16 (light)_  *|*  _cobalt_ 
_duotone_  *|*  _hopscotch_
_lucario_  *|*  _material_ 
_monokai_  *|*  _night owl_ 
_nord_  *|*  _oceanic next_
_one light_  *|*  _one dark_
_panda_  *|*  _paraiso_
_seti_  *|*  _shades of purple_ 
_solarized (dark)_ 
_solarized (light)_
_synthwave '84_  *|*  _twilight_
_verminal_  *|*  _vscode_  
_yeti_  *|*  _zenburn_`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      } else if (ᴍᴇᴇ6.isReply && !ᴍᴇᴇ6.replyMessage) {
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*☢️ᴍᴇᴇ6*\n\nThe replied message should be text.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      } else if (ᴍᴇᴇ6.isReply) {
        code = ᴍᴇᴇ6.replyMessage;
        themeInput = themes[Math.floor(Math.random() * themes.length)];
      } else {
        try {
          var text = ᴍᴇᴇ6.body.replace(
            ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `,
            ``
          );
          if (text[0] === `-` && text[1] === `t`) {
            if (text[2] == null) {
              let counter = 1;
              var message = `*☢️ᴍᴇᴇ6*\n\nAvailable themes: `;
              themes.forEach((theme) => {
                message += `\n${counter}. ${theme}`;
                counter += 1;
              });
              await ʍɛɛℓιєηт.sendMessage(
                ᴍᴇᴇ6.chatId,
                `` + message + ``,
                MessageType.text
              );
              return;
            } else {
              await ʍɛɛℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  `*☢️ᴍᴇᴇ6*\n\nNo input provided.
Please use the command  *${ᴋᴇɪ}carbon <text>*  or reply to a text message with  *${ᴋᴇɪ}carbon*  to carbonize the text.`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
                });
              return;
            }
          }
          var body = ᴍᴇᴇ6.body.split(`-t`);
          code = body[0].replace(ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `, ``);
          themeInput = body[1].substring(1);
          if (!themes.includes(themeInput)) {
            await ʍɛɛℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `*☢️ᴍᴇᴇ6*\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${ᴋᴇɪ}`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          if (cᴇʀʀᴏʀ instanceof TypeError) {
            code = ᴍᴇᴇ6.body.replace(ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `, ``);
            themeInput = themes[Math.floor(Math.random() * themes.length)];
          }
        }
      }
      try {
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*☢️ᴍᴇᴇ6*\n\nConverting your text into a code snippet. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        const carbon = new Carbon.createCarbon()
          .setCode(code)
          .setPrettify(true)
          .setTheme(themeInput);
        const output = await Carbon.generateCarbon(carbon);
        await ʍɛɛℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, output, MessageType.image, {
            mimetype: Mimetype.png,
            caption: `*☢️ᴍᴇᴇ6*\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
          })
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    } catch (cᴇʀʀᴏʀ) {
      await ʍɛɛℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
