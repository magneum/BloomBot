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
module.exports = async (νℓкуяє, vcнaт, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (νℓкуяє.isReply) {
    var receiver =
      νℓкуяє.mtype == "extendedTextMessage" &&
      νℓкуяє.message.extendedTextMessage.contextInfo != null
        ? νℓкуяє.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await νℓкуяє
      .sendMessage(
        vcнaт.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${vcнaт.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${νℓкуяє.prefix}Dashboard`,
              buttonText: { displayText: `${νℓкуяє.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${νℓкуяє.prefix}Help`,
              buttonText: { displayText: `${νℓкуяє.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкуяє.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкуяє.sender, receiver] },
          quoted: vcнaт,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (νℓкуяє.mentionByTag) {
    var receiver =
      νℓкуяє.mtype == "extendedTextMessage" &&
      νℓкуяє.message.extendedTextMessage.contextInfo != null
        ? νℓкуяє.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await νℓкуяє
      .sendMessage(
        vcнaт.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${vcнaт.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${νℓкуяє.prefix}Dashboard`,
              buttonText: { displayText: `${νℓкуяє.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${νℓкуяє.prefix}Help`,
              buttonText: { displayText: `${νℓкуяє.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкуяє.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкуяє.sender, receiver] },
          quoted: vcнaт,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await νℓкуяє
      .sendMessage(
        vcнaт.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢ID:* ${vcнaт.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Vlkyre™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${νℓкуяє.prefix}Dashboard`,
              buttonText: { displayText: `${νℓкуяє.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${νℓкуяє.prefix}Help`,
              buttonText: { displayText: `${νℓкуяє.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [νℓкуяє.sender],
        },
        {
          contextInfo: { mentionedJid: [νℓкуяє.sender] },
          quoted: vcнaт,
        }
      )
      .catch((e) => console.log(e));
  }
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
