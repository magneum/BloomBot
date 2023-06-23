require("🌟/config/index.js");

module.exports = async (BloomBot, chatkey, context, image) => {
  let buffer;
  if (Buffer.isBuffer(image)) {
    buffer = image;
  } else if (/^data:.*?\/.*?;base64,/i.test(image)) {
    buffer = Buffer.from(image.split(",")[1], "base64");
  } else if (/^https?:\/\//.test(image)) {
    buffer = await BloomBot.getBuffer(image);
  } else if (await BloomBot.fs.existsSync(image)) {
    buffer = await BloomBot.fs.readFileSync(image);
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
    image: buffer,
    caption: caption,
    mentions: mentions,
  };
  BloomBot.sendMessage(chatkey.chat, messageOptions, { quoted: chatkey }).catch(
    (e) => console.log(e)
  );
};

// module.exports = async (BloomBot, chatkey, context, imåge) => {
// let buffer = Buffer.isBuffer(imåge)
// ? imåge
// : /^data:.*?\/.*?;base64,/i.test(imåge)
// ? Buffer.from(imåge.split(",")[1], "base64")
// : /^https?:\/\//.test(imåge)
// ? await BloomBot.getBuffer(imåge)
// : await BloomBot.fs.existsSync(imåge)
// ? await BloomBot.fs.readFileSync(imåge)
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
// BloomBot.sendMessage(
// chatkey.chat,
// {
// image: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
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
// BloomBot.sendMessage(
// chatkey.chat,
// {
// image: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;

// default:
// BloomBot.sendMessage(
// chatkey.chat,
// {
// image: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;
// }
// };
