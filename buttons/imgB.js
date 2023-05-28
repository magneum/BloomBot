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
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (ꪜᴏxʙᴏᴛ.isReply) {
    var receiver =
      ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
      ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
        ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (ꪜᴏxʙᴏᴛ.mentionByTag) {
    var receiver =
      ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
      ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
        ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
  }
};
