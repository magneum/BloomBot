"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
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
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("@/config/index.js");

module.exports = async (BloomBot, store, logger) => {
  BloomBot.ev.on("group-participants.update", async (update) => {
    let metadata = await BloomBot.groupMetadata(update.id);
    let participants = update.participants;
    logger.info(update);
    for (let sperson of participants) {
      let imåge;
      try {
        imåge = await BloomBot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = BloomBot.display;
      }

      if (update.action == "add") {
        return await BloomBot.sendMessage(
          update.id,
          {
            image: { url: imåge },
            caption: `*🌻 Welcome to the Group! 🌻*

👋 Hi @${sperson.replace(/['@s whatsapp.net']/g, "")}!

✨ Congratulations on finding your way to this awesome group! I'm BloomBot, your cheerful WhatsApp bot here to assist you.

🎉 Get ready to have fun, learn, and connect with other amazing individuals. If you ever have any questions or need assistance, don't hesitate to ask.

📚 To get started, you can type ${
              BloomBot.prefix
            }menu or use the buttons below to explore different features.

🌼 *Buttons:*
1. ${BloomBot.prefix}Git - Access the GitHub page.
2. ${BloomBot.prefix}Menu - Access the command menu.
3. ${BloomBot.prefix}Dashboard - Access the dashboard.
4. ${BloomBot.prefix}home - Learn more about BloomBot.

🌈 Let's make this group a vibrant and engaging community together!`,
            footer: "*Ⓒ BloomBot by Magneum™*\n*💻 homepage:* bit.ly/magneum",
            buttons: [
              {
                buttonId: `${BloomBot.prefix}Smile`,
                buttonText: { displayText: `${BloomBot.prefix}Smile` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Menu`,
                buttonText: { displayText: `${BloomBot.prefix}Menu` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Dashboard`,
                buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [sperson],
          },
          {
            contextInfo: { mentionedJid: [sperson] },
          },
        ).catch(async (error) => logger.error(error));
      } else if (update.action == "remove") {
        return await BloomBot.sendMessage(
          update.id,
          {
            image: { url: imåge },
            caption: `*🌻 Farewell! 🌻*

👋 @${sperson.replace(/['@s whatsapp.net']/g, "")}, we're sad to see you leave.

😔 Although you won't be with us in the group anymore, your presence and contributions will be missed. We hope you had a great time here and wish you all the best on your future endeavors.

✨ Remember, the door is always open for you. If you ever decide to come back, we'll be here to welcome you with open arms.

🌈 Take care and stay amazing!`,
            footer: "*Ⓒ BloomBot by Magneum™*\n*💻 homepage:* bit.ly/magneum",
            buttons: [
              {
                buttonId: `${BloomBot.prefix}Cry`,
                buttonText: { displayText: `${BloomBot.prefix}Cry` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Hug`,
                buttonText: { displayText: `${BloomBot.prefix}Hug` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Menu`,
                buttonText: { displayText: `${BloomBot.prefix}Menu` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [sperson],
          },
          {
            contextInfo: { mentionedJid: [sperson] },
          },
        ).catch(async (error) => logger.error(error));
      } else {
        return;
      }
    }
  });
  return BloomBot;
};
