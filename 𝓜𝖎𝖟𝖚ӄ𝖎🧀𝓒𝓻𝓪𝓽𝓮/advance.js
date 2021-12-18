// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
exports.ButtonNSFW = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, ᴛᴏᴘɪᴄ) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  const downloader = await new Downloader({
    url: ᴛᴏᴘɪᴄ,
    directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads`,
    fileName: `ᴛᴏᴘɪᴄ.jpeg`,
    cloneFiles: false,
  });
  try {
    await downloader.download();
    let content = await fs.readFileSync(
      `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/nsfwdownloads/ᴛᴏᴘɪᴄ.jpeg`
    );
    const media = await ӄʀǟӄɨռʐ
      .prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.sender, content, MessageType.image, {
        mimetype: Mimetype.jpeg,
      })
      .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        {
          contentText: `Asked By? @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}\nNsfw Topic: ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName.toUpperCase()}`,
          footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}ass`,
              buttonText: { displayText: `${ᴋᴇɪ}ass` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          contextInfo: {
            stanzaId: chat.key.id,
            participant: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
            quotedMessage: {
              conversation: 𝓜𝖎𝖟𝖚ӄ𝖎.body,
            },
          },
        }
      )
      .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
  } catch (ℓαвєяяσя) {
    ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
  }
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙]  𝐌𝐢𝐳𝐮𝐤𝐢™   [🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
// exports.ButtonText = async (
//   WhoseButton,
//   ContentText,
//   MainButtons = [],
//   options = {}
// ) => {
//   await ӄʀǟӄɨռʐ.sendMessage(
//     WhoseButton,
//     {
//       contentText: ContentText,
//       footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
//       buttons: MainButtons,
//       headerType: 1,
//     },
//     MessageType.buttonsMessage,
//     options
//   );
// };

// var ᴛ = [
//   `./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎.jpg`,
//   `./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎2.jpg`,
//   `./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎3.jpg`,
//   `./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎4.jpg`,
// ];
// const MizukiMain = ᴛ[Math.floor(Math.random() * ᴛ.length)];
// let content = fs.readFileSync(MizukiMain);
// const media = await ӄʀǟӄɨռʐ.prepareMessage(
//   𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
//   content,
//   MessageType.image,
//   {
//     mimetype: Mimetype.jpeg || Mimetype.jpeg,
//   }
// );
// const buttons = [
//   {
//     buttonId: `${ᴋᴇɪ}menu`,
//     buttonText: { displayText: `${ᴋᴇɪ}menu` },
//     type: 1,
//   },
//   {
//     buttonId: `${ᴋᴇɪ}mizuki`,
//     buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
//     type: 1,
//   },
// ];

// exports.ButtonImage = async (
//   WhoseButton,
//   ContentText,
//   MainButtons = [],
//   options = {}
// ) => {
//   await ӄʀǟӄɨռʐ.sendMessage(
//     WhoseButton,
//     {
//       contentText: ContentText,
//       footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
//       buttons: MainButtons,
//       headerType: 1,
//     },
//     MessageType.buttonsMessage,
//     options
//   );
// };

// const ButtonImage = async (
//   WhoseButton,
//   ContentText,
//   gam1,
//   MainButtons = [],
//   options = {}
// ) => {
//   kma = gam1;
//   mhan = await ӄʀǟӄɨռʐ.prepareMessage(from, kma, image);
//   const buttonMessages = {
//     imageMessage: mhan.message.imageMessage,
//     contentText: ContentText,
//     footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
//     buttons: MainButtons,
//     headerType: 4,
//   };
//   ӄʀǟӄɨռʐ.sendMessage(
//     WhoseButton,
//     buttonMessages,
//     MessageType.buttonsMessage,
//     options
//   );
// };

// const ButtonVideo = async (WhoseButton, ContentText,  vid1, MainButtons = [], options = {}) => {
//   kma = vid1;
//   mhan = await ӄʀǟӄɨռʐ.prepareMessage(from, kma, video);
//   const buttonMessages = {
//     videoMessage: mhan.message.videoMessage,
//     contentText: ContentText,
//     footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
//     buttons: MainButtons,
//     headerType: 5,
//   };
//   ӄʀǟӄɨռʐ.sendMessage(WhoseButton, buttonMessages, MessageType.buttonsMessage, options);
// };

// const ButtonLocation = async (
//   WhoseButton,
//   ContentText,
//
//   gam1,
//   MainButtons = [],
//   options = {}
// ) => {
//   kma = gam1;
//   mhan = await ӄʀǟӄɨռʐ.prepareMessage(from, kma, location);
//   const buttonMessages = {
//     locationMessage: mhan.message.locationMessage,
//     contentText: ContentText,
//     footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
//     buttons: MainButtons,
//     headerType: 6,
//   };
//   ӄʀǟӄɨռʐ.sendMessage(WhoseButton, buttonMessages, MessageType.buttonsMessage, options);
// };
