const Sequelize=require("sequelize");
const database = require("../config/sequelize");

const Image=database.define(
    "Image",
    {

id:{
    type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    autoIncremente:true,
    primaryKey:true
},

// caminho da imagem
path:{
    type: Sequelize.DataTypes.STRING(50),
    // campo nao pode ser vazio
    allowNull:false,
},
size:{
    type: Sequelize.DataTypes.INTEGER.UNSIGNED
},
extension:{
    type: Sequelize.DataTypes.STRING(10),
},

},
{
    //criar automaticamente o creat e o u´date
   underscored:true,

});

module.exports=Image;