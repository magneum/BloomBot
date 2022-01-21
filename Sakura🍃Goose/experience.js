var mongoose = require("mongoose");
var UsersSakuraSchema = new mongoose.Schema({
  ID: String,
  xp: Number,
  level: Number,
});
module.exports = mongoose.model("Experience", UsersSakuraSchema);
