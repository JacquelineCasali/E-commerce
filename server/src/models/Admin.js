const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);
const Admin = db.define(
  "Admin",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
    senha: {
      type: Sequelize.DataTypes.STRING(80),
      allowNull: false,
    },
  },

  {
    timestamps: false,
    tablename: "admins",
  }
);

module.exports = Admin;
