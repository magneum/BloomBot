//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var path = require("path");
var fileName = path.basename(__filename);
var feeling = fileName.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    // Fetch emotion data from the API
    var response = await Voxbot.magfetch(
      Voxbot,
      `https://magneum.vercel.app/api/emotions?q=${feeling}`
    );
    var magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      // Handle API error
      await Voxbot.sendMessage(Voxchat.chat, {
        react: { text: "❌", key: Voxchat.key },
      });
      return Voxchat.reply(
        `*😥 Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌ Error*
> An API error has occurred. Please try again later.`
      );
    }
    var resultFilename = magData.resp.id + ".mp4";
    await Voxbot.ffmpeg
      .input(magData.meta.url)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .output(resultFilename)
      .on("end", async () => {
        var mentionedUser = "";
        if (Voxbot.args[0] && Voxbot.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          var mention = Voxbot.mentionByTag;
          mentionedUser =
            (await mention[0]) || Voxchat.msg.contextInfo.participant;
        } else if (Voxbot.mentionByReply) {
          // Check if a user is mentioned by replying to their message
          mentionedUser =
            Voxchat.mtype === "extendedTextMessage" &&
            Voxchat.message.extendedTextMessage.contextInfo != null
              ? Voxchat.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
        var message = `*Voxbot by magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${Voxbot.pushname}
*⚡for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await Voxbot.sendMessage(
          Voxchat.chat,
          {
            gifPlayback: true,
            video: Voxbot.fs.readFileSync(resultFilename),
            caption: message,
            mentions: [mentionedUser, Voxchat.sender],
          },
          { quoted: Voxchat }
        );
        // Remove the generated video file
        Voxbot.fs.unlinkSync(resultFilename);
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    // Handle any errors that occur during the process
    return Voxbot.handlerror(Voxbot, Voxchat, error);
  }
};
