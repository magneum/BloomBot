// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Carbon = require(`unofficial-carbon-now`);
const ℓιєηт = require("../../ULTƦON/catch");
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `carbon`,
  commandType: "Fun⚡",
  description: `This command can be used to convert text/code into carbon images.
Example Usage,
*${ꜱɪɢɴ.ULTRONIX}carbon <text>* 
*${ꜱɪɢɴ.ULTRONIX}carbon*  and reply to a text message.
Use the -t flag after  *${ꜱɪɢɴ.ULTRONIX}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${ꜱɪɢɴ.ULTRONIX}carbon <text> -t <theme>* .`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
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
      if (Arc[0] == null && !ULTƦON.isReply) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            {
              url: `https://i.postimg.cc/5tb40s6w/Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*☢️ULTƦON*\n\nNo input provided.
Please use the command  
*${ꜱɪɢɴ.ULTRONIX}carbon <text> -t <theme>*  
or reply to a text message with  
*${ꜱɪɢɴ.ULTRONIX}carbon*  to carbonize the text.

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
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      } else if (ULTƦON.isReply && !ULTƦON.replyMessage) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `*☢️ULTƦON*\n\nThe replied message should be text.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      } else if (ULTƦON.isReply) {
        code = ULTƦON.replyMessage;
        themeInput = themes[Math.floor(Math.random() * themes.length)];
      } else {
        try {
          var text = ULTƦON.body.replace(
            ULTƦON.body[0] + ULTƦON.commandName + ` `,
            ``
          );
          if (text[0] === `-` && text[1] === `t`) {
            if (text[2] == null) {
              let counter = 1;
              var message = `*☢️ULTƦON*\n\nAvailable themes: `;
              themes.forEach((theme) => {
                message += `\n${counter}. ${theme}`;
                counter += 1;
              });
              await υℓтяσηℓιєηт.sendMessage(
                ULTƦON.chatId,
                `` + message + ``,
                MessageType.text
              );
              return;
            } else {
              await υℓтяσηℓιєηт
                .sendMessage(
                  ULTƦON.chatId,
                  `*☢️ULTƦON*\n\nNo input provided.
Please use the command  *${ꜱɪɢɴ.ULTRONIX}carbon <text>*  or reply to a text message with  *${ꜱɪɢɴ.ULTRONIX}carbon*  to carbonize the text.`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
                });
              return;
            }
          }
          var body = ULTƦON.body.split(`-t`);
          code = body[0].replace(ULTƦON.body[0] + ULTƦON.commandName + ` `, ``);
          themeInput = body[1].substring(1);
          if (!themes.includes(themeInput)) {
            await υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                `*☢️ULTƦON*\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${ꜱɪɢɴ.ULTRONIX}`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            return;
          }
        } catch (cᴇʀʀᴏʀ) {
          if (cᴇʀʀᴏʀ instanceof TypeError) {
            code = ULTƦON.body.replace(
              ULTƦON.body[0] + ULTƦON.commandName + ` `,
              ``
            );
            themeInput = themes[Math.floor(Math.random() * themes.length)];
          }
        }
      }
      try {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `*☢️ULTƦON*\n\nConverting your text into a code snippet. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        const carbon = new Carbon.createCarbon()
          .setCode(code)
          .setPrettify(true)
          .setTheme(themeInput);
        const output = await Carbon.generateCarbon(carbon);
        await υℓтяσηℓιєηт
          .sendMessage(ULTƦON.chatId, output, MessageType.image, {
            mimetype: Mimetype.png,
            caption: `*☢️ULTƦON*\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
