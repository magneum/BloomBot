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
module.exports = async (ѕуηтнiα, νℓкhat, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (ѕуηтнiα.isReply) {
    var receiver =
      ѕуηтнiα.mtype == "extendedTextMessage" &&
      ѕуηтнiα.message.extendedTextMessage.contextInfo != null
        ? ѕуηтнiα.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await ѕуηтнiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкhat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender, receiver] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (ѕуηтнiα.mentionByTag) {
    var receiver =
      ѕуηтнiα.mtype == "extendedTextMessage" &&
      ѕуηтнiα.message.extendedTextMessage.contextInfo != null
        ? ѕуηтнiα.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await ѕуηтнiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкhat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender, receiver] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await ѕуηтнiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкhat.sender],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
  }
};
