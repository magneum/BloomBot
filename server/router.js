//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var moment = require("moment-timezone");
module.exports = async (NekoBot, nekos, update, store) => {
  NekoBot.body =
    nekos.mtype === "conversation"
      ? nekos.message.conversation
      : nekos.mtype == "imageMessage"
      ? nekos.message.imageMessage.caption
      : nekos.mtype == "videoMessage"
      ? nekos.message.videoMessage.caption
      : nekos.mtype == "extendedTextMessage"
      ? nekos.message.extendedTextMessage.text
      : nekos.mtype == "buttonsResponseMessage"
      ? nekos.message.buttonsResponseMessage.selectedButtonId
      : nekos.mtype == "listResponseMessage"
      ? nekos.message.listResponseMessage.singleSelectReply.selectedRowId
      : nekos.mtype == "templateButtonReplyMessage"
      ? nekos.message.templateButtonReplyMessage.selectedId
      : nekos.mtype === "messageContextInfo"
      ? nekos.message.buttonsResponseMessage?.selectedButtonId ||
        nekos.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        nekos.text
      : "";
  NekoBot.budy = typeof nekos.text == "string" ? nekos.text : "";
  NekoBot.icmd = NekoBot.body.startsWith(prefix);
  NekoBot.isCommand =
    prefix.includes(NekoBot.body != "" && NekoBot.body.slice(0, 1)) &&
    NekoBot.body.slice(1) != "";
  NekoBot.command = NekoBot.isCommand
    ? NekoBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  NekoBot.args = NekoBot.body.trim().split(/ +/).slice(1);
  NekoBot.pushname = nekos.pushName || "No Name";
  NekoBot.botNumber = await NekoBot.decodeJid(NekoBot.user.id);
  NekoBot.frome = nekos.sender == NekoBot.botNumber ? true : false;
  NekoBot.Fullarg = NekoBot.args.join(" ");
  NekoBot.contant = q = NekoBot.args.join(" ");
  NekoBot.quoted = nekos.quoted ? nekos.quoted : nekos;
  NekoBot.mime = (NekoBot.quoted.msg || NekoBot.quoted).mimetype || "";
  NekoBot.isMedia = /image|video|sticker|audio/.test(NekoBot.mime);
  NekoBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  NekoBot.isCreator = [NekoBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(nekos.sender);
  NekoBot.mentionByTag =
    nekos.mtype == "extendedTextMessage" &&
    nekos.message.extendedTextMessage.contextInfo != null
      ? nekos.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  NekoBot.mentionByReply =
    nekos.mtype == "extendedTextMessage" &&
    nekos.message.extendedTextMessage.contextInfo != null
      ? nekos.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./nekoLink")(NekoBot, nekos, update, store);
  if (!nekos.isGroup && NekoBot.command)
    return require("@/auth/noPrivate")(NekoBot, nekos, update);
  if (nekos.isGroup && NekoBot.command)
    NekoBot.userBanCheck.findOne(
      {
        Id: nekos.sender,
      },
      (error, banCheck) => {
        if (error) {
          return nekos.reply(`*😥Apologies:* _${NekoBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        NekoBot.userBanCheck.findOne(
          {
            Id: nekos.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return nekos.reply(`*😥Apologies:* _${NekoBot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !NekoBot.frome && !NekoBot.isSudo) return;
            if (groupCheck && !NekoBot.frome && !NekoBot.isSudo) return;
            await NekoBot.LinkList.findOne(
              {
                serverId: nekos.chat,
              },
              async (error, server) => {
                if (error) return NekoBot.handlerror(NekoBot, nekos, error);
                if (!server) return;
                var { noLink } = require("@/auth/antilink");
                return noLink(NekoBot, nekos);
              }
            );

            // respA = await NekoBot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // NekoBot.memberRespA[i] = respA.participants[i].id;

            // respB = await NekoBot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // NekoBot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !NekoBot.fromme &&
            // !NekoBot.isSudo &&
            // !NekoBot.varResp.includes(NekoBot.command) &&
            // !NekoBot.memberRespA.includes(nekos.sender) &&
            // !NekoBot.memberRespB.includes(nekos.sender)
            // ) {
            // return await NekoBot.sendMessage(
            // nekos.chat,
            // {
            // gifPlayback: true,
            // video: NekoBot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${NekoBot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [nekos.sender],
            // },
            // { quoted: nekos }
            // );
            // }

            if (process.env.runtype === "devar" && !NekoBot.isSudo) {
              return await NekoBot.sendMessage(
                nekos.chat,
                {
                  gifPlayback: true,
                  video: NekoBot.fs.readFileSync(
                    "./public/src/NekoBot (8)_white.png"
                  ),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${NekoBot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [nekos.sender],
                },
                { quoted: nekos }
              );
            } else
              await NekoBot.sendMessage(nekos.chat, {
                react: {
                  text: "🔖",
                  key: nekos.key,
                },
              });
            return await require("@/server/library")(
              NekoBot,
              nekos,
              update,
              store
            );
          }
        );
      }
    );
  return NekoBot;
};
