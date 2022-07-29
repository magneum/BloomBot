const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  vlkyreֆɨɖ: String,
  vlkyreƈɦɨɖ: String,
});
const memberModel = (module.exports = mongoose.model(
  "Djs.Memberupdates",
  memberSchema
));
