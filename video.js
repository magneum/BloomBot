// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { ytv } = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/youmaker`);
const _𝔏𝔞𝔟_ = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require(`request`);
const yts = require(`yt-search`);
const axios = require(`axios`);
const vers = require(`./package.json`);
const fs = require(`fs`);
const RegexYouTube =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `video`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    const Url =
      "https://dl22.dlmate14.xyz/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyaDF5SjRwd2hNc0Q2OEh0WVVneGZEckx0eGNKNlF3bnR6eUFaQlo1V3FlZDltSE5UQ1p0NHd1SHpiVDBjOHlyQ3ZhOFl0bEMrOThSa0s5eWNEeDAyTlFwVkxXU0kyZUFwdGhRaWRFOEJZencyaWUzS1dTdmhEMzdsU0Q0VWliZkMwWXR5OENNUENOb01rY2hUMlpQS0N5ZzlZV3BEeWF2OGtaajZiUDVVZmwxZTg2dW9zPQ%3D%3D";
    const filename = "youtube.mp4";
    const DVideo = async (url) => {
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, function () {
        console.log("Sending");
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            fs.readFileSync(filename),
            MessageType.video,
            {
              quoted: chat,
              mimetype: Mimetype.mp4Audio,
            }
          )
          .then(console.log("Sending"), fs.unlinkSync(filename));
      });
    };
    DVideo(Url);
  },
};
