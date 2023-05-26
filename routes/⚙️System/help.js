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
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = VօxB໐t.speed();
  latensie = VօxB໐t.speed() - timestampe;
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
    VօxB໐t.fs.readdirSync(dir).reduce((acc, file) => {
      const fileDir = `${dir}/${file}`;
      if (VօxB໐t.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (VօxB໐t.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await VօxB໐t.imgB(
    VօxB໐t,
    νℓкhat,
    `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
> ⒸSynthoria: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔══☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${VօxB໐t.os.release()}
║⦁ *OS Type:*   ${VօxB໐t.os.type()}
║⦁ *Directory:*  ${VօxB໐t.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${VօxB໐t.os.platform()}
║⦁ *Free memory:* ${VօxB໐t.os.freemem()}
║⦁ *Total memory:* ${VօxB໐t.os.totalmem()}
║⦁ *Host device :* ${VօxB໐t.os.hostname()}
║⦁ *OS Version:* ${VօxB໐t.os.version()}
┕╚═☰
╔══☰ *❕ COMMANDS*
║⦁ 🐉 ${VօxB໐t.prefix}emotionslist
║⦁ 📢 ${VօxB໐t.prefix}audiofilterlist
║⦁ 📼 ${VօxB໐t.prefix}conversionlist
║⦁ 📥 ${VօxB໐t.prefix}downloadlist
║⦁ 💰 ${VօxB໐t.prefix}gameslist
║⦁ 🔰 ${VօxB໐t.prefix}grouplist
║⦁ 🍁 ${VօxB໐t.prefix}ownerlist
║⦁ 🖼️ ${VօxB໐t.prefix}photolist
║⦁ 🔎 ${VօxB໐t.prefix}searchlist
║⦁ ⭕ ${VօxB໐t.prefix}ytfilterlist
║⦁ 🦄 ${VօxB໐t.prefix}sfwlist
║⦁ 🍑 ${VօxB໐t.prefix}hentailist
║⦁ 👅 ${VօxB໐t.prefix}nsfwlist
╚══════⋑



┌╔══☰ *🍁${pfname.toUpperCase()}🍁*
│║⦁ ${VօxB໐t.prefix}ban
│║⦁ ${VօxB໐t.prefix}broadcast
│║⦁ ${VօxB໐t.prefix}join
│║⦁ ${VօxB໐t.prefix}leave
│║⦁ ${VօxB໐t.prefix}reboot
│║⦁ ${VօxB໐t.prefix}rules
│║⦁ ${VօxB໐t.prefix}unban
│║⦁ ${VօxB໐t.prefix}verify
┕╚═☰
╔══☰ *📢${pfname.toUpperCase()}📢*
│║⦁ ${VօxB໐t.prefix}panning
│║⦁ ${VօxB໐t.prefix}bassboost
│║⦁ ${VօxB໐t.prefix}echo
│║⦁ ${VօxB໐t.prefix}fast
│║⦁ ${VօxB໐t.prefix}flanger
│║⦁ ${VօxB໐t.prefix}nightcore
│║⦁ ${VօxB໐t.prefix}phaser
│║⦁ ${VօxB໐t.prefix}reverse
│║⦁ ${VօxB໐t.prefix}slow
│║⦁ ${VօxB໐t.prefix}speed
│║⦁ ${VօxB໐t.prefix}subboost
│║⦁ ${VօxB໐t.prefix}superslow
│║⦁ ${VօxB໐t.prefix}superspeed
│║⦁ ${VօxB໐t.prefix}surround
│║⦁ ${VօxB໐t.prefix}vaporwave
│║⦁ ${VօxB໐t.prefix}vibrato
┕╚═☰
╔══☰ *📼${pfname.toUpperCase()}📼*
│║⦁ ${VօxB໐t.prefix}carbon
│║⦁ ${VօxB໐t.prefix}ship
│║⦁ ${VօxB໐t.prefix}sticker
│║⦁ ${VօxB໐t.prefix}tinyurl
│║⦁ ${VօxB໐t.prefix}tourl
│║⦁ ${VօxB໐t.prefix}tts
┕╚═☰
╔══☰ *📥${pfname.toUpperCase()}📥* 
│║⦁ ${VօxB໐t.prefix}yta
│║⦁ ${VօxB໐t.prefix}play
│║⦁ ${VօxB໐t.prefix}song
│║⦁ ${VօxB໐t.prefix}sing
│║⦁ ${VօxB໐t.prefix}ytmp3
│║⦁ ${VօxB໐t.prefix}music
│║⦁ ${VօxB໐t.prefix}ytplay
│║⦁ ${VօxB໐t.prefix}ytaudio
│║⦁ ${VօxB໐t.prefix}ytmusic
│║⦁ ${VօxB໐t.prefix}youtubemusic
│║⦁ 
│║⦁ ${VօxB໐t.prefix}ytv
│║⦁ ${VօxB໐t.prefix}watch
│║⦁ ${VօxB໐t.prefix}stream
│║⦁ ${VօxB໐t.prefix}ytmp4
│║⦁ ${VօxB໐t.prefix}video
│║⦁ ${VօxB໐t.prefix}ytwatch
│║⦁ ${VօxB໐t.prefix}ytvideo
│║⦁ ${VօxB໐t.prefix}youtubevideo
┕╚═☰
╔══☰ *🐉${pfname.toUpperCase()}🐉* 
│║⦁ ${VօxB໐t.prefix}bite
│║⦁ ${VօxB໐t.prefix}blush
│║⦁ ${VօxB໐t.prefix}bonk
│║⦁ ${VօxB໐t.prefix}bored
│║⦁ ${VօxB໐t.prefix}confused
│║⦁ ${VօxB໐t.prefix}cry
│║⦁ ${VօxB໐t.prefix}cuddle
│║⦁ ${VօxB໐t.prefix}dance
│║⦁ ${VօxB໐t.prefix}goodnight
│║⦁ ${VօxB໐t.prefix}happy
│║⦁ ${VօxB໐t.prefix}highfive
│║⦁ ${VօxB໐t.prefix}hug
│║⦁ ${VօxB໐t.prefix}kill
│║⦁ ${VօxB໐t.prefix}kiss
│║⦁ ${VօxB໐t.prefix}nervous
│║⦁ ${VօxB໐t.prefix}pat
│║⦁ ${VօxB໐t.prefix}poke
│║⦁ ${VօxB໐t.prefix}punch
│║⦁ ${VօxB໐t.prefix}sad
│║⦁ ${VօxB໐t.prefix}scream
│║⦁ ${VօxB໐t.prefix}slap
│║⦁ ${VօxB໐t.prefix}smile
│║⦁ ${VօxB໐t.prefix}stare
│║⦁ ${VօxB໐t.prefix}wave
│║⦁ ${VօxB໐t.prefix}wink
│║⦁ ${VօxB໐t.prefix}yeet
│║⦁ ${VօxB໐t.prefix}yes
┕╚═☰
╔══☰ *💰${pfname.toUpperCase()}💰* 
│║⦁ ${VօxB໐t.prefix}balance
│║⦁ ${VօxB໐t.prefix}buy
│║⦁ ${VօxB໐t.prefix}daily
│║⦁ ${VօxB໐t.prefix}fish
│║⦁ ${VօxB໐t.prefix}gamble
│║⦁ ${VօxB໐t.prefix}inv
│║⦁ ${VօxB໐t.prefix}pay
│║⦁ ${VօxB໐t.prefix}rob
│║⦁ ${VօxB໐t.prefix}store
│║⦁ ${VօxB໐t.prefix}work
│║⦁ ${VօxB໐t.prefix}zoo
┕╚═☰
╔══☰ *🔰${pfname.toUpperCase()}🔰* 
│║⦁ ${VօxB໐t.prefix}antilink
│║⦁ ${VօxB໐t.prefix}antinsfw
│║⦁ ${VօxB໐t.prefix}delete
│║⦁ ${VօxB໐t.prefix}group
│║⦁ ${VօxB໐t.prefix}kick
│║⦁ ${VօxB໐t.prefix}promote
│║⦁ ${VօxB໐t.prefix}setdesc
│║⦁ ${VօxB໐t.prefix}seticon
│║⦁ ${VօxB໐t.prefix}tagall
┕╚═☰
╔══☰ *🖼️${pfname.toUpperCase()}🖼️* 
║> ${VօxB໐t.prefix}image
║> ${VօxB໐t.prefix}unsplash
│║⦁ ${VօxB໐t.prefix}pinterest
│║⦁ ${VօxB໐t.prefix}wallpaper
┕╚═☰
╔══☰ *🔎${pfname.toUpperCase()}🔎* 
│║⦁ ${VօxB໐t.prefix}advice
│║⦁ ${VօxB໐t.prefix}anime
│║⦁ ${VօxB໐t.prefix}chordlist
│║⦁ ${VօxB໐t.prefix}fact
│║⦁ ${VօxB໐t.prefix}getchord
│║⦁ ${VօxB໐t.prefix}gify
│║⦁ ${VօxB໐t.prefix}google
│║⦁ ${VօxB໐t.prefix}instagram
│║⦁ ${VօxB໐t.prefix}joke
│║⦁ ${VօxB໐t.prefix}lyrics
│║⦁ ${VօxB໐t.prefix}manga
│║⦁ ${VօxB໐t.prefix}meme
│║⦁ ${VօxB໐t.prefix}pokedex
│║⦁ ${VօxB໐t.prefix}quote
│║⦁ ${VօxB໐t.prefix}reddit
│║⦁ ${VօxB໐t.prefix}ytsearch
┕╚═☰
╔══☰ *🍑${pfname.toUpperCase()}🍑* 
│║⦁ ${VօxB໐t.prefix}ass
│║⦁ ${VօxB໐t.prefix}bdsm
│║⦁ ${VօxB໐t.prefix}blowjob
│║⦁ ${VօxB໐t.prefix}cum
│║⦁ ${VօxB໐t.prefix}doujin
│║⦁ ${VօxB໐t.prefix}feet
│║⦁ ${VօxB໐t.prefix}femdom  
│║⦁ ${VօxB໐t.prefix}foxgirl  
│║⦁ ${VօxB໐t.prefix}glasses  
│║⦁ ${VօxB໐t.prefix}hentai
│║⦁ ${VօxB໐t.prefix}maid
│║⦁ ${VօxB໐t.prefix}masturbation
│║⦁ ${VօxB໐t.prefix}netorare
│║⦁ ${VօxB໐t.prefix}orgy
│║⦁ ${VօxB໐t.prefix}panties
│║⦁ ${VօxB໐t.prefix}pussy
│║⦁ ${VօxB໐t.prefix}school
│║⦁ ${VօxB໐t.prefix}succubus
│║⦁ ${VօxB໐t.prefix}tentacles
│║⦁ ${VօxB໐t.prefix}thighs
│║⦁ ${VօxB໐t.prefix}uglyBastard
│║⦁ ${VօxB໐t.prefix}uniform
│║⦁ ${VօxB໐t.prefix}yuri
│║⦁ ${VօxB໐t.prefix}zettaiRyouiki
┕╚═☰
╔══☰ *👅${pfname.toUpperCase()}👅* 
│║⦁ ${VօxB໐t.prefix}nsfw
│║⦁ ${VօxB໐t.prefix}nsfw2
│║⦁ ${VօxB໐t.prefix}bonermaterial
│║⦁ ${VօxB໐t.prefix}nsfw411
│║⦁ ${VօxB໐t.prefix}iwanttofuckher
│║⦁ ${VօxB໐t.prefix}exxxtras
│║⦁ ${VօxB໐t.prefix}distension
│║⦁ ${VօxB໐t.prefix}bimbofetish
│║⦁ ${VօxB໐t.prefix}christiangirls
│║⦁ ${VօxB໐t.prefix}dirtygaming
│║⦁ ${VօxB໐t.prefix}sexybutnotporn
│║⦁ ${VօxB໐t.prefix}femalepov
│║⦁ ${VօxB໐t.prefix}omgbeckylookathiscock
│║⦁ ${VօxB໐t.prefix}sexygirls
│║⦁ ${VօxB໐t.prefix}breedingmaterial
│║⦁ ${VօxB໐t.prefix}canthold
│║⦁ ${VօxB໐t.prefix}toocuteforporn
│║⦁ ${VօxB໐t.prefix}justhotwomen
│║⦁ ${VօxB໐t.prefix}stripgirls
│║⦁ ${VօxB໐t.prefix}hotstuffnsfw
│║⦁ ${VօxB໐t.prefix}uncommonposes
│║⦁ ${VօxB໐t.prefix}gifsofremoval
│║⦁ ${VօxB໐t.prefix}nostalgiafapping
│║⦁ ${VօxB໐t.prefix}truefmk
│║⦁ ${VօxB໐t.prefix}nudes
│║⦁ ${VօxB໐t.prefix}4k
│║⦁ ${VօxB໐t.prefix}realgirls
│║⦁ ${VօxB໐t.prefix}blowjobs
│║⦁ ${VօxB໐t.prefix}milf
│║⦁ ${VօxB໐t.prefix}milk
│║⦁ ${VօxB໐t.prefix}milking
│║⦁ ${VօxB໐t.prefix}lactating
│║⦁ ${VօxB໐t.prefix}pussy
│║⦁ ${VօxB໐t.prefix}cum
│║⦁ ${VօxB໐t.prefix}slut
│║⦁ ${VօxB໐t.prefix}cumslut
┕╚═☰
╔══☰ *🦄${pfname.toUpperCase()}🦄* 
│║⦁ ${VօxB໐t.prefix}waifu
│║⦁ ${VօxB໐t.prefix}swaifu
│║⦁ ${VօxB໐t.prefix}neko
│║⦁ ${VօxB໐t.prefix}sneko
│║⦁ ${VօxB໐t.prefix}shinobu
│║⦁ ${VօxB໐t.prefix}sshinobu
│║⦁ ${VօxB໐t.prefix}megumin
│║⦁ ${VօxB໐t.prefix}smegumin
│║⦁ ${VօxB໐t.prefix}awoo
│║⦁ ${VօxB໐t.prefix}sawoo
│║⦁ ${VօxB໐t.prefix}glomp
│║⦁ ${VօxB໐t.prefix}sglomp
│║⦁ ${VօxB໐t.prefix}handhold
│║⦁ ${VօxB໐t.prefix}shandhold
│║⦁
│║⦁ ${VօxB໐t.prefix}sbully
│║⦁ ${VօxB໐t.prefix}scuddle
│║⦁ ${VօxB໐t.prefix}scry
│║⦁ ${VօxB໐t.prefix}shug
│║⦁ ${VօxB໐t.prefix}skiss
│║⦁ ${VօxB໐t.prefix}slick
│║⦁ ${VօxB໐t.prefix}spat
│║⦁ ${VօxB໐t.prefix}ssmug
│║⦁ ${VօxB໐t.prefix}sbonk
│║⦁ ${VօxB໐t.prefix}syeet
│║⦁ ${VօxB໐t.prefix}sblush
│║⦁ ${VօxB໐t.prefix}ssmile
│║⦁ ${VօxB໐t.prefix}swave
│║⦁ ${VօxB໐t.prefix}shighfive
│║⦁ ${VօxB໐t.prefix}snom
│║⦁ ${VօxB໐t.prefix}sbite
│║⦁ ${VօxB໐t.prefix}sslap
│║⦁ ${VօxB໐t.prefix}skill
│║⦁ ${VօxB໐t.prefix}skick
│║⦁ ${VօxB໐t.prefix}shappy
│║⦁ ${VօxB໐t.prefix}swink
│║⦁ ${VօxB໐t.prefix}spoke
│║⦁ ${VօxB໐t.prefix}sdance
│║⦁ ${VօxB໐t.prefix}scringe
┕╚═☰
╔══☰ *⭕${pfname.toUpperCase()}⭕* 
│║⦁ ${VօxB໐t.prefix}ytpanning
│║⦁ ${VօxB໐t.prefix}ytbassboost
│║⦁ ${VօxB໐t.prefix}ytecho
│║⦁ ${VօxB໐t.prefix}ytflanger
│║⦁ ${VօxB໐t.prefix}ytnightcore
│║⦁ ${VօxB໐t.prefix}ytphaser
│║⦁ ${VօxB໐t.prefix}ytreverse
│║⦁ ${VօxB໐t.prefix}ytslow
│║⦁ ${VօxB໐t.prefix}ytspeed
│║⦁ ${VօxB໐t.prefix}ytsubboost
│║⦁ ${VօxB໐t.prefix}ytsuperslow
│║⦁ ${VօxB໐t.prefix}ytsuperspeed
│║⦁ ${VօxB໐t.prefix}ytsurround
│║⦁ ${VօxB໐t.prefix}ytvaporwave
│║⦁ ${VօxB໐t.prefix}ytvibrato
┕╚═════⋑`,
    VօxB໐t.logo
  );
};
