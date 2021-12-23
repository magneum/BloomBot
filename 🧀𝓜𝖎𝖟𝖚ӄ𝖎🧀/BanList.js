const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;

const Banlist = sequelize.define(
  "Banlist",
  {
    JID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GRPID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Banlist",
  }
);

async function addBanlistUser(jid = "", GrpId = "") {
  Banlist.findOrCreate({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
}

async function getBanlistUser(jid = "", GrpId = "") {
  var Msg = await Banlist.findAll({
    where: {
      JID: "",
      GRPID: GrpId,
    },
  });

  if (Msg.length < 1) {
    var Msg = await Banlist.findAll({
      where: {
        JID: jid,
        GRPID: "",
      },
    });

    if (Msg.length < 1) {
      var Msg = await Banlist.findAll({
        where: {
          JID: jid,
          GRPID: GrpId,
        },
      });

      if (Msg.length < 1) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
}

async function removeBanlistUser(jid = "", GrpId = "") {
  var Msg = await Banlist.findAll({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
  if (Msg.length < 1) {
    return false;
  } else {
    return await Msg[0].destroy();
  }
}

module.exports = {
  Banlist: Banlist,
  addBanlistUser: addBanlistUser,
  getBanlistUser: getBanlistUser,
  removeBanlistUser: removeBanlistUser,
};
