require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    const server = await BloomBot.nsfwCheck.findOne({ serverId: Sockey.chat });

    switch (!server) {
      case true:
        await BloomBot.sendMessage(Sockey.chat, {
          react: { text: "❌", key: Sockey.key },
        });
        return Sockey.reply(`*😥 Apologies:* _${
          BloomBot.pushname || BloomBot.tagname
        }_

*❌Error:*
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/nsfw?q=${currFile}`
    );
    const mgdata = response.data;

    switch (!mgdata.meta.thumbnail) {
      case true:
        await BloomBot.sendMessage(Sockey.chat, {
          react: { text: "❌", key: Sockey.key },
        });
        return Sockey.reply(`*😥 Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.`);
    }

    const message = `
*🌻 Here is ${currFile} for @${BloomBot.tagname || BloomBot.pushname}:*

*❗ ADULT CONTENT ❗*
*• 💡Title:* ${mgdata.meta.title || "Not available"}
*• 🖊️Author:* ${mgdata.meta.author || "Not available"}
*• ❣️Topic:* ${mgdata.meta.topic || "Not available"}

*❓ META INFO ❓*
*• 🎊Status:* ${mgdata.meta.status || "Not available"}
*• 🔐UUId:* ${mgdata.meta.uuid || "Not available"}
*• 🗓️Date Created:* ${mgdata.meta.date_create || "Not available"}
*• 🧀Query:* ${mgdata.meta.query || "Not available"}
*• 📢Domain:* ${mgdata.meta.domain || "Not available"}
*• 💯Subreddit Id:* ${mgdata.meta.sub_reddit_id || "Not available"}
*• 🌐Link:* ${mgdata.meta.web_link || "Not available"}`;
    await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      message,
      mgdata.meta.thumbnail
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = [];
