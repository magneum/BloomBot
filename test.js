const axios = require("axios");
axios({
  method: "get",
  url: "https://magneum.vercel.app/api/nsfw?q=nsfw",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
}).then(async (response) => {
  var mData = response.data[0];
  var _data = `╔══☰ ❗ADULT❗ 〕
║⦁ 💡Title: ${mData._title}
║⦁ 🖊️Author: ${mData._author}
║⦁ ❣️Topic: ${mData._topic}
╚══☰
╔══☰
║>  ❓META INFO❓
║⦁ 🎊Status: ${mData._status}
║⦁ 🔐Uuid: ${mData._uuid}
║⦁ 🗓️Date_create: ${mData._date_create}
║⦁ 🧀Query: ${mData._query}
║⦁ 🔗Url: ${mData._url}
║⦁ 📢Domain: ${mData._domain}
║⦁ 💯Sub_reddit_id: ${mData._sub_reddit_id}
║⦁ 🌐Web_link: ${mData._web_link}
╚═══════⋑\n`;
  console.log(_data, mData._thumbnail);
});
