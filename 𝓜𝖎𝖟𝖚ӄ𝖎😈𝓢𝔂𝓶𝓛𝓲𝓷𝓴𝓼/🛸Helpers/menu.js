// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `menu`,
  description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎ɦɛʟք.png`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        content,
        MessageType.image,
        {
          mimetype: Mimetype.png || Mimetype.jpeg,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}menu` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}repo`,
          buttonText: { displayText: `${ᴋᴇɪ}repo` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `*𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼*
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

┌────⭓ *🤩𝘼𝙣𝙞𝙢𝙚 > (${ᴋᴇɪ}animeside)*
│🎋• ${ᴋᴇɪ}anime (ꜱᴇᴀʀᴄʜ)
│🎋• ${ᴋᴇɪ}animewallpaper (ꜱᴇᴀʀᴄʜ)
│🎋• ${ᴋᴇɪ}smile (ɢɪꜰ) 
│🎋• ${ᴋᴇɪ}yes (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}bite (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}blush (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}bored (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}confused (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}cry (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}goodnight (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}happy (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}hi5 (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}poke (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}sad (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}thinking (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}cuddle (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}hug (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}pat (ɢɪꜰ)
│🎋• ${ᴋᴇɪ}slap (ɢɪꜰ) 
│🎋• ${ᴋᴇɪ}wink (ɢɪꜰ)
└───────────⭓

┌────⭓ *🍫𝙈𝙪𝙨𝙞𝙘 > (${ᴋᴇɪ}musicside)*
│🍫• ${ᴋᴇɪ}lyrics (ꜱᴇᴀʀᴄʜ)
│🍫• ${ᴋᴇɪ}ytsearch (ꜱᴇᴀʀᴄʜ)
│🍫• ${ᴋᴇɪ}ytaudio (ᴍᴜꜱɪᴄ-ᴅʟ)
│🍫• ${ᴋᴇɪ}ytvideo (ᴠɪᴅᴇᴏ-ᴅʟ)
└───────────⭓

┌────⭓ *𝙊𝙬𝙣𝙚𝙧-𝙊𝙣𝙡𝙮 > (${ᴋᴇɪ}ownerside)*
│🐙• ${ᴋᴇɪ}update
│🐙• ${ᴋᴇɪ}broadcast
└───────────⭓

┌────⭓ *💻𝙎𝙮𝙨𝙩𝙚𝙢 > (${ᴋᴇɪ}systemside)*
│⚙️• ${ᴋᴇɪ}help 
│⚙️• ${ᴋᴇɪ}mizuki
│⚙️• ${ᴋᴇɪ}nekobin (ʙᴇᴛᴀ)
│⚙️• ${ᴋᴇɪ}update
│⚙️• ${ᴋᴇɪ}broadcast (ʙᴇᴛᴀ)
└───────────⭓

┌────⭓ *👑𝙂𝙧𝙤𝙪𝙥𝙨 > (groupside)*
│🍭• ${ᴋᴇɪ}promote (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}demote (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}spam (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}invite (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}admins
│🍭• ${ᴋᴇɪ}disappear
│🍭• ${ᴋᴇɪ}groupdp
│🍭• ${ᴋᴇɪ}unmute (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}mute (ʙᴇᴛᴀ)
│🍭• ${ᴋᴇɪ}kick
│🍭• ${ᴋᴇɪ}tagall
│🍭• ${ᴋᴇɪ}setwelcome
│🍭• ${ᴋᴇɪ}setgoodbye
│🍭• ${ᴋᴇɪ}setantilink (ʙᴇᴛᴀ)
└───────────⭓

┌────⭓ *🧀𝙁𝙪𝙣𝙨 > (${ᴋᴇɪ}funside)*
│🦄• ${ᴋᴇɪ}google (ꜱᴇᴀʀᴄʜ)
│🦄• ${ᴋᴇɪ}carbon 
│🦄• ${ᴋᴇɪ}pfgroupdp
│🦄• ${ᴋᴇɪ}github
│🦄• ${ᴋᴇɪ}beautycheck
│🦄• ${ᴋᴇɪ}joke (ʙᴇᴛᴀ)
│🦄• ${ᴋᴇɪ}meme
│🦄• ${ᴋᴇɪ}ocr
│🦄• ${ᴋᴇɪ}sticker
│🦄• ${ᴋᴇɪ}translate
│🦄• ${ᴋᴇɪ}tts (ʙᴇᴛᴀ) 
│🦄• ${ᴋᴇɪ}weather (ʙᴇᴛᴀ)  
│🦄• ${ᴋᴇɪ}ud
└───────────⭓

┌────⭓ *🔞𝙉𝙎𝙁𝙒 18+ > (${ᴋᴇɪ}nsfwside)*
│🍄• ${ᴋᴇɪ}ass  
│🍄• ${ᴋᴇɪ}bdsm  
│🍄• ${ᴋᴇɪ}cum  
│🍄• ${ᴋᴇɪ}doujin 
│🍄• ${ᴋᴇɪ}feet  
│🍄• ${ᴋᴇɪ}femdom  
│🍄• ${ᴋᴇɪ}foxgirl  
│🍄• ${ᴋᴇɪ}glasses  
│🍄• ${ᴋᴇɪ}hentai  
│🍄• ${ᴋᴇɪ}maid  
│🍄• ${ᴋᴇɪ}masturbation 
│🍄• ${ᴋᴇɪ}netorare  
│🍄• ${ᴋᴇɪ}orgy 
│🍄• ${ᴋᴇɪ}panties  
│🍄• ${ᴋᴇɪ}pussy 
│🍄• ${ᴋᴇɪ}school  
│🍄• ${ᴋᴇɪ}tentacles 
│🍄• ${ᴋᴇɪ}thighs
│🍄• ${ᴋᴇɪ}uniform
│🍄• ${ᴋᴇɪ}yuri
└───────────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!
`,
        footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
