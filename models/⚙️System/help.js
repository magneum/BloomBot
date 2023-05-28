//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = whatsbot.speed();
  latensie = whatsbot.speed() - timestampe;
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
    whatsbot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (whatsbot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (whatsbot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await whatsbot.imagebutton(
    whatsbot,
    whatschat,
    `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
> Ⓒwhatsbot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./models")}


┌╔═☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
║⦁ *OS Release:* ${whatsbot.os.release()}
║⦁ *OS Type:*   ${whatsbot.os.type()}
║⦁ *Directory:*  ${whatsbot.os.homedir()}
║⦁ *Speed :* ${latensie.toFixed(4)} sec
║⦁ *Ram Usage :* ${ramUsage}
║⦁ *Platform :* ${whatsbot.os.platform()}
║⦁ *Free memory:* ${whatsbot.os.freemem()}
║⦁ *Total memory:* ${whatsbot.os.totalmem()}
║⦁ *Host device :* ${whatsbot.os.hostname()}
║⦁ *OS Version:* ${whatsbot.os.version()}
┕╚═☰
┌╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${whatsbot.prefix}emotionslist
║⦁ 📢 ${whatsbot.prefix}audiofilterlist
║⦁ 📼 ${whatsbot.prefix}conversionlist
║⦁ 📥 ${whatsbot.prefix}downloadlist
║⦁ 💰 ${whatsbot.prefix}gameslist
║⦁ 🔰 ${whatsbot.prefix}grouplist
║⦁ 🍁 ${whatsbot.prefix}ownerlist
║⦁ 🖼️ ${whatsbot.prefix}photolist
║⦁ 🔎 ${whatsbot.prefix}searchlist
║⦁ ⭕ ${whatsbot.prefix}ytfilterlist
║⦁ 🦄 ${whatsbot.prefix}sfwlist
║⦁ 🍑 ${whatsbot.prefix}hentailist
║⦁ 👅 ${whatsbot.prefix}nsfwlist
╚══════⋑



┌┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${whatsbot.prefix}ban
│║⦁ ${whatsbot.prefix}broadcast
│║⦁ ${whatsbot.prefix}join
│║⦁ ${whatsbot.prefix}leave
│║⦁ ${whatsbot.prefix}reboot
│║⦁ ${whatsbot.prefix}rules
│║⦁ ${whatsbot.prefix}unban
│║⦁ ${whatsbot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${whatsbot.prefix}panning
│║⦁ ${whatsbot.prefix}bassboost
│║⦁ ${whatsbot.prefix}echo
│║⦁ ${whatsbot.prefix}fast
│║⦁ ${whatsbot.prefix}flanger
│║⦁ ${whatsbot.prefix}nightcore
│║⦁ ${whatsbot.prefix}phaser
│║⦁ ${whatsbot.prefix}reverse
│║⦁ ${whatsbot.prefix}slow
│║⦁ ${whatsbot.prefix}speed
│║⦁ ${whatsbot.prefix}subboost
│║⦁ ${whatsbot.prefix}superslow
│║⦁ ${whatsbot.prefix}superspeed
│║⦁ ${whatsbot.prefix}surround
│║⦁ ${whatsbot.prefix}vaporwave
│║⦁ ${whatsbot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${whatsbot.prefix}carbon
│║⦁ ${whatsbot.prefix}ship
│║⦁ ${whatsbot.prefix}sticker
│║⦁ ${whatsbot.prefix}tinyurl
│║⦁ ${whatsbot.prefix}tourl
│║⦁ ${whatsbot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${whatsbot.prefix}yta
│║⦁ ${whatsbot.prefix}play
│║⦁ ${whatsbot.prefix}song
│║⦁ ${whatsbot.prefix}sing
│║⦁ ${whatsbot.prefix}ytmp3
│║⦁ ${whatsbot.prefix}music
│║⦁ ${whatsbot.prefix}ytplay
│║⦁ ${whatsbot.prefix}ytaudio
│║⦁ ${whatsbot.prefix}ytmusic
│║⦁ ${whatsbot.prefix}youtubemusic
│║⦁ 
│║⦁ ${whatsbot.prefix}ytv
│║⦁ ${whatsbot.prefix}watch
│║⦁ ${whatsbot.prefix}stream
│║⦁ ${whatsbot.prefix}ytmp4
│║⦁ ${whatsbot.prefix}video
│║⦁ ${whatsbot.prefix}ytwatch
│║⦁ ${whatsbot.prefix}ytvideo
│║⦁ ${whatsbot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${whatsbot.prefix}bite
│║⦁ ${whatsbot.prefix}blush
│║⦁ ${whatsbot.prefix}bonk
│║⦁ ${whatsbot.prefix}bored
│║⦁ ${whatsbot.prefix}confused
│║⦁ ${whatsbot.prefix}cry
│║⦁ ${whatsbot.prefix}cuddle
│║⦁ ${whatsbot.prefix}dance
│║⦁ ${whatsbot.prefix}goodnight
│║⦁ ${whatsbot.prefix}happy
│║⦁ ${whatsbot.prefix}highfive
│║⦁ ${whatsbot.prefix}hug
│║⦁ ${whatsbot.prefix}kill
│║⦁ ${whatsbot.prefix}kiss
│║⦁ ${whatsbot.prefix}nervous
│║⦁ ${whatsbot.prefix}pat
│║⦁ ${whatsbot.prefix}poke
│║⦁ ${whatsbot.prefix}punch
│║⦁ ${whatsbot.prefix}sad
│║⦁ ${whatsbot.prefix}scream
│║⦁ ${whatsbot.prefix}slap
│║⦁ ${whatsbot.prefix}smile
│║⦁ ${whatsbot.prefix}stare
│║⦁ ${whatsbot.prefix}wave
│║⦁ ${whatsbot.prefix}wink
│║⦁ ${whatsbot.prefix}yeet
│║⦁ ${whatsbot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${whatsbot.prefix}balance
│║⦁ ${whatsbot.prefix}buy
│║⦁ ${whatsbot.prefix}daily
│║⦁ ${whatsbot.prefix}fish
│║⦁ ${whatsbot.prefix}gamble
│║⦁ ${whatsbot.prefix}inv
│║⦁ ${whatsbot.prefix}pay
│║⦁ ${whatsbot.prefix}rob
│║⦁ ${whatsbot.prefix}store
│║⦁ ${whatsbot.prefix}work
│║⦁ ${whatsbot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${whatsbot.prefix}antilink
│║⦁ ${whatsbot.prefix}antinsfw
│║⦁ ${whatsbot.prefix}delete
│║⦁ ${whatsbot.prefix}group
│║⦁ ${whatsbot.prefix}kick
│║⦁ ${whatsbot.prefix}promote
│║⦁ ${whatsbot.prefix}setdesc
│║⦁ ${whatsbot.prefix}seticon
│║⦁ ${whatsbot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
║> ${whatsbot.prefix}image
║> ${whatsbot.prefix}unsplash
│║⦁ ${whatsbot.prefix}pinterest
│║⦁ ${whatsbot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${whatsbot.prefix}advice
│║⦁ ${whatsbot.prefix}anime
│║⦁ ${whatsbot.prefix}chordlist
│║⦁ ${whatsbot.prefix}fact
│║⦁ ${whatsbot.prefix}getchord
│║⦁ ${whatsbot.prefix}gify
│║⦁ ${whatsbot.prefix}google
│║⦁ ${whatsbot.prefix}instagram
│║⦁ ${whatsbot.prefix}joke
│║⦁ ${whatsbot.prefix}lyrics
│║⦁ ${whatsbot.prefix}manga
│║⦁ ${whatsbot.prefix}meme
│║⦁ ${whatsbot.prefix}pokedex
│║⦁ ${whatsbot.prefix}quote
│║⦁ ${whatsbot.prefix}reddit
│║⦁ ${whatsbot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${whatsbot.prefix}ass
│║⦁ ${whatsbot.prefix}bdsm
│║⦁ ${whatsbot.prefix}blowjob
│║⦁ ${whatsbot.prefix}cum
│║⦁ ${whatsbot.prefix}doujin
│║⦁ ${whatsbot.prefix}feet
│║⦁ ${whatsbot.prefix}femdom  
│║⦁ ${whatsbot.prefix}foxgirl  
│║⦁ ${whatsbot.prefix}glasses  
│║⦁ ${whatsbot.prefix}hentai
│║⦁ ${whatsbot.prefix}maid
│║⦁ ${whatsbot.prefix}masturbation
│║⦁ ${whatsbot.prefix}netorare
│║⦁ ${whatsbot.prefix}orgy
│║⦁ ${whatsbot.prefix}panties
│║⦁ ${whatsbot.prefix}pussy
│║⦁ ${whatsbot.prefix}school
│║⦁ ${whatsbot.prefix}succubus
│║⦁ ${whatsbot.prefix}tentacles
│║⦁ ${whatsbot.prefix}thighs
│║⦁ ${whatsbot.prefix}uglyBastard
│║⦁ ${whatsbot.prefix}uniform
│║⦁ ${whatsbot.prefix}yuri
│║⦁ ${whatsbot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${whatsbot.prefix}nsfw
│║⦁ ${whatsbot.prefix}nsfw2
│║⦁ ${whatsbot.prefix}bonermaterial
│║⦁ ${whatsbot.prefix}nsfw411
│║⦁ ${whatsbot.prefix}iwanttofuckher
│║⦁ ${whatsbot.prefix}exxxtras
│║⦁ ${whatsbot.prefix}distension
│║⦁ ${whatsbot.prefix}bimbofetish
│║⦁ ${whatsbot.prefix}christiangirls
│║⦁ ${whatsbot.prefix}dirtygaming
│║⦁ ${whatsbot.prefix}sexybutnotporn
│║⦁ ${whatsbot.prefix}femalepov
│║⦁ ${whatsbot.prefix}omgbeckylookathiscock
│║⦁ ${whatsbot.prefix}sexygirls
│║⦁ ${whatsbot.prefix}breedingmaterial
│║⦁ ${whatsbot.prefix}canthold
│║⦁ ${whatsbot.prefix}toocuteforporn
│║⦁ ${whatsbot.prefix}justhotwomen
│║⦁ ${whatsbot.prefix}stripgirls
│║⦁ ${whatsbot.prefix}hotstuffnsfw
│║⦁ ${whatsbot.prefix}uncommonposes
│║⦁ ${whatsbot.prefix}gifsofremoval
│║⦁ ${whatsbot.prefix}nostalgiafapping
│║⦁ ${whatsbot.prefix}truefmk
│║⦁ ${whatsbot.prefix}nudes
│║⦁ ${whatsbot.prefix}4k
│║⦁ ${whatsbot.prefix}realgirls
│║⦁ ${whatsbot.prefix}blowjobs
│║⦁ ${whatsbot.prefix}milf
│║⦁ ${whatsbot.prefix}milk
│║⦁ ${whatsbot.prefix}milking
│║⦁ ${whatsbot.prefix}lactating
│║⦁ ${whatsbot.prefix}pussy
│║⦁ ${whatsbot.prefix}cum
│║⦁ ${whatsbot.prefix}slut
│║⦁ ${whatsbot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${whatsbot.prefix}waifu
│║⦁ ${whatsbot.prefix}swaifu
│║⦁ ${whatsbot.prefix}neko
│║⦁ ${whatsbot.prefix}sneko
│║⦁ ${whatsbot.prefix}shinobu
│║⦁ ${whatsbot.prefix}sshinobu
│║⦁ ${whatsbot.prefix}megumin
│║⦁ ${whatsbot.prefix}smegumin
│║⦁ ${whatsbot.prefix}awoo
│║⦁ ${whatsbot.prefix}sawoo
│║⦁ ${whatsbot.prefix}glomp
│║⦁ ${whatsbot.prefix}sglomp
│║⦁ ${whatsbot.prefix}handhold
│║⦁ ${whatsbot.prefix}shandhold
│║⦁
│║⦁ ${whatsbot.prefix}sbully
│║⦁ ${whatsbot.prefix}scuddle
│║⦁ ${whatsbot.prefix}scry
│║⦁ ${whatsbot.prefix}shug
│║⦁ ${whatsbot.prefix}skiss
│║⦁ ${whatsbot.prefix}slick
│║⦁ ${whatsbot.prefix}spat
│║⦁ ${whatsbot.prefix}ssmug
│║⦁ ${whatsbot.prefix}sbonk
│║⦁ ${whatsbot.prefix}syeet
│║⦁ ${whatsbot.prefix}sblush
│║⦁ ${whatsbot.prefix}ssmile
│║⦁ ${whatsbot.prefix}swave
│║⦁ ${whatsbot.prefix}shighfive
│║⦁ ${whatsbot.prefix}snom
│║⦁ ${whatsbot.prefix}sbite
│║⦁ ${whatsbot.prefix}sslap
│║⦁ ${whatsbot.prefix}skill
│║⦁ ${whatsbot.prefix}skick
│║⦁ ${whatsbot.prefix}shappy
│║⦁ ${whatsbot.prefix}swink
│║⦁ ${whatsbot.prefix}spoke
│║⦁ ${whatsbot.prefix}sdance
│║⦁ ${whatsbot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${whatsbot.prefix}ytpanning
│║⦁ ${whatsbot.prefix}ytbassboost
│║⦁ ${whatsbot.prefix}ytecho
│║⦁ ${whatsbot.prefix}ytflanger
│║⦁ ${whatsbot.prefix}ytnightcore
│║⦁ ${whatsbot.prefix}ytphaser
│║⦁ ${whatsbot.prefix}ytreverse
│║⦁ ${whatsbot.prefix}ytslow
│║⦁ ${whatsbot.prefix}ytspeed
│║⦁ ${whatsbot.prefix}ytsubboost
│║⦁ ${whatsbot.prefix}ytsuperslow
│║⦁ ${whatsbot.prefix}ytsuperspeed
│║⦁ ${whatsbot.prefix}ytsurround
│║⦁ ${whatsbot.prefix}ytvaporwave
│║⦁ ${whatsbot.prefix}ytvibrato
┕╚═════⋑`,
    "./public/logo/whatsbot.png"
  );
};
