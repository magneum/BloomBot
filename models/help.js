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
ppath = require("path");
require("../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = νℓкуяє.speed();
  latensie = νℓкуяє.speed() - timestampe;
  const runtime = function (seconds) {
    seconds = Number(seconds);
    d = Math.floor(seconds / (3600 * 24));
    h = Math.floor((seconds % (3600 * 24)) / 3600);
    m = Math.floor((seconds % 3600) / 60);
    s = Math.floor(seconds % 60);
    dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
    hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
    mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
    sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };
  const countFiles = (dir) =>
    νℓкуяє.fs.readdirSync(dir).reduce((acc, file) => {
      const fileDir = `${dir}/${file}`;
      if (νℓкуяє.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (νℓкуяє.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await νℓкуяє.imgB(
    νℓкуяє,
    vcнaт,
    `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
> ⒸVlkyre: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./Modular")}


╔══☰ *❗Console❗* 〕
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${νℓкуяє.os.release()}
║⦁ *OS Type:*   ${νℓкуяє.os.type()}
║⦁ *Directory:*  ${νℓкуяє.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${νℓкуяє.os.platform()}
║⦁ *Free memory:* ${νℓкуяє.os.freemem()}
║⦁ *Total memory:* ${νℓкуяє.os.totalmem()}
║⦁ *Host device :* ${νℓкуяє.os.hostname()}
║⦁ *OS Version:* ${νℓкуяє.os.version()}
╚══☰
╔══☰
║>  *❕Commands❕*
║⦁ 🐉 ${νℓкуяє.prefix}emotionslist
║⦁ 📢 ${νℓкуяє.prefix}audiofilterlist
║⦁ 📼 ${νℓкуяє.prefix}conversionlist
║⦁ 📥 ${νℓкуяє.prefix}downloadlist
║⦁ 💰 ${νℓкуяє.prefix}gameslist
║⦁ 🔰 ${νℓкуяє.prefix}grouplist
║⦁ 🍁 ${νℓкуяє.prefix}ownerlist
║⦁ 🖼️ ${νℓкуяє.prefix}photolist
║⦁ 🔎 ${νℓкуяє.prefix}searchlist
║⦁ ⭕ ${νℓкуяє.prefix}ytfilterlist
║⦁ 🦄 ${νℓкуяє.prefix}sfwlist
║⦁ 🍑 ${νℓкуяє.prefix}hentailist
║⦁ 👅 ${νℓкуяє.prefix}nsfwlist
╚═══════⋑`,
    "./Gallery/magneum.png"
  );
};
