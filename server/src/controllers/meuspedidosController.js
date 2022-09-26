const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)


const meuspedidos = {
  //   index: (req, res) => {
     
  //   return res.render("meuspedidos", { title: "Lista de pedidos"});
  
  // },
  show: async (req,res)=>{
    const {id}=req.params;
      try{
  // const users= await db.query(`SELECT * FROM  users WHERE id= %{id}`,{
  //   type:Sequelize.QueryTypes.SELECT,
  // })
  // const users = await 
  const userResult= await db.query("SELECT * FROM  orders WHERE id= :id",{
    replacements:{
      id:id
    },
    type:Sequelize.QueryTypes.SELECT,
  })
  
  console.log(userResult)
  if(userResult.length===0){
    throw Error ("Nenhum Pedido Encontrado")
  }
  let data= new Date(userResult.data)
       let dia=data.getDate()
       let mes=data.getMonth()+1
       let ano=data.getFullYear()
        data=`${ano}-${mes}-${dia}`
// const user={
// ...userResult,
// data,
// }
  return res.render("meuspedidos", { title: "Pedidos", user:userResult[0] });
    }catch(error){
      console.log(error);
          res.render("error",{title:"Ops!",message: "Nenhum Pedido encontrado",
  
      })
      
    }
          
    },



}


module.exports = meuspedidos;
