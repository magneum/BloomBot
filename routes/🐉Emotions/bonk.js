//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../global.js");
const path = require("path");
const fileName = path.basename(__filename);
const feeling = fileName.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    // Fetch emotion data from the API
    const response = await ꪜᴏxʙᴏᴛ.magfetch(
      ꪜᴏxʙᴏᴛ,
      `https://magneum.vercel.app/api/emotions?q=${feeling}`
    );
    const magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      // Handle API error
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: { text: "❌", key: ᴠᴏxᴄ.key },
      });
      return ᴠᴏxᴄ.reply(
        `*😥 Apologies:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌ Error*
> An API error has occurred. Please try again later.`
      );
    }
    const resultFilename = magData.resp.id + ".mp4";
    await ꪜᴏxʙᴏᴛ.ffmpeg
      .input(magData.meta.url)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .output(resultFilename)
      .on("end", async () => {
        let mentionedUser = "";
        if (ꪜᴏxʙᴏᴛ.args[0] && ꪜᴏxʙᴏᴛ.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          const mention = ꪜᴏxʙᴏᴛ.mentionByTag;
          mentionedUser =
            (await mention[0]) || ᴠᴏxᴄ.msg.contextInfo.participant;
        } else if (ꪜᴏxʙᴏᴛ.mentionByReply) {
          // Check if a user is mentioned by replying to their message
          mentionedUser =
            ᴠᴏxᴄ.mtype === "extendedTextMessage" &&
            ᴠᴏxᴄ.message.extendedTextMessage.contextInfo != null
              ? ᴠᴏxᴄ.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
        const message = `*VoxBot by Magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${ꪜᴏxʙᴏᴛ.pushname}
*⚡For:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await ꪜᴏxʙᴏᴛ.sendMessage(
          ᴠᴏxᴄ.chat,
          {
            gifPlayback: true,
            video: ꪜᴏxʙᴏᴛ.fs.readFileSync(resultFilename),
            caption: message,
            mentions: [mentionedUser, ᴠᴏxᴄ.sender],
          },
          { quoted: ᴠᴏxᴄ }
        );
        // Remove the generated video file
        ꪜᴏxʙᴏᴛ.fs.unlinkSync(resultFilename);
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    // Handle any errors that occur during the process
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
