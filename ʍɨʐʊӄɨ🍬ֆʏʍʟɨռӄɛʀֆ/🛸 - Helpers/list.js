// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF");
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `list`,
  description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`;
      var MainText = `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},

┌──────────────◆➤
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑 𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🍁 𝐀𝐝𝐝 𝐌𝐢𝐳𝐮𝐤𝐢: _${ᴋᴇɪ}request_
│☣️ 𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
│🍰 𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

│🍕 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣! _many many more_
└───────◆➤

┌──────────────|  𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧𝙨 |◆➤
│📥 ${ᴋᴇɪ}spotify
│📥 ${ᴋᴇɪ}instagram
│📥 ${ᴋᴇɪ}play
│📥 ${ᴋᴇɪ}song
│📥 ${ᴋᴇɪ}ytaudio
│📥 ${ᴋᴇɪ}tiktokaudio
│📥 ${ᴋᴇɪ}watch 
│📥 ${ᴋᴇɪ}stream 
│📥 ${ᴋᴇɪ}ytvideo
│📥 ${ᴋᴇɪ}tiktokvideo
└───────◆➤

┌──────────────|  𝙁𝙁𝙈𝙋𝙀𝙂 |◆➤
│🗂️ ${ᴋᴇɪ}tomp3
│🗂️ ${ᴋᴇɪ}img2url
└───────◆➤

┌──────────────|  𝘼𝙣𝙞𝙢𝙚 |◆➤ 
│🍣 ${ᴋᴇɪ}anime 
│🍣 ${ᴋᴇɪ}ranimewall 
│🍣 ${ᴋᴇɪ}smile 
│🍣 ${ᴋᴇɪ}yes
│🍣 ${ᴋᴇɪ}bite
│🍣 ${ᴋᴇɪ}blush
│🍣 ${ᴋᴇɪ}bored
│🍣 ${ᴋᴇɪ}confused
│🍣 ${ᴋᴇɪ}cry
│🍣 ${ᴋᴇɪ}goodnight
│🍣 ${ᴋᴇɪ}happy
│🍣 ${ᴋᴇɪ}hi5
│🍣 ${ᴋᴇɪ}poke
│🍣 ${ᴋᴇɪ}sad
│🍣 ${ᴋᴇɪ}thinking
│🍣 ${ᴋᴇɪ}cuddle
│🍣 ${ᴋᴇɪ}hug
│🍣 ${ᴋᴇɪ}pat
│🍣 ${ᴋᴇɪ}slap 
│🍣 ${ᴋᴇɪ}wink
│🍣 ${ᴋᴇɪ}angry
│🍣 ${ᴋᴇɪ}baka
│🍣 ${ᴋᴇɪ}bonk
│🍣 ${ᴋᴇɪ}bully
│🍣 ${ᴋᴇɪ}bye
│🍣 ${ᴋᴇɪ}chase
│🍣 ${ᴋᴇɪ}cheer
│🍣 ${ᴋᴇɪ}cringe
│🍣 ${ᴋᴇɪ}dab
│🍣 ${ᴋᴇɪ}dance
│🍣 ${ᴋᴇɪ}die
│🍣 ${ᴋᴇɪ}facepalm
│🍣 ${ᴋᴇɪ}feed
│🍣 ${ᴋᴇɪ}glomp
│🍣 ${ᴋᴇɪ}hold
│🍣 ${ᴋᴇɪ}hate
│🍣 ${ᴋᴇɪ}hi
│🍣 ${ᴋᴇɪ}kill
│🍣 ${ᴋᴇɪ}laugh
│🍣 ${ᴋᴇɪ}lick
│🍣 ${ᴋᴇɪ}love
│🍣 ${ᴋᴇɪ}lurk
│🍣 ${ᴋᴇɪ}nervous
│🍣 ${ᴋᴇɪ}nope
│🍣 ${ᴋᴇɪ}nom
│🍣 ${ᴋᴇɪ}nuzzle
│🍣 ${ᴋᴇɪ}panic
│🍣 ${ᴋᴇɪ}peck
│🍣 ${ᴋᴇɪ}pout
│🍣 ${ᴋᴇɪ}run
│🍣 ${ᴋᴇɪ}sip
│🍣 ${ᴋᴇɪ}shoot
│🍣 ${ᴋᴇɪ}shrug
│🍣 ${ᴋᴇɪ}sleep
│🍣 ${ᴋᴇɪ}smug
│🍣 ${ᴋᴇɪ}stab
│🍣 ${ᴋᴇɪ}stare
│🍣 ${ᴋᴇɪ}tease
│🍣 ${ᴋᴇɪ}tickle
│🍣 ${ᴋᴇɪ}thumbsup
│🍣 ${ᴋᴇɪ}triggered
│🍣 ${ᴋᴇɪ}wag
└───────◆➤

┌──────────────|  𝙊𝙬𝙣𝙚𝙧 |◆➤
│🐙 ${ᴋᴇɪ}ban
│🐙 ${ᴋᴇɪ}unban
│🐙 ${ᴋᴇɪ}broadcast
│🐙 ${ᴋᴇɪ}bugreport
│🐙 ${ᴋᴇɪ}help 
│🐙 ${ᴋᴇɪ}mizuki
│🐙 ${ᴋᴇɪ}reboot
│🐙 ${ᴋᴇɪ}broadcast
│🐙 ${ᴋᴇɪ}leave
└───────◆➤

┌──────────────|  𝙂𝙧𝙤𝙪𝙥𝙨 |◆➤
│🔰 ${ᴋᴇɪ}promote
│🔰 ${ᴋᴇɪ}demote
│🔰 ${ᴋᴇɪ}spam
│🔰 ${ᴋᴇɪ}invite
│🔰 ${ᴋᴇɪ}lock
│🔰 ${ᴋᴇɪ}unlock 
│🔰 ${ᴋᴇɪ}admins
│🔰 ${ᴋᴇɪ}disappear
│🔰 ${ᴋᴇɪ}groupdp
│🔰 ${ᴋᴇɪ}kick
│🔰 ${ᴋᴇɪ}getdesc
│🔰 ${ᴋᴇɪ}getdp
│🔰 ${ᴋᴇɪ}tagall
│🔰 ${ᴋᴇɪ}setwelcome
│🔰 ${ᴋᴇɪ}antilink
└───────◆➤

┌──────────────|  𝙄𝙢𝙖𝙜𝙚 |◆➤
│🧉 ${ᴋᴇɪ}ocr
│🧉 ${ᴋᴇɪ}sticker
│🧉 ${ᴋᴇɪ}carbon
└───────◆➤

┌──────────────|  𝙎𝙚𝙖𝙧𝙘𝙝 |◆➤
│🔎 ${ᴋᴇɪ}ytsearch 
│🔎 ${ᴋᴇɪ}github
│🔎 ${ᴋᴇɪ}pinterest 
│🔎 ${ᴋᴇɪ}weather
│🔎 ${ᴋᴇɪ}wallpaper
│🔎 ${ᴋᴇɪ}google
│🔎 ${ᴋᴇɪ}wikipedia
│🔎 ${ᴋᴇɪ}ud
│🔎 ${ᴋᴇɪ}tenor
│🔎 ${ᴋᴇɪ}gif
└───────◆➤

┌──────────────|  𝙁𝙪𝙣𝙨 |◆➤
│🦄 ${ᴋᴇɪ}lyrics
│🦄 ${ᴋᴇɪ}joke
│🦄 ${ᴋᴇɪ}meme
│🦄 ${ᴋᴇɪ}translate
│🦄 ${ᴋᴇɪ}tts
└───────◆➤

┌──────────────|  𝙋𝙤𝙧𝙣 𝙉𝙎𝙁𝙒 |◆➤
│👅 ${ᴋᴇɪ}rporn
│👅 ${ᴋᴇɪ}tikporn
│👅 ${ᴋᴇɪ}4k
│👅 ${ᴋᴇɪ}blowjob
│👅 ${ᴋᴇɪ}slut
│👅 ${ᴋᴇɪ}milf
│👅 ${ᴋᴇɪ}milk
│👅 ${ᴋᴇɪ}pussy
└───────◆➤

┌──────────────|  𝙃𝙚𝙣𝙩𝙖𝙞 𝙉𝙎𝙁𝙒 |◆➤
│🍄 ${ᴋᴇɪ}porn
│🍄 ${ᴋᴇɪ}ass  
│🍄 ${ᴋᴇɪ}bdsm  
│🍄 ${ᴋᴇɪ}cum  
│🍄 ${ᴋᴇɪ}doujin 
│🍄 ${ᴋᴇɪ}feet  
│🍄 ${ᴋᴇɪ}femdom  
│🍄 ${ᴋᴇɪ}foxgirl  
│🍄 ${ᴋᴇɪ}glasses  
│🍄 ${ᴋᴇɪ}rhentai
│🍄 ${ᴋᴇɪ}maid  
│🍄 ${ᴋᴇɪ}masturbation 
│🍄 ${ᴋᴇɪ}netorare  
│🍄 ${ᴋᴇɪ}orgy 
│🍄 ${ᴋᴇɪ}panties  
│🍄 ${ᴋᴇɪ}pussy 
│🍄 ${ᴋᴇɪ}school  
│🍄 ${ᴋᴇɪ}tentacles 
│🍄 ${ᴋᴇɪ}thighs
│🍄 ${ᴋᴇɪ}uniform
│🍄 ${ᴋᴇɪ}yuri
└───────◆➤`;
      return Mizuki_Static.MGS(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText, MediaUrl).catch(
        (ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
