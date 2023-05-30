//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/global");
exports.noLink = async (Nekobot, Nekos) => {
  var FetchCurrentGroupLink = await Nekobot.groupInviteCode(Nekos.chat);
  var GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  var isGroupLink = GroupLinkRegex.exec(Nekobot.budy);
  var PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  var isCurrentGroupLink = PresentGroupLink.test(Nekobot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await Nekobot.groupParticipantsUpdate(
      Nekos.chat,
      [Nekobot.sender],
      "remove"
    ).catch((error) => Nekobot.handlerror(Nekobot, Nekos, error));
    await Nekos.reply(
      `*😥Apologies:* _${Nekobot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await Nekobot.sendMessage(Nekos.chat, {
      delete: {
        remoteJid: Nekos.chat,
        fromMe: false,
        id: Nekobot.quoted.id,
        participant: Nekobot.quoted.sender,
      },
    });
  } else if (
    Nekobot.budy.includes("https://t.me/") &&
    Nekobot.budy.includes("discord.gg") &&
    Nekobot.budy.includes("discord.com") &&
    Nekobot.budy.includes("/t.me/") &&
    Nekobot.budy.includes("wa.me/") &&
    Nekobot.budy.includes("www.")
  ) {
    await Nekobot.groupParticipantsUpdate(
      Nekos.chat,
      [Nekobot.sender],
      "remove"
    ).catch((error) => Nekobot.handlerror(Nekobot, Nekos, error));
    await Nekos.reply(
      `*😥Apologies:* _${Nekobot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await Nekobot.sendMessage(Nekos.chat, {
      delete: {
        remoteJid: Nekos.chat,
        fromMe: false,
        id: Nekobot.quoted.id,
        participant: Nekobot.quoted.sender,
      },
    });
  } else {
  }
};
