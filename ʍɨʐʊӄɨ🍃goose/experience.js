var mongoose = require("mongoose");
var UsersMizukiSchema = new mongoose.Schema({
  did: String,
  serverID: String,
  xp: Number,
  level: Number,
  message: Number,
  warns: Number,
  avatarURL: String,
});
module.exports = mongoose.model("Experience", UsersMizukiSchema);
