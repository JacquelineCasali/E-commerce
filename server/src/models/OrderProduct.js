const Sequelize = require("sequelize");
const configDB = require("../config/database");
const Order = require("./Order");
const Product = require("./Product")
const db = new Sequelize(configDB);

const OrderProduct = db.define(
  "OrderProduct",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    product_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    quantity: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    
  },

  {
    timestamps: false,
    tablename: "order_products",
  }
);

OrderProduct.associate = (models) => {
  OrderProduct.belongsTo(models.Oder);
  OrderProduct.belongsTo(models.Product);
};

module.exports = OrderProduct;
