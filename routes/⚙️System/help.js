//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of you
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
thisfilealias = ["list", "menu"];
module.exports = async (
  OpenBot,
  ocID,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = OpenBot.speed();
  latensie = OpenBot.speed() - timestampe;
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
    OpenBot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (OpenBot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (OpenBot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await OpenBot.imagebutton(
    OpenBot,
    ocID,
    `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
> ⒸOpenBot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${OpenBot.os.release()}
║⦁ *💻OS Type:*   ${OpenBot.os.type()}
║⦁ *📂Directory:*  ${OpenBot.os.homedir()}
║⦁ *⚡Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${OpenBot.os.platform()}
║⦁ *🆓Free memory:* ${OpenBot.os.freemem()}
║⦁ *💾Total memory:* ${OpenBot.os.totalmem()}
║⦁ *🏠Host device :* ${OpenBot.os.hostname()}
║⦁ *📋OS Version:* ${OpenBot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${OpenBot.prefix}emotionslist
║⦁ 📢 ${OpenBot.prefix}audiofilterlist
║⦁ 📼 ${OpenBot.prefix}conversionlist
║⦁ 📥 ${OpenBot.prefix}downloadlist
║⦁ 💰 ${OpenBot.prefix}gameslist
║⦁ 🔰 ${OpenBot.prefix}grouplist
║⦁ 🍁 ${OpenBot.prefix}ownerlist
║⦁ 🖼️ ${OpenBot.prefix}photolist
║⦁ 🔎 ${OpenBot.prefix}searchlist
║⦁ ⭕ ${OpenBot.prefix}ytfilterlist
║⦁ 🦄 ${OpenBot.prefix}sfwlist
║⦁ 🍑 ${OpenBot.prefix}hentailist
║⦁ 👅 ${OpenBot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${OpenBot.prefix}ban
│║⦁ ${OpenBot.prefix}broadcast
│║⦁ ${OpenBot.prefix}join
│║⦁ ${OpenBot.prefix}leave
│║⦁ ${OpenBot.prefix}reboot
│║⦁ ${OpenBot.prefix}rules
│║⦁ ${OpenBot.prefix}unban
│║⦁ ${OpenBot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${OpenBot.prefix}panning
│║⦁ ${OpenBot.prefix}bassboost
│║⦁ ${OpenBot.prefix}echo
│║⦁ ${OpenBot.prefix}fast
│║⦁ ${OpenBot.prefix}flanger
│║⦁ ${OpenBot.prefix}nightcore
│║⦁ ${OpenBot.prefix}phaser
│║⦁ ${OpenBot.prefix}reverse
│║⦁ ${OpenBot.prefix}slow
│║⦁ ${OpenBot.prefix}speed
│║⦁ ${OpenBot.prefix}subboost
│║⦁ ${OpenBot.prefix}superslow
│║⦁ ${OpenBot.prefix}superspeed
│║⦁ ${OpenBot.prefix}surround
│║⦁ ${OpenBot.prefix}vaporwave
│║⦁ ${OpenBot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${OpenBot.prefix}carbon
│║⦁ ${OpenBot.prefix}ship
│║⦁ ${OpenBot.prefix}sticker
│║⦁ ${OpenBot.prefix}tinyurl
│║⦁ ${OpenBot.prefix}tourl
│║⦁ ${OpenBot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${OpenBot.prefix}yta
│║⦁ ${OpenBot.prefix}play
│║⦁ ${OpenBot.prefix}song
│║⦁ ${OpenBot.prefix}sing
│║⦁ ${OpenBot.prefix}ytmp3
│║⦁ ${OpenBot.prefix}music
│║⦁ ${OpenBot.prefix}ytplay
│║⦁ ${OpenBot.prefix}ytaudio
│║⦁ ${OpenBot.prefix}ytmusic
│║⦁ ${OpenBot.prefix}youtubemusic
│║⦁ 
│║⦁ ${OpenBot.prefix}ytv
│║⦁ ${OpenBot.prefix}watch
│║⦁ ${OpenBot.prefix}stream
│║⦁ ${OpenBot.prefix}ytmp4
│║⦁ ${OpenBot.prefix}video
│║⦁ ${OpenBot.prefix}ytwatch
│║⦁ ${OpenBot.prefix}ytvideo
│║⦁ ${OpenBot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${OpenBot.prefix}bite
│║⦁ ${OpenBot.prefix}blush
│║⦁ ${OpenBot.prefix}bonk
│║⦁ ${OpenBot.prefix}bored
│║⦁ ${OpenBot.prefix}confused
│║⦁ ${OpenBot.prefix}cry
│║⦁ ${OpenBot.prefix}cuddle
│║⦁ ${OpenBot.prefix}dance
│║⦁ ${OpenBot.prefix}goodnight
│║⦁ ${OpenBot.prefix}happy
│║⦁ ${OpenBot.prefix}highfive
│║⦁ ${OpenBot.prefix}hug
│║⦁ ${OpenBot.prefix}kill
│║⦁ ${OpenBot.prefix}kiss
│║⦁ ${OpenBot.prefix}nervous
│║⦁ ${OpenBot.prefix}pat
│║⦁ ${OpenBot.prefix}poke
│║⦁ ${OpenBot.prefix}punch
│║⦁ ${OpenBot.prefix}sad
│║⦁ ${OpenBot.prefix}scream
│║⦁ ${OpenBot.prefix}slap
│║⦁ ${OpenBot.prefix}smile
│║⦁ ${OpenBot.prefix}stare
│║⦁ ${OpenBot.prefix}wave
│║⦁ ${OpenBot.prefix}wink
│║⦁ ${OpenBot.prefix}yeet
│║⦁ ${OpenBot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${OpenBot.prefix}balance
│║⦁ ${OpenBot.prefix}buy
│║⦁ ${OpenBot.prefix}daily
│║⦁ ${OpenBot.prefix}fish
│║⦁ ${OpenBot.prefix}gamble
│║⦁ ${OpenBot.prefix}inv
│║⦁ ${OpenBot.prefix}pay
│║⦁ ${OpenBot.prefix}rob
│║⦁ ${OpenBot.prefix}store
│║⦁ ${OpenBot.prefix}work
│║⦁ ${OpenBot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${OpenBot.prefix}antilink
│║⦁ ${OpenBot.prefix}allownsfw
│║⦁ ${OpenBot.prefix}delete
│║⦁ ${OpenBot.prefix}group
│║⦁ ${OpenBot.prefix}kick
│║⦁ ${OpenBot.prefix}promote
│║⦁ ${OpenBot.prefix}setdesc
│║⦁ ${OpenBot.prefix}seticon
│║⦁ ${OpenBot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
│║⦁ ${OpenBot.prefix}image
│║⦁ ${OpenBot.prefix}unsplash
│║⦁ ${OpenBot.prefix}pinterest
│║⦁ ${OpenBot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${OpenBot.prefix}advice
│║⦁ ${OpenBot.prefix}anime
│║⦁ ${OpenBot.prefix}chordlist
│║⦁ ${OpenBot.prefix}fact
│║⦁ ${OpenBot.prefix}getchord
│║⦁ ${OpenBot.prefix}gify
│║⦁ ${OpenBot.prefix}google
│║⦁ ${OpenBot.prefix}instagram
│║⦁ ${OpenBot.prefix}joke
│║⦁ ${OpenBot.prefix}lyrics
│║⦁ ${OpenBot.prefix}manga
│║⦁ ${OpenBot.prefix}meme
│║⦁ ${OpenBot.prefix}pokedex
│║⦁ ${OpenBot.prefix}quote
│║⦁ ${OpenBot.prefix}reddit
│║⦁ ${OpenBot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${OpenBot.prefix}ass
│║⦁ ${OpenBot.prefix}bdsm
│║⦁ ${OpenBot.prefix}blowjob
│║⦁ ${OpenBot.prefix}cum
│║⦁ ${OpenBot.prefix}doujin
│║⦁ ${OpenBot.prefix}feet
│║⦁ ${OpenBot.prefix}femdom  
│║⦁ ${OpenBot.prefix}whatsgirl  
│║⦁ ${OpenBot.prefix}glasses  
│║⦁ ${OpenBot.prefix}hentai
│║⦁ ${OpenBot.prefix}maid
│║⦁ ${OpenBot.prefix}masturbation
│║⦁ ${OpenBot.prefix}netorare
│║⦁ ${OpenBot.prefix}orgy
│║⦁ ${OpenBot.prefix}panties
│║⦁ ${OpenBot.prefix}pussy
│║⦁ ${OpenBot.prefix}school
│║⦁ ${OpenBot.prefix}succubus
│║⦁ ${OpenBot.prefix}tentacles
│║⦁ ${OpenBot.prefix}thighs
│║⦁ ${OpenBot.prefix}uglyBastard
│║⦁ ${OpenBot.prefix}uniform
│║⦁ ${OpenBot.prefix}yuri
│║⦁ ${OpenBot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${OpenBot.prefix}nsfw
│║⦁ ${OpenBot.prefix}nsfw2
│║⦁ ${OpenBot.prefix}bonermaterial
│║⦁ ${OpenBot.prefix}nsfw411
│║⦁ ${OpenBot.prefix}iwanttofuckher
│║⦁ ${OpenBot.prefix}exxxtras
│║⦁ ${OpenBot.prefix}distension
│║⦁ ${OpenBot.prefix}bimbofetish
│║⦁ ${OpenBot.prefix}christiangirls
│║⦁ ${OpenBot.prefix}dirtygaming
│║⦁ ${OpenBot.prefix}sexybutnotporn
│║⦁ ${OpenBot.prefix}femalepov
│║⦁ ${OpenBot.prefix}omgbeckylookathiscock
│║⦁ ${OpenBot.prefix}sexygirls
│║⦁ ${OpenBot.prefix}breedingmaterial
│║⦁ ${OpenBot.prefix}canthold
│║⦁ ${OpenBot.prefix}toocuteforporn
│║⦁ ${OpenBot.prefix}justhotwomen
│║⦁ ${OpenBot.prefix}stripgirls
│║⦁ ${OpenBot.prefix}hotstuffnsfw
│║⦁ ${OpenBot.prefix}uncommonposes
│║⦁ ${OpenBot.prefix}gifsofremoval
│║⦁ ${OpenBot.prefix}nostalgiafapping
│║⦁ ${OpenBot.prefix}truefmk
│║⦁ ${OpenBot.prefix}nudes
│║⦁ ${OpenBot.prefix}4k
│║⦁ ${OpenBot.prefix}realgirls
│║⦁ ${OpenBot.prefix}blowjobs
│║⦁ ${OpenBot.prefix}milf
│║⦁ ${OpenBot.prefix}milk
│║⦁ ${OpenBot.prefix}milking
│║⦁ ${OpenBot.prefix}lactating
│║⦁ ${OpenBot.prefix}pussy
│║⦁ ${OpenBot.prefix}cum
│║⦁ ${OpenBot.prefix}slut
│║⦁ ${OpenBot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${OpenBot.prefix}waifu
│║⦁ ${OpenBot.prefix}swaifu
│║⦁ ${OpenBot.prefix}whats
│║⦁ ${OpenBot.prefix}swhats
│║⦁ ${OpenBot.prefix}shinobu
│║⦁ ${OpenBot.prefix}sshinobu
│║⦁ ${OpenBot.prefix}megumin
│║⦁ ${OpenBot.prefix}smegumin
│║⦁ ${OpenBot.prefix}awoo
│║⦁ ${OpenBot.prefix}sawoo
│║⦁ ${OpenBot.prefix}glomp
│║⦁ ${OpenBot.prefix}sglomp
│║⦁ ${OpenBot.prefix}handhold
│║⦁ ${OpenBot.prefix}shandhold
│║⦁
│║⦁ ${OpenBot.prefix}sbully
│║⦁ ${OpenBot.prefix}scuddle
│║⦁ ${OpenBot.prefix}scry
│║⦁ ${OpenBot.prefix}shug
│║⦁ ${OpenBot.prefix}skiss
│║⦁ ${OpenBot.prefix}slick
│║⦁ ${OpenBot.prefix}spat
│║⦁ ${OpenBot.prefix}ssmug
│║⦁ ${OpenBot.prefix}sbonk
│║⦁ ${OpenBot.prefix}syeet
│║⦁ ${OpenBot.prefix}sblush
│║⦁ ${OpenBot.prefix}ssmile
│║⦁ ${OpenBot.prefix}swave
│║⦁ ${OpenBot.prefix}shighfive
│║⦁ ${OpenBot.prefix}snom
│║⦁ ${OpenBot.prefix}sbite
│║⦁ ${OpenBot.prefix}sslap
│║⦁ ${OpenBot.prefix}skill
│║⦁ ${OpenBot.prefix}skick
│║⦁ ${OpenBot.prefix}shappy
│║⦁ ${OpenBot.prefix}swink
│║⦁ ${OpenBot.prefix}spoke
│║⦁ ${OpenBot.prefix}sdance
│║⦁ ${OpenBot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${OpenBot.prefix}ytpanning
│║⦁ ${OpenBot.prefix}ytbassboost
│║⦁ ${OpenBot.prefix}ytecho
│║⦁ ${OpenBot.prefix}ytflanger
│║⦁ ${OpenBot.prefix}ytnightcore
│║⦁ ${OpenBot.prefix}ytphaser
│║⦁ ${OpenBot.prefix}ytreverse
│║⦁ ${OpenBot.prefix}ytslow
│║⦁ ${OpenBot.prefix}ytspeed
│║⦁ ${OpenBot.prefix}ytsubboost
│║⦁ ${OpenBot.prefix}ytsuperslow
│║⦁ ${OpenBot.prefix}ytsuperspeed
│║⦁ ${OpenBot.prefix}ytsurround
│║⦁ ${OpenBot.prefix}ytvaporwave
│║⦁ ${OpenBot.prefix}ytvibrato
┕╚═════⋑`,
    OpenBot.display
  );
};

module.exports.aliases = thisfilealias;
