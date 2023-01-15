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
module.exports = async (νℓкуяє, vcнaт) => {
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
  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await νℓкуяє.axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  await νℓкуяє.imgB(
    νℓкуяє,
    vcнaт,
    `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*
*🤖Hello, I am Vlkyre User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.


┌───〔 *❗Console❗* 〕
│⦁ *Uptime :* ${runtime(process.uptime())}
│⦁ *OS Release:* ${νℓкуяє.os.release()}
│⦁ *OS Type:*   ${νℓкуяє.os.type()}
│⦁ *Directory:*  ${νℓкуяє.os.homedir()}
│⦁ *Speed :* ${latensie.toFixed(4)} sec
│⦁ *Ram Usage :* ${ramUsage}
│⦁ *Platform :* ${νℓкуяє.os.platform()}
│⦁ *Free memory:* ${νℓкуяє.os.freemem()}
│⦁ *Total memory:* ${νℓкуяє.os.totalmem()}
│⦁ *Host device :* ${νℓкуяє.os.hostname()}
│⦁ *OS Version:* ${νℓкуяє.os.version()}
└───────────●


┌───〔 *❕Commands❕* 』
│⦁ 🐉 ${νℓкуяє.prefix}animationlist
│⦁ 📢 ${νℓкуяє.prefix}audiofilterlist
│⦁ 📼 ${νℓкуяє.prefix}conversionlist
│⦁ 📥 ${νℓкуяє.prefix}downloadlist
│⦁ 💰 ${νℓкуяє.prefix}gameslist
│⦁ 🔰 ${νℓкуяє.prefix}grouplist
│⦁ 🍁 ${νℓкуяє.prefix}ownerlist
│⦁ 🖼️ ${νℓкуяє.prefix}photolist
│⦁ 🔎 ${νℓкуяє.prefix}searchlist
│⦁ ⭕ ${νℓкуяє.prefix}ytfilterlist
│⦁ 🍑 ${νℓкуяє.prefix}hentailist
│⦁ 👅 ${νℓкуяє.prefix}adultlist
└───────────●



『 *🐉animationlist🐉* 』
║⦁ ${νℓкуяє.prefix}bite
║⦁ ${νℓкуяє.prefix}blush
║⦁ ${νℓкуяє.prefix}bonk
║⦁ ${νℓкуяє.prefix}bored
║⦁ ${νℓкуяє.prefix}confused
║⦁ ${νℓкуяє.prefix}cry
║⦁ ${νℓкуяє.prefix}cuddle
║⦁ ${νℓкуяє.prefix}dance
║⦁ ${νℓкуяє.prefix}goodnight
║⦁ ${νℓкуяє.prefix}happy
║⦁ ${νℓкуяє.prefix}highfive
║⦁ ${νℓкуяє.prefix}hug
║⦁ ${νℓкуяє.prefix}kill
║⦁ ${νℓкуяє.prefix}kiss
║⦁ ${νℓкуяє.prefix}nervous
║⦁ ${νℓкуяє.prefix}pat
║⦁ ${νℓкуяє.prefix}poke
║⦁ ${νℓкуяє.prefix}punch
║⦁ ${νℓкуяє.prefix}sad
║⦁ ${νℓкуяє.prefix}scream
║⦁ ${νℓкуяє.prefix}slap
║⦁ ${νℓкуяє.prefix}smile
║⦁ ${νℓкуяє.prefix}stare
║⦁ ${νℓкуяє.prefix}wave
║⦁ ${νℓкуяє.prefix}wink
║⦁ ${νℓкуяє.prefix}yeet
║⦁ ${νℓкуяє.prefix}yes
╚═══════⋑
『 *📢audiofilterlist📢* 』
║⦁ ${νℓкуяє.prefix}panning
║⦁ ${νℓкуяє.prefix}bassboost
║⦁ ${νℓкуяє.prefix}echo
║⦁ ${νℓкуяє.prefix}fast
║⦁ ${νℓкуяє.prefix}flanger
║⦁ ${νℓкуяє.prefix}nightcore
║⦁ ${νℓкуяє.prefix}phaser
║⦁ ${νℓкуяє.prefix}reverse
║⦁ ${νℓкуяє.prefix}slow
║⦁ ${νℓкуяє.prefix}speed
║⦁ ${νℓкуяє.prefix}subboost
║⦁ ${νℓкуяє.prefix}superslow
║⦁ ${νℓкуяє.prefix}superspeed
║⦁ ${νℓкуяє.prefix}surround
║⦁ ${νℓкуяє.prefix}vaporwave
║⦁ ${νℓкуяє.prefix}vibrato
╚═══════⋑
『 *📼conversionlist📼* 』
║⦁ ${νℓкуяє.prefix}carbon
║⦁ ${νℓкуяє.prefix}ship
║⦁ ${νℓкуяє.prefix}sticker
║⦁ ${νℓкуяє.prefix}tinyurl
║⦁ ${νℓкуяє.prefix}tourl
║⦁ ${νℓкуяє.prefix}tts
╚═══════⋑
『 *📥downloadlist📥* 』
║⦁ ${νℓкуяє.prefix}yta
║⦁ ${νℓкуяє.prefix}play
║⦁ ${νℓкуяє.prefix}song
║⦁ ${νℓкуяє.prefix}sing
║⦁ ${νℓкуяє.prefix}ytmp3
║⦁ ${νℓкуяє.prefix}music
║⦁ ${νℓкуяє.prefix}ytplay
║⦁ ${νℓкуяє.prefix}ytaudio
║⦁ ${νℓкуяє.prefix}ytmusic
║⦁ ${νℓкуяє.prefix}youtubemusic
║⦁ 
║⦁ ${νℓкуяє.prefix}ytv
║⦁ ${νℓкуяє.prefix}watch
║⦁ ${νℓкуяє.prefix}stream
║⦁ ${νℓкуяє.prefix}ytmp4
║⦁ ${νℓкуяє.prefix}video
║⦁ ${νℓкуяє.prefix}ytwatch
║⦁ ${νℓкуяє.prefix}ytvideo
║⦁ ${νℓкуяє.prefix}youtubevideo
╚═══════⋑
『 *💰gameslist💰* 』
║⦁ ${νℓкуяє.prefix}balance
║⦁ ${νℓкуяє.prefix}buy
║⦁ ${νℓкуяє.prefix}daily
║⦁ ${νℓкуяє.prefix}fish
║⦁ ${νℓкуяє.prefix}gamble
║⦁ ${νℓкуяє.prefix}inv
║⦁ ${νℓкуяє.prefix}pay
║⦁ ${νℓкуяє.prefix}rob
║⦁ ${νℓкуяє.prefix}store
║⦁ ${νℓкуяє.prefix}work
║⦁ ${νℓкуяє.prefix}zoo
╚═══════⋑
『 *🔰grouplist🔰* 』
║⦁ ${νℓкуяє.prefix}antilink
║⦁ ${νℓкуяє.prefix}delete
║⦁ ${νℓкуяє.prefix}group
║⦁ ${νℓкуяє.prefix}kick
║⦁ ${νℓкуяє.prefix}promote
║⦁ ${νℓкуяє.prefix}setdesc
║⦁ ${νℓкуяє.prefix}seticon
║⦁ ${νℓкуяє.prefix}tagall
╚═══════⋑
『 *🍁ownerlist🍁* 』
║⦁ ${νℓкуяє.prefix}ban
║⦁ ${νℓкуяє.prefix}broadcast
║⦁ ${νℓкуяє.prefix}join
║⦁ ${νℓкуяє.prefix}leave
║⦁ ${νℓкуяє.prefix}reboot
║⦁ ${νℓкуяє.prefix}rules
║⦁ ${νℓкуяє.prefix}unban
║⦁ ${νℓкуяє.prefix}verify
╚═══════⋑
『 *🖼️photolist🖼️* 』
║⦁ ${νℓкуяє.prefix}image
║⦁ ${νℓкуяє.prefix}neko
║⦁ ${νℓкуяє.prefix}pinterest
║⦁ ${νℓкуяє.prefix}waifu
║⦁ ${νℓкуяє.prefix}wallpaper
╚═══════⋑
『 *🔎searchlist🔎* 』
║⦁ ${νℓкуяє.prefix}advice
║⦁ ${νℓкуяє.prefix}anime
║⦁ ${νℓкуяє.prefix}chordlist
║⦁ ${νℓкуяє.prefix}fact
║⦁ ${νℓкуяє.prefix}getchord
║⦁ ${νℓкуяє.prefix}gify
║⦁ ${νℓкуяє.prefix}google
║⦁ ${νℓкуяє.prefix}instagram
║⦁ ${νℓкуяє.prefix}joke
║⦁ ${νℓкуяє.prefix}lyrics
║⦁ ${νℓкуяє.prefix}manga
║⦁ ${νℓкуяє.prefix}meme
║⦁ ${νℓкуяє.prefix}pokedex
║⦁ ${νℓкуяє.prefix}quote
║⦁ ${νℓкуяє.prefix}reddit
║⦁ ${νℓкуяє.prefix}ytsearch
╚═══════⋑
『 *⭕ytfilterlist⭕* 』
║⦁ ${νℓкуяє.prefix}ytpanning
║⦁ ${νℓкуяє.prefix}ytbassboost
║⦁ ${νℓкуяє.prefix}ytecho
║⦁ ${νℓкуяє.prefix}ytflanger
║⦁ ${νℓкуяє.prefix}ytnightcore
║⦁ ${νℓкуяє.prefix}ytphaser
║⦁ ${νℓкуяє.prefix}ytreverse
║⦁ ${νℓкуяє.prefix}ytslow
║⦁ ${νℓкуяє.prefix}ytspeed
║⦁ ${νℓкуяє.prefix}ytsubboost
║⦁ ${νℓкуяє.prefix}ytsuperslow
║⦁ ${νℓкуяє.prefix}ytsuperspeed
║⦁ ${νℓкуяє.prefix}ytsurround
║⦁ ${νℓкуяє.prefix}ytvaporwave
║⦁ ${νℓкуяє.prefix}ytvibrato
╚═══════⋑
『 *🍑hentailist🍑* 』
║⦁ ${νℓкуяє.prefix}ass
║⦁ ${νℓкуяє.prefix}bdsm
║⦁ ${νℓкуяє.prefix}blowjob
║⦁ ${νℓкуяє.prefix}cum
║⦁ ${νℓкуяє.prefix}doujin
║⦁ ${νℓкуяє.prefix}feet
║⦁ ${νℓкуяє.prefix}femdom  
║⦁ ${νℓкуяє.prefix}foxgirl  
║⦁ ${νℓкуяє.prefix}glasses  
║⦁ ${νℓкуяє.prefix}hentai
║⦁ ${νℓкуяє.prefix}maid
║⦁ ${νℓкуяє.prefix}masturbation
║⦁ ${νℓкуяє.prefix}netorare
║⦁ ${νℓкуяє.prefix}orgy
║⦁ ${νℓкуяє.prefix}panties
║⦁ ${νℓкуяє.prefix}pussy
║⦁ ${νℓкуяє.prefix}school
║⦁ ${νℓкуяє.prefix}succubus
║⦁ ${νℓкуяє.prefix}tentacles
║⦁ ${νℓкуяє.prefix}thighs
║⦁ ${νℓкуяє.prefix}uglyBastard
║⦁ ${νℓкуяє.prefix}uniform
║⦁ ${νℓкуяє.prefix}yuri
║⦁ ${νℓкуяє.prefix}zettaiRyouiki
╚═══════⋑
『 *👅adultlist👅* 』
║⦁ ${νℓкуяє.prefix}p4k
║⦁ ${νℓкуяє.prefix}pblowjob
║⦁ ${νℓкуяє.prefix}pmilf
║⦁ ${νℓкуяє.prefix}pmilk
║⦁ ${νℓкуяє.prefix}ppussy
║⦁ ${νℓкуяє.prefix}pslut
║⦁ ${νℓкуяє.prefix}tikporn
╚═══════⋑`,
    "./Gallery/νℓкуяє_rm.jpg"
  );
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