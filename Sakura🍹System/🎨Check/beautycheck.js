`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fetch = require("node-fetch");
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      if (ֆǟӄʊʀǟ.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var personreceived = Receiver.substring(0, Receiver.length - 15);
        var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
        var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      } else {
        var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
        var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      }
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require(`../../Sakura🛰️Server/Hold`);
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const key = _𝔏𝔞𝔟_.TEN;
      const cue = "beauty";
      let url = `https://api.tenor.com/v1/search?q=${cue}&key=${key}&limit=100`;
      let response = await fetch(url);
      let json = await response.json();
      const Video =
        json.results[Math.floor(Math.random() * json.results.length)].media[0]
          .mp4.url;
      console.log(Video);
      const Amount = Math.ceil(Math.random() * 100);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!json) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║ @${աɦօֆɛռȶɦǟȶռʊʍ}, Your Face Lmfao!
╚════════════╝`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (ֆǟӄʊʀǟ.isReply) {
        return Sakura_Buttons.MVB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║ 𝗕𝗲𝗮𝘂𝘁𝘆 𝗖𝗵𝗲𝗰𝗸: @${personreceived}
║ 𝗔𝘀𝗸𝗲𝗱 𝗕𝘆: @${աɦօֆɛռȶɦǟȶռʊʍ}
║ 𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Amount}%
╚════════════╝`,
          Video
        );
      } else {
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        const Type = Object.keys(chat.message)[0];
        const BeautyBody =
          Type === "listResponseMessage" &&
          chat.message.listResponseMessage.title
            ? chat.message.listResponseMessage.title
            : Type === "buttonsResponseMessage" &&
              chat.message.buttonsResponseMessage.selectedButtonId
            ? chat.message.buttonsResponseMessage.selectedButtonId
            : Type === "conversation" &&
              chat.message.conversation.startsWith(ᴋᴇɪ)
            ? chat.message.conversation
            : Type == "imageMessage" &&
              chat.message.imageMessage.caption.startsWith(ᴋᴇɪ)
            ? chat.message.imageMessage.caption
            : Type == "videoMessage" &&
              chat.message.videoMessage.caption.startsWith(ᴋᴇɪ)
            ? chat.message.videoMessage.caption
            : Type == "extendedTextMessage" &&
              chat.message.extendedTextMessage.text.startsWith(ᴋᴇɪ)
            ? chat.message.extendedTextMessage.text
            : "";
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        var BeautyCheck = BeautyBody.slice(1);
        var Tag = BeautyCheck.split(" ").join("");
        var ToRm = ᴋᴇɪ + newScpt;
        var Num = ToRm.length;
        var Mention = Tag.substring(Num);
        var MentionPerson = Mention + "@s.whatsapp.net";
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            url: Video,
          },
          MessageType.video,
          { mimetype: `video/mp4` }
        );
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            ֆǟӄʊʀǟ.chatId,
            {
              contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║ 𝗕𝗲𝗮𝘂𝘁𝘆 𝗖𝗵𝗲𝗰𝗸: @${Mention}
║ 𝗔𝘀𝗸𝗲𝗱 𝗕𝘆: @${աɦօֆɛռȶɦǟȶռʊʍ}
║ 𝗣𝗲𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲: ${Amount}%_
╚════════════╝`,
              footerText: `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐄𝐧𝐠𝐢𝐧𝐞: _KryoZen 3_\n${Clock} | ${Ping}ms`,
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
              quoted: chat,
              contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, MentionPerson] },
            }
          )
          .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
