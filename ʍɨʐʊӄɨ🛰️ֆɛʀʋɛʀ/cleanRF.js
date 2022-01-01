try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const fs = require(`fs`);
  const { JSDOM } = require(`jsdom`);
  const { window } = new JSDOM();
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.cleanRF = async (...ᴊᴜɴᴋꜱ) => {
    var startTime = window.performance.now();
    for (location of ᴊᴜɴᴋꜱ) {
      fs.unlink(location, (ℓαвєяяσя) => {
        if (ℓαвєяяσя) console.log(ℓαвєяяσя);
        else {
          console.log(`𝚂𝚢𝚜𝚝𝚎𝚖 𝙹𝚞𝚗𝚔 𝙲𝚕𝚎𝚊𝚗𝚎𝚍🗑️ ` + location);
        }
      });
    }
    var endTime = window.performance.now();
    console.log(
      `🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁

⬡===========⚡ Execution time: ${
        (endTime - startTime) / 1000
      }(s) ⚡===========⬡`
    );
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
