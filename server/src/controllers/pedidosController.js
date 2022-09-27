const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)

const pedidosController = {
  show:async (req, res) => {
    const { id }= req.params
    try{


      //orders
      // const userResult= await db.query(" SELECT * FROM enderecos INNER  orders ON enderecos.id =enderecos.orders_id",{
    const userResult= await db.query("SELECT * FROM enderecos  WHERE id= :id",{
        replacements:{
          id:id
        },
        type:Sequelize.QueryTypes.SELECT,
      })
    
    console.log(userResult)
    if(userResult.length===0){
      throw Error ("Nenhum pedido encontrado")
    }
    return res.render("pedidos", { title: "Meus Pedidos", user:userResult[0] });

   }catch(error){
        console.log(error);
            res.render("error",{title:"Ops!",message: "Nenhum pedido encontrado",
    
        })
    
  }
},
}
module.exports = pedidosController;