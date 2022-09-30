`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Text_But = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, KryChat, ᴠʟᴋʏʀᴇ, MainText) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const buttonMessage = {
        contentText: MainText,
        footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: KryChat,
          contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ, Receiver] },
        })
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
      const buttonMessage = {
        contentText: MainText,
        footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: KryChat,
          contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
        })
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    }
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Image_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  KryChat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.image,
        { mimetype: Mimetype.png }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ, Receiver] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.image,
        { mimetype: Mimetype.png }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    }
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Video_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  KryChat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/mp4` }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/mp4` }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    }
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_GIF_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  KryChat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/gif` }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ, Receiver] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
      const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
        ᴠʟᴋʏʀᴇ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/gif` }
      );
      return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(
          ᴠʟᴋʏʀᴇ.chatId,
          {
            contentText: MainText,
            footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: KryChat,
            contextInfo: { mentionedJid: [ʟɴᴀᴍᴇ] },
          }
        )
        .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
    }
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_VideoAudio_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  KryChat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
    }
    const media = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
      ᴠʟᴋʏʀᴇ.chatId,
      { url: MediaUrl },
      MessageType.mp4Audio,
      { mimetype: `audio/mp4` }
    );
    const buttonMessages = {
      videoMessage: media.message.videoMessage,
      contentText: MainText,
      footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 5,
    };
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
      .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessages, MessageType.buttonsMessage, {
        mimetype: Mimetype.mp4Audio,

        quoted: KryChat,
      })
      .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Location_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  KryChat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      var Receiver =
        KryChat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
      const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d-]/g, "");
      const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
      const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
    }
    const media = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
      ᴠʟᴋʏʀᴇ.chatId,
      { url: MediaUrl },
      MessageType.location
    );
    const buttonMessages = {
      locationMessage: media.message.locationMessage,
      contentText: MainText,
      footerText: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔\nⒸ2022 ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 6,
    };
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
      .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessages, MessageType.buttonsMessage, {
        quoted: KryChat,
      })
      .catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat));
  } catch (error) {
    return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, KryChat);
  }
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = {
  MTB: ᴠʟᴋʏʀᴇ_Text_But,
  MGB: ᴠʟᴋʏʀᴇ_GIF_But,
  MIB: ᴠʟᴋʏʀᴇ_Image_But,
  MVB: ᴠʟᴋʏʀᴇ_Video_But,
  MLB: ᴠʟᴋʏʀᴇ_Location_But,
  MAB: ᴠʟᴋʏʀᴇ_VideoAudio_But,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
