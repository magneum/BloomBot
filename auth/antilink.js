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
require("../global.js");
exports.noLink = async (VօxB໐t, νℓкhat) => {
  let FetchCurrentGroupLink = await VօxB໐t.groupInviteCode(νℓкhat.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(VօxB໐t.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(VօxB໐t.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await VօxB໐t.groupParticipantsUpdate(
      νℓкhat.chat,
      [VօxB໐t.sender],
      "remove"
    ).catch((error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${VօxB໐t.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await VօxB໐t.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: VօxB໐t.quoted.id,
        participant: VօxB໐t.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    VօxB໐t.budy.includes("https://t.me/") &&
    VօxB໐t.budy.includes("discord.gg") &&
    VօxB໐t.budy.includes("discord.com") &&
    VօxB໐t.budy.includes("/t.me/") &&
    VօxB໐t.budy.includes("wa.me/") &&
    VօxB໐t.budy.includes("www.")
  ) {
    await VօxB໐t.groupParticipantsUpdate(
      νℓкhat.chat,
      [VօxB໐t.sender],
      "remove"
    ).catch((error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${VօxB໐t.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await VօxB໐t.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: VօxB໐t.quoted.id,
        participant: VօxB໐t.quoted.sender,
      },
    });
  } else {
  }
};
