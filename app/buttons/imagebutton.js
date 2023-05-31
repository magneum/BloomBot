//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (BloomBot, mags, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (BloomBot.isReply) {
    const receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: imåge },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*ⒸBloomBot by Magneum™*\n*💻HomePage:* https://bit.ly/magneum\n*🏘️Group:* https://tinyurl.com/magneum",
        buttons: [
          {
            buttonId: `${BloomBot.prefix}Dashboard`,
            buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${BloomBot.prefix}Help`,
            buttonText: { displayText: `${BloomBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [mags.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [mags.sender, receiver] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (BloomBot.mentionByTag) {
    const receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: imåge },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*ⒸBloomBot by Magneum™*\n*💻HomePage:* https://bit.ly/magneum\n*🏘️Group:* https://tinyurl.com/magneum",
        buttons: [
          {
            buttonId: `${BloomBot.prefix}Dashboard`,
            buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${BloomBot.prefix}Help`,
            buttonText: { displayText: `${BloomBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [mags.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [mags.sender, receiver] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: imåge },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*ⒸBloomBot by Magneum™*\n*💻HomePage:* https://bit.ly/magneum\n*🏘️Group:* https://tinyurl.com/magneum",
        buttons: [
          {
            buttonId: `${BloomBot.prefix}Dashboard`,
            buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${BloomBot.prefix}Help`,
            buttonText: { displayText: `${BloomBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [mags.sender],
      },
      {
        contextInfo: { mentionedJid: [mags.sender] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
  }
};
