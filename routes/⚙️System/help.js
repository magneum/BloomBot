//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of you
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
thisfilealias = ["list", "menu"];
module.exports = async (
  NekoBot,
  nekos,
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
  timestampe = NekoBot.speed();
  latensie = NekoBot.speed() - timestampe;
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
    NekoBot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (NekoBot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (NekoBot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await NekoBot.imagebutton(
    NekoBot,
    nekos,
    `*🔖Here, ${finalname} for ${NekoBot.pushname || NekoBot.Tname}:*
> ⒸNekoBot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${NekoBot.os.release()}
║⦁ *💻OS Type:*   ${NekoBot.os.type()}
║⦁ *📂Directory:*  ${NekoBot.os.homedir()}
║⦁ *⚡Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${NekoBot.os.platform()}
║⦁ *🆓Free memory:* ${NekoBot.os.freemem()}
║⦁ *💾Total memory:* ${NekoBot.os.totalmem()}
║⦁ *🏠Host device :* ${NekoBot.os.hostname()}
║⦁ *📋OS Version:* ${NekoBot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${NekoBot.prefix}emotionslist
║⦁ 📢 ${NekoBot.prefix}audiofilterlist
║⦁ 📼 ${NekoBot.prefix}conversionlist
║⦁ 📥 ${NekoBot.prefix}downloadlist
║⦁ 💰 ${NekoBot.prefix}gameslist
║⦁ 🔰 ${NekoBot.prefix}grouplist
║⦁ 🍁 ${NekoBot.prefix}ownerlist
║⦁ 🖼️ ${NekoBot.prefix}photolist
║⦁ 🔎 ${NekoBot.prefix}searchlist
║⦁ ⭕ ${NekoBot.prefix}ytfilterlist
║⦁ 🦄 ${NekoBot.prefix}sfwlist
║⦁ 🍑 ${NekoBot.prefix}hentailist
║⦁ 👅 ${NekoBot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${NekoBot.prefix}ban
│║⦁ ${NekoBot.prefix}broadcast
│║⦁ ${NekoBot.prefix}join
│║⦁ ${NekoBot.prefix}leave
│║⦁ ${NekoBot.prefix}reboot
│║⦁ ${NekoBot.prefix}rules
│║⦁ ${NekoBot.prefix}unban
│║⦁ ${NekoBot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${NekoBot.prefix}panning
│║⦁ ${NekoBot.prefix}bassboost
│║⦁ ${NekoBot.prefix}echo
│║⦁ ${NekoBot.prefix}fast
│║⦁ ${NekoBot.prefix}flanger
│║⦁ ${NekoBot.prefix}nightcore
│║⦁ ${NekoBot.prefix}phaser
│║⦁ ${NekoBot.prefix}reverse
│║⦁ ${NekoBot.prefix}slow
│║⦁ ${NekoBot.prefix}speed
│║⦁ ${NekoBot.prefix}subboost
│║⦁ ${NekoBot.prefix}superslow
│║⦁ ${NekoBot.prefix}superspeed
│║⦁ ${NekoBot.prefix}surround
│║⦁ ${NekoBot.prefix}vaporwave
│║⦁ ${NekoBot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${NekoBot.prefix}carbon
│║⦁ ${NekoBot.prefix}ship
│║⦁ ${NekoBot.prefix}sticker
│║⦁ ${NekoBot.prefix}tinyurl
│║⦁ ${NekoBot.prefix}tourl
│║⦁ ${NekoBot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${NekoBot.prefix}yta
│║⦁ ${NekoBot.prefix}play
│║⦁ ${NekoBot.prefix}song
│║⦁ ${NekoBot.prefix}sing
│║⦁ ${NekoBot.prefix}ytmp3
│║⦁ ${NekoBot.prefix}music
│║⦁ ${NekoBot.prefix}ytplay
│║⦁ ${NekoBot.prefix}ytaudio
│║⦁ ${NekoBot.prefix}ytmusic
│║⦁ ${NekoBot.prefix}youtubemusic
│║⦁ 
│║⦁ ${NekoBot.prefix}ytv
│║⦁ ${NekoBot.prefix}watch
│║⦁ ${NekoBot.prefix}stream
│║⦁ ${NekoBot.prefix}ytmp4
│║⦁ ${NekoBot.prefix}video
│║⦁ ${NekoBot.prefix}ytwatch
│║⦁ ${NekoBot.prefix}ytvideo
│║⦁ ${NekoBot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${NekoBot.prefix}bite
│║⦁ ${NekoBot.prefix}blush
│║⦁ ${NekoBot.prefix}bonk
│║⦁ ${NekoBot.prefix}bored
│║⦁ ${NekoBot.prefix}confused
│║⦁ ${NekoBot.prefix}cry
│║⦁ ${NekoBot.prefix}cuddle
│║⦁ ${NekoBot.prefix}dance
│║⦁ ${NekoBot.prefix}goodnight
│║⦁ ${NekoBot.prefix}happy
│║⦁ ${NekoBot.prefix}highfive
│║⦁ ${NekoBot.prefix}hug
│║⦁ ${NekoBot.prefix}kill
│║⦁ ${NekoBot.prefix}kiss
│║⦁ ${NekoBot.prefix}nervous
│║⦁ ${NekoBot.prefix}pat
│║⦁ ${NekoBot.prefix}poke
│║⦁ ${NekoBot.prefix}punch
│║⦁ ${NekoBot.prefix}sad
│║⦁ ${NekoBot.prefix}scream
│║⦁ ${NekoBot.prefix}slap
│║⦁ ${NekoBot.prefix}smile
│║⦁ ${NekoBot.prefix}stare
│║⦁ ${NekoBot.prefix}wave
│║⦁ ${NekoBot.prefix}wink
│║⦁ ${NekoBot.prefix}yeet
│║⦁ ${NekoBot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${NekoBot.prefix}balance
│║⦁ ${NekoBot.prefix}buy
│║⦁ ${NekoBot.prefix}daily
│║⦁ ${NekoBot.prefix}fish
│║⦁ ${NekoBot.prefix}gamble
│║⦁ ${NekoBot.prefix}inv
│║⦁ ${NekoBot.prefix}pay
│║⦁ ${NekoBot.prefix}rob
│║⦁ ${NekoBot.prefix}store
│║⦁ ${NekoBot.prefix}work
│║⦁ ${NekoBot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${NekoBot.prefix}antilink
│║⦁ ${NekoBot.prefix}allownsfw
│║⦁ ${NekoBot.prefix}delete
│║⦁ ${NekoBot.prefix}group
│║⦁ ${NekoBot.prefix}kick
│║⦁ ${NekoBot.prefix}promote
│║⦁ ${NekoBot.prefix}setdesc
│║⦁ ${NekoBot.prefix}seticon
│║⦁ ${NekoBot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
│║⦁ ${NekoBot.prefix}image
│║⦁ ${NekoBot.prefix}unsplash
│║⦁ ${NekoBot.prefix}pinterest
│║⦁ ${NekoBot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${NekoBot.prefix}advice
│║⦁ ${NekoBot.prefix}anime
│║⦁ ${NekoBot.prefix}chordlist
│║⦁ ${NekoBot.prefix}fact
│║⦁ ${NekoBot.prefix}getchord
│║⦁ ${NekoBot.prefix}gify
│║⦁ ${NekoBot.prefix}google
│║⦁ ${NekoBot.prefix}instagram
│║⦁ ${NekoBot.prefix}joke
│║⦁ ${NekoBot.prefix}lyrics
│║⦁ ${NekoBot.prefix}manga
│║⦁ ${NekoBot.prefix}meme
│║⦁ ${NekoBot.prefix}pokedex
│║⦁ ${NekoBot.prefix}quote
│║⦁ ${NekoBot.prefix}reddit
│║⦁ ${NekoBot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${NekoBot.prefix}ass
│║⦁ ${NekoBot.prefix}bdsm
│║⦁ ${NekoBot.prefix}blowjob
│║⦁ ${NekoBot.prefix}cum
│║⦁ ${NekoBot.prefix}doujin
│║⦁ ${NekoBot.prefix}feet
│║⦁ ${NekoBot.prefix}femdom  
│║⦁ ${NekoBot.prefix}nekogirl  
│║⦁ ${NekoBot.prefix}glasses  
│║⦁ ${NekoBot.prefix}hentai
│║⦁ ${NekoBot.prefix}maid
│║⦁ ${NekoBot.prefix}masturbation
│║⦁ ${NekoBot.prefix}netorare
│║⦁ ${NekoBot.prefix}orgy
│║⦁ ${NekoBot.prefix}panties
│║⦁ ${NekoBot.prefix}pussy
│║⦁ ${NekoBot.prefix}school
│║⦁ ${NekoBot.prefix}succubus
│║⦁ ${NekoBot.prefix}tentacles
│║⦁ ${NekoBot.prefix}thighs
│║⦁ ${NekoBot.prefix}uglyBastard
│║⦁ ${NekoBot.prefix}uniform
│║⦁ ${NekoBot.prefix}yuri
│║⦁ ${NekoBot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${NekoBot.prefix}nsfw
│║⦁ ${NekoBot.prefix}nsfw2
│║⦁ ${NekoBot.prefix}bonermaterial
│║⦁ ${NekoBot.prefix}nsfw411
│║⦁ ${NekoBot.prefix}iwanttofuckher
│║⦁ ${NekoBot.prefix}exxxtras
│║⦁ ${NekoBot.prefix}distension
│║⦁ ${NekoBot.prefix}bimbofetish
│║⦁ ${NekoBot.prefix}christiangirls
│║⦁ ${NekoBot.prefix}dirtygaming
│║⦁ ${NekoBot.prefix}sexybutnotporn
│║⦁ ${NekoBot.prefix}femalepov
│║⦁ ${NekoBot.prefix}omgbeckylookathiscock
│║⦁ ${NekoBot.prefix}sexygirls
│║⦁ ${NekoBot.prefix}breedingmaterial
│║⦁ ${NekoBot.prefix}canthold
│║⦁ ${NekoBot.prefix}toocuteforporn
│║⦁ ${NekoBot.prefix}justhotwomen
│║⦁ ${NekoBot.prefix}stripgirls
│║⦁ ${NekoBot.prefix}hotstuffnsfw
│║⦁ ${NekoBot.prefix}uncommonposes
│║⦁ ${NekoBot.prefix}gifsofremoval
│║⦁ ${NekoBot.prefix}nostalgiafapping
│║⦁ ${NekoBot.prefix}truefmk
│║⦁ ${NekoBot.prefix}nudes
│║⦁ ${NekoBot.prefix}4k
│║⦁ ${NekoBot.prefix}realgirls
│║⦁ ${NekoBot.prefix}blowjobs
│║⦁ ${NekoBot.prefix}milf
│║⦁ ${NekoBot.prefix}milk
│║⦁ ${NekoBot.prefix}milking
│║⦁ ${NekoBot.prefix}lactating
│║⦁ ${NekoBot.prefix}pussy
│║⦁ ${NekoBot.prefix}cum
│║⦁ ${NekoBot.prefix}slut
│║⦁ ${NekoBot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${NekoBot.prefix}waifu
│║⦁ ${NekoBot.prefix}swaifu
│║⦁ ${NekoBot.prefix}neko
│║⦁ ${NekoBot.prefix}sneko
│║⦁ ${NekoBot.prefix}shinobu
│║⦁ ${NekoBot.prefix}sshinobu
│║⦁ ${NekoBot.prefix}megumin
│║⦁ ${NekoBot.prefix}smegumin
│║⦁ ${NekoBot.prefix}awoo
│║⦁ ${NekoBot.prefix}sawoo
│║⦁ ${NekoBot.prefix}glomp
│║⦁ ${NekoBot.prefix}sglomp
│║⦁ ${NekoBot.prefix}handhold
│║⦁ ${NekoBot.prefix}shandhold
│║⦁
│║⦁ ${NekoBot.prefix}sbully
│║⦁ ${NekoBot.prefix}scuddle
│║⦁ ${NekoBot.prefix}scry
│║⦁ ${NekoBot.prefix}shug
│║⦁ ${NekoBot.prefix}skiss
│║⦁ ${NekoBot.prefix}slick
│║⦁ ${NekoBot.prefix}spat
│║⦁ ${NekoBot.prefix}ssmug
│║⦁ ${NekoBot.prefix}sbonk
│║⦁ ${NekoBot.prefix}syeet
│║⦁ ${NekoBot.prefix}sblush
│║⦁ ${NekoBot.prefix}ssmile
│║⦁ ${NekoBot.prefix}swave
│║⦁ ${NekoBot.prefix}shighfive
│║⦁ ${NekoBot.prefix}snom
│║⦁ ${NekoBot.prefix}sbite
│║⦁ ${NekoBot.prefix}sslap
│║⦁ ${NekoBot.prefix}skill
│║⦁ ${NekoBot.prefix}skick
│║⦁ ${NekoBot.prefix}shappy
│║⦁ ${NekoBot.prefix}swink
│║⦁ ${NekoBot.prefix}spoke
│║⦁ ${NekoBot.prefix}sdance
│║⦁ ${NekoBot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${NekoBot.prefix}ytpanning
│║⦁ ${NekoBot.prefix}ytbassboost
│║⦁ ${NekoBot.prefix}ytecho
│║⦁ ${NekoBot.prefix}ytflanger
│║⦁ ${NekoBot.prefix}ytnightcore
│║⦁ ${NekoBot.prefix}ytphaser
│║⦁ ${NekoBot.prefix}ytreverse
│║⦁ ${NekoBot.prefix}ytslow
│║⦁ ${NekoBot.prefix}ytspeed
│║⦁ ${NekoBot.prefix}ytsubboost
│║⦁ ${NekoBot.prefix}ytsuperslow
│║⦁ ${NekoBot.prefix}ytsuperspeed
│║⦁ ${NekoBot.prefix}ytsurround
│║⦁ ${NekoBot.prefix}ytvaporwave
│║⦁ ${NekoBot.prefix}ytvibrato
┕╚═════⋑`,
    NekoBot.display
  );
};

module.exports.aliases = thisfilealias;
