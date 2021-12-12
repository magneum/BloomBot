const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Carbon = require(`unofficial-carbon-now`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `carbon`,
  description: `This command can be used to convert text/code into carbon images.
Example Usage,
*${ᴋᴇɪ}carbon <text>* 
*${ᴋᴇɪ}carbon*  and reply to a text message.
Use the -t flag after  *${ᴋᴇɪ}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${ᴋᴇɪ}carbon <text> -t <theme>* .`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎.sender;
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.logGroup,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (爪𝖎𝖟𝖚ӄ𝖎.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.chatId,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
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
        if (arg[0] == null && !爪𝖎𝖟𝖚ӄ𝖎.isReply) {
          await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: ꜱɪɢɴ.ARC,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nNo input provided.
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
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
          return;
        } else if (爪𝖎𝖟𝖚ӄ𝖎.isReply && !爪𝖎𝖟𝖚ӄ𝖎.replyMessage) {
          await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎.chatId,
              `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nThe replied message should be text.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
          return;
        } else if (爪𝖎𝖟𝖚ӄ𝖎.isReply) {
          code = 爪𝖎𝖟𝖚ӄ𝖎.replyMessage;
          themeInput = themes[Math.floor(Math.random() * themes.length)];
        } else {
          try {
            var text = 爪𝖎𝖟𝖚ӄ𝖎.body.replace(
              爪𝖎𝖟𝖚ӄ𝖎.body[0] + 爪𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
              ``
            );
            if (text[0] === `-` && text[1] === `t`) {
              if (text[2] == null) {
                let counter = 1;
                var message = `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nAvailable themes: `;
                themes.forEach((theme) => {
                  message += `\n${counter}. ${theme}`;
                  counter += 1;
                });
                await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
                  爪𝖎𝖟𝖚ӄ𝖎.chatId,
                  `` + message + ``,
                  MessageType.text
                );
                return;
              } else {
                await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                  .sendMessage(
                    爪𝖎𝖟𝖚ӄ𝖎.chatId,
                    `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nNo input provided.
Please use the command  *${ᴋᴇɪ}carbon <text>*  or reply to a text message with  *${ᴋᴇɪ}carbon*  to carbonize the text.`,
                    MessageType.text
                  )
                  .catch((cᴇʀʀᴏʀ) => {
                    ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
                  });
                return;
              }
            }
            var body = 爪𝖎𝖟𝖚ӄ𝖎.body.split(`-t`);
            code = body[0].replace(爪𝖎𝖟𝖚ӄ𝖎.body[0] + 爪𝖎𝖟𝖚ӄ𝖎.commandName + ` `, ``);
            themeInput = body[1].substring(1);
            if (!themes.includes(themeInput)) {
              await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  爪𝖎𝖟𝖚ӄ𝖎.chatId,
                  `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${ᴋᴇɪ}`,
                  MessageType.text
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
                });
              return;
            }
          } catch (cᴇʀʀᴏʀ) {
            if (cᴇʀʀᴏʀ instanceof TypeError) {
              code = 爪𝖎𝖟𝖚ӄ𝖎.body.replace(
                爪𝖎𝖟𝖚ӄ𝖎.body[0] + 爪𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
                ``
              );
              themeInput = themes[Math.floor(Math.random() * themes.length)];
            }
          }
        }
        try {
          await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎.chatId,
              `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\nConverting your text into a code snippet. Please wait...`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
          const carbon = new Carbon.createCarbon()
            .setCode(code)
            .setPrettify(true)
            .setTheme(themeInput);
          const output = await Carbon.generateCarbon(carbon);
          await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(爪𝖎𝖟𝖚ӄ𝖎.chatId, output, MessageType.image, {
              mimetype: Mimetype.png,
              caption: `*☢️爪𝖎𝖟𝖚ӄ𝖎*\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
            })
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } catch (cᴇʀʀᴏʀ) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🎮爪𝖎𝖟𝖚ӄ𝖎™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮爪𝖎𝖟𝖚ӄ𝖎™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
