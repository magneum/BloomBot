"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
module.exports = async (BloomBot, mags, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (BloomBot.isReply) {
    const receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer:
          "*ⒸBloomBot (md) by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum",
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
        headerType: 5,
        mentions: [mags.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [mags.sender, receiver] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot (md) by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (BloomBot.mentionByTag) {
    const receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer:
          "*ⒸBloomBot (md) by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum",
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
        headerType: 5,
        mentions: [mags.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [mags.sender, receiver] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot (md) by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await BloomBot.sendMessage(
      mags.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ChatId:* ${mags.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer:
          "*ⒸBloomBot (md) by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum",
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
        headerType: 5,
        mentions: [mags.sender],
      },
      {
        contextInfo: { mentionedJid: [mags.sender] },
        quoted: mags,
      }
    ).catch((e) => console.log(e));
  }
};