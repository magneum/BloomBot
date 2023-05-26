//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const moment = require("moment-timezone");
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  VօxB໐t.body =
    νℓкhat.mtype === "conversation"
      ? νℓкhat.message.conversation
      : νℓкhat.mtype == "imageMessage"
      ? νℓкhat.message.imageMessage.caption
      : νℓкhat.mtype == "videoMessage"
      ? νℓкhat.message.videoMessage.caption
      : νℓкhat.mtype == "extendedTextMessage"
      ? νℓкhat.message.extendedTextMessage.text
      : νℓкhat.mtype == "buttonsResponseMessage"
      ? νℓкhat.message.buttonsResponseMessage.selectedButtonId
      : νℓкhat.mtype == "listResponseMessage"
      ? νℓкhat.message.listResponseMessage.singleSelectReply.selectedRowId
      : νℓкhat.mtype == "templateButtonReplyMessage"
      ? νℓкhat.message.templateButtonReplyMessage.selectedId
      : νℓкhat.mtype === "messageContextInfo"
      ? νℓкhat.message.buttonsResponseMessage?.selectedButtonId ||
        νℓкhat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        νℓкhat.text
      : "";
  VօxB໐t.budy = typeof νℓкhat.text == "string" ? νℓкhat.text : "";
  VօxB໐t.icmd = VօxB໐t.body.startsWith(prefix);
  VօxB໐t.isCommand =
    prefix.includes(VօxB໐t.body != "" && VօxB໐t.body.slice(0, 1)) &&
    VօxB໐t.body.slice(1) != "";
  VօxB໐t.command = VօxB໐t.isCommand
    ? VօxB໐t.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  VօxB໐t.args = VօxB໐t.body.trim().split(/ +/).slice(1);
  VօxB໐t.pushname = νℓкhat.pushName || "No Name";
  VօxB໐t.botNumber = await VօxB໐t.decodeJid(VօxB໐t.user.id);
  VօxB໐t.frome = νℓкhat.sender == VօxB໐t.botNumber ? true : false;
  VօxB໐t.Fullarg = VօxB໐t.args.join(" ");
  VօxB໐t.contant = q = VօxB໐t.args.join(" ");
  VօxB໐t.quoted = νℓкhat.quoted ? νℓкhat.quoted : νℓкhat;
  VօxB໐t.mime = (VօxB໐t.quoted.msg || VօxB໐t.quoted).mimetype || "";
  VօxB໐t.isMedia = /image|video|sticker|audio/.test(VօxB໐t.mime);
  VօxB໐t.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  VօxB໐t.isCreator = [VօxB໐t.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(νℓкhat.sender);
  VօxB໐t.mentionByTag =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  VօxB໐t.mentionByReply =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./kronLink")(VօxB໐t, νℓкhat, update, store);
  if (!νℓкhat.isGroup && VօxB໐t.command)
    return require("../auth/noPrivate")(VօxB໐t, νℓкhat, update);
  if (νℓкhat.isGroup && VօxB໐t.command)
    VօxB໐t.userBanCheck.findOne(
      {
        ID: νℓкhat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return νℓкhat.reply(`*😥Sorry:* _${VօxB໐t.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        VօxB໐t.userBanCheck.findOne(
          {
            ID: νℓкhat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return νℓкhat.reply(`*😥Sorry:* _${VօxB໐t.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !VօxB໐t.frome && !VօxB໐t.isSudoWorker) return;
            if (groupCheck && !VօxB໐t.frome && !VօxB໐t.isSudoWorker) return;
            await VօxB໐t.LinkList.findOne(
              {
                serverID: νℓкhat.chat,
              },
              async (error, server) => {
                if (error) return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(VօxB໐t, νℓкhat);
              }
            );

            // respA = await VօxB໐t.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // VօxB໐t.memberRespA[i] = respA.participants[i].id;

            // respB = await VօxB໐t.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // VօxB໐t.memberRespB[i] = respB.participants[i].id;
            // if (
            // !VօxB໐t.fromme &&
            // !VօxB໐t.isSudoWorker &&
            // !VօxB໐t.letResp.includes(VօxB໐t.command) &&
            // !VօxB໐t.memberRespA.includes(νℓкhat.sender) &&
            // !VօxB໐t.memberRespB.includes(νℓкhat.sender)
            // ) {
            // return await VօxB໐t.sendMessage(
            // νℓкhat.chat,
            // {
            // gifPlayback: true,
            // video: VօxB໐t.fs.readFileSync("./src/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Sorry:* _${VօxB໐t.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [νℓкhat.sender],
            // },
            // { quoted: νℓкhat }
            // );
            // }

            if (process.env.runtype === "devar" && !VօxB໐t.isSudoWorker) {
              return await VօxB໐t.sendMessage(
                νℓкhat.chat,
                {
                  gifPlayback: true,
                  video: VօxB໐t.fs.readFileSync("./src/VօxB໐t_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Sorry:* _${VօxB໐t.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [νℓкhat.sender],
                },
                { quoted: νℓкhat }
              );
            } else
              await VօxB໐t.sendMessage(νℓкhat.chat, {
                react: {
                  text: "🔖",
                  key: νℓкhat.key,
                },
              });
            return await require("../server/library")(
              VօxB໐t,
              νℓкhat,
              update,
              store
            );
          }
        );
      }
    );
  return VօxB໐t;
};
