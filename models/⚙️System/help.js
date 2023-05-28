//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (WhatsBot, voxchat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = WhatsBot.speed();
  latensie = WhatsBot.speed() - timestampe;
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
    WhatsBot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (WhatsBot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (WhatsBot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);

  var LOGOS = [
    "WhatsBot(1).png",
    "WhatsBot(2).png",
    "WhatsBot(3).png",
    "WhatsBot(4).png",
    "WhatsBot(5).png",
  ];
  var i = Math.floor(Math.random() * LOGOS.length);

  return await WhatsBot.imagebutton(
    WhatsBot,
    voxchat,
    `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
> ⒸWhatsBot: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./models")}


┌╔═☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${WhatsBot.os.release()}
║⦁ *OS Type:*   ${WhatsBot.os.type()}
║⦁ *Directory:*  ${WhatsBot.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${WhatsBot.os.platform()}
║⦁ *Free memory:* ${WhatsBot.os.freemem()}
║⦁ *Total memory:* ${WhatsBot.os.totalmem()}
║⦁ *Host device :* ${WhatsBot.os.hostname()}
║⦁ *OS Version:* ${WhatsBot.os.version()}
┕╚═☰
┌╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${WhatsBot.prefix}emotionslist
║⦁ 📢 ${WhatsBot.prefix}audiofilterlist
║⦁ 📼 ${WhatsBot.prefix}conversionlist
║⦁ 📥 ${WhatsBot.prefix}downloadlist
║⦁ 💰 ${WhatsBot.prefix}gameslist
║⦁ 🔰 ${WhatsBot.prefix}grouplist
║⦁ 🍁 ${WhatsBot.prefix}ownerlist
║⦁ 🖼️ ${WhatsBot.prefix}photolist
║⦁ 🔎 ${WhatsBot.prefix}searchlist
║⦁ ⭕ ${WhatsBot.prefix}ytfilterlist
║⦁ 🦄 ${WhatsBot.prefix}sfwlist
║⦁ 🍑 ${WhatsBot.prefix}hentailist
║⦁ 👅 ${WhatsBot.prefix}nsfwlist
╚══════⋑



┌┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${WhatsBot.prefix}ban
│║⦁ ${WhatsBot.prefix}broadcast
│║⦁ ${WhatsBot.prefix}join
│║⦁ ${WhatsBot.prefix}leave
│║⦁ ${WhatsBot.prefix}reboot
│║⦁ ${WhatsBot.prefix}rules
│║⦁ ${WhatsBot.prefix}unban
│║⦁ ${WhatsBot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${WhatsBot.prefix}panning
│║⦁ ${WhatsBot.prefix}bassboost
│║⦁ ${WhatsBot.prefix}echo
│║⦁ ${WhatsBot.prefix}fast
│║⦁ ${WhatsBot.prefix}flanger
│║⦁ ${WhatsBot.prefix}nightcore
│║⦁ ${WhatsBot.prefix}phaser
│║⦁ ${WhatsBot.prefix}reverse
│║⦁ ${WhatsBot.prefix}slow
│║⦁ ${WhatsBot.prefix}speed
│║⦁ ${WhatsBot.prefix}subboost
│║⦁ ${WhatsBot.prefix}superslow
│║⦁ ${WhatsBot.prefix}superspeed
│║⦁ ${WhatsBot.prefix}surround
│║⦁ ${WhatsBot.prefix}vaporwave
│║⦁ ${WhatsBot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${WhatsBot.prefix}carbon
│║⦁ ${WhatsBot.prefix}ship
│║⦁ ${WhatsBot.prefix}sticker
│║⦁ ${WhatsBot.prefix}tinyurl
│║⦁ ${WhatsBot.prefix}tourl
│║⦁ ${WhatsBot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${WhatsBot.prefix}yta
│║⦁ ${WhatsBot.prefix}play
│║⦁ ${WhatsBot.prefix}song
│║⦁ ${WhatsBot.prefix}sing
│║⦁ ${WhatsBot.prefix}ytmp3
│║⦁ ${WhatsBot.prefix}music
│║⦁ ${WhatsBot.prefix}ytplay
│║⦁ ${WhatsBot.prefix}ytaudio
│║⦁ ${WhatsBot.prefix}ytmusic
│║⦁ ${WhatsBot.prefix}youtubemusic
│║⦁ 
│║⦁ ${WhatsBot.prefix}ytv
│║⦁ ${WhatsBot.prefix}watch
│║⦁ ${WhatsBot.prefix}stream
│║⦁ ${WhatsBot.prefix}ytmp4
│║⦁ ${WhatsBot.prefix}video
│║⦁ ${WhatsBot.prefix}ytwatch
│║⦁ ${WhatsBot.prefix}ytvideo
│║⦁ ${WhatsBot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${WhatsBot.prefix}bite
│║⦁ ${WhatsBot.prefix}blush
│║⦁ ${WhatsBot.prefix}bonk
│║⦁ ${WhatsBot.prefix}bored
│║⦁ ${WhatsBot.prefix}confused
│║⦁ ${WhatsBot.prefix}cry
│║⦁ ${WhatsBot.prefix}cuddle
│║⦁ ${WhatsBot.prefix}dance
│║⦁ ${WhatsBot.prefix}goodnight
│║⦁ ${WhatsBot.prefix}happy
│║⦁ ${WhatsBot.prefix}highfive
│║⦁ ${WhatsBot.prefix}hug
│║⦁ ${WhatsBot.prefix}kill
│║⦁ ${WhatsBot.prefix}kiss
│║⦁ ${WhatsBot.prefix}nervous
│║⦁ ${WhatsBot.prefix}pat
│║⦁ ${WhatsBot.prefix}poke
│║⦁ ${WhatsBot.prefix}punch
│║⦁ ${WhatsBot.prefix}sad
│║⦁ ${WhatsBot.prefix}scream
│║⦁ ${WhatsBot.prefix}slap
│║⦁ ${WhatsBot.prefix}smile
│║⦁ ${WhatsBot.prefix}stare
│║⦁ ${WhatsBot.prefix}wave
│║⦁ ${WhatsBot.prefix}wink
│║⦁ ${WhatsBot.prefix}yeet
│║⦁ ${WhatsBot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${WhatsBot.prefix}balance
│║⦁ ${WhatsBot.prefix}buy
│║⦁ ${WhatsBot.prefix}daily
│║⦁ ${WhatsBot.prefix}fish
│║⦁ ${WhatsBot.prefix}gamble
│║⦁ ${WhatsBot.prefix}inv
│║⦁ ${WhatsBot.prefix}pay
│║⦁ ${WhatsBot.prefix}rob
│║⦁ ${WhatsBot.prefix}store
│║⦁ ${WhatsBot.prefix}work
│║⦁ ${WhatsBot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${WhatsBot.prefix}antilink
│║⦁ ${WhatsBot.prefix}antinsfw
│║⦁ ${WhatsBot.prefix}delete
│║⦁ ${WhatsBot.prefix}group
│║⦁ ${WhatsBot.prefix}kick
│║⦁ ${WhatsBot.prefix}promote
│║⦁ ${WhatsBot.prefix}setdesc
│║⦁ ${WhatsBot.prefix}seticon
│║⦁ ${WhatsBot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
║> ${WhatsBot.prefix}image
║> ${WhatsBot.prefix}unsplash
│║⦁ ${WhatsBot.prefix}pinterest
│║⦁ ${WhatsBot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${WhatsBot.prefix}advice
│║⦁ ${WhatsBot.prefix}anime
│║⦁ ${WhatsBot.prefix}chordlist
│║⦁ ${WhatsBot.prefix}fact
│║⦁ ${WhatsBot.prefix}getchord
│║⦁ ${WhatsBot.prefix}gify
│║⦁ ${WhatsBot.prefix}google
│║⦁ ${WhatsBot.prefix}instagram
│║⦁ ${WhatsBot.prefix}joke
│║⦁ ${WhatsBot.prefix}lyrics
│║⦁ ${WhatsBot.prefix}manga
│║⦁ ${WhatsBot.prefix}meme
│║⦁ ${WhatsBot.prefix}pokedex
│║⦁ ${WhatsBot.prefix}quote
│║⦁ ${WhatsBot.prefix}reddit
│║⦁ ${WhatsBot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${WhatsBot.prefix}ass
│║⦁ ${WhatsBot.prefix}bdsm
│║⦁ ${WhatsBot.prefix}blowjob
│║⦁ ${WhatsBot.prefix}cum
│║⦁ ${WhatsBot.prefix}doujin
│║⦁ ${WhatsBot.prefix}feet
│║⦁ ${WhatsBot.prefix}femdom  
│║⦁ ${WhatsBot.prefix}foxgirl  
│║⦁ ${WhatsBot.prefix}glasses  
│║⦁ ${WhatsBot.prefix}hentai
│║⦁ ${WhatsBot.prefix}maid
│║⦁ ${WhatsBot.prefix}masturbation
│║⦁ ${WhatsBot.prefix}netorare
│║⦁ ${WhatsBot.prefix}orgy
│║⦁ ${WhatsBot.prefix}panties
│║⦁ ${WhatsBot.prefix}pussy
│║⦁ ${WhatsBot.prefix}school
│║⦁ ${WhatsBot.prefix}succubus
│║⦁ ${WhatsBot.prefix}tentacles
│║⦁ ${WhatsBot.prefix}thighs
│║⦁ ${WhatsBot.prefix}uglyBastard
│║⦁ ${WhatsBot.prefix}uniform
│║⦁ ${WhatsBot.prefix}yuri
│║⦁ ${WhatsBot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${WhatsBot.prefix}nsfw
│║⦁ ${WhatsBot.prefix}nsfw2
│║⦁ ${WhatsBot.prefix}bonermaterial
│║⦁ ${WhatsBot.prefix}nsfw411
│║⦁ ${WhatsBot.prefix}iwanttofuckher
│║⦁ ${WhatsBot.prefix}exxxtras
│║⦁ ${WhatsBot.prefix}distension
│║⦁ ${WhatsBot.prefix}bimbofetish
│║⦁ ${WhatsBot.prefix}christiangirls
│║⦁ ${WhatsBot.prefix}dirtygaming
│║⦁ ${WhatsBot.prefix}sexybutnotporn
│║⦁ ${WhatsBot.prefix}femalepov
│║⦁ ${WhatsBot.prefix}omgbeckylookathiscock
│║⦁ ${WhatsBot.prefix}sexygirls
│║⦁ ${WhatsBot.prefix}breedingmaterial
│║⦁ ${WhatsBot.prefix}canthold
│║⦁ ${WhatsBot.prefix}toocuteforporn
│║⦁ ${WhatsBot.prefix}justhotwomen
│║⦁ ${WhatsBot.prefix}stripgirls
│║⦁ ${WhatsBot.prefix}hotstuffnsfw
│║⦁ ${WhatsBot.prefix}uncommonposes
│║⦁ ${WhatsBot.prefix}gifsofremoval
│║⦁ ${WhatsBot.prefix}nostalgiafapping
│║⦁ ${WhatsBot.prefix}truefmk
│║⦁ ${WhatsBot.prefix}nudes
│║⦁ ${WhatsBot.prefix}4k
│║⦁ ${WhatsBot.prefix}realgirls
│║⦁ ${WhatsBot.prefix}blowjobs
│║⦁ ${WhatsBot.prefix}milf
│║⦁ ${WhatsBot.prefix}milk
│║⦁ ${WhatsBot.prefix}milking
│║⦁ ${WhatsBot.prefix}lactating
│║⦁ ${WhatsBot.prefix}pussy
│║⦁ ${WhatsBot.prefix}cum
│║⦁ ${WhatsBot.prefix}slut
│║⦁ ${WhatsBot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${WhatsBot.prefix}waifu
│║⦁ ${WhatsBot.prefix}swaifu
│║⦁ ${WhatsBot.prefix}neko
│║⦁ ${WhatsBot.prefix}sneko
│║⦁ ${WhatsBot.prefix}shinobu
│║⦁ ${WhatsBot.prefix}sshinobu
│║⦁ ${WhatsBot.prefix}megumin
│║⦁ ${WhatsBot.prefix}smegumin
│║⦁ ${WhatsBot.prefix}awoo
│║⦁ ${WhatsBot.prefix}sawoo
│║⦁ ${WhatsBot.prefix}glomp
│║⦁ ${WhatsBot.prefix}sglomp
│║⦁ ${WhatsBot.prefix}handhold
│║⦁ ${WhatsBot.prefix}shandhold
│║⦁
│║⦁ ${WhatsBot.prefix}sbully
│║⦁ ${WhatsBot.prefix}scuddle
│║⦁ ${WhatsBot.prefix}scry
│║⦁ ${WhatsBot.prefix}shug
│║⦁ ${WhatsBot.prefix}skiss
│║⦁ ${WhatsBot.prefix}slick
│║⦁ ${WhatsBot.prefix}spat
│║⦁ ${WhatsBot.prefix}ssmug
│║⦁ ${WhatsBot.prefix}sbonk
│║⦁ ${WhatsBot.prefix}syeet
│║⦁ ${WhatsBot.prefix}sblush
│║⦁ ${WhatsBot.prefix}ssmile
│║⦁ ${WhatsBot.prefix}swave
│║⦁ ${WhatsBot.prefix}shighfive
│║⦁ ${WhatsBot.prefix}snom
│║⦁ ${WhatsBot.prefix}sbite
│║⦁ ${WhatsBot.prefix}sslap
│║⦁ ${WhatsBot.prefix}skill
│║⦁ ${WhatsBot.prefix}skick
│║⦁ ${WhatsBot.prefix}shappy
│║⦁ ${WhatsBot.prefix}swink
│║⦁ ${WhatsBot.prefix}spoke
│║⦁ ${WhatsBot.prefix}sdance
│║⦁ ${WhatsBot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${WhatsBot.prefix}ytpanning
│║⦁ ${WhatsBot.prefix}ytbassboost
│║⦁ ${WhatsBot.prefix}ytecho
│║⦁ ${WhatsBot.prefix}ytflanger
│║⦁ ${WhatsBot.prefix}ytnightcore
│║⦁ ${WhatsBot.prefix}ytphaser
│║⦁ ${WhatsBot.prefix}ytreverse
│║⦁ ${WhatsBot.prefix}ytslow
│║⦁ ${WhatsBot.prefix}ytspeed
│║⦁ ${WhatsBot.prefix}ytsubboost
│║⦁ ${WhatsBot.prefix}ytsuperslow
│║⦁ ${WhatsBot.prefix}ytsuperspeed
│║⦁ ${WhatsBot.prefix}ytsurround
│║⦁ ${WhatsBot.prefix}ytvaporwave
│║⦁ ${WhatsBot.prefix}ytvibrato
┕╚═════⋑`,
    "./public/logo/" + LOGOS[i]
  );
};
