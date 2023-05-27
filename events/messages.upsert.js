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
const logs = require("../logs");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logs.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
require("../global.js");
module.exports = async (VօxB໐t, update, store) => {
  νTēxt = update.messages[0];
  if (!νTēxt.message) return;
  νTēxt.message =
    Object.keys(νTēxt.message)[0] === "ephemeralMessage"
      ? νTēxt.message.ephemeralMessage.message
      : νTēxt.message;
  if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
  if (!VօxB໐t.public && !νTēxt.key.fromMe && update.type === "notify") return;
  if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
  ᴠᴏxᴄ = await νkmake(VօxB໐t, νTēxt, store);
  await require("../server/router.js")(VօxB໐t, ᴠᴏxᴄ, update, store);
};
