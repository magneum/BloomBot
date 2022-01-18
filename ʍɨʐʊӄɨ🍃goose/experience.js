var mongoose = require("mongoose");
var UsersMizukiSchema = new mongoose.Schema({
  did: String,
  serverID: String,
  xp: Number,
  level: Number,
});
module.exports = mongoose.model("Experience", UsersMizukiSchema);
