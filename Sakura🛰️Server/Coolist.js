`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;

const Coolist = sequelize.define(
  `Coolist`,
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
    tableName: `Coolist`,
  }
);

async function addCoolistUser(jid = ``, GrpId = ``) {
  Coolist.findOrCreate({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
}

async function getCoolistUser(jid = ``, GrpId = ``) {
  var Msg = await Coolist.findAll({
    where: {
      JID: ``,
      GRPID: GrpId,
    },
  });

  if (Msg.length < 1) {
    var Msg = await Coolist.findAll({
      where: {
        JID: jid,
        GRPID: ``,
      },
    });

    if (Msg.length < 1) {
      var Msg = await Coolist.findAll({
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

async function removeCoolistUser(jid = ``, GrpId = ``) {
  var Msg = await Coolist.findAll({
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
  Coolist: Coolist,
  addCoolistUser: addCoolistUser,
  getCoolistUser: getCoolistUser,
  removeCoolistUser: removeCoolistUser,
};
`🍹`;
`🍹`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)ֆǟӄʊʀǟ 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
