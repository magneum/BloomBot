var mongoose = require("mongoose");
var EcoMizukiSchema = new mongoose.Schema({
  did: String,
  bal: Number,
  daily: Number,
  multiplier: Number,
});
module.exports = mongoose.model("EcoMizuki", EcoMizukiSchema);
