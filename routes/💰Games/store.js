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
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  try {
    await VօxB໐t.imgB(
      VօxB໐t,
      ᴠᴏxᴄ,
      `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
┌『 *Games💰Category* 』
│║⦁ ⚔️ *sword:* _1000gold/robbery_
│║⦁ 💻 *laptop:* _4000gold/robbery_
│║⦁ 🔮 *charm:* _6000gold/robbery_
┕╚═══════⋑

┌『 *Badges🍯Category* 』
│║⦁ 🧵 *Basic:* 10 Commands
│║⦁ 🥉 *Bronze:* 20 Commands
│║⦁ 🥈 *Silver:* 40 Commands
│║⦁ 🥇 *Golden:* 60 Commands
│║⦁ 💍 *Platinum:* 80 Commands
│║⦁ 💎 *Diamond:* 100 Commands
┕╚═══════⋑`,
      "./src/voxbot.jpg"
    );
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
  }
};
