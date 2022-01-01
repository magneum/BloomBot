try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { DataTypes } = require(`sequelize`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const sequelize = _𝔏𝔞𝔟_.POSTQL;
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
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
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  async function addCoolistUser(jid = ``, GrpId = ``) {
    Coolist.findOrCreate({
      where: {
        JID: jid,
        GRPID: GrpId,
      },
    });
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
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
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
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
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  module.exports = {
    Coolist: Coolist,
    addCoolistUser: addCoolistUser,
    getCoolistUser: getCoolistUser,
    removeCoolistUser: removeCoolistUser,
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
