var qs = require("qs");
var axios = require("axios");
var cheerio = require("cheerio");
var { JSDOM } = require("jsdom");
var fetch = require("node-fetch");
var FormData = require("form-data");
var { fromBuffer } = require("file-type");
var YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

async function YouAudio(url) {
  return new Promise(async (resolve, reject) => {
    if (YouTube_Regex.test(url)) {
      let ytId = YouTube_Regex.exec(url);
      url = "https://youtu.be/" + ytId[1];
      async function post(url, formdata) {
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
      await post("https://www.y2mate.com/mates/en60/analyze/ajax", {
        url,
        q_auto: 0,
        ajax: 1,
      })
        .then((res) => res.json())
        .then((res) => {
          let document = new JSDOM(res.result).window.document;
          let type = document.querySelectorAll("td");
          let filesize = type[type.length - 10].innerHTML;
          let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || [
            "",
            "",
          ];
          let thumb = document.querySelector("img").src;
          let title = document.querySelector("b").innerHTML;
          post("https://www.y2mate.com/mates/en60/convert", {
            type: "youtube",
            _id: id[1],
            v_id: ytId[1],
            ajax: "1",
            token: "",
            ftype: "mp3",
            fquality: 128,
          })
            .then((res) => res.json())
            .then((res) => {
              let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
              resolve({
                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                thumb,
                title,
                filesizeF: filesize,
                filesize: KB,
              });
            })
            .catch(reject);
        })
        .catch(reject);
    } else reject("Wrong Url String!");
  });
}

module.exports.YouAudio = YouAudio;
