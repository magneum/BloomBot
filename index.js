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
const { Vlkyre } = require("vlkyre-bot");
const miniget = require("miniget");

// using update method from ytdl-core module
// const pkg = require("./package.json");
// const UPDATE_INTERVAL = 1000 * 60 * 60 * 12;
// lastUpdateCheck = 0;
// checkForUpdates = () => {
// if (
// !process.env.YTDL_NO_UPDATE &&
// !pkg.version.startsWith("0.0.0-") &&
// Date.now() - lastUpdateCheck >= UPDATE_INTERVAL
// ) {
// lastUpdateCheck = Date.now();
// return miniget(
// "https://api.github.com/repos/fent/node-ytdl-core/releases/latest",
// {
// headers: { "User-Agent": "ytdl-core" },
// }
// )
// .text()
// .then(
// (response) => {
// if (JSON.parse(response).tag_name !== `v${pkg.version}`) {
// console.warn(
//     '\x1b[33mWARNING:\x1B[0m ytdl-core is out of date! Update with "npm install ytdl-core@latest".'
// );
// }
// },
// (err) => {
// console.warn("Error checking for updates:", err.message);
// console.warn(
// "You can disable this check by setting the `YTDL_NO_UPDATE` env variable."
// );
// }
// );
// }
// return null;
// };

(async () => {
  // await checkForUpdates();
  await Vlkyre();
})();
