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
require("../global.js");
exports.noLink = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ) => {
  let FetchCurrentGroupLink = await ꪜᴏxʙᴏᴛ.groupInviteCode(ᴠᴏxᴄ.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(ꪜᴏxʙᴏᴛ.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(ꪜᴏxʙᴏᴛ.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await ꪜᴏxʙᴏᴛ.groupParticipantsUpdate(
      ᴠᴏxᴄ.chat,
      [ꪜᴏxʙᴏᴛ.sender],
      "remove"
    ).catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
    await ᴠᴏxᴄ.reply(
      `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
      delete: {
        remoteJid: ᴠᴏxᴄ.chat,
        fromMe: false,
        id: ꪜᴏxʙᴏᴛ.quoted.id,
        participant: ꪜᴏxʙᴏᴛ.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    ꪜᴏxʙᴏᴛ.budy.includes("https://t.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("discord.gg") &&
    ꪜᴏxʙᴏᴛ.budy.includes("discord.com") &&
    ꪜᴏxʙᴏᴛ.budy.includes("/t.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("wa.me/") &&
    ꪜᴏxʙᴏᴛ.budy.includes("www.")
  ) {
    await ꪜᴏxʙᴏᴛ.groupParticipantsUpdate(
      ᴠᴏxᴄ.chat,
      [ꪜᴏxʙᴏᴛ.sender],
      "remove"
    ).catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
    await ᴠᴏxᴄ.reply(
      `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
      delete: {
        remoteJid: ᴠᴏxᴄ.chat,
        fromMe: false,
        id: ꪜᴏxʙᴏᴛ.quoted.id,
        participant: ꪜᴏxʙᴏᴛ.quoted.sender,
      },
    });
  } else {
  }
};
