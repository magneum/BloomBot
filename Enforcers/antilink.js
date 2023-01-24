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
require("../global.js");
exports.noLink = async (νℓкуяє, vcнaт) => {
  let FetchCurrentGroupLink = await νℓкуяє.groupInviteCode(vcнaт.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(νℓкуяє.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(νℓкуяє.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await νℓкуяє
      .groupParticipantsUpdate(vcнaт.chat, [νℓкуяє.sender], "remove")
      .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
    await vcнaт.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await νℓкуяє.sendMessage(vcнaт.chat, {
      delete: {
        remoteJid: vcнaт.chat,
        fromMe: false,
        id: νℓкуяє.quoted.id,
        participant: νℓкуяє.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    νℓкуяє.budy.includes("https://t.me/") &&
    νℓкуяє.budy.includes("discord.gg") &&
    νℓкуяє.budy.includes("discord.com") &&
    νℓкуяє.budy.includes("/t.me/") &&
    νℓкуяє.budy.includes("wa.me/") &&
    νℓкуяє.budy.includes("www.")
  ) {
    await νℓкуяє
      .groupParticipantsUpdate(vcнaт.chat, [νℓкуяє.sender], "remove")
      .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
    await vcнaт.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await νℓкуяє.sendMessage(vcнaт.chat, {
      delete: {
        remoteJid: vcнaт.chat,
        fromMe: false,
        id: νℓкуяє.quoted.id,
        participant: νℓкуяє.quoted.sender,
      },
    });
  } else {
  }
};