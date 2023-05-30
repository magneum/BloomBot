//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/global");
exports.noLink = async (OpenBot, ocID) => {
  var FetchCurrentGroupLink = await OpenBot.groupInviteCode(ocID.chat);
  var GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  var isGroupLink = GroupLinkRegex.exec(OpenBot.budy);
  var PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  var isCurrentGroupLink = PresentGroupLink.test(OpenBot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await OpenBot.groupParticipantsUpdate(
      ocID.chat,
      [OpenBot.sender],
      "remove"
    ).catch((error) => OpenBot.handlerror(OpenBot, ocID, error));
    await ocID.reply(
      `*😥Apologies:* _${OpenBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await OpenBot.sendMessage(ocID.chat, {
      delete: {
        remoteJid: ocID.chat,
        fromMe: false,
        id: OpenBot.quoted.id,
        participant: OpenBot.quoted.sender,
      },
    });
  } else if (
    OpenBot.budy.includes("https://t.me/") &&
    OpenBot.budy.includes("discord.gg") &&
    OpenBot.budy.includes("discord.com") &&
    OpenBot.budy.includes("/t.me/") &&
    OpenBot.budy.includes("wa.me/") &&
    OpenBot.budy.includes("www.")
  ) {
    await OpenBot.groupParticipantsUpdate(
      ocID.chat,
      [OpenBot.sender],
      "remove"
    ).catch((error) => OpenBot.handlerror(OpenBot, ocID, error));
    await ocID.reply(
      `*😥Apologies:* _${OpenBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await OpenBot.sendMessage(ocID.chat, {
      delete: {
        remoteJid: ocID.chat,
        fromMe: false,
        id: OpenBot.quoted.id,
        participant: OpenBot.quoted.sender,
      },
    });
  } else {
  }
};
