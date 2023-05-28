//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
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
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (ꪜᴏxʙᴏᴛ.isReply) {
    var receiver =
      ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
      ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
        ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (ꪜᴏxʙᴏᴛ.mentionByTag) {
    var receiver =
      ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
      ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
        ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await ꪜᴏxʙᴏᴛ.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
            buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [ᴠᴏxᴄ.sender],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
  }
};
