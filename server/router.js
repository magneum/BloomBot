//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var moment = require("moment-timezone");
module.exports = async (voxbot, voxchat, update, store) => {
  voxbot.body =
    voxchat.mtype === "conversation"
      ? voxchat.message.conversation
      : voxchat.mtype == "imageMessage"
      ? voxchat.message.imageMessage.caption
      : voxchat.mtype == "videoMessage"
      ? voxchat.message.videoMessage.caption
      : voxchat.mtype == "extendedTextMessage"
      ? voxchat.message.extendedTextMessage.text
      : voxchat.mtype == "buttonsResponseMessage"
      ? voxchat.message.buttonsResponseMessage.selectedButtonId
      : voxchat.mtype == "listResponseMessage"
      ? voxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : voxchat.mtype == "templateButtonReplyMessage"
      ? voxchat.message.templateButtonReplyMessage.selectedId
      : voxchat.mtype === "messageContextInfo"
      ? voxchat.message.buttonsResponseMessage?.selectedButtonId ||
        voxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        voxchat.text
      : "";
  voxbot.budy = typeof voxchat.text == "string" ? voxchat.text : "";
  voxbot.icmd = voxbot.body.startsWith(prefix);
  voxbot.isCommand =
    prefix.includes(voxbot.body != "" && voxbot.body.slice(0, 1)) &&
    voxbot.body.slice(1) != "";
  voxbot.command = voxbot.isCommand
    ? voxbot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  voxbot.args = voxbot.body.trim().split(/ +/).slice(1);
  voxbot.pushname = voxchat.pushName || "No Name";
  voxbot.botNumber = await voxbot.decodeJid(voxbot.user.id);
  voxbot.frome = voxchat.sender == voxbot.botNumber ? true : false;
  voxbot.Fullarg = voxbot.args.join(" ");
  voxbot.contant = q = voxbot.args.join(" ");
  voxbot.quoted = voxchat.quoted ? voxchat.quoted : voxchat;
  voxbot.mime = (voxbot.quoted.msg || voxbot.quoted).mimetype || "";
  voxbot.isMedia = /image|video|sticker|audio/.test(voxbot.mime);
  voxbot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  voxbot.isCreator = [voxbot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.voxapp.net")
    .includes(voxchat.sender);
  voxbot.mentionByTag =
    voxchat.mtype == "extendedTextMessage" &&
    voxchat.message.extendedTextMessage.contextInfo != null
      ? voxchat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  voxbot.mentionByReply =
    voxchat.mtype == "extendedTextMessage" &&
    voxchat.message.extendedTextMessage.contextInfo != null
      ? voxchat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./voxLink")(voxbot, voxchat, update, store);
  if (!voxchat.isGroup && voxbot.command)
    return require("../auth/noPrivate")(voxbot, voxchat, update);
  if (voxchat.isGroup && voxbot.command)
    voxbot.userBanCheck.findOne(
      {
        Id: voxchat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return voxchat.reply(`*😥Apologies:* _${voxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        voxbot.userBanCheck.findOne(
          {
            Id: voxchat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return voxchat.reply(`*😥Apologies:* _${voxbot.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !voxbot.frome && !voxbot.isSudo) return;
            if (groupCheck && !voxbot.frome && !voxbot.isSudo) return;
            await voxbot.LinkList.findOne(
              {
                serverId: voxchat.chat,
              },
              async (error, server) => {
                if (error) return voxbot.handlerror(voxbot, voxchat, error);
                if (!server) return;
                var { noLink } = require("../auth/antilink");
                return noLink(voxbot, voxchat);
              }
            );

            // respA = await voxbot.groupMetadata("120363020792949649@g.us");
            // for (var i = 0; i < respA.participants.length; i++)
            // voxbot.memberRespA[i] = respA.participants[i].id;

            // respB = await voxbot.groupMetadata("120363089188116481@g.us");
            // for (var i = 0; i < respB.participants.length; i++)
            // voxbot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !voxbot.fromme &&
            // !voxbot.isSudo &&
            // !voxbot.varResp.includes(voxbot.command) &&
            // !voxbot.memberRespA.includes(voxchat.sender) &&
            // !voxbot.memberRespB.includes(voxchat.sender)
            // ) {
            // return await voxbot.sendMessage(
            // voxchat.chat,
            // {
            // gifPlayback: true,
            // video: voxbot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${voxbot.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.voxapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [voxchat.sender],
            // },
            // { quoted: voxchat }
            // );
            // }

            if (process.env.runtype === "devar" && !voxbot.isSudo) {
              return await voxbot.sendMessage(
                voxchat.chat,
                {
                  gifPlayback: true,
                  video: voxbot.fs.readFileSync("./public/voxbot_white.png"),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${voxbot.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [voxchat.sender],
                },
                { quoted: voxchat }
              );
            } else
              await voxbot.sendMessage(voxchat.chat, {
                react: {
                  text: "🔖",
                  key: voxchat.key,
                },
              });
            return await require("../server/library")(
              voxbot,
              voxchat,
              update,
              store
            );
          }
        );
      }
    );
  return voxbot;
};
