//external modules
var { JSDOM } = require("jsdom");
var fetch = require("node-fetch");
var FormData = require("form-data");
var axios = require("axios");
var cheerio = require("cheerio");
var qs = require("qs");
var { fromBuffer } = require("file-type");

//varuable
var ytIdRegex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

//fucntion
function post(url, formdata) {
console.log(
Object.keys(formdata)
.map((key) => `${key}=${encodeURIComponent(formdata[key])}`)
.join("&")
);
return fetch(url, {
method: "POST",
headers: {
accept: "*/*",
"accept-language": "en-US,en;q=0.9",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
},
body: Object.keys(formdata)
.map((key) => `${key}=${encodeURIComponent(formdata[key])}`)
.join("&"),
});
}

function yta(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url);
url = "https://youtu.be/" + ytId[1];
post("https://www.y2mate.com/mates/en60/analyze/ajax", {
url,
q_auto: 0,
ajax: 1,
})
.then((res) => res.text())
.then((res) => {
let document = new JSDOM(res.result).window.document;
let type = document.querySelectorAll("td");
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || [
"",
"",
];

post("https://www.y2mate.com/mates/en60/convert", {
type: "youtube",
_id: id[1],
v_id: ytId[1],
ajax: "1",
token: "",
ftype: "mp3",
fquality: 128,
})
.then((res) => res.text())
.then((res) => {
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
});
})
.catch(reject);
})
.catch(reject);
} else reject("URL INVALID");
});
}
module.exports.yta = yta;
