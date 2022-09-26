const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const User= require("../models/User")
const fs=require("fs");
const path=require("path")
const files=require("../helpers/files")
const upload = require("../config/upload");


// var users=require("../data/users.json");
// users=users.usuarios;
// const userJson=fs.readFileSync(

//   path.join(__dirname,"..","data","ecommerce.sql"),
//   "utf-8"
// )
// const users=JSON.parse(userJson);


const emailController={

edit:async (req,res)=>{
  // console.log(req.session.email)
  const {id}= req.params;
  try{ 
  const userResult= await db.query("SELECT * FROM  users WHERE id= :id",{
    replacements:{
      id:id
    },
    type:Sequelize.QueryTypes.SELECT,
  })

   console.log(userResult)
    return res.render("editaremail", {
      title: "Editar Email",
      user:userResult[0]
            })
  } catch(error){
    console.log(error);
    return res.render("error",
    {title:"Ops!",message: "Nenhum Email encontrado",
   
     })
  }
 
  },
 
  
  
    
    
    
    // update-atualizar um endereco
        update:(req,res)=>{
        const {id}= req.params
        const {email, novoEmail,confirmaçãoEmail}=req.body;
        const userResult= users.find((user)=>
        user.id===parseInt(id));
        if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhum E-mail encontrado",
              });
            }

         
            
    const updateUser=userResult;
    if(email) updateUser.email=email;
    if(novoEmail) updateUser.confirmaçãoEmail=novoEmail;
    if(confirmaçãoEmail) updateUser.confirmaçãoEmail=confirmaçãoEmail;
    fs.writeFileSync(
      path.join(__dirname,"..","data","ecommerce.sql"),
      // conteudo do novo arquivo convertendo o array em string
      // JSON.stringify(users)
      );
    
    // req.session.email=updateUser.email
    return res.render("success", {
        title: "Email atualizado",
        message: `Email do usuário ${updateUser.nome} atualizado com sucesso`,
      });
    },
    






}
    
  





 module.exports=emailController;
 

