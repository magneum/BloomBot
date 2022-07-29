const mongoose = require("mongoose");
const guildSchema = new mongoose.Schema({
  vlkyreֆɨɖ: String,
  vlkyreƈɦɨɖ: String,
});
const guildModel = (module.exports = mongoose.model(
  "guildupdates",
  guildSchema
));
