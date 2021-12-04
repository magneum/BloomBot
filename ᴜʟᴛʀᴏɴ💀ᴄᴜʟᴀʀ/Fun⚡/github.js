// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const got = require(`got`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `github`,
  commandType: "Fun⚡",
  description: `Get the github profile by module  *${UltronSitreper.ULTRONIX}github <user>*  
or replying  *${UltronSitreper.ULTRONIX}github* .`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    try {
      let user_name = ``;
      if (ᴜʟᴛʀᴏɴ.isReply) {
        user_name = ᴜʟᴛʀᴏɴ.replyMessage;
      } else {
        if (Arc.length === 0) {
          return await υℓтяσηℓιєηт
            .sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              {
                url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give Github Account name!*
  
  *Usage Example*
  ${UltronSitreper.ULTRONIX}github <account name>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
            });
        }
        user_name = Arc[0];
      }
      let userResponse = await got(`https://api.github.com/users/` + user_name);
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
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
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
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      } catch (cᴇʀʀᴏʀ) {
        υℓтяσηℓιєηт.sendMessage(ᴜʟᴛʀᴏɴ.chatId, caption, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ACCOUNT NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴜʟᴛʀᴏɴ.moduleName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴜʟᴛʀᴏɴ.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
