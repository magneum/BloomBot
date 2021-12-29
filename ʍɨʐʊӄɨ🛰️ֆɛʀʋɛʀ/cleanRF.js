const fs = require("fs");
exports.cleanRF = async (...locations) => {
  for (location of locations) {
    fs.unlink(location, (err) => {
      if (err) console.log(err);
      else {
        console.log("\nDeleted file at: " + location);
      }
    });
  }
};

