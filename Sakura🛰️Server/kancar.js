require(`./konfs`);
const fetch = require(`node-fetch`);
(async () => {
  let res = await fetch(
    global.API("https://wall.alphacoders.com/api2.0", "/get.php", {
      auth: "3e7756c85df54b78f934a284c11abe4e",
      method: "search",
      term: "geometry",
    })
  );
  let json = await res.json();
  var Fotu =
    json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)];
  console.log("════════════════════════| " + Fotu.url_image);
})();
