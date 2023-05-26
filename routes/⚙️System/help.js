// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = ѕуηтнiα.speed();
  latensie = ѕуηтнiα.speed() - timestampe;
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
    ѕуηтнiα.fs.readdirSync(dir).reduce((acc, file) => {
      const fileDir = `${dir}/${file}`;
      if (ѕуηтнiα.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (ѕуηтнiα.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await ѕуηтнiα.imgB(
    ѕуηтнiα,
    νℓкhat,
    `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
> ⒸSynthia: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔══☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${ѕуηтнiα.os.release()}
║⦁ *OS Type:*   ${ѕуηтнiα.os.type()}
║⦁ *Directory:*  ${ѕуηтнiα.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${ѕуηтнiα.os.platform()}
║⦁ *Free memory:* ${ѕуηтнiα.os.freemem()}
║⦁ *Total memory:* ${ѕуηтнiα.os.totalmem()}
║⦁ *Host device :* ${ѕуηтнiα.os.hostname()}
║⦁ *OS Version:* ${ѕуηтнiα.os.version()}
┕╚═☰
╔══☰ *❕ COMMANDS*
║⦁ 🐉 ${ѕуηтнiα.prefix}emotionslist
║⦁ 📢 ${ѕуηтнiα.prefix}audiofilterlist
║⦁ 📼 ${ѕуηтнiα.prefix}conversionlist
║⦁ 📥 ${ѕуηтнiα.prefix}downloadlist
║⦁ 💰 ${ѕуηтнiα.prefix}gameslist
║⦁ 🔰 ${ѕуηтнiα.prefix}grouplist
║⦁ 🍁 ${ѕуηтнiα.prefix}ownerlist
║⦁ 🖼️ ${ѕуηтнiα.prefix}photolist
║⦁ 🔎 ${ѕуηтнiα.prefix}searchlist
║⦁ ⭕ ${ѕуηтнiα.prefix}ytfilterlist
║⦁ 🦄 ${ѕуηтнiα.prefix}sfwlist
║⦁ 🍑 ${ѕуηтнiα.prefix}hentailist
║⦁ 👅 ${ѕуηтнiα.prefix}nsfwlist
╚══════⋑



┌╔══☰ *🍁${pfname.toUpperCase()}🍁*
│║⦁ ${ѕуηтнiα.prefix}ban
│║⦁ ${ѕуηтнiα.prefix}broadcast
│║⦁ ${ѕуηтнiα.prefix}join
│║⦁ ${ѕуηтнiα.prefix}leave
│║⦁ ${ѕуηтнiα.prefix}reboot
│║⦁ ${ѕуηтнiα.prefix}rules
│║⦁ ${ѕуηтнiα.prefix}unban
│║⦁ ${ѕуηтнiα.prefix}verify
┕╚═☰
╔══☰ *📢${pfname.toUpperCase()}📢*
│║⦁ ${ѕуηтнiα.prefix}panning
│║⦁ ${ѕуηтнiα.prefix}bassboost
│║⦁ ${ѕуηтнiα.prefix}echo
│║⦁ ${ѕуηтнiα.prefix}fast
│║⦁ ${ѕуηтнiα.prefix}flanger
│║⦁ ${ѕуηтнiα.prefix}nightcore
│║⦁ ${ѕуηтнiα.prefix}phaser
│║⦁ ${ѕуηтнiα.prefix}reverse
│║⦁ ${ѕуηтнiα.prefix}slow
│║⦁ ${ѕуηтнiα.prefix}speed
│║⦁ ${ѕуηтнiα.prefix}subboost
│║⦁ ${ѕуηтнiα.prefix}superslow
│║⦁ ${ѕуηтнiα.prefix}superspeed
│║⦁ ${ѕуηтнiα.prefix}surround
│║⦁ ${ѕуηтнiα.prefix}vaporwave
│║⦁ ${ѕуηтнiα.prefix}vibrato
┕╚═☰
╔══☰ *📼${pfname.toUpperCase()}📼*
│║⦁ ${ѕуηтнiα.prefix}carbon
│║⦁ ${ѕуηтнiα.prefix}ship
│║⦁ ${ѕуηтнiα.prefix}sticker
│║⦁ ${ѕуηтнiα.prefix}tinyurl
│║⦁ ${ѕуηтнiα.prefix}tourl
│║⦁ ${ѕуηтнiα.prefix}tts
┕╚═☰
╔══☰ *📥${pfname.toUpperCase()}📥* 
│║⦁ ${ѕуηтнiα.prefix}yta
│║⦁ ${ѕуηтнiα.prefix}play
│║⦁ ${ѕуηтнiα.prefix}song
│║⦁ ${ѕуηтнiα.prefix}sing
│║⦁ ${ѕуηтнiα.prefix}ytmp3
│║⦁ ${ѕуηтнiα.prefix}music
│║⦁ ${ѕуηтнiα.prefix}ytplay
│║⦁ ${ѕуηтнiα.prefix}ytaudio
│║⦁ ${ѕуηтнiα.prefix}ytmusic
│║⦁ ${ѕуηтнiα.prefix}youtubemusic
│║⦁ 
│║⦁ ${ѕуηтнiα.prefix}ytv
│║⦁ ${ѕуηтнiα.prefix}watch
│║⦁ ${ѕуηтнiα.prefix}stream
│║⦁ ${ѕуηтнiα.prefix}ytmp4
│║⦁ ${ѕуηтнiα.prefix}video
│║⦁ ${ѕуηтнiα.prefix}ytwatch
│║⦁ ${ѕуηтнiα.prefix}ytvideo
│║⦁ ${ѕуηтнiα.prefix}youtubevideo
┕╚═☰
╔══☰ *🐉${pfname.toUpperCase()}🐉* 
│║⦁ ${ѕуηтнiα.prefix}bite
│║⦁ ${ѕуηтнiα.prefix}blush
│║⦁ ${ѕуηтнiα.prefix}bonk
│║⦁ ${ѕуηтнiα.prefix}bored
│║⦁ ${ѕуηтнiα.prefix}confused
│║⦁ ${ѕуηтнiα.prefix}cry
│║⦁ ${ѕуηтнiα.prefix}cuddle
│║⦁ ${ѕуηтнiα.prefix}dance
│║⦁ ${ѕуηтнiα.prefix}goodnight
│║⦁ ${ѕуηтнiα.prefix}happy
│║⦁ ${ѕуηтнiα.prefix}highfive
│║⦁ ${ѕуηтнiα.prefix}hug
│║⦁ ${ѕуηтнiα.prefix}kill
│║⦁ ${ѕуηтнiα.prefix}kiss
│║⦁ ${ѕуηтнiα.prefix}nervous
│║⦁ ${ѕуηтнiα.prefix}pat
│║⦁ ${ѕуηтнiα.prefix}poke
│║⦁ ${ѕуηтнiα.prefix}punch
│║⦁ ${ѕуηтнiα.prefix}sad
│║⦁ ${ѕуηтнiα.prefix}scream
│║⦁ ${ѕуηтнiα.prefix}slap
│║⦁ ${ѕуηтнiα.prefix}smile
│║⦁ ${ѕуηтнiα.prefix}stare
│║⦁ ${ѕуηтнiα.prefix}wave
│║⦁ ${ѕуηтнiα.prefix}wink
│║⦁ ${ѕуηтнiα.prefix}yeet
│║⦁ ${ѕуηтнiα.prefix}yes
┕╚═☰
╔══☰ *💰${pfname.toUpperCase()}💰* 
│║⦁ ${ѕуηтнiα.prefix}balance
│║⦁ ${ѕуηтнiα.prefix}buy
│║⦁ ${ѕуηтнiα.prefix}daily
│║⦁ ${ѕуηтнiα.prefix}fish
│║⦁ ${ѕуηтнiα.prefix}gamble
│║⦁ ${ѕуηтнiα.prefix}inv
│║⦁ ${ѕуηтнiα.prefix}pay
│║⦁ ${ѕуηтнiα.prefix}rob
│║⦁ ${ѕуηтнiα.prefix}store
│║⦁ ${ѕуηтнiα.prefix}work
│║⦁ ${ѕуηтнiα.prefix}zoo
┕╚═☰
╔══☰ *🔰${pfname.toUpperCase()}🔰* 
│║⦁ ${ѕуηтнiα.prefix}antilink
│║⦁ ${ѕуηтнiα.prefix}antinsfw
│║⦁ ${ѕуηтнiα.prefix}delete
│║⦁ ${ѕуηтнiα.prefix}group
│║⦁ ${ѕуηтнiα.prefix}kick
│║⦁ ${ѕуηтнiα.prefix}promote
│║⦁ ${ѕуηтнiα.prefix}setdesc
│║⦁ ${ѕуηтнiα.prefix}seticon
│║⦁ ${ѕуηтнiα.prefix}tagall
┕╚═☰
╔══☰ *🖼️${pfname.toUpperCase()}🖼️* 
║> ${ѕуηтнiα.prefix}image
║> ${ѕуηтнiα.prefix}unsplash
│║⦁ ${ѕуηтнiα.prefix}pinterest
│║⦁ ${ѕуηтнiα.prefix}wallpaper
┕╚═☰
╔══☰ *🔎${pfname.toUpperCase()}🔎* 
│║⦁ ${ѕуηтнiα.prefix}advice
│║⦁ ${ѕуηтнiα.prefix}anime
│║⦁ ${ѕуηтнiα.prefix}chordlist
│║⦁ ${ѕуηтнiα.prefix}fact
│║⦁ ${ѕуηтнiα.prefix}getchord
│║⦁ ${ѕуηтнiα.prefix}gify
│║⦁ ${ѕуηтнiα.prefix}google
│║⦁ ${ѕуηтнiα.prefix}instagram
│║⦁ ${ѕуηтнiα.prefix}joke
│║⦁ ${ѕуηтнiα.prefix}lyrics
│║⦁ ${ѕуηтнiα.prefix}manga
│║⦁ ${ѕуηтнiα.prefix}meme
│║⦁ ${ѕуηтнiα.prefix}pokedex
│║⦁ ${ѕуηтнiα.prefix}quote
│║⦁ ${ѕуηтнiα.prefix}reddit
│║⦁ ${ѕуηтнiα.prefix}ytsearch
┕╚═☰
╔══☰ *🍑${pfname.toUpperCase()}🍑* 
│║⦁ ${ѕуηтнiα.prefix}ass
│║⦁ ${ѕуηтнiα.prefix}bdsm
│║⦁ ${ѕуηтнiα.prefix}blowjob
│║⦁ ${ѕуηтнiα.prefix}cum
│║⦁ ${ѕуηтнiα.prefix}doujin
│║⦁ ${ѕуηтнiα.prefix}feet
│║⦁ ${ѕуηтнiα.prefix}femdom  
│║⦁ ${ѕуηтнiα.prefix}foxgirl  
│║⦁ ${ѕуηтнiα.prefix}glasses  
│║⦁ ${ѕуηтнiα.prefix}hentai
│║⦁ ${ѕуηтнiα.prefix}maid
│║⦁ ${ѕуηтнiα.prefix}masturbation
│║⦁ ${ѕуηтнiα.prefix}netorare
│║⦁ ${ѕуηтнiα.prefix}orgy
│║⦁ ${ѕуηтнiα.prefix}panties
│║⦁ ${ѕуηтнiα.prefix}pussy
│║⦁ ${ѕуηтнiα.prefix}school
│║⦁ ${ѕуηтнiα.prefix}succubus
│║⦁ ${ѕуηтнiα.prefix}tentacles
│║⦁ ${ѕуηтнiα.prefix}thighs
│║⦁ ${ѕуηтнiα.prefix}uglyBastard
│║⦁ ${ѕуηтнiα.prefix}uniform
│║⦁ ${ѕуηтнiα.prefix}yuri
│║⦁ ${ѕуηтнiα.prefix}zettaiRyouiki
┕╚═☰
╔══☰ *👅${pfname.toUpperCase()}👅* 
│║⦁ ${ѕуηтнiα.prefix}nsfw
│║⦁ ${ѕуηтнiα.prefix}nsfw2
│║⦁ ${ѕуηтнiα.prefix}bonermaterial
│║⦁ ${ѕуηтнiα.prefix}nsfw411
│║⦁ ${ѕуηтнiα.prefix}iwanttofuckher
│║⦁ ${ѕуηтнiα.prefix}exxxtras
│║⦁ ${ѕуηтнiα.prefix}distension
│║⦁ ${ѕуηтнiα.prefix}bimbofetish
│║⦁ ${ѕуηтнiα.prefix}christiangirls
│║⦁ ${ѕуηтнiα.prefix}dirtygaming
│║⦁ ${ѕуηтнiα.prefix}sexybutnotporn
│║⦁ ${ѕуηтнiα.prefix}femalepov
│║⦁ ${ѕуηтнiα.prefix}omgbeckylookathiscock
│║⦁ ${ѕуηтнiα.prefix}sexygirls
│║⦁ ${ѕуηтнiα.prefix}breedingmaterial
│║⦁ ${ѕуηтнiα.prefix}canthold
│║⦁ ${ѕуηтнiα.prefix}toocuteforporn
│║⦁ ${ѕуηтнiα.prefix}justhotwomen
│║⦁ ${ѕуηтнiα.prefix}stripgirls
│║⦁ ${ѕуηтнiα.prefix}hotstuffnsfw
│║⦁ ${ѕуηтнiα.prefix}uncommonposes
│║⦁ ${ѕуηтнiα.prefix}gifsofremoval
│║⦁ ${ѕуηтнiα.prefix}nostalgiafapping
│║⦁ ${ѕуηтнiα.prefix}truefmk
│║⦁ ${ѕуηтнiα.prefix}nudes
│║⦁ ${ѕуηтнiα.prefix}4k
│║⦁ ${ѕуηтнiα.prefix}realgirls
│║⦁ ${ѕуηтнiα.prefix}blowjobs
│║⦁ ${ѕуηтнiα.prefix}milf
│║⦁ ${ѕуηтнiα.prefix}milk
│║⦁ ${ѕуηтнiα.prefix}milking
│║⦁ ${ѕуηтнiα.prefix}lactating
│║⦁ ${ѕуηтнiα.prefix}pussy
│║⦁ ${ѕуηтнiα.prefix}cum
│║⦁ ${ѕуηтнiα.prefix}slut
│║⦁ ${ѕуηтнiα.prefix}cumslut
┕╚═☰
╔══☰ *🦄${pfname.toUpperCase()}🦄* 
│║⦁ ${ѕуηтнiα.prefix}waifu
│║⦁ ${ѕуηтнiα.prefix}swaifu
│║⦁ ${ѕуηтнiα.prefix}neko
│║⦁ ${ѕуηтнiα.prefix}sneko
│║⦁ ${ѕуηтнiα.prefix}shinobu
│║⦁ ${ѕуηтнiα.prefix}sshinobu
│║⦁ ${ѕуηтнiα.prefix}megumin
│║⦁ ${ѕуηтнiα.prefix}smegumin
│║⦁ ${ѕуηтнiα.prefix}awoo
│║⦁ ${ѕуηтнiα.prefix}sawoo
│║⦁ ${ѕуηтнiα.prefix}glomp
│║⦁ ${ѕуηтнiα.prefix}sglomp
│║⦁ ${ѕуηтнiα.prefix}handhold
│║⦁ ${ѕуηтнiα.prefix}shandhold
│║⦁
│║⦁ ${ѕуηтнiα.prefix}sbully
│║⦁ ${ѕуηтнiα.prefix}scuddle
│║⦁ ${ѕуηтнiα.prefix}scry
│║⦁ ${ѕуηтнiα.prefix}shug
│║⦁ ${ѕуηтнiα.prefix}skiss
│║⦁ ${ѕуηтнiα.prefix}slick
│║⦁ ${ѕуηтнiα.prefix}spat
│║⦁ ${ѕуηтнiα.prefix}ssmug
│║⦁ ${ѕуηтнiα.prefix}sbonk
│║⦁ ${ѕуηтнiα.prefix}syeet
│║⦁ ${ѕуηтнiα.prefix}sblush
│║⦁ ${ѕуηтнiα.prefix}ssmile
│║⦁ ${ѕуηтнiα.prefix}swave
│║⦁ ${ѕуηтнiα.prefix}shighfive
│║⦁ ${ѕуηтнiα.prefix}snom
│║⦁ ${ѕуηтнiα.prefix}sbite
│║⦁ ${ѕуηтнiα.prefix}sslap
│║⦁ ${ѕуηтнiα.prefix}skill
│║⦁ ${ѕуηтнiα.prefix}skick
│║⦁ ${ѕуηтнiα.prefix}shappy
│║⦁ ${ѕуηтнiα.prefix}swink
│║⦁ ${ѕуηтнiα.prefix}spoke
│║⦁ ${ѕуηтнiα.prefix}sdance
│║⦁ ${ѕуηтнiα.prefix}scringe
┕╚═☰
╔══☰ *⭕${pfname.toUpperCase()}⭕* 
│║⦁ ${ѕуηтнiα.prefix}ytpanning
│║⦁ ${ѕуηтнiα.prefix}ytbassboost
│║⦁ ${ѕуηтнiα.prefix}ytecho
│║⦁ ${ѕуηтнiα.prefix}ytflanger
│║⦁ ${ѕуηтнiα.prefix}ytnightcore
│║⦁ ${ѕуηтнiα.prefix}ytphaser
│║⦁ ${ѕуηтнiα.prefix}ytreverse
│║⦁ ${ѕуηтнiα.prefix}ytslow
│║⦁ ${ѕуηтнiα.prefix}ytspeed
│║⦁ ${ѕуηтнiα.prefix}ytsubboost
│║⦁ ${ѕуηтнiα.prefix}ytsuperslow
│║⦁ ${ѕуηтнiα.prefix}ytsuperspeed
│║⦁ ${ѕуηтнiα.prefix}ytsurround
│║⦁ ${ѕуηтнiα.prefix}ytvaporwave
│║⦁ ${ѕуηтнiα.prefix}ytvibrato
┕╚═════⋑`,
    ѕуηтнiα.logo
  );
};
