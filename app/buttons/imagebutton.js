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
module.exports = async (OpenBot, ocID, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (OpenBot.isReply) {
    var receiver =
      OpenBot.mtype == "extendedTextMessage" &&
      OpenBot.message.extendedTextMessage.contextInfo != null
        ? OpenBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await OpenBot.sendMessage(
      ocID.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${ocID.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*OpenBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}Dashboard`,
            buttonText: { displayText: `${OpenBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${OpenBot.prefix}Help`,
            buttonText: { displayText: `${OpenBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ocID.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ocID.sender, receiver] },
        quoted: ocID,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (OpenBot.mentionByTag) {
    var receiver =
      OpenBot.mtype == "extendedTextMessage" &&
      OpenBot.message.extendedTextMessage.contextInfo != null
        ? OpenBot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await OpenBot.sendMessage(
      ocID.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${ocID.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*OpenBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}Dashboard`,
            buttonText: { displayText: `${OpenBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${OpenBot.prefix}Help`,
            buttonText: { displayText: `${OpenBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ocID.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ocID.sender, receiver] },
        quoted: ocID,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await OpenBot.sendMessage(
      ocID.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${ocID.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*OpenBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}Dashboard`,
            buttonText: { displayText: `${OpenBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${OpenBot.prefix}Help`,
            buttonText: { displayText: `${OpenBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ocID.sender],
      },
      {
        contextInfo: { mentionedJid: [ocID.sender] },
        quoted: ocID,
      }
    ).catch((e) => console.log(e));
  }
};
