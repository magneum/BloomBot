var mongoose = require("mongoose");
var EconomySakuraSchema = new mongoose.Schema({
  ID: String,
  money: Number,
  daily: Number,
  timeout: Number,
  fishdone: Number,
  fishtimeout: Number,
  workdone: Number,
  worktimeout: Number,
});
module.exports = mongoose.model("Economy", EconomySakuraSchema);
