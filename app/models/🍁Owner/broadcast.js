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
  participants
) => {
  await BloomBot.sendMessage(chatkey.chat, {
    react: {
      text: "🌻",
      key: chatkey.key,
    },
  });
  try {
    switch (true) {
      case !BloomBot.byMyself && !BloomBot.isSudo:
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          *❌Error:* 
          • _Owner Only Command!_`
        );
      case !BloomBot.args.join(" "):
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          *❌Error:* 
          • _No query provided!_
          *🌻Usage:*   
          • _${BloomBot.prefix}${currFile} message_`
        );
      default:
        const BloomBotGroups = await BloomBot.groupFetchAllParticipating();
        const vGroup = Object.entries(BloomBotGroups)
          .slice(0)
          .map((entry) => entry[1]);
        const places = vGroup.map((v) => v.id);
        chatkey.reply(
          `Broadcasting in ${places.length} Group Chat, in ${
            places.length * 1.5
          } seconds`
        );

        for (const cron of places) {
          await BloomBot.sendMessage(cron, {
            video: {
              url: "./public/BloomBot/BloomBot (8).mp4",
            },
            mimetype: "video/mp4",
            fileName: "BloomBot.mp4",
            caption: `┌『*BloomBot📢BROADCAST* 』
              │║> *💫By:*  ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
              │║> *🕛Time:*  ${BloomBot.moment
                .tz("Asia/Kolkata")
                .format("DD/MM HH:mm:ss")}
              ┕╚═══════⋑
              *🌻Message:*
              ${BloomBot.args.join(" ")}`,
          });
        }
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
