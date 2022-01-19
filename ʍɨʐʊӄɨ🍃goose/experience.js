var mongoose = require("mongoose");
var UsersMizukiSchema = new mongoose.Schema({
  did: String,
  xp: Number,
  level: Number,
});
module.exports = mongoose.model("Experience", UsersMizukiSchema);
