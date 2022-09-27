const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);
const Department = db.define(
  "Department",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "department",
    timestamps: false,
  }
);
module.exports = Department;
