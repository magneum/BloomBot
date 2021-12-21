// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const DataBase = sequelize.define(
  `DataBase`,
  {
    chat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    switched: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `ON`,
    },
    greetingType: {
      type: DataTypes.TEXT,
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: `PostDataBase`,
  }
);
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function getMessage(jid = null, type) {
  var Msg = await DataBase.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    return Msg[0].dataValues;
  }
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function checkSettings(jid = null, type) {
  var Msg = await DataBase.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    if (Msg[0].dataValues.switched === `ON`) {
      return `ON`;
    } else {
      return `OFF`;
    }
  }
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function changeSettings(groupJid = null, isWorking) {
  await DataBase.update(
    {
      switched: isWorking,
    },
    {
      where: {
        chat: groupJid,
      },
    }
  );
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function setWelcome(jid = null, text = null) {
  DataBase.findOrCreate({
    where: {
      chat: jid,
      greetingType: `setwelcome`,
    },
    defaults: {
      chat: jid,
      switched: `ON`,
      greetingType: `setwelcome`,
      message: text,
    },
  });
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function setGoodbye(jid, text = null) {
  DataBase.findOrCreate({
    where: {
      chat: jid,
      greetingType: `setgoodbye`,
    },
    defaults: {
      chat: jid,
      switched: `ON`,
      greetingType: `setgoodbye`,
      message: text,
    },
  });
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function setAntilink(jid, text = null) {
  DataBase.findOrCreate({
    where: {
      chat: jid,
      greetingType: `setantilink`,
    },
    defaults: {
      chat: jid,
      switched: `ON`,
      greetingType: `setantilink`,
      message: text,
    },
  });
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
async function deleteMessage(jid = null, type = null) {
  var Msg = await DataBase.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });
  if (Msg.length < 1) {
    return false;
  } else {
    return await Msg[0].destroy();
  }
}
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
module.exports = {
  DataBase: DataBase,
  setWelcome: setWelcome,
  setGoodbye: setGoodbye,
  getMessage: getMessage,
  setAntilink: setAntilink,
  deleteMessage: deleteMessage,
  checkSettings: checkSettings,
  changeSettings: changeSettings,
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
