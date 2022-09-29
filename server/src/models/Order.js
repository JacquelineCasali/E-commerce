const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);

const Order = db.define(
  "Order",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    created_at: Sequelize.DataTypes.DATE,
    updated_at: Sequelize.DataTypes.DATE,
    status: {
      type: Sequelize.DataTypes.ENUM("processando", "a caminho", "entregue"),
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    timestamps: "false",
    tablename: "orders",
  }
);

Order.associate = (models) => {
  Order.belongsTo(models.User, {
    foreingKey: "user_id",
    as: "users",
    through: models.User.OrderProduct,
  });
};

module.exports = Order;
