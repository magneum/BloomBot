// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `request`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}request (followed by your group link)`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    console.log("🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️");
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (Needs.length === 0) {
      var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
        .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        )
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://chat.whatsapp.com/`)) {
      var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ
        .ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
          𝓜𝓮𝓮ʍօʀɛ
        )
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    let content = fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`);
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      content,
      MessageType.video,
      {
        mimetype: `video/gif`,
      }
    );
    await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          contentText: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},

┌────◆◇
│🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│☣️𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
└───────◆◇

*Thank you for Requesting to add 爪𝖎𝖟𝖚ӄ𝖎™ in your group!*
_*Now Wait!*_`,
          footerText: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
            4
          )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_`,
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
          contextInfo: {
            mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
          },
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    let members = [];
    for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
      members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
    }
    await ӄʀǟӄɨռʐ
      .sendMessage(
        "120363039360979234@g.us",
        fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mentionedJid: members,
          mimetype: "video/gif",
          caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
            4
          )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(" ")}`,
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    await ӄʀǟӄɨռʐ
      .sendMessage(
        "918250889325@s.whatsapp.net",
        fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
            4
          )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(" ")}`,
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    await ӄʀǟӄɨռʐ
      .sendMessage(
        "918436686758@s.whatsapp.net",
        fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
            4
          )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(" ")}`,
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    await ӄʀǟӄɨռʐ
      .sendMessage(
        "989035024059@s.whatsapp.net",
        fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍣𝐁𝐨𝐭 \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
            4
          )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(" ")}`,
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
