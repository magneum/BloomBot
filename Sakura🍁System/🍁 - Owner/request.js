`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)ֆǟӄʊʀǟ 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const { Encoder, QRByte, ErrorCorrectionLevel } = require(`@nuintun/qrcode`);
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const jsoncool = await JSON.parse(
        fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
      );
      await jsoncool.push(ֆǟӄʊʀǟ.sender);
      await fs.writeFileSync(
        `./Sakura🛰️Server/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(ֆǟӄʊʀǟ.sender);
        await fs.writeFileSync(
          `./Sakura🛰️Server/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 15000);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (Needs.length === 0) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢?

• ᴊᴏɪɴ ᴍɪᴢᴜᴋɪ ɢʀᴏᴜᴘ.
• ɪɴ ʙᴏᴛ'ꜱ ᴅᴍ: ${ᴋᴇɪ}ʀᴇQᴜᴇꜱᴛ _<ʏᴏᴜʀ ɢᴄ ʟɪɴᴋ>_

_ɪꜰ ʏᴏᴜ ᴅᴏ ɴᴏᴛ ꜰᴏʟʟᴏᴡ/ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜᴇɴ ᴡᴇ *ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅᴇᴠꜱ* ᴅᴏɴᴏᴛ ᴄᴀʀᴇ!_`
        );
      }
      if (
        !ֆǟӄʊʀǟ.body.includes(_𝔏𝔞𝔟_.HASH) &&
        !ֆǟӄʊʀǟ.body.includes(`https://chat.whatsapp`)
      ) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢?

• ᴊᴏɪɴ ᴍɪᴢᴜᴋɪ ɢʀᴏᴜᴘ.
• ɪɴ ʙᴏᴛ'ꜱ ᴅᴍ: ${ᴋᴇɪ}ʀᴇQᴜᴇꜱᴛ _<ʏᴏᴜʀ ɢᴄ ʟɪɴᴋ>_

_ɪꜰ ʏᴏᴜ ᴅᴏ ɴᴏᴛ ꜰᴏʟʟᴏᴡ/ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜᴇɴ ᴡᴇ *ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅᴇᴠꜱ* ᴅᴏɴᴏᴛ ᴄᴀʀᴇ!_`
        );
      }
      const qrcode = new Encoder();
      qrcode.setEncodingHint(true);
      qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.Q);
      qrcode.write(
        new QRByte(
          `${Needs.join(` `).replace(
            `https://chat.whatsapp.com/`,
            `?verified/`
          )}\n` +
            `\n` +
            `*ReqBy:* @${ꜱᴇɴᴅᴇʀeceived}` +
            `\n` +
            `*ChatID:* ${ֆǟӄʊʀǟ.chatId}`
        )
      );
      qrcode.make();
      const output = qrcode.toDataURL().split(`,`)[1];
      const imagePath = `./Sakura🗑️Temp/${Ping}_${ꜱᴇɴᴅᴇʀɪᴅ}_${FinalName}.png`;
      fs.writeFileSync(
        imagePath,
        output,
        { encoding: `base64` },
        async function (ℓαвєяяσя) {
          if (ℓαвєяяσя) {
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥺𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
◇ ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅɪᴅɴ'ᴛ ꜱᴇɴᴅ ᴀɴʏ ʀᴇꜱᴘᴏɴꜱᴇ
`
            );
          }
        }
      );
      await Sakura_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
⬡ 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐢𝐧𝐠 𝐭𝐨 𝐚𝐝𝐝 _𝐌𝐢𝐳𝐮𝐤𝐢🍹_ 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩!
⬡ 𝐍𝐨𝐰 𝐒𝐞𝐧𝐝 𝐓𝐡𝐢𝐬 _𝐐𝐑-𝐂𝐎𝐃𝐄_ 𝐢𝐧 𝐌𝐢𝐳𝐮𝐤𝐢 𝐆𝐫𝐨𝐮𝐩! _(ɴᴏᴛ-ʟɪɴᴋ)_
🐙 𝐆𝐑𝐎𝐔𝐏: ${_𝔏𝔞𝔟_.HASH}`,
        imagePath
      );
      await cleanRF.cleanRF(imagePath);
      return await ӄʀǟӄɨռʐ.sendMessage(
        `19175804221@s.whatsapp.net`,
        `🍪 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*\n🔗𝐋𝐢𝐧𝐤 ${Needs.join(` `)}`,
        MessageType.text
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)ֆǟӄʊʀǟ 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
