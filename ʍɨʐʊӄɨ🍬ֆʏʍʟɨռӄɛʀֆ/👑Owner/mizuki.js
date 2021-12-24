// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const vers = require(`../../package.json`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const os = require("os");
const { formatp, runtime } = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/mizu`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `mizuki`,
  description: `ᴄʜᴇᴄᴋ 𝓜𝖎𝖟𝖚ӄ𝖎 system`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
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
      respon = `
┌────⭓ 𝐒𝐲𝐦𝐥𝐢𝐧𝐤 𝐈𝐧𝐟𝐨𝐬
│    
│シ︎💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
│シ︎⚙️ᴇɴɢɪɴᴇ: ${vers.vers}
│シ︎💻ᴘʟᴀᴛꜰᴏʀᴍ: ${os.platform()}
│シ︎🛰️ʟᴀᴛᴇɴᴄʏ: ${latensi.toFixed(4)}(s)
│シ︎☕ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}
│シ︎🎮ʀᴀᴍ: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│
└───────────⭓

┌────⭓ 𝐍𝐨𝐝𝐞𝐉𝐒 𝐌𝐞𝐦-𝐔𝐬𝐚𝐠𝐞:
│${Object.keys(used)
        .map(
          (key, _, arr) =>
            `${key.padEnd(
              Math.max(...arr.map((v) => v.length)),
              " "
            )}: ${formatp(used[key])}`
        )
        .join("\n│")}

┌────⭓ ${
        cpus[0]
          ? `𝐓𝐨𝐭𝐚𝐥 𝐂𝐏𝐔 𝐔𝐬𝐚𝐠𝐞
│${cpus[0].model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
              .map(
                (type) =>
                  `- *${(type + "*").padEnd(6)}: ${(
                    (100 * cpu.times[type]) /
                    cpu.total
                  ).toFixed(2)}%`
              )
              .join("\n")}


┌────⭓ 𝐂𝐏𝐔 𝐂𝐨𝐫𝐞(𝐬) 𝐔𝐬𝐚𝐠𝐞 (_${cpus.length}_ 𝐂𝐨𝐫𝐞 𝐂𝐏𝐔)
│${cpus
              .map(
                (cpu, i) =>
                  `${i + 1}. ${cpu.model.trim()} (${
                    cpu.speed
                  } ᴍʜᴢ)${Object.keys(cpu.times)
                    .map(
                      (type) =>
                        `- *${(type + "*").padEnd(6)}: ${(
                          (100 * cpu.times[type]) /
                          cpu.total
                        ).toFixed(2)}%`
                    )
                    .join("\n")}`
              )
              .join("\n\n")}`
          : ""
      }`.trim();
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      await ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: _𝔏𝔞𝔟_.MEE,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
          },
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*Hey •@${ꜱᴇɴᴅᴇʀeceived}*,  

${respon}`,
        }
      );
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
