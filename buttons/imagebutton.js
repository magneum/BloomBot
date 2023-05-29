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
module.exports = async (FoxBot, Foxchat, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (FoxBot.isReply) {
    var receiver =
      FoxBot.mtype == "extendedTextMessage" &&
      FoxBot.message.extendedTextMessage.contextInfo != null
        ? FoxBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await FoxBot.sendMessage(
      Foxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*FoxBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${FoxBot.prefix}Dashboard`,
            buttonText: { displayText: `${FoxBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${FoxBot.prefix}Help`,
            buttonText: { displayText: `${FoxBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Foxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender, receiver] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (FoxBot.mentionByTag) {
    var receiver =
      FoxBot.mtype == "extendedTextMessage" &&
      FoxBot.message.extendedTextMessage.contextInfo != null
        ? FoxBot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await FoxBot.sendMessage(
      Foxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*FoxBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${FoxBot.prefix}Dashboard`,
            buttonText: { displayText: `${FoxBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${FoxBot.prefix}Help`,
            buttonText: { displayText: `${FoxBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Foxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender, receiver] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await FoxBot.sendMessage(
      Foxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*FoxBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${FoxBot.prefix}Dashboard`,
            buttonText: { displayText: `${FoxBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${FoxBot.prefix}Help`,
            buttonText: { displayText: `${FoxBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Foxchat.sender],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
  }
};
