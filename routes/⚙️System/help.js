// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = ѕуηтнσяiα.speed();
  latensie = ѕуηтнσяiα.speed() - timestampe;
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
    ѕуηтнσяiα.fs.readdirSync(dir).reduce((acc, file) => {
      const fileDir = `${dir}/${file}`;
      if (ѕуηтнσяiα.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (ѕуηтнσяiα.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await ѕуηтнσяiα.imgB(
    ѕуηтнσяiα,
    νℓкhat,
    `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
> ⒸSynthoria: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔══☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${ѕуηтнσяiα.os.release()}
║⦁ *OS Type:*   ${ѕуηтнσяiα.os.type()}
║⦁ *Directory:*  ${ѕуηтнσяiα.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${ѕуηтнσяiα.os.platform()}
║⦁ *Free memory:* ${ѕуηтнσяiα.os.freemem()}
║⦁ *Total memory:* ${ѕуηтнσяiα.os.totalmem()}
║⦁ *Host device :* ${ѕуηтнσяiα.os.hostname()}
║⦁ *OS Version:* ${ѕуηтнσяiα.os.version()}
┕╚═☰
╔══☰ *❕ COMMANDS*
║⦁ 🐉 ${ѕуηтнσяiα.prefix}emotionslist
║⦁ 📢 ${ѕуηтнσяiα.prefix}audiofilterlist
║⦁ 📼 ${ѕуηтнσяiα.prefix}conversionlist
║⦁ 📥 ${ѕуηтнσяiα.prefix}downloadlist
║⦁ 💰 ${ѕуηтнσяiα.prefix}gameslist
║⦁ 🔰 ${ѕуηтнσяiα.prefix}grouplist
║⦁ 🍁 ${ѕуηтнσяiα.prefix}ownerlist
║⦁ 🖼️ ${ѕуηтнσяiα.prefix}photolist
║⦁ 🔎 ${ѕуηтнσяiα.prefix}searchlist
║⦁ ⭕ ${ѕуηтнσяiα.prefix}ytfilterlist
║⦁ 🦄 ${ѕуηтнσяiα.prefix}sfwlist
║⦁ 🍑 ${ѕуηтнσяiα.prefix}hentailist
║⦁ 👅 ${ѕуηтнσяiα.prefix}nsfwlist
╚══════⋑



┌╔══☰ *🍁${pfname.toUpperCase()}🍁*
│║⦁ ${ѕуηтнσяiα.prefix}ban
│║⦁ ${ѕуηтнσяiα.prefix}broadcast
│║⦁ ${ѕуηтнσяiα.prefix}join
│║⦁ ${ѕуηтнσяiα.prefix}leave
│║⦁ ${ѕуηтнσяiα.prefix}reboot
│║⦁ ${ѕуηтнσяiα.prefix}rules
│║⦁ ${ѕуηтнσяiα.prefix}unban
│║⦁ ${ѕуηтнσяiα.prefix}verify
┕╚═☰
╔══☰ *📢${pfname.toUpperCase()}📢*
│║⦁ ${ѕуηтнσяiα.prefix}panning
│║⦁ ${ѕуηтнσяiα.prefix}bassboost
│║⦁ ${ѕуηтнσяiα.prefix}echo
│║⦁ ${ѕуηтнσяiα.prefix}fast
│║⦁ ${ѕуηтнσяiα.prefix}flanger
│║⦁ ${ѕуηтнσяiα.prefix}nightcore
│║⦁ ${ѕуηтнσяiα.prefix}phaser
│║⦁ ${ѕуηтнσяiα.prefix}reverse
│║⦁ ${ѕуηтнσяiα.prefix}slow
│║⦁ ${ѕуηтнσяiα.prefix}speed
│║⦁ ${ѕуηтнσяiα.prefix}subboost
│║⦁ ${ѕуηтнσяiα.prefix}superslow
│║⦁ ${ѕуηтнσяiα.prefix}superspeed
│║⦁ ${ѕуηтнσяiα.prefix}surround
│║⦁ ${ѕуηтнσяiα.prefix}vaporwave
│║⦁ ${ѕуηтнσяiα.prefix}vibrato
┕╚═☰
╔══☰ *📼${pfname.toUpperCase()}📼*
│║⦁ ${ѕуηтнσяiα.prefix}carbon
│║⦁ ${ѕуηтнσяiα.prefix}ship
│║⦁ ${ѕуηтнσяiα.prefix}sticker
│║⦁ ${ѕуηтнσяiα.prefix}tinyurl
│║⦁ ${ѕуηтнσяiα.prefix}tourl
│║⦁ ${ѕуηтнσяiα.prefix}tts
┕╚═☰
╔══☰ *📥${pfname.toUpperCase()}📥* 
│║⦁ ${ѕуηтнσяiα.prefix}yta
│║⦁ ${ѕуηтнσяiα.prefix}play
│║⦁ ${ѕуηтнσяiα.prefix}song
│║⦁ ${ѕуηтнσяiα.prefix}sing
│║⦁ ${ѕуηтнσяiα.prefix}ytmp3
│║⦁ ${ѕуηтнσяiα.prefix}music
│║⦁ ${ѕуηтнσяiα.prefix}ytplay
│║⦁ ${ѕуηтнσяiα.prefix}ytaudio
│║⦁ ${ѕуηтнσяiα.prefix}ytmusic
│║⦁ ${ѕуηтнσяiα.prefix}youtubemusic
│║⦁ 
│║⦁ ${ѕуηтнσяiα.prefix}ytv
│║⦁ ${ѕуηтнσяiα.prefix}watch
│║⦁ ${ѕуηтнσяiα.prefix}stream
│║⦁ ${ѕуηтнσяiα.prefix}ytmp4
│║⦁ ${ѕуηтнσяiα.prefix}video
│║⦁ ${ѕуηтнσяiα.prefix}ytwatch
│║⦁ ${ѕуηтнσяiα.prefix}ytvideo
│║⦁ ${ѕуηтнσяiα.prefix}youtubevideo
┕╚═☰
╔══☰ *🐉${pfname.toUpperCase()}🐉* 
│║⦁ ${ѕуηтнσяiα.prefix}bite
│║⦁ ${ѕуηтнσяiα.prefix}blush
│║⦁ ${ѕуηтнσяiα.prefix}bonk
│║⦁ ${ѕуηтнσяiα.prefix}bored
│║⦁ ${ѕуηтнσяiα.prefix}confused
│║⦁ ${ѕуηтнσяiα.prefix}cry
│║⦁ ${ѕуηтнσяiα.prefix}cuddle
│║⦁ ${ѕуηтнσяiα.prefix}dance
│║⦁ ${ѕуηтнσяiα.prefix}goodnight
│║⦁ ${ѕуηтнσяiα.prefix}happy
│║⦁ ${ѕуηтнσяiα.prefix}highfive
│║⦁ ${ѕуηтнσяiα.prefix}hug
│║⦁ ${ѕуηтнσяiα.prefix}kill
│║⦁ ${ѕуηтнσяiα.prefix}kiss
│║⦁ ${ѕуηтнσяiα.prefix}nervous
│║⦁ ${ѕуηтнσяiα.prefix}pat
│║⦁ ${ѕуηтнσяiα.prefix}poke
│║⦁ ${ѕуηтнσяiα.prefix}punch
│║⦁ ${ѕуηтнσяiα.prefix}sad
│║⦁ ${ѕуηтнσяiα.prefix}scream
│║⦁ ${ѕуηтнσяiα.prefix}slap
│║⦁ ${ѕуηтнσяiα.prefix}smile
│║⦁ ${ѕуηтнσяiα.prefix}stare
│║⦁ ${ѕуηтнσяiα.prefix}wave
│║⦁ ${ѕуηтнσяiα.prefix}wink
│║⦁ ${ѕуηтнσяiα.prefix}yeet
│║⦁ ${ѕуηтнσяiα.prefix}yes
┕╚═☰
╔══☰ *💰${pfname.toUpperCase()}💰* 
│║⦁ ${ѕуηтнσяiα.prefix}balance
│║⦁ ${ѕуηтнσяiα.prefix}buy
│║⦁ ${ѕуηтнσяiα.prefix}daily
│║⦁ ${ѕуηтнσяiα.prefix}fish
│║⦁ ${ѕуηтнσяiα.prefix}gamble
│║⦁ ${ѕуηтнσяiα.prefix}inv
│║⦁ ${ѕуηтнσяiα.prefix}pay
│║⦁ ${ѕуηтнσяiα.prefix}rob
│║⦁ ${ѕуηтнσяiα.prefix}store
│║⦁ ${ѕуηтнσяiα.prefix}work
│║⦁ ${ѕуηтнσяiα.prefix}zoo
┕╚═☰
╔══☰ *🔰${pfname.toUpperCase()}🔰* 
│║⦁ ${ѕуηтнσяiα.prefix}antilink
│║⦁ ${ѕуηтнσяiα.prefix}antinsfw
│║⦁ ${ѕуηтнσяiα.prefix}delete
│║⦁ ${ѕуηтнσяiα.prefix}group
│║⦁ ${ѕуηтнσяiα.prefix}kick
│║⦁ ${ѕуηтнσяiα.prefix}promote
│║⦁ ${ѕуηтнσяiα.prefix}setdesc
│║⦁ ${ѕуηтнσяiα.prefix}seticon
│║⦁ ${ѕуηтнσяiα.prefix}tagall
┕╚═☰
╔══☰ *🖼️${pfname.toUpperCase()}🖼️* 
║> ${ѕуηтнσяiα.prefix}image
║> ${ѕуηтнσяiα.prefix}unsplash
│║⦁ ${ѕуηтнσяiα.prefix}pinterest
│║⦁ ${ѕуηтнσяiα.prefix}wallpaper
┕╚═☰
╔══☰ *🔎${pfname.toUpperCase()}🔎* 
│║⦁ ${ѕуηтнσяiα.prefix}advice
│║⦁ ${ѕуηтнσяiα.prefix}anime
│║⦁ ${ѕуηтнσяiα.prefix}chordlist
│║⦁ ${ѕуηтнσяiα.prefix}fact
│║⦁ ${ѕуηтнσяiα.prefix}getchord
│║⦁ ${ѕуηтнσяiα.prefix}gify
│║⦁ ${ѕуηтнσяiα.prefix}google
│║⦁ ${ѕуηтнσяiα.prefix}instagram
│║⦁ ${ѕуηтнσяiα.prefix}joke
│║⦁ ${ѕуηтнσяiα.prefix}lyrics
│║⦁ ${ѕуηтнσяiα.prefix}manga
│║⦁ ${ѕуηтнσяiα.prefix}meme
│║⦁ ${ѕуηтнσяiα.prefix}pokedex
│║⦁ ${ѕуηтнσяiα.prefix}quote
│║⦁ ${ѕуηтнσяiα.prefix}reddit
│║⦁ ${ѕуηтнσяiα.prefix}ytsearch
┕╚═☰
╔══☰ *🍑${pfname.toUpperCase()}🍑* 
│║⦁ ${ѕуηтнσяiα.prefix}ass
│║⦁ ${ѕуηтнσяiα.prefix}bdsm
│║⦁ ${ѕуηтнσяiα.prefix}blowjob
│║⦁ ${ѕуηтнσяiα.prefix}cum
│║⦁ ${ѕуηтнσяiα.prefix}doujin
│║⦁ ${ѕуηтнσяiα.prefix}feet
│║⦁ ${ѕуηтнσяiα.prefix}femdom  
│║⦁ ${ѕуηтнσяiα.prefix}foxgirl  
│║⦁ ${ѕуηтнσяiα.prefix}glasses  
│║⦁ ${ѕуηтнσяiα.prefix}hentai
│║⦁ ${ѕуηтнσяiα.prefix}maid
│║⦁ ${ѕуηтнσяiα.prefix}masturbation
│║⦁ ${ѕуηтнσяiα.prefix}netorare
│║⦁ ${ѕуηтнσяiα.prefix}orgy
│║⦁ ${ѕуηтнσяiα.prefix}panties
│║⦁ ${ѕуηтнσяiα.prefix}pussy
│║⦁ ${ѕуηтнσяiα.prefix}school
│║⦁ ${ѕуηтнσяiα.prefix}succubus
│║⦁ ${ѕуηтнσяiα.prefix}tentacles
│║⦁ ${ѕуηтнσяiα.prefix}thighs
│║⦁ ${ѕуηтнσяiα.prefix}uglyBastard
│║⦁ ${ѕуηтнσяiα.prefix}uniform
│║⦁ ${ѕуηтнσяiα.prefix}yuri
│║⦁ ${ѕуηтнσяiα.prefix}zettaiRyouiki
┕╚═☰
╔══☰ *👅${pfname.toUpperCase()}👅* 
│║⦁ ${ѕуηтнσяiα.prefix}nsfw
│║⦁ ${ѕуηтнσяiα.prefix}nsfw2
│║⦁ ${ѕуηтнσяiα.prefix}bonermaterial
│║⦁ ${ѕуηтнσяiα.prefix}nsfw411
│║⦁ ${ѕуηтнσяiα.prefix}iwanttofuckher
│║⦁ ${ѕуηтнσяiα.prefix}exxxtras
│║⦁ ${ѕуηтнσяiα.prefix}distension
│║⦁ ${ѕуηтнσяiα.prefix}bimbofetish
│║⦁ ${ѕуηтнσяiα.prefix}christiangirls
│║⦁ ${ѕуηтнσяiα.prefix}dirtygaming
│║⦁ ${ѕуηтнσяiα.prefix}sexybutnotporn
│║⦁ ${ѕуηтнσяiα.prefix}femalepov
│║⦁ ${ѕуηтнσяiα.prefix}omgbeckylookathiscock
│║⦁ ${ѕуηтнσяiα.prefix}sexygirls
│║⦁ ${ѕуηтнσяiα.prefix}breedingmaterial
│║⦁ ${ѕуηтнσяiα.prefix}canthold
│║⦁ ${ѕуηтнσяiα.prefix}toocuteforporn
│║⦁ ${ѕуηтнσяiα.prefix}justhotwomen
│║⦁ ${ѕуηтнσяiα.prefix}stripgirls
│║⦁ ${ѕуηтнσяiα.prefix}hotstuffnsfw
│║⦁ ${ѕуηтнσяiα.prefix}uncommonposes
│║⦁ ${ѕуηтнσяiα.prefix}gifsofremoval
│║⦁ ${ѕуηтнσяiα.prefix}nostalgiafapping
│║⦁ ${ѕуηтнσяiα.prefix}truefmk
│║⦁ ${ѕуηтнσяiα.prefix}nudes
│║⦁ ${ѕуηтнσяiα.prefix}4k
│║⦁ ${ѕуηтнσяiα.prefix}realgirls
│║⦁ ${ѕуηтнσяiα.prefix}blowjobs
│║⦁ ${ѕуηтнσяiα.prefix}milf
│║⦁ ${ѕуηтнσяiα.prefix}milk
│║⦁ ${ѕуηтнσяiα.prefix}milking
│║⦁ ${ѕуηтнσяiα.prefix}lactating
│║⦁ ${ѕуηтнσяiα.prefix}pussy
│║⦁ ${ѕуηтнσяiα.prefix}cum
│║⦁ ${ѕуηтнσяiα.prefix}slut
│║⦁ ${ѕуηтнσяiα.prefix}cumslut
┕╚═☰
╔══☰ *🦄${pfname.toUpperCase()}🦄* 
│║⦁ ${ѕуηтнσяiα.prefix}waifu
│║⦁ ${ѕуηтнσяiα.prefix}swaifu
│║⦁ ${ѕуηтнσяiα.prefix}neko
│║⦁ ${ѕуηтнσяiα.prefix}sneko
│║⦁ ${ѕуηтнσяiα.prefix}shinobu
│║⦁ ${ѕуηтнσяiα.prefix}sshinobu
│║⦁ ${ѕуηтнσяiα.prefix}megumin
│║⦁ ${ѕуηтнσяiα.prefix}smegumin
│║⦁ ${ѕуηтнσяiα.prefix}awoo
│║⦁ ${ѕуηтнσяiα.prefix}sawoo
│║⦁ ${ѕуηтнσяiα.prefix}glomp
│║⦁ ${ѕуηтнσяiα.prefix}sglomp
│║⦁ ${ѕуηтнσяiα.prefix}handhold
│║⦁ ${ѕуηтнσяiα.prefix}shandhold
│║⦁
│║⦁ ${ѕуηтнσяiα.prefix}sbully
│║⦁ ${ѕуηтнσяiα.prefix}scuddle
│║⦁ ${ѕуηтнσяiα.prefix}scry
│║⦁ ${ѕуηтнσяiα.prefix}shug
│║⦁ ${ѕуηтнσяiα.prefix}skiss
│║⦁ ${ѕуηтнσяiα.prefix}slick
│║⦁ ${ѕуηтнσяiα.prefix}spat
│║⦁ ${ѕуηтнσяiα.prefix}ssmug
│║⦁ ${ѕуηтнσяiα.prefix}sbonk
│║⦁ ${ѕуηтнσяiα.prefix}syeet
│║⦁ ${ѕуηтнσяiα.prefix}sblush
│║⦁ ${ѕуηтнσяiα.prefix}ssmile
│║⦁ ${ѕуηтнσяiα.prefix}swave
│║⦁ ${ѕуηтнσяiα.prefix}shighfive
│║⦁ ${ѕуηтнσяiα.prefix}snom
│║⦁ ${ѕуηтнσяiα.prefix}sbite
│║⦁ ${ѕуηтнσяiα.prefix}sslap
│║⦁ ${ѕуηтнσяiα.prefix}skill
│║⦁ ${ѕуηтнσяiα.prefix}skick
│║⦁ ${ѕуηтнσяiα.prefix}shappy
│║⦁ ${ѕуηтнσяiα.prefix}swink
│║⦁ ${ѕуηтнσяiα.prefix}spoke
│║⦁ ${ѕуηтнσяiα.prefix}sdance
│║⦁ ${ѕуηтнσяiα.prefix}scringe
┕╚═☰
╔══☰ *⭕${pfname.toUpperCase()}⭕* 
│║⦁ ${ѕуηтнσяiα.prefix}ytpanning
│║⦁ ${ѕуηтнσяiα.prefix}ytbassboost
│║⦁ ${ѕуηтнσяiα.prefix}ytecho
│║⦁ ${ѕуηтнσяiα.prefix}ytflanger
│║⦁ ${ѕуηтнσяiα.prefix}ytnightcore
│║⦁ ${ѕуηтнσяiα.prefix}ytphaser
│║⦁ ${ѕуηтнσяiα.prefix}ytreverse
│║⦁ ${ѕуηтнσяiα.prefix}ytslow
│║⦁ ${ѕуηтнσяiα.prefix}ytspeed
│║⦁ ${ѕуηтнσяiα.prefix}ytsubboost
│║⦁ ${ѕуηтнσяiα.prefix}ytsuperslow
│║⦁ ${ѕуηтнσяiα.prefix}ytsuperspeed
│║⦁ ${ѕуηтнσяiα.prefix}ytsurround
│║⦁ ${ѕуηтнσяiα.prefix}ytvaporwave
│║⦁ ${ѕуηтнσяiα.prefix}ytvibrato
┕╚═════⋑`,
    ѕуηтнσяiα.logo
  );
};
