
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
            id:{
                type:DataTypes.INTEGER.UNSIGNED,
                autoIncrement:true,
                primaryKey:true,
            },
        
            name:{
                type:DataTypes.STRING(100),
                allowNull:false,
                },
            
            cpf:{
                type:DataTypes.STRING(100),
                allowNull: false,
            },
        celular:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        birthdate:{
            type:DataTypes.DATE
        },
        email:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        
        is_admin:{
            type:DataTypes.BOOLEAN
        },
        createdAt:{
            type:DataTypes.DATE
        },
        modifiedAt:{
            type:DataTypes.DATE
        }
    },
        {
            tableName:"users",
            timestamps: false,
    
        })
  
    return User;
  };
  