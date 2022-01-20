var mongoose = require("mongoose");
var BadgeMizukiSchema = new mongoose.Schema({
  ID: String,
  Badge: String,
  value: String,
  Limits: Number,
  CurrentLimitTime: Number,
  PermanentLimitTime: Number,
});
module.exports = mongoose.model("Badge", BadgeMizukiSchema);
