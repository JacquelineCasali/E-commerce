
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define(
      "Admin",
      {
        
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(80),
            allowNull: false,
        }
      },
  
      {
        timestamps: false,
        tablename: "admins"
      }
    );
  
    return Admin;
  };
  