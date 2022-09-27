const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const Emailsenha= require("../models/Emailsenha")
const fs=require("fs");
const path=require("path")
const files=require("../helpers/files")
const uploads = require("../config/uploads");



const emailController={

edit:async (req,res)=>{
  // console.log(req.session.email)
  const {id}= req.params;
  try{ 
  const userResult= await db.query("SELECT * FROM  emailsenha WHERE id= :id",{
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
    {title:"Ops!",message: " Email não encontrado",
   
     })
  }
 
  },
     
    // update-atualizar um endereco
        update: async (req,res)=>{
        const {id}= req.params
        const {novoemail,confirmeemail}=req.body;
        try{
       
          const users = await Emailsenha.update(
            {
              novoemail,confirmeemail
              
              },
            {
              where:{ user_id:id },
            });
                              
           console.log(users);
            //res.send();
            
            res.render("success", {
              title: "Email atualizado",
        message: `Email do usuário  atualizado com sucesso`,
               });
            
                }catch (error){
              console.log(error);
              return res.render("error",{
              title: "Ops!",
              message: "Nenhum E-mail encontrado",
             
               }
            )}
                
            },
             
    
}
    
  





 module.exports=emailController;
 

