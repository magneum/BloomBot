require("python-format-js");

exports.isMember = async (chatId, groupMembers) => {
  var isMember = false;
  if (!(chatId === undefined)) {
    for (const index in groupMembers) {
      if (chatId == groupMembers[index].jid.split("@")[0]) {
        isMember = true;
      }
    }
    return isMember;
  } else {
    return isMember;
  }
};
