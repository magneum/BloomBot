`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { formatp, runtime } = require(`../../Sakura🛰️Server/mizu`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const { performance } = require(`perf_hooks`);
const vers = require(`../../package.json`);
const fs = require(`fs`);
const os = require(`os`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
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
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
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

      let timestamp = speed();
      let latensi = speed() - timestamp;
      neww = performance.now();
      oldd = performance.now();
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: _𝔏𝔞𝔟_.MEE },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: `@${ꜱᴇɴᴅᴇʀeceived}, 🍁𝐌𝐢𝐳𝐮𝐤𝐢 𝐈𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
            
╔═══════ ★ 𝐒𝐲𝐦𝐥𝐢𝐧𝐤 𝐈𝐧𝐟𝐨𝐬
║シ︎ ⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ${vers.vers}
║シ︎ 💻𝐏𝐥𝐚𝐭𝐅𝐨𝐫𝐦: ${os.platform()}
║シ︎ 🛰️𝐋𝐚𝐭𝐞𝐧𝐜𝐲: ${latensi.toFixed(4)}(s)
║シ︎ ☕𝐔𝐩𝐓𝐢𝐦𝐞: ${runtime(process.uptime())}
║シ︎ 🎮𝐑𝐀𝐌: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╚════════════╝

╔═══════ 🌈𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬*
║シ︎ 🍣${ᴋᴇɪ}animemenu
║シ︎ 💰${ᴋᴇɪ}ecomenu
║シ︎ 🐙${ᴋᴇɪ}ownermenu
║シ︎ 📥${ᴋᴇɪ}downloadmenu
║シ︎ 🔰${ᴋᴇɪ}groupmenu
║シ︎ 🦄${ᴋᴇɪ}randommenu 
║シ︎ 🔎${ᴋᴇɪ}searchmenu
║シ︎ 🗂️${ᴋᴇɪ}ffmpegmenu
║シ︎ 🏝️${ᴋᴇɪ}filtersmenu
║シ︎ 🍄${ᴋᴇɪ}hentaimenu _(ᴀᴅᴍɪɴ-ᴏɴʟʏ)_
║シ︎ 🥃${ᴋᴇɪ}humanmenu _(ᴀᴅᴍɪɴ-ᴏɴʟʏ)_
╚════════════╝
🐙 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥: ${_𝔏𝔞𝔟_.HASH}
☘️𝐏𝐫𝐞𝐬𝐬 𝐅𝐨𝐫 𝐌𝐢𝐳𝐮𝐤𝐢 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬👇🏽‍`,
            footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n_${Clock}_`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}menu`,
                buttonText: { displayText: `${ᴋᴇɪ}menu` },
                type: 1,
              },
              {
                buttonId: `${ᴋᴇɪ}mizuki`,
                buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
          }
        )
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
