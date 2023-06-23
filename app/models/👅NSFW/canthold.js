require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    return await BloomBot.nsfwCheck.findOne(
      {
        serverId: chatkey.chat,
      },
      async (error, server) => {
        if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
        if (!server) {
          await BloomBot.sendMessage(chatkey.chat, {
            react: {
              text: "❌",
              key: chatkey.key,
            },
          });
          return chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`,
          );
        } else {
          await BloomBot.magfetch(
            BloomBot,
            "https://magneum.vercel.app/api/nsfw?q=" + currFile,
          ).then(async (response) => {
            const mgdata = response.data;
            
            if (!mgdata.meta.thumbnail) {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.`);
            } else
              await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Here, ${currFile} for @${
                  BloomBot.tagname || BloomBot.pushname
                }:*

┌╔═☰ *❗ADULT❗*
║⦁ 💡Title: ${mgdata.meta.title || null}
║⦁ 🖊️Author: ${mgdata.meta.author || null}
║⦁ ❣️Topic: ${mgdata.meta.topic || null}
╚══☰
┌╔═☰
║>  *❓META INFO❓*
║⦁ 🎊Status: ${mgdata.meta.status || null}
║⦁ 🔐Uuid: ${mgdata.meta.uuid || null}
║⦁ 🗓️Date_create: ${mgdata.meta.date_create || null}
║⦁ 🧀Query: ${mgdata.meta.query || null}
║⦁ 📢Domain: ${mgdata.meta.domain || null}
║⦁ 💯Sub_reddit_id: ${mgdata.meta.sub_reddit_id || null}
║⦁ 🌐Link: ${mgdata.meta.web_link || null}
╚═══════⋑`,
                mgdata.meta.thumbnail,
              );
          });
        }
      },
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
