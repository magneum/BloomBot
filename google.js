const Google = require("google-it");
var yt = require("youtube.get-video-info");
yt.retrieve("LKbzXBEU", function (err, res) {
  if (err) throw err;
  console.log(res);
});
