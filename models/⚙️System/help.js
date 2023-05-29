//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (FoxBot, Foxchat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = FoxBot.speed();
  latensie = FoxBot.speed() - timestampe;
  var runtime = function (seconds) {
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
  var countFiles = (dir) =>
    FoxBot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (FoxBot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (FoxBot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await FoxBot.imagebutton(
    FoxBot,
    Foxchat,
    `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
> ⒸFoxBot: is a Foxapp userBot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./models")}


┌╔═☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${FoxBot.os.release()}
║⦁ *OS Type:*   ${FoxBot.os.type()}
║⦁ *Directory:*  ${FoxBot.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${FoxBot.os.platform()}
║⦁ *Free memory:* ${FoxBot.os.freemem()}
║⦁ *Total memory:* ${FoxBot.os.totalmem()}
║⦁ *Host device :* ${FoxBot.os.hostname()}
║⦁ *OS Version:* ${FoxBot.os.version()}
┕╚═☰
┌╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${FoxBot.prefix}emotionslist
║⦁ 📢 ${FoxBot.prefix}audiofilterlist
║⦁ 📼 ${FoxBot.prefix}conversionlist
║⦁ 📥 ${FoxBot.prefix}downloadlist
║⦁ 💰 ${FoxBot.prefix}gameslist
║⦁ 🔰 ${FoxBot.prefix}grouplist
║⦁ 🍁 ${FoxBot.prefix}ownerlist
║⦁ 🖼️ ${FoxBot.prefix}photolist
║⦁ 🔎 ${FoxBot.prefix}searchlist
║⦁ ⭕ ${FoxBot.prefix}ytfilterlist
║⦁ 🦄 ${FoxBot.prefix}sfwlist
║⦁ 🍑 ${FoxBot.prefix}hentailist
║⦁ 👅 ${FoxBot.prefix}nsfwlist
╚══════⋑



┌┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${FoxBot.prefix}ban
│║⦁ ${FoxBot.prefix}broadcast
│║⦁ ${FoxBot.prefix}join
│║⦁ ${FoxBot.prefix}leave
│║⦁ ${FoxBot.prefix}reboot
│║⦁ ${FoxBot.prefix}rules
│║⦁ ${FoxBot.prefix}unban
│║⦁ ${FoxBot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${FoxBot.prefix}panning
│║⦁ ${FoxBot.prefix}bassboost
│║⦁ ${FoxBot.prefix}echo
│║⦁ ${FoxBot.prefix}fast
│║⦁ ${FoxBot.prefix}flanger
│║⦁ ${FoxBot.prefix}nightcore
│║⦁ ${FoxBot.prefix}phaser
│║⦁ ${FoxBot.prefix}reverse
│║⦁ ${FoxBot.prefix}slow
│║⦁ ${FoxBot.prefix}speed
│║⦁ ${FoxBot.prefix}subboost
│║⦁ ${FoxBot.prefix}superslow
│║⦁ ${FoxBot.prefix}superspeed
│║⦁ ${FoxBot.prefix}surround
│║⦁ ${FoxBot.prefix}vaporwave
│║⦁ ${FoxBot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${FoxBot.prefix}carbon
│║⦁ ${FoxBot.prefix}ship
│║⦁ ${FoxBot.prefix}sticker
│║⦁ ${FoxBot.prefix}tinyurl
│║⦁ ${FoxBot.prefix}tourl
│║⦁ ${FoxBot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${FoxBot.prefix}yta
│║⦁ ${FoxBot.prefix}play
│║⦁ ${FoxBot.prefix}song
│║⦁ ${FoxBot.prefix}sing
│║⦁ ${FoxBot.prefix}ytmp3
│║⦁ ${FoxBot.prefix}music
│║⦁ ${FoxBot.prefix}ytplay
│║⦁ ${FoxBot.prefix}ytaudio
│║⦁ ${FoxBot.prefix}ytmusic
│║⦁ ${FoxBot.prefix}youtubemusic
│║⦁ 
│║⦁ ${FoxBot.prefix}ytv
│║⦁ ${FoxBot.prefix}watch
│║⦁ ${FoxBot.prefix}stream
│║⦁ ${FoxBot.prefix}ytmp4
│║⦁ ${FoxBot.prefix}video
│║⦁ ${FoxBot.prefix}ytwatch
│║⦁ ${FoxBot.prefix}ytvideo
│║⦁ ${FoxBot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${FoxBot.prefix}bite
│║⦁ ${FoxBot.prefix}blush
│║⦁ ${FoxBot.prefix}bonk
│║⦁ ${FoxBot.prefix}bored
│║⦁ ${FoxBot.prefix}confused
│║⦁ ${FoxBot.prefix}cry
│║⦁ ${FoxBot.prefix}cuddle
│║⦁ ${FoxBot.prefix}dance
│║⦁ ${FoxBot.prefix}goodnight
│║⦁ ${FoxBot.prefix}happy
│║⦁ ${FoxBot.prefix}highfive
│║⦁ ${FoxBot.prefix}hug
│║⦁ ${FoxBot.prefix}kill
│║⦁ ${FoxBot.prefix}kiss
│║⦁ ${FoxBot.prefix}nervous
│║⦁ ${FoxBot.prefix}pat
│║⦁ ${FoxBot.prefix}poke
│║⦁ ${FoxBot.prefix}punch
│║⦁ ${FoxBot.prefix}sad
│║⦁ ${FoxBot.prefix}scream
│║⦁ ${FoxBot.prefix}slap
│║⦁ ${FoxBot.prefix}smile
│║⦁ ${FoxBot.prefix}stare
│║⦁ ${FoxBot.prefix}wave
│║⦁ ${FoxBot.prefix}wink
│║⦁ ${FoxBot.prefix}yeet
│║⦁ ${FoxBot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${FoxBot.prefix}balance
│║⦁ ${FoxBot.prefix}buy
│║⦁ ${FoxBot.prefix}daily
│║⦁ ${FoxBot.prefix}fish
│║⦁ ${FoxBot.prefix}gamble
│║⦁ ${FoxBot.prefix}inv
│║⦁ ${FoxBot.prefix}pay
│║⦁ ${FoxBot.prefix}rob
│║⦁ ${FoxBot.prefix}store
│║⦁ ${FoxBot.prefix}work
│║⦁ ${FoxBot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${FoxBot.prefix}antilink
│║⦁ ${FoxBot.prefix}antinsfw
│║⦁ ${FoxBot.prefix}delete
│║⦁ ${FoxBot.prefix}group
│║⦁ ${FoxBot.prefix}kick
│║⦁ ${FoxBot.prefix}promote
│║⦁ ${FoxBot.prefix}setdesc
│║⦁ ${FoxBot.prefix}seticon
│║⦁ ${FoxBot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
║> ${FoxBot.prefix}image
║> ${FoxBot.prefix}unsplash
│║⦁ ${FoxBot.prefix}pinterest
│║⦁ ${FoxBot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${FoxBot.prefix}advice
│║⦁ ${FoxBot.prefix}anime
│║⦁ ${FoxBot.prefix}chordlist
│║⦁ ${FoxBot.prefix}fact
│║⦁ ${FoxBot.prefix}getchord
│║⦁ ${FoxBot.prefix}gify
│║⦁ ${FoxBot.prefix}google
│║⦁ ${FoxBot.prefix}instagram
│║⦁ ${FoxBot.prefix}joke
│║⦁ ${FoxBot.prefix}lyrics
│║⦁ ${FoxBot.prefix}manga
│║⦁ ${FoxBot.prefix}meme
│║⦁ ${FoxBot.prefix}pokedex
│║⦁ ${FoxBot.prefix}quote
│║⦁ ${FoxBot.prefix}reddit
│║⦁ ${FoxBot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${FoxBot.prefix}ass
│║⦁ ${FoxBot.prefix}bdsm
│║⦁ ${FoxBot.prefix}blowjob
│║⦁ ${FoxBot.prefix}cum
│║⦁ ${FoxBot.prefix}doujin
│║⦁ ${FoxBot.prefix}feet
│║⦁ ${FoxBot.prefix}femdom  
│║⦁ ${FoxBot.prefix}foxgirl  
│║⦁ ${FoxBot.prefix}glasses  
│║⦁ ${FoxBot.prefix}hentai
│║⦁ ${FoxBot.prefix}maid
│║⦁ ${FoxBot.prefix}masturbation
│║⦁ ${FoxBot.prefix}netorare
│║⦁ ${FoxBot.prefix}orgy
│║⦁ ${FoxBot.prefix}panties
│║⦁ ${FoxBot.prefix}pussy
│║⦁ ${FoxBot.prefix}school
│║⦁ ${FoxBot.prefix}succubus
│║⦁ ${FoxBot.prefix}tentacles
│║⦁ ${FoxBot.prefix}thighs
│║⦁ ${FoxBot.prefix}uglyBastard
│║⦁ ${FoxBot.prefix}uniform
│║⦁ ${FoxBot.prefix}yuri
│║⦁ ${FoxBot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${FoxBot.prefix}nsfw
│║⦁ ${FoxBot.prefix}nsfw2
│║⦁ ${FoxBot.prefix}bonermaterial
│║⦁ ${FoxBot.prefix}nsfw411
│║⦁ ${FoxBot.prefix}iwanttofuckher
│║⦁ ${FoxBot.prefix}exxxtras
│║⦁ ${FoxBot.prefix}distension
│║⦁ ${FoxBot.prefix}bimbofetish
│║⦁ ${FoxBot.prefix}christiangirls
│║⦁ ${FoxBot.prefix}dirtygaming
│║⦁ ${FoxBot.prefix}sexybutnotporn
│║⦁ ${FoxBot.prefix}femalepov
│║⦁ ${FoxBot.prefix}omgbeckylookathiscock
│║⦁ ${FoxBot.prefix}sexygirls
│║⦁ ${FoxBot.prefix}breedingmaterial
│║⦁ ${FoxBot.prefix}canthold
│║⦁ ${FoxBot.prefix}toocuteforporn
│║⦁ ${FoxBot.prefix}justhotwomen
│║⦁ ${FoxBot.prefix}stripgirls
│║⦁ ${FoxBot.prefix}hotstuffnsfw
│║⦁ ${FoxBot.prefix}uncommonposes
│║⦁ ${FoxBot.prefix}gifsofremoval
│║⦁ ${FoxBot.prefix}nostalgiafapping
│║⦁ ${FoxBot.prefix}truefmk
│║⦁ ${FoxBot.prefix}nudes
│║⦁ ${FoxBot.prefix}4k
│║⦁ ${FoxBot.prefix}realgirls
│║⦁ ${FoxBot.prefix}blowjobs
│║⦁ ${FoxBot.prefix}milf
│║⦁ ${FoxBot.prefix}milk
│║⦁ ${FoxBot.prefix}milking
│║⦁ ${FoxBot.prefix}lactating
│║⦁ ${FoxBot.prefix}pussy
│║⦁ ${FoxBot.prefix}cum
│║⦁ ${FoxBot.prefix}slut
│║⦁ ${FoxBot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${FoxBot.prefix}waifu
│║⦁ ${FoxBot.prefix}swaifu
│║⦁ ${FoxBot.prefix}neko
│║⦁ ${FoxBot.prefix}sneko
│║⦁ ${FoxBot.prefix}shinobu
│║⦁ ${FoxBot.prefix}sshinobu
│║⦁ ${FoxBot.prefix}megumin
│║⦁ ${FoxBot.prefix}smegumin
│║⦁ ${FoxBot.prefix}awoo
│║⦁ ${FoxBot.prefix}sawoo
│║⦁ ${FoxBot.prefix}glomp
│║⦁ ${FoxBot.prefix}sglomp
│║⦁ ${FoxBot.prefix}handhold
│║⦁ ${FoxBot.prefix}shandhold
│║⦁
│║⦁ ${FoxBot.prefix}sbully
│║⦁ ${FoxBot.prefix}scuddle
│║⦁ ${FoxBot.prefix}scry
│║⦁ ${FoxBot.prefix}shug
│║⦁ ${FoxBot.prefix}skiss
│║⦁ ${FoxBot.prefix}slick
│║⦁ ${FoxBot.prefix}spat
│║⦁ ${FoxBot.prefix}ssmug
│║⦁ ${FoxBot.prefix}sbonk
│║⦁ ${FoxBot.prefix}syeet
│║⦁ ${FoxBot.prefix}sblush
│║⦁ ${FoxBot.prefix}ssmile
│║⦁ ${FoxBot.prefix}swave
│║⦁ ${FoxBot.prefix}shighfive
│║⦁ ${FoxBot.prefix}snom
│║⦁ ${FoxBot.prefix}sbite
│║⦁ ${FoxBot.prefix}sslap
│║⦁ ${FoxBot.prefix}skill
│║⦁ ${FoxBot.prefix}skick
│║⦁ ${FoxBot.prefix}shappy
│║⦁ ${FoxBot.prefix}swink
│║⦁ ${FoxBot.prefix}spoke
│║⦁ ${FoxBot.prefix}sdance
│║⦁ ${FoxBot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${FoxBot.prefix}ytpanning
│║⦁ ${FoxBot.prefix}ytbassboost
│║⦁ ${FoxBot.prefix}ytecho
│║⦁ ${FoxBot.prefix}ytflanger
│║⦁ ${FoxBot.prefix}ytnightcore
│║⦁ ${FoxBot.prefix}ytphaser
│║⦁ ${FoxBot.prefix}ytreverse
│║⦁ ${FoxBot.prefix}ytslow
│║⦁ ${FoxBot.prefix}ytspeed
│║⦁ ${FoxBot.prefix}ytsubboost
│║⦁ ${FoxBot.prefix}ytsuperslow
│║⦁ ${FoxBot.prefix}ytsuperspeed
│║⦁ ${FoxBot.prefix}ytsurround
│║⦁ ${FoxBot.prefix}ytvaporwave
│║⦁ ${FoxBot.prefix}ytvibrato
┕╚═════⋑`,
    "./public//FoxBot.png"
  );
};
