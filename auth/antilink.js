//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logger/global.js");
exports.noLink = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ) => {
  let FetchCurrentGroupLink = await ꪜᴏxʙᴏᴛ.groupInviteCode(ᴠᴏxᴄ.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(ꪜᴏxʙᴏᴛ.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(ꪜᴏxʙᴏᴛ.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await ꪜᴏxʙᴏᴛ
      .groupParticipantsUpdate(ᴠᴏxᴄ.chat, [ꪜᴏxʙᴏᴛ.sender], "remove")
      .catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
    await ᴠᴏxᴄ.reply(
      `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
      delete: {
        remoteJid: ᴠᴏxᴄ.chat,
        fromMe: false,
        id: ꪜᴏxʙᴏᴛ.quoted.id,
        participant: ꪜᴏxʙᴏᴛ.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    ꪜᴏxʙᴏᴛ.budy.includes("https://t.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("discord.gg") &&
    ꪜᴏxʙᴏᴛ.budy.includes("discord.com") &&
    ꪜᴏxʙᴏᴛ.budy.includes("/t.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("wa.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("www.")
  ) {
    await ꪜᴏxʙᴏᴛ
      .groupParticipantsUpdate(ᴠᴏxᴄ.chat, [ꪜᴏxʙᴏᴛ.sender], "remove")
      .catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
    await ᴠᴏxᴄ.reply(
      `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
      delete: {
        remoteJid: ᴠᴏxᴄ.chat,
        fromMe: false,
        id: ꪜᴏxʙᴏᴛ.quoted.id,
        participant: ꪜᴏxʙᴏᴛ.quoted.sender,
      },
    });
  } else {
  }
};
