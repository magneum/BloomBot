let FormData = require("form-data");
let axios = require("axios");
const fs = require("fs");

const bodyForm = new FormData();
bodyForm.append("audio", fs.readFileSync("./Sakura🗑️Temp/Weeknd.mp3"));
bodyForm.append("apikey", "apivinz");
axios("https://api.zeks.me/api/searchmusic", {
method: "POST",
headers: {
"Content-Type": "multipart/form-data",
...bodyForm.getHeaders(),
},
data: bodyForm,
}).then(({ data }) => {
console.log(data);
});
