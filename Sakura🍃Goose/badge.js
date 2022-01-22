var mongoose = require("mongoose");
var BadgeSakuraSchema = new mongoose.Schema({
  ID: String,
  Badge: String,
  value: String,
  Limits: Number,
  CurrentLimitTime: Number,
  PermanentLimitTime: Number,
});
module.exports = mongoose.model("Badge", BadgeSakuraSchema);
