//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
exports.noLink = async (whatsbot, voxchat) => {
  let FetchCurrentGroupLink = await whatsbot.groupInviteCode(voxchat.chat);
  let GroupLinkRegex = /chat.voxapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(whatsbot.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.voxapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(whatsbot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await whatsbot
      .groupParticipantsUpdate(voxchat.chat, [whatsbot.sender], "remove")
      .catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${whatsbot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await whatsbot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: whatsbot.quoted.id,
        participant: whatsbot.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    whatsbot.budy.includes("https://t.me/") &&
    whatsbot.budy.includes("discord.gg") &&
    whatsbot.budy.includes("discord.com") &&
    whatsbot.budy.includes("/t.me/") &&
    whatsbot.budy.includes("wa.me/") &&
    whatsbot.budy.includes("www.")
  ) {
    await whatsbot
      .groupParticipantsUpdate(voxchat.chat, [whatsbot.sender], "remove")
      .catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${whatsbot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await whatsbot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: whatsbot.quoted.id,
        participant: whatsbot.quoted.sender,
      },
    });
  } else {
  }
};
