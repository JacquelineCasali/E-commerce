const db=require("../config/sequelize");
const Sequelize = require("sequelize");

const Usuario=db.define("Usuario",{
    
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
    
        name:{
            type:DataTypes.STRING(100).NOT.NULL,
            },
        
        cpf:{
            type:DataTypes.STRING(100).NOT.NULL,
            allowNull: false,
        },
    celular:{
        type:DataTypes.STRING(100).NOT.NULL,
        allowNull: false,
    },
    birthdate:{
        type:DataTypes.DATE
    },
    email:{
        type:DataTypes.STRING(100).NOT.NULL,
        allowNull: false,
    },
    
    is_admin:{
        type:DataTypes.DEFAULT
    },
    createdAt:{
        type:DataTypes.DATE
    },
    modifiedAt:{
        type:DataTypes.DATE
    }
},
    {
        tableName:"usuarios_db",
        timestamps: false,

    });


module.exports=Usuario;