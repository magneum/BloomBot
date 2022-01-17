`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const LinkList = require(`../../ʍɨʐʊӄɨ🍃goose/antilink`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
module.exports = {
  name: newScpt,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}antilink <on/off>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `Who Is This Non-Admin •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Admin-Only Commands.

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❌ You Are Not Allowed!  
🌶️𝐆𝐫𝐨𝐮𝐩𝐬: Admins & Devs!
🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 Everyone
`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        try {
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  *❌ʜᴏᴡ ᴄᴀɴ ɪ ᴜꜱᴇ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ᴡʜᴇɴ ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ?*

💡𝐅𝐢𝐱: _Make Me Admin First_`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        try {
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧  

❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (Needs.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      } else {
        `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
        if (Needs[0] === `ON` || Needs[0] === `on` || Needs[0] === `On`) {
          LinkList.findOne(
            {
              serverID: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            },
            async (err, server) => {
              if (err) console.log(err);
              if (!server) {
                var newServer = new LinkList({
                  serverID: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  value: "ON",
                });
                newServer
                  .save()
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
                const media = await ӄʀǟӄɨռʐ.prepareMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`),
                  MessageType.image,
                  {
                    mimetype: Mimetype.png,
                  }
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    {
                      contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
                      footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}antilink on`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                          type: 1,
                        },
                        {
                          buttonId: `${ᴋᴇɪ}antilink off`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
              } else {
                server
                  .save()
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
                const media = await ӄʀǟӄɨռʐ.prepareMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`),
                  MessageType.image,
                  {
                    mimetype: Mimetype.png,
                  }
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    {
                      contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
                      footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}antilink on`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                          type: 1,
                        },
                        {
                          buttonId: `${ᴋᴇɪ}antilink off`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
              }
            }
          );
        }
        `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
        if (Needs[0] === `OFF` || Needs[0] === `off` || Needs[0] === `Off`) {
          LinkList.findOne(
            {
              serverID: 𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            },
            async (err, server) => {
              if (err) console.log(err);
              if (!server) {
                const media = await ӄʀǟӄɨռʐ.prepareMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`),
                  MessageType.image,
                  {
                    mimetype: Mimetype.png,
                  }
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    {
                      contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
                      footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}antilink on`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                          type: 1,
                        },
                        {
                          buttonId: `${ᴋᴇɪ}antilink off`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
              } else {
                server
                  .delete()
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
                const media = await ӄʀǟӄɨռʐ.prepareMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`),
                  MessageType.image,
                  {
                    mimetype: Mimetype.png,
                  }
                );
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    {
                      contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},  (admin)
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
║🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝
🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸👇🏽‍`,
                      footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
                      buttons: [
                        {
                          buttonId: `${ᴋᴇɪ}antilink on`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink on` },
                          type: 1,
                        },
                        {
                          buttonId: `${ᴋᴇɪ}antilink off`,
                          buttonText: { displayText: `${ᴋᴇɪ}antilink off` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                  );
              }
            }
          );
        }
      }
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
