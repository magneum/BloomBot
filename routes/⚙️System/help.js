//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of you
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
thisfilealias = ["list", "menu"];
module.exports = async (
  Nekobot,
  Nekos,
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
  timestampe = Nekobot.speed();
  latensie = Nekobot.speed() - timestampe;
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
    Nekobot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (Nekobot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (Nekobot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await Nekobot.imagebutton(
    Nekobot,
    Nekos,
    `*🔖Here, ${finalname} for ${Nekobot.pushname || Nekobot.Tname}:*
> ⒸNekobot: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./routes")}


╔═☰ *❗ CONSOLE*
║⦁ *⏲️Uptime :* ${runtime(process.uptime())}
║⦁ *💻OS Release:* ${Nekobot.os.release()}
║⦁ *💻OS Type:*   ${Nekobot.os.type()}
║⦁ *📂Directory:*  ${Nekobot.os.homedir()}
║⦁ *⚡Speed :* ${latensie.toFixed(4)} sec
║⦁ *🖥️Ram Usage :* ${ramUsage}
║⦁ *🌐Platform :* ${Nekobot.os.platform()}
║⦁ *🆓Free memory:* ${Nekobot.os.freemem()}
║⦁ *💾Total memory:* ${Nekobot.os.totalmem()}
║⦁ *🏠Host device :* ${Nekobot.os.hostname()}
║⦁ *📋OS Version:* ${Nekobot.os.version()}
╚═☰
╔═☰ *❕ COMMANDS*
║⦁ 🐉 ${Nekobot.prefix}emotionslist
║⦁ 📢 ${Nekobot.prefix}audiofilterlist
║⦁ 📼 ${Nekobot.prefix}conversionlist
║⦁ 📥 ${Nekobot.prefix}downloadlist
║⦁ 💰 ${Nekobot.prefix}gameslist
║⦁ 🔰 ${Nekobot.prefix}grouplist
║⦁ 🍁 ${Nekobot.prefix}ownerlist
║⦁ 🖼️ ${Nekobot.prefix}photolist
║⦁ 🔎 ${Nekobot.prefix}searchlist
║⦁ ⭕ ${Nekobot.prefix}ytfilterlist
║⦁ 🦄 ${Nekobot.prefix}sfwlist
║⦁ 🍑 ${Nekobot.prefix}hentailist
║⦁ 👅 ${Nekobot.prefix}nsfwlist
╚══════⋑



┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
│║⦁ ${Nekobot.prefix}ban
│║⦁ ${Nekobot.prefix}broadcast
│║⦁ ${Nekobot.prefix}join
│║⦁ ${Nekobot.prefix}leave
│║⦁ ${Nekobot.prefix}reboot
│║⦁ ${Nekobot.prefix}rules
│║⦁ ${Nekobot.prefix}unban
│║⦁ ${Nekobot.prefix}verify
┕╚═☰
┌╔═☰ *📢${finalname.toUpperCase()}📢*
│║⦁ ${Nekobot.prefix}panning
│║⦁ ${Nekobot.prefix}bassboost
│║⦁ ${Nekobot.prefix}echo
│║⦁ ${Nekobot.prefix}fast
│║⦁ ${Nekobot.prefix}flanger
│║⦁ ${Nekobot.prefix}nightcore
│║⦁ ${Nekobot.prefix}phaser
│║⦁ ${Nekobot.prefix}reverse
│║⦁ ${Nekobot.prefix}slow
│║⦁ ${Nekobot.prefix}speed
│║⦁ ${Nekobot.prefix}subboost
│║⦁ ${Nekobot.prefix}superslow
│║⦁ ${Nekobot.prefix}superspeed
│║⦁ ${Nekobot.prefix}surround
│║⦁ ${Nekobot.prefix}vaporwave
│║⦁ ${Nekobot.prefix}vibrato
┕╚═☰
┌╔═☰ *📼${finalname.toUpperCase()}📼*
│║⦁ ${Nekobot.prefix}carbon
│║⦁ ${Nekobot.prefix}ship
│║⦁ ${Nekobot.prefix}sticker
│║⦁ ${Nekobot.prefix}tinyurl
│║⦁ ${Nekobot.prefix}tourl
│║⦁ ${Nekobot.prefix}tts
┕╚═☰
┌╔═☰ *📥${finalname.toUpperCase()}📥* 
│║⦁ ${Nekobot.prefix}yta
│║⦁ ${Nekobot.prefix}play
│║⦁ ${Nekobot.prefix}song
│║⦁ ${Nekobot.prefix}sing
│║⦁ ${Nekobot.prefix}ytmp3
│║⦁ ${Nekobot.prefix}music
│║⦁ ${Nekobot.prefix}ytplay
│║⦁ ${Nekobot.prefix}ytaudio
│║⦁ ${Nekobot.prefix}ytmusic
│║⦁ ${Nekobot.prefix}youtubemusic
│║⦁ 
│║⦁ ${Nekobot.prefix}ytv
│║⦁ ${Nekobot.prefix}watch
│║⦁ ${Nekobot.prefix}stream
│║⦁ ${Nekobot.prefix}ytmp4
│║⦁ ${Nekobot.prefix}video
│║⦁ ${Nekobot.prefix}ytwatch
│║⦁ ${Nekobot.prefix}ytvideo
│║⦁ ${Nekobot.prefix}youtubevideo
┕╚═☰
┌╔═☰ *🐉${finalname.toUpperCase()}🐉* 
│║⦁ ${Nekobot.prefix}bite
│║⦁ ${Nekobot.prefix}blush
│║⦁ ${Nekobot.prefix}bonk
│║⦁ ${Nekobot.prefix}bored
│║⦁ ${Nekobot.prefix}confused
│║⦁ ${Nekobot.prefix}cry
│║⦁ ${Nekobot.prefix}cuddle
│║⦁ ${Nekobot.prefix}dance
│║⦁ ${Nekobot.prefix}goodnight
│║⦁ ${Nekobot.prefix}happy
│║⦁ ${Nekobot.prefix}highfive
│║⦁ ${Nekobot.prefix}hug
│║⦁ ${Nekobot.prefix}kill
│║⦁ ${Nekobot.prefix}kiss
│║⦁ ${Nekobot.prefix}nervous
│║⦁ ${Nekobot.prefix}pat
│║⦁ ${Nekobot.prefix}poke
│║⦁ ${Nekobot.prefix}punch
│║⦁ ${Nekobot.prefix}sad
│║⦁ ${Nekobot.prefix}scream
│║⦁ ${Nekobot.prefix}slap
│║⦁ ${Nekobot.prefix}smile
│║⦁ ${Nekobot.prefix}stare
│║⦁ ${Nekobot.prefix}wave
│║⦁ ${Nekobot.prefix}wink
│║⦁ ${Nekobot.prefix}yeet
│║⦁ ${Nekobot.prefix}yes
┕╚═☰
┌╔═☰ *💰${finalname.toUpperCase()}💰* 
│║⦁ ${Nekobot.prefix}balance
│║⦁ ${Nekobot.prefix}buy
│║⦁ ${Nekobot.prefix}daily
│║⦁ ${Nekobot.prefix}fish
│║⦁ ${Nekobot.prefix}gamble
│║⦁ ${Nekobot.prefix}inv
│║⦁ ${Nekobot.prefix}pay
│║⦁ ${Nekobot.prefix}rob
│║⦁ ${Nekobot.prefix}store
│║⦁ ${Nekobot.prefix}work
│║⦁ ${Nekobot.prefix}zoo
┕╚═☰
┌╔═☰ *🔰${finalname.toUpperCase()}🔰* 
│║⦁ ${Nekobot.prefix}antilink
│║⦁ ${Nekobot.prefix}allownsfw
│║⦁ ${Nekobot.prefix}delete
│║⦁ ${Nekobot.prefix}group
│║⦁ ${Nekobot.prefix}kick
│║⦁ ${Nekobot.prefix}promote
│║⦁ ${Nekobot.prefix}setdesc
│║⦁ ${Nekobot.prefix}seticon
│║⦁ ${Nekobot.prefix}tagall
┕╚═☰
┌╔═☰ *🖼️${finalname.toUpperCase()}🖼️* 
│║⦁ ${Nekobot.prefix}image
│║⦁ ${Nekobot.prefix}unsplash
│║⦁ ${Nekobot.prefix}pinterest
│║⦁ ${Nekobot.prefix}wallpaper
┕╚═☰
┌╔═☰ *🔎${finalname.toUpperCase()}🔎* 
│║⦁ ${Nekobot.prefix}advice
│║⦁ ${Nekobot.prefix}anime
│║⦁ ${Nekobot.prefix}chordlist
│║⦁ ${Nekobot.prefix}fact
│║⦁ ${Nekobot.prefix}getchord
│║⦁ ${Nekobot.prefix}gify
│║⦁ ${Nekobot.prefix}google
│║⦁ ${Nekobot.prefix}instagram
│║⦁ ${Nekobot.prefix}joke
│║⦁ ${Nekobot.prefix}lyrics
│║⦁ ${Nekobot.prefix}manga
│║⦁ ${Nekobot.prefix}meme
│║⦁ ${Nekobot.prefix}pokedex
│║⦁ ${Nekobot.prefix}quote
│║⦁ ${Nekobot.prefix}reddit
│║⦁ ${Nekobot.prefix}ytsearch
┕╚═☰
┌╔═☰ *🍑${finalname.toUpperCase()}🍑* 
│║⦁ ${Nekobot.prefix}ass
│║⦁ ${Nekobot.prefix}bdsm
│║⦁ ${Nekobot.prefix}blowjob
│║⦁ ${Nekobot.prefix}cum
│║⦁ ${Nekobot.prefix}doujin
│║⦁ ${Nekobot.prefix}feet
│║⦁ ${Nekobot.prefix}femdom  
│║⦁ ${Nekobot.prefix}Nekogirl  
│║⦁ ${Nekobot.prefix}glasses  
│║⦁ ${Nekobot.prefix}hentai
│║⦁ ${Nekobot.prefix}maid
│║⦁ ${Nekobot.prefix}masturbation
│║⦁ ${Nekobot.prefix}netorare
│║⦁ ${Nekobot.prefix}orgy
│║⦁ ${Nekobot.prefix}panties
│║⦁ ${Nekobot.prefix}pussy
│║⦁ ${Nekobot.prefix}school
│║⦁ ${Nekobot.prefix}succubus
│║⦁ ${Nekobot.prefix}tentacles
│║⦁ ${Nekobot.prefix}thighs
│║⦁ ${Nekobot.prefix}uglyBastard
│║⦁ ${Nekobot.prefix}uniform
│║⦁ ${Nekobot.prefix}yuri
│║⦁ ${Nekobot.prefix}zettaiRyouiki
┕╚═☰
┌╔═☰ *👅${finalname.toUpperCase()}👅* 
│║⦁ ${Nekobot.prefix}nsfw
│║⦁ ${Nekobot.prefix}nsfw2
│║⦁ ${Nekobot.prefix}bonermaterial
│║⦁ ${Nekobot.prefix}nsfw411
│║⦁ ${Nekobot.prefix}iwanttofuckher
│║⦁ ${Nekobot.prefix}exxxtras
│║⦁ ${Nekobot.prefix}distension
│║⦁ ${Nekobot.prefix}bimbofetish
│║⦁ ${Nekobot.prefix}christiangirls
│║⦁ ${Nekobot.prefix}dirtygaming
│║⦁ ${Nekobot.prefix}sexybutnotporn
│║⦁ ${Nekobot.prefix}femalepov
│║⦁ ${Nekobot.prefix}omgbeckylookathiscock
│║⦁ ${Nekobot.prefix}sexygirls
│║⦁ ${Nekobot.prefix}breedingmaterial
│║⦁ ${Nekobot.prefix}canthold
│║⦁ ${Nekobot.prefix}toocuteforporn
│║⦁ ${Nekobot.prefix}justhotwomen
│║⦁ ${Nekobot.prefix}stripgirls
│║⦁ ${Nekobot.prefix}hotstuffnsfw
│║⦁ ${Nekobot.prefix}uncommonposes
│║⦁ ${Nekobot.prefix}gifsofremoval
│║⦁ ${Nekobot.prefix}nostalgiafapping
│║⦁ ${Nekobot.prefix}truefmk
│║⦁ ${Nekobot.prefix}nudes
│║⦁ ${Nekobot.prefix}4k
│║⦁ ${Nekobot.prefix}realgirls
│║⦁ ${Nekobot.prefix}blowjobs
│║⦁ ${Nekobot.prefix}milf
│║⦁ ${Nekobot.prefix}milk
│║⦁ ${Nekobot.prefix}milking
│║⦁ ${Nekobot.prefix}lactating
│║⦁ ${Nekobot.prefix}pussy
│║⦁ ${Nekobot.prefix}cum
│║⦁ ${Nekobot.prefix}slut
│║⦁ ${Nekobot.prefix}cumslut
┕╚═☰
┌╔═☰ *🦄${finalname.toUpperCase()}🦄* 
│║⦁ ${Nekobot.prefix}waifu
│║⦁ ${Nekobot.prefix}swaifu
│║⦁ ${Nekobot.prefix}Neko
│║⦁ ${Nekobot.prefix}sNeko
│║⦁ ${Nekobot.prefix}shinobu
│║⦁ ${Nekobot.prefix}sshinobu
│║⦁ ${Nekobot.prefix}megumin
│║⦁ ${Nekobot.prefix}smegumin
│║⦁ ${Nekobot.prefix}awoo
│║⦁ ${Nekobot.prefix}sawoo
│║⦁ ${Nekobot.prefix}glomp
│║⦁ ${Nekobot.prefix}sglomp
│║⦁ ${Nekobot.prefix}handhold
│║⦁ ${Nekobot.prefix}shandhold
│║⦁
│║⦁ ${Nekobot.prefix}sbully
│║⦁ ${Nekobot.prefix}scuddle
│║⦁ ${Nekobot.prefix}scry
│║⦁ ${Nekobot.prefix}shug
│║⦁ ${Nekobot.prefix}skiss
│║⦁ ${Nekobot.prefix}slick
│║⦁ ${Nekobot.prefix}spat
│║⦁ ${Nekobot.prefix}ssmug
│║⦁ ${Nekobot.prefix}sbonk
│║⦁ ${Nekobot.prefix}syeet
│║⦁ ${Nekobot.prefix}sblush
│║⦁ ${Nekobot.prefix}ssmile
│║⦁ ${Nekobot.prefix}swave
│║⦁ ${Nekobot.prefix}shighfive
│║⦁ ${Nekobot.prefix}snom
│║⦁ ${Nekobot.prefix}sbite
│║⦁ ${Nekobot.prefix}sslap
│║⦁ ${Nekobot.prefix}skill
│║⦁ ${Nekobot.prefix}skick
│║⦁ ${Nekobot.prefix}shappy
│║⦁ ${Nekobot.prefix}swink
│║⦁ ${Nekobot.prefix}spoke
│║⦁ ${Nekobot.prefix}sdance
│║⦁ ${Nekobot.prefix}scringe
┕╚═☰
┌╔═☰ *⭕${finalname.toUpperCase()}⭕* 
│║⦁ ${Nekobot.prefix}ytpanning
│║⦁ ${Nekobot.prefix}ytbassboost
│║⦁ ${Nekobot.prefix}ytecho
│║⦁ ${Nekobot.prefix}ytflanger
│║⦁ ${Nekobot.prefix}ytnightcore
│║⦁ ${Nekobot.prefix}ytphaser
│║⦁ ${Nekobot.prefix}ytreverse
│║⦁ ${Nekobot.prefix}ytslow
│║⦁ ${Nekobot.prefix}ytspeed
│║⦁ ${Nekobot.prefix}ytsubboost
│║⦁ ${Nekobot.prefix}ytsuperslow
│║⦁ ${Nekobot.prefix}ytsuperspeed
│║⦁ ${Nekobot.prefix}ytsurround
│║⦁ ${Nekobot.prefix}ytvaporwave
│║⦁ ${Nekobot.prefix}ytvibrato
┕╚═════⋑`,
    Nekobot.display
  );
};

module.exports.aliases = thisfilealias;
