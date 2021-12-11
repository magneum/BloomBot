const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const got = require(`got`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `github`,
  description: `Get the github profile by command  *${ᴋᴇɪ}github <user>*  
or replying  *${ᴋᴇɪ}github*`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝓮𝓮6.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.logGroup,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (𝓜𝓮𝓮6.chatId === "120363025343298860@g.us" && !𝓜𝓮𝓮6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      try {
        let user_name = ``;
        if (𝓜𝓮𝓮6.isReply) {
          user_name = 𝓜𝓮𝓮6.replyMessage;
        } else {
          if (arg.length === 0) {
            return await ʍɛɛℓιєηт
              .sendMessage(
                𝓜𝓮𝓮6.chatId,
                {
                  url: ꜱɪɢɴ.ARC,
                },
                MessageType.image,
                {
                  mimetype: Mimetype.jpeg,
                  caption: `*⚠️Seems like someone forgot to give Github Account name!*

*Usage Example*
${ᴋᴇɪ}github <account name>`,
                }
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
              });
          }
          user_name = arg[0];
        }
        let userResponse = await got(
          `https://api.github.com/users/` + user_name
        );
        let user = JSON.parse(userResponse.body);
        Object.keys(user).forEach(function (key) {
          if (user[key] === null || user[key] === ``) {
            user[key] = `N/A`;
          }
        });
        let caption =
          `*👤 Name :* ` +
          user.name +
          `\n*💻 Link :* ` +
          user.html_url +
          `\n*🔧 Type :* ` +
          user.type +
          `\n*🏢 Company :* ` +
          user.company +
          `\n*🔭 Blog :* ` +
          user.blog +
          `\n*📍 Location :* ` +
          user.location +
          `\n*📝 Bio :* ` +
          user.bio +
          `\n*❤️ Followers :* ` +
          user.followers +
          `\n*👁️ Following :* ` +
          user.following +
          `\n*📊 Public Repos :* ` +
          user.public_repos +
          `\n*📄 Public Gists :* ` +
          user.public_gists +
          `\n*🔗 Profile Created :* ` +
          user.created_at +
          `\n*✏️ Profile Updated :* ` +
          user.updated_at;
        if (user.public_repos > 0) {
          let reposResponse = await got(user.repos_url);
          let reposData = JSON.parse(reposResponse.body);
          repos = reposData[0].name;
          for (let i = 1; i < reposData.length && i < 5; i++) {
            repos += ` | ` + reposData[i].name;
          }
          caption += `\n*🔍 Some Repos :* ` + repos;
        }
        try {
          await ʍɛɛℓιєηт
            .sendMessage(
              𝓜𝓮𝓮6.chatId,
              {
                url: user.avatar_url,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png,
                caption: caption,
                thumbnail: null,
              }
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        } catch (cᴇʀʀᴏʀ) {
          ʍɛɛℓιєηт.sendMessage(𝓜𝓮𝓮6.chatId, caption, MessageType.text);
        }
      } catch (cᴇʀʀᴏʀ) {
        await ʍɛɛℓιєηт.sendMessage(
          𝓜𝓮𝓮6.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ACCOUNT NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${𝓜𝓮𝓮6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${𝓜𝓮𝓮6.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
