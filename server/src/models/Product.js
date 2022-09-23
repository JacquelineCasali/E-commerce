
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: DataTypes.STRING(200),
      image: DataTypes.STRING(100),
      price: {
        type: DataTypes.DECIMAL(10, 2).UNSIGNED,
        allowNull: false,
        size: DataTypes.STRING(100),
        department: DataTypes.STRING(100),
        rating: DataTypes.DECIMAL(10, 2).UNSIGNED,
        status: DataTypes.ENUM("Ativo", "Inativo"),
        lastChange:DataTypes.DATE
      },
    },

    {
      timestamps: false,
      tablename: "products"
    }
  );

  return Product;
};
