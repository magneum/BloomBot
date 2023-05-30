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
var moment = require("moment-timezone");
module.exports = async (OpenBot, ocID, update, store) => {
  OpenBot.body =
    ocID.mtype === "conversation"
      ? ocID.message.conversation
      : ocID.mtype == "imageMessage"
      ? ocID.message.imageMessage.caption
      : ocID.mtype == "videoMessage"
      ? ocID.message.videoMessage.caption
      : ocID.mtype == "extendedTextMessage"
      ? ocID.message.extendedTextMessage.text
      : ocID.mtype == "buttonsResponseMessage"
      ? ocID.message.buttonsResponseMessage.selectedButtonId
      : ocID.mtype == "listResponseMessage"
      ? ocID.message.listResponseMessage.singleSelectReply.selectedRowId
      : ocID.mtype == "templateButtonReplyMessage"
      ? ocID.message.templateButtonReplyMessage.selectedId
      : ocID.mtype === "messageContextInfo"
      ? ocID.message.buttonsResponseMessage?.selectedButtonId ||
        ocID.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        ocID.text
      : "";
  OpenBot.budy = typeof ocID.text == "string" ? ocID.text : "";
  OpenBot.icmd = OpenBot.body.startsWith(prefix);
  OpenBot.isCommand =
    prefix.includes(OpenBot.body != "" && OpenBot.body.slice(0, 1)) &&
    OpenBot.body.slice(1) != "";
  OpenBot.command = OpenBot.isCommand
    ? OpenBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  OpenBot.args = OpenBot.body.trim().split(/ +/).slice(1);
  OpenBot.pushname = ocID.pushName || "No Name";
  OpenBot.botNumber = await OpenBot.decodeJid(OpenBot.user.id);
  OpenBot.frome = ocID.sender == OpenBot.botNumber ? true : false;
  OpenBot.Fullarg = OpenBot.args.join(" ");
  OpenBot.contant = q = OpenBot.args.join(" ");
  OpenBot.quoted = ocID.quoted ? ocID.quoted : ocID;
  OpenBot.mime = (OpenBot.quoted.msg || OpenBot.quoted).mimetype || "";
  OpenBot.isMedia = /image|video|sticker|audio/.test(OpenBot.mime);
  OpenBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  OpenBot.isCreator = [OpenBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(ocID.sender);
  OpenBot.mentionByTag =
    ocID.mtype == "extendedTextMessage" &&
    ocID.message.extendedTextMessage.contextInfo != null
      ? ocID.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  OpenBot.mentionByReply =
    ocID.mtype == "extendedTextMessage" &&
    ocID.message.extendedTextMessage.contextInfo != null
      ? ocID.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./whatsLink")(OpenBot, ocID, update, store);
  if (!ocID.isGroup && OpenBot.command)
    return require("@/auth/noPrivate")(OpenBot, ocID, update);
  if (ocID.isGroup && OpenBot.command)
    OpenBot.userBanCheck.findOne(
      {
        Id: ocID.sender,
      },
      (error, banCheck) => {
        if (error) {
          return ocID.reply(`*😥Apologies:* _${OpenBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        OpenBot.userBanCheck.findOne(
          {
            Id: ocID.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return ocID.reply(`*😥Apologies:* _${OpenBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !OpenBot.frome && !OpenBot.isSudo) return;
            if (groupCheck && !OpenBot.frome && !OpenBot.isSudo) return;
            await OpenBot.LinkList.findOne(
              {
                serverId: ocID.chat,
              },
              async (error, server) => {
                if (error) return OpenBot.handlerror(OpenBot, ocID, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(OpenBot, ocID);
              }
            );

            // respA = await OpenBot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // OpenBot.memberRespA[i] = respA.participants[i].id;

            // respB = await OpenBot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // OpenBot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !OpenBot.fromme &&
            // !OpenBot.isSudo &&
            // !OpenBot.varResp.includes(OpenBot.command) &&
            // !OpenBot.memberRespA.includes(ocID.sender) &&
            // !OpenBot.memberRespB.includes(ocID.sender)
            // ) {
            // return await OpenBot.sendMessage(
            // ocID.chat,
            // {
            // gifPlayback: true,
            // video: OpenBot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${OpenBot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [ocID.sender],
            // },
            // { quoted: ocID }
            // );
            // }

            if (process.env.runtype === "devar" && !OpenBot.isSudo) {
              return await OpenBot.sendMessage(
                ocID.chat,
                {
                  gifPlayback: true,
                  video: OpenBot.fs.readFileSync(
                    "./public/OpenBot/OpenBot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${OpenBot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [ocID.sender],
                },
                { quoted: ocID }
              );
            } else
              await OpenBot.sendMessage(ocID.chat, {
                react: {
                  text: "🔖",
                  key: ocID.key,
                },
              });
            return await require("@/server/library")(
              OpenBot,
              ocID,
              update,
              store
            );
          }
        );
      }
    );
  return OpenBot;
};
