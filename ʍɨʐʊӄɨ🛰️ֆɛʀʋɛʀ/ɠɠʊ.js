try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { DataTypes } = require(`sequelize`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const sequelize = _𝔏𝔞𝔟_.POSTQL;
  const User = sequelize.define(
    `User`,
    {
      JID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: `Users`,
    }
  );
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  async function addUser(jid = null) {
    User.findOrCreate({
      where: {
        JID: jid,
      },
    });
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  async function getUser(jid = null) {
    var Msg = await User.findAll({
      where: {
        JID: jid,
      },
    });

    if (Msg.length < 1) {
      return false;
    } else {
      return true;
    }
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  module.exports = {
    User: User,
    addUser: addUser,
    getUser: getUser,
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
