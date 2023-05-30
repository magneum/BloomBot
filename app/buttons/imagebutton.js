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
module.exports = async (Nekobot, Nekos, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (Nekobot.isReply) {
    var receiver =
      Nekobot.mtype == "extendedTextMessage" &&
      Nekobot.message.extendedTextMessage.contextInfo != null
        ? Nekobot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await Nekobot.sendMessage(
      Nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Nekobot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Nekobot.prefix}Dashboard`,
            buttonText: { displayText: `${Nekobot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Nekobot.prefix}Help`,
            buttonText: { displayText: `${Nekobot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Nekos.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Nekos.sender, receiver] },
        quoted: Nekos,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (Nekobot.mentionByTag) {
    var receiver =
      Nekobot.mtype == "extendedTextMessage" &&
      Nekobot.message.extendedTextMessage.contextInfo != null
        ? Nekobot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await Nekobot.sendMessage(
      Nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Nekobot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Nekobot.prefix}Dashboard`,
            buttonText: { displayText: `${Nekobot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Nekobot.prefix}Help`,
            buttonText: { displayText: `${Nekobot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Nekos.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Nekos.sender, receiver] },
        quoted: Nekos,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await Nekobot.sendMessage(
      Nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Nekobot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Nekobot.prefix}Dashboard`,
            buttonText: { displayText: `${Nekobot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Nekobot.prefix}Help`,
            buttonText: { displayText: `${Nekobot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Nekos.sender],
      },
      {
        contextInfo: { mentionedJid: [Nekos.sender] },
        quoted: Nekos,
      }
    ).catch((e) => console.log(e));
  }
};
