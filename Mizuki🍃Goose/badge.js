var mongoose = require("mongoose");
var BadgeMizukiSchema = new mongoose.Schema({
  ID: Number,
  Badge: String,
  Limits: Number,
  CurrentLimitTime: Number,
  PermanentLimitTime: Number,
});
module.exports = mongoose.model("Badge", BadgeMizukiSchema);
