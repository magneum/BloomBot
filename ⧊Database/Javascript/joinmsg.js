const mongoose = require("mongoose");
const JoinMsgSchema = new mongoose.Schema({
  JoinMsg: {
    type: String,
  },
  vlkyreֆɨɖ: String,
});
const MessageModel = (module.exports = mongoose.model(
  "joinmsg",
  JoinMsgSchema
));
