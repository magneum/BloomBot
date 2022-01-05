`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;

const Linklist = sequelize.define(
  `Linklist`,
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
    tableName: `Linklist`,
  }
);

async function addLinklistUser(jid = ``, GrpId = ``) {
  Linklist.findOrCreate({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
}

async function getLinklistUser(jid = ``, GrpId = ``) {
  var Msg = await Linklist.findAll({
    where: {
      JID: ``,
      GRPID: GrpId,
    },
  });

  if (Msg.length < 1) {
    var Msg = await Linklist.findAll({
      where: {
        JID: jid,
        GRPID: ``,
      },
    });

    if (Msg.length < 1) {
      var Msg = await Linklist.findAll({
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

async function removeLinklistUser(jid = ``, GrpId = ``) {
  var Msg = await Linklist.findAll({
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
  Linklist: Linklist,
  addLinklistUser: addLinklistUser,
  getLinklistUser: getLinklistUser,
  removeLinklistUser: removeLinklistUser,
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
