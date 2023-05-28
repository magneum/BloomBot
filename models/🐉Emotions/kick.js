<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../global.js");
var path = require("path");
var fileName = path.basename(__filename);
var feeling = fileName.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    // Fetch emotion data from the API
    var response = await WhatsBot.magfetch(
      WhatsBot,
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    // Fetch emotion data from the API
    var response = await voxbot.magfetch(
      voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      `https://magneum.vercel.app/api/emotions?q=${feeling}`
    );
    var magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      // Handle API error
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(
        `*😥 Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
      await voxbot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(
        `*😥 Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error*
> An API error has occurred. Please try again later.`
      );
    }
    var resultFilename = magData.resp.id + ".mp4";
<<<<<<< HEAD
    await WhatsBot.ffmpeg
=======
    await voxbot.ffmpeg
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
        if (WhatsBot.args[0] && WhatsBot.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          var mention = WhatsBot.mentionByTag;
          mentionedUser =
            (await mention[0]) || voxchat.msg.contextInfo.participant;
        } else if (WhatsBot.mentionByReply) {
=======
        if (voxbot.args[0] && voxbot.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          var mention = voxbot.mentionByTag;
          mentionedUser =
            (await mention[0]) || voxchat.msg.contextInfo.participant;
        } else if (voxbot.mentionByReply) {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          // Check if a user is mentioned by replying to their message
          mentionedUser =
            voxchat.mtype === "extendedTextMessage" &&
            voxchat.message.extendedTextMessage.contextInfo != null
              ? voxchat.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
<<<<<<< HEAD
        var message = `*WhatsBot by magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${WhatsBot.pushname}
*⚡for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await WhatsBot.sendMessage(
          voxchat.chat,
          {
            gifPlayback: true,
            video: WhatsBot.fs.readFileSync(resultFilename),
=======
        var message = `*voxbot by magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${voxbot.pushname}
*⚡for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await voxbot.sendMessage(
          voxchat.chat,
          {
            gifPlayback: true,
            video: voxbot.fs.readFileSync(resultFilename),
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            caption: message,
            mentions: [mentionedUser, voxchat.sender],
          },
          { quoted: voxchat }
        );
        // Remove the generated video file
<<<<<<< HEAD
        WhatsBot.fs.unlinkSync(resultFilename);
=======
        voxbot.fs.unlinkSync(resultFilename);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    // Handle any errors that occur during the process
<<<<<<< HEAD
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
