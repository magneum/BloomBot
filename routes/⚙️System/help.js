//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of you
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = Foxbot.speed();
  latensie = Foxbot.speed() - timestampe;
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
    Foxbot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (Foxbot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (Foxbot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await Foxbot.imagebutton(
    Foxbot,
    Foxchat,
    `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
> ⒸFoxbot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${Foxbot.os.release()}
║⦁ *💻OS Type:*   ${Foxbot.os.type()}
║⦁ *📂Directory:*  ${Foxbot.os.homedir()}
║⦁ *⚡Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${Foxbot.os.platform()}
║⦁ *🆓Free memory:* ${Foxbot.os.freemem()}
║⦁ *💾Total memory:* ${Foxbot.os.totalmem()}
║⦁ *🏠Host device :* ${Foxbot.os.hostname()}
║⦁ *📋OS Version:* ${Foxbot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${Foxbot.prefix}emotionslist
║⦁ 📢 ${Foxbot.prefix}audiofilterlist
║⦁ 📼 ${Foxbot.prefix}conversionlist
║⦁ 📥 ${Foxbot.prefix}downloadlist
║⦁ 💰 ${Foxbot.prefix}gameslist
║⦁ 🔰 ${Foxbot.prefix}grouplist
║⦁ 🍁 ${Foxbot.prefix}ownerlist
║⦁ 🖼️ ${Foxbot.prefix}photolist
║⦁ 🔎 ${Foxbot.prefix}searchlist
║⦁ ⭕ ${Foxbot.prefix}ytfilterlist
║⦁ 🦄 ${Foxbot.prefix}sfwlist
║⦁ 🍑 ${Foxbot.prefix}hentailist
║⦁ 👅 ${Foxbot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${Foxbot.prefix}ban
│║⦁ ${Foxbot.prefix}broadcast
│║⦁ ${Foxbot.prefix}join
│║⦁ ${Foxbot.prefix}leave
│║⦁ ${Foxbot.prefix}reboot
│║⦁ ${Foxbot.prefix}rules
│║⦁ ${Foxbot.prefix}unban
│║⦁ ${Foxbot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${Foxbot.prefix}panning
│║⦁ ${Foxbot.prefix}bassboost
│║⦁ ${Foxbot.prefix}echo
│║⦁ ${Foxbot.prefix}fast
│║⦁ ${Foxbot.prefix}flanger
│║⦁ ${Foxbot.prefix}nightcore
│║⦁ ${Foxbot.prefix}phaser
│║⦁ ${Foxbot.prefix}reverse
│║⦁ ${Foxbot.prefix}slow
│║⦁ ${Foxbot.prefix}speed
│║⦁ ${Foxbot.prefix}subboost
│║⦁ ${Foxbot.prefix}superslow
│║⦁ ${Foxbot.prefix}superspeed
│║⦁ ${Foxbot.prefix}surround
│║⦁ ${Foxbot.prefix}vaporwave
│║⦁ ${Foxbot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${Foxbot.prefix}carbon
│║⦁ ${Foxbot.prefix}ship
│║⦁ ${Foxbot.prefix}sticker
│║⦁ ${Foxbot.prefix}tinyurl
│║⦁ ${Foxbot.prefix}tourl
│║⦁ ${Foxbot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${Foxbot.prefix}yta
│║⦁ ${Foxbot.prefix}play
│║⦁ ${Foxbot.prefix}song
│║⦁ ${Foxbot.prefix}sing
│║⦁ ${Foxbot.prefix}ytmp3
│║⦁ ${Foxbot.prefix}music
│║⦁ ${Foxbot.prefix}ytplay
│║⦁ ${Foxbot.prefix}ytaudio
│║⦁ ${Foxbot.prefix}ytmusic
│║⦁ ${Foxbot.prefix}youtubemusic
│║⦁ 
│║⦁ ${Foxbot.prefix}ytv
│║⦁ ${Foxbot.prefix}watch
│║⦁ ${Foxbot.prefix}stream
│║⦁ ${Foxbot.prefix}ytmp4
│║⦁ ${Foxbot.prefix}video
│║⦁ ${Foxbot.prefix}ytwatch
│║⦁ ${Foxbot.prefix}ytvideo
│║⦁ ${Foxbot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${Foxbot.prefix}bite
│║⦁ ${Foxbot.prefix}blush
│║⦁ ${Foxbot.prefix}bonk
│║⦁ ${Foxbot.prefix}bored
│║⦁ ${Foxbot.prefix}confused
│║⦁ ${Foxbot.prefix}cry
│║⦁ ${Foxbot.prefix}cuddle
│║⦁ ${Foxbot.prefix}dance
│║⦁ ${Foxbot.prefix}goodnight
│║⦁ ${Foxbot.prefix}happy
│║⦁ ${Foxbot.prefix}highfive
│║⦁ ${Foxbot.prefix}hug
│║⦁ ${Foxbot.prefix}kill
│║⦁ ${Foxbot.prefix}kiss
│║⦁ ${Foxbot.prefix}nervous
│║⦁ ${Foxbot.prefix}pat
│║⦁ ${Foxbot.prefix}poke
│║⦁ ${Foxbot.prefix}punch
│║⦁ ${Foxbot.prefix}sad
│║⦁ ${Foxbot.prefix}scream
│║⦁ ${Foxbot.prefix}slap
│║⦁ ${Foxbot.prefix}smile
│║⦁ ${Foxbot.prefix}stare
│║⦁ ${Foxbot.prefix}wave
│║⦁ ${Foxbot.prefix}wink
│║⦁ ${Foxbot.prefix}yeet
│║⦁ ${Foxbot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${Foxbot.prefix}balance
│║⦁ ${Foxbot.prefix}buy
│║⦁ ${Foxbot.prefix}daily
│║⦁ ${Foxbot.prefix}fish
│║⦁ ${Foxbot.prefix}gamble
│║⦁ ${Foxbot.prefix}inv
│║⦁ ${Foxbot.prefix}pay
│║⦁ ${Foxbot.prefix}rob
│║⦁ ${Foxbot.prefix}store
│║⦁ ${Foxbot.prefix}work
│║⦁ ${Foxbot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${Foxbot.prefix}antilink
│║⦁ ${Foxbot.prefix}allownsfw
│║⦁ ${Foxbot.prefix}delete
│║⦁ ${Foxbot.prefix}group
│║⦁ ${Foxbot.prefix}kick
│║⦁ ${Foxbot.prefix}promote
│║⦁ ${Foxbot.prefix}setdesc
│║⦁ ${Foxbot.prefix}seticon
│║⦁ ${Foxbot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
│║⦁ ${Foxbot.prefix}image
│║⦁ ${Foxbot.prefix}unsplash
│║⦁ ${Foxbot.prefix}pinterest
│║⦁ ${Foxbot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${Foxbot.prefix}advice
│║⦁ ${Foxbot.prefix}anime
│║⦁ ${Foxbot.prefix}chordlist
│║⦁ ${Foxbot.prefix}fact
│║⦁ ${Foxbot.prefix}getchord
│║⦁ ${Foxbot.prefix}gify
│║⦁ ${Foxbot.prefix}google
│║⦁ ${Foxbot.prefix}instagram
│║⦁ ${Foxbot.prefix}joke
│║⦁ ${Foxbot.prefix}lyrics
│║⦁ ${Foxbot.prefix}manga
│║⦁ ${Foxbot.prefix}meme
│║⦁ ${Foxbot.prefix}pokedex
│║⦁ ${Foxbot.prefix}quote
│║⦁ ${Foxbot.prefix}reddit
│║⦁ ${Foxbot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${Foxbot.prefix}ass
│║⦁ ${Foxbot.prefix}bdsm
│║⦁ ${Foxbot.prefix}blowjob
│║⦁ ${Foxbot.prefix}cum
│║⦁ ${Foxbot.prefix}doujin
│║⦁ ${Foxbot.prefix}feet
│║⦁ ${Foxbot.prefix}femdom  
│║⦁ ${Foxbot.prefix}Foxgirl  
│║⦁ ${Foxbot.prefix}glasses  
│║⦁ ${Foxbot.prefix}hentai
│║⦁ ${Foxbot.prefix}maid
│║⦁ ${Foxbot.prefix}masturbation
│║⦁ ${Foxbot.prefix}netorare
│║⦁ ${Foxbot.prefix}orgy
│║⦁ ${Foxbot.prefix}panties
│║⦁ ${Foxbot.prefix}pussy
│║⦁ ${Foxbot.prefix}school
│║⦁ ${Foxbot.prefix}succubus
│║⦁ ${Foxbot.prefix}tentacles
│║⦁ ${Foxbot.prefix}thighs
│║⦁ ${Foxbot.prefix}uglyBastard
│║⦁ ${Foxbot.prefix}uniform
│║⦁ ${Foxbot.prefix}yuri
│║⦁ ${Foxbot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${Foxbot.prefix}nsfw
│║⦁ ${Foxbot.prefix}nsfw2
│║⦁ ${Foxbot.prefix}bonermaterial
│║⦁ ${Foxbot.prefix}nsfw411
│║⦁ ${Foxbot.prefix}iwanttofuckher
│║⦁ ${Foxbot.prefix}exxxtras
│║⦁ ${Foxbot.prefix}distension
│║⦁ ${Foxbot.prefix}bimbofetish
│║⦁ ${Foxbot.prefix}christiangirls
│║⦁ ${Foxbot.prefix}dirtygaming
│║⦁ ${Foxbot.prefix}sexybutnotporn
│║⦁ ${Foxbot.prefix}femalepov
│║⦁ ${Foxbot.prefix}omgbeckylookathiscock
│║⦁ ${Foxbot.prefix}sexygirls
│║⦁ ${Foxbot.prefix}breedingmaterial
│║⦁ ${Foxbot.prefix}canthold
│║⦁ ${Foxbot.prefix}toocuteforporn
│║⦁ ${Foxbot.prefix}justhotwomen
│║⦁ ${Foxbot.prefix}stripgirls
│║⦁ ${Foxbot.prefix}hotstuffnsfw
│║⦁ ${Foxbot.prefix}uncommonposes
│║⦁ ${Foxbot.prefix}gifsofremoval
│║⦁ ${Foxbot.prefix}nostalgiafapping
│║⦁ ${Foxbot.prefix}truefmk
│║⦁ ${Foxbot.prefix}nudes
│║⦁ ${Foxbot.prefix}4k
│║⦁ ${Foxbot.prefix}realgirls
│║⦁ ${Foxbot.prefix}blowjobs
│║⦁ ${Foxbot.prefix}milf
│║⦁ ${Foxbot.prefix}milk
│║⦁ ${Foxbot.prefix}milking
│║⦁ ${Foxbot.prefix}lactating
│║⦁ ${Foxbot.prefix}pussy
│║⦁ ${Foxbot.prefix}cum
│║⦁ ${Foxbot.prefix}slut
│║⦁ ${Foxbot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${Foxbot.prefix}waifu
│║⦁ ${Foxbot.prefix}swaifu
│║⦁ ${Foxbot.prefix}neko
│║⦁ ${Foxbot.prefix}sneko
│║⦁ ${Foxbot.prefix}shinobu
│║⦁ ${Foxbot.prefix}sshinobu
│║⦁ ${Foxbot.prefix}megumin
│║⦁ ${Foxbot.prefix}smegumin
│║⦁ ${Foxbot.prefix}awoo
│║⦁ ${Foxbot.prefix}sawoo
│║⦁ ${Foxbot.prefix}glomp
│║⦁ ${Foxbot.prefix}sglomp
│║⦁ ${Foxbot.prefix}handhold
│║⦁ ${Foxbot.prefix}shandhold
│║⦁
│║⦁ ${Foxbot.prefix}sbully
│║⦁ ${Foxbot.prefix}scuddle
│║⦁ ${Foxbot.prefix}scry
│║⦁ ${Foxbot.prefix}shug
│║⦁ ${Foxbot.prefix}skiss
│║⦁ ${Foxbot.prefix}slick
│║⦁ ${Foxbot.prefix}spat
│║⦁ ${Foxbot.prefix}ssmug
│║⦁ ${Foxbot.prefix}sbonk
│║⦁ ${Foxbot.prefix}syeet
│║⦁ ${Foxbot.prefix}sblush
│║⦁ ${Foxbot.prefix}ssmile
│║⦁ ${Foxbot.prefix}swave
│║⦁ ${Foxbot.prefix}shighfive
│║⦁ ${Foxbot.prefix}snom
│║⦁ ${Foxbot.prefix}sbite
│║⦁ ${Foxbot.prefix}sslap
│║⦁ ${Foxbot.prefix}skill
│║⦁ ${Foxbot.prefix}skick
│║⦁ ${Foxbot.prefix}shappy
│║⦁ ${Foxbot.prefix}swink
│║⦁ ${Foxbot.prefix}spoke
│║⦁ ${Foxbot.prefix}sdance
│║⦁ ${Foxbot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${Foxbot.prefix}ytpanning
│║⦁ ${Foxbot.prefix}ytbassboost
│║⦁ ${Foxbot.prefix}ytecho
│║⦁ ${Foxbot.prefix}ytflanger
│║⦁ ${Foxbot.prefix}ytnightcore
│║⦁ ${Foxbot.prefix}ytphaser
│║⦁ ${Foxbot.prefix}ytreverse
│║⦁ ${Foxbot.prefix}ytslow
│║⦁ ${Foxbot.prefix}ytspeed
│║⦁ ${Foxbot.prefix}ytsubboost
│║⦁ ${Foxbot.prefix}ytsuperslow
│║⦁ ${Foxbot.prefix}ytsuperspeed
│║⦁ ${Foxbot.prefix}ytsurround
│║⦁ ${Foxbot.prefix}ytvaporwave
│║⦁ ${Foxbot.prefix}ytvibrato
┕╚═════⋑`,
    Foxbot.display
  );
};
