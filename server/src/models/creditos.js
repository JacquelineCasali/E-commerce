const db=require("../config/sequelize");
const Sequelize = require("sequelize");


const Creditos=db.define("creditos",{
    
        id:{
            type:Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
        createdAt:{
            type:Sequelize.DataTypes.DATE,
            allowNull:false,
        },

        historico:{
            type:Sequelize.DataTypes.STRING(50),
            allowNull:false,
            },
        
            tipodelancamento:{
                type:Sequelize.DataTypes.STRING(50),
                allowNull:false,
                },
                preco:{
            type:Sequelize.DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
   
    // user_id:{
    //     type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    // },

   
},
    {
        tableName:" creditos",
        timestamps: false,

    });


module.exports=Creditos;