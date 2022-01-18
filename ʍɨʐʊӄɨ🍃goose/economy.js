var mongoose = require("mongoose");
var EconomyMizukiSchema = new mongoose.Schema({
  did: String,
  money: Number,
  daily: Number,
  timeout: Number,
  fish: Number,
  fishdone: Number,
  fishtimeout: Number,
});
module.exports = mongoose.model("Economy", EconomyMizukiSchema);
