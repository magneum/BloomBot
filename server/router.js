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
var moment = require("moment-timezone");
module.exports = async (BloomBot, mags, update, store) => {
  BloomBot.body =
    mags.mtype === "conversation"
      ? mags.message.conversation
      : mags.mtype == "imageMessage"
      ? mags.message.imageMessage.caption
      : mags.mtype == "videoMessage"
      ? mags.message.videoMessage.caption
      : mags.mtype == "extendedTextMessage"
      ? mags.message.extendedTextMessage.text
      : mags.mtype == "buttonsResponseMessage"
      ? mags.message.buttonsResponseMessage.selectedButtonId
      : mags.mtype == "listResponseMessage"
      ? mags.message.listResponseMessage.singleSelectReply.selectedRowId
      : mags.mtype == "templateButtonReplyMessage"
      ? mags.message.templateButtonReplyMessage.selectedId
      : mags.mtype === "messageContextInfo"
      ? mags.message.buttonsResponseMessage?.selectedButtonId ||
        mags.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        mags.text
      : "";
  BloomBot.budy = typeof mags.text == "string" ? mags.text : "";
  BloomBot.icmd = BloomBot.body.startsWith(prefix);
  BloomBot.isCommand =
    prefix.includes(BloomBot.body != "" && BloomBot.body.slice(0, 1)) &&
    BloomBot.body.slice(1) != "";
  BloomBot.command = BloomBot.isCommand
    ? BloomBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  BloomBot.args = BloomBot.body.trim().split(/ +/).slice(1);
  BloomBot.pushname = mags.pushName || "No Name";
  BloomBot.botNumber = await BloomBot.decodeJid(BloomBot.user.id);
  BloomBot.frome = mags.sender == BloomBot.botNumber ? true : false;
  BloomBot.Fullarg = BloomBot.args.join(" ");
  BloomBot.contant = q = BloomBot.args.join(" ");
  BloomBot.quoted = mags.quoted ? mags.quoted : mags;
  BloomBot.mime = (BloomBot.quoted.msg || BloomBot.quoted).mimetype || "";
  BloomBot.isMedia = /image|video|sticker|audio/.test(BloomBot.mime);
  BloomBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  BloomBot.isCreator = [BloomBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(mags.sender);
  BloomBot.mentionByTag =
    mags.mtype == "extendedTextMessage" &&
    mags.message.extendedTextMessage.contextInfo != null
      ? mags.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  BloomBot.mentionByReply =
    mags.mtype == "extendedTextMessage" &&
    mags.message.extendedTextMessage.contextInfo != null
      ? mags.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./relink")(BloomBot, mags, update, store);
  if (!mags.isGroup && BloomBot.command)
    return require("@/auth/noPrivate")(BloomBot, mags, update);
  if (mags.isGroup && BloomBot.command)
    BloomBot.userBanCheck.findOne(
      {
        Id: mags.sender,
      },
      (error, banCheck) => {
        if (error) {
          return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        BloomBot.userBanCheck.findOne(
          {
            Id: mags.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !BloomBot.frome && !BloomBot.isSudo) return;
            if (groupCheck && !BloomBot.frome && !BloomBot.isSudo) return;
            await BloomBot.LinkList.findOne(
              {
                serverId: mags.chat,
              },
              async (error, server) => {
                if (error) return BloomBot.handlerror(BloomBot, mags, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(BloomBot, mags);
              }
            );

            // respA = await BloomBot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // BloomBot.memberRespA[i] = respA.participants[i].id;

            // respB = await BloomBot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // BloomBot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !BloomBot.fromme &&
            // !BloomBot.isSudo &&
            // !BloomBot.varResp.includes(BloomBot.command) &&
            // !BloomBot.memberRespA.includes(mags.sender) &&
            // !BloomBot.memberRespB.includes(mags.sender)
            // ) {
            // return await BloomBot.sendMessage(
            // mags.chat,
            // {
            // gifPlayback: true,
            // video: BloomBot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${BloomBot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [mags.sender],
            // },
            // { quoted: mags }
            // );
            // }

            if (process.env.runtype === "devar" && !BloomBot.isSudo) {
              return await BloomBot.sendMessage(
                mags.chat,
                {
                  gifPlayback: true,
                  video: BloomBot.fs.readFileSync(
                    "./public/BloomBot/BloomBot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${BloomBot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [mags.sender],
                },
                { quoted: mags }
              );
            } else
              await BloomBot.sendMessage(mags.chat, {
                react: {
                  text: "🌻",
                  key: mags.key,
                },
              });
            return await require("@/server/library")(
              BloomBot,
              mags,
              update,
              store
            );
          }
        );
      }
    );
  return BloomBot;
};
