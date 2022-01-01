try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const MizukiRegister = async (𝓜𝖎𝖟𝖚ӄ𝖎) => {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const register = ӄʀǟӄɨռʐ.groupAdd(`120363039114378492@g.us`, [
      𝓜𝖎𝖟𝖚ӄ𝖎.owner,
      ꜱᴇɴᴅᴇʀɪᴅ,
    ]);
    const Verified = await register;
    if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 408) {
      return false;
    } else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 403) {
      return false;
    } else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 409) {
      return true;
    } else {
      return true;
    }
  };
  module.exports = { MizukiRegister };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
