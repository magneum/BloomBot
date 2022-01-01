// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `add`,
  𝓜𝓮𝓮6ʍօʀɛ: `🍁${ᴋᴇɪ}add <country-code>0000000000
🍁${ᴋᴇɪ}add 910000000000`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        return Mizuki_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `Who Is This Non-Admin •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Admin-Only Commands.

*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│🌶️𝐆𝐫𝐨𝐮𝐩𝐬: _Admins & Devs!_
│🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 _Everyone_
└───────〇`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        return Mizuki_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived}, *❌ʜᴏᴡ ᴄᴀɴ ɪ ᴜꜱᴇ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ᴡʜᴇɴ ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ?*

💡𝐅𝐢𝐱: _Make Me Admin First_`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        return Mizuki_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived}, 

┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│
│❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
│ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
└───────〇`
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      try {
        let number;
        const numbergot = Needs.join(` `);
        const numbers = numbergot.replaceAll(` `, ``);
        const addnum = numbers.replace(/[&\/\\#,+()$~%.'`:*?<>{}-]/g, ``);
        console.log(`🍁 ` + addnum + ` 🍁`);
        number = addnum;
        console.log(number);
        const exists = await ӄʀǟӄɨռʐ.isOnWhatsApp(number + `@s.whatsapp.net`);
        if (!exists) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
The number you're trying to add isn't available on WhatsApp.
Please verify the number again.

Example -
${ᴋᴇɪ}add <country-code>0000000000
${ᴋᴇɪ}add 910000000000`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        const request = ӄʀǟӄɨռʐ.groupAdd(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
          𝓜𝖎𝖟𝖚ӄ𝖎.owner,
          number + `@s.whatsapp.net`,
        ]);
        const response = await request;
        if (response[number + `@c.us`] == 408) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
The number entered cannot be added back before 24 hours.`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        } else if (response[number + `@c.us`] == 403) {
          for (const index in response.participants) {
            if ([number + `@c.us`] in response.participants[index]) {
              var grouplink =
                response.participants[index][number + `@c.us`].invite_code;
              var grouplinkexp =
                response.participants[index][number + `@c.us`].invite_code_exp;
            }
          }
          var invite = {
            caption: `Hi! You have been invited to join this WhatsApp group!`,
            groupJid: 𝓜𝖎𝖟𝖚ӄ𝖎.groupId,
            groupName: 𝓜𝖎𝖟𝖚ӄ𝖎.groupName,
            inviteCode: grouplink,
            inviteExpiration: grouplinkexp,
          };
          await ӄʀǟӄɨռʐ.sendMessage(
            number + `@s.whatsapp.net`,
            invite,
            MessageType.groupInviteMessage
          );
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
The number you're trying to add cannot be added to the group directly. 
An invite link has been sent to them.`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        } else if (response[number + `@c.us`] == 409) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
The number entered is already a member of this group.`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
${addnum} added successfully!`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
      } catch (ℓαвєяяσя) {
        if (ℓαвєяяσя.status == 400) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},


┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
