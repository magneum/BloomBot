try {
  (async () => {
    const fetch = require(`node-fetch`);
    let url = `https://api.tenor.com/v1/`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    console.log(`=========================================`);
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0].mp4
        .url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0].gif
        .url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .webm.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .tinygif.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .mediumgif.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .nanomp4.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .loopedmp4.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .tinymp4.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .tinywebm.url
    );
    console.log(
      json.results[Math.floor(Math.random() * json.results.length)].media[0]
        .nanogif.url
    );
  })();
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
