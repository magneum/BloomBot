//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logger/global.js");
exports.noLink = async (FoxBot, Foxchat) => {
  var FetchCurrentGroupLink = await FoxBot.groupInviteCode(Foxchat.chat);
  var GroupLinkRegex = /chat.Foxapp.com\/([0-9A-Za-z]{20,24})/i;
  var isGroupLink = GroupLinkRegex.exec(FoxBot.budy);
  var PresentGroupLink = new RegExp(
    `https://chat.Foxapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  var isCurrentGroupLink = PresentGroupLink.test(FoxBot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await FoxBot
      .groupParticipantsUpdate(Foxchat.chat, [FoxBot.sender], "remove")
      .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
    await Foxchat.reply(
      `*😥Apologies:* _${FoxBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await FoxBot.sendMessage(Foxchat.chat, {
      delete: {
        remoteJid: Foxchat.chat,
        fromMe: false,
        id: FoxBot.quoted.id,
        participant: FoxBot.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    FoxBot.budy.includes("https://t.me/") &&
    FoxBot.budy.includes("discord.gg") &&
    FoxBot.budy.includes("discord.com") &&
    FoxBot.budy.includes("/t.me/") &&
    FoxBot.budy.includes("wa.me/") &&
    FoxBot.budy.includes("www.")
  ) {
    await FoxBot
      .groupParticipantsUpdate(Foxchat.chat, [FoxBot.sender], "remove")
      .catch((error) => FoxBot.handlerror(FoxBot, Foxchat, error));
    await Foxchat.reply(
      `*😥Apologies:* _${FoxBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await FoxBot.sendMessage(Foxchat.chat, {
      delete: {
        remoteJid: Foxchat.chat,
        fromMe: false,
        id: FoxBot.quoted.id,
        participant: FoxBot.quoted.sender,
      },
    });
  } else {
  }
};
