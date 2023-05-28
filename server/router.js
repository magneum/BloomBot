<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var moment = require("moment-timezone");
module.exports = async (WhatsBot, voxchat, update, store) => {
  WhatsBot.body =
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var moment = require("moment-timezone");
module.exports = async (voxbot, voxchat, update, store) => {
  voxbot.body =
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
  WhatsBot.budy = typeof voxchat.text == "string" ? voxchat.text : "";
  WhatsBot.icmd = WhatsBot.body.startsWith(prefix);
  WhatsBot.isCommand =
    prefix.includes(WhatsBot.body != "" && WhatsBot.body.slice(0, 1)) &&
    WhatsBot.body.slice(1) != "";
  WhatsBot.command = WhatsBot.isCommand
    ? WhatsBot.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  WhatsBot.args = WhatsBot.body.trim().split(/ +/).slice(1);
  WhatsBot.pushname = voxchat.pushName || "No Name";
  WhatsBot.botNumber = await WhatsBot.decodeJid(WhatsBot.user.id);
  WhatsBot.frome = voxchat.sender == WhatsBot.botNumber ? true : false;
  WhatsBot.Fullarg = WhatsBot.args.join(" ");
  WhatsBot.contant = q = WhatsBot.args.join(" ");
  WhatsBot.quoted = voxchat.quoted ? voxchat.quoted : voxchat;
  WhatsBot.mime = (WhatsBot.quoted.msg || WhatsBot.quoted).mimetype || "";
  WhatsBot.isMedia = /image|video|sticker|audio/.test(WhatsBot.mime);
  WhatsBot.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  WhatsBot.isCreator = [WhatsBot.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.voxapp.net")
    .includes(voxchat.sender);
  WhatsBot.mentionByTag =
=======
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
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    voxchat.mtype == "extendedTextMessage" &&
    voxchat.message.extendedTextMessage.contextInfo != null
      ? voxchat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
<<<<<<< HEAD
  WhatsBot.mentionByReply =
=======
  voxbot.mentionByReply =
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    voxchat.mtype == "extendedTextMessage" &&
    voxchat.message.extendedTextMessage.contextInfo != null
      ? voxchat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

<<<<<<< HEAD
  require("./voxLink")(WhatsBot, voxchat, update, store);
  if (!voxchat.isGroup && WhatsBot.command)
    return require("../auth/noPrivate")(WhatsBot, voxchat, update);
  if (voxchat.isGroup && WhatsBot.command)
    WhatsBot.userBanCheck.findOne(
=======
  require("./voxLink")(voxbot, voxchat, update, store);
  if (!voxchat.isGroup && voxbot.command)
    return require("../auth/noPrivate")(voxbot, voxchat, update);
  if (voxchat.isGroup && voxbot.command)
    voxbot.userBanCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        Id: voxchat.sender,
      },
      (error, banCheck) => {
        if (error) {
<<<<<<< HEAD
          return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname}_
=======
          return voxchat.reply(`*😥Apologies:* _${voxbot.pushname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
<<<<<<< HEAD
        WhatsBot.userBanCheck.findOne(
=======
        voxbot.userBanCheck.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          {
            Id: voxchat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
<<<<<<< HEAD
              return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname}_
=======
              return voxchat.reply(`*😥Apologies:* _${voxbot.pushname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
<<<<<<< HEAD
            if (banCheck && !WhatsBot.frome && !WhatsBot.isSudo) return;
            if (groupCheck && !WhatsBot.frome && !WhatsBot.isSudo) return;
            await WhatsBot.LinkList.findOne(
=======
            if (banCheck && !voxbot.frome && !voxbot.isSudo) return;
            if (groupCheck && !voxbot.frome && !voxbot.isSudo) return;
            await voxbot.LinkList.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              {
                serverId: voxchat.chat,
              },
              async (error, server) => {
<<<<<<< HEAD
                if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(WhatsBot, voxchat);
              }
            );

            // respA = await WhatsBot.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // WhatsBot.memberRespA[i] = respA.participants[i].id;

            // respB = await WhatsBot.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // WhatsBot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !WhatsBot.fromme &&
            // !WhatsBot.isSudo &&
            // !WhatsBot.letResp.includes(WhatsBot.command) &&
            // !WhatsBot.memberRespA.includes(voxchat.sender) &&
            // !WhatsBot.memberRespB.includes(voxchat.sender)
            // ) {
            // return await WhatsBot.sendMessage(
            // voxchat.chat,
            // {
            // gifPlayback: true,
            // video: WhatsBot.fs.readFileSync("./public/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Apologies:* _${WhatsBot.pushname}_
=======
                if (error) return voxbot.handlerror(voxbot, voxchat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(voxbot, voxchat);
              }
            );

            // respA = await voxbot.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // voxbot.memberRespA[i] = respA.participants[i].id;

            // respB = await voxbot.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // voxbot.memberRespB[i] = respB.participants[i].id;
            // if (
            // !voxbot.fromme &&
            // !voxbot.isSudo &&
            // !voxbot.letResp.includes(voxbot.command) &&
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
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

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

<<<<<<< HEAD
            if (process.env.runtype === "devar" && !WhatsBot.isSudo) {
              return await WhatsBot.sendMessage(
                voxchat.chat,
                {
                  gifPlayback: true,
                  video: WhatsBot.fs.readFileSync("./public/WhatsBot_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${WhatsBot.pushname}_
=======
            if (process.env.runtype === "devar" && !voxbot.isSudo) {
              return await voxbot.sendMessage(
                voxchat.chat,
                {
                  gifPlayback: true,
                  video: voxbot.fs.readFileSync("./public/voxbot_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Apologies:* _${voxbot.pushname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

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
<<<<<<< HEAD
              await WhatsBot.sendMessage(voxchat.chat, {
=======
              await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                react: {
                  text: "🔖",
                  key: voxchat.key,
                },
              });
            return await require("../server/library")(
<<<<<<< HEAD
              WhatsBot,
=======
              voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              voxchat,
              update,
              store
            );
          }
        );
      }
    );
<<<<<<< HEAD
  return WhatsBot;
=======
  return voxbot;
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
};
