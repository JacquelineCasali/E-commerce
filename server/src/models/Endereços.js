const db=require("../config/sequelize");
const Sequelize = require("sequelize");


const Enderecos=db.define("enderecos",{
    
        id:{
            type:Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
    
        rua:{
            type:Sequelize.DataTypes.STRING(100),
            allowNull:false,
            },
        
            bairro:{
            type:Sequelize.DataTypes.STRING(100),
            allowNull: false,
        },
        numero:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },
    cidade:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },

cep:{
    type:Sequelize.DataTypes.INTEGER,
    allowNull: false,
},
    
    is_admin:{
        type:Sequelize.DataTypes.BOOLEAN
    },
    complemento:{
    type:Sequelize.DataTypes.STRING(100),
},
    createdAt:{
        type:Sequelize.DataTypes.DATE
    },
    modifiedAt:{
        type:Sequelize.DataTypes.DATE
    }
},
    {
        tableName:"enderecos",
        timestamps: false,

    });


module.exports=Enderecos;