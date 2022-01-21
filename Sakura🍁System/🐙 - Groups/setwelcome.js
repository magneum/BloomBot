`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const PostDataBase = require(`../../Sakura🛰️Server/postDb`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}setwelcome* (message)/(off)/(delete)
🍁Do note, the setwelcome option is still enabled after you use the delete option.`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
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
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      if (
        ֆǟӄʊʀǟ.isGroup &&
        !ֆǟӄʊʀǟ.fromMe &&
        !ֆǟӄʊʀǟ.isSenderDev &&
        !ֆǟӄʊʀǟ.isSenderGroupAdmin
      ) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Admins Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin && !ֆǟӄʊʀǟ.isSenderDev) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
        );
      }
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived}, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
        );
      }

      var ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ = await PostDataBase.getMessage(
        ֆǟӄʊʀǟ.chatId,
        `setwelcome`
      );
      if (Needs.length == 0) {
        var enabled = await PostDataBase.checkSettings(
          ֆǟӄʊʀǟ.chatId,
          `setwelcome`
        );
        if (enabled === false || enabled === undefined) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message needs to be added first!
║🍁 use *${ᴋᴇɪ}setwelcome* (message)
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else if (enabled === `OFF`) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura Currently not greeting new members!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura Currently greeting new members!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      } else {
        if (Needs[0] === `OFF` || Needs[0] === `off` || Needs[0] === `Off`) {
          switched = `OFF`;
          await PostDataBase.changeSettings(ֆǟӄʊʀǟ.chatId, switched);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message has Been Disabled!
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
        if (Needs[0] === `ON` || Needs[0] === `on` || Needs[0] === `On`) {
          switched = `ON`;
          await PostDataBase.changeSettings(ֆǟӄʊʀǟ.chatId, switched);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message has Been Enabled!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
        if (Needs[0] === `delete`) {
          var ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ = await PostDataBase.deleteMessage(
            ֆǟӄʊʀǟ.chatId,
            `setwelcome`
          );
          if (ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === false || ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === undefined) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message needs to be added first!
║🍁 use *${ᴋᴇɪ}setwelcome* (message)
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message has Been Removed!
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
        text = ֆǟӄʊʀǟ.body.replace(
          ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
          ``
        );

        if (ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === false || ꜰᴇᴛᴄʜᴇᴅᴍꜱɢ === undefined) {
          await PostDataBase.setWelcome(ֆǟӄʊʀǟ.chatId, text);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message has Been Updated!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        } else {
          await PostDataBase.deleteMessage(ֆǟӄʊʀǟ.chatId, `setwelcome`);
          await PostDataBase.setWelcome(ֆǟӄʊʀǟ.chatId, text);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍁 Sakura's Welcome Message has Been Updated!
╚════════════╝
`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      }
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;