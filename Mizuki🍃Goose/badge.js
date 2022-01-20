var mongoose = require("mongoose");
var BadgeMizukiSchema = new mongoose.Schema({
  id: String,
  badge: String,
  limits: Number,
  CurrentLimitTime: Number,
  PermanentLimitTime: Number,
});
module.exports = mongoose.model("Badge", BadgeMizukiSchema);
