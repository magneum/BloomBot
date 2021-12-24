// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `new`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      let members = [];
      for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
        members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        let content = await fs.readFileSync(_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          {
            mimetype: Mimetype.png,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `@${ꜱᴇɴᴅᴇʀeceived}, ❌ You Are Not Allowed!`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          buttonMessage,
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          }
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      timestampe = speed();
      latensie = speed() - timestampe;
      𝓜𝓮𝓮s = await ӄʀǟӄɨռʐ.chats.all();
      for (let _ of 𝓜𝓮𝓮s) {
        await ӄʀǟӄɨռʐ.sendMessage(
          _.jid,
          {
            url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`,
          },
          MessageType.video,
          {
            quoted: chat,
            mimetype: "video/gif",
            contextInfo: {
              mentionedJid: members,
              forwardingScore: 999,
              isForwarded: true,
            },
            sendEphemeral: true,
            caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 *EVERYONE!,*
_ʏᴏᴜʀ ᴀꜱꜱɪꜱꜱᴛᴀɴᴛ ꜰᴏʀ ᴍᴀᴋɪɴɢ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ ᴀ ʙᴇᴛᴛᴇʀ ᴀᴅᴠᴀɴᴄᴇ ᴀᴘᴘ!_

┌────⭓🤖 𝐍𝐞𝐰 𝗦𝘁𝗮𝗯𝗹𝗲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬
│🛸 *${ᴋᴇɪ}antilink* _(on/off)_
│*⚠️All Group Admins Please Turn-On*
│*Antilink For Your Groups*
└────────⭓


┌────⭓🤖 𝐍𝐞𝐰 𝐏𝐮𝐛𝐥𝐢𝐜-𝐁𝐞𝐭𝐚 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬
│🍹 *${ᴋᴇɪ}request* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}bugreport* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}getdesc* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}getdp* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}play* _(ᴍᴜꜱɪᴄ-ᴅʟ)_
│🍹 *${ᴋᴇɪ}google* _(ᴜᴘᴅᴀᴛᴇᴅ)_
│🍹 *${ᴋᴇɪ}spotify* _(ᴍᴜꜱɪᴄ-ᴅʟ)_
└────────⭓

🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
☣️𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0`,
          }
        );
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
