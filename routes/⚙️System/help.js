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
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = ꪜᴏxʙᴏᴛ.speed();
  latensie = ꪜᴏxʙᴏᴛ.speed() - timestampe;
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
    ꪜᴏxʙᴏᴛ.fs.readdirSync(dir).reduce((acc, file) => {
      const fileDir = `${dir}/${file}`;
      if (ꪜᴏxʙᴏᴛ.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (ꪜᴏxʙᴏᴛ.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);

  var LOGOS = [
    "voxbot(1).png",
    "voxbot(2).png",
    "voxbot(3).png",
    "voxbot(4).png",
    "voxbot(5).png",
  ];
  var i = Math.floor(Math.random() * LOGOS.length);

  return await ꪜᴏxʙᴏᴛ.imgB(
    ꪜᴏxʙᴏᴛ,
    ᴠᴏxᴄ,
    `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
> ⒸSynthoria: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔══☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${ꪜᴏxʙᴏᴛ.os.release()}
║⦁ *OS Type:*   ${ꪜᴏxʙᴏᴛ.os.type()}
║⦁ *Directory:*  ${ꪜᴏxʙᴏᴛ.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${ꪜᴏxʙᴏᴛ.os.platform()}
║⦁ *Free memory:* ${ꪜᴏxʙᴏᴛ.os.freemem()}
║⦁ *Total memory:* ${ꪜᴏxʙᴏᴛ.os.totalmem()}
║⦁ *Host device :* ${ꪜᴏxʙᴏᴛ.os.hostname()}
║⦁ *OS Version:* ${ꪜᴏxʙᴏᴛ.os.version()}
┕╚═☰
╔══☰ *❕ COMMANDS*
║⦁ 🐉 ${ꪜᴏxʙᴏᴛ.prefix}emotionslist
║⦁ 📢 ${ꪜᴏxʙᴏᴛ.prefix}audiofilterlist
║⦁ 📼 ${ꪜᴏxʙᴏᴛ.prefix}conversionlist
║⦁ 📥 ${ꪜᴏxʙᴏᴛ.prefix}downloadlist
║⦁ 💰 ${ꪜᴏxʙᴏᴛ.prefix}gameslist
║⦁ 🔰 ${ꪜᴏxʙᴏᴛ.prefix}grouplist
║⦁ 🍁 ${ꪜᴏxʙᴏᴛ.prefix}ownerlist
║⦁ 🖼️ ${ꪜᴏxʙᴏᴛ.prefix}photolist
║⦁ 🔎 ${ꪜᴏxʙᴏᴛ.prefix}searchlist
║⦁ ⭕ ${ꪜᴏxʙᴏᴛ.prefix}ytfilterlist
║⦁ 🦄 ${ꪜᴏxʙᴏᴛ.prefix}sfwlist
║⦁ 🍑 ${ꪜᴏxʙᴏᴛ.prefix}hentailist
║⦁ 👅 ${ꪜᴏxʙᴏᴛ.prefix}nsfwlist
╚══════⋑



┌╔══☰ *🍁${pfname.toUpperCase()}🍁*
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ban
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}broadcast
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}join
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}leave
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}reboot
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}rules
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}unban
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}verify
┕╚═☰
╔══☰ *📢${pfname.toUpperCase()}📢*
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}panning
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bassboost
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}echo
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}fast
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}flanger
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nightcore
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}phaser
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}reverse
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}slow
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}speed
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}subboost
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}superslow
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}superspeed
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}surround
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}vaporwave
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}vibrato
┕╚═☰
╔══☰ *📼${pfname.toUpperCase()}📼*
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}carbon
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ship
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sticker
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}tinyurl
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}tourl
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}tts
┕╚═☰
╔══☰ *📥${pfname.toUpperCase()}📥* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}yta
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}play
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}song
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sing
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytmp3
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}music
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytplay
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytaudio
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytmusic
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}youtubemusic
│║⦁ 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytv
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}watch
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}stream
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytmp4
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}video
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytwatch
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytvideo
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}youtubevideo
┕╚═☰
╔══☰ *🐉${pfname.toUpperCase()}🐉* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bite
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}blush
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bonk
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bored
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}confused
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}cry
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}cuddle
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}dance
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}goodnight
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}happy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}highfive
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}hug
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}kill
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}kiss
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nervous
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pat
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}poke
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}punch
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sad
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}scream
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}slap
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}smile
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}stare
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}wave
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}wink
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}yeet
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}yes
┕╚═☰
╔══☰ *💰${pfname.toUpperCase()}💰* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}balance
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}buy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}daily
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}fish
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}gamble
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}inv
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pay
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}rob
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}store
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}work
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}zoo
┕╚═☰
╔══☰ *🔰${pfname.toUpperCase()}🔰* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}antilink
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}antinsfw
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}delete
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}group
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}kick
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}promote
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}setdesc
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}seticon
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}tagall
┕╚═☰
╔══☰ *🖼️${pfname.toUpperCase()}🖼️* 
║> ${ꪜᴏxʙᴏᴛ.prefix}image
║> ${ꪜᴏxʙᴏᴛ.prefix}unsplash
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pinterest
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}wallpaper
┕╚═☰
╔══☰ *🔎${pfname.toUpperCase()}🔎* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}advice
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}anime
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}chordlist
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}fact
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}getchord
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}gify
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}google
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}instagram
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}joke
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}lyrics
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}manga
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}meme
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pokedex
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}quote
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}reddit
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytsearch
┕╚═☰
╔══☰ *🍑${pfname.toUpperCase()}🍑* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ass
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bdsm
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}blowjob
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}cum
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}doujin
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}feet
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}femdom  
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}foxgirl  
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}glasses  
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}hentai
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}maid
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}masturbation
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}netorare
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}orgy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}panties
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pussy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}school
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}succubus
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}tentacles
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}thighs
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}uglyBastard
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}uniform
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}yuri
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}zettaiRyouiki
┕╚═☰
╔══☰ *👅${pfname.toUpperCase()}👅* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nsfw
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nsfw2
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bonermaterial
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nsfw411
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}iwanttofuckher
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}exxxtras
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}distension
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}bimbofetish
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}christiangirls
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}dirtygaming
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sexybutnotporn
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}femalepov
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}omgbeckylookathiscock
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sexygirls
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}breedingmaterial
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}canthold
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}toocuteforporn
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}justhotwomen
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}stripgirls
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}hotstuffnsfw
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}uncommonposes
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}gifsofremoval
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nostalgiafapping
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}truefmk
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}nudes
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}4k
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}realgirls
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}blowjobs
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}milf
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}milk
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}milking
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}lactating
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}pussy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}cum
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}slut
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}cumslut
┕╚═☰
╔══☰ *🦄${pfname.toUpperCase()}🦄* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}waifu
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}swaifu
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}neko
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sneko
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}shinobu
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sshinobu
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}megumin
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}smegumin
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}awoo
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sawoo
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}glomp
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sglomp
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}handhold
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}shandhold
│║⦁
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sbully
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}scuddle
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}scry
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}shug
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}skiss
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}slick
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}spat
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ssmug
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sbonk
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}syeet
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sblush
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ssmile
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}swave
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}shighfive
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}snom
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sbite
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sslap
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}skill
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}skick
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}shappy
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}swink
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}spoke
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}sdance
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}scringe
┕╚═☰
╔══☰ *⭕${pfname.toUpperCase()}⭕* 
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytpanning
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytbassboost
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytecho
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytflanger
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytnightcore
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytphaser
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytreverse
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytslow
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytspeed
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytsubboost
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytsuperslow
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytsuperspeed
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytsurround
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytvaporwave
│║⦁ ${ꪜᴏxʙᴏᴛ.prefix}ytvibrato
┕╚═════⋑`,
    "./src/logo/" + LOGOS[i]
  );
};
