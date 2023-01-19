("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝

("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const moment = require("moment-timezone");
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  νℓкуяє.body =
    vcнaт.mtype === "conversation"
      ? vcнaт.message.conversation
      : vcнaт.mtype == "imageMessage"
      ? vcнaт.message.imageMessage.caption
      : vcнaт.mtype == "videoMessage"
      ? vcнaт.message.videoMessage.caption
      : vcнaт.mtype == "extendedTextMessage"
      ? vcнaт.message.extendedTextMessage.text
      : vcнaт.mtype == "buttonsResponseMessage"
      ? vcнaт.message.buttonsResponseMessage.selectedButtonId
      : vcнaт.mtype == "listResponseMessage"
      ? vcнaт.message.listResponseMessage.singleSelectReply.selectedRowId
      : vcнaт.mtype == "templateButtonReplyMessage"
      ? vcнaт.message.templateButtonReplyMessage.selectedId
      : vcнaт.mtype === "messageContextInfo"
      ? vcнaт.message.buttonsResponseMessage?.selectedButtonId ||
        vcнaт.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        vcнaт.text
      : "";
  νℓкуяє.budy = typeof vcнaт.text == "string" ? vcнaт.text : "";
  νℓкуяє.icmd = νℓкуяє.body.startsWith(prefix);
  νℓкуяє.isCommand =
    prefix.includes(νℓкуяє.body != "" && νℓкуяє.body.slice(0, 1)) &&
    νℓкуяє.body.slice(1) != "";
  νℓкуяє.command = νℓкуяє.isCommand
    ? νℓкуяє.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  νℓкуяє.args = νℓкуяє.body.trim().split(/ +/).slice(1);
  νℓкуяє.pushname = vcнaт.pushName || "No Name";
  νℓкуяє.botNumber = await νℓкуяє.decodeJid(νℓкуяє.user.id);
  νℓкуяє.frome = vcнaт.sender == νℓкуяє.botNumber ? true : false;
  νℓкуяє.Fullarg = νℓкуяє.args.join(" ");
  νℓкуяє.contant = q = νℓкуяє.args.join(" ");
  νℓкуяє.quoted = vcнaт.quoted ? vcнaт.quoted : vcнaт;
  νℓкуяє.mime = (νℓкуяє.quoted.msg || νℓкуяє.quoted).mimetype || "";
  νℓкуяє.isMedia = /image|video|sticker|audio/.test(νℓкуяє.mime);
  νℓкуяє.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  νℓкуяє.isCreator = [νℓкуяє.botNumber, ...global.sudo]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(vcнaт.sender);
  νℓкуяє.mentionByTag =
    vcнaт.mtype == "extendedTextMessage" &&
    vcнaт.message.extendedTextMessage.contextInfo != null
      ? vcнaт.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  νℓкуяє.mentionByReply =
    vcнaт.mtype == "extendedTextMessage" &&
    vcнaт.message.extendedTextMessage.contextInfo != null
      ? vcнaт.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  require("./kronLink")(νℓкуяє, vcнaт, update, store);
  if (vcнaт.isGroup && νℓкуяє.command) {
    νℓкуяє.userBanCheck.findOne(
      {
        ID: vcнaт.sender,
      },
      (error, banCheck) => {
        if (error) {
          return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        νℓкуяє.userBanCheck.findOne(
          {
            ID: vcнaт.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !νℓкуяє.frome && !νℓкуяє.isSudoWorker) return;
            if (groupCheck && !νℓкуяє.frome && !νℓкуяє.isSudoWorker) return;
            await νℓкуяє.LinkList.findOne(
              {
                serverID: vcнaт.chat,
              },
              async (error, server) => {
                if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                if (!server) return;
                let { noLink } = require("../Enforcers/antilink");
                return noLink(νℓкуяє, vcнaт);
              }
            );

            ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            respA = await νℓкуяє.groupMetadata("120363020792949649@g.us");
            for (let i = 0; i < respA.participants.length; i++)
              νℓкуяє.memberRespA[i] = respA.participants[i].id;
            if (
              !νℓкуяє.fromme &&
              !νℓкуяє.isSudoWorker &&
              !νℓкуяє.letResp.includes(νℓкуяє.command) &&
              !νℓкуяє.memberRespA.includes(vcнaт.sender)
            ) {
              return await νℓкуяє.sendMessage(
                vcнaт.chat,
                {
                  gifPlayback: true,
                  video: νℓкуяє.fs.readFileSync("./Gallery/how.mp4"),
                  caption: `*📢Verification Needed*
*😥Sorry:* _${νℓкуяє.pushname}_

> You need to be verified to use bot...
> join official group
> chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

*⚙️Webpage:*
> bit.ly/magneum
> Login To Your Dashboard`,
                  mentions: [vcнaт.sender],
                },
                { quoted: vcнaт }
              );
            }
            await require("./library")(νℓкуяє, vcнaт, update, store);
          }
        );
      }
    );
  }
  return νℓкуяє;
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
