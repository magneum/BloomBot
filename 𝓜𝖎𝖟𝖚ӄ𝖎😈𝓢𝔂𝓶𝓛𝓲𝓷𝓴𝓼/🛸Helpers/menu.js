// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
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
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else {
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        const MeeHelper = `*𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼*
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

┌────⭓ *💻𝙎𝙮𝙨𝙩𝙚𝙢 > (${ᴋᴇɪ}systemside)*
│⚙️ •${ᴋᴇɪ}help 
│⚙️ •${ᴋᴇɪ}mizuki
│⚙️ •${ᴋᴇɪ}paste (‣ʙᴇᴛᴀ)
│⚙️ •${ᴋᴇɪ}update
│⚙️ •${ᴋᴇɪ}broadcast (‣ʙᴇᴛᴀ)
└───────────⭓

┌────⭓ *𝙊𝙬𝙣𝙚𝙧-𝙊𝙣𝙡𝙮 > (${ᴋᴇɪ}ownerside)*
│🐙 •${ᴋᴇɪ}update
│🐙 •${ᴋᴇɪ}broadcast
└───────────⭓

┌────⭓ *🤩𝘼𝙣𝙞𝙢𝙚 > (${ᴋᴇɪ}animeside)*
│🎋 •${ᴋᴇɪ}anime
│🎋 •${ᴋᴇɪ}animewallpaper 
│🎋 •${ᴋᴇɪ}smile 
│🎋 •${ᴋᴇɪ}yes
│🎋 •${ᴋᴇɪ}bite
│🎋 •${ᴋᴇɪ}blush
│🎋 •${ᴋᴇɪ}bored
│🎋 •${ᴋᴇɪ}confused
│🎋 •${ᴋᴇɪ}cry
│🎋 •${ᴋᴇɪ}goodnight
│🎋 •${ᴋᴇɪ}happy
│🎋 •${ᴋᴇɪ}hi5
│🎋 •${ᴋᴇɪ}poke
│🎋 •${ᴋᴇɪ}sad
│🎋 •${ᴋᴇɪ}thinking
│🎋 •${ᴋᴇɪ}cuddle (ꜱᴛɪᴄᴋᴇʀ)
│🎋 •${ᴋᴇɪ}hug (ꜱᴛɪᴄᴋᴇʀ)
│🎋 •${ᴋᴇɪ}pat (ꜱᴛɪᴄᴋᴇʀ)
│🎋 •${ᴋᴇɪ}slap (ꜱᴛɪᴄᴋᴇʀ) 
│🎋 •${ᴋᴇɪ}wink (ꜱᴛɪᴄᴋᴇʀ)
└───────────⭓

┌────⭓ *🍫𝙈𝙪𝙨𝙞𝙘 > (${ᴋᴇɪ}musicside)*
│🍫 •${ᴋᴇɪ}lyrics (‣ʙᴇᴛᴀ)
│🍫 •${ᴋᴇɪ}ytsearch
│🍫 •${ᴋᴇɪ}ytaudio
│🍫 •${ᴋᴇɪ}ytvideo
└───────────⭓

┌────⭓ *👑𝙂𝙧𝙤𝙪𝙥𝙨 > (groupside)*
│🍭 •${ᴋᴇɪ}promote (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}demote (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}spam (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}invite (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}admins
│🍭 •${ᴋᴇɪ}disappear
│🍭 •${ᴋᴇɪ}groupdp
│🍭 •${ᴋᴇɪ}unmute (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}mute (‣ʙᴇᴛᴀ)
│🍭 •${ᴋᴇɪ}kick
│🍭 •${ᴋᴇɪ}tagall
│🍭 •${ᴋᴇɪ}setwelcome
│🍭 •${ᴋᴇɪ}setgoodbye
│🍭 •${ᴋᴇɪ}setantilink (‣ʙᴇᴛᴀ)
└───────────⭓

┌────⭓ *🧀𝙁𝙪𝙣𝙨 > (${ᴋᴇɪ}funside)*
│🦄 •${ᴋᴇɪ}google (‣ʙᴇᴛᴀ)
│🦄 •${ᴋᴇɪ}carbon 
│🦄 •${ᴋᴇɪ}pfgroupdp
│🦄 •${ᴋᴇɪ}github
│🦄 •${ᴋᴇɪ}beautycheck
│🦄 •${ᴋᴇɪ}joke (‣ʙᴇᴛᴀ)
│🦄 •${ᴋᴇɪ}meme
│🦄 •${ᴋᴇɪ}ocr
│🦄 •${ᴋᴇɪ}sticker
│🦄 •${ᴋᴇɪ}translate
│🦄 •${ᴋᴇɪ}tts (‣ʙᴇᴛᴀ) 
│🦄 •${ᴋᴇɪ}weather (‣ʙᴇᴛᴀ)  
│🦄 •${ᴋᴇɪ}ud
└───────────⭓

┌────⭓ *🔞𝙉𝙎𝙁𝙒 18+ > (${ᴋᴇɪ}nsfwside)*
│🍄 •${ᴋᴇɪ}ass  
│🍄 •${ᴋᴇɪ}bdsm  
│🍄 •${ᴋᴇɪ}blowjob  
│🍄 •${ᴋᴇɪ}cum  
│🍄 •${ᴋᴇɪ}doujin 
│🍄 •${ᴋᴇɪ}feet  
│🍄 •${ᴋᴇɪ}femdom  
│🍄 •${ᴋᴇɪ}foxgirl  
│🍄 •${ᴋᴇɪ}glasses  
│🍄 •${ᴋᴇɪ}hentai  
│🍄 •${ᴋᴇɪ}maid  
│🍄 •${ᴋᴇɪ}masturbation 
│🍄 •${ᴋᴇɪ}netorare  
│🍄 •${ᴋᴇɪ}orgy 
│🍄 •${ᴋᴇɪ}panties  
│🍄 •${ᴋᴇɪ}pussy 
│🍄 •${ᴋᴇɪ}school  
│🍄 •${ᴋᴇɪ}tentacles 
│🍄 •${ᴋᴇɪ}thighs
│🍄 •${ᴋᴇɪ}uniform
│🍄 •${ᴋᴇɪ}yuri
└───────────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!
`;
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        //•⬡• 😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈
        //•⬡• 🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙
        //•⬡• ɢɴᴜ ɢᴇɴᴇʀᴀʟ ᴘᴜʙʟɪᴄ ʟɪᴄᴇɴꜱᴇ ᴠᴇʀꜱɪᴏɴ 3, 29 ᴊᴜɴᴇ 2007 ᴄᴏᴘʏʀɪɢʜᴛ (ᴄ) 2007 ꜰʀᴇᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ
        //•⬡• ᴇᴠᴇʀʏᴏɴᴇ ɪꜱ ᴘᴇʀᴍɪᴛᴛᴇᴅ ᴛᴏ 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 ᴠᴇʀʙᴀᴛɪᴍ ᴄᴏᴘɪᴇꜱ ᴏꜰ ᴛʜɪꜱ ʟɪᴄᴇɴꜱᴇ ᴅᴏᴄᴜᴍᴇɴᴛ, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
        //•⬡• —••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under Apache License
        //•⬡• 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 │ 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 │ 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
        //•⬡• 💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (!arg[0]) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.MEE,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png || Mimetype.jpeg,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
                caption: `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},

${MeeHelper}‍`,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        var 𝓜𝖎𝖟𝖚ӄ𝖎ʍօ = `⤥ 💡𝐂𝐨𝐦𝐦𝐚𝐧𝐝\n`;
        var command = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(arg[0]);
        if (command) {
          𝓜𝖎𝖟𝖚ӄ𝖎ʍօ += `⤤ ${
            (ᴋᴇɪ, command.name === undefined ? `Null` : command.name)
          }

⤥ 🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧
⤤ ${
            (command.description,
            command.description === undefined ? `Null` : command.description)
          }`;
          return ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.MEE,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png || Mimetype.jpeg,
                caption: 𝓜𝖎𝖟𝖚ӄ𝖎ʍօ,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
