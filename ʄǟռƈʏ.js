try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)ֆǟӄʊʀǟ 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const fs = require(`fs`);
  const Kolor = require(`chalk`);
  const ascii = require(`ascii-table`);
  const ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ = new ascii().setHeading(
    `🍁𝐂𝐨𝐦𝐦𝐚𝐧 𝐍𝐚𝐦𝐞🍁`,
    `🍁𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗙𝗼𝗹𝗱𝗲𝗿🍁`,
    `🍁𝐇𝐞𝐚𝐥𝐭𝐡🍁`
  );
  const _𝔏𝔞𝔟_ = require(`./Sakura🛰️Server/_𝔏𝔞𝔟_`);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)ֆǟӄʊʀǟ 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  function ʄǟռƈʏ(ꜱɪᴛʀᴀᴘ, commandUsage) {
    const ᴍɪᴢᴜᴋɪᴅᴇʀꜱ = fs.readdirSync(`./Sakura🍁System`);
    for (const ʜᴏʟᴅᴇʀ of ᴍɪᴢᴜᴋɪᴅᴇʀꜱ) {
      const commandFiles = fs
        .readdirSync(`./Sakura🍁System/${ʜᴏʟᴅᴇʀ}`)
        .filter((ᴍɪꜱᴏ) => ᴍɪꜱᴏ.endsWith(`.js`));
      for (const ᴍɪꜱᴏ of commandFiles) {
        const command = require(`./Sakura🍁System/${ʜᴏʟᴅᴇʀ}/${ᴍɪꜱᴏ}`);
        ꜱɪᴛʀᴀᴘ.set(command.name, command);
        commandUsage.set(command.𝓜𝓮𝓮6ʍօʀɛ, command.description);
        if (_𝔏𝔞𝔟_.HEROKU === undefined) {
          try {
            ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ.addRow(
              Kolor.green(command.name.toUpperCase()),
              ʜᴏʟᴅᴇʀ,
              `✔️   𝘚𝘺𝘮-𝘓𝘪𝘯𝘬𝘦𝘥`
            );
          } catch {
            ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ.addRow(
              Kolor.green(command.name),
              ʜᴏʟᴅᴇʀ,
              `✔️   𝘚𝘺𝘮-𝘓𝘪𝘯𝘬𝘦𝘥`
            );
          }
          console.log(ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ.toString());
        }
      }
    }
  }
  module.exports = { ʄǟռƈʏ };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)ֆǟӄʊʀǟ 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
