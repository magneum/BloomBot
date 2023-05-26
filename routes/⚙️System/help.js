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
// ┕╚═══════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
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
    νℓкhat,
    `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
> ⒸVlkyre: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔══☰ *❗ CONSOLE*
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
┕╚═☰
╔══☰ *❕ COMMANDS*
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
╚══════⋑



┌╔══☰ *🍁${pfname.toUpperCase()}🍁*
│║⦁ ${νℓкуяє.prefix}ban
│║⦁ ${νℓкуяє.prefix}broadcast
│║⦁ ${νℓкуяє.prefix}join
│║⦁ ${νℓкуяє.prefix}leave
│║⦁ ${νℓкуяє.prefix}reboot
│║⦁ ${νℓкуяє.prefix}rules
│║⦁ ${νℓкуяє.prefix}unban
│║⦁ ${νℓкуяє.prefix}verify
┕╚═☰
╔══☰ *📢${pfname.toUpperCase()}📢*
│║⦁ ${νℓкуяє.prefix}panning
│║⦁ ${νℓкуяє.prefix}bassboost
│║⦁ ${νℓкуяє.prefix}echo
│║⦁ ${νℓкуяє.prefix}fast
│║⦁ ${νℓкуяє.prefix}flanger
│║⦁ ${νℓкуяє.prefix}nightcore
│║⦁ ${νℓкуяє.prefix}phaser
│║⦁ ${νℓкуяє.prefix}reverse
│║⦁ ${νℓкуяє.prefix}slow
│║⦁ ${νℓкуяє.prefix}speed
│║⦁ ${νℓкуяє.prefix}subboost
│║⦁ ${νℓкуяє.prefix}superslow
│║⦁ ${νℓкуяє.prefix}superspeed
│║⦁ ${νℓкуяє.prefix}surround
│║⦁ ${νℓкуяє.prefix}vaporwave
│║⦁ ${νℓкуяє.prefix}vibrato
┕╚═☰
╔══☰ *📼${pfname.toUpperCase()}📼*
│║⦁ ${νℓкуяє.prefix}carbon
│║⦁ ${νℓкуяє.prefix}ship
│║⦁ ${νℓкуяє.prefix}sticker
│║⦁ ${νℓкуяє.prefix}tinyurl
│║⦁ ${νℓкуяє.prefix}tourl
│║⦁ ${νℓкуяє.prefix}tts
┕╚═☰
╔══☰ *📥${pfname.toUpperCase()}📥* 
│║⦁ ${νℓкуяє.prefix}yta
│║⦁ ${νℓкуяє.prefix}play
│║⦁ ${νℓкуяє.prefix}song
│║⦁ ${νℓкуяє.prefix}sing
│║⦁ ${νℓкуяє.prefix}ytmp3
│║⦁ ${νℓкуяє.prefix}music
│║⦁ ${νℓкуяє.prefix}ytplay
│║⦁ ${νℓкуяє.prefix}ytaudio
│║⦁ ${νℓкуяє.prefix}ytmusic
│║⦁ ${νℓкуяє.prefix}youtubemusic
│║⦁ 
│║⦁ ${νℓкуяє.prefix}ytv
│║⦁ ${νℓкуяє.prefix}watch
│║⦁ ${νℓкуяє.prefix}stream
│║⦁ ${νℓкуяє.prefix}ytmp4
│║⦁ ${νℓкуяє.prefix}video
│║⦁ ${νℓкуяє.prefix}ytwatch
│║⦁ ${νℓкуяє.prefix}ytvideo
│║⦁ ${νℓкуяє.prefix}youtubevideo
┕╚═☰
╔══☰ *🐉${pfname.toUpperCase()}🐉* 
│║⦁ ${νℓкуяє.prefix}bite
│║⦁ ${νℓкуяє.prefix}blush
│║⦁ ${νℓкуяє.prefix}bonk
│║⦁ ${νℓкуяє.prefix}bored
│║⦁ ${νℓкуяє.prefix}confused
│║⦁ ${νℓкуяє.prefix}cry
│║⦁ ${νℓкуяє.prefix}cuddle
│║⦁ ${νℓкуяє.prefix}dance
│║⦁ ${νℓкуяє.prefix}goodnight
│║⦁ ${νℓкуяє.prefix}happy
│║⦁ ${νℓкуяє.prefix}highfive
│║⦁ ${νℓкуяє.prefix}hug
│║⦁ ${νℓкуяє.prefix}kill
│║⦁ ${νℓкуяє.prefix}kiss
│║⦁ ${νℓкуяє.prefix}nervous
│║⦁ ${νℓкуяє.prefix}pat
│║⦁ ${νℓкуяє.prefix}poke
│║⦁ ${νℓкуяє.prefix}punch
│║⦁ ${νℓкуяє.prefix}sad
│║⦁ ${νℓкуяє.prefix}scream
│║⦁ ${νℓкуяє.prefix}slap
│║⦁ ${νℓкуяє.prefix}smile
│║⦁ ${νℓкуяє.prefix}stare
│║⦁ ${νℓкуяє.prefix}wave
│║⦁ ${νℓкуяє.prefix}wink
│║⦁ ${νℓкуяє.prefix}yeet
│║⦁ ${νℓкуяє.prefix}yes
┕╚═☰
╔══☰ *💰${pfname.toUpperCase()}💰* 
│║⦁ ${νℓкуяє.prefix}balance
│║⦁ ${νℓкуяє.prefix}buy
│║⦁ ${νℓкуяє.prefix}daily
│║⦁ ${νℓкуяє.prefix}fish
│║⦁ ${νℓкуяє.prefix}gamble
│║⦁ ${νℓкуяє.prefix}inv
│║⦁ ${νℓкуяє.prefix}pay
│║⦁ ${νℓкуяє.prefix}rob
│║⦁ ${νℓкуяє.prefix}store
│║⦁ ${νℓкуяє.prefix}work
│║⦁ ${νℓкуяє.prefix}zoo
┕╚═☰
╔══☰ *🔰${pfname.toUpperCase()}🔰* 
│║⦁ ${νℓкуяє.prefix}antilink
│║⦁ ${νℓкуяє.prefix}antinsfw
│║⦁ ${νℓкуяє.prefix}delete
│║⦁ ${νℓкуяє.prefix}group
│║⦁ ${νℓкуяє.prefix}kick
│║⦁ ${νℓкуяє.prefix}promote
│║⦁ ${νℓкуяє.prefix}setdesc
│║⦁ ${νℓкуяє.prefix}seticon
│║⦁ ${νℓкуяє.prefix}tagall
┕╚═☰
╔══☰ *🖼️${pfname.toUpperCase()}🖼️* 
║> ${νℓкуяє.prefix}image
║> ${νℓкуяє.prefix}unsplash
│║⦁ ${νℓкуяє.prefix}pinterest
│║⦁ ${νℓкуяє.prefix}wallpaper
┕╚═☰
╔══☰ *🔎${pfname.toUpperCase()}🔎* 
│║⦁ ${νℓкуяє.prefix}advice
│║⦁ ${νℓкуяє.prefix}anime
│║⦁ ${νℓкуяє.prefix}chordlist
│║⦁ ${νℓкуяє.prefix}fact
│║⦁ ${νℓкуяє.prefix}getchord
│║⦁ ${νℓкуяє.prefix}gify
│║⦁ ${νℓкуяє.prefix}google
│║⦁ ${νℓкуяє.prefix}instagram
│║⦁ ${νℓкуяє.prefix}joke
│║⦁ ${νℓкуяє.prefix}lyrics
│║⦁ ${νℓкуяє.prefix}manga
│║⦁ ${νℓкуяє.prefix}meme
│║⦁ ${νℓкуяє.prefix}pokedex
│║⦁ ${νℓкуяє.prefix}quote
│║⦁ ${νℓкуяє.prefix}reddit
│║⦁ ${νℓкуяє.prefix}ytsearch
┕╚═☰
╔══☰ *🍑${pfname.toUpperCase()}🍑* 
│║⦁ ${νℓкуяє.prefix}ass
│║⦁ ${νℓкуяє.prefix}bdsm
│║⦁ ${νℓкуяє.prefix}blowjob
│║⦁ ${νℓкуяє.prefix}cum
│║⦁ ${νℓкуяє.prefix}doujin
│║⦁ ${νℓкуяє.prefix}feet
│║⦁ ${νℓкуяє.prefix}femdom  
│║⦁ ${νℓкуяє.prefix}foxgirl  
│║⦁ ${νℓкуяє.prefix}glasses  
│║⦁ ${νℓкуяє.prefix}hentai
│║⦁ ${νℓкуяє.prefix}maid
│║⦁ ${νℓкуяє.prefix}masturbation
│║⦁ ${νℓкуяє.prefix}netorare
│║⦁ ${νℓкуяє.prefix}orgy
│║⦁ ${νℓкуяє.prefix}panties
│║⦁ ${νℓкуяє.prefix}pussy
│║⦁ ${νℓкуяє.prefix}school
│║⦁ ${νℓкуяє.prefix}succubus
│║⦁ ${νℓкуяє.prefix}tentacles
│║⦁ ${νℓкуяє.prefix}thighs
│║⦁ ${νℓкуяє.prefix}uglyBastard
│║⦁ ${νℓкуяє.prefix}uniform
│║⦁ ${νℓкуяє.prefix}yuri
│║⦁ ${νℓкуяє.prefix}zettaiRyouiki
┕╚═☰
╔══☰ *👅${pfname.toUpperCase()}👅* 
│║⦁ ${νℓкуяє.prefix}nsfw
│║⦁ ${νℓкуяє.prefix}nsfw2
│║⦁ ${νℓкуяє.prefix}bonermaterial
│║⦁ ${νℓкуяє.prefix}nsfw411
│║⦁ ${νℓкуяє.prefix}iwanttofuckher
│║⦁ ${νℓкуяє.prefix}exxxtras
│║⦁ ${νℓкуяє.prefix}distension
│║⦁ ${νℓкуяє.prefix}bimbofetish
│║⦁ ${νℓкуяє.prefix}christiangirls
│║⦁ ${νℓкуяє.prefix}dirtygaming
│║⦁ ${νℓкуяє.prefix}sexybutnotporn
│║⦁ ${νℓкуяє.prefix}femalepov
│║⦁ ${νℓкуяє.prefix}omgbeckylookathiscock
│║⦁ ${νℓкуяє.prefix}sexygirls
│║⦁ ${νℓкуяє.prefix}breedingmaterial
│║⦁ ${νℓкуяє.prefix}canthold
│║⦁ ${νℓкуяє.prefix}toocuteforporn
│║⦁ ${νℓкуяє.prefix}justhotwomen
│║⦁ ${νℓкуяє.prefix}stripgirls
│║⦁ ${νℓкуяє.prefix}hotstuffnsfw
│║⦁ ${νℓкуяє.prefix}uncommonposes
│║⦁ ${νℓкуяє.prefix}gifsofremoval
│║⦁ ${νℓкуяє.prefix}nostalgiafapping
│║⦁ ${νℓкуяє.prefix}truefmk
│║⦁ ${νℓкуяє.prefix}nudes
│║⦁ ${νℓкуяє.prefix}4k
│║⦁ ${νℓкуяє.prefix}realgirls
│║⦁ ${νℓкуяє.prefix}blowjobs
│║⦁ ${νℓкуяє.prefix}milf
│║⦁ ${νℓкуяє.prefix}milk
│║⦁ ${νℓкуяє.prefix}milking
│║⦁ ${νℓкуяє.prefix}lactating
│║⦁ ${νℓкуяє.prefix}pussy
│║⦁ ${νℓкуяє.prefix}cum
│║⦁ ${νℓкуяє.prefix}slut
│║⦁ ${νℓкуяє.prefix}cumslut
┕╚═☰
╔══☰ *🦄${pfname.toUpperCase()}🦄* 
│║⦁ ${νℓкуяє.prefix}waifu
│║⦁ ${νℓкуяє.prefix}swaifu
│║⦁ ${νℓкуяє.prefix}neko
│║⦁ ${νℓкуяє.prefix}sneko
│║⦁ ${νℓкуяє.prefix}shinobu
│║⦁ ${νℓкуяє.prefix}sshinobu
│║⦁ ${νℓкуяє.prefix}megumin
│║⦁ ${νℓкуяє.prefix}smegumin
│║⦁ ${νℓкуяє.prefix}awoo
│║⦁ ${νℓкуяє.prefix}sawoo
│║⦁ ${νℓкуяє.prefix}glomp
│║⦁ ${νℓкуяє.prefix}sglomp
│║⦁ ${νℓкуяє.prefix}handhold
│║⦁ ${νℓкуяє.prefix}shandhold
│║⦁
│║⦁ ${νℓкуяє.prefix}sbully
│║⦁ ${νℓкуяє.prefix}scuddle
│║⦁ ${νℓкуяє.prefix}scry
│║⦁ ${νℓкуяє.prefix}shug
│║⦁ ${νℓкуяє.prefix}skiss
│║⦁ ${νℓкуяє.prefix}slick
│║⦁ ${νℓкуяє.prefix}spat
│║⦁ ${νℓкуяє.prefix}ssmug
│║⦁ ${νℓкуяє.prefix}sbonk
│║⦁ ${νℓкуяє.prefix}syeet
│║⦁ ${νℓкуяє.prefix}sblush
│║⦁ ${νℓкуяє.prefix}ssmile
│║⦁ ${νℓкуяє.prefix}swave
│║⦁ ${νℓкуяє.prefix}shighfive
│║⦁ ${νℓкуяє.prefix}snom
│║⦁ ${νℓкуяє.prefix}sbite
│║⦁ ${νℓкуяє.prefix}sslap
│║⦁ ${νℓкуяє.prefix}skill
│║⦁ ${νℓкуяє.prefix}skick
│║⦁ ${νℓкуяє.prefix}shappy
│║⦁ ${νℓкуяє.prefix}swink
│║⦁ ${νℓкуяє.prefix}spoke
│║⦁ ${νℓкуяє.prefix}sdance
│║⦁ ${νℓкуяє.prefix}scringe
┕╚═☰
╔══☰ *⭕${pfname.toUpperCase()}⭕* 
│║⦁ ${νℓкуяє.prefix}ytpanning
│║⦁ ${νℓкуяє.prefix}ytbassboost
│║⦁ ${νℓкуяє.prefix}ytecho
│║⦁ ${νℓкуяє.prefix}ytflanger
│║⦁ ${νℓкуяє.prefix}ytnightcore
│║⦁ ${νℓкуяє.prefix}ytphaser
│║⦁ ${νℓкуяє.prefix}ytreverse
│║⦁ ${νℓкуяє.prefix}ytslow
│║⦁ ${νℓкуяє.prefix}ytspeed
│║⦁ ${νℓкуяє.prefix}ytsubboost
│║⦁ ${νℓкуяє.prefix}ytsuperslow
│║⦁ ${νℓкуяє.prefix}ytsuperspeed
│║⦁ ${νℓкуяє.prefix}ytsurround
│║⦁ ${νℓкуяє.prefix}ytvaporwave
│║⦁ ${νℓкуяє.prefix}ytvibrato
┕╚═════⋑`,
    νℓкуяє.logo
  );
};
