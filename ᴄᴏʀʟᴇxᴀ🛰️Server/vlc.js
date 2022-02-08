const { exec } = require("child_process");

var FFmpegFile = `./ᴄᴏʀʟᴇxᴀ☕ꜱʜᴏᴘ/${Date.now()}.mp4`;

(async () => {
  exec(
    `youtube-dl -o '${FFmpegFile}' -f 'best[filesize<50M]' 'https://youtu.be/8oVjbVmN_ZY'`
  );
})();
