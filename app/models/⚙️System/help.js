"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
    timestampe = BloomBot.speed();
    latensie = BloomBot.speed() - timestampe;
    const runtime = function (seconds) {
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

    return await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
> ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


╭──────────────────────╮
│       ❗ CONSOLE        
│───────────────────────
│ ⏲️ Uptime: ${runtime(process.uptime())}
│ 💻 OS Release: ${BloomBot.os.release()}
│ 💻 OS Type: ${BloomBot.os.type()}
│ 📂 Directory: ${BloomBot.os.homedir()}
│ 🌻 Speed: ${latensie.toFixed(4)} sec
│ 🖥️ Ram Usage: ${ramUsage}
│ 🌐 Platform: ${BloomBot.os.platform()}
│ 🆓 Free Memory: ${BloomBot.os.freemem()}
│ 💾 Total Memory: ${BloomBot.os.totalmem()}
│ 🏠 Host Device: ${BloomBot.os.hostname()}
│ 📋 OS Version: ${BloomBot.os.version()}
╰──────────────────────╯

╭──────────────────────╮
│        ❕ COMMANDS        
│───────────────────────
│ 🐉 ${BloomBot.prefix}emotionslist
│ 📢 ${BloomBot.prefix}audiofilterlist
│ 📼 ${BloomBot.prefix}conversionlist
│ 📥 ${BloomBot.prefix}downloadlist
│ 💰 ${BloomBot.prefix}gameslist
│ 🔰 ${BloomBot.prefix}grouplist
│ 🍁 ${BloomBot.prefix}ownerlist
│ 🖼️ ${BloomBot.prefix}photolist
│ 🔎 ${BloomBot.prefix}searchlist
│ ⭕ ${BloomBot.prefix}ytfilterlists
│ 🍑 ${BloomBot.prefix}hentailist
│ 👅 ${BloomBot.prefix}nsfwlist
│ 🦄 ${BloomBot.prefix}sfwlist
╰──────────────────────╯


*🍁${"ownerlist".toUpperCase()}🍁*
⦁ ${BloomBot.prefix}ban
⦁ ${BloomBot.prefix}broadcast
⦁ ${BloomBot.prefix}join
⦁ ${BloomBot.prefix}leave
⦁ ${BloomBot.prefix}reboot
⦁ ${BloomBot.prefix}rules
⦁ ${BloomBot.prefix}unban
⦁ ${BloomBot.prefix}verify

*📢${"audiofilterlist".toUpperCase()}📢*
⦁ ${BloomBot.prefix}panning
⦁ ${BloomBot.prefix}bassboost
⦁ ${BloomBot.prefix}echo
⦁ ${BloomBot.prefix}fast
⦁ ${BloomBot.prefix}flanger
⦁ ${BloomBot.prefix}nightcore
⦁ ${BloomBot.prefix}phaser
⦁ ${BloomBot.prefix}reverse
⦁ ${BloomBot.prefix}slow
⦁ ${BloomBot.prefix}speed
⦁ ${BloomBot.prefix}subboost
⦁ ${BloomBot.prefix}superslow
⦁ ${BloomBot.prefix}superspeed
⦁ ${BloomBot.prefix}surround
⦁ ${BloomBot.prefix}vaporwave
⦁ ${BloomBot.prefix}vibrato

*📼${"conversionlist".toUpperCase()}📼*
⦁ ${BloomBot.prefix}carbon
⦁ ${BloomBot.prefix}ship
⦁ ${BloomBot.prefix}sticker
⦁ ${BloomBot.prefix}tinyurl
⦁ ${BloomBot.prefix}tourl
⦁ ${BloomBot.prefix}tts

*📥${"downloadlist".toUpperCase()}📥* 
⦁ ${BloomBot.prefix}yta
⦁ ${BloomBot.prefix}play
⦁ ${BloomBot.prefix}song
⦁ ${BloomBot.prefix}sing
⦁ ${BloomBot.prefix}ytmp3
⦁ ${BloomBot.prefix}music
⦁ ${BloomBot.prefix}ytplay
⦁ ${BloomBot.prefix}ytaudio
⦁ ${BloomBot.prefix}ytmusic
⦁ ${BloomBot.prefix}youtubemusic
⦁ 
⦁ ${BloomBot.prefix}ytv
⦁ ${BloomBot.prefix}watch
⦁ ${BloomBot.prefix}stream
⦁ ${BloomBot.prefix}ytmp4
⦁ ${BloomBot.prefix}video
⦁ ${BloomBot.prefix}ytwatch
⦁ ${BloomBot.prefix}ytvideo
⦁ ${BloomBot.prefix}youtubevideo

*🐉${"emotionslist".toUpperCase()}🐉* 
⦁ ${BloomBot.prefix}bite
⦁ ${BloomBot.prefix}blush
⦁ ${BloomBot.prefix}bonk
⦁ ${BloomBot.prefix}bored
⦁ ${BloomBot.prefix}confused
⦁ ${BloomBot.prefix}cry
⦁ ${BloomBot.prefix}cuddle
⦁ ${BloomBot.prefix}dance
⦁ ${BloomBot.prefix}goodnight
⦁ ${BloomBot.prefix}happy
⦁ ${BloomBot.prefix}highfive
⦁ ${BloomBot.prefix}hug
⦁ ${BloomBot.prefix}kill
⦁ ${BloomBot.prefix}kiss
⦁ ${BloomBot.prefix}nervous
⦁ ${BloomBot.prefix}pat
⦁ ${BloomBot.prefix}poke
⦁ ${BloomBot.prefix}punch
⦁ ${BloomBot.prefix}sad
⦁ ${BloomBot.prefix}scream
⦁ ${BloomBot.prefix}slap
⦁ ${BloomBot.prefix}smile
⦁ ${BloomBot.prefix}stare
⦁ ${BloomBot.prefix}wave
⦁ ${BloomBot.prefix}wink
⦁ ${BloomBot.prefix}yeet
⦁ ${BloomBot.prefix}yes

*💰${"gameslist".toUpperCase()}💰* 
⦁ ${BloomBot.prefix}balance
⦁ ${BloomBot.prefix}buy
⦁ ${BloomBot.prefix}daily
⦁ ${BloomBot.prefix}fish
⦁ ${BloomBot.prefix}gamble
⦁ ${BloomBot.prefix}inv
⦁ ${BloomBot.prefix}pay
⦁ ${BloomBot.prefix}rob
⦁ ${BloomBot.prefix}store
⦁ ${BloomBot.prefix}work
⦁ ${BloomBot.prefix}zoo

*🔰${"grouplist".toUpperCase()}🔰* 
⦁ ${BloomBot.prefix}antilink
⦁ ${BloomBot.prefix}allownsfw
⦁ ${BloomBot.prefix}delete
⦁ ${BloomBot.prefix}group
⦁ ${BloomBot.prefix}kick
⦁ ${BloomBot.prefix}promote
⦁ ${BloomBot.prefix}setdesc
⦁ ${BloomBot.prefix}seticon
⦁ ${BloomBot.prefix}tagall

*🖼️${"photolist".toUpperCase()}🖼️* 
⦁ ${BloomBot.prefix}image
⦁ ${BloomBot.prefix}unsplash
⦁ ${BloomBot.prefix}pinterest
⦁ ${BloomBot.prefix}wallpaper

*🔎${"searchlist".toUpperCase()}🔎* 
⦁ ${BloomBot.prefix}advice
⦁ ${BloomBot.prefix}anime
⦁ ${BloomBot.prefix}chordlist
⦁ ${BloomBot.prefix}fact
⦁ ${BloomBot.prefix}getchord
⦁ ${BloomBot.prefix}gify
⦁ ${BloomBot.prefix}google
⦁ ${BloomBot.prefix}instagram
⦁ ${BloomBot.prefix}joke
⦁ ${BloomBot.prefix}lyrics
⦁ ${BloomBot.prefix}manga
⦁ ${BloomBot.prefix}meme
⦁ ${BloomBot.prefix}pokedex
⦁ ${BloomBot.prefix}quote
⦁ ${BloomBot.prefix}reddit
⦁ ${BloomBot.prefix}ytsearch

*🍑${"hentailist".toUpperCase()}🍑* 
⦁ ${BloomBot.prefix}ass
⦁ ${BloomBot.prefix}bdsm
⦁ ${BloomBot.prefix}blowjob
⦁ ${BloomBot.prefix}cum
⦁ ${BloomBot.prefix}doujin
⦁ ${BloomBot.prefix}feet
⦁ ${BloomBot.prefix}femdom  
⦁ ${BloomBot.prefix}whatsgirl  
⦁ ${BloomBot.prefix}glasses  
⦁ ${BloomBot.prefix}hentai
⦁ ${BloomBot.prefix}maid
⦁ ${BloomBot.prefix}masturbation
⦁ ${BloomBot.prefix}netorare
⦁ ${BloomBot.prefix}orgy
⦁ ${BloomBot.prefix}panties
⦁ ${BloomBot.prefix}pussy
⦁ ${BloomBot.prefix}school
⦁ ${BloomBot.prefix}succubus
⦁ ${BloomBot.prefix}tentacles
⦁ ${BloomBot.prefix}thighs
⦁ ${BloomBot.prefix}uglyBastard
⦁ ${BloomBot.prefix}uniform
⦁ ${BloomBot.prefix}yuri
⦁ ${BloomBot.prefix}zettaiRyouiki

*👅${"nsfwlist".toUpperCase()}👅* 
⦁ ${BloomBot.prefix}nsfw
⦁ ${BloomBot.prefix}nsfw2
⦁ ${BloomBot.prefix}bonermaterial
⦁ ${BloomBot.prefix}nsfw411
⦁ ${BloomBot.prefix}iwanttofuckher
⦁ ${BloomBot.prefix}exxxtras
⦁ ${BloomBot.prefix}distension
⦁ ${BloomBot.prefix}bimbofetish
⦁ ${BloomBot.prefix}christiangirls
⦁ ${BloomBot.prefix}dirtygaming
⦁ ${BloomBot.prefix}sexybutnotporn
⦁ ${BloomBot.prefix}femalepov
⦁ ${BloomBot.prefix}omgbeckylookathiscock
⦁ ${BloomBot.prefix}sexygirls
⦁ ${BloomBot.prefix}breedingmaterial
⦁ ${BloomBot.prefix}canthold
⦁ ${BloomBot.prefix}toocuteforporn
⦁ ${BloomBot.prefix}justhotwomen
⦁ ${BloomBot.prefix}stripgirls
⦁ ${BloomBot.prefix}hotstuffnsfw
⦁ ${BloomBot.prefix}uncommonposes
⦁ ${BloomBot.prefix}gifsofremoval
⦁ ${BloomBot.prefix}nostalgiafapping
⦁ ${BloomBot.prefix}truefmk
⦁ ${BloomBot.prefix}nudes
⦁ ${BloomBot.prefix}4k
⦁ ${BloomBot.prefix}realgirls
⦁ ${BloomBot.prefix}blowjobs
⦁ ${BloomBot.prefix}milf
⦁ ${BloomBot.prefix}milk
⦁ ${BloomBot.prefix}milking
⦁ ${BloomBot.prefix}lactating
⦁ ${BloomBot.prefix}pussy
⦁ ${BloomBot.prefix}cum
⦁ ${BloomBot.prefix}slut
⦁ ${BloomBot.prefix}cumslut

*⭕${"ytfilterlist".toUpperCase()}⭕* 
⦁ ${BloomBot.prefix}ytpanning
⦁ ${BloomBot.prefix}ytbassboost
⦁ ${BloomBot.prefix}ytecho
⦁ ${BloomBot.prefix}ytflanger
⦁ ${BloomBot.prefix}ytnightcore
⦁ ${BloomBot.prefix}ytphaser
⦁ ${BloomBot.prefix}ytreverse
⦁ ${BloomBot.prefix}ytslow
⦁ ${BloomBot.prefix}ytspeed
⦁ ${BloomBot.prefix}ytsubboost
⦁ ${BloomBot.prefix}ytsuperslow
⦁ ${BloomBot.prefix}ytsuperspeed
⦁ ${BloomBot.prefix}ytsurround
⦁ ${BloomBot.prefix}ytvaporwave
⦁ ${BloomBot.prefix}ytvibrato`,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [
  "list",
  "choices",
  "display",
  "options",
  "menu",
  "show",
  "panel",
  "catalog",
  "commands",
];
