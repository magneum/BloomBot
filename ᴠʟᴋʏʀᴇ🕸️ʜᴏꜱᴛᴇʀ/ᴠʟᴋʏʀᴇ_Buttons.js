`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
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
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Text_But = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, MainText) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const buttonMessage = {
        contentText: MainText,
        footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
          {
            buttonId: `${ᴋᴇɪ}request`,
            buttonText: { displayText: `${ᴋᴇɪ}request` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      const buttonMessage = {
        contentText: MainText,
        footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
          {
            buttonId: `${ᴋᴇɪ}request`,
            buttonText: { displayText: `${ᴋᴇɪ}request` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
        .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Image_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  chat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Video_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  chat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_GIF_But = async (ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, MainText, MediaUrl) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
            footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}request`,
                buttonText: { displayText: `${ᴋᴇɪ}request` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_VideoAudio_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  chat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
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
      footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}request`,
          buttonText: { displayText: `${ᴋᴇɪ}request` },
          type: 1,
        },
      ],
      headerType: 5,
    };
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
      .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessages, MessageType.buttonsMessage, {
        mimetype: Mimetype.mp4Audio,

        quoted: chat,
      })
      .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Location_But = async (
  ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
  chat,
  ᴠʟᴋʏʀᴇ,
  MainText,
  MediaUrl
) => {
  try {
    if (ᴠʟᴋʏʀᴇ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
      ᴠʟᴋʏʀᴇ.chatId,
      { url: MediaUrl },
      MessageType.location
    );
    const buttonMessages = {
      locationMessage: media.message.locationMessage,
      contentText: MainText,
      footerText: `∵ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 え ${vers.vers} ∴\n☊ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}request`,
          buttonText: { displayText: `${ᴋᴇɪ}request` },
          type: 1,
        },
      ],
      headerType: 6,
    };
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
      .sendMessage(ᴠʟᴋʏʀᴇ.chatId, buttonMessages, MessageType.buttonsMessage, {
        quoted: chat,
      })
      .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
  }
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
  MTB: ᴠʟᴋʏʀᴇ_Text_But,
  MGB: ᴠʟᴋʏʀᴇ_GIF_But,
  MIB: ᴠʟᴋʏʀᴇ_Image_But,
  MVB: ᴠʟᴋʏʀᴇ_Video_But,
  MLB: ᴠʟᴋʏʀᴇ_Location_But,
  MAB: ᴠʟᴋʏʀᴇ_VideoAudio_But,
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
