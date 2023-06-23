require("🌟/config/index.js");

module.exports = async (BloomBot, chatkey, context, video) => {
  let buffer;
  if (Buffer.isBuffer(video)) {
    buffer = video;
  } else if (/^data:.*?\/.*?;base64,/i.test(video)) {
    buffer = Buffer.from(video.split(",")[1], "base64");
  } else if (/^https?:\/\//.test(video)) {
    buffer = await BloomBot.getBuffer(video);
  } else if (await BloomBot.fs.existsSync(video)) {
    buffer = await BloomBot.fs.readFileSync(video);
  } else {
    buffer = Buffer.alloc(0);
  }
  let receiver;
  let mentions = [chatkey.sender];
  await (async () => {
    switch (true) {
      case BloomBot.isReply:
        receiver =
          BloomBot.mtype === "extendedTextMessage" &&
          BloomBot.message.extendedTextMessage.contextInfo != null
            ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
            : "";
        mentions.push(receiver);
        break;
      case BloomBot.mentionByTag:
        receiver =
          BloomBot.mtype === "extendedTextMessage" &&
          BloomBot.message.extendedTextMessage.contextInfo != null
            ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
            : [];
        mentions.push(receiver);
        break;
    }
  })();
  const caption = `*📢Chat Id:* ${chatkey.chat}\n${context}
  
*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`;
  const messageOptions = {
    video: buffer,
    caption: caption,
    gifPlayback: true,
    mentions: mentions,
  };
  await BloomBot.sendMessage(chatkey.chat, messageOptions, {
    quoted: chatkey,
  }).catch((e) => console.log(e));
};

// module.exports = async (BloomBot, chatkey, context, νidēo) => {
// let buffer = Buffer.isBuffer(νidēo)
// ? νidēo
// : /^data:.*?\/.*?;base64,/i.test(νidēo)
// ? Buffer.from(νidēo.split(",")[1], "base64")
// : /^https?:\/\//.test(νidēo)
// ? await BloomBot.getBuffer(νidēo)
// : (await BloomBot.fs.existsSync(νidēo))
// ? await BloomBot.fs.readFileSync(νidēo)
// : Buffer.alloc(0);

// let receiver;
// let mentions = [chatkey.sender];

// switch (true) {
// case BloomBot.isReply:
// receiver =
// BloomBot.mtype == "extendedTextMessage" &&
// BloomBot.message.extendedTextMessage.contextInfo != null
// ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
// : "";

// mentions.push(receiver);

// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;

// case BloomBot.mentionByTag:
// receiver =
// BloomBot.mtype == "extendedTextMessage" &&
// BloomBot.message.extendedTextMessage.contextInfo != null
// ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
// : [];

// mentions.push(receiver);

// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;

// default:
// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;
// }
// };
