const db = require("../config/sequelize");
const Sequelize = require("sequelize");

const Product = db.define(
  "Product",
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
    description:Sequelize.DataTypes.STRING(200),
    image:Sequelize.STRING(100),
    price: {
      type: Sequelize.DataTypes.DECIMAL(10, 2).UNSIGNED,
      allowNull: false,
      size: Sequelize.DataTypes.STRING(100),
      department: Sequelize.DataTypes.STRING(100),
      rating: Sequelize.DataTypes.DECIMAL(10, 2).UNSIGNED,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;
