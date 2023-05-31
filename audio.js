require("dotenv").config();
const axios = require("axios");
const https = require("https");
const progress = require("progress-estimator");

progress.init({
  storagePath: ".progress-estimator",
});

function shrink(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
        (res) => {
          res.on("data", (chunk) => {
            resolve(chunk.toString());
          });
        }
      )
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function getDownloadLink(downloader, link) {
  return new Promise((resolve, reject) => {
    const downloadProcess = downloader(link, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeformats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    });
    progress(downloadProcess, "Obtaining: ")
      .then((downloadedData) => {
        const ultraLowFormats = downloadedData.formats.filter((format) =>
          ["599", "600"].includes(format.format_id)
        );
        const ultraLowFormat =
          ultraLowFormats[0] || ultraLowFormats[1] || ultraLowFormats;
        const lowFormats = downloadedData.formats.filter((format) =>
          ["139", "249", "250"].includes(format.format_id)
        );
        const lowFormat =
          lowFormats[0] || lowFormats[1] || lowFormats[2] || lowFormats;
        const mediumFormats = downloadedData.formats.filter((format) =>
          ["140", "251"].includes(format.format_id)
        );
        const mediumFormat =
          mediumFormats[0] || mediumFormats[1] || mediumFormats;
        let audioLink;
        if (mediumFormat.width !== undefined) {
          audioLink = mediumFormat.url;
        } else if (
          mediumFormat.width === undefined &&
          lowFormat.width !== undefined
        ) {
          audioLink = lowFormat.url;
        } else if (
          mediumFormat.width === undefined &&
          lowFormat.width === undefined &&
          ultraLowFormat.width !== undefined
        ) {
          audioLink = ultraLowFormat.url;
        }
        resolve(audioLink);
      })
      .catch((error) => reject(error));
  });
}

function getMetadata(query) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://magneum.vercel.app/api/youtube_sr?q=" + query,
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent": [
          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 YaBrowser/19.10.3.281 Yowser/2.5 Safari/537.36",
        ],
      },
    })
      .then(async (response) => {
        const fetchedData = response.data.youtube_search;
        const {
          YT_Id,
          TITLE,
          UPLOADED,
          VIEWS,
          DURATION_FULL,
          DURATION_SECONDS,
          AUTHOR_NAME,
          AUTHOR_CHANNEL,
          LINK,
          THUMB,
          HQ_IMAGE,
          DESCRIPTION,
        } = fetchedData;

        let audioLink;
        try {
          audioLink = await getDownloadLink(LINK);
        } catch (error) {
          return reject(error);
        }
        const shrinkedAudioLink = await shrink(audioLink);
        resolve({
          success: true,
          search: {
            YT_Id,
            TITLE,
            UPLOADED,
            VIEWS,
            DURATION_FULL,
            DURATION_SECONDS,
            AUTHOR_NAME,
            AUTHOR_CHANNEL,
            LINK,
            THUMB,
            HQ_IMAGE,
            DESCRIPTION,
          },
          audio: shrinkedAudioLink,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const query = "example query";
getMetadata(query)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
