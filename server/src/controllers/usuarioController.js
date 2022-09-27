const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const User=require("../models/User")


const userController = {
  
 show: async (req,res)=>{
  const {id}=req.params;
    try{


const userResult= await db.query("SELECT * FROM  users WHERE id= :id",{
  replacements:{
    id:id
  },
  type:Sequelize.QueryTypes.SELECT,
})

console.log(userResult)
if(userResult.length===0){
  throw Error ("Nenhum usuário encontrado")
}
return res.render("usuario", { title: "Usuário", user:userResult[0] });
  }catch(error){
    console.log(error);
        res.render("error",{title:"Ops!",message: "Nenhum usuário encontrado",

    })
    
  }
        
  },
 
update: async(req,res)=>{
    const {id}= req.params;
     const {nome,cpf,celular,nascimento,email, sexo,rg,telefone,receber,instagram}=req.body;
     try {

      const users=await User.update({
        nome,cpf,celular,nascimento,email, sexo,rg,telefone,receber,instagram
      },
      {
        where:{ id },
      }
      );
  
console.log(users);
//res.send();

 res.render("success", {
        title: "Usuário atualizado",
       message: `Usuário atualizado com sucesso`,
     });
}catch(error){
      console.log(error);
      res.render("error",{title:"Ops!",message: "Error ao atualizar usuário"})
   
     }
},
  }


module.exports = userController;