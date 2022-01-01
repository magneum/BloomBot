// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
const { performance } = require(`perf_hooks`);
const vers = require(`../../package.json`);
const os = require(`os`);
const { formatp, runtime } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/mizu`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `symlink`,
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
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
└───────〇`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else {
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const used = process.memoryUsage();
        const cpus = os.cpus().map((cpu) => {
          cpu.total = Object.keys(cpu.times).reduce(
            (last, type) => last + cpu.times[type],
            0
          );
          return cpu;
        });
        const cpu = cpus.reduce(
          (last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
          },
          {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0,
            },
          }
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        let timestamp = speed();
        let latensi = speed() - timestamp;
        neww = performance.now();
        oldd = performance.now();
        await ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`,
          },
          MessageType.video,
          {
            mimetype: `video/gif`,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            caption: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (owner/dev), ${Timers} 

┌────◆➤ *🍁Starting Mizuki Server Sym-Link...*
│
│シ︎💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
│シ︎⚙️ᴇɴɢɪɴᴇ: ${vers.vers}
│シ︎💻ᴘʟᴀᴛꜰᴏʀᴍ: ${os.platform()}
│シ︎🛰️ʟᴀᴛᴇɴᴄʏ: ${latensi.toFixed(4)}(s)
│シ︎☕ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}
│シ︎🎮ʀᴀᴍ: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
└───────〇

⬡=====🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁 =====⬡
*◆ isSenderDev:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev}
*◆ isCmd:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isCmd}
*◆ commandName:* ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName}
*◆ groupName:* ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
*◆ mimeType:* ${𝓜𝖎𝖟𝖚ӄ𝖎.mimeType}
*◆ type:* ${𝓜𝖎𝖟𝖚ӄ𝖎.type}
*◆ chatId:* ${𝓜𝖎𝖟𝖚ӄ𝖎.chatId}
*◆ fromMe:* ${𝓜𝖎𝖟𝖚ӄ𝖎.fromMe}
*◆ owner:* ${𝓜𝖎𝖟𝖚ӄ𝖎.owner}
*◆ sender:* ${𝓜𝖎𝖟𝖚ӄ𝖎.sender}
*◆ isReply:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReply}
*◆ replyMessageId:* ${𝓜𝖎𝖟𝖚ӄ𝖎.replyMessageId}
*◆ replyParticipant:* ${𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant}
*◆ replyMessage:* ${𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage}
*◆ isGroup:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isGroup}
*◆ isPm:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isPm}
*◆ isImage:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isImage}
*◆ isReplyImage:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage}
*◆ imageCaption:* ${𝓜𝖎𝖟𝖚ӄ𝖎.imageCaption}
*◆ isBotGroupAdmin:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin}
*◆ isGIF:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isGIF}
*◆ isReplyGIF:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplyGIF}
*◆ isSticker:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isSticker}
*◆ isReplySticker:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplySticker}
*◆ isReplyAnimatedSticker:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplyAnimatedSticker}
*◆ isVideo:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isVideo}
*◆ isReplyVideo:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplyVideo}
*◆ isAudio:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isAudio}
*◆ isReplyAudio:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isReplyAudio}
*◆ isSenderGroupAdmin:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin}
*◆ groupAdmins:* ${𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins}
*◆ groupId:* ${𝓜𝖎𝖟𝖚ӄ𝖎.groupId}
*◆ isAntilink:* ${𝓜𝖎𝖟𝖚ӄ𝖎.isAntilink}
*◆ alias:* ${𝓜𝖎𝖟𝖚ӄ𝖎.alias}
⬡=====🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁 =====⬡`,
          }
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
