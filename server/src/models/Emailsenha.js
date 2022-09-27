const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)

// const db=require("../config/sequelize");




const Emailsenha=db.define("emailsenha",{
    
        id:{
            type:Sequelize.DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
       
 
      novoemail:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },
    confirmeemail:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },

    novasenha:{
    type:Sequelize.DataTypes.STRING(200),
    // allowNull: false,
},
confirmesenha:{
    type:Sequelize.DataTypes.STRING(200),
    // allowNull: false,
},  
    createdAt:{
        type:Sequelize.DataTypes.DATE
    },
    modifiedAt:{
        type:Sequelize.DataTypes.DATE
    },
    
        user_id:{
        
        type:Sequelize.DataTypes.INTEGER.UNSIGNED,
    }
},
    {
        tableName:"emailsenha",
    //    desativa a data de criação 
        // timestamps: false,

    });


  
   
    



module.exports=Emailsenha;