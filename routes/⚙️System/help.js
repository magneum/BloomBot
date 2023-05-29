//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of you
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = Voxbot.speed();
  latensie = Voxbot.speed() - timestampe;
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
    Voxbot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (Voxbot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (Voxbot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await Voxbot.imagebutton(
    Voxbot,
    Voxchat,
    `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
> ⒸVoxbot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${Voxbot.os.release()}
║⦁ *💻OS Type:*   ${Voxbot.os.type()}
║⦁ *📂Directory:*  ${Voxbot.os.homedir()}
║⦁ *⚡Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${Voxbot.os.platform()}
║⦁ *🆓Free memory:* ${Voxbot.os.freemem()}
║⦁ *💾Total memory:* ${Voxbot.os.totalmem()}
║⦁ *🏠Host device :* ${Voxbot.os.hostname()}
║⦁ *📋OS Version:* ${Voxbot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${Voxbot.prefix}emotionslist
║⦁ 📢 ${Voxbot.prefix}audiofilterlist
║⦁ 📼 ${Voxbot.prefix}conversionlist
║⦁ 📥 ${Voxbot.prefix}downloadlist
║⦁ 💰 ${Voxbot.prefix}gameslist
║⦁ 🔰 ${Voxbot.prefix}grouplist
║⦁ 🍁 ${Voxbot.prefix}ownerlist
║⦁ 🖼️ ${Voxbot.prefix}photolist
║⦁ 🔎 ${Voxbot.prefix}searchlist
║⦁ ⭕ ${Voxbot.prefix}ytfilterlist
║⦁ 🦄 ${Voxbot.prefix}sfwlist
║⦁ 🍑 ${Voxbot.prefix}hentailist
║⦁ 👅 ${Voxbot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${Voxbot.prefix}ban
│║⦁ ${Voxbot.prefix}broadcast
│║⦁ ${Voxbot.prefix}join
│║⦁ ${Voxbot.prefix}leave
│║⦁ ${Voxbot.prefix}reboot
│║⦁ ${Voxbot.prefix}rules
│║⦁ ${Voxbot.prefix}unban
│║⦁ ${Voxbot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${Voxbot.prefix}panning
│║⦁ ${Voxbot.prefix}bassboost
│║⦁ ${Voxbot.prefix}echo
│║⦁ ${Voxbot.prefix}fast
│║⦁ ${Voxbot.prefix}flanger
│║⦁ ${Voxbot.prefix}nightcore
│║⦁ ${Voxbot.prefix}phaser
│║⦁ ${Voxbot.prefix}reverse
│║⦁ ${Voxbot.prefix}slow
│║⦁ ${Voxbot.prefix}speed
│║⦁ ${Voxbot.prefix}subboost
│║⦁ ${Voxbot.prefix}superslow
│║⦁ ${Voxbot.prefix}superspeed
│║⦁ ${Voxbot.prefix}surround
│║⦁ ${Voxbot.prefix}vaporwave
│║⦁ ${Voxbot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${Voxbot.prefix}carbon
│║⦁ ${Voxbot.prefix}ship
│║⦁ ${Voxbot.prefix}sticker
│║⦁ ${Voxbot.prefix}tinyurl
│║⦁ ${Voxbot.prefix}tourl
│║⦁ ${Voxbot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${Voxbot.prefix}yta
│║⦁ ${Voxbot.prefix}play
│║⦁ ${Voxbot.prefix}song
│║⦁ ${Voxbot.prefix}sing
│║⦁ ${Voxbot.prefix}ytmp3
│║⦁ ${Voxbot.prefix}music
│║⦁ ${Voxbot.prefix}ytplay
│║⦁ ${Voxbot.prefix}ytaudio
│║⦁ ${Voxbot.prefix}ytmusic
│║⦁ ${Voxbot.prefix}youtubemusic
│║⦁ 
│║⦁ ${Voxbot.prefix}ytv
│║⦁ ${Voxbot.prefix}watch
│║⦁ ${Voxbot.prefix}stream
│║⦁ ${Voxbot.prefix}ytmp4
│║⦁ ${Voxbot.prefix}video
│║⦁ ${Voxbot.prefix}ytwatch
│║⦁ ${Voxbot.prefix}ytvideo
│║⦁ ${Voxbot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${Voxbot.prefix}bite
│║⦁ ${Voxbot.prefix}blush
│║⦁ ${Voxbot.prefix}bonk
│║⦁ ${Voxbot.prefix}bored
│║⦁ ${Voxbot.prefix}confused
│║⦁ ${Voxbot.prefix}cry
│║⦁ ${Voxbot.prefix}cuddle
│║⦁ ${Voxbot.prefix}dance
│║⦁ ${Voxbot.prefix}goodnight
│║⦁ ${Voxbot.prefix}happy
│║⦁ ${Voxbot.prefix}highfive
│║⦁ ${Voxbot.prefix}hug
│║⦁ ${Voxbot.prefix}kill
│║⦁ ${Voxbot.prefix}kiss
│║⦁ ${Voxbot.prefix}nervous
│║⦁ ${Voxbot.prefix}pat
│║⦁ ${Voxbot.prefix}poke
│║⦁ ${Voxbot.prefix}punch
│║⦁ ${Voxbot.prefix}sad
│║⦁ ${Voxbot.prefix}scream
│║⦁ ${Voxbot.prefix}slap
│║⦁ ${Voxbot.prefix}smile
│║⦁ ${Voxbot.prefix}stare
│║⦁ ${Voxbot.prefix}wave
│║⦁ ${Voxbot.prefix}wink
│║⦁ ${Voxbot.prefix}yeet
│║⦁ ${Voxbot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${Voxbot.prefix}balance
│║⦁ ${Voxbot.prefix}buy
│║⦁ ${Voxbot.prefix}daily
│║⦁ ${Voxbot.prefix}fish
│║⦁ ${Voxbot.prefix}gamble
│║⦁ ${Voxbot.prefix}inv
│║⦁ ${Voxbot.prefix}pay
│║⦁ ${Voxbot.prefix}rob
│║⦁ ${Voxbot.prefix}store
│║⦁ ${Voxbot.prefix}work
│║⦁ ${Voxbot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${Voxbot.prefix}antilink
│║⦁ ${Voxbot.prefix}allownsfw
│║⦁ ${Voxbot.prefix}delete
│║⦁ ${Voxbot.prefix}group
│║⦁ ${Voxbot.prefix}kick
│║⦁ ${Voxbot.prefix}promote
│║⦁ ${Voxbot.prefix}setdesc
│║⦁ ${Voxbot.prefix}seticon
│║⦁ ${Voxbot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
│║⦁ ${Voxbot.prefix}image
│║⦁ ${Voxbot.prefix}unsplash
│║⦁ ${Voxbot.prefix}pinterest
│║⦁ ${Voxbot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${Voxbot.prefix}advice
│║⦁ ${Voxbot.prefix}anime
│║⦁ ${Voxbot.prefix}chordlist
│║⦁ ${Voxbot.prefix}fact
│║⦁ ${Voxbot.prefix}getchord
│║⦁ ${Voxbot.prefix}gify
│║⦁ ${Voxbot.prefix}google
│║⦁ ${Voxbot.prefix}instagram
│║⦁ ${Voxbot.prefix}joke
│║⦁ ${Voxbot.prefix}lyrics
│║⦁ ${Voxbot.prefix}manga
│║⦁ ${Voxbot.prefix}meme
│║⦁ ${Voxbot.prefix}pokedex
│║⦁ ${Voxbot.prefix}quote
│║⦁ ${Voxbot.prefix}reddit
│║⦁ ${Voxbot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${Voxbot.prefix}ass
│║⦁ ${Voxbot.prefix}bdsm
│║⦁ ${Voxbot.prefix}blowjob
│║⦁ ${Voxbot.prefix}cum
│║⦁ ${Voxbot.prefix}doujin
│║⦁ ${Voxbot.prefix}feet
│║⦁ ${Voxbot.prefix}femdom  
│║⦁ ${Voxbot.prefix}Voxgirl  
│║⦁ ${Voxbot.prefix}glasses  
│║⦁ ${Voxbot.prefix}hentai
│║⦁ ${Voxbot.prefix}maid
│║⦁ ${Voxbot.prefix}masturbation
│║⦁ ${Voxbot.prefix}netorare
│║⦁ ${Voxbot.prefix}orgy
│║⦁ ${Voxbot.prefix}panties
│║⦁ ${Voxbot.prefix}pussy
│║⦁ ${Voxbot.prefix}school
│║⦁ ${Voxbot.prefix}succubus
│║⦁ ${Voxbot.prefix}tentacles
│║⦁ ${Voxbot.prefix}thighs
│║⦁ ${Voxbot.prefix}uglyBastard
│║⦁ ${Voxbot.prefix}uniform
│║⦁ ${Voxbot.prefix}yuri
│║⦁ ${Voxbot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${Voxbot.prefix}nsfw
│║⦁ ${Voxbot.prefix}nsfw2
│║⦁ ${Voxbot.prefix}bonermaterial
│║⦁ ${Voxbot.prefix}nsfw411
│║⦁ ${Voxbot.prefix}iwanttofuckher
│║⦁ ${Voxbot.prefix}exxxtras
│║⦁ ${Voxbot.prefix}distension
│║⦁ ${Voxbot.prefix}bimbofetish
│║⦁ ${Voxbot.prefix}christiangirls
│║⦁ ${Voxbot.prefix}dirtygaming
│║⦁ ${Voxbot.prefix}sexybutnotporn
│║⦁ ${Voxbot.prefix}femalepov
│║⦁ ${Voxbot.prefix}omgbeckylookathiscock
│║⦁ ${Voxbot.prefix}sexygirls
│║⦁ ${Voxbot.prefix}breedingmaterial
│║⦁ ${Voxbot.prefix}canthold
│║⦁ ${Voxbot.prefix}toocuteforporn
│║⦁ ${Voxbot.prefix}justhotwomen
│║⦁ ${Voxbot.prefix}stripgirls
│║⦁ ${Voxbot.prefix}hotstuffnsfw
│║⦁ ${Voxbot.prefix}uncommonposes
│║⦁ ${Voxbot.prefix}gifsofremoval
│║⦁ ${Voxbot.prefix}nostalgiafapping
│║⦁ ${Voxbot.prefix}truefmk
│║⦁ ${Voxbot.prefix}nudes
│║⦁ ${Voxbot.prefix}4k
│║⦁ ${Voxbot.prefix}realgirls
│║⦁ ${Voxbot.prefix}blowjobs
│║⦁ ${Voxbot.prefix}milf
│║⦁ ${Voxbot.prefix}milk
│║⦁ ${Voxbot.prefix}milking
│║⦁ ${Voxbot.prefix}lactating
│║⦁ ${Voxbot.prefix}pussy
│║⦁ ${Voxbot.prefix}cum
│║⦁ ${Voxbot.prefix}slut
│║⦁ ${Voxbot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${Voxbot.prefix}waifu
│║⦁ ${Voxbot.prefix}swaifu
│║⦁ ${Voxbot.prefix}neko
│║⦁ ${Voxbot.prefix}sneko
│║⦁ ${Voxbot.prefix}shinobu
│║⦁ ${Voxbot.prefix}sshinobu
│║⦁ ${Voxbot.prefix}megumin
│║⦁ ${Voxbot.prefix}smegumin
│║⦁ ${Voxbot.prefix}awoo
│║⦁ ${Voxbot.prefix}sawoo
│║⦁ ${Voxbot.prefix}glomp
│║⦁ ${Voxbot.prefix}sglomp
│║⦁ ${Voxbot.prefix}handhold
│║⦁ ${Voxbot.prefix}shandhold
│║⦁
│║⦁ ${Voxbot.prefix}sbully
│║⦁ ${Voxbot.prefix}scuddle
│║⦁ ${Voxbot.prefix}scry
│║⦁ ${Voxbot.prefix}shug
│║⦁ ${Voxbot.prefix}skiss
│║⦁ ${Voxbot.prefix}slick
│║⦁ ${Voxbot.prefix}spat
│║⦁ ${Voxbot.prefix}ssmug
│║⦁ ${Voxbot.prefix}sbonk
│║⦁ ${Voxbot.prefix}syeet
│║⦁ ${Voxbot.prefix}sblush
│║⦁ ${Voxbot.prefix}ssmile
│║⦁ ${Voxbot.prefix}swave
│║⦁ ${Voxbot.prefix}shighfive
│║⦁ ${Voxbot.prefix}snom
│║⦁ ${Voxbot.prefix}sbite
│║⦁ ${Voxbot.prefix}sslap
│║⦁ ${Voxbot.prefix}skill
│║⦁ ${Voxbot.prefix}skick
│║⦁ ${Voxbot.prefix}shappy
│║⦁ ${Voxbot.prefix}swink
│║⦁ ${Voxbot.prefix}spoke
│║⦁ ${Voxbot.prefix}sdance
│║⦁ ${Voxbot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${Voxbot.prefix}ytpanning
│║⦁ ${Voxbot.prefix}ytbassboost
│║⦁ ${Voxbot.prefix}ytecho
│║⦁ ${Voxbot.prefix}ytflanger
│║⦁ ${Voxbot.prefix}ytnightcore
│║⦁ ${Voxbot.prefix}ytphaser
│║⦁ ${Voxbot.prefix}ytreverse
│║⦁ ${Voxbot.prefix}ytslow
│║⦁ ${Voxbot.prefix}ytspeed
│║⦁ ${Voxbot.prefix}ytsubboost
│║⦁ ${Voxbot.prefix}ytsuperslow
│║⦁ ${Voxbot.prefix}ytsuperspeed
│║⦁ ${Voxbot.prefix}ytsurround
│║⦁ ${Voxbot.prefix}ytvaporwave
│║⦁ ${Voxbot.prefix}ytvibrato
┕╚═════⋑`,
    Voxbot.display
  );
};
