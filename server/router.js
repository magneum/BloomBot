//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var moment = require("moment-timezone");
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  Voxbot.body =
    Voxchat.mtype === "conversation"
      ? Voxchat.message.conversation
      : Voxchat.mtype == "imageMessage"
      ? Voxchat.message.imageMessage.caption
      : Voxchat.mtype == "videoMessage"
      ? Voxchat.message.videoMessage.caption
      : Voxchat.mtype == "extendedTextMessage"
      ? Voxchat.message.extendedTextMessage.text
      : Voxchat.mtype == "buttonsResponseMessage"
      ? Voxchat.message.buttonsResponseMessage.selectedButtonId
      : Voxchat.mtype == "listResponseMessage"
      ? Voxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Voxchat.mtype == "templateButtonReplyMessage"
      ? Voxchat.message.templateButtonReplyMessage.selectedId
      : Voxchat.mtype === "messageContextInfo"
      ? Voxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Voxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Voxchat.text
      : "";
  Voxbot.budy = typeof Voxchat.text == "string" ? Voxchat.text : "";
  Voxbot.icmd = Voxbot.body.startsWith(prefix);
  Voxbot.isCommand =
    prefix.includes(Voxbot.body != "" && Voxbot.body.slice(0, 1)) &&
    Voxbot.body.slice(1) != "";
  Voxbot.command = Voxbot.isCommand
    ? Voxbot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  Voxbot.args = Voxbot.body.trim().split(/ +/).slice(1);
  Voxbot.pushname = Voxchat.pushName || "No Name";
  Voxbot.botNumber = await Voxbot.decodeJid(Voxbot.user.id);
  Voxbot.frome = Voxchat.sender == Voxbot.botNumber ? true : false;
  Voxbot.Fullarg = Voxbot.args.join(" ");
  Voxbot.contant = q = Voxbot.args.join(" ");
  Voxbot.quoted = Voxchat.quoted ? Voxchat.quoted : Voxchat;
  Voxbot.mime = (Voxbot.quoted.msg || Voxbot.quoted).mimetype || "";
  Voxbot.isMedia = /image|video|sticker|audio/.test(Voxbot.mime);
  Voxbot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  Voxbot.isCreator = [Voxbot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(Voxchat.sender);
  Voxbot.mentionByTag =
    Voxchat.mtype == "extendedTextMessage" &&
    Voxchat.message.extendedTextMessage.contextInfo != null
      ? Voxchat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  Voxbot.mentionByReply =
    Voxchat.mtype == "extendedTextMessage" &&
    Voxchat.message.extendedTextMessage.contextInfo != null
      ? Voxchat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./VoxLink")(Voxbot, Voxchat, update, store);
  if (!Voxchat.isGroup && Voxbot.command)
    return require("@/auth/noPrivate")(Voxbot, Voxchat, update);
  if (Voxchat.isGroup && Voxbot.command)
    Voxbot.userBanCheck.findOne(
      {
        Id: Voxchat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        Voxbot.userBanCheck.findOne(
          {
            Id: Voxchat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !Voxbot.frome && !Voxbot.isSudo) return;
            if (groupCheck && !Voxbot.frome && !Voxbot.isSudo) return;
            await Voxbot.LinkList.findOne(
              {
                serverId: Voxchat.chat,
              },
              async (error, server) => {
                if (error) return Voxbot.handlerror(Voxbot, Voxchat, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(Voxbot, Voxchat);
              }
            );

            // respA = await Voxbot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // Voxbot.memberRespA[i] = respA.participants[i].id;

            // respB = await Voxbot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // Voxbot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !Voxbot.fromme &&
            // !Voxbot.isSudo &&
            // !Voxbot.varResp.includes(Voxbot.command) &&
            // !Voxbot.memberRespA.includes(Voxchat.sender) &&
            // !Voxbot.memberRespB.includes(Voxchat.sender)
            // ) {
            // return await Voxbot.sendMessage(
            // Voxchat.chat,
            // {
            // gifPlayback: true,
            // video: Voxbot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${Voxbot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [Voxchat.sender],
            // },
            // { quoted: Voxchat }
            // );
            // }

            if (process.env.runtype === "devar" && !Voxbot.isSudo) {
              return await Voxbot.sendMessage(
                Voxchat.chat,
                {
                  gifPlayback: true,
                  video: Voxbot.fs.readFileSync(
                    "./public/src/Voxbot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${Voxbot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [Voxchat.sender],
                },
                { quoted: Voxchat }
              );
            } else
              await Voxbot.sendMessage(Voxchat.chat, {
                react: {
                  text: "🔖",
                  key: Voxchat.key,
                },
              });
            return await require("@/server/library")(
              Voxbot,
              Voxchat,
              update,
              store
            );
          }
        );
      }
    );
  return Voxbot;
};
