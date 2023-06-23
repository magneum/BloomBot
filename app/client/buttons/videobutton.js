require("🌟/config/index.js");

module.exports = async (BloomBot, Sockey, context, video) => {
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
  let mentions = [Sockey.sender];
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
  const caption = `*📢Chat Id:* ${Sockey.chat}\n${context}
  
*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`;
  const messageOptions = {
    video: buffer,
    caption: caption,
    gifPlayback: true,
    mentions: mentions,
  };
  await BloomBot.sendMessage(Sockey.chat, messageOptions, {
    quoted: Sockey,
  }).catch((e) => console.log(e));
};

// module.exports = async (BloomBot, Sockey, context, νidēo) => {
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
// let mentions = [Sockey.sender];

// switch (true) {
// case BloomBot.isReply:
// receiver =
// BloomBot.mtype == "extendedTextMessage" &&
// BloomBot.message.extendedTextMessage.contextInfo != null
// ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
// : "";

// mentions.push(receiver);

// await BloomBot.sendMessage(
// Sockey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${Sockey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: Sockey }
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
// Sockey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${Sockey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: Sockey }
// ).catch((e) => console.log(e));
// break;

// default:
// await BloomBot.sendMessage(
// Sockey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${Sockey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: Sockey }
// ).catch((e) => console.log(e));
// break;
// }
// };
