//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var moment = require("moment-timezone");
module.exports = async (BloomBot, vChat, update, store) => {
  BloomBot.body =
    vChat.mtype === "conversation"
      ? vChat.message.conversation
      : vChat.mtype == "imageMessage"
      ? vChat.message.imageMessage.caption
      : vChat.mtype == "videoMessage"
      ? vChat.message.videoMessage.caption
      : vChat.mtype == "extendedTextMessage"
      ? vChat.message.extendedTextMessage.text
      : vChat.mtype == "buttonsResponseMessage"
      ? vChat.message.buttonsResponseMessage.selectedButtonId
      : vChat.mtype == "listResponseMessage"
      ? vChat.message.listResponseMessage.singleSelectReply.selectedRowId
      : vChat.mtype == "templateButtonReplyMessage"
      ? vChat.message.templateButtonReplyMessage.selectedId
      : vChat.mtype === "messageContextInfo"
      ? vChat.message.buttonsResponseMessage?.selectedButtonId ||
        vChat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        vChat.text
      : "";
  BloomBot.budy = typeof vChat.text == "string" ? vChat.text : "";
  BloomBot.icmd = BloomBot.body.startsWith(prefix);
  BloomBot.isCommand =
    prefix.includes(BloomBot.body != "" && BloomBot.body.slice(0, 1)) &&
    BloomBot.body.slice(1) != "";
  BloomBot.command = BloomBot.isCommand
    ? BloomBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  BloomBot.args = BloomBot.body.trim().split(/ +/).slice(1);
  BloomBot.pushname = vChat.pushName || "No Name";
  BloomBot.botNumber = await BloomBot.decodeJid(BloomBot.user.id);
  BloomBot.frome = vChat.sender == BloomBot.botNumber ? true : false;
  BloomBot.Fullarg = BloomBot.args.join(" ");
  BloomBot.contant = q = BloomBot.args.join(" ");
  BloomBot.quoted = vChat.quoted ? vChat.quoted : vChat;
  BloomBot.mime = (BloomBot.quoted.msg || BloomBot.quoted).mimetype || "";
  BloomBot.isMedia = /image|video|sticker|audio/.test(BloomBot.mime);
  BloomBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  BloomBot.isCreator = [BloomBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(vChat.sender);
  BloomBot.mentionByTag =
    vChat.mtype == "extendedTextMessage" &&
    vChat.message.extendedTextMessage.contextInfo != null
      ? vChat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  BloomBot.mentionByReply =
    vChat.mtype == "extendedTextMessage" &&
    vChat.message.extendedTextMessage.contextInfo != null
      ? vChat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./relink")(BloomBot, vChat, update, store);
  if (!vChat.isGroup && BloomBot.command)
    return require("@/auth/noPrivate")(BloomBot, vChat, update);
  if (vChat.isGroup && BloomBot.command)
    BloomBot.userBanCheck.findOne(
      {
        Id: vChat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return vChat.reply(`*😥Apologies:* _${BloomBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        BloomBot.userBanCheck.findOne(
          {
            Id: vChat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return vChat.reply(`*😥Apologies:* _${BloomBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !BloomBot.frome && !BloomBot.isSudo) return;
            if (groupCheck && !BloomBot.frome && !BloomBot.isSudo) return;
            await BloomBot.LinkList.findOne(
              {
                serverId: vChat.chat,
              },
              async (error, server) => {
                if (error) return BloomBot.handlerror(BloomBot, vChat, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(BloomBot, vChat);
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
            // !BloomBot.memberRespA.includes(vChat.sender) &&
            // !BloomBot.memberRespB.includes(vChat.sender)
            // ) {
            // return await BloomBot.sendMessage(
            // vChat.chat,
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
            // mentions: [vChat.sender],
            // },
            // { quoted: vChat }
            // );
            // }

            if (process.env.runtype === "devar" && !BloomBot.isSudo) {
              return await BloomBot.sendMessage(
                vChat.chat,
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
                  mentions: [vChat.sender],
                },
                { quoted: vChat }
              );
            } else
              await BloomBot.sendMessage(vChat.chat, {
                react: {
                  text: "🌻",
                  key: vChat.key,
                },
              });
            return await require("@/server/library")(
              BloomBot,
              vChat,
              update,
              store
            );
          }
        );
      }
    );
  return BloomBot;
};
