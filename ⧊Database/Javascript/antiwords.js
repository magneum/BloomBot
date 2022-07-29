const mongoose = require("mongoose");
const antiwordsSchema = new mongoose.Schema({
  vlkyreֆɨɖ: String,
});
const model = mongoose.model("antiwords", antiwordsSchema);
module.exports = model;
