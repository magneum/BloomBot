var mongoose = require("mongoose");
var BadgeMizukiSchema = new mongoose.Schema({
  id: String,
  badge: String,
  limits: Number,
  timeout: Number,
  limitimeout: Number,
});
module.exports = mongoose.model("Badge", BadgeMizukiSchema);
