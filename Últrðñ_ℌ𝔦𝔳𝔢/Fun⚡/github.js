const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
const got = require(`got`);
module.exports = {
  name: `github`,
  description: `Find Github Profile`,
  ƈʏɮօʀɢʍօʀɛ: `Get the github profile by command  *${UltronSitreper.ULTRONIX}github <user>*  or replying  *${UltronSitreper.ULTRONIX}github* .`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    var fetching = await ӄʀǟӄɨռʐ.sendMessage(
      Últrðñ.chatId,
      `Fetching user details from GitHub. Please wait...`,
      MessageType.text
    );
    try {
      let user_name = ``;
      if (Últrðñ.isReply) {
        user_name = Últrðñ.replyMessage;
      } else {
        if (arguments.length == 0) {
          ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `Please enter the username.`,
            MessageType.text
          );
          return;
        }
        user_name = arguments[0];
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
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          {
            url: user.avatar_url,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: caption,
            thumbnail: null,
          }
        );
      } catch (cᴇʀʀᴏʀ) {
        ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, caption, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ACCOUNT NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
        MessageType.text
      );
    }
  },
};