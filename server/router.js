//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var moment = require("moment-timezone");
module.exports = async (FoxBot, Foxchat, update, store) => {
  FoxBot.body =
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
  FoxBot.budy = typeof Foxchat.text == "string" ? Foxchat.text : "";
  FoxBot.icmd = FoxBot.body.startsWith(prefix);
  FoxBot.isCommand =
    prefix.includes(FoxBot.body != "" && FoxBot.body.slice(0, 1)) &&
    FoxBot.body.slice(1) != "";
  FoxBot.command = FoxBot.isCommand
    ? FoxBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  FoxBot.args = FoxBot.body.trim().split(/ +/).slice(1);
  FoxBot.pushname = Foxchat.pushName || "No Name";
  FoxBot.BotNumber = await FoxBot.decodeJid(FoxBot.user.id);
  FoxBot.frome = Foxchat.sender == FoxBot.BotNumber ? true : false;
  FoxBot.Fullarg = FoxBot.args.join(" ");
  FoxBot.contant = q = FoxBot.args.join(" ");
  FoxBot.quoted = Foxchat.quoted ? Foxchat.quoted : Foxchat;
  FoxBot.mime = (FoxBot.quoted.msg || FoxBot.quoted).mimetype || "";
  FoxBot.isMedia = /image|video|sticker|audio/.test(FoxBot.mime);
  FoxBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  FoxBot.isCreator = [FoxBot.BotNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.Foxapp.net")
    .includes(Foxchat.sender);
  FoxBot.mentionByTag =
    Foxchat.mtype == "extendedTextMessage" &&
    Foxchat.message.extendedTextMessage.contextInfo != null
      ? Foxchat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  FoxBot.mentionByReply =
    Foxchat.mtype == "extendedTextMessage" &&
    Foxchat.message.extendedTextMessage.contextInfo != null
      ? Foxchat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./FoxLink")(FoxBot, Foxchat, update, store);
  if (!Foxchat.isGroup && FoxBot.command)
    return require("../auth/noPrivate")(FoxBot, Foxchat, update);
  if (Foxchat.isGroup && FoxBot.command)
    FoxBot.userBanCheck.findOne(
      {
        Id: Foxchat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        FoxBot.userBanCheck.findOne(
          {
            Id: Foxchat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !FoxBot.frome && !FoxBot.isSudo) return;
            if (groupCheck && !FoxBot.frome && !FoxBot.isSudo) return;
            await FoxBot.LinkList.findOne(
              {
                serverId: Foxchat.chat,
              },
              async (error, server) => {
                if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
                if (!server) return;
                var { noLink } = require("../auth/antilink");
                return noLink(FoxBot, Foxchat);
              }
            );

            // respA = await FoxBot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // FoxBot.memberRespA[i] = respA.participants[i].id;

            // respB = await FoxBot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // FoxBot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !FoxBot.fromme &&
            // !FoxBot.isSudo &&
            // !FoxBot.varResp.includes(FoxBot.command) &&
            // !FoxBot.memberRespA.includes(Foxchat.sender) &&
            // !FoxBot.memberRespB.includes(Foxchat.sender)
            // ) {
            // return await FoxBot.sendMessage(
            // Foxchat.chat,
            // {
            // gifPlayback: true,
            // video: FoxBot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${FoxBot.pushname}_

            // > You need to be verified to use Bot...
            // > join official group
            // > chat.Foxapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [Foxchat.sender],
            // },
            // { quoted: Foxchat }
            // );
            // }

            if (process.env.runtype === "devar" && !FoxBot.isSudo) {
              return await FoxBot.sendMessage(
                Foxchat.chat,
                {
                  gifPlayback: true,
                  video: FoxBot.fs.readFileSync("./public/FoxBot_white.png"),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${FoxBot.pushname}_

> Bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [Foxchat.sender],
                },
                { quoted: Foxchat }
              );
            } else
              await FoxBot.sendMessage(Foxchat.chat, {
                react: {
                  text: "🔖",
                  key: Foxchat.key,
                },
              });
            return await require("../server/library")(
              FoxBot,
              Foxchat,
              update,
              store
            );
          }
        );
      }
    );
  return FoxBot;
};
