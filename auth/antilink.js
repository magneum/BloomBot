<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
exports.noLink = async (WhatsBot, voxchat) => {
  let FetchCurrentGroupLink = await WhatsBot.groupInviteCode(voxchat.chat);
  let GroupLinkRegex = /chat.voxapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(WhatsBot.budy);
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
exports.noLink = async (voxbot, voxchat) => {
  let FetchCurrentGroupLink = await voxbot.groupInviteCode(voxchat.chat);
  let GroupLinkRegex = /chat.voxapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(voxbot.budy);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  let PresentGroupLink = new RegExp(
    `https://chat.voxapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
<<<<<<< HEAD
  let isCurrentGroupLink = PresentGroupLink.test(WhatsBot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await WhatsBot
      .groupParticipantsUpdate(voxchat.chat, [WhatsBot.sender], "remove")
      .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${WhatsBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await WhatsBot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: WhatsBot.quoted.id,
        participant: WhatsBot.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    WhatsBot.budy.includes("https://t.me/") &&
    WhatsBot.budy.includes("discord.gg") &&
    WhatsBot.budy.includes("discord.com") &&
    WhatsBot.budy.includes("/t.me/") &&
    WhatsBot.budy.includes("wa.me/") &&
    WhatsBot.budy.includes("www.")
  ) {
    await WhatsBot
      .groupParticipantsUpdate(voxchat.chat, [WhatsBot.sender], "remove")
      .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${WhatsBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await WhatsBot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: WhatsBot.quoted.id,
        participant: WhatsBot.quoted.sender,
=======
  let isCurrentGroupLink = PresentGroupLink.test(voxbot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await voxbot
      .groupParticipantsUpdate(voxchat.chat, [voxbot.sender], "remove")
      .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${voxbot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await voxbot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: voxbot.quoted.id,
        participant: voxbot.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    voxbot.budy.includes("https://t.me/") &&
    voxbot.budy.includes("discord.gg") &&
    voxbot.budy.includes("discord.com") &&
    voxbot.budy.includes("/t.me/") &&
    voxbot.budy.includes("wa.me/") &&
    voxbot.budy.includes("www.")
  ) {
    await voxbot
      .groupParticipantsUpdate(voxchat.chat, [voxbot.sender], "remove")
      .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
    await voxchat.reply(
      `*😥Apologies:* _${voxbot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await voxbot.sendMessage(voxchat.chat, {
      delete: {
        remoteJid: voxchat.chat,
        fromMe: false,
        id: voxbot.quoted.id,
        participant: voxbot.quoted.sender,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      },
    });
  } else {
  }
};
