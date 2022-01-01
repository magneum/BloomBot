try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { sizeFormatter } = require(`human-readable`);
  exports.runtime = function (seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var Echat = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? ` day, ` : ` days, `) : ``;
    var hDisplay = h > 0 ? h + (h == 1 ? ` hour, ` : ` hours, `) : ``;
    var mDisplay =
      Echat > 0 ? Echat + (Echat == 1 ? ` minute, ` : ` minutes, `) : ``;
    var sDisplay = s > 0 ? s + (s == 1 ? ` second` : ` seconds`) : ``;
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };

  exports.formatp = sizeFormatter({
    std: `JEDEC`,
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
