`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
module.exports = {
  name: newScpt,
  async handle(
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    Needs,
    ꜱɪᴛʀᴀᴘ,
    Clock,
    Ping,
    Timers,
    version
  ) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const jsoncool = JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      fs.writeFileSync(
        `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      console.log("ID Added " + 𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
        fs.writeFileSync(
          `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
          JSON.stringify(jsoncool)
        );
        console.log("ID Removed " + 𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      }, 20000);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎.png`;
      var MainText = `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 ▷@${ꜱᴇɴᴅᴇʀeceived}, 
══════════════★
${Timers}
🍁𝐌𝐢𝐳𝐮𝐤𝐢 𝐈𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
══════════════★

╔═══════ 🔎 𝐒𝐞𝐚𝐫𝐜𝐡*
║🔎▷ ${ᴋᴇɪ}ytsearc
║🔎▷ ${ᴋᴇɪ}lyrics
║🔎▷ ${ᴋᴇɪ}github
║🔎▷ ${ᴋᴇɪ}pinterest
║🔎▷ ${ᴋᴇɪ}weather
║🔎▷ ${ᴋᴇɪ}google 
║🔎▷ ${ᴋᴇɪ}wikipedia
║🔎▷ ${ᴋᴇɪ}ud
║🔎▷ ${ᴋᴇɪ}tenor
║🔎▷ ${ᴋᴇɪ}gif
║🔎▷ ${ᴋᴇɪ}wallpaper
╚════════════╝


╔═══════ 🗂️ 𝐅𝐅𝐦𝐩𝐞𝐠*
║🗂️▷ ${ᴋᴇɪ}tomp3
║🗂️▷ ${ᴋᴇɪ}img2url
║🗂️▷ ${ᴋᴇɪ}ocr
║🗂️▷ ${ᴋᴇɪ}sticker
║🗂️▷ ${ᴋᴇɪ}carbon
╚════════════╝


╔═══════ 🏝️ 𝐅𝐢𝐥𝐭𝐞𝐫𝐬/𝐀𝐮𝐝𝐢𝐨*
║🏝️▷ ${ᴋᴇɪ}bass
║🏝️▷ ${ᴋᴇɪ}blown
║🏝️▷ ${ᴋᴇɪ}deep
║🏝️▷ ${ᴋᴇɪ}earrape
║🏝️▷ ${ᴋᴇɪ}fast
║🏝️▷ ${ᴋᴇɪ}fat
║🏝️▷ ${ᴋᴇɪ}nightcore
║🏝️▷ ${ᴋᴇɪ}reverse
║🏝️▷ ${ᴋᴇɪ}robot
║🏝️▷ ${ᴋᴇɪ}slow
║🏝️▷ ${ᴋᴇɪ}smooth
╚════════════╝


╔═══════ 🐙 𝐊𝐢𝐧𝐠/𝐎𝐰𝐧𝐞𝐫*
║🐙▷ ${ᴋᴇɪ}dyno
║🐙▷ ${ᴋᴇɪ}ban
║🐙▷ ${ᴋᴇɪ}unban
║🐙▷ ${ᴋᴇɪ}broadcast
║🐙▷ ${ᴋᴇɪ}bugreport
║🐙▷ ${ᴋᴇɪ}help
║🐙▷ ${ᴋᴇɪ}mizuki
║🐙▷ ${ᴋᴇɪ}reboot
║🐙▷ ${ᴋᴇɪ}broadcast
║🐙▷ ${ᴋᴇɪ}leave
║🐙▷ ${ᴋᴇɪ}spam
╚════════════╝


╔═══════ 🍣 𝐀𝐧𝐢𝐦𝐞*
║🍣▷ ${ᴋᴇɪ}anime
║🍣▷ ${ᴋᴇɪ}ranimewall
║🍣▷ ${ᴋᴇɪ}smile
║🍣▷ ${ᴋᴇɪ}yes
║🍣▷ ${ᴋᴇɪ}bite
║🍣▷ ${ᴋᴇɪ}blush
║🍣▷ ${ᴋᴇɪ}bored
║🍣▷ ${ᴋᴇɪ}confused
║🍣▷ ${ᴋᴇɪ}cry
║🍣▷ ${ᴋᴇɪ}goodnight
║🍣▷ ${ᴋᴇɪ}happy
║🍣▷ ${ᴋᴇɪ}hi5
║🍣▷ ${ᴋᴇɪ}poke
║🍣▷ ${ᴋᴇɪ}sad
║🍣▷ ${ᴋᴇɪ}thinking
║🍣▷ ${ᴋᴇɪ}cuddle
║🍣▷ ${ᴋᴇɪ}hug
║🍣▷ ${ᴋᴇɪ}pat
║🍣▷ ${ᴋᴇɪ}slap
║🍣▷ ${ᴋᴇɪ}wink
║🍣▷ ${ᴋᴇɪ}angry
║🍣▷ ${ᴋᴇɪ}baka
║🍣▷ ${ᴋᴇɪ}bonk
║🍣▷ ${ᴋᴇɪ}bully
║🍣▷ ${ᴋᴇɪ}bye
║🍣▷ ${ᴋᴇɪ}chase
║🍣▷ ${ᴋᴇɪ}cheer
║🍣▷ ${ᴋᴇɪ}cringe
║🍣▷ ${ᴋᴇɪ}dab
║🍣▷ ${ᴋᴇɪ}dance
║🍣▷ ${ᴋᴇɪ}die
║🍣▷ ${ᴋᴇɪ}facepalm
║🍣▷ ${ᴋᴇɪ}feed
║🍣▷ ${ᴋᴇɪ}glomp
║🍣▷ ${ᴋᴇɪ}hold
║🍣▷ ${ᴋᴇɪ}hate
║🍣▷ ${ᴋᴇɪ}hi
║🍣▷ ${ᴋᴇɪ}kill
║🍣▷ ${ᴋᴇɪ}laugh
║🍣▷ ${ᴋᴇɪ}lick
║🍣▷ ${ᴋᴇɪ}love
║🍣▷ ${ᴋᴇɪ}lurk
║🍣▷ ${ᴋᴇɪ}nervous
║🍣▷ ${ᴋᴇɪ}nope
║🍣▷ ${ᴋᴇɪ}nom
║🍣▷ ${ᴋᴇɪ}nuzzle
║🍣▷ ${ᴋᴇɪ}panic
║🍣▷ ${ᴋᴇɪ}peck
║🍣▷ ${ᴋᴇɪ}pout
║🍣▷ ${ᴋᴇɪ}run
║🍣▷ ${ᴋᴇɪ}sip
║🍣▷ ${ᴋᴇɪ}shoot
║🍣▷ ${ᴋᴇɪ}shrug
║🍣▷ ${ᴋᴇɪ}sleep
║🍣▷ ${ᴋᴇɪ}smug
║🍣▷ ${ᴋᴇɪ}stab
║🍣▷ ${ᴋᴇɪ}stare
║🍣▷ ${ᴋᴇɪ}tease
║🍣▷ ${ᴋᴇɪ}tickle
║🍣▷ ${ᴋᴇɪ}thumbsup
║🍣▷ ${ᴋᴇɪ}triggered
║🍣▷ ${ᴋᴇɪ}wag
╚════════════╝


╔═══════ 🔰 𝐆𝐫𝐨𝐮𝐩𝐬/𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧*
║🔰▷ ${ᴋᴇɪ}promote
║🔰▷ ${ᴋᴇɪ}demote
║🔰▷ ${ᴋᴇɪ}invite
║🔰▷ ${ᴋᴇɪ}lock
║🔰▷ ${ᴋᴇɪ}unlock
║🔰▷ ${ᴋᴇɪ}admins
║🔰▷ ${ᴋᴇɪ}groupdp
║🔰▷ ${ᴋᴇɪ}kick
║🔰▷ ${ᴋᴇɪ}getdesc
║🔰▷ ${ᴋᴇɪ}getdp
║🔰▷ ${ᴋᴇɪ}tagall
║🔰▷ ${ᴋᴇɪ}setwelcome
║🔰▷ ${ᴋᴇɪ}antilink
╚════════════╝


╔═══════ 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬 ╝
║📥▷ ${ᴋᴇɪ}instagram
║📥▷ ${ᴋᴇɪ}play
║📥▷ ${ᴋᴇɪ}ytaudio
║📥▷ ${ᴋᴇɪ}tiktokaudio
║📥▷ ${ᴋᴇɪ}watch
║📥▷ ${ᴋᴇɪ}ytvideo
║📥▷ ${ᴋᴇɪ}tiktokvideo
╚════════════╝


╔═══════ 🦄 𝐑𝐚𝐧𝐝𝐨𝐦𝐬*
║🦄▷ ${ᴋᴇɪ}rank
║🦄▷ ${ᴋᴇɪ}joke
║🦄▷ ${ᴋᴇɪ}meme
║🦄▷ ${ᴋᴇɪ}tr
║🦄▷ ${ᴋᴇɪ}tts
║🦄▷ ${ᴋᴇɪ}pokedex
╚════════════╝


╔═══════ 🥃 𝐇𝐮𝐦𝐚𝐧/𝐍𝐒𝐅𝐖*
║🥃▷ ${ᴋᴇɪ}4k
║🥃▷ ${ᴋᴇɪ}blowjob
║🥃▷ ${ᴋᴇɪ}milf
║🥃▷ ${ᴋᴇɪ}milk
║🥃▷ ${ᴋᴇɪ}pussy
║🥃▷ ${ᴋᴇɪ}slut
║🥃▷ ${ᴋᴇɪ}tikporn
╚════════════╝


╔═══════  🍄𝐇𝐞𝐧𝐭𝐚𝐢/𝐍𝐒𝐅𝐖*
║🍄▷ ${ᴋᴇɪ}porn
║🍄▷ ${ᴋᴇɪ}ass
║🍄▷ ${ᴋᴇɪ}bdsm
║🍄▷ ${ᴋᴇɪ}cum  
║🍄▷ ${ᴋᴇɪ}doujin
║🍄▷ ${ᴋᴇɪ}feet  
║🍄▷ ${ᴋᴇɪ}femdom  
║🍄▷ ${ᴋᴇɪ}foxgirl  
║🍄▷ ${ᴋᴇɪ}glasses  
║🍄▷ ${ᴋᴇɪ}hentai
║🍄▷ ${ᴋᴇɪ}maid 
║🍄▷ ${ᴋᴇɪ}masturbation
║🍄▷ ${ᴋᴇɪ}netorare  
║🍄▷ ${ᴋᴇɪ}orgy
║🍄▷ ${ᴋᴇɪ}panties
║🍄▷ ${ᴋᴇɪ}pussy
║🍄▷ ${ᴋᴇɪ}school
║🍄▷ ${ᴋᴇɪ}tentacles
║🍄▷ ${ᴋᴇɪ}thighs
║🍄▷ ${ᴋᴇɪ}uniform
║🍄▷ ${ᴋᴇɪ}yuri
╚════════════╝`;
      return Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        MainText,
        MediaUrl
      ).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
