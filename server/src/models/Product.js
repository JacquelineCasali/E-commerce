const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);

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
    description: Sequelize.DataTypes.STRING(200),
    image: Sequelize.DataTypes.STRING(100),
    price: {
      type: Sequelize.DataTypes.DECIMAL(10, 2).UNSIGNED,
      allowNull: false,
      size: Sequelize.DataTypes.STRING(100),
      department: Sequelize.DataTypes.STRING(100),
      rating: Sequelize.DataTypes.DECIMAL(10, 2).UNSIGNED,
      status: Sequelize.DataTypes.ENUM("Ativo", "Inativo"),
      lastChange: Sequelize.DataTypes.DATE,
    },
  },

  {
    timestamps: false,
    tablename: "products",
  }
);

module.exports = Product;
