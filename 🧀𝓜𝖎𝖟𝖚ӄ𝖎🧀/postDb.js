`🐙============================================================================================================================<⚡>`;
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
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
`🐙============================================================================================================================<⚡>`;
