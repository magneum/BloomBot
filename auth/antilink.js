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
require("../global.js");
exports.noLink = async (ѕуηтнiα, νℓкhat) => {
  let FetchCurrentGroupLink = await ѕуηтнiα.groupInviteCode(νℓкhat.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(ѕуηтнiα.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(ѕуηтнiα.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await ѕуηтнiα
      .groupParticipantsUpdate(νℓкhat.chat, [ѕуηтнiα.sender], "remove")
      .catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${ѕуηтнiα.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ѕуηтнiα.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: ѕуηтнiα.quoted.id,
        participant: ѕуηтнiα.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    ѕуηтнiα.budy.includes("https://t.me/") &&
    ѕуηтнiα.budy.includes("discord.gg") &&
    ѕуηтнiα.budy.includes("discord.com") &&
    ѕуηтнiα.budy.includes("/t.me/") &&
    ѕуηтнiα.budy.includes("wa.me/") &&
    ѕуηтнiα.budy.includes("www.")
  ) {
    await ѕуηтнiα
      .groupParticipantsUpdate(νℓкhat.chat, [ѕуηтнiα.sender], "remove")
      .catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${ѕуηтнiα.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ѕуηтнiα.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: ѕуηтнiα.quoted.id,
        participant: ѕуηтнiα.quoted.sender,
      },
    });
  } else {
  }
};
