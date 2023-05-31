const dbConfig = require("./dbConfig");
const { DataTypes, Model } = require("sequelize");

const sequelize = dbConfig.DATABASE;

class Cred extends Model {}

Cred.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    tableName: "Creds",
    timestamps: false,
  }
);

class Key extends Model {}

Key.init(
  {
    key: {
      type: DataTypes.STRING(1000000),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(1000000),
    },
    type: {
      type: DataTypes.STRING(1000000),
    },
  },
  {
    sequelize,
    tableName: "Keys",
    timestamps: false,
  }
);

module.exports = { Cred, Key };
