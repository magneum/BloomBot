var pHxz = require("hxz-api");
var pSearch = require("yt-search");
var pShort = require("tinyurl-api");
var { yta } = require("./•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/y2mate");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
var { DownloaderHelper } = require("node-downloader-helper");

async function dLoader(string) {
  var raw = await pSearch(string);
  var item = raw.videos.slice(0, 1);
  console.log(item);
  item.forEach(function (data) {
    try {
      pHxz.youtube(data.url).then(async (response) => {
        var shorten = await pShort(response.mp3);
        let pLoad = new DownloaderHelper(shorten, "./", {
          fileName: response.id + ".mp3",
        });
        await pLoad.on("error", (error) => {
          Caught(ӄryӄnz, Vlkyre, error);
        });
        await pLoad.start().then(async () => {
          await ӄryӄnz
            .sendMessage(
              Vlkyre.chatID,
              {
                audio: { url: shorten },
                contextInfo: {
                  externalAdReply: {
                    title: `🍻𝐓𝐢𝐭𝐥𝐞: ${item.title}`,
                    body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
                    mediaType: 2,
                    thumbnail: await getBuffer(item.thumbnail),
                    mediaUrl: item.thumbnail,
                  },
                },
                mimetype: `audio/mpeg`,
                fileName: `${item.title}.mp3`,
              },
              { quoted: Vlkyre }
            )
            .catch((error) => Caught(ӄryӄnz, Vlkyre, error));
        });
      });
    } catch (error) {
      Caught(ӄryӄnz, Vlkyre, error);
    }
  });
}

dLoader("5 sec music");
