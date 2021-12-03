// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const got = require(`got`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `github`,
  description: `Find Github Profile`,
  ƈʏɮօʀɢʍօʀɛ: `
Get the github profile by module  *${UltronSitreper.ULTRONIX}github <user>*  or replying  *${UltronSitreper.ULTRONIX}github* .`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      let user_name = ``;
      if (ʊʟȶʀօռ.isReply) {
        user_name = ʊʟȶʀօռ.replyMessage;
      } else {
        if (Arc.length === 0) {
          await υℓтяσηℓιєηт.sendMessage(ʊʟȶʀօռ.chatId, "❌", MessageType.text);
          await υℓтяσηℓιєηт
            .sendMessage(
              ʊʟȶʀօռ.chatId,
              {
                url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
            });
          return;
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
            ʊʟȶʀօռ.chatId,
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
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
      } catch (cᴇʀʀᴏʀ) {
        υℓтяσηℓιєηт.sendMessage(ʊʟȶʀօռ.chatId, caption, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ACCOUNT NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ʊʟȶʀօռ.moduleName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ʊʟȶʀօռ.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
