const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  vlkyreֆɨɖ: String,
  vlkyreƈɦɨɖ: String,
});
const messageModel = (module.exports = mongoose.model(
  "messagelogs",
  messageSchema
));
