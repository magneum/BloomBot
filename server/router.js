// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const moment = require("moment-timezone");
module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  ѕуηтнiα.body =
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
  ѕуηтнiα.budy = typeof νℓкhat.text == "string" ? νℓкhat.text : "";
  ѕуηтнiα.icmd = ѕуηтнiα.body.startsWith(prefix);
  ѕуηтнiα.isCommand =
    prefix.includes(ѕуηтнiα.body != "" && ѕуηтнiα.body.slice(0, 1)) &&
    ѕуηтнiα.body.slice(1) != "";
  ѕуηтнiα.command = ѕуηтнiα.isCommand
    ? ѕуηтнiα.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  ѕуηтнiα.args = ѕуηтнiα.body.trim().split(/ +/).slice(1);
  ѕуηтнiα.pushname = νℓкhat.pushName || "No Name";
  ѕуηтнiα.botNumber = await ѕуηтнiα.decodeJid(ѕуηтнiα.user.id);
  ѕуηтнiα.frome = νℓкhat.sender == ѕуηтнiα.botNumber ? true : false;
  ѕуηтнiα.Fullarg = ѕуηтнiα.args.join(" ");
  ѕуηтнiα.contant = q = ѕуηтнiα.args.join(" ");
  ѕуηтнiα.quoted = νℓкhat.quoted ? νℓкhat.quoted : νℓкhat;
  ѕуηтнiα.mime = (ѕуηтнiα.quoted.msg || ѕуηтнiα.quoted).mimetype || "";
  ѕуηтнiα.isMedia = /image|video|sticker|audio/.test(ѕуηтнiα.mime);
  ѕуηтнiα.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  ѕуηтнiα.isCreator = [ѕуηтнiα.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(νℓкhat.sender);
  ѕуηтнiα.mentionByTag =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  ѕуηтнiα.mentionByReply =
    νℓкhat.mtype == "extendedTextMessage" &&
    νℓкhat.message.extendedTextMessage.contextInfo != null
      ? νℓкhat.message.extendedTextMessage.contextInfo.participant || ""
      : "";

  require("./kronLink")(ѕуηтнiα, νℓкhat, update, store);
  if (!νℓкhat.isGroup && ѕуηтнiα.command)
    return require("../auth/noPrivate")(ѕуηтнiα, νℓкhat, update);
  if (νℓкhat.isGroup && ѕуηтнiα.command)
    ѕуηтнiα.userBanCheck.findOne(
      {
        ID: νℓкhat.sender,
      },
      (error, banCheck) => {
        if (error) {
          return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        ѕуηтнiα.userBanCheck.findOne(
          {
            ID: νℓкhat.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !ѕуηтнiα.frome && !ѕуηтнiα.isSudoWorker) return;
            if (groupCheck && !ѕуηтнiα.frome && !ѕуηтнiα.isSudoWorker) return;
            await ѕуηтнiα.LinkList.findOne(
              {
                serverID: νℓкhat.chat,
              },
              async (error, server) => {
                if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
                if (!server) return;
                let { noLink } = require("../auth/antilink");
                return noLink(ѕуηтнiα, νℓкhat);
              }
            );

            // respA = await ѕуηтнiα.groupMetadata("120363020792949649@g.us");
            // for (let i = 0; i < respA.participants.length; i++)
            // ѕуηтнiα.memberRespA[i] = respA.participants[i].id;

            // respB = await ѕуηтнiα.groupMetadata("120363089188116481@g.us");
            // for (let i = 0; i < respB.participants.length; i++)
            // ѕуηтнiα.memberRespB[i] = respB.participants[i].id;
            // if (
            // !ѕуηтнiα.fromme &&
            // !ѕуηтнiα.isSudoWorker &&
            // !ѕуηтнiα.letResp.includes(ѕуηтнiα.command) &&
            // !ѕуηтнiα.memberRespA.includes(νℓкhat.sender) &&
            // !ѕуηтнiα.memberRespB.includes(νℓкhat.sender)
            // ) {
            // return await ѕуηтнiα.sendMessage(
            // νℓкhat.chat,
            // {
            // gifPlayback: true,
            // video: ѕуηтнiα.fs.readFileSync("./src/how.mp4"),
            // caption: `*📢Verification Needed*
            // *😥Sorry:* _${ѕуηтнiα.pushname}_

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

            if (process.env.runtype === "devar" && !ѕуηтнiα.isSudoWorker) {
              return await ѕуηтнiα.sendMessage(
                νℓкhat.chat,
                {
                  gifPlayback: true,
                  video: ѕуηтнiα.fs.readFileSync("./src/νℓкуяє_white.jpg"),
                  caption: `*📢Verification Needed*
*😥Sorry:* _${ѕуηтнiα.pushname}_

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
              await ѕуηтнiα.sendMessage(νℓкhat.chat, {
                react: {
                  text: "🔖",
                  key: νℓкhat.key,
                },
              });
            return await require("../server/library")(
              ѕуηтнiα,
              νℓкhat,
              update,
              store
            );
          }
        );
      }
    );
  return ѕуηтнiα;
};
