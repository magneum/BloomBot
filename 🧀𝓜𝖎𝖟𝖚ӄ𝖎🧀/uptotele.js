`🐙============================================================================================================================<⚡>`;
const FormData = require("form-data");
const fetch = require("node-fetch");
const { fromBuffer } = require("file-type");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
`🐙============================================================================================================================<⚡>`;
const uptotele = async (media) =>
  new Promise(async (resolve, reject) => {
    try {
      let { ext } = await fromBuffer(media);
      console.log("Uploading image to server telegra.ph");
      let form = new FormData();
      form.append("file", media, "tmp" + ext);
      await fetch("https://telegra.ph/upload", {
        method: "POST",
        body: form,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) return reject(res.error);
          resolve("https://telegra.ph" + res[0].src);
          console.log("ok success");
        })
        .catch((err) => reject(err));
    } catch (e) {
      return console.log(e);
    }
  });
`🐙============================================================================================================================<⚡>`;
const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};

exports.getBuffer = getBuffer;
exports.uptotele = uptotele;
`🐙============================================================================================================================<⚡>`;
