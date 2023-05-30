//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var moment = require("moment-timezone");
module.exports = async (Nekobot, Nekos, update, store) => {
  Nekobot.body =
    Nekos.mtype === "conversation"
      ? Nekos.message.conversation
      : Nekos.mtype == "imageMessage"
      ? Nekos.message.imageMessage.caption
      : Nekos.mtype == "videoMessage"
      ? Nekos.message.videoMessage.caption
      : Nekos.mtype == "extendedTextMessage"
      ? Nekos.message.extendedTextMessage.text
      : Nekos.mtype == "buttonsResponseMessage"
      ? Nekos.message.buttonsResponseMessage.selectedButtonId
      : Nekos.mtype == "listResponseMessage"
      ? Nekos.message.listResponseMessage.singleSelectReply.selectedRowId
      : Nekos.mtype == "templateButtonReplyMessage"
      ? Nekos.message.templateButtonReplyMessage.selectedId
      : Nekos.mtype === "messageContextInfo"
      ? Nekos.message.buttonsResponseMessage?.selectedButtonId ||
        Nekos.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Nekos.text
      : "";
  Nekobot.budy = typeof Nekos.text == "string" ? Nekos.text : "";
  Nekobot.icmd = Nekobot.body.startsWith(prefix);
  Nekobot.isCommand =
    prefix.includes(Nekobot.body != "" && Nekobot.body.slice(0, 1)) &&
    Nekobot.body.slice(1) != "";
  Nekobot.command = Nekobot.isCommand
    ? Nekobot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  Nekobot.args = Nekobot.body.trim().split(/ +/).slice(1);
  Nekobot.pushname = Nekos.pushName || "No Name";
  Nekobot.botNumber = await Nekobot.decodeJid(Nekobot.user.id);
  Nekobot.frome = Nekos.sender == Nekobot.botNumber ? true : false;
  Nekobot.Fullarg = Nekobot.args.join(" ");
  Nekobot.contant = q = Nekobot.args.join(" ");
  Nekobot.quoted = Nekos.quoted ? Nekos.quoted : Nekos;
  Nekobot.mime = (Nekobot.quoted.msg || Nekobot.quoted).mimetype || "";
  Nekobot.isMedia = /image|video|sticker|audio/.test(Nekobot.mime);
  Nekobot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  Nekobot.isCreator = [Nekobot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(Nekos.sender);
  Nekobot.mentionByTag =
    Nekos.mtype == "extendedTextMessage" &&
    Nekos.message.extendedTextMessage.contextInfo != null
      ? Nekos.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  Nekobot.mentionByReply =
    Nekos.mtype == "extendedTextMessage" &&
    Nekos.message.extendedTextMessage.contextInfo != null
      ? Nekos.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./NekoLink")(Nekobot, Nekos, update, store);
  if (!Nekos.isGroup && Nekobot.command)
    return require("@/auth/noPrivate")(Nekobot, Nekos, update);
  if (Nekos.isGroup && Nekobot.command)
    Nekobot.userBanCheck.findOne(
      {
        Id: Nekos.sender,
      },
      (error, banCheck) => {
        if (error) {
          return Nekos.reply(`*😥Apologies:* _${Nekobot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        Nekobot.userBanCheck.findOne(
          {
            Id: Nekos.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return Nekos.reply(`*😥Apologies:* _${Nekobot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !Nekobot.frome && !Nekobot.isSudo) return;
            if (groupCheck && !Nekobot.frome && !Nekobot.isSudo) return;
            await Nekobot.LinkList.findOne(
              {
                serverId: Nekos.chat,
              },
              async (error, server) => {
                if (error) return Nekobot.handlerror(Nekobot, Nekos, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(Nekobot, Nekos);
              }
            );

            // respA = await Nekobot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // Nekobot.memberRespA[i] = respA.participants[i].id;

            // respB = await Nekobot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // Nekobot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !Nekobot.fromme &&
            // !Nekobot.isSudo &&
            // !Nekobot.varResp.includes(Nekobot.command) &&
            // !Nekobot.memberRespA.includes(Nekos.sender) &&
            // !Nekobot.memberRespB.includes(Nekos.sender)
            // ) {
            // return await Nekobot.sendMessage(
            // Nekos.chat,
            // {
            // gifPlayback: true,
            // video: Nekobot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${Nekobot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [Nekos.sender],
            // },
            // { quoted: Nekos }
            // );
            // }

            if (process.env.runtype === "devar" && !Nekobot.isSudo) {
              return await Nekobot.sendMessage(
                Nekos.chat,
                {
                  gifPlayback: true,
                  video: Nekobot.fs.readFileSync(
                    "./public/Nekobot/Nekobot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${Nekobot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [Nekos.sender],
                },
                { quoted: Nekos }
              );
            } else
              await Nekobot.sendMessage(Nekos.chat, {
                react: {
                  text: "🔖",
                  key: Nekos.key,
                },
              });
            return await require("@/server/library")(
              Nekobot,
              Nekos,
              update,
              store
            );
          }
        );
      }
    );
  return Nekobot;
};
