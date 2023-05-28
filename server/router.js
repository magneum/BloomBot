//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var moment = require("moment-timezone");
module.exports = async (whatsbot, whatschat, update, store) => {
  whatsbot.body =
    whatschat.mtype === "conversation"
      ? whatschat.message.conversation
      : whatschat.mtype == "imageMessage"
      ? whatschat.message.imageMessage.caption
      : whatschat.mtype == "videoMessage"
      ? whatschat.message.videoMessage.caption
      : whatschat.mtype == "extendedTextMessage"
      ? whatschat.message.extendedTextMessage.text
      : whatschat.mtype == "buttonsResponseMessage"
      ? whatschat.message.buttonsResponseMessage.selectedButtonId
      : whatschat.mtype == "listResponseMessage"
      ? whatschat.message.listResponseMessage.singleSelectReply.selectedRowId
      : whatschat.mtype == "templateButtonReplyMessage"
      ? whatschat.message.templateButtonReplyMessage.selectedId
      : whatschat.mtype === "messageContextInfo"
      ? whatschat.message.buttonsResponseMessage?.selectedButtonId ||
        whatschat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        whatschat.text
      : "";
  whatsbot.budy = typeof whatschat.text == "string" ? whatschat.text : "";
  whatsbot.icmd = whatsbot.body.startsWith(prefix);
  whatsbot.isCommand =
    prefix.includes(whatsbot.body != "" && whatsbot.body.slice(0, 1)) &&
    whatsbot.body.slice(1) != "";
  whatsbot.command = whatsbot.isCommand
    ? whatsbot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  whatsbot.args = whatsbot.body.trim().split(/ +/).slice(1);
  whatsbot.pushname = whatschat.pushName || "No Name";
  whatsbot.botNumber = await whatsbot.decodeJid(whatsbot.user.id);
  whatsbot.frome = whatschat.sender == whatsbot.botNumber ? true : false;
  whatsbot.Fullarg = whatsbot.args.join(" ");
  whatsbot.contant = q = whatsbot.args.join(" ");
  whatsbot.quoted = whatschat.quoted ? whatschat.quoted : whatschat;
  whatsbot.mime = (whatsbot.quoted.msg || whatsbot.quoted).mimetype || "";
  whatsbot.isMedia = /image|video|sticker|audio/.test(whatsbot.mime);
  whatsbot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  whatsbot.isCreator = [whatsbot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(whatschat.sender);
  whatsbot.mentionByTag =
    whatschat.mtype == "extendedTextMessage" &&
    whatschat.message.extendedTextMessage.contextInfo != null
      ? whatschat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  whatsbot.mentionByReply =
    whatschat.mtype == "extendedTextMessage" &&
    whatschat.message.extendedTextMessage.contextInfo != null
      ? whatschat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./whatsLink")(whatsbot, whatschat, update, store);
  if (!whatschat.isGroup && whatsbot.command)
    return require("../auth/noPrivate")(whatsbot, whatschat, update);
  if (whatschat.isGroup && whatsbot.command)
    whatsbot.userBanCheck.findOne(
      {
        Id: whatschat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        whatsbot.userBanCheck.findOne(
          {
            Id: whatschat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !whatsbot.frome && !whatsbot.isSudo) return;
            if (groupCheck && !whatsbot.frome && !whatsbot.isSudo) return;
            await whatsbot.LinkList.findOne(
              {
                serverId: whatschat.chat,
              },
              async (error, server) => {
                if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(whatsbot, whatschat);
              }
            );

            // respA = await whatsbot.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // whatsbot.memberRespA[i] = respA.participants[i].id;

            // respB = await whatsbot.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // whatsbot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !whatsbot.fromme &&
            // !whatsbot.isSudo &&
            // !whatsbot.letResp.includes(whatsbot.command) &&
            // !whatsbot.memberRespA.includes(whatschat.sender) &&
            // !whatsbot.memberRespB.includes(whatschat.sender)
            // ) {
            // return await whatsbot.sendMessage(
            // whatschat.chat,
            // {
            // gifPlayback: true,
            // video: whatsbot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${whatsbot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [whatschat.sender],
            // },
            // { quoted: whatschat }
            // );
            // }

            if (process.env.runtype === "devar" && !whatsbot.isSudo) {
              return await whatsbot.sendMessage(
                whatschat.chat,
                {
                  gifPlayback: true,
                  video: whatsbot.fs.readFileSync("./public/whatsbot_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${whatsbot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [whatschat.sender],
                },
                { quoted: whatschat }
              );
            } else
              await whatsbot.sendMessage(whatschat.chat, {
                react: {
                  text: "🔖",
                  key: whatschat.key,
                },
              });
            return await require("../server/library")(
              whatsbot,
              whatschat,
              update,
              store
            );
          }
        );
      }
    );
  return whatsbot;
};
