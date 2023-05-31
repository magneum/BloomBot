//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of you
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
    timestampe = BloomBot.speed();
    latensie = BloomBot.speed() - timestampe;
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
      BloomBot.fs.readdirSync(dir).reduce((acc, file) => {
        var fileDir = `${dir}/${file}`;
        if (BloomBot.fs.lstatSync(fileDir).isDirectory()) {
          return (acc += countFiles(fileDir));
        }
        if (BloomBot.fs.lstatSync(fileDir).isFile()) {
          return ++acc;
        }
        return acc;
      }, 0);
    return await BloomBot.imagebutton(
      BloomBot,
      mags,
      `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
> ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${BloomBot.os.release()}
║⦁ *💻OS Type:*   ${BloomBot.os.type()}
║⦁ *📂Directory:*  ${BloomBot.os.homedir()}
║⦁ *🌻Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${BloomBot.os.platform()}
║⦁ *🆓Free memory:* ${BloomBot.os.freemem()}
║⦁ *💾Total memory:* ${BloomBot.os.totalmem()}
║⦁ *🏠Host device :* ${BloomBot.os.hostname()}
║⦁ *📋OS Version:* ${BloomBot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${BloomBot.prefix}emotionslist
║⦁ 📢 ${BloomBot.prefix}audiofilterlist
║⦁ 📼 ${BloomBot.prefix}conversionlist
║⦁ 📥 ${BloomBot.prefix}downloadlist
║⦁ 💰 ${BloomBot.prefix}gameslist
║⦁ 🔰 ${BloomBot.prefix}grouplist
║⦁ 🍁 ${BloomBot.prefix}ownerlist
║⦁ 🖼️ ${BloomBot.prefix}photolist
║⦁ 🔎 ${BloomBot.prefix}searchlist
║⦁ ⭕ ${BloomBot.prefix}ytfilterlist
║⦁ 🦄 ${BloomBot.prefix}sfwlist
║⦁ 🍑 ${BloomBot.prefix}hentailist
║⦁ 👅 ${BloomBot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${fpth.toUpperCase()}🍁*
│║⦁ ${BloomBot.prefix}ban
│║⦁ ${BloomBot.prefix}broadcast
│║⦁ ${BloomBot.prefix}join
│║⦁ ${BloomBot.prefix}leave
│║⦁ ${BloomBot.prefix}reboot
│║⦁ ${BloomBot.prefix}rules
│║⦁ ${BloomBot.prefix}unban
│║⦁ ${BloomBot.prefix}verify
┕╚═☰
┌╔═☰ *📢${fpth.toUpperCase()}📢*
│║⦁ ${BloomBot.prefix}panning
│║⦁ ${BloomBot.prefix}bassboost
│║⦁ ${BloomBot.prefix}echo
│║⦁ ${BloomBot.prefix}fast
│║⦁ ${BloomBot.prefix}flanger
│║⦁ ${BloomBot.prefix}nightcore
│║⦁ ${BloomBot.prefix}phaser
│║⦁ ${BloomBot.prefix}reverse
│║⦁ ${BloomBot.prefix}slow
│║⦁ ${BloomBot.prefix}speed
│║⦁ ${BloomBot.prefix}subboost
│║⦁ ${BloomBot.prefix}superslow
│║⦁ ${BloomBot.prefix}superspeed
│║⦁ ${BloomBot.prefix}surround
│║⦁ ${BloomBot.prefix}vaporwave
│║⦁ ${BloomBot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${fpth.toUpperCase()}📼*
│║⦁ ${BloomBot.prefix}carbon
│║⦁ ${BloomBot.prefix}ship
│║⦁ ${BloomBot.prefix}sticker
│║⦁ ${BloomBot.prefix}tinyurl
│║⦁ ${BloomBot.prefix}tourl
│║⦁ ${BloomBot.prefix}tts
┕╚═☰
┌╔═☰ *📥${fpth.toUpperCase()}📥* 
│║⦁ ${BloomBot.prefix}yta
│║⦁ ${BloomBot.prefix}play
│║⦁ ${BloomBot.prefix}song
│║⦁ ${BloomBot.prefix}sing
│║⦁ ${BloomBot.prefix}ytmp3
│║⦁ ${BloomBot.prefix}music
│║⦁ ${BloomBot.prefix}ytplay
│║⦁ ${BloomBot.prefix}ytaudio
│║⦁ ${BloomBot.prefix}ytmusic
│║⦁ ${BloomBot.prefix}youtubemusic
│║⦁ 
│║⦁ ${BloomBot.prefix}ytv
│║⦁ ${BloomBot.prefix}watch
│║⦁ ${BloomBot.prefix}stream
│║⦁ ${BloomBot.prefix}ytmp4
│║⦁ ${BloomBot.prefix}video
│║⦁ ${BloomBot.prefix}ytwatch
│║⦁ ${BloomBot.prefix}ytvideo
│║⦁ ${BloomBot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${fpth.toUpperCase()}🐉* 
│║⦁ ${BloomBot.prefix}bite
│║⦁ ${BloomBot.prefix}blush
│║⦁ ${BloomBot.prefix}bonk
│║⦁ ${BloomBot.prefix}bored
│║⦁ ${BloomBot.prefix}confused
│║⦁ ${BloomBot.prefix}cry
│║⦁ ${BloomBot.prefix}cuddle
│║⦁ ${BloomBot.prefix}dance
│║⦁ ${BloomBot.prefix}goodnight
│║⦁ ${BloomBot.prefix}happy
│║⦁ ${BloomBot.prefix}highfive
│║⦁ ${BloomBot.prefix}hug
│║⦁ ${BloomBot.prefix}kill
│║⦁ ${BloomBot.prefix}kiss
│║⦁ ${BloomBot.prefix}nervous
│║⦁ ${BloomBot.prefix}pat
│║⦁ ${BloomBot.prefix}poke
│║⦁ ${BloomBot.prefix}punch
│║⦁ ${BloomBot.prefix}sad
│║⦁ ${BloomBot.prefix}scream
│║⦁ ${BloomBot.prefix}slap
│║⦁ ${BloomBot.prefix}smile
│║⦁ ${BloomBot.prefix}stare
│║⦁ ${BloomBot.prefix}wave
│║⦁ ${BloomBot.prefix}wink
│║⦁ ${BloomBot.prefix}yeet
│║⦁ ${BloomBot.prefix}yes
┕╚═☰
┌╔═☰ *💰${fpth.toUpperCase()}💰* 
│║⦁ ${BloomBot.prefix}balance
│║⦁ ${BloomBot.prefix}buy
│║⦁ ${BloomBot.prefix}daily
│║⦁ ${BloomBot.prefix}fish
│║⦁ ${BloomBot.prefix}gamble
│║⦁ ${BloomBot.prefix}inv
│║⦁ ${BloomBot.prefix}pay
│║⦁ ${BloomBot.prefix}rob
│║⦁ ${BloomBot.prefix}store
│║⦁ ${BloomBot.prefix}work
│║⦁ ${BloomBot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${fpth.toUpperCase()}🔰* 
│║⦁ ${BloomBot.prefix}antilink
│║⦁ ${BloomBot.prefix}allownsfw
│║⦁ ${BloomBot.prefix}delete
│║⦁ ${BloomBot.prefix}group
│║⦁ ${BloomBot.prefix}kick
│║⦁ ${BloomBot.prefix}promote
│║⦁ ${BloomBot.prefix}setdesc
│║⦁ ${BloomBot.prefix}seticon
│║⦁ ${BloomBot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${fpth.toUpperCase()}🖼️* 
│║⦁ ${BloomBot.prefix}image
│║⦁ ${BloomBot.prefix}unsplash
│║⦁ ${BloomBot.prefix}pinterest
│║⦁ ${BloomBot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${fpth.toUpperCase()}🔎* 
│║⦁ ${BloomBot.prefix}advice
│║⦁ ${BloomBot.prefix}anime
│║⦁ ${BloomBot.prefix}chordlist
│║⦁ ${BloomBot.prefix}fact
│║⦁ ${BloomBot.prefix}getchord
│║⦁ ${BloomBot.prefix}gify
│║⦁ ${BloomBot.prefix}google
│║⦁ ${BloomBot.prefix}instagram
│║⦁ ${BloomBot.prefix}joke
│║⦁ ${BloomBot.prefix}lyrics
│║⦁ ${BloomBot.prefix}manga
│║⦁ ${BloomBot.prefix}meme
│║⦁ ${BloomBot.prefix}pokedex
│║⦁ ${BloomBot.prefix}quote
│║⦁ ${BloomBot.prefix}reddit
│║⦁ ${BloomBot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${fpth.toUpperCase()}🍑* 
│║⦁ ${BloomBot.prefix}ass
│║⦁ ${BloomBot.prefix}bdsm
│║⦁ ${BloomBot.prefix}blowjob
│║⦁ ${BloomBot.prefix}cum
│║⦁ ${BloomBot.prefix}doujin
│║⦁ ${BloomBot.prefix}feet
│║⦁ ${BloomBot.prefix}femdom  
│║⦁ ${BloomBot.prefix}whatsgirl  
│║⦁ ${BloomBot.prefix}glasses  
│║⦁ ${BloomBot.prefix}hentai
│║⦁ ${BloomBot.prefix}maid
│║⦁ ${BloomBot.prefix}masturbation
│║⦁ ${BloomBot.prefix}netorare
│║⦁ ${BloomBot.prefix}orgy
│║⦁ ${BloomBot.prefix}panties
│║⦁ ${BloomBot.prefix}pussy
│║⦁ ${BloomBot.prefix}school
│║⦁ ${BloomBot.prefix}succubus
│║⦁ ${BloomBot.prefix}tentacles
│║⦁ ${BloomBot.prefix}thighs
│║⦁ ${BloomBot.prefix}uglyBastard
│║⦁ ${BloomBot.prefix}uniform
│║⦁ ${BloomBot.prefix}yuri
│║⦁ ${BloomBot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${fpth.toUpperCase()}👅* 
│║⦁ ${BloomBot.prefix}nsfw
│║⦁ ${BloomBot.prefix}nsfw2
│║⦁ ${BloomBot.prefix}bonermaterial
│║⦁ ${BloomBot.prefix}nsfw411
│║⦁ ${BloomBot.prefix}iwanttofuckher
│║⦁ ${BloomBot.prefix}exxxtras
│║⦁ ${BloomBot.prefix}distension
│║⦁ ${BloomBot.prefix}bimbofetish
│║⦁ ${BloomBot.prefix}christiangirls
│║⦁ ${BloomBot.prefix}dirtygaming
│║⦁ ${BloomBot.prefix}sexybutnotporn
│║⦁ ${BloomBot.prefix}femalepov
│║⦁ ${BloomBot.prefix}omgbeckylookathiscock
│║⦁ ${BloomBot.prefix}sexygirls
│║⦁ ${BloomBot.prefix}breedingmaterial
│║⦁ ${BloomBot.prefix}canthold
│║⦁ ${BloomBot.prefix}toocuteforporn
│║⦁ ${BloomBot.prefix}justhotwomen
│║⦁ ${BloomBot.prefix}stripgirls
│║⦁ ${BloomBot.prefix}hotstuffnsfw
│║⦁ ${BloomBot.prefix}uncommonposes
│║⦁ ${BloomBot.prefix}gifsofremoval
│║⦁ ${BloomBot.prefix}nostalgiafapping
│║⦁ ${BloomBot.prefix}truefmk
│║⦁ ${BloomBot.prefix}nudes
│║⦁ ${BloomBot.prefix}4k
│║⦁ ${BloomBot.prefix}realgirls
│║⦁ ${BloomBot.prefix}blowjobs
│║⦁ ${BloomBot.prefix}milf
│║⦁ ${BloomBot.prefix}milk
│║⦁ ${BloomBot.prefix}milking
│║⦁ ${BloomBot.prefix}lactating
│║⦁ ${BloomBot.prefix}pussy
│║⦁ ${BloomBot.prefix}cum
│║⦁ ${BloomBot.prefix}slut
│║⦁ ${BloomBot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${fpth.toUpperCase()}🦄* 
│║⦁ ${BloomBot.prefix}waifu
│║⦁ ${BloomBot.prefix}swaifu
│║⦁ ${BloomBot.prefix}whats
│║⦁ ${BloomBot.prefix}swhats
│║⦁ ${BloomBot.prefix}shinobu
│║⦁ ${BloomBot.prefix}sshinobu
│║⦁ ${BloomBot.prefix}megumin
│║⦁ ${BloomBot.prefix}smegumin
│║⦁ ${BloomBot.prefix}awoo
│║⦁ ${BloomBot.prefix}sawoo
│║⦁ ${BloomBot.prefix}glomp
│║⦁ ${BloomBot.prefix}sglomp
│║⦁ ${BloomBot.prefix}handhold
│║⦁ ${BloomBot.prefix}shandhold
│║⦁
│║⦁ ${BloomBot.prefix}sbully
│║⦁ ${BloomBot.prefix}scuddle
│║⦁ ${BloomBot.prefix}scry
│║⦁ ${BloomBot.prefix}shug
│║⦁ ${BloomBot.prefix}skiss
│║⦁ ${BloomBot.prefix}slick
│║⦁ ${BloomBot.prefix}spat
│║⦁ ${BloomBot.prefix}ssmug
│║⦁ ${BloomBot.prefix}sbonk
│║⦁ ${BloomBot.prefix}syeet
│║⦁ ${BloomBot.prefix}sblush
│║⦁ ${BloomBot.prefix}ssmile
│║⦁ ${BloomBot.prefix}swave
│║⦁ ${BloomBot.prefix}shighfive
│║⦁ ${BloomBot.prefix}snom
│║⦁ ${BloomBot.prefix}sbite
│║⦁ ${BloomBot.prefix}sslap
│║⦁ ${BloomBot.prefix}skill
│║⦁ ${BloomBot.prefix}skick
│║⦁ ${BloomBot.prefix}shappy
│║⦁ ${BloomBot.prefix}swink
│║⦁ ${BloomBot.prefix}spoke
│║⦁ ${BloomBot.prefix}sdance
│║⦁ ${BloomBot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${fpth.toUpperCase()}⭕* 
│║⦁ ${BloomBot.prefix}ytpanning
│║⦁ ${BloomBot.prefix}ytbassboost
│║⦁ ${BloomBot.prefix}ytecho
│║⦁ ${BloomBot.prefix}ytflanger
│║⦁ ${BloomBot.prefix}ytnightcore
│║⦁ ${BloomBot.prefix}ytphaser
│║⦁ ${BloomBot.prefix}ytreverse
│║⦁ ${BloomBot.prefix}ytslow
│║⦁ ${BloomBot.prefix}ytspeed
│║⦁ ${BloomBot.prefix}ytsubboost
│║⦁ ${BloomBot.prefix}ytsuperslow
│║⦁ ${BloomBot.prefix}ytsuperspeed
│║⦁ ${BloomBot.prefix}ytsurround
│║⦁ ${BloomBot.prefix}ytvaporwave
│║⦁ ${BloomBot.prefix}ytvibrato
┕╚═════⋑`,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
