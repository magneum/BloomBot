let mongoose = require("mongoose");
let groupSchema = new mongoose.Schema({
  id: { type: String, require: true, unique: true },
  events: { type: String, default: "false" },
  invite: { type: String, default: "false" },
  nsfw: { type: String, default: "false" },
  mod: { type: String, default: "false" },
});
let group = mongoose.model("Group", groupSchema);
module.exports = group;
