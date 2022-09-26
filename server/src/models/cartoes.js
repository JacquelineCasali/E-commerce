const db=require("../config/sequelize");
const Sequelize = require("sequelize");



const cartoes=db.define("cartoes",{
    
        id:{
            type:Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
        nome:{
            type:Sequelize.DataTypes.STRING(100),
            // nao permite valor nulo allowNull:false,
            allowNull:false, 
        },
        numero:{
            type:Sequelize.DataTypes.STRING(50),
            allowNull:false,
            },
        
        cvc:{
            type:Sequelize.DataTypes.DECIMAL(3),
            allowNull: false,
        },
      data:{
        type:Sequelize.DataTypes.DATE,
        // allowNull: false,
    },
    cpf:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull: false,
    },
    telefone:{
        type:Sequelize.DataTypes.STRING(50)
    },


     created_at:{
        type:Sequelize.DataTypes.DATE,
    },

    // user_id:{
    //     type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    // },

     modified_at:{
        type:Sequelize.DataTypes.DATE
    }
},
    {
        // tableName:"cartoes",
        timestamps: false,

    });


module.exports=cartoes;