//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var moment = require("moment-timezone");
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  Foxbot.body =
    Foxchat.mtype === "conversation"
      ? Foxchat.message.conversation
      : Foxchat.mtype == "imageMessage"
      ? Foxchat.message.imageMessage.caption
      : Foxchat.mtype == "videoMessage"
      ? Foxchat.message.videoMessage.caption
      : Foxchat.mtype == "extendedTextMessage"
      ? Foxchat.message.extendedTextMessage.text
      : Foxchat.mtype == "buttonsResponseMessage"
      ? Foxchat.message.buttonsResponseMessage.selectedButtonId
      : Foxchat.mtype == "listResponseMessage"
      ? Foxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Foxchat.mtype == "templateButtonReplyMessage"
      ? Foxchat.message.templateButtonReplyMessage.selectedId
      : Foxchat.mtype === "messageContextInfo"
      ? Foxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Foxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Foxchat.text
      : "";
  Foxbot.budy = typeof Foxchat.text == "string" ? Foxchat.text : "";
  Foxbot.icmd = Foxbot.body.startsWith(prefix);
  Foxbot.isCommand =
    prefix.includes(Foxbot.body != "" && Foxbot.body.slice(0, 1)) &&
    Foxbot.body.slice(1) != "";
  Foxbot.command = Foxbot.isCommand
    ? Foxbot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  Foxbot.args = Foxbot.body.trim().split(/ +/).slice(1);
  Foxbot.pushname = Foxchat.pushName || "No Name";
  Foxbot.botNumber = await Foxbot.decodeJid(Foxbot.user.id);
  Foxbot.frome = Foxchat.sender == Foxbot.botNumber ? true : false;
  Foxbot.Fullarg = Foxbot.args.join(" ");
  Foxbot.contant = q = Foxbot.args.join(" ");
  Foxbot.quoted = Foxchat.quoted ? Foxchat.quoted : Foxchat;
  Foxbot.mime = (Foxbot.quoted.msg || Foxbot.quoted).mimetype || "";
  Foxbot.isMedia = /image|video|sticker|audio/.test(Foxbot.mime);
  Foxbot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  Foxbot.isCreator = [Foxbot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(Foxchat.sender);
  Foxbot.mentionByTag =
    Foxchat.mtype == "extendedTextMessage" &&
    Foxchat.message.extendedTextMessage.contextInfo != null
      ? Foxchat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  Foxbot.mentionByReply =
    Foxchat.mtype == "extendedTextMessage" &&
    Foxchat.message.extendedTextMessage.contextInfo != null
      ? Foxchat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./FoxLink")(Foxbot, Foxchat, update, store);
  if (!Foxchat.isGroup && Foxbot.command)
    return require("@/auth/noPrivate")(Foxbot, Foxchat, update);
  if (Foxchat.isGroup && Foxbot.command)
    Foxbot.userBanCheck.findOne(
      {
        Id: Foxchat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return Foxchat.reply(`*😥Apologies:* _${Foxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        Foxbot.userBanCheck.findOne(
          {
            Id: Foxchat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return Foxchat.reply(`*😥Apologies:* _${Foxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !Foxbot.frome && !Foxbot.isSudo) return;
            if (groupCheck && !Foxbot.frome && !Foxbot.isSudo) return;
            await Foxbot.LinkList.findOne(
              {
                serverId: Foxchat.chat,
              },
              async (error, server) => {
                if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(Foxbot, Foxchat);
              }
            );

            // respA = await Foxbot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // Foxbot.memberRespA[i] = respA.participants[i].id;

            // respB = await Foxbot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // Foxbot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !Foxbot.fromme &&
            // !Foxbot.isSudo &&
            // !Foxbot.varResp.includes(Foxbot.command) &&
            // !Foxbot.memberRespA.includes(Foxchat.sender) &&
            // !Foxbot.memberRespB.includes(Foxchat.sender)
            // ) {
            // return await Foxbot.sendMessage(
            // Foxchat.chat,
            // {
            // gifPlayback: true,
            // video: Foxbot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${Foxbot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [Foxchat.sender],
            // },
            // { quoted: Foxchat }
            // );
            // }

            if (process.env.runtype === "devar" && !Foxbot.isSudo) {
              return await Foxbot.sendMessage(
                Foxchat.chat,
                {
                  gifPlayback: true,
                  video: Foxbot.fs.readFileSync(
                    "./public/src/Foxbot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${Foxbot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [Foxchat.sender],
                },
                { quoted: Foxchat }
              );
            } else
              await Foxbot.sendMessage(Foxchat.chat, {
                react: {
                  text: "🔖",
                  key: Foxchat.key,
                },
              });
            return await require("@/server/library")(
              Foxbot,
              Foxchat,
              update,
              store
            );
          }
        );
      }
    );
  return Foxbot;
};
