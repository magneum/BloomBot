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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const moment = require("moment-timezone");
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  ꪜᴏxʙᴏᴛ.body =
    ᴠᴏxᴄ.mtype === "conversation"
      ? ᴠᴏxᴄ.message.conversation
      : ᴠᴏxᴄ.mtype == "imageMessage"
      ? ᴠᴏxᴄ.message.imageMessage.caption
      : ᴠᴏxᴄ.mtype == "videoMessage"
      ? ᴠᴏxᴄ.message.videoMessage.caption
      : ᴠᴏxᴄ.mtype == "extendedTextMessage"
      ? ᴠᴏxᴄ.message.extendedTextMessage.text
      : ᴠᴏxᴄ.mtype == "buttonsResponseMessage"
      ? ᴠᴏxᴄ.message.buttonsResponseMessage.selectedButtonId
      : ᴠᴏxᴄ.mtype == "listResponseMessage"
      ? ᴠᴏxᴄ.message.listResponseMessage.singleSelectReply.selectedRowId
      : ᴠᴏxᴄ.mtype == "templateButtonReplyMessage"
      ? ᴠᴏxᴄ.message.templateButtonReplyMessage.selectedId
      : ᴠᴏxᴄ.mtype === "messageContextInfo"
      ? ᴠᴏxᴄ.message.buttonsResponseMessage?.selectedButtonId ||
        ᴠᴏxᴄ.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        ᴠᴏxᴄ.text
      : "";
  ꪜᴏxʙᴏᴛ.budy = typeof ᴠᴏxᴄ.text == "string" ? ᴠᴏxᴄ.text : "";
  ꪜᴏxʙᴏᴛ.icmd = ꪜᴏxʙᴏᴛ.body.startsWith(prefix);
  ꪜᴏxʙᴏᴛ.isCommand =
    prefix.includes(ꪜᴏxʙᴏᴛ.body != "" && ꪜᴏxʙᴏᴛ.body.slice(0, 1)) &&
    ꪜᴏxʙᴏᴛ.body.slice(1) != "";
  ꪜᴏxʙᴏᴛ.command = ꪜᴏxʙᴏᴛ.isCommand
    ? ꪜᴏxʙᴏᴛ.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  ꪜᴏxʙᴏᴛ.args = ꪜᴏxʙᴏᴛ.body.trim().split(/ +/).slice(1);
  ꪜᴏxʙᴏᴛ.pushname = ᴠᴏxᴄ.pushName || "No Name";
  ꪜᴏxʙᴏᴛ.botNumber = await ꪜᴏxʙᴏᴛ.decodeJid(ꪜᴏxʙᴏᴛ.user.id);
  ꪜᴏxʙᴏᴛ.frome = ᴠᴏxᴄ.sender == ꪜᴏxʙᴏᴛ.botNumber ? true : false;
  ꪜᴏxʙᴏᴛ.Fullarg = ꪜᴏxʙᴏᴛ.args.join(" ");
  ꪜᴏxʙᴏᴛ.contant = q = ꪜᴏxʙᴏᴛ.args.join(" ");
  ꪜᴏxʙᴏᴛ.quoted = ᴠᴏxᴄ.quoted ? ᴠᴏxᴄ.quoted : ᴠᴏxᴄ;
  ꪜᴏxʙᴏᴛ.mime = (ꪜᴏxʙᴏᴛ.quoted.msg || ꪜᴏxʙᴏᴛ.quoted).mimetype || "";
  ꪜᴏxʙᴏᴛ.isMedia = /image|video|sticker|audio/.test(ꪜᴏxʙᴏᴛ.mime);
  ꪜᴏxʙᴏᴛ.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  ꪜᴏxʙᴏᴛ.isCreator = [ꪜᴏxʙᴏᴛ.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(ᴠᴏxᴄ.sender);
  ꪜᴏxʙᴏᴛ.mentionByTag =
    ᴠᴏxᴄ.mtype == "extendedTextMessage" &&
    ᴠᴏxᴄ.message.extendedTextMessage.contextInfo != null
      ? ᴠᴏxᴄ.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  ꪜᴏxʙᴏᴛ.mentionByReply =
    ᴠᴏxᴄ.mtype == "extendedTextMessage" &&
    ᴠᴏxᴄ.message.extendedTextMessage.contextInfo != null
      ? ᴠᴏxᴄ.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./kronLink")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
  if (!ᴠᴏxᴄ.isGroup && ꪜᴏxʙᴏᴛ.command)
    return require("../auth/noPrivate")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update);
  if (ᴠᴏxᴄ.isGroup && ꪜᴏxʙᴏᴛ.command)
    ꪜᴏxʙᴏᴛ.userBanCheck.findOne(
      {
        ID: ᴠᴏxᴄ.sender,
      },
      (error, banCheck) => {
        if (error) {
          return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        ꪜᴏxʙᴏᴛ.userBanCheck.findOne(
          {
            ID: ᴠᴏxᴄ.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !ꪜᴏxʙᴏᴛ.frome && !ꪜᴏxʙᴏᴛ.isSudoWorker) return;
            if (groupCheck && !ꪜᴏxʙᴏᴛ.frome && !ꪜᴏxʙᴏᴛ.isSudoWorker) return;
            await ꪜᴏxʙᴏᴛ.LinkList.findOne(
              {
                serverID: ᴠᴏxᴄ.chat,
              },
              async (error, server) => {
                if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ);
              }
            );

            // respA = await ꪜᴏxʙᴏᴛ.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // ꪜᴏxʙᴏᴛ.memberRespA[i] = respA.participants[i].id;

            // respB = await ꪜᴏxʙᴏᴛ.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // ꪜᴏxʙᴏᴛ.memberRespB[i] = respB.participants[i].id;
            // if (
            // !ꪜᴏxʙᴏᴛ.fromme &&
            // !ꪜᴏxʙᴏᴛ.isSudoWorker &&
            // !ꪜᴏxʙᴏᴛ.letResp.includes(ꪜᴏxʙᴏᴛ.command) &&
            // !ꪜᴏxʙᴏᴛ.memberRespA.includes(ᴠᴏxᴄ.sender) &&
            // !ꪜᴏxʙᴏᴛ.memberRespB.includes(ᴠᴏxᴄ.sender)
            // ) {
            // return await ꪜᴏxʙᴏᴛ.sendMessage(
            // ᴠᴏxᴄ.chat,
            // {
            // gifPlayback: true,
            // video: ꪜᴏxʙᴏᴛ.fs.readFileSync("./src/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_

            // > You need to be verified to use bot...
            // > join official group
            // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

            // *⚙️Webpage:*
            // > https://bit.ly/magneum
            // > Login To Your Dashboard`,
            // mentions: [ᴠᴏxᴄ.sender],
            // },
            // { quoted: ᴠᴏxᴄ }
            // );
            // }

            if (process.env.runtype === "devar" && !ꪜᴏxʙᴏᴛ.isSudoWorker) {
              return await ꪜᴏxʙᴏᴛ.sendMessage(
                ᴠᴏxᴄ.chat,
                {
                  gifPlayback: true,
                  video: ꪜᴏxʙᴏᴛ.fs.readFileSync("./src/VօxB໐t_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_

> bot is now under development mode
> come back another time

*⚙️Webpage:*
> https://bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [ᴠᴏxᴄ.sender],
                },
                { quoted: ᴠᴏxᴄ }
              );
            } else
              await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
                react: {
                  text: "🔖",
                  key: ᴠᴏxᴄ.key,
                },
              });
            return await require("../server/library")(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              update,
              store
            );
          }
        );
      }
    );
  return ꪜᴏxʙᴏᴛ;
};
