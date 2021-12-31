var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);

const MizukiNeeded = ӄʀǟӄɨռʐ.groupAdd("120363039114378492@g.us", [
  𝓜𝖎𝖟𝖚ӄ𝖎.owner,
  ꜱᴇɴᴅᴇʀeceived + `@s.whatsapp.net`,
]);
const Verified = await MizukiNeeded;
if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 408) {
  console.log("The number entered cannot be added back before 24 hours.");
} else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 403) {
  console.log("The number entered is private!");
} else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 409) {
  console.log("The number entered is already a member of this group.");
} else {
  console.log("Added successfully!");
}
