var gis = require("g-i-s");
gis("ultron", logResults);

function logResults(ℓαвєяяσя, results) {
  if (ℓαвєяяσя) {
    console.log(ℓαвєяяσя);
  } else {
    console.log(JSON.stringify(results, null, "  "));
  }
}
