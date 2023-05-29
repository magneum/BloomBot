//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var path = require("path");
var fileName = path.basename(__filename);
var feeling = fileName.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    // Fetch emotion data from the API
    var response = await Foxbot.magfetch(
      Foxbot,
      `https://magneum.vercel.app/api/emotions?q=${feeling}`
    );
    var magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      // Handle API error
      await Foxbot.sendMessage(Foxchat.chat, {
        react: { text: "❌", key: Foxchat.key },
      });
      return Foxchat.reply(
        `*😥 Apologies:* _${Foxbot.pushname || Foxbot.Tname}_
*❌ Error*
> An API error has occurred. Please try again later.`
      );
    }
    var resultFilename = magData.resp.id + ".mp4";
    await Foxbot.ffmpeg
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
        if (Foxbot.args[0] && Foxbot.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          var mention = Foxbot.mentionByTag;
          mentionedUser =
            (await mention[0]) || Foxchat.msg.contextInfo.participant;
        } else if (Foxbot.mentionByReply) {
          // Check if a user is mentioned by replying to their message
          mentionedUser =
            Foxchat.mtype === "extendedTextMessage" &&
            Foxchat.message.extendedTextMessage.contextInfo != null
              ? Foxchat.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
        var message = `*Foxbot by magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${Foxbot.pushname}
*⚡for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await Foxbot.sendMessage(
          Foxchat.chat,
          {
            gifPlayback: true,
            video: Foxbot.fs.readFileSync(resultFilename),
            caption: message,
            mentions: [mentionedUser, Foxchat.sender],
          },
          { quoted: Foxchat }
        );
        // Remove the generated video file
        Foxbot.fs.unlinkSync(resultFilename);
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    // Handle any errors that occur during the process
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
