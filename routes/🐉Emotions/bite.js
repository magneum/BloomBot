//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  try {
    VօxB໐t.axios({
      method: "get",
      url: "https://magneum.vercel.app/api/emotions?q=" + pfname,
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }).then(async (response) => {
      var mData = response.data;
      console.log(mData);
      if (!mData.meta.url) {
        await VօxB໐t.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌ Error* 
> There has been an API Error. Please try again later.`
        );
      }
      resp = mData.resp.id + ".mp4";
      VօxB໐t.ffmpeg
        .input(mData.meta.url)
        .outputOptions([
          "-pix_fmt yuv420p",
          "-c:v libx264",
          "-movflags +faststart",
          "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
        ])
        .output(resp)
        .on("end", async () => {
          if (VօxB໐t.args[0] && VօxB໐t.args[0].startsWith("@")) {
            let mention = VօxB໐t.mentionByTag;
            let dataFor =
              (await mention[0]) || νℓкhat.msg.contextInfo.participant;
            return await VօxB໐t.sendMessage(
              νℓкhat.chat,
              {
                gifPlayback: true,
                video: VօxB໐t.fs.readFileSync(resp),
                caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*🎋Feeling:* ${pfname}
*📢From:* ${VօxB໐t.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
                mentions: [dataFor, νℓкhat.sender],
              },
              { quoted: νℓкhat }
            ).then(VօxB໐t.fs.unlinkSync(resp));
          } else if (VօxB໐t.mentionByReply) {
            let dataFor =
              νℓкhat.mtype == "extendedTextMessage" &&
              νℓкhat.message.extendedTextMessage.contextInfo != null
                ? νℓкhat.message.extendedTextMessage.contextInfo.participant ||
                  ""
                : "";
            return await VօxB໐t.sendMessage(
              νℓкhat.chat,
              {
                gifPlayback: true,
                video: VօxB໐t.fs.readFileSync(resp),
                caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*🎋Feeling:* ${pfname}
*📢From:* ${VօxB໐t.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
                mentions: [dataFor, νℓкhat.sender],
              },
              { quoted: νℓкhat }
            ).then(VօxB໐t.fs.unlinkSync(resp));
          } else {
            return await VօxB໐t.sendMessage(
              νℓкhat.chat,
              {
                gifPlayback: true,
                video: VօxB໐t.fs.readFileSync(resp),
                caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*⚡For:* ${VօxB໐t.pushname}
*🎋Feeling:* ${pfname}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
              },
              { quoted: νℓкhat }
            ).then(VօxB໐t.fs.unlinkSync(resp));
          }
        })
        .on("error", (error) => console.log(error))
        .run();
    });
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
  }
};
