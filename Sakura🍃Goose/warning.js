var mongoose = require("mongoose");
var WarningSakuraSchema = new mongoose.Schema({
  ID: String,
  serverID: String,
  warnings: Number,
});
module.exports = mongoose.model("Warning", WarningSakuraSchema);
