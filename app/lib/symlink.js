"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║>> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║>> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║>> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║>> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║>> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║>> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║>> 📞 Need assistance or have issues? Contact our developers.
//  ║>> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║>> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║>>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║>>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║>>    subsidiaries. This is an independent and unofficial software.
//  ║>>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("🔥/config/index");
const moment = require("moment-timezone");
module.exports = async (BloomBot, Sockey, update, store) => {
  BloomBot.body =
    Sockey.mtype === "conversation"
      ? Sockey.message.conversation
      : Sockey.mtype == "imageMessage"
      ? Sockey.message.imageMessage.caption
      : Sockey.mtype == "videoMessage"
      ? Sockey.message.videoMessage.caption
      : Sockey.mtype == "extendedTextMessage"
      ? Sockey.message.extendedTextMessage.text
      : Sockey.mtype == "buttonsResponseMessage"
      ? Sockey.message.buttonsResponseMessage.selectedButtonId
      : Sockey.mtype == "listResponseMessage"
      ? Sockey.message.listResponseMessage.singleSelectReply.selectedRowId
      : Sockey.mtype == "templateButtonReplyMessage"
      ? Sockey.message.templateButtonReplyMessage.selectedId
      : Sockey.mtype === "messageContextInfo"
      ? Sockey.message.buttonsResponseMessage?.selectedButtonId ||
        Sockey.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Sockey.text
      : "";
  BloomBot.budy = typeof Sockey.text == "string" ? Sockey.text : "";
  BloomBot.icmd = BloomBot.body.startsWith(prefix);
  BloomBot.isCommand =
    prefix.includes(BloomBot.body != "" && BloomBot.body.slice(0, 1)) &&
    BloomBot.body.slice(1) != "";
  BloomBot.command = BloomBot.isCommand
    ? BloomBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  BloomBot.args = BloomBot.body.trim().split(/ +/).slice(1);
  BloomBot.pushname = Sockey.pushName || "No Name";
  BloomBot.botNumber = await BloomBot.decodeJid(BloomBot.user.id);
  BloomBot.byMyself = Sockey.sender == BloomBot.botNumber ? true : false;
  BloomBot.Fullarg = BloomBot.args.join(" ");
  BloomBot.contant = q = BloomBot.args.join(" ");
  BloomBot.quoted = Sockey.quoted ? Sockey.quoted : Sockey;
  BloomBot.mime = (BloomBot.quoted.msg || BloomBot.quoted).mimetype || "";
  BloomBot.isMedia = /image|video|sticker|audio/.test(BloomBot.mime);
  BloomBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  BloomBot.isCreator = [BloomBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(Sockey.sender);
  BloomBot.mentionByTag =
    Sockey.mtype == "extendedTextMessage" &&
    Sockey.message.extendedTextMessage.contextInfo != null
      ? Sockey.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  BloomBot.mentionByReply =
    Sockey.mtype == "extendedTextMessage" &&
    Sockey.message.extendedTextMessage.contextInfo != null
      ? Sockey.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  require("./router")(BloomBot, Sockey, update, store);

  if (!Sockey.isGroup && BloomBot.command) {
    if (BloomBot.command == "bot") {
      if (MAINTAINANCE_MODE === "on" && !BloomBot.isSudo) {
        return await BloomBot.sendMessage(
          Sockey.chat,
          {
            gifPlayback: true,
            video: BloomBot.fs.readFileSync("./public/Maintenance.mp4"),
            caption: `*📢Maintenance Mode On*
*😥Apologies:* _${BloomBot.pushname}_
> come back another time`,
            mentions: [Sockey.sender],
          },
          { quoted: Sockey },
        );
      } else {
        require("🌟/lib/library")(BloomBot, Sockey, update, store);
        return await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "🌻",
            key: Sockey.key,
          },
        });
      }
    } else {
      await BloomBot.UserPrivate.findOne(
        {
          Id: Sockey.sender,
        },
        async (error, user) => {
          if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
          if (!user) {
            new BloomBot.UserPrivate({
              Id: Sockey.sender,
              Amount: 1,
            })
              .save()
              .catch(async (error) =>
                BloomBot.handlerror(BloomBot, Sockey, error),
              );
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*Dear* _${BloomBot.pushname || BloomBot.tagname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings 1/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display,
            );
          } else if (user.Amount < 4) {
            user.Amount = user.Amount + 1;
            await user
              .save()
              .catch(async (error) =>
                BloomBot.handlerror(BloomBot, Sockey, error),
              );
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*Dear* _${BloomBot.pushname || BloomBot.tagname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display,
            );
          } else {
            await user
              .delete()
              .catch(async (error) =>
                BloomBot.handlerror(BloomBot, Sockey, error),
              );
            return await BloomBot.updateBlockStatus(
              Sockey.sender,
              "block",
            ).catch(async (error) =>
              BloomBot.handlerror(BloomBot, Sockey, error),
            );
          }
        },
      );
    }
  }
  if (Sockey.isGroup && BloomBot.command) {
    BloomBot.userBanCheck.findOne(
      {
        Id: Sockey.sender,
      },
      (error, banCheck) => {
        if (error) {
          return Sockey.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
• ${error}`);
        }
        BloomBot.userBanCheck.findOne(
          {
            Id: Sockey.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return Sockey.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
• ${error}`);
            }
            if (banCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
            if (groupCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
            BloomBot.LinkList.findOne(
              {
                serverId: Sockey.chat,
              },
              async (error, server) => {
                if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
                if (!server) return;
                require("🔥/utils/antilink")(BloomBot, Sockey);
                if (MAINTAINANCE_MODE === "on" && !BloomBot.isSudo) {
                  return await BloomBot.sendMessage(
                    Sockey.chat,
                    {
                      gifPlayback: true,
                      video: BloomBot.fs.readFileSync(
                        "./public/Maintenance.mp4",
                      ),
                      caption: `*📢Maintenance Mode On*
*😥Apologies:* _${BloomBot.pushname}_
> come back another time`,
                      mentions: [Sockey.sender],
                    },
                    { quoted: Sockey },
                  );
                } else {
                  require("./library.js")(BloomBot, Sockey, update, store);
                  return await BloomBot.sendMessage(Sockey.chat, {
                    react: {
                      text: "🌻",
                      key: Sockey.key,
                    },
                  });
                }
              },
            );
          },
        );
      },
    );
  }

  return BloomBot;
};
