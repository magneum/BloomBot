//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  timestampe = voxbot.speed();
  latensie = voxbot.speed() - timestampe;
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
    voxbot.fs.readdirSync(dir).reduce((acc, file) => {
      var fileDir = `${dir}/${file}`;
      if (voxbot.fs.lstatSync(fileDir).isDirectory()) {
        return (acc += countFiles(fileDir));
      }
      if (voxbot.fs.lstatSync(fileDir).isFile()) {
        return ++acc;
      }
      return acc;
    }, 0);
  return await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
> Ⓒvoxbot: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> You can visit your dashboard at _bit.ly/magneum_
> Total Commands: ${countFiles("./models")}


┌╔═☰ *❗ CONSOLE*
║⦁ *Uptime :* ${runtime(process.uptime())}
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
╚══════⋑



┌┌╔═☰ *🍁${finalname.toUpperCase()}🍁*
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
┕╚═════⋑`,
    "./public/logo/voxbot.png"
  );
};
