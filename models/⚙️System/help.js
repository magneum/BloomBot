<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = WhatsBot.speed();
  latensie = WhatsBot.speed() - timestampe;
=======
module.exports = async (voxbot, voxchat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = voxbot.speed();
  latensie = voxbot.speed() - timestampe;
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
    WhatsBot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (WhatsBot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (WhatsBot.fs.lstatSync(fileDir).isFile()) {
=======
    voxbot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (voxbot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (voxbot.fs.lstatSync(fileDir).isFile()) {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        return ++acc;
      }
      return acc;
    }, 0);

  var LOGOS = [
<<<<<<< HEAD
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
=======
    "voxbot(1).png",
    "voxbot(2).png",
    "voxbot(3).png",
    "voxbot(4).png",
    "voxbot(5).png",
  ];
  var i = Math.floor(Math.random() * LOGOS.length);

  return await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
> Ⓒvoxbot: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./models")}


┌╔═☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
<<<<<<< HEAD
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
=======
║⦁ *OS Release:* ${voxbot.os.release()}
║⦁ *OS Type:*   ${voxbot.os.type()}
║⦁ *Directory:*  ${voxbot.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${voxbot.os.platform()}
║⦁ *Free memory:* ${voxbot.os.freemem()}
║⦁ *Total memory:* ${voxbot.os.totalmem()}
║⦁ *Host device :* ${voxbot.os.hostname()}
║⦁ *OS Version:* ${voxbot.os.version()}
┕╚═☰
┌╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${voxbot.prefix}emotionslist
║⦁ 📢 ${voxbot.prefix}audiofilterlist
║⦁ 📼 ${voxbot.prefix}conversionlist
║⦁ 📥 ${voxbot.prefix}downloadlist
║⦁ 💰 ${voxbot.prefix}gameslist
║⦁ 🔰 ${voxbot.prefix}grouplist
║⦁ 🍁 ${voxbot.prefix}ownerlist
║⦁ 🖼️ ${voxbot.prefix}photolist
║⦁ 🔎 ${voxbot.prefix}searchlist
║⦁ ⭕ ${voxbot.prefix}ytfilterlist
║⦁ 🦄 ${voxbot.prefix}sfwlist
║⦁ 🍑 ${voxbot.prefix}hentailist
║⦁ 👅 ${voxbot.prefix}nsfwlist
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
╚══════⋑



┌┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
<<<<<<< HEAD
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
=======
│║⦁ ${voxbot.prefix}ban
│║⦁ ${voxbot.prefix}broadcast
│║⦁ ${voxbot.prefix}join
│║⦁ ${voxbot.prefix}leave
│║⦁ ${voxbot.prefix}reboot
│║⦁ ${voxbot.prefix}rules
│║⦁ ${voxbot.prefix}unban
│║⦁ ${voxbot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${voxbot.prefix}panning
│║⦁ ${voxbot.prefix}bassboost
│║⦁ ${voxbot.prefix}echo
│║⦁ ${voxbot.prefix}fast
│║⦁ ${voxbot.prefix}flanger
│║⦁ ${voxbot.prefix}nightcore
│║⦁ ${voxbot.prefix}phaser
│║⦁ ${voxbot.prefix}reverse
│║⦁ ${voxbot.prefix}slow
│║⦁ ${voxbot.prefix}speed
│║⦁ ${voxbot.prefix}subboost
│║⦁ ${voxbot.prefix}superslow
│║⦁ ${voxbot.prefix}superspeed
│║⦁ ${voxbot.prefix}surround
│║⦁ ${voxbot.prefix}vaporwave
│║⦁ ${voxbot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${voxbot.prefix}carbon
│║⦁ ${voxbot.prefix}ship
│║⦁ ${voxbot.prefix}sticker
│║⦁ ${voxbot.prefix}tinyurl
│║⦁ ${voxbot.prefix}tourl
│║⦁ ${voxbot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${voxbot.prefix}yta
│║⦁ ${voxbot.prefix}play
│║⦁ ${voxbot.prefix}song
│║⦁ ${voxbot.prefix}sing
│║⦁ ${voxbot.prefix}ytmp3
│║⦁ ${voxbot.prefix}music
│║⦁ ${voxbot.prefix}ytplay
│║⦁ ${voxbot.prefix}ytaudio
│║⦁ ${voxbot.prefix}ytmusic
│║⦁ ${voxbot.prefix}youtubemusic
│║⦁ 
│║⦁ ${voxbot.prefix}ytv
│║⦁ ${voxbot.prefix}watch
│║⦁ ${voxbot.prefix}stream
│║⦁ ${voxbot.prefix}ytmp4
│║⦁ ${voxbot.prefix}video
│║⦁ ${voxbot.prefix}ytwatch
│║⦁ ${voxbot.prefix}ytvideo
│║⦁ ${voxbot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${voxbot.prefix}bite
│║⦁ ${voxbot.prefix}blush
│║⦁ ${voxbot.prefix}bonk
│║⦁ ${voxbot.prefix}bored
│║⦁ ${voxbot.prefix}confused
│║⦁ ${voxbot.prefix}cry
│║⦁ ${voxbot.prefix}cuddle
│║⦁ ${voxbot.prefix}dance
│║⦁ ${voxbot.prefix}goodnight
│║⦁ ${voxbot.prefix}happy
│║⦁ ${voxbot.prefix}highfive
│║⦁ ${voxbot.prefix}hug
│║⦁ ${voxbot.prefix}kill
│║⦁ ${voxbot.prefix}kiss
│║⦁ ${voxbot.prefix}nervous
│║⦁ ${voxbot.prefix}pat
│║⦁ ${voxbot.prefix}poke
│║⦁ ${voxbot.prefix}punch
│║⦁ ${voxbot.prefix}sad
│║⦁ ${voxbot.prefix}scream
│║⦁ ${voxbot.prefix}slap
│║⦁ ${voxbot.prefix}smile
│║⦁ ${voxbot.prefix}stare
│║⦁ ${voxbot.prefix}wave
│║⦁ ${voxbot.prefix}wink
│║⦁ ${voxbot.prefix}yeet
│║⦁ ${voxbot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${voxbot.prefix}balance
│║⦁ ${voxbot.prefix}buy
│║⦁ ${voxbot.prefix}daily
│║⦁ ${voxbot.prefix}fish
│║⦁ ${voxbot.prefix}gamble
│║⦁ ${voxbot.prefix}inv
│║⦁ ${voxbot.prefix}pay
│║⦁ ${voxbot.prefix}rob
│║⦁ ${voxbot.prefix}store
│║⦁ ${voxbot.prefix}work
│║⦁ ${voxbot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${voxbot.prefix}antilink
│║⦁ ${voxbot.prefix}antinsfw
│║⦁ ${voxbot.prefix}delete
│║⦁ ${voxbot.prefix}group
│║⦁ ${voxbot.prefix}kick
│║⦁ ${voxbot.prefix}promote
│║⦁ ${voxbot.prefix}setdesc
│║⦁ ${voxbot.prefix}seticon
│║⦁ ${voxbot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
║> ${voxbot.prefix}image
║> ${voxbot.prefix}unsplash
│║⦁ ${voxbot.prefix}pinterest
│║⦁ ${voxbot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${voxbot.prefix}advice
│║⦁ ${voxbot.prefix}anime
│║⦁ ${voxbot.prefix}chordlist
│║⦁ ${voxbot.prefix}fact
│║⦁ ${voxbot.prefix}getchord
│║⦁ ${voxbot.prefix}gify
│║⦁ ${voxbot.prefix}google
│║⦁ ${voxbot.prefix}instagram
│║⦁ ${voxbot.prefix}joke
│║⦁ ${voxbot.prefix}lyrics
│║⦁ ${voxbot.prefix}manga
│║⦁ ${voxbot.prefix}meme
│║⦁ ${voxbot.prefix}pokedex
│║⦁ ${voxbot.prefix}quote
│║⦁ ${voxbot.prefix}reddit
│║⦁ ${voxbot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${voxbot.prefix}ass
│║⦁ ${voxbot.prefix}bdsm
│║⦁ ${voxbot.prefix}blowjob
│║⦁ ${voxbot.prefix}cum
│║⦁ ${voxbot.prefix}doujin
│║⦁ ${voxbot.prefix}feet
│║⦁ ${voxbot.prefix}femdom  
│║⦁ ${voxbot.prefix}foxgirl  
│║⦁ ${voxbot.prefix}glasses  
│║⦁ ${voxbot.prefix}hentai
│║⦁ ${voxbot.prefix}maid
│║⦁ ${voxbot.prefix}masturbation
│║⦁ ${voxbot.prefix}netorare
│║⦁ ${voxbot.prefix}orgy
│║⦁ ${voxbot.prefix}panties
│║⦁ ${voxbot.prefix}pussy
│║⦁ ${voxbot.prefix}school
│║⦁ ${voxbot.prefix}succubus
│║⦁ ${voxbot.prefix}tentacles
│║⦁ ${voxbot.prefix}thighs
│║⦁ ${voxbot.prefix}uglyBastard
│║⦁ ${voxbot.prefix}uniform
│║⦁ ${voxbot.prefix}yuri
│║⦁ ${voxbot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${voxbot.prefix}nsfw
│║⦁ ${voxbot.prefix}nsfw2
│║⦁ ${voxbot.prefix}bonermaterial
│║⦁ ${voxbot.prefix}nsfw411
│║⦁ ${voxbot.prefix}iwanttofuckher
│║⦁ ${voxbot.prefix}exxxtras
│║⦁ ${voxbot.prefix}distension
│║⦁ ${voxbot.prefix}bimbofetish
│║⦁ ${voxbot.prefix}christiangirls
│║⦁ ${voxbot.prefix}dirtygaming
│║⦁ ${voxbot.prefix}sexybutnotporn
│║⦁ ${voxbot.prefix}femalepov
│║⦁ ${voxbot.prefix}omgbeckylookathiscock
│║⦁ ${voxbot.prefix}sexygirls
│║⦁ ${voxbot.prefix}breedingmaterial
│║⦁ ${voxbot.prefix}canthold
│║⦁ ${voxbot.prefix}toocuteforporn
│║⦁ ${voxbot.prefix}justhotwomen
│║⦁ ${voxbot.prefix}stripgirls
│║⦁ ${voxbot.prefix}hotstuffnsfw
│║⦁ ${voxbot.prefix}uncommonposes
│║⦁ ${voxbot.prefix}gifsofremoval
│║⦁ ${voxbot.prefix}nostalgiafapping
│║⦁ ${voxbot.prefix}truefmk
│║⦁ ${voxbot.prefix}nudes
│║⦁ ${voxbot.prefix}4k
│║⦁ ${voxbot.prefix}realgirls
│║⦁ ${voxbot.prefix}blowjobs
│║⦁ ${voxbot.prefix}milf
│║⦁ ${voxbot.prefix}milk
│║⦁ ${voxbot.prefix}milking
│║⦁ ${voxbot.prefix}lactating
│║⦁ ${voxbot.prefix}pussy
│║⦁ ${voxbot.prefix}cum
│║⦁ ${voxbot.prefix}slut
│║⦁ ${voxbot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${voxbot.prefix}waifu
│║⦁ ${voxbot.prefix}swaifu
│║⦁ ${voxbot.prefix}neko
│║⦁ ${voxbot.prefix}sneko
│║⦁ ${voxbot.prefix}shinobu
│║⦁ ${voxbot.prefix}sshinobu
│║⦁ ${voxbot.prefix}megumin
│║⦁ ${voxbot.prefix}smegumin
│║⦁ ${voxbot.prefix}awoo
│║⦁ ${voxbot.prefix}sawoo
│║⦁ ${voxbot.prefix}glomp
│║⦁ ${voxbot.prefix}sglomp
│║⦁ ${voxbot.prefix}handhold
│║⦁ ${voxbot.prefix}shandhold
│║⦁
│║⦁ ${voxbot.prefix}sbully
│║⦁ ${voxbot.prefix}scuddle
│║⦁ ${voxbot.prefix}scry
│║⦁ ${voxbot.prefix}shug
│║⦁ ${voxbot.prefix}skiss
│║⦁ ${voxbot.prefix}slick
│║⦁ ${voxbot.prefix}spat
│║⦁ ${voxbot.prefix}ssmug
│║⦁ ${voxbot.prefix}sbonk
│║⦁ ${voxbot.prefix}syeet
│║⦁ ${voxbot.prefix}sblush
│║⦁ ${voxbot.prefix}ssmile
│║⦁ ${voxbot.prefix}swave
│║⦁ ${voxbot.prefix}shighfive
│║⦁ ${voxbot.prefix}snom
│║⦁ ${voxbot.prefix}sbite
│║⦁ ${voxbot.prefix}sslap
│║⦁ ${voxbot.prefix}skill
│║⦁ ${voxbot.prefix}skick
│║⦁ ${voxbot.prefix}shappy
│║⦁ ${voxbot.prefix}swink
│║⦁ ${voxbot.prefix}spoke
│║⦁ ${voxbot.prefix}sdance
│║⦁ ${voxbot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${voxbot.prefix}ytpanning
│║⦁ ${voxbot.prefix}ytbassboost
│║⦁ ${voxbot.prefix}ytecho
│║⦁ ${voxbot.prefix}ytflanger
│║⦁ ${voxbot.prefix}ytnightcore
│║⦁ ${voxbot.prefix}ytphaser
│║⦁ ${voxbot.prefix}ytreverse
│║⦁ ${voxbot.prefix}ytslow
│║⦁ ${voxbot.prefix}ytspeed
│║⦁ ${voxbot.prefix}ytsubboost
│║⦁ ${voxbot.prefix}ytsuperslow
│║⦁ ${voxbot.prefix}ytsuperspeed
│║⦁ ${voxbot.prefix}ytsurround
│║⦁ ${voxbot.prefix}ytvaporwave
│║⦁ ${voxbot.prefix}ytvibrato
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
┕╚═════⋑`,
    "./public/logo/" + LOGOS[i]
  );
};
