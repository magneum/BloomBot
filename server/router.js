// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const moment = require("moment-timezone");
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  ѕуηтнσяiα.body =
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
  ѕуηтнσяiα.budy = typeof νℓкhat.text == "string" ? νℓкhat.text : "";
  ѕуηтнσяiα.icmd = ѕуηтнσяiα.body.startsWith(prefix);
  ѕуηтнσяiα.isCommand =
    prefix.includes(ѕуηтнσяiα.body != "" && ѕуηтнσяiα.body.slice(0, 1)) &&
    ѕуηтнσяiα.body.slice(1) != "";
  ѕуηтнσяiα.command = ѕуηтнσяiα.isCommand
    ? ѕуηтнσяiα.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  ѕуηтнσяiα.args = ѕуηтнσяiα.body.trim().split(/ +/).slice(1);
  ѕуηтнσяiα.pushname = νℓкhat.pushName || "No Name";
  ѕуηтнσяiα.botNumber = await ѕуηтнσяiα.decodeJid(ѕуηтнσяiα.user.id);
  ѕуηтнσяiα.frome = νℓкhat.sender == ѕуηтнσяiα.botNumber ? true : false;
  ѕуηтнσяiα.Fullarg = ѕуηтнσяiα.args.join(" ");
  ѕуηтнσяiα.contant = q = ѕуηтнσяiα.args.join(" ");
  ѕуηтнσяiα.quoted = νℓкhat.quoted ? νℓкhat.quoted : νℓкhat;
  ѕуηтнσяiα.mime = (ѕуηтнσяiα.quoted.msg || ѕуηтнσяiα.quoted).mimetype || "";
  ѕуηтнσяiα.isMedia = /image|video|sticker|audio/.test(ѕуηтнσяiα.mime);
  ѕуηтнσяiα.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  ѕуηтнσяiα.isCreator = [ѕуηтнσяiα.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(νℓкhat.sender);
  ѕуηтнσяiα.mentionByTag =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  ѕуηтнσяiα.mentionByReply =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./kronLink")(ѕуηтнσяiα, νℓкhat, update, store);
  if (!νℓкhat.isGroup && ѕуηтнσяiα.command)
    return require("../auth/noPrivate")(ѕуηтнσяiα, νℓкhat, update);
  if (νℓкhat.isGroup && ѕуηтнσяiα.command)
    ѕуηтнσяiα.userBanCheck.findOne(
      {
        ID: νℓкhat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнσяiα.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        ѕуηтнσяiα.userBanCheck.findOne(
          {
            ID: νℓкhat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнσяiα.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !ѕуηтнσяiα.frome && !ѕуηтнσяiα.isSudoWorker) return;
            if (groupCheck && !ѕуηтнσяiα.frome && !ѕуηтнσяiα.isSudoWorker)
              return;
            await ѕуηтнσяiα.LinkList.findOne(
              {
                serverID: νℓкhat.chat,
              },
              async (error, server) => {
                if (error) return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(ѕуηтнσяiα, νℓкhat);
              }
            );

            // respA = await ѕуηтнσяiα.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // ѕуηтнσяiα.memberRespA[i] = respA.participants[i].id;

            // respB = await ѕуηтнσяiα.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // ѕуηтнσяiα.memberRespB[i] = respB.participants[i].id;
            // if (
            // !ѕуηтнσяiα.fromme &&
            // !ѕуηтнσяiα.isSudoWorker &&
            // !ѕуηтнσяiα.letResp.includes(ѕуηтнσяiα.command) &&
            // !ѕуηтнσяiα.memberRespA.includes(νℓкhat.sender) &&
            // !ѕуηтнσяiα.memberRespB.includes(νℓкhat.sender)
            // ) {
            // return await ѕуηтнσяiα.sendMessage(
            // νℓкhat.chat,
            // {
            // gifPlayback: true,
            // video: ѕуηтнσяiα.fs.readFileSync("./src/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Sorry:* _${ѕуηтнσяiα.pushname}_

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

            if (process.env.runtype === "devar" && !ѕуηтнσяiα.isSudoWorker) {
              return await ѕуηтнσяiα.sendMessage(
                νℓкhat.chat,
                {
                  gifPlayback: true,
                  video: ѕуηтнσяiα.fs.readFileSync("./src/ѕуηтнσяiα_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Sorry:* _${ѕуηтнσяiα.pushname}_

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
              await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
                react: {
                  text: "🔖",
                  key: νℓкhat.key,
                },
              });
            return await require("../server/library")(
              ѕуηтнσяiα,
              νℓкhat,
              update,
              store
            );
          }
        );
      }
    );
  return ѕуηтнσяiα;
};
