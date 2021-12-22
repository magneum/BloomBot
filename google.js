const googleIt = require("google-it");

googleIt({ query: "pornhub" })
  .then((results) => {
    console.log(results);
  })
  .catch((e) => {
    console.log(e);
  });
